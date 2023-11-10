<template>
  <header><HeaderView /></header>
  <div>
    <h1>주문내역 조회</h1>
    <div style="margin: 20px">
      <button type="button" class="searchBtn" @click="setDate('year')">최근 1년</button>
      <button type="button" class="searchBtn" @click="setDate('week')">1주일</button>
      <button type="button" class="searchBtn" @click="setDate('month')">1개월</button>
      <button type="button" class="searchBtn" @click="setDate('3months')">3개월</button>
      <input type="date" v-model="startDate" /> - <input type="date" v-model="endDate" />
      <input
        style="margin-left: 5px"
        type="text"
        placeholder="상품명으로 검색"
        v-model="searchInput"
      />
      <button type="button" class="searchBtn" @click="searchBtn">조회하기</button>
    </div>
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
        <OrderList
          :orderList="orderList"
          :getImageUrl="getImageUrl"
          :orderDetail="orderDetail"
          :addCommas="addCommas"
          :reviewBtn="reviewBtn"
          :isReviewWritten="isReviewWritten"
        />
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import router from '@/router'
import OrderList from '../components/OrderList.vue'
import HeaderView from '@/components/HeaderView.vue'

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

function formatDate(date: any) {
  const year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  if (month < 10) {
    month = `0${month}`
  }

  if (day < 10) {
    day = `0${day}`
  }

  return `${year}-${month}-${day}`
}

export default {
  name: 'OrderListView',
  components: {
    OrderList,
    HeaderView
  },
  setup() {
    const orderList = ref<Order[]>([])
    const reviewList = ref<number[]>([])
    const searchInput = ref<string>()
    const startDate = ref()
    const endDate = ref()

    const addCommas = (num: number): string => {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    const isReviewWritten = (productId: number): boolean => {
      return reviewList.value.includes(productId)
    }

    const orderDetail = (orderId: number) => {
      router.push({ name: 'OrderDetailView', query: { orderId: orderId } })
    }

    const searchBtn = () => {
      if (startDate.value === undefined) {
        startDate.value = ''
      }

      if (endDate.value === undefined) {
        endDate.value = ''
      }

      if (startDate.value !== '' && endDate.value === '') {
        alert('끝 날짜를 입력 해주세요')
        return
      }

      if (endDate.value !== '' && startDate.value === '') {
        alert('시작 날짜를 입력 해주세요')
        return
      }
      axios
        .get('api/searchOrderList', {
          params: { name: searchInput.value, startDate: startDate.value, endDate: endDate.value }
        })
        .then((res) => {
          orderList.value = res.data
          startDate.value = ''
          endDate.value = ''
          searchInput.value = ''
        })
        .catch((error) => {
          console.log(error)
          if (error.response.status === 500) {
            router.push('errorForm')
            return
          }
          if (error.response.data === 'tenYearsAgo') {
            alert('10년전은 검색 할 수 없습니다.')
            return
          } else if (error.response.data === 'nowAfter') {
            alert('현재 날짜 이후로는 검색 할 수 없습니다.')
            return
          }
        })
    }

    const setDate = (period: string) => {
      const today = new Date()
      switch (period) {
        case 'year':
          endDate.value = formatDate(today)
          today.setFullYear(today.getFullYear() - 1)
          startDate.value = formatDate(today)
          break
        case 'week':
          endDate.value = formatDate(today)
          today.setDate(today.getDate() - 7)
          startDate.value = formatDate(today)
          break
        case 'month':
          endDate.value = formatDate(today)
          today.setMonth(today.getMonth() - 1)
          startDate.value = formatDate(today)
          break
        case '3months':
          endDate.value = formatDate(today)
          today.setMonth(today.getMonth() - 3)
          startDate.value = formatDate(today)
          break
        default:
          break
      }
    }

    axios
      .get('/api/selectOrderList')
      .then((response) => {
        orderList.value = response.data
      })
      .catch((error) => {
        console.log(error)
        if (error.response.status === 500) {
          router.push('errorForm')
          return
        }
      })

    axios
      .get('api/selectReview')
      .then((res) => {
        reviewList.value = res.data.map((review: { productId: number }) => review.productId)
      })
      .catch((error) => {
        console.log(error)
        if (error.response.status === 500) {
          router.push('errorForm')
          return
        }
      })

    const reviewBtn = (productId: number) => {
      router.push({ name: 'ReviewView', query: { productId: productId } })
    }
    return {
      getImageUrl,
      orderList,
      addCommas,
      reviewBtn,
      reviewList,
      isReviewWritten,
      orderDetail,
      searchBtn,
      searchInput,
      startDate,
      endDate,
      setDate
    }
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
.searchBtn {
  margin: 5px;
}
</style>
