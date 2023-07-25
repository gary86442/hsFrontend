<!-- <script setup>
import { productAPI } from '../apis/items'
const getProduct = async () => {
  const result = await productAPI.getItem()
  if (result) {
    console.log(result)
  } else {
    console.error('Get product failed', result.error)
  }
}
getProduct()

</script> -->







<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img
        class="card-img-top"
        src="{{ product.image }}"
        alt="Card image cap"
        width="286px"
        height="180px"
      >
      <div class="card-body">
        <p class="card-text title-wrap">
          <a href="#">
            {{ product.name }}
          </a>
        </p>
        <div>${{ product.price }}</div>  
        <span class="badge badge-secondary">{{ product.Category }}</span>
      </div>
      <div class="card-footer">
        <button
          type="button"
          class="btn btn-danger btn-border favorite mr-2"
        >
          加到購物車
        </button>
      </div>
    </div>
  </div>
</template>