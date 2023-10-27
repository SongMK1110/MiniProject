import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// main.js 또는 다른 진입 파일에서 설정합니다.
import axios from 'axios'

function checkIfTokenExpired(token: string) {
  const payload = JSON.parse(atob(token.split('.')[1])) // 토큰의 Payload 디코딩
  const expirationTime = payload.exp * 1000 // 초를 밀리초로 변환

  return Date.now() >= expirationTime // 현재 시간이 만료 시간 이후인지 확인
}

// axios 전역 설정
axios.defaults.baseURL = 'http://localhost:5173' // API의 기본 URL로 설정

// request 인터셉터: 모든 요청 전에 실행됩니다.
axios.interceptors.request.use(
  (config) => {
    // 여기에 토큰을 추가하거나 수정하는 로직을 작성합니다.
    const token = localStorage.getItem('token')

    // if (
    //   config.url === undefined ||
    //   config.url.startsWith('/api/productList') ||
    //   config.url.startsWith('/api/productDetail') ||
    //   config.url.startsWith('api/reviewProductDetail') ||
    //   config.url.startsWith('/api/login')
    // ) {
    //   return config
    // }

    // 여기서 처리하고 싶은 작업을 수행하세요.
    // 예를 들어, 특정 조건을 만족하면 config를 수정하거나 에러를 반환할 수 있습니다.
    if (token) {
      const isExpired = checkIfTokenExpired(token) // 토큰 만료 여부 체크 함수
      if (isExpired) {
        // 로그아웃 처리
        localStorage.removeItem('token') // 토큰 삭제
        // router.push('/loginForm') // 로그인 페이지로 리다이렉트
        location.href = '/loginForm'
        alert('다시 로그인 해주세요')
        return Promise.reject('Token Expired') // Promise를 reject하여 요청을 중단합니다.
      }
      config.headers.Authorization = `Bearer ${token}`
    } else if (
      config.url === undefined ||
      config.url.startsWith('/api/productList') ||
      config.url.startsWith('/api/productDetail') ||
      config.url.startsWith('api/reviewProductDetail') ||
      config.url.startsWith('api/reviewRateAvg') ||
      config.url.startsWith('/api/login')
    ) {
      return config
    } else if (token === null) {
      alert('로그인 해주세요')
      router.push('/loginForm')
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// response 인터셉터: 응답을 받기 전에 실행됩니다.
axios.interceptors.response.use(
  (response) => {
    // 여기에서 응답을 처리하거나 수정하는 로직을 작성합니다.
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Vue 인스턴스에 axios를 등록합니다.
app.config.globalProperties.$axios = axios
