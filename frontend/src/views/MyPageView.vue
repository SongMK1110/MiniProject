<template>
  <div class="my-page">
    <h2>마이 페이지</h2>
    <div class="user-info">
      <div class="profile-picture">
        <!-- 여기에 프로필 사진을 넣으세요 -->
        <img v-if="memberInfo" :src="getImageUrl(memberInfo?.img)" alt="프로필 사진" />
      </div>
      <div class="info">
        <div class="item">
          <span class="label">아이디:</span>
          <span class="value">{{ memberInfo?.id }}</span>
        </div>
        <div class="item">
          <span class="label">비밀번호:</span>
          <span class="value" v-if="memberInfo && !memberPw">
            {{ hidePassword(memberInfo?.pw) }}
          </span>
          <span class="value" v-else-if="memberPw">
            <div class="password-change-fields">
              <label for="current-pw">현재 비밀번호:</label>
              <input type="password" v-model="currentPw" />
              <label for="new-pw">신규 비밀번호:</label>
              <input type="password" v-model="newPw" />
              <label for="confirm-new-pw">신규 비밀번호 재 입력:</label>
              <input type="password" v-model="newPwCk" />
            </div>
            <div style="text-align: center">
              <button type="button" style="margin: 5px" @click="cancelPw">취소</button>
              <button type="button" style="margin: 5px" @click="updatePw">완료</button>
            </div>
          </span>
          <button type="button" @click="memberPw = true" v-if="!memberPw">변경</button>
        </div>
        <div class="item">
          <span class="label">이름:</span>
          <span class="value">{{ memberInfo?.name }}</span>
        </div>
        <div class="item">
          <span class="label">닉네임:</span>
          <span class="value" v-if="!memberNickname">{{ memberInfo?.nickname }}</span>
          <span class="value" v-else>
            <div class="password-change-fields">
              <ul style="font-size: small">
                <li>길이는 최대 15자 이내로 작성해주세요</li>
                <li>중복 닉네임 불가합니다.</li>
                <li>이모티콘 및 일부 특수문자 사용 불가합니다. &amp;&lt;&gt;()&#39;/&quot;</li>
              </ul>
              <input
                type="text"
                v-model="newNickname"
                placeholder="닉네임 입력(최대 15자)"
                maxlength="15"
              />
            </div>
            <div style="text-align: center">
              <button type="button" style="margin: 5px" @click="cancelNickname">취소</button>
              <button type="button" style="margin: 5px" @click="updateNickname">완료</button>
            </div>
          </span>
          <button type="button" @click="memberNickname = true" v-if="!memberNickname">변경</button>
        </div>
        <div class="item">
          <span class="label">이메일:</span>
          <span class="value" v-if="!memberEmail">{{ memberInfo?.email }}</span>
          <span class="value" v-else>
            <div class="password-change-fields">
              <input type="email" v-model="newEmail" placeholder="이메일을 입력해주세요" />
            </div>
            <div style="text-align: center">
              <button type="button" style="margin: 5px" @click="cancelEmail">취소</button>
              <button type="button" style="margin: 5px" @click="updateEmail">완료</button>
            </div>
          </span>
          <button type="button" @click="memberEmail = true" v-if="!memberEmail">변경</button>
        </div>
        <div class="item">
          <span class="label">휴대전화:</span>
          <span class="value" v-if="!memberPhone">{{ memberInfo?.phone }}</span>
          <span class="value" v-else>
            <div class="password-change-fields">
              <input
                type="email"
                v-model="newPhone"
                maxlength="13"
                placeholder="휴대폰 번호를 입력해주세요"
              />
            </div>
            <div style="text-align: center">
              <button type="button" style="margin: 5px" @click="cancelPhone">취소</button>
              <button type="button" style="margin: 5px" @click="updatePhone">완료</button>
            </div>
          </span>
          <button type="button" @click="memberPhone = true" v-if="!memberPhone">변경</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import axios from 'axios'
// import router from '@/router'

interface Member {
  memberId: number
  id: string
  email: string
  name: string
  pw: string
  gender: number
  phone: string
  role: string
  signDt: Date
  signOut: string
  reserves: number
  nickname: string
  img: string
}

function getImageUrl(name: string): string {
  return new URL(`/src/assets/images/${name}`, import.meta.url).href
}

function hidePassword(password: string) {
  return '*'.repeat(password.length)
}

const memberInfo = ref<Member>()
const memberPw = ref<boolean>(false)
const currentPw = ref<string>()
const newPw = ref<string>()
const newPwCk = ref<string>()
const memberNickname = ref<boolean>(false)
const newNickname = ref<string>()
const memberEmail = ref<boolean>(false)
const newEmail = ref<string>()
const memberPhone = ref<boolean>(false)
const newPhone = ref<string>()

const updatePw = () => {
  if (memberInfo.value?.pw !== currentPw.value) {
    alert('현재 비밀번호가 다릅니다.')
    currentPw.value = ''
    return
  }
  if (newPw.value !== newPwCk.value) {
    alert('신규 비밀번호가 다릅니다.')
    newPw.value = ''
    newPwCk.value = ''
    return
  }

  const confirmed = window.confirm('변경 하시겠습니까?')
  if (confirmed) {
    axios
      .post('api/updateMypage', { pw: newPw.value })
      .then((res) => {
        console.log(res)
        if (res.data === 'success') {
          location.reload()
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

const cancelPw = () => {
  memberPw.value = false
  currentPw.value = ''
  newPw.value = ''
  newPwCk.value = ''
}

const cancelNickname = () => {
  memberNickname.value = false
  newNickname.value = ''
}

const updateNickname = () => {
  const confirmed = window.confirm('변경 하시겠습니까?')
  if (confirmed) {
    const specialCharactersRegex = /[&<>()'"/]/g
    if (newNickname.value && newNickname.value.match(specialCharactersRegex)) {
      alert('이모티콘 및 일부 특수문자 사용 불가합니다.')
      newNickname.value = ''
      return
    }
    axios
      .post('api/updateMypage', { nickname: newNickname.value })
      .then((res) => {
        if (res.data === 'success') {
          location.reload()
        } else if (res.data === 'duplication') {
          alert('중복된 닉네임 입니다.')
          return
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

const cancelEmail = () => {
  memberEmail.value = false
  newEmail.value = ''
}

const updateEmail = () => {
  const confirmed = window.confirm('변경 하시겠습니까?')
  const exptext = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9.-]+$/

  if (confirmed) {
    if (newEmail.value && exptext.test(newEmail.value) == false) {
      alert('이메일형식이 올바르지 않습니다.')
      newEmail.value = ''
      return
    }

    axios
      .post('api/updateMypage', { email: newEmail.value })
      .then((res) => {
        if (res.data === 'success') {
          location.reload()
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

const cancelPhone = () => {
  memberPhone.value = false
  newPhone.value = ''
}

const updatePhone = () => {
  const confirmed = window.confirm('변경 하시겠습니까?')
  const patternPhone = /01[016789]-[^0][0-9]{2,3}-[0-9]{3,4}/

  if (confirmed) {
    if (newPhone.value && patternPhone.test(newPhone.value) == false) {
      alert('휴대폰형식이 올바르지 않습니다.')
      newPhone.value = ''
      return
    }

    axios
      .post('api/updateMypage', { phone: newPhone.value })
      .then((res) => {
        if (res.data === 'success') {
          location.reload()
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

watch(newPhone, (newValue) => {
  if (newValue) {
    newPhone.value = newValue
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/, '$1-$2-$3')
      .replace(/(--)$/, '')
  }
})

axios
  .get('api/selectMember')
  .then((res) => {
    memberInfo.value = res.data
  })
  .catch((error) => {
    console.log(error)
  })
</script>
<style scoped>
.my-page {
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.user-info {
  display: flex;
  align-items: center;
}

.profile-picture {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
}

.profile-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info {
  flex: 1;
}

.item {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.label {
  font-weight: bold;
  margin-right: 20px;
}

.value {
  font-size: 1.2em;
  flex: 1;
}

button {
  border: none;
  background-color: #007bff;
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
}
.password-change-fields {
  display: grid;
  gap: 10px;
}

.password-change-fields label,
.password-change-fields input {
  width: 100%;
}

.password-change-fields input {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
