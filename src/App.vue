<script setup>
import { RouterView } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"

import LayoutNavBar from '@/components/LayoutNavBar.vue'
import LayoutFooter from '@/components/LayoutFooter.vue'
import LayoutHeader from '@/components/LayoutHeader.vue'

</script>

<template>
    <!-- 準備一級路由的出口組件 -->
    <div class="app-container">
        <!-- <Nav /> -->
        <LayoutNavBar />
        <LayoutHeader/>
        <RouterView />
        <LayoutFooter />
    </div>
</template>

<style>
@import '@/assets/base.css';
</style>