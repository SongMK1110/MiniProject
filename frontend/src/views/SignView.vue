<template>
  <div>
    <div class="wrapper">
      <div class="title"><h1 style="font-size: 21px">회원가입</h1></div>
      <div class="email">
        <input type="text" placeholder="아이디를 입력해 주세요." v-model="id" />
        <div class="error"></div>
      </div>
      <div class="email">
        <input type="text" placeholder="이메일을 입력해 주세요." v-model="email" />
        <div class="error"></div>
      </div>
      <div class="name">
        <input type="text" placeholder="이름을 입력해 주세요." v-model="name" />
        <div class="error"></div>
      </div>
      <div class="name">
        <input type="text" placeholder="전화번호를 입력해 주세요." v-model="phone" />
        <div class="error"></div>
      </div>
      <div class="password">
        <input type="password" placeholder="비밀번호를 입력해 주세요." v-model="password" />
        <div class="error"></div>
      </div>
      <div class="passwordCheck">
        <input
          type="password"
          placeholder="비밀번호를 다시 입력해 주세요."
          v-model="passwordCheck"
        />
        <div class="error"></div>
      </div>
      <div class="gender">
        <input type="radio" name="gender" v-model="gender" value="1" />남성
        <input type="radio" name="gender" v-model="gender" value="2" />여성
        <div id="genderError" class="error"></div>
      </div>
      <div class="line">
        <hr />
      </div>
      <div class="signUp" @click="signUp">
        <button>가입하기</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import router from '@/router'

export default {
  name: 'SignUpView',
  setup() {
    let id = ref<string>('')
    let password = ref<string>('')
    let passwordCheck = ref<string>('')
    let name = ref<string>('')
    let email = ref<string>('')
    let phone = ref<string>('')
    let gender = ref<string>('')

    const signUp = () => {
      if (id.value === '') {
        alert('아이디를 입력해주세요.')
        return
      }

      if (email.value === '') {
        alert('이메일을 입력해주세요.')
        return
      }

      if (name.value === '') {
        alert('이름을 입력해주세요.')
        return
      }

      if (phone.value === '') {
        alert('전화번호를 입력해주세요.')
        return
      }

      if (password.value === '') {
        alert('비밀번호를 입력해주세요.')
        return
      }

      if (passwordCheck.value === '') {
        alert('비밀번호를 입력해주세요.')
        return
      }

      if (password.value !== passwordCheck.value) {
        alert('비밀번호가 일치하지 않습니다.')
        return
      }
      if (gender.value === '') {
        alert('성별을 선택해주세요.')
        return
      }

      const userData = {
        id: id.value,
        pw: password.value,
        name: name.value,
        email: email.value,
        gender: gender.value,
        phone: phone.value
      }

      console.log(userData)

      axios
        .post('/api/idCheck', { id: id.value })
        .then((response) => {
          console.log(response)
          if (response.data === 'duplication') {
            alert('중복된 아이디 입니다.')
            return false
          } else if (response.data === 'success') {
            axios
              .post('/api/signup', userData)
              .then((response) => {
                console.log(response)
                if (response.data === 'success') {
                  alert('회원가입 완료')
                  router.push('/loginForm')
                }
              })
              .catch((error) => {
                console.error(error)
              })
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }

    return { id, password, name, email, phone, signUp, passwordCheck, gender }
  }
}
</script>

<style scoped>
* {
  margin: 0px;
  box-sizing: border-box;
  font-size: 11px;
}

html {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
}

body {
  width: 45%;
  border: 1px solid black;
}

input {
  border: 1px solid black;
  border-radius: 3px;
  line-height: 35px;
  font-size: 12px;
  padding-left: 10px;
  padding-right: 10px;
}

.wrapper {
  padding: 10px;
}

div {
  padding-top: 3px;
  padding-bottom: 8px;
}

.title {
  text-align: center;
  font-weight: 700;
}

.email input {
  width: 100%;
}

.name input {
  width: 100%;
}

.password input {
  width: 100%;
}

.passwordCheck input {
  width: 100%;
}

.phone {
  display: flex;
  justify-content: space-between;
  line-height: 35px;
}

#phone1 {
  width: 18%;
}

#phone2 {
  width: 30%;
}

#phone3 {
  width: 30%;
}

.auth {
  display: flex;
  justify-content: space-between;
}

.timer {
  display: flex;
  justify-content: space-between;
}

.auth div {
  width: 30%;
  text-align: center;
  font-weight: 700;
  font-size: 15px;
}

.auth button {
  width: 70%;
}

.timer div {
  width: 30%;
  text-align: center;
  font-weight: 700;
  font-size: 15px;
}

.timer button {
  width: 70%;
}

.area select {
  width: 100%;
  height: 40px;
}

.gender {
  text-align: center;
}

.signUp button {
  width: 100%;
  cursor: pointer;
}

button {
  cursor: pointer;
  height: 30px;
}

.error {
  font-size: 1px;
  height: 20px;
  color: red;
  font-weight: 700;
}
</style>
