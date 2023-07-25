<script setup>
import Category from './Category.vue';
import ItemCard from '@/components/ItemCard.vue';
import Pagination from '@/components/Pagination.vue';
import itemAPI from '@/apis/items';
import { Toast } from '@/utils/helpers';

import { ref, onMounted } from 'vue';

const items = ref([]);
const categories = ref([]);
const categoryId = ref(-1);
const currentPage = ref(1);
const totalPage = ref(1); // Assuming totalPage is an integer representing the total number of pages
const previousPage = ref(-1);
const nextPage = ref(-1);

onMounted(async () => {
  await fetchItems();
});

async function fetchItems(queryPage = currentPage.value, queryCategoryId = categoryId.value) {
  try {
    const response = await itemAPI.getItems({
      page: queryPage,
      categoryId: queryCategoryId
    });

    // Update the values with the API response
    items.value = response.items;
    categories.value = response.categories;
    categoryId.value = response.categoryId;
    currentPage.value = response.currentPage;
    totalPage.value = response.totalPage;
    previousPage.value = response.previousPage;
    nextPage.value = response.nextPage;

    console.log('response', response);
  } catch (error) {
    Toast.fire({
      icon: 'error',
      title: '無法取得餐廳資料，請稍後再試'
    });
  }
}
</script>


<template>
  <!-- 二級路由出口 -->
  <div class="category-wrapper">
  <Category />
<h1>我想要商品</h1>  
</div>
    <div class="row">
      <ItemCard
      v-for="item in items"
      :key="item.id"
      :initial-item="item"
      />
    </div>
  <!-- 分頁標籤 RestaurantPagination -->
  <Pagination />
</template>

<style>
.category-wrapper {
  /* 设置组件的宽度和高度 */
  max-width: 100%;
  height: 50px;
  margin:-40px;
  padding-bottom: 100px;
  /* 设置组件的缩放 */
  transform: scale(0.9); /* 缩放为原来的1.5倍 */
}
.row {
  margin-top: 20px;
}
</style>