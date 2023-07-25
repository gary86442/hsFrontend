<script setup>
import { defineProps, reactive } from 'vue';

const props = defineProps({
  initialitem: {
    type: Object,
    required: true
  }
});

const item = reactive(props.initialitem);
</script>




<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img
        class="card-img-top"
        :src="item.image"
        alt="Card image cap"
        width="286px"
        height="180px"
      >
      <div class="card-body">
        <p class="card-text title-wrap">
          <a href="#">{{ item.name }}</a>
        </p>
        <div>${{ item.price }}</div>  
        <span class="badge badge-secondary">{{ item.category }}</span>
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

