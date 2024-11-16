<template>
  <div class="home">
    <the-navigation></the-navigation>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import TheNavigation from '@/components/TheNavigation.vue'
</script>


<style scoped></style>
