<template>
  <div>
    <h1>로그인 페이지</h1>
    <div>
      아이디 : <input v-model="id" type="text" /> 비밀번호 :
      <input v-model="password" type="password" />
      <button @click="login">로그인</button>
      <button @click="signup">회원가입</button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import router from '@/router'
export default {
  name: 'LoginView',
  setup() {
    let id = ref('')
    let password = ref('')

    const signup = () => {
      router.push('signForm')
    }

    const login = () => {
      axios
        .post('/api/login', { id: id.value, pw: password.value })
        .then((response) => {
          console.log(response)
          if (response.data === 'fail') {
            alert('아이디 또는 비밀번호가 잘못 되었습니다.')
            return
          }

          const token = response.data // 서버에서 받은 토큰
          localStorage.setItem('token', token) // 로컬 스토리지에 저장

          // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
          location.href = '/'
        })
        .catch((error) => {
          console.error(error)
        })
    }

    return { id, password, login, signup }
  }
}
</script>
