<template>
  <div>
    <div class="black-bg" v-if="modal === true">
      <div class="white-bg">
        <button type="button" @click="modal = false" style="float: right">X</button>
        <h2>수량을 변경 해주세요</h2>
        <div>
          <label for="quantity">수량:</label>
          <button @click="decrementQuantity">-</button>
          <input type="number" id="quantity" v-model="quantity" readonly />
          <button @click="incrementQuantity">+</button>
        </div>
        <hr />
        <button type="button" @click="modal = false" style="margin-right: 10px">취소</button>
        <button type="button" @click="quantityChange">변경</button>
      </div>
    </div>
    <h1>장바구니</h1>
    <table>
      <thead>
        <tr>
          <th><input type="checkbox" v-model="selectAll" @click="toggleAllSelected" /></th>
          <th>상품명</th>
          <th>판매</th>
          <th>수량</th>
          <th>주문금액</th>
          <th>주문관리</th>
          <th>배송비/배송 형태</th>
        </tr>
      </thead>
      <tbody>
        <CartList
          :cartItems="cartItems"
          :quantityBtn="quantityBtn"
          :delCartBtn="delCartBtn"
          :getImageUrl="getImageUrl"
          :addCommas="addCommas"
        ></CartList>
        <!-- <tr v-for="(cart, index) in cartItems" :key="index" class="cart-item">
          <td><input type="checkbox" v-model="cart.selected" /></td>
          <td class="item-info">
            <router-link :to="{ name: 'productDetailView', query: { id: cart.productId } }">
              <span><img :src="getImageUrl(cart.img)" style="width: 80px" /></span>
              <br />
            </router-link>
            {{ cart.name }}
          </td>
          <td>{{ addCommas(cart.price) }}원</td>
          <td>{{ cart.cnt }}개</td>
          <td>{{ addCommas(cart.cnt * cart.price) }}원</td>
          <td class="item-actions">
            <button
              type="button"
              @click="quantityBtn(cart.cnt, cart.cartId)"
              style="margin-right: 5px"
            >
              수량
            </button>
            <button type="button" @click="delCartBtn(cart.productId, index)">삭제</button>
          </td>
          <td>
            택배배송 <br />
            <span style="font-weight: bold">배송비무료</span> <br />
            0원 이상 무료
          </td>
        </tr> -->
      </tbody>
    </table>
    <br />
    <div style="text-align: center">
      <!-- <router-link :to="{ name: 'OrderView', query: { id: route.query.id } }"> -->
      <button
        @click="orderSelectedProducts"
        type="button"
        style="
          cursor: pointer;
          font-size: 20px;
          padding: 10px 20px;
          color: white;
          background-color: black;
        "
      >
        주문하기
      </button>
      <!-- </router-link> -->
    </div>

    <!-- 다른 장바구니 아이템들을 동일한 방식으로 추가할 수 있습니다. -->
  </div>
</template>
<script lang="ts">
import axios from 'axios'
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import router from '@/router'
import CartList from '@/components/CartList.vue'

interface Cart {
  cartId: number
  cnt: number
  img: string
  memberId: number
  name: string
  price: number
  productId: number
  selected: boolean
}

function getImageUrl(name: string): string {
  return new URL(`/src/assets/images/${name}`, import.meta.url).href
}

// function parseJwt(token: string | null): string | null {
//   if (token !== null) {
//     var base64Url = token.split('.')[1]
//     var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
//     var jsonPayload = decodeURIComponent(
//       atob(base64)
//         .split('')
//         .map(function (c) {
//           return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
//         })
//         .join('')
//     )
//     return JSON.parse(jsonPayload)
//   } else {
//     return null
//   }
// }

export default {
  setup() {
    const route = useRoute()
    const cartItems = ref<Cart[]>([])
    const totalPrice = ref(0)
    const selectedProducts = ref<Cart[]>([])
    const selectAll = ref(false)
    const modal = ref(false)
    const quantity = ref(1)
    const cartId = ref(0)
    const addCommas = (num: number) => {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
    // 장바구니 정보
    axios
      .get('/api/cartList')
      .then((response) => {
        cartItems.value = response.data
      })
      .catch((error) => {
        console.log(error)
      })
    const delCartBtn = (productId: number, index: number): void => {
      const confirmed = window.confirm('삭제하시겠습니까?')
      if (confirmed) {
        axios
          .post('/api/deleteCart', { productId: productId })
          .then((res) => {
            console.log(res)
          })
          .catch((error) => console.log(error))
        cartItems.value.splice(index, 1)
      }
    }
    const orderSelectedProducts = () => {
      // 선택된 상품의 ID 목록을 가져오기
      const selectedProductIds = cartItems.value
        .filter((cart) => cart.selected)
        .map((cart) => cart.productId)
      // 선택된 상품이 없을 경우 알림
      if (selectedProductIds.length === 0) {
        alert('선택된 상품이 없습니다.')
        return
      }
      // 주문 페이지로 이동
      router.push({
        name: 'OrderView',
        query: {
          id: route.query.id,
          products: selectedProductIds.join(',')
        }
      })
    }
    watchEffect(() => {
      if (cartItems.value.every((cart) => cart.selected)) {
        selectAll.value = true
      } else {
        selectAll.value = false
      }
    })
    const toggleAllSelected = () => {
      cartItems.value.forEach((cart) => {
        cart.selected = !selectAll.value
      })
    }
    // 증가
    const incrementQuantity = (): void => {
      quantity.value++
    }
    // 감소
    const decrementQuantity = (): void => {
      if (quantity.value > 1) {
        quantity.value--
      }
    }
    const quantityBtn = (cnt: number, id: number) => {
      cartId.value = id
      modal.value = true
      quantity.value = cnt
    }
    const quantityChange = () => {
      const confirmed = window.confirm('변경하시겠습니까?')
      if (confirmed) {
        axios
          .post('api/updateCart', { cartId: cartId.value, cnt: quantity.value })
          .then((res) => {
            if (res.data === 'success') {
              location.reload()
            }
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
    return {
      cartItems,
      route,
      totalPrice,
      getImageUrl,
      delCartBtn,
      selectedProducts,
      orderSelectedProducts,
      selectAll,
      toggleAllSelected,
      addCommas,
      modal,
      quantity,
      incrementQuantity,
      decrementQuantity,
      quantityBtn,
      quantityChange,
      cartId
    }
  },
  components: { CartList }
}
</script>
<style scoped>
.container {
  display: flex;
}

.left {
  flex: 1;
}

.right {
  flex: 3;
  overflow-y: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

th {
  background-color: #f2f2f2;
}

td {
  vertical-align: middle;
}
.black-bg label {
  display: block;
}

.black-bg label span {
  display: inline-block;
  text-align: left;
  width: 150px;
}

.black-bg {
  display: flex;
  /* align-items: center; */
  text-align: center;
  width: 90%;
  /* height: 100%; */
  /* background-color: rgba(0, 0, 0, 0.432); */
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid black;
}

.modal-exit-btn {
  margin-top: 30px;
}

.modal-exit-btn:hover {
  cursor: pointer;
}
</style>
