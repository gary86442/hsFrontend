  <script setup>

    import {v4 as uuidv4} from 'uuid'
    import { NBreadcrumb, NBreadcrumbItem } from 'naive-ui'

  const tabs = [
    {
      id: uuidv4(),
      title: '首頁',
      path: '/'
    },
    {
      id: uuidv4(),
      title: '全部商品',
      path: '/items'
    },
    {
      id: uuidv4(),
      title: '最新資訊',
      path: '/news/top'
    },
    {
      id: uuidv4(),
      title: '人氣商品',
      path: '/items/top'
    },
    {
      id: uuidv4(),
      title: '關於我們',
      path: '/about'
    }
  ]

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
