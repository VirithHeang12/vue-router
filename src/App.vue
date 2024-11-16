<template>
  <div class="home">
    <the-navigation></the-navigation>
    <div class="container">
      <!-- 
        Use key to force re-render of the component 
        when the route changes, so that the component
        is re-mounted and the data is re-fetched.
      -->

      <!-- <router-view :key="$route.path"></router-view> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import TheNavigation from '@/components/TheNavigation.vue'
</script>


<style scoped></style>
