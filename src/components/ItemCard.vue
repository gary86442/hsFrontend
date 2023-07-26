<script setup>
import { defineProps, reactive } from 'vue';

const props = defineProps({
  initialItem: {
    type: Object,
    required: true
  }
});

const Item = reactive(props.initialItem);
</script>




<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <!-- <img
        class="card-img-top"
        :src="Item.image"
        alt="Card image cap"
        width="286px"
        height="180px"
      > -->
      <div class="card-body">
          <div>{{ value.name }}</div>
        <div>{{ stock.color }}</div>
        <div>{{ stock.size }}</div>
        <div>${{ Item.price }}</div>  
        <span class="badge badge-secondary">{{ Item.Category }}</span>
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

