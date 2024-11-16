<template>
  <div class="home">

    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link v-for="destination in destinations" :to="destination.slug" :key="destination.id">
        {{ destination.name }}
      </router-link>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import sourceData from '@/data.json'
import { ref } from 'vue'

const destinations = ref(sourceData.destinations);

</script>


<style scoped></style>
