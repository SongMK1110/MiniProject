<template>
  <div v-for="(like, index) in cartItems" :key="index" class="cart-item">
    <div class="item-info">
      <router-link :to="{ name: 'productDetailView', query: { id: like.productId } }">
        <span><img :src="getImageUrl(like.img)" style="width: 80px" /></span>
      </router-link>
      <span>{{ like.name }}</span>
      <span>가격: {{ addCommas(like.price) }}원</span>
    </div>
    <div class="item-actions">
      <button @click="delCartBtn(like.productId, index)">삭제</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['cartItems', 'delCartBtn', 'addCommas', 'getImageUrl'],
  setup() {}
}
</script>

<style scoped>
.cart-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
.item-info {
  display: flex;
  justify-content: space-between;
}
.item-actions {
  display: flex;
}
</style>
