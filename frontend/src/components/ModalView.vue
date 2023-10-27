<template>
  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <span @click="closeModal" class="close-button">&times;</span>
      <h2>모달 타이틀</h2>
      <!-- 모달 내용을 추가하세요 -->
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const showModal = ref(false)

    const openModal = () => {
      showModal.value = true
    }

    const closeModal = () => {
      showModal.value = false
    }

    return {
      showModal,
      openModal,
      closeModal
    }
  }
}
</script>

<style scoped>
/* 모달 스타일을 추가하세요 */
</style>
