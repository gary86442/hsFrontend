<script setup>
import { NBreadcrumb, NBreadcrumbItem } from 'naive-ui';

const tabs = [
  {
    title: '全部商品',
    path: '/items'
  },
  {
    title: 'Brotop',
    path: '/items/1'
  },
  {
    title: '上衣',
    path: '/items/2'
  },
  {
    title: '下身',
    path: '/items/3'
  },
  {
    title: '洋裝',
    path: '/items/4'
  },
  {
    title: '套裝＆連身褲',
    path: '/items/5'
  },
  {
    title: '外套＆罩衫',
    path: '/items/6'
  },
  {
    title: '配件',
    path: '/items/7'
  },
  {
    title: '鞋子',
    path: '/items/8'
  },

  
];

</script>

<template>
  <div class="tabs">
    <n-breadcrumb>
      <n-breadcrumb-item v-for="tab in tabs" :key="tab.id">
        <router-link :to="tab.path">{{ tab.title }}</router-link>
      </n-breadcrumb-item>
    </n-breadcrumb>
  </div>
</template>


<style>
.n-breadcrumb {
  margin-top: 51px;
}
.n-breadcrumb-item {
  margin-right: 20px; /* 调整品项之间的右侧间距，您可以根据需要调整此值 */
}
</style>