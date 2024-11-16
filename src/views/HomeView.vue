<template>
  <div class="home">
    <h1>All Destinations</h1>
    <div class="destinations">
      <router-link v-for="destination in destinations"
        :to="{ name: 'destination.show', params: { destination: destination.id, slug: destination.slug } }"
        :key="destination.id">
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.description">
      </router-link>
    </div>
  </div>
</template>

<script setup>
import sourceData from '@/data.json'
import { ref } from 'vue'

const destinations = ref(sourceData.destinations);

</script>

<style scoped></style>
