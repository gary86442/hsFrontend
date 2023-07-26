<script setup>
import axios from 'axios';
const headers = ['商品訊息', '單價', '數量', '小計', '操作']
const itemFunc = function (id) {
  axios.get(`url/${id}/items`, headers)
}
//axios.post("url/2/items", headers)
</script>
 
<template>
  <div>
  <h1>我是購物車</h1>

  <div class="xtx-cart-page">
    <div class="container m-top-20">
      <div class="cart">
        <table>
          <thead>
            <tr>
              <th v-for="th_name in headers" :key="th_name">{{ th_name }}</th>
              <!-- <th width="400">商品訊息</th>
              <th width="220">單價</th>
              <th width="180">數量</th>
              <th width="180">小計</th>
              <th width="140">操作</th> -->
            </tr>
          </thead>
          商品列表
          <tbody>
            <tr>
              <td @click="itemFunc(1)">apple</td>
              <td @click="itemFunc(2)">banana</td>
              <td @click="itemFunc(3)">..</td>
              <td @click="itemFunc(4)">...</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 操作栏 -->
    </div>
  </div>
</div>
</template>
 
