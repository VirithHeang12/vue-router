<template>
    <section class="destination">
        <h1>{{ destination.name }}</h1>
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.description">
            <p>{{ destination.description }}</p>
        </div>
    </section>
</template>

<script setup>
import sourceData from '@/data.json'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute();
const destinations = ref(sourceData.destinations);

const destination = computed(() => {
    return destinations.value.find(destination => destination.id === +route.params.destination);
});
</script>