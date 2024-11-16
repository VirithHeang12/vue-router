<template>
    <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link v-for="destination in destinations"
            :to="{ name: 'destination.show', params: { destination: destination.id } }" :key="destination.id">
            {{ destination.name }}
        </router-link>
    </div>
</template>

<script setup>
import sourceData from '@/data.json'
import { ref } from 'vue'

const destinations = ref(sourceData.destinations);
</script>

<style scoped>
#nav .vue-school-active-link {
    color: red;
    border-bottom: 2px solid red;
}
</style>