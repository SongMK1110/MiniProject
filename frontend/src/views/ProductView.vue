<template>
  <div>
    <h1>상품</h1>
    <div>
      <table>
        <thead>
          <tr>
            <th>상품번호</th>
            <th>카테고리번호</th>
            <th>이름</th>
            <th>가격</th>
            <th>등록일</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, i) in followers" :key="i">
            <td>
              {{ product.productId }}
            </td>
            <td>
              {{ product.categoryId }}
            </td>
            <td>
              {{ product.name }}
            </td>
            <td>
              {{ product.price }}
            </td>
            <td>
              {{ product.rdate }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts">
interface Product {
  productId: number
  categoryId: number
  name: string
  price: number
  content: string
  rdate: string
}

import { ref } from 'vue'
import axios from 'axios'
export default {
  name: 'ProductPage',
  setup() {
    const followers = ref<Product[]>([])

    axios.get('/api/productList').then((response) => {
      console.log(response)
      followers.value = response.data
    })

    return { followers }
  }
}
</script>
