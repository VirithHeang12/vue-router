<template>
    <section>
        <h1>{{ experience.name }}</h1>
        <img :src="`/images/${experience.image}`" :alt="experience.name">
        <p>{{ experience.description }}</p>
    </section>
</template>

<script setup>
import sourceData from '@/data.json'
import { computed, defineProps, ref } from 'vue'

const props = defineProps({
    destination: {
        type: Number,
        required: true
    },
    experienceSlug: {
        type: String,
        required: true
    }
})
const destinations = ref(sourceData.destinations);
const destination = computed(() => destinations.value.find(destination => destination.id === props.destination));
const experience = computed(() => destination.value.experiences.find(experience => experience.slug === props.experienceSlug));
</script>

<style scoped></style>