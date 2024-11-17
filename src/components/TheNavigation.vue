<template>
    <div id="nav">
        <AppLink id="logo" to="/">Vue School Travel App</AppLink>
        <AppLink v-for="destination in destinations" :to="{
            name: 'destination.show',
            params: { destination: destination.id, slug: destination.slug },
        }" :key="destination.id">
            {{ destination.name }}
        </AppLink>
        <AppLink :to="{ name: 'protected' }">Dashboard</AppLink>
        <AppLink to="https://router.vuejs.org">Vue Router</AppLink>
    </div>
</template>

<script setup>
import sourceData from "@/data.json";
import { ref } from "vue";

const destinations = ref(sourceData.destinations);
</script>

<style scoped>
#nav .vue-school-active-link {
    color: red;
    border-bottom: 2px solid red;
}
</style>