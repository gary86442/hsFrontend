<template>
  <div class="tabs">
    <n-breadcrumb>
      <n-breadcrumb-item v-for="tab in tabs" :key="tab.id">
        <router-link :to="tab.path">{{ tab.title }}</router-link>
      </n-breadcrumb-item>
    </n-breadcrumb>
  </div>
</template>

<script setup>
import { NBreadcrumb, NBreadcrumbItem } from 'naive-ui';


const tabs = [
  {
    title: '首頁',
    path: '/'
  },
  {
    title: '全部商品',
    path: '/items'
  },
  {
    title: '最新資訊',
    path: '/news/top'
  },
  {
    title: '人氣商品',
    path: '/items/top'
  },
  {
    title: '關於我們',
    path: '/about'
  }
];

</script>

<style>
.n-breadcrumb {
  margin-top: 51px;
}
.n-breadcrumb-item {
  margin-right: 20px; /* 调整品项之间的右侧间距，您可以根据需要调整此值 */
}
</style>