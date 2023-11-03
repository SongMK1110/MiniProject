<template>
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
</template>

<script lang="ts">
export default {
  props: ['sizeAvg', 'brightAvg', 'colorAvg', 'thickAvg', 'deliveryAvg', 'packAvg'],
  setup() {}
}
</script>

<style scoped>
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
