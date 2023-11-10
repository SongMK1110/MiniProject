<template>
  <header><HeaderView /></header>
  <div>
    <SearchList
      :getImageUrl="getImageUrl"
      :productInfo="productInfo"
      :searchCheck="searchCheck"
      :addCommas="addCommas"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import SearchList from '../components/SearchList.vue'
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

const addCommas = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const route = useRoute()
const productInfo = ref<Product>()
const searchCheck = ref<number>()

axios
  .get('api/searchProduct', { params: { name: route.query.search } })
  .then((res) => {
    console.log(res)
    productInfo.value = res.data
    searchCheck.value = res.data.length
  })
  .catch((error) => {
    console.log(error)
    if (error.response.status === 500) {
      router.push('errorForm')
      return
    }
  })
</script>
