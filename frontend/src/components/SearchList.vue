<template>
  <h1>검색 결과 페이지</h1>
  <div v-if="searchCheck && searchCheck > 0">
    <ul class="product-list">
      <li v-for="product in productInfo" :key="product.productId">
        <router-link :to="{ name: 'productDetailView', query: { id: product.productId } }">
          <img :src="getImageUrl(product.img)" style="width: 200px" /><br />
        </router-link>
        <div class="product-info">
          <div class="product-name">{{ product.name }}</div>
          <div class="product-description">{{ product.content }}</div>
          <div class="product-price">{{ addCommas(product.price) }}원</div>
        </div>
      </li>
    </ul>
  </div>
  <div v-else>
    <h2>검색 결과 없습니다.</h2>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
defineProps(['searchCheck', 'productInfo', 'getImageUrl', 'addCommas'])
</script>

<style scoped>
.product-list {
  list-style-type: none;
  padding: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.product-list li {
  flex-basis: calc(33.33% - 10px);
  margin-bottom: 20px;
  box-sizing: border-box;
  text-align: center;
}

.product-info {
  text-align: center;
}

.product-name,
.product-description,
.product-price {
  margin-bottom: 10px;
}
</style>
