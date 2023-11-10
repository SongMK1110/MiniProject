<template>
  <header><HeaderView /></header>
  <div>
    <h1>후기 작성</h1>
    <div>
      <div>
        <router-link
          v-if="productInfo"
          :to="{ name: 'productDetailView', query: { id: productInfo.productId } }"
        >
          <img v-if="productInfo" :src="getImageUrl(productInfo.img)" style="width: 100px" />
        </router-link>
        <p v-if="productInfo" style="display: inline; padding-left: 10px">
          상품명 : {{ productInfo.name }}
        </p>
      </div>
      <hr />
      <div><h2 style="font-weight: bold">별점</h2></div>
      <fieldset class="rate">
        <input type="radio" id="rating10" name="rating" value="5" v-model="review.rate" /><label
          for="rating10"
          title="5점"
        ></label>
        <input type="radio" id="rating9" name="rating" value="4.5" v-model="review.rate" /><label
          class="half"
          for="rating9"
          title="4.5점"
        ></label>
        <input type="radio" id="rating8" name="rating" value="4" v-model="review.rate" /><label
          for="rating8"
          title="4점"
        ></label>
        <input type="radio" id="rating7" name="rating" value="3.5" v-model="review.rate" /><label
          class="half"
          for="rating7"
          title="3.5점"
        ></label>
        <input type="radio" id="rating6" name="rating" value="3" v-model="review.rate" /><label
          for="rating6"
          title="3점"
        ></label>
        <input type="radio" id="rating5" name="rating" value="2.5" v-model="review.rate" /><label
          class="half"
          for="rating5"
          title="2.5점"
        ></label>
        <input type="radio" id="rating4" name="rating" value="2" v-model="review.rate" /><label
          for="rating4"
          title="2점"
        ></label>
        <input type="radio" id="rating3" name="rating" value="1.5" v-model="review.rate" /><label
          class="half"
          for="rating3"
          title="1.5점"
        ></label>
        <input type="radio" id="rating2" name="rating" value="1" v-model="review.rate" /><label
          for="rating2"
          title="1점"
        ></label>
        <input type="radio" id="rating1" name="rating" value="0.5" v-model="review.rate" /><label
          class="half"
          for="rating1"
          title="0.5점"
        ></label>
      </fieldset>
    </div>
    <div class="mb-3">
      <label class="form-label">사이즈</label>
      <div class="form_toggle row-vh d-flex flex-row justify-content-between">
        <div class="form_radio_btn">
          <input id="radio-1" type="radio" name="size" value="1" v-model="review.size" />
          <label for="radio-1">커요</label>
        </div>

        <div class="form_radio_btn">
          <input id="radio-2" type="radio" name="size" value="2" v-model="review.size" />
          <label for="radio-2">보통이에요</label>
        </div>

        <div class="form_radio_btn">
          <input id="radio-3" type="radio" name="size" value="3" v-model="review.size" />
          <label for="radio-3">작아요</label>
        </div>
      </div>
    </div>
    <div class="mb-3">
      <label class="form-label">밝기</label>
      <div class="form_toggle row-vh d-flex flex-row justify-content-between">
        <div class="form_radio_btn">
          <input
            id="radio2-1"
            type="radio"
            name="brightness"
            value="1"
            v-model="review.brightness"
          />
          <label for="radio2-1">밝아요</label>
        </div>

        <div class="form_radio_btn">
          <input
            id="radio2-2"
            type="radio"
            name="brightness"
            value="2"
            v-model="review.brightness"
          />
          <label for="radio2-2">보통이에요</label>
        </div>

        <div class="form_radio_btn">
          <input
            id="radio2-3"
            type="radio"
            name="brightness"
            value="3"
            v-model="review.brightness"
          />
          <label for="radio2-3">어두워요</label>
        </div>
      </div>
    </div>
    <div class="mb-3">
      <label class="form-label">색감</label>
      <div class="form_toggle row-vh d-flex flex-row justify-content-between">
        <div class="form_radio_btn">
          <input id="radio3-1" type="radio" name="color" value="1" v-model="review.color" />
          <label for="radio3-1">선명해요</label>
        </div>

        <div class="form_radio_btn">
          <input id="radio3-2" type="radio" name="color" value="2" v-model="review.color" />
          <label for="radio3-2">보통이에요</label>
        </div>

        <div class="form_radio_btn">
          <input id="radio3-3" type="radio" name="color" value="3" v-model="review.color" />
          <label for="radio3-3">흐려요</label>
        </div>
      </div>
    </div>
    <div class="mb-3">
      <label class="form-label">두께감</label>
      <div class="form_toggle row-vh d-flex flex-row justify-content-between">
        <div class="form_radio_btn">
          <input id="radio4-1" type="radio" name="thickness" value="1" v-model="review.thickness" />
          <label for="radio4-1">두꺼워요</label>
        </div>

        <div class="form_radio_btn">
          <input id="radio4-2" type="radio" name="thickness" value="2" v-model="review.thickness" />
          <label for="radio4-2">보통이에요</label>
        </div>

        <div class="form_radio_btn">
          <input id="radio4-3" type="radio" name="thickness" value="3" v-model="review.thickness" />
          <label for="radio4-3">얇아요</label>
        </div>
      </div>
    </div>
    <div class="mb-3">
      <label class="form-label">배송</label>
      <div class="form_toggle row-vh d-flex flex-row justify-content-between">
        <div class="form_radio_btn">
          <input id="radio5-1" type="radio" name="delivery" value="1" v-model="review.delivery" />
          <label for="radio5-1">빨라요</label>
        </div>

        <div class="form_radio_btn">
          <input id="radio5-2" type="radio" name="delivery" value="2" v-model="review.delivery" />
          <label for="radio5-2">아쉬워요</label>
        </div>
      </div>
    </div>
    <div class="mb-3">
      <label class="form-label">포장</label>
      <div class="form_toggle row-vh d-flex flex-row justify-content-between">
        <div class="form_radio_btn">
          <input id="radio6-1" type="radio" name="packaging" value="1" v-model="review.packaging" />
          <label for="radio6-1">꼼꼼해요</label>
        </div>

        <div class="form_radio_btn">
          <input id="radio6-2" type="radio" name="packaging" value="2" v-model="review.packaging" />
          <label for="radio6-2">아쉬워요</label>
        </div>
      </div>
    </div>
    <hr />
    <h2 style="font-weight: bold">내용</h2>
    <textarea
      name=""
      id=""
      cols="150"
      rows="15"
      placeholder="다른 회원분에게 도움이 되는 나만의 팁을 소개해 주세요.(20자 이상 작성)"
      v-model="review.content"
    ></textarea>
    <div style="text-align: center; margin-top: 20px">
      <button
        @click="insertReviewBtn"
        type="button"
        style="
          cursor: pointer;
          font-size: 20px;
          padding: 10px 20px;
          color: white;
          background-color: black;
        "
      >
        등록
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from 'vue'
import axios from 'axios'
import router from '@/router'
import { useRoute } from 'vue-router'
import HeaderView from '@/components/HeaderView.vue'

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

export default {
  name: 'ReviewView',
  components: {
    HeaderView
  },
  setup() {
    const route = useRoute()
    const productInfo = ref<Product>()
    const review = reactive({
      rate: 0,
      size: 0,
      brightness: 0,
      color: 0,
      thickness: 0,
      delivery: 0,
      packaging: 0,
      content: ''
    })

    axios
      .get('api/reviewProduct', { params: { productId: route.query.productId } })
      .then((res) => {
        productInfo.value = res.data
      })
      .catch((error) => {
        console.log(error)
        if (error.response.status === 500) {
          router.push('errorForm')
          return
        }
      })

    const insertReviewBtn = () => {
      if (review.rate === 0) {
        alert('별점을 입력해주세요')
        return
      }
      if (review.size === 0) {
        alert('사이즈를 입력해주세요')
        return
      }
      if (review.brightness === 0) {
        alert('밝기를 입력해주세요')
        return
      }
      if (review.color === 0) {
        alert('색감을 입력해주세요')
        return
      }
      if (review.thickness === 0) {
        alert('두께감을 입력해주세요')
        return
      }
      if (review.delivery === 0) {
        alert('배송을 입력해주세요')
        return
      }
      if (review.packaging === 0) {
        alert('포장을 입력해주세요')
        return
      }
      if (review.content === '') {
        alert('내용을 입력해주세요')
        return
      }
      if (review.content.length < 20) {
        alert('20자 이상 입력해주세요')
        return
      }
      console.log(review.rate)
      console.log(review.size)
      console.log(review.brightness)
      console.log(review.color)
      console.log(review.thickness)
      console.log(review.delivery)
      console.log(review.packaging)
      console.log(review.content)
      console.log(route.query.productId)
      const data = {
        productId: route.query.productId,
        content: review.content,
        rate: review.rate,
        size: review.size,
        brightness: review.brightness,
        color: review.color,
        thickness: review.thickness,
        delivery: review.delivery,
        packaging: review.packaging
      }

      const confirmed = window.confirm('등록하시겠습니까?')
      if (confirmed) {
        axios
          .post('api/insertReview', data)
          .then((res) => {
            console.log(res)
            if (res.data === 'success') {
              router.push({ name: 'productDetailView', query: { id: route.query.productId } })
            }
          })
          .catch((error) => {
            console.log(error)
            if (error.response.data === 'fail') {
              alert('리뷰 등록 실패')
              return
            }
            if (error.response.status === 500) {
              router.push('errorForm')
              return
            }
          })
      }
    }
    return { route, productInfo, getImageUrl, review, insertReviewBtn }
  }
}
</script>

<style scoped>
@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);
.rate {
  display: inline-block;
  border: 0;
  margin-right: 15px;
}
.rate > input {
  display: none;
}
.rate > label {
  float: right;
  color: #ddd;
}
.rate > label:before {
  display: inline-block;
  font-size: 3rem;
  padding: 0.3rem 0.2rem;
  margin: 0;
  cursor: pointer;
  font-family: FontAwesome;
  content: '\f005 ';
}
.rate .half:before {
  content: '\f089 ';
  position: absolute;
  padding-right: 0;
}
.rate input:checked ~ label,
.rate label:hover,
.rate label:hover ~ label {
  color: orange !important;
}
.rate input:checked + .rate label:hover,
.rate input input:checked ~ label:hover,
.rate input:checked ~ .rate label:hover ~ label,
.rate label:hover ~ input:checked ~ label {
  color: orange !important;
}
.mb-3 {
  margin-bottom: 3%;
}
.form-label {
  font-size: large;
  font-weight: bold;
}
.form_radio_btn {
  width: 20%;
  height: 45px;
  border: 1px solid #eae7e7;
  border-radius: 10px;
  display: inline-block;
  margin-right: 10px;
}
.form_radio_btn input[type='radio'] {
  display: none;
}
.form_radio_btn label {
  display: block;
  border-radius: 10px;
  margin: 0 auto;
  text-align: center;
  height: -webkit-fill-available;
  line-height: 45px;
  cursor: pointer;
}

/* Checked */
.form_radio_btn input[type='radio']:checked + label {
  background: #184da0;
  color: #fff;
}

/* Hover */
.form_radio_btn label:hover {
  color: #666;
}

/* Disabled */
.form_radio_btn input[type='radio'] + label {
  background: #f9fafc;
  color: #666;
}
</style>
