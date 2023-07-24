<script setup>
import { ref, watchEffect } from 'vue';
import { RouterView, useRoute } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"
import LayoutNavBar from '@/components/LayoutNavBar.vue'
import LayoutFooter from '@/components/LayoutFooter.vue'
import LayoutHeader from '@/components/LayoutHeader.vue'
const currentRoute = ref('');
const route = useRoute()


watchEffect(() => {
currentRoute.value = route.path
});


</script>

<template>
  <div class="app-container">
    <!-- <Nav /> -->
    <LayoutNavBar />
    <a v-if="currentRoute !== '/signup' && currentRoute !== '/login'" :href="currentRoute === '/signup' || currentRoute === '/login' ? null : '/signup'">
      <LayoutHeader />
    </a>
    <RouterView />
    <LayoutFooter />
  </div>
</template>
