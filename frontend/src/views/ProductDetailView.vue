<template>
  <div class="centered-content">
    <h1>상품 디테일 페이지</h1>
    <div>
      <div class="image-list">
        <div v-for="(img, i) in imgList" :key="i" class="image-item">
          <img :src="getImageUrl(img.img)" style="width: 200px" /><br />
        </div>
      </div>
      <h2 v-if="product">이름: {{ product.name }}</h2>
      <p v-if="product">가격: {{ addCommas(product.price) }}원</p>
      <p v-if="product">설명: {{ product.content }}</p>
    </div>
    <div>
      <div>
        <label for="quantity">수량:</label>
        <button @click="decrementQuantity">-</button>
        <input type="number" id="quantity" v-model="quantity" readonly />
        <button @click="incrementQuantity">+</button>
      </div>
      <p v-if="totalPrice != ''">총 가격: {{ totalPrice }}원</p>
      <p v-else-if="product">총 가격: {{ addCommas(product.price) }}원</p>
    </div>
    <div>
      <button style="margin-right: 10px" @click="likeBtn">
        {{ liked ? '좋아요 취소' : '좋아요' }}
      </button>
      <button @click="addToCart">장바구니</button>
    </div>
    <div class="average-rating">
      <h3>전체 평균 별점</h3>
      <fieldset class="rate">
        <input type="radio" v-if="averageRate >= 5" value="5" v-model="averageRate" readonly />
        <label title="5점"></label>
        <input type="radio" v-if="averageRate >= 4.5" value="4.5" v-model="averageRate" readonly />
        <label class="half" title="4.5점"></label>
        <input type="radio" v-if="averageRate >= 4" value="4" v-model="averageRate" readonly />
        <label title="4점"></label>
        <input type="radio" v-if="averageRate >= 3.5" value="3.5" v-model="averageRate" readonly />
        <label class="half" title="3.5점"></label>
        <input type="radio" v-if="averageRate >= 3" value="3" v-model="averageRate" readonly />
        <label title="3점"></label>
        <input type="radio" v-if="averageRate >= 2.5" value="2.5" v-model="averageRate" readonly />
        <label class="half" title="2.5점"></label>
        <input type="radio" v-if="averageRate >= 2" value="2" v-model="averageRate" readonly />
        <label title="2점"></label>
        <input type="radio" v-if="averageRate >= 1.5" value="1.5" v-model="averageRate" readonly />
        <label class="half" title="1.5점"></label>
        <input type="radio" v-if="averageRate >= 1" value="1" v-model="averageRate" readonly />
        <label title="1점"></label>
        <input type="radio" v-if="averageRate >= 0.5" value="0.5" v-model="averageRate" readonly />
        <label class="half" title="0.5점"></label>
      </fieldset>
      <div class="statistics">
        <h3>사이즈 통계</h3>
        <div class="rating">
          <div class="rating-option">
            <span>커요</span>
            <div class="bar">
              <div class="filled" :style="{ width: sizeAvg['1'] + '%' }"></div>
            </div>
            {{ sizeAvg['1'] }}%
          </div>
          <div class="rating-option">
            <span>보통이에요</span>
            <div class="bar">
              <div class="filled" :style="{ width: sizeAvg['2'] + '%' }"></div>
            </div>
            {{ sizeAvg['2'] }}%
          </div>
          <div class="rating-option">
            <span>작아요</span>
            <div class="bar">
              <div class="filled" :style="{ width: sizeAvg['3'] + '%' }"></div>
            </div>
            {{ sizeAvg['3'] }}%
          </div>
        </div>

        <h3>밝기 통계</h3>
        <div class="rating">
          <div class="rating-option">
            <span>밝아요</span>
            <div class="bar">
              <div class="filled" :style="{ width: brightAvg['1'] + '%' }"></div>
            </div>
            {{ brightAvg['1'] }}%
          </div>
          <div class="rating-option">
            <span>보통이에요</span>
            <div class="bar">
              <div class="filled" :style="{ width: brightAvg['2'] + '%' }"></div>
            </div>
            {{ brightAvg['2'] }}%
          </div>
          <div class="rating-option">
            <span>어두워요</span>
            <div class="bar">
              <div class="filled" :style="{ width: brightAvg['3'] + '%' }"></div>
            </div>
            {{ brightAvg['3'] }}%
          </div>
        </div>

        <h3>색감 통계</h3>
        <div class="rating">
          <div class="rating-option">
            <span>선명해요</span>
            <div class="bar">
              <div class="filled" :style="{ width: colorAvg['1'] + '%' }"></div>
            </div>
            {{ colorAvg['1'] }}%
          </div>
          <div class="rating-option">
            <span>보통이에요</span>
            <div class="bar">
              <div class="filled" :style="{ width: colorAvg['2'] + '%' }"></div>
            </div>
            {{ colorAvg['2'] }}%
          </div>
          <div class="rating-option">
            <span>흐려요</span>
            <div class="bar">
              <div class="filled" :style="{ width: colorAvg['3'] + '%' }"></div>
            </div>
            {{ colorAvg['3'] }}%
          </div>
        </div>

        <h3>두께감 통계</h3>
        <div class="rating">
          <div class="rating-option">
            <span>두꺼워요</span>
            <div class="bar">
              <div class="filled" :style="{ width: thickAvg['1'] + '%' }"></div>
            </div>
            {{ thickAvg['1'] }}%
          </div>
          <div class="rating-option">
            <span>보통이에요</span>
            <div class="bar">
              <div class="filled" :style="{ width: thickAvg['2'] + '%' }"></div>
            </div>
            {{ thickAvg['2'] }}%
          </div>
          <div class="rating-option">
            <span>얇아요</span>
            <div class="bar">
              <div class="filled" :style="{ width: thickAvg['3'] + '%' }"></div>
            </div>
            {{ thickAvg['3'] }}%
          </div>
        </div>

        <h3>배송 통계</h3>
        <div class="rating">
          <div class="rating-option">
            <span>빨라요</span>
            <div class="bar">
              <div class="filled" :style="{ width: deliveryAvg['1'] + '%' }"></div>
            </div>
            {{ deliveryAvg['1'] }}%
          </div>
          <div class="rating-option">
            <span>아쉬워요</span>
            <div class="bar">
              <div class="filled" :style="{ width: deliveryAvg['2'] + '%' }"></div>
            </div>
            {{ deliveryAvg['2'] }}%
          </div>
        </div>

        <h3>포장 통계</h3>
        <div class="rating">
          <div class="rating-option">
            <span>꼼꼼해요</span>
            <div class="bar">
              <div class="filled" :style="{ width: packAvg['1'] + '%' }"></div>
            </div>
            {{ packAvg['1'] }}%
          </div>
          <div class="rating-option">
            <span>아쉬워요</span>
            <div class="bar">
              <div class="filled" :style="{ width: packAvg['2'] + '%' }"></div>
            </div>
            {{ packAvg['2'] }}%
          </div>
        </div>
      </div>
    </div>

    <!-- 리뷰를 나타내는 부분 -->
    <div class="review-section">
      <h2>상품 리뷰</h2>
      <ul class="review-list">
        <li class="review-item" v-for="(review, index) in reviewList" :key="index">
          <div class="review-author">작성자: {{ review.name }}</div>
          <div class="review-rating">평점: {{ review.rate }}/5</div>
          <fieldset class="rate">
            <input type="radio" value="5" v-model="review.rate" readonly />
            <label title="5점"></label>
            <input type="radio" value="4.5" v-model="review.rate" readonly />
            <label class="half" title="4.5점"></label>
            <input type="radio" value="4" v-model="review.rate" readonly /><label title="4점">
            </label>
            <input type="radio" value="3.5" v-model="review.rate" readonly /><label
              class="half"
              title="3.5점"
            ></label>
            <input type="radio" value="3" v-model="review.rate" readonly /><label
              title="3점"
            ></label>
            <input type="radio" value="2.5" v-model="review.rate" readonly /><label
              class="half"
              title="2.5점"
            ></label>
            <input type="radio" value="2" v-model="review.rate" readonly /><label
              title="2점"
            ></label>
            <input type="radio" value="1.5" v-model="review.rate" readonly /><label
              class="half"
              title="1.5점"
            ></label>
            <input type="radio" value="1" v-model="review.rate" readonly /><label
              title="1점"
            ></label>
            <input type="radio" value="0.5" v-model="review.rate" readonly /><label
              class="half"
              title="0.5점"
            ></label>
          </fieldset>
          <div class="review-content">{{ review.content }}</div>
          <label for="">댓글: </label><input type="text" v-model="review.reviewComment" />
          <button type="button" @click="insertComment(review.reviewId)">등록</button>
          <div class="comment-list" v-for="(comment, i) in reviewCommentList" :key="i">
            <div class="comment" v-if="comment.reviewId === review.reviewId">
              <div v-if="editingCommentId === comment.commentId">
                <div class="comment-author">작성자: {{ comment.name }}</div>
                <textarea v-model="reviewComment"></textarea>
                <div class="comment-date">작성일: {{ comment.rdate }}</div>
                <button @click="saveEditedComment(comment.commentId)">저장</button>
              </div>
              <div v-else>
                <div class="comment-author">작성자: {{ comment.name }}</div>
                <div class="comment-content">내용: {{ comment.content }}</div>
                <div class="comment-date">작성일: {{ comment.rdate }}</div>
                <div v-if="comment.memberId === parseInt(userId)">
                  <button @click="updateComment(comment.commentId, comment.content)">수정</button>
                  <button @click="deleteComment(comment.commentId)">삭제</button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
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

interface Review {
  reviewId: number
  productId: number
  memberId: number
  content: string
  rate: number
  name: string
  reviewComment: string
  size: number
  brightness: number
  color: number
  thickness: number
  delivery: number
  packaging: number
}

interface Comment {
  commentId: number
  reviewId: number
  memberId: number
  content: string
  rdate: string
  name: string
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
    const product = ref<Product>()
    const imgList = ref<{ img: string }[]>([])
    const token = localStorage.getItem('token')
    const parseToken = parseJwt(token)
    let userId = ''
    if (parseToken !== undefined) {
      userId = parseJwt(token).userName
    }
    const quantity = ref(1)
    const totalPrice = ref('')
    const liked = ref(false)
    const averageRate = ref(0)
    const reviewComment = ref<string>('')
    const reviewCommentList = ref<Comment[]>([])
    const reviewList = ref<Review[]>([])

    const addCommas = (num: number) => {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    // 증가
    const incrementQuantity = () => {
      quantity.value++
      calculateTotalPrice()
    }

    // 감소
    const decrementQuantity = () => {
      if (quantity.value > 1) {
        quantity.value--
        calculateTotalPrice()
      }
    }

    // 총 가격
    const calculateTotalPrice = () => {
      if (product.value !== undefined) {
        totalPrice.value = addCommas(product.value.price * quantity.value)
      }
    }

    // 장바구니에 상품 추가
    const addToCart = async () => {
      const confirmed = window.confirm('장바구니에 상품을 넣으시겠습니까?')

      if (confirmed) {
        try {
          const cartChk = await axios.post('api/cartCheck', {
            productId: route.query.id
          })
          console.log(cartChk)
          if (cartChk.data === 'duplication') {
            alert('장바구니에 있습니다.')
            return
          }

          const response = await axios.post('api/insertCart', {
            productId: route.query.id,
            cnt: quantity.value
          })
          console.log(response)
          if (response.data === 'success') {
            router.push({ name: 'CartView', query: { userId: userId } })
          }
        } catch (error) {
          console.error(error)
        }
      }
    }

    // 좋아요 버튼
    const likeBtn = () => {
      liked.value = !liked.value

      if (liked.value === false) {
        axios
          .post('/api/deleteLike', { productId: route.query.id })
          .then((res) => {
            console.log(res)
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        axios
          .post('/api/insertLike', { productId: route.query.id })
          .then((res) => {
            console.log(res)
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }

    // 상품 디테일 정보
    axios
      .post('/api/productDetail', { productId: route.query.id })
      .then((response) => {
        if (response !== undefined) {
          product.value = response.data.productDetail
          imgList.value = response.data.productDetailImg
        }
        if (response.data.likeCheck > 0) {
          liked.value = true
        } else {
          liked.value = false
        }
      })
      .catch((error) => {
        console.log(error)
      })

    // 리뷰 정보 and 리뷰 통계
    const sizeAvg = ref<any>({ '1': 0, '2': 0, '3': 0 })
    const brightAvg = ref<any>({ '1': 0, '2': 0, '3': 0 })
    const colorAvg = ref<any>({ '1': 0, '2': 0, '3': 0 })
    const thickAvg = ref<any>({ '1': 0, '2': 0, '3': 0 })
    const deliveryAvg = ref<any>({ '1': 0, '2': 0 })
    const packAvg = ref<any>({ '1': 0, '2': 0 })
    axios
      .get('api/reviewProductDetail', { params: { productId: route.query.id } })
      .then((res) => {
        reviewList.value = res.data

        const reviewSizeList: Array<number> = []
        const reviewBrightList: Array<number> = []
        const reviewColorList: Array<number> = []
        const reviewThickList: Array<number> = []
        const reviewDeliveryList: Array<number> = []
        const reviewPackList: Array<number> = []
        res.data.forEach((item: Review) => {
          reviewSizeList.push(item.size)
          reviewBrightList.push(item.brightness)
          reviewColorList.push(item.color)
          reviewThickList.push(item.thickness)
          reviewDeliveryList.push(item.delivery)
          reviewPackList.push(item.packaging)
        })

        sizeAvg.value = calculateAverage3(reviewSizeList)
        brightAvg.value = calculateAverage3(reviewBrightList)
        colorAvg.value = calculateAverage3(reviewColorList)
        thickAvg.value = calculateAverage3(reviewThickList)
        deliveryAvg.value = calculateAverage2(reviewDeliveryList)
        packAvg.value = calculateAverage2(reviewPackList)
      })
      .catch((error) => {
        console.log(error)
      })

    // 리뷰 통계 구하는 함수 (3개)
    function calculateAverage3(list: Array<number>) {
      const counts: any = { '1': 0, '2': 0, '3': 0 }
      list.forEach((item: number) => {
        counts[item.toString()]++
      })

      return {
        '1': Math.floor((counts['1'] / list.length) * 100),
        '2': Math.floor((counts['2'] / list.length) * 100),
        '3': Math.floor((counts['3'] / list.length) * 100)
      }
    }

    // 리뷰 통계 구하는 함수 (2개)
    function calculateAverage2(list: Array<number>) {
      const counts: any = { '1': 0, '2': 0 }
      list.forEach((item: number) => {
        counts[item.toString()]++
      })

      return {
        '1': Math.floor((counts['1'] / list.length) * 100),
        '2': Math.floor((counts['2'] / list.length) * 100)
      }
    }

    // 리뷰 별점 평균
    axios
      .get('api/reviewRateAvg', { params: { productId: route.query.id } })
      .then((res) => {
        averageRate.value = res.data
        if (res.data < 0.5) {
          averageRate.value = 0.5
        } else if (res.data < 1) {
          averageRate.value = 0.5
        } else if (res.data < 1.5) {
          averageRate.value = 1
        } else if (res.data < 2) {
          averageRate.value = 1.5
        } else if (res.data < 2.5) {
          averageRate.value = 2
        } else if (res.data < 3) {
          averageRate.value = 2.5
        } else if (res.data < 3.5) {
          averageRate.value = 3
        } else if (res.data < 4) {
          averageRate.value = 3.5
        } else if (res.data < 4.5) {
          averageRate.value = 4
        } else if (res.data < 5) {
          averageRate.value = 4.5
        } else {
          averageRate.value = 5
        }
      })
      .catch((error) => {
        console.log(error)
      })

    const insertComment = (reviewId: number) => {
      const review = reviewList.value.find((item) => item.reviewId === reviewId)
      const confirmed = window.confirm('등록하시겠습니까?')
      if (confirmed) {
        axios
          .post('api/insertReviewComment', { reviewId: reviewId, content: review?.reviewComment })
          .then((res) => {
            reviewCommentList.value.push(res.data)
            if (review && review.reviewComment !== undefined) {
              review.reviewComment = ''
            }
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }

    axios
      .get('api/selectReviewComment')
      .then((res) => {
        reviewCommentList.value = res.data
      })
      .catch((error) => {
        console.log(error)
      })

    const deleteComment = (commentId: number) => {
      const confirmed = window.confirm('삭제하시겠습니까?')
      if (confirmed) {
        axios
          .post('api/deleteComment', { commentId: commentId, memberId: userId })
          .then((res) => {
            if (res.data === 'success') {
              reviewCommentList.value = reviewCommentList.value.filter(
                (comment) => comment.commentId !== commentId
              )
            }
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }

    const editingCommentId = ref<number>()

    const updateComment = (commentId: number, content: string) => {
      editingCommentId.value = commentId
      reviewComment.value = content
    }

    const saveEditedComment = (commentId: number) => {
      const editedContent = reviewComment.value
      const confirmed = window.confirm('수정하시겠습니까?')

      if (confirmed) {
        axios
          .post('api/updateComment', {
            commentId: commentId,
            content: editedContent,
            memberId: userId
          })
          .then((res) => {
            if (res.data === 'success') {
              editingCommentId.value = -1
              const index = reviewCommentList.value.findIndex(
                (comment) => comment.commentId === commentId
              )
              if (index !== -1) {
                reviewCommentList.value[index].content = editedContent
              }
            }
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }

    return {
      product,
      imgList,
      getImageUrl,
      token,
      parseJwt,
      userId,
      addToCart,
      quantity,
      totalPrice,
      incrementQuantity,
      decrementQuantity,
      calculateTotalPrice,
      parseToken,
      likeBtn,
      liked,
      addCommas,
      reviewList,
      averageRate,
      insertComment,
      reviewComment,
      reviewCommentList,
      deleteComment,
      updateComment,
      editingCommentId,
      saveEditedComment,
      sizeAvg,
      brightAvg,
      colorAvg,
      thickAvg,
      deliveryAvg,
      packAvg
    }
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
  font-size: 1rem;
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
/* .rate label:hover,
.rate label:hover ~ label {
  color: orange !important;
} */
.rate input:checked + .rate label:hover,
.rate input input:checked ~ label:hover,
.rate input:checked ~ .rate label:hover ~ label,
.rate label:hover ~ input:checked ~ label {
  color: orange !important;
}
.image-list {
  display: flex;
  flex-wrap: wrap;
}

.image-item {
  margin: 10px;
}
.centered-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.review-section {
  margin-top: 20px;
}

.review-list {
  list-style: none;
  padding: 0;
}

.review-item {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}

.review-author {
  font-weight: bold;
}

.review-rating {
  margin-top: 5px;
  color: #333;
}

.review-content {
  margin-top: 10px;
  padding-bottom: 20px;
}

#comment {
  margin-bottom: 10px;
}

/* 댓글 목록 스타일 */
.comment-list {
  margin-top: 10px;
}

.comment {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}

.comment-author {
  font-weight: bold;
}

.comment-content {
  margin-top: 5px;
}

.comment-date {
  font-size: 12px;
  color: #777;
}

button {
  margin: 5px;
}

.statistics {
  margin-bottom: 30px;
}

.rating {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.rating-option {
  width: 100px;
  color: orange;
}
.bar {
  background-color: #f0f0f0;
  border-radius: 5px;
  height: 10px;
  margin-top: 5px;
  overflow: hidden;
}

.filled {
  background-color: orange;
  height: 100%;
}
</style>
