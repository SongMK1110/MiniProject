<template>
  <header><HeaderView /></header>
  <div>
    <h1>메인 페이지</h1>
    <div class="container">
      <div class="left">
        <ul>
          <li><span @click="showProducts('')">전체</span></li>
          <li><span @click="showProducts('3')">상의</span></li>
          <li><span @click="showProducts('4')">아우터</span></li>
          <li><span @click="showProducts('5')">하의</span></li>
        </ul>
      </div>
      <div class="right" v-if="selectedCategory !== ''">
        <h2>{{ selectedCategory }} 상품 리스트</h2>
        <ProductList :productList="productList" :getImageUrl="getImageUrl" :addCommas="addCommas" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import ProductList from '../components/ProductList.vue'
import HeaderView from '@/components/HeaderView.vue'
import router from '@/router'

interface Product {
  productId: number
  categoryId: number
  name: string
  price: number
  content: string
  rdate: string
  img: string
}

function getImageUrl(name: string) {
  return new URL(`/src/assets/images/${name}`, import.meta.url).href
}

function parseJwt(token: string | null): string | null {
  if (token !== null) {
    var base64Url = token.split('.')[1]
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        })
        .join('')
    )
    return JSON.parse(jsonPayload)
  } else {
    return null
  }
}

export default {
  components: {
    ProductList,
    HeaderView
  },
  setup() {
    const selectedCategory = ref('')
    const productList = ref<Product[]>([])
    const token = localStorage.getItem('token')
    const parseToken = parseJwt(token)

    const addCommas = (num: number) => {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    const showProducts = async (category: string) => {
      selectedCategory.value = category
      if (selectedCategory.value === '') {
        selectedCategory.value = '전체'
      } else if (selectedCategory.value === '3') {
        selectedCategory.value = '상의'
      } else if (selectedCategory.value === '4') {
        selectedCategory.value = '아우터'
      } else if (selectedCategory.value === '5') {
        selectedCategory.value = '하의'
      }

      try {
        await axios
          .get(`/api/productList?categoryId=${category}`)
          .then((response) => {
            productList.value = response.data
          })
          .catch((error) => {
            if (error.response.status === 500) {
              router.push('errorForm')
              return
            }
          })
      } catch (error) {
        console.error(error)
      }
    }

    return {
      selectedCategory,
      productList,
      showProducts,
      getImageUrl,
      parseJwt,
      token,
      parseToken,
      addCommas
    }
  }
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
  display: flex;
  flex-wrap: wrap; /* 옆으로 나오게 설정 */
}

.product-list {
  list-style-type: none;
  padding: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap; /* 옆으로 나오게 설정 */
  justify-content: space-between; /* 간격을 넓힙니다. */
}

.product-list li {
  flex-basis: calc(33.33% - 10px); /* 한 줄에 3개씩 나오도록 설정 */
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
