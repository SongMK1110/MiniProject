<template>
  <div>
    <div class="black-bg" v-if="modal === true">
      <div class="white-bg">
        <button type="button" @click="modal = false" style="float: right">X</button>
        <h1>신규 배송지</h1>
        <label><span>수령인</span> <input type="text" v-model="name" /></label> <br />
        <label><span>배송지명 (선택)</span> <input type="text" v-model="addrName" /></label> <br />
        <label><span>휴대전화</span> <input type="text" v-model="phone" /></label> <br />
        <label
          ><span>배송지 주소</span>
          <input type="text" placeholder="우편번호" v-model="zonecode" readonly />
          <button id="postcode" @click="openPostcode">검색</button><br />
          <span></span><input type="text" v-model="roadAddress" placeholder="주소" readonly /><br />
          <span></span><input type="text" v-model="detailAddress" placeholder="상세주소"
        /></label>

        <hr />
        <button type="button" @click="modal = false" style="margin-right: 10px">취소</button>
        <button type="button" @click="saveAddr">저장</button>
      </div>
    </div>
    <h1>Order / Payment</h1>
    <form>
      <fieldset>
        <legend>배송지 정보</legend>
        <ul>
          <li>
            <label for="addr" class="title">배송지</label>
            <span v-for="(addr, i) in addrList" :key="i">
              <label>
                <input type="radio" name="chk_info" @click="addRadio(addr.addrId)" />
                {{ addr.addrName }}
              </label>
            </span>
            <button type="button" style="margin-left: 10px" @click="modal = true">
              신규 배송지 추가
            </button>
          </li>
          <li>
            <label for="tel2" class="title">이름 / 연락처</label>
            <p v-if="addrInfo">{{ addrInfo.name }} / {{ addrInfo.phone }}</p>
            <p v-else>선택해주세요</p>
          </li>
          <li>
            <label for="comment" class="title">주소</label>
            <p v-if="addrInfo">
              ({{ addrInfo.zipcode }}) {{ addrInfo.addr }} {{ addrInfo.addrDetail }}
            </p>
            <p v-else>선택해주세요</p>
          </li>
          <li>
            <label for="comment" class="title">배송 요청사항</label>
            <select style="width: 300px" v-model="req">
              <option value="배송 시 요청사항을 선택해주세요">
                배송 시 요청사항을 선택해주세요
              </option>
              <option value="부재 시 경비실에 맡겨주세요">부재 시 경비실에 맡겨주세요</option>
              <option value="부재 시 택배함에 넣어주세요">부재 시 택배함에 넣어주세요</option>
              <option value="부재 시 집 앞에 놔주세요">부재 시 집 앞에 놔주세요</option>
            </select>
          </li>
        </ul>
      </fieldset>
      <fieldset>
        <legend>주문 정보</legend>
        <table>
          <thead>
            <tr>
              <th>상품정보</th>
              <th>수량</th>
              <th>적립금</th>
              <th>상품 할인</th>
              <th>배송 그룹</th>
              <th>배송비</th>
              <th>주문금액</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in productList" :key="index" class="cart-item">
              <td class="item-info">
                <router-link :to="{ name: 'productDetailView', query: { id: product.productId } }">
                  <span><img :src="getImageUrl(product.img)" style="width: 80px" /></span>
                  <br />
                </router-link>
                {{ product.name }}
              </td>
              <td>{{ product.cnt }}개</td>
              <td>{{ addCommas(product.cnt * product.price * 0.01) }}원</td>
              <td>-0원</td>
              <td>그룹{{ index + 1 }}</td>
              <td>무료</td>
              <td>{{ addCommas(product.cnt * product.price) }}원</td>
            </tr>
          </tbody>
        </table>
      </fieldset>
      <fieldset>
        <legend>적립금 할인</legend>
        적립금 사용: <input type="text" v-model="useReserves" /> 현재 적립금 :
        <span v-if="reservesInfo">{{ reservesInfo.reserves }}</span>
      </fieldset>
      <fieldset>
        <legend>결제 정보</legend>
        <label style="padding-right: 10px"
          ><input
            type="radio"
            name="chk_info1"
            value="card"
            checked
            v-model="payMethod"
          />카드</label
        >
        <label style="padding-right: 10px"
          ><input
            type="radio"
            name="chk_info1"
            value="account"
            v-model="payMethod"
          />가상계좌</label
        >
        <label style="padding-right: 10px"
          ><input type="radio" name="chk_info1" value="phone" v-model="payMethod" />휴대폰</label
        >
      </fieldset>
      <div class="centered">
        <button
          @click="paymentBtn"
          type="button"
          style="
            cursor: pointer;
            font-size: 20px;
            padding: 10px 20px;
            color: white;
            background-color: black;
          "
        >
          {{ addCommas(getTotalPrice - useReserves) }}원 결제하기
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import router from '@/router'

interface Address {
  addrId: number
  memberId: number
  name: string
  zipcode: string
  addr: string
  addrDetail: string
  req: string
  phone: string
  def: string
  addrName: string
}

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

interface Order {
  name: string
  zipcode: string
  addr: string
  addrDetail: string
  req: string
  phone: string
  price: number
  paymentMethod: string
}

function getImageUrl(name: string) {
  return new URL(`/src/assets/images/${name}`, import.meta.url).href
}

export default {
  setup() {
    const addrList = ref<Address[]>([])
    const addrInfo = ref<Address>()
    const route = useRoute()
    const productList = ref<Cart[]>([])
    const req = ref<string>('배송 시 요청사항을 선택해주세요')
    const payMethod = ref<string>('card')
    const modal = ref(false)
    const zonecode = ref('')
    const roadAddress = ref('')
    const detailAddress = ref('')
    const name = ref('')
    const addrName = ref('')
    const phone = ref('')
    const reservesInfo = ref<{ reserves: number }>()
    const useReserves = ref(0)

    axios
      .get('/api/selectAddrList')
      .then((response) => {
        addrList.value = response.data
      })
      .catch((error) => {
        console.log(error)
      })

    const addCommas = (num: number) => {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    const addRadio = (id: number) => {
      axios
        .post('/api/selectAddrInfo', { addrId: id })
        .then((response) => {
          addrInfo.value = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    }

    const selectedProducts = ref<number[]>([])

    onMounted(async () => {
      // URL에서 products 파라미터 가져오기
      const productsParam = route.query.products

      if (productsParam) {
        const productIds = productsParam.toString().split(',').map(Number)
        selectedProducts.value = productIds
      }

      const searchParam = {
        ids: selectedProducts.value.join(',')
      }

      try {
        const response = await axios.get('api/selectCartProduct', {
          params: searchParam
        })
        productList.value = response.data
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    })

    const paymentBtn = async () => {
      if (addrInfo.value == undefined) {
        alert('배송지를 선택 해주세요')
      } else {
        if (req.value === '배송 시 요청사항을 선택해주세요') {
          alert('요청사항을 선택해주세요')
          return
        }
        const confirmed = window.confirm('결제하시겠습니까?')
        if (confirmed) {
          const orderData: Order = {
            name: addrInfo.value.name,
            addr: addrInfo.value.addr,
            addrDetail: addrInfo.value.addrDetail,
            phone: addrInfo.value.phone,
            zipcode: addrInfo.value.zipcode,
            req: req.value,
            price: getTotalPrice.value - useReserves.value,
            paymentMethod: payMethod.value
          }

          try {
            const orderResponse = await axios.post('/api/order', orderData)

            console.log(orderResponse)
            if (orderResponse.data !== -1) {
              const orderId = orderResponse.data

              const orderDetailData: {
                productId: number
                price: number
                cnt: number
                orderId: number
              }[] = []
              productList.value.forEach((data) => {
                const orderDetailDataObj = {
                  orderId: orderId,
                  productId: data.productId,
                  price: data.price,
                  cnt: data.cnt
                }

                orderDetailData.push(orderDetailDataObj)
              })

              const orderDetailResponse = await axios.post('/api/orderDetail', orderDetailData)

              console.log(orderDetailResponse)

              if (orderDetailResponse.data === 'success') {
                console.log('주문이 성공적으로 완료되었습니다.')
                router.push({ name: 'OrderListView', query: { id: route.query.id } })
              } else {
                console.error('상세 주문 정보 저장 실패')
              }
            } else {
              console.error('주문 저장 실패')
            }
          } catch (error) {
            console.error('주문 처리 중 오류 발생:', error)
          }
        }
      }
    }

    const getTotalPrice = computed(() => {
      return productList.value.reduce((total, product) => total + product.cnt * product.price, 0)
    })

    const openPostcode = () => {
      new window.daum.Postcode({
        oncomplete: (data: any) => {
          zonecode.value = data.zonecode
          roadAddress.value = data.roadAddress
        }
      }).open()
    }

    const saveAddr = () => {
      if (name.value === '') {
        alert('수령인을 입력해주세요')
        return
      }
      if (phone.value === '') {
        alert('휴대전화를 입력해주세요')
        return
      }
      if (zonecode.value === '') {
        alert('우편번호를 입력해주세요')
        return
      }
      if (roadAddress.value === '') {
        alert('주소를 입력해주세요')
        return
      }
      if (detailAddress.value === '') {
        alert('상세주소를 입력해주세요')
        return
      }

      const data = {
        name: name.value,
        addrName: addrName.value,
        phone: phone.value,
        zipcode: zonecode.value,
        addr: roadAddress.value,
        addrDetail: detailAddress.value
      }

      axios
        .post('api/insertAddr', data)
        .then((res) => {
          if (res.data === 'success') {
            location.reload()
          }
        })
        .catch((error) => {
          console.log(error)
        })

      console.log(data)
    }

    axios
      .get('/api/selectReserves')
      .then((response) => {
        console.log(response)
        reservesInfo.value = response.data
      })
      .catch((error) => {
        console.log(error)
      })

    watch(useReserves, (newValue) => {
      if (reservesInfo.value !== undefined && newValue > reservesInfo.value.reserves) {
        alert('현재 적립금보다 많이 사용할 수 없습니다.')
        useReserves.value = 0
      }
    })

    return {
      addrList,
      addRadio,
      addrInfo,
      productList,
      getImageUrl,
      paymentBtn,
      getTotalPrice,
      req,
      payMethod,
      modal,
      zonecode,
      roadAddress,
      detailAddress,
      openPostcode,
      name,
      addrName,
      phone,
      saveAddr,
      addCommas,
      reservesInfo,
      useReserves
    }
  }
}
</script>
<style scoped>
/* body {
  margin: 0;
} */
/* div {
  box-sizing: border-box;
} */
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
ul {
  /* 순서없는 목록에 적용할 스타일 */
  list-style-type: none; /* 불릿 없앰 */
}

label.title {
  /* class=title인 label에 적용할 스타일 */
  font-weight: bold; /* 굵은 글자 */
  width: 200px; /* 너비 80px */
  float: left; /* 왼쪽부터 배치 */
}

div.centered {
  /* class=centered인 div에 적용할 스타일 */
  text-align: center; /* 가운데 정렬 */
}

fieldset {
  /* 필드셋에 적용할 스타일*/
  margin: 15px 10px; /* 상하 마진 15xp, 좌우 마진 10px */
}

fieldset legend {
  /* 필드셋의 제목 */
  font-weight: bold; /* 굵은 글자 */
  font-size: 18px; /* 글자 크기 18px */
}

ul li {
  /* 목록의 각 항목 */
  margin-bottom: 10px; /* 아래 마진 10px */
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
</style>
