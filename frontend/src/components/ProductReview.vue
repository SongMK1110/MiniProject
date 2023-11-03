<template>
  <div class="review-section">
    <h2>상품 리뷰</h2>
    <ul class="review-list" v-if="reviewList">
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
          <input type="radio" value="3" v-model="review.rate" readonly /><label title="3점"></label>
          <input type="radio" value="2.5" v-model="review.rate" readonly /><label
            class="half"
            title="2.5점"
          ></label>
          <input type="radio" value="2" v-model="review.rate" readonly /><label title="2점"></label>
          <input type="radio" value="1.5" v-model="review.rate" readonly /><label
            class="half"
            title="1.5점"
          ></label>
          <input type="radio" value="1" v-model="review.rate" readonly /><label title="1점"></label>
          <input type="radio" value="0.5" v-model="review.rate" readonly /><label
            class="half"
            title="0.5점"
          ></label>
        </fieldset>
        <div class="review-content">{{ review.content }}</div>
        <label>댓글: </label><input type="text" v-model="review.reviewComment" />
        <button type="button" @click="insertComment(review.reviewId)">등록</button>
        <div class="comment-list" v-for="(comment, i) in reviewCommentList" :key="i">
          <div class="comment" v-if="comment.reviewId === review.reviewId">
            <div v-if="editingCommentId === comment.commentId">
              <div class="comment-author">작성자: {{ comment.name }}</div>
              <textarea v-model="commentReview"></textarea>
              <div class="comment-date">작성일: {{ comment.rdate }}</div>
              <button @click="saveEditedComment(comment.commentId, commentReview)">저장</button>
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
</template>
<script lang="ts">
import { ref } from 'vue'

export default {
  props: [
    'reviewList',
    'insertComment',
    'reviewCommentList',
    'editingCommentId',
    'saveEditedComment',
    'userId',
    'updateComment',
    'deleteComment',
    'reviewComment'
  ],
  setup(props) {
    const commentReview = ref(props.reviewComment)

    return { commentReview }
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
</style>
