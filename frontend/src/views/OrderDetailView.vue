<template>
  <div class="order-details">
    <h1>주문 상세 내역</h1>

    <!-- 상품 정보 테이블 -->
    <table>
      <tr>
        <th class="center">상품명</th>
        <th class="center">등급/제휴 할인</th>
        <th class="center">쿠폰 할인</th>
        <th class="center">적립금</th>
        <th class="center">결제 수수료</th>
        <th class="center">주문금액(수량)</th>
        <th class="center">배송 정보</th>
        <th class="center">주문 상태</th>
      </tr>
      <tr v-for="(order, i) in orderDetailInfo" :key="i">
        <td class="center">
          <router-link :to="{ name: 'productDetailView', query: { id: order.productId } }">
            <img :src="getImageUrl(order.img)" style="width: 100px" /></router-link
          ><br />
          {{ order.productName }}
        </td>
        <td class="center">0원</td>
        <td class="center">0원</td>
        <td class="center">+{{ addCommas(order.price * order.cnt * 0.01) }}원</td>
        <td class="center">0원</td>
        <td class="center">
          {{ addCommas(order.price * order.cnt) }}원 <br />
          {{ order.cnt }}개
        </td>
        <td class="center">업체 배송</td>
        <td class="center">
          구매 확정 <br /><br />
          <button @click="reviewBtn(order.productId)" :disabled="isReviewWritten(order.productId)">
            {{ isReviewWritten(order.productId) ? '후기작성완료' : '후기작성' }}
          </button>
        </td>
      </tr>
    </table>
    <ul style="padding: 30px 15px">
      <li>
        동일한 주문번호라도 2개 이상의 브랜드에서 주문하신 경우 출고지 주소가 달라 각각 출고됩니다.
        (택배 박스를 2개 이상 수령 가능)
      </li>
      <li>
        출고 완료 직후 교환 / 환불 요청을 하더라도 상품을 수령하신 후 택배 업체를 통해 보내주셔야
        처리 가능합니다.
      </li>
      <li>
        별도의 구매 결정이 없더라도 상품 배송 완료 후 7일이 지난 경우에는 자동 구매확정, 적립금이
        자동 지급됩니다.
      </li>
      <li>자세한 내용은 FAQ를 확인하여 주시기 바랍니다.</li>
    </ul>

    <div class="shipping-address">
      <h2 style="border-bottom: 1px solid #000; padding: 10px">배송지 정보</h2>
      <table>
        <tbody>
          <tr>
            <th style="width: 25%">이름</th>
            <td>{{ orderDetailInfo[0]?.name }}</td>
          </tr>
          <tr>
            <th>연락처</th>
            <td>{{ orderDetailInfo[0]?.phone }}</td>
          </tr>
          <tr>
            <th>배송지 주소</th>
            <td>
              ({{ orderDetailInfo[0]?.zipcode }}) {{ orderDetailInfo[0]?.addr }}
              {{ orderDetailInfo[0]?.addrDetail }}
            </td>
          </tr>
          <tr>
            <th>배송 메세지</th>
            <td>
              {{ orderDetailInfo[0]?.req }}
            </td>
          </tr>
        </tbody>
      </table>
      <ul style="padding: 30px 15px">
        <li>
          발송전 일때만 배송지 주소를 변경하실 수 있습니다.(미입금/입금확인/출고요청 단계까지만가능)
        </li>
      </ul>
    </div>

    <div class="payment-method">
      <h2 style="border-bottom: 1px solid #000; padding: 10px">최종 결제 정보</h2>
      <table>
        <tbody>
          <tr>
            <th style="width: 25%">상품 합계</th>
            <td>{{ addCommas(orderDetailInfo[0]?.totalPrice) }}원</td>
          </tr>
          <tr>
            <th>배송비 합계</th>
            <td style="color: blue">배송비 무료</td>
          </tr>
          <tr>
            <th style="font-weight: bold">할인 합계</th>
            <td style="color: blue; font-weight: bold">
              -{{ addCommas(orderDetailInfo[0]?.reserves) }}원
            </td>
          </tr>
          <tr>
            <th>결제 수수료</th>
            <td>0원</td>
          </tr>
          <tr>
            <th style="font-weight: bold">최종 결제 금액</th>
            <td style="font-weight: bold; font-size: larger">
              {{ addCommas(orderDetailInfo[0]?.totalPrice - orderDetailInfo[0]?.reserves) }}원
            </td>
          </tr>
          <tr>
            <th>결제 수단</th>
            <td>
              {{ paymentMethod(orderDetailInfo[0]?.paymentMethod) }}
              {{ orderDetailInfo[0]?.reserves > 0 ? '+ 적립금' : '' }}
            </td>
          </tr>
        </tbody>
      </table>
      <ul style="padding: 30px 15px">
        <li>
          카드 결제시 현금영수증/세금계산서 발급이 불가능하며 카드전표로 대체하실 수 있습니다.
        </li>
        <li>
          PG사 또는 카드사에서 제공하는 즉시 할인은 최종 결제 금액에 반영되지
          않습니다.(ex.무신사페이 즉시할인)
        </li>
        <li>바로접속 OFF 상태일 때에는 각종 할인 혜택이 제한될 수 있습니다.</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import router from '@/router'

interface OrderDetail {
  orderId: number
  memberId: number
  rdate: string
  name: string
  addr: string
  addrDetail: string
  phone: string
  zipcode: string
  req: string
  totalPrice: number
  paymentMethod: string
  price: number
  cnt: number
  img: string
  productName: string
  productId: number
  reserves: number
}

const addCommas = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function getImageUrl(name: string) {
  return new URL(`/src/assets/images/${name}`, import.meta.url).href
}

const route = useRoute()
const orderDetailInfo = ref<OrderDetail[]>([])
const reviewList = ref<number[]>([])

const reviewBtn = (productId: number) => {
  router.push({ name: 'ReviewView', query: { productId: productId } })
}

const isReviewWritten = (productId: number): boolean => {
  return reviewList.value.includes(productId)
}

const paymentMethod = (pay: string): string => {
  let result = ''
  if (pay === 'card') {
    result = '카드'
  } else if (pay === 'account') {
    result = '가상계좌'
  } else if (pay === 'phone') {
    result = '휴대폰'
  }

  return result
}

axios
  .post('api/selectOrderDetailList', { orderId: route.query.orderId })
  .then((res) => {
    console.log(res)
    orderDetailInfo.value = res.data
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
</script>
<style scoped>
body {
  font-family: Arial, sans-serif;
}
.order-details {
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.order-details h1 {
  font-size: 24px;
  margin-bottom: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}
th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #f2f2f2;
}
.total-price {
  font-weight: bold;
  font-size: 20px;
}
.payment-method,
.shipping-address {
  margin-top: 20px;
}
.back-button {
  margin-top: 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
}
.center {
  text-align: center;
}
</style>
