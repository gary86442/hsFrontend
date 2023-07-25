<script>


</script>

<template>
  <h3>ItemDetail</h3>
  <p>{{ item.name }}</p>
  <p>{{ item.price }}</p>
  <p>{{ item.category }}</p>
  <p>{{stock.size}}</p>
  <p>{{stock.color}}</p>
  <p> {{stock.itemStock}} </p>
  <p>庫存量</p>
  <p> {{stock.itemStock}} </p>
  <p>商品詳細資訊</p>
  <p> {{item.description}} </p>
  <p> 數量： </p>
  <p> {{item.quantity}} </p>
  <button type="button" class="btn btn-danger btn-border favorite mr-2">
    加到購物車
  </button>

</template>