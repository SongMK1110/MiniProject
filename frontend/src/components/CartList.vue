<template>
  <tr v-for="(cart, index) in cartItems" :key="index" class="cart-item">
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
      <button type="button" @click="quantityBtn(cart.cnt, cart.cartId)" style="margin-right: 5px">
        수량
      </button>
      <button type="button" @click="delCartBtn(cart.productId, index)">삭제</button>
    </td>
    <td>
      택배배송 <br />
      <span style="font-weight: bold">배송비무료</span> <br />
      0원 이상 무료
    </td>
  </tr>
</template>

<script lang="ts">
export default {
  props: ['cartItems', 'quantityBtn', 'delCartBtn', 'getImageUrl', 'addCommas']
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
