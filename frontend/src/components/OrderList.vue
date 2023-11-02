<template>
  <tr v-for="(order, index) in orderList" :key="index" class="cart-item">
    <td class="item-info">
      <router-link :to="{ name: 'productDetailView', query: { id: order.productId } }">
        <span><img :src="getImageUrl(order.img)" style="width: 80px" /></span>
        <br />
      </router-link>
      {{ order.name }}
    </td>
    <td>{{ order.rdate }}</td>
    <td>
      <span @click="orderDetail(order.orderId)" style="cursor: pointer">{{ order.orderId }}</span>
    </td>
    <td>
      {{ addCommas(order.price) }}원 <br />
      {{ order.cnt }}개
    </td>
    <td class="item-actions">
      배송 완료 <br />
      <button @click="reviewBtn(order.productId)" :disabled="isReviewWritten(order.productId)">
        {{ isReviewWritten(order.productId) ? '후기작성완료' : '후기작성' }}
      </button>
    </td>
  </tr>
</template>

<script lang="ts">
export default {
  props: ['orderList', 'getImageUrl', 'orderDetail', 'addCommas', 'reviewBtn', 'isReviewWritten'],
  setup() {}
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
