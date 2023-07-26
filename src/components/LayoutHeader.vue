<script setup>
import { NBreadcrumb, NBreadcrumbItem } from 'naive-ui';

const tabs = [
  {
    title: '首頁',
    path: '/home'
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
  margin-right: 20px;
}
</style>
