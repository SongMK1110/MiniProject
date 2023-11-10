<template>
  <header><HeaderView /></header>
  <div>
    <h1>좋아요</h1>
    <LikeList
      :cartItems="cartItems"
      :delCartBtn="delCartBtn"
      :getImageUrl="getImageUrl"
      :addCommas="addCommas"
    />
  </div>
</template>
<script lang="ts">
import LikeList from '@/components/LikeList.vue'
import axios from 'axios'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import HeaderView from '@/components/HeaderView.vue'
import router from '@/router'

interface Cart {
  cartId: number
  cnt: number
  img: string
  memberId: number
  name: string
  price: number
  productId: number
}

function getImageUrl(name: string) {
  return new URL(`/src/assets/images/${name}`, import.meta.url).href
}

function parseJwt(token: string | null) {
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
  }
}

export default {
  setup() {
    const route = useRoute()
    const cartItems = ref<Cart[]>([])
    const token = localStorage.getItem('token')
    const parseToken = parseJwt(token)
    const userId = parseToken.userName
    const totalPrice = ref(0)
    // let userId: number
    // if (parseToken !== undefined) {
    //   userId = parseJwt(token).userName
    // } else {
    //   router.push('/loginForm')
    //   return
    // }
    const addCommas = (num: number) => {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
    // 장바구니 정보
    axios
      .get('/api/likeList')
      .then((response) => {
        console.log(response)
        cartItems.value = response.data
      })
      .catch((error) => {
        console.log(error)
        if (error.response.status === 500) {
          router.push('errorForm')
          return
        }
      })
    const delCartBtn = (productId: number, index: number): void => {
      const confirmed = window.confirm('삭제하시겠습니까?')
      if (confirmed) {
        axios
          .post('/api/deleteLike', { productId: productId })
          .then((res) => {
            console.log(res)
          })
          .catch((error) => {
            if (error.response.data === 'fail') {
              alert('좋아요 삭제 실패')
              return
            }
            if (error.response.status === 500) {
              router.push('errorForm')
              return
            }
          })
        cartItems.value.splice(index, 1)
      }
    }
    return { cartItems, userId, token, route, totalPrice, getImageUrl, delCartBtn, addCommas }
  },
  components: { LikeList, HeaderView }
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
