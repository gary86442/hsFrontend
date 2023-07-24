<script setup>
import Category from './Category.vue';
import ItemCard from '@/components/ItemCard.vue';
import Pagination from '@/components/Pagination.vue';




</script>


<template>
  <!-- 二級路由出口 -->
  <div class="category-wrapper">
  <Category />
<h1>我想要商品</h1>  
</div>
    <div class="row">
      <ItemCard />
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