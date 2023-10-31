<template>
  <div>
    <h1>주문내역 조회</h1>
    <table>
      <thead>
        <tr>
          <th>상품정보</th>
          <th>주문일자</th>
          <th>주문번호</th>
          <th>주문금액(수량)</th>
          <th>주문 상태</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, index) in orderList" :key="index" class="cart-item">
          <td class="item-info">
            <router-link :to="{ name: 'productDetailView', query: { id: order.productId } }">
              <span><img :src="getImageUrl(order.img)" style="width: 80px" /></span>
              <br />
            </router-link>
            {{ order.name }}
          </td>
          <td>{{ order.rdate }}</td>
          <router-link :to="{ name: 'OrderDetailView', query: { id: order.orderId } }">
            <td>{{ order.orderId }}</td>
          </router-link>
          <td>
            {{ addCommas(order.price) }}원 <br />
            {{ order.cnt }}개
          </td>
          <td class="item-actions">
            배송 완료 <br />
            <button
              @click="reviewBtn(order.productId)"
              :disabled="isReviewWritten(order.productId)"
            >
              {{ isReviewWritten(order.productId) ? '후기작성완료' : '후기작성' }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import router from '@/router'

interface Order {
  productId: number
  img: string
  name: string
  rdate: string
  orderId: number
  price: number
  cnt: number
}

function getImageUrl(name: string): string {
  return new URL(`/src/assets/images/${name}`, import.meta.url).href
}

export default {
  name: 'OrderListView',
  setup() {
    const orderList = ref<Order[]>([])
    const reviewList = ref<number[]>([])
    const addCommas = (num: number): string => {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    const isReviewWritten = (productId: number): boolean => {
      return reviewList.value.includes(productId)
    }

    axios
      .get('/api/selectOrderList')
      .then((response) => {
        orderList.value = response.data
      })
      .catch((error) => {
        console.log(error)
      })

    axios
      .get('api/selectReview')
      .then((res) => {
        reviewList.value = res.data.map((review: { productId: number }) => review.productId)
      })
      .catch((error) => {
        console.log(error)
      })

    const reviewBtn = (productId: number) => {
      router.push({ name: 'ReviewView', query: { productId: productId } })
    }
    return { getImageUrl, orderList, addCommas, reviewBtn, reviewList, isReviewWritten }
  }
}
</script>
<style scoped>
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
