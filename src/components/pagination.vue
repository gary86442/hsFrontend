<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  CategoryId: {
    type: [String, Number],
    default: '',
  },
  currentPage: {
    type: Number,
    default: 1,
  },
  totalPage: {
    type: Number,
    required: true,
  },
});

const previousPage = computed(() => Math.max(props.currentPage - 1, 1));
const nextPage = computed(() => Math.min(props.currentPage + 1, props.totalPage));
</script>

<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <!-- 回到上一頁 previousPage -->
      <li :class="['page-Item', { disabled: currentPage === 1 }]">
        <router-link
          v-if="currentPage !== 1"
          class="page-link"
          :to="{ name: 'Items', query: { CategoryId, page: previousPage } }"
        >
          上一頁
        </router-link>
        <span v-else class="page-link">上一頁</span>
      </li>

      <!-- 頁碼 -->
      <li
        v-for="page in totalPage"
        :key="page"
        :class="['page-Item', { active: currentPage === page }]"
      >
        <router-link
          class="page-link"
          :to="{ name: 'Items', query: {CategoryId, page }}"
        >
          {{ page }}
        </router-link>
      </li>

      <!-- 前往下一頁 nextPage -->
      <li :class="['page-item', { disabled: currentPage === totalPage }]">
        <router-link
          v-if="currentPage !== totalPage"
          class="page-link"
          :to="{ name: 'items', query: { CategoryId, page: nextPage } }"
        >
          下一頁
        </router-link>
        <span v-else class="page-link">下一頁</span>
      </li>
    </ul>
  </nav>
</template>



<style>
.pagination {
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>