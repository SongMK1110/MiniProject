<template>
  <div class="container">
    <div class="logo">
      <h1><a @click="main">MUSINSA</a></h1>
    </div>
    <div class="nav-items">
      <template v-if="!isLoggedIn">
        <button @click="login">로그인</button>
      </template>
      <template v-else>
        <button @click="logout">로그아웃</button>
        <router-link :to="{ name: 'MyPageView', query: { id: userId } }">
          <div>마이페이지</div>
        </router-link>
        <router-link :to="{ name: 'LikeView', query: { id: userId } }">
          <div>좋아요</div>
        </router-link>
        <router-link :to="{ name: 'CartView', query: { id: userId } }">
          <div>장바구니</div>
        </router-link>
        <router-link :to="{ name: 'OrderListView', query: { id: userId } }">
          <div>주문배송조회</div>
        </router-link>
      </template>
    </div>
  </div>
  <hr />
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
import router from '@/router'

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
  } else {
    return
  }
}

export default {
  name: 'HeaderView',
  setup() {
    const isLoggedIn = ref(false)
    const token = localStorage.getItem('token')
    const parseToken = parseJwt(token)
    let userId = ''
    if (parseToken !== undefined) {
      userId = parseJwt(token).userName
    }

    const main = () => {
      router.push('/')
    }

    const login = () => {
      router.push('/loginForm')
    }

    const logout = () => {
      localStorage.removeItem('token')
      isLoggedIn.value = false

      router.push('/')
    }

    onMounted(() => {
      const token = localStorage.getItem('token')
      isLoggedIn.value = token !== null
    })

    return { isLoggedIn, login, main, logout, parseJwt, token, parseToken, userId }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
}

.logo {
  margin-right: auto;
}

.nav-items {
  display: flex;
}

.nav-items div,
.nav-items button {
  margin-left: 10px;
}
</style>
