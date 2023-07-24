<script setup>
// import { ref, computed } from "vue";
import { NCarousel, NCarouselItem, NImage } from "naive-ui";
// const effectRef = ref("fade");
// const isCardRef = computed(() => effectRef.value === "card");

</script>

<template>
  <h1>熱銷TOP 5</h1>
  <n-carousel trigger="hover" :autoplay="true" :effect="effectRef" :centered-slides="isCardRef" :slides-per-view="isCardRef ? 'auto' : 1" draggable style="height: 1000px">
    <n-carousel-item >
      <n-image class="carousel-image"  src="https://i.imgur.com/jEdodad.jpg" />
    </n-carousel-item>
    <n-carousel-item >
      <n-image class="carousel-image"  src="https://i.imgur.com/IfxgyFI.jpg" />
    </n-carousel-item>
    <n-carousel-item >
      <n-image class="carousel-image"  src="https://i.imgur.com/IfxgyFI.jpg" />
    </n-carousel-item>
    <n-carousel-item >
      <n-image class="carousel-image"  src="https://i.imgur.com/PChh3PT.jpg" />
    </n-carousel-item>
  </n-carousel>
</template>

<style scoped>
.carousel.n-image {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-image {
  max-width: 100%;
}
</style>