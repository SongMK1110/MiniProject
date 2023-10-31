<template>
  <ul class="product-list">
    <li v-for="product in productList" :key="product.productId">
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
</template>

<script lang="ts">
export default {
  props: ['productList'],
  setup() {
    const getImageUrl = (name: string) => {
      return new URL(`/src/assets/images/${name}`, import.meta.url).href
    }

    const addCommas = (num: number) => {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    return {
      getImageUrl,
      addCommas
    }
  }
}
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
