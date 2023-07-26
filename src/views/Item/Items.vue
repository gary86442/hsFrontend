<script setup>
import Category from './Category.vue';
import ItemCard from '@/components/ItemCard.vue';
import Pagination from '@/components/Pagination.vue';
import itemsAPI from '@/apis/items';
import { Toast } from '@/utils/helpers';
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';

// 定义响应式变量
const Items = ref([]);
const CategoryId = ref(-1);
const currentPage = ref(1);
const previousPage = ref(-1);
const nextPage = ref(-1);
const router = useRouter();
// 在组件创建时获取数据
onMounted(async () => {
  const { page = "", categoryId = "" } = router.query;
  await fetchItems({ queryPage: page, queryCategoryId: categoryId });
});

// 使用 watch 监听路由参数的变化，在参数变化时重新获取数据
watch(
  () => router.query,
  (newQuery) => {
    const { page = '', categoryId = '' } = newQuery;
    fetchItems({ queryPage: page, queryCategoryId: categoryId });
  }
);
// 定义方法：获取餐厅数据
async function fetchItems({ queryPage, queryCategoryId }) {
  try {
    const response = await itemsAPI.getRestaurants({
      page: queryPage || currentPage.value,
      categoryId: queryCategoryId
    });

    const {
      items,
      categories,
      categoryId,
      page,
      totalPage,
      prev,
      next
    } = response.data;

    // 将获取的数据更新到响应式变量中
    Items.value = items;
    categories.value = categories;
    CategoryId.value = categoryId;
    currentPage.value = page;
    totalPage.value = totalPage;
    previousPage.value = prev;
    nextPage.value = next;
  } catch (error) {
    // 如果获取数据出错，则显示错误提示
    Toast.fire({
      icon: 'error',
      title: '无法取得餐厅数据，请稍后再试'
    });
  }
}

console.log('Items', Items);
</script>


<template>
  <!-- 二級路由出口 -->
  <div class="category-wrapper">
  <Category />
<h1>我想要商品</h1>  
</div>
    <div class="row">
      <ItemCard/>
    </div>
  <!-- 分頁標籤 ItemPagination -->
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