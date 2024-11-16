<template>
    <section v-if="destination" class="destination">
        <h1>{{ destination.name }}</h1>
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.description">
            <p>{{ destination.description }}</p>
        </div>
    </section>

    <section class="experiences">
        <h2>Top Experiences in {{ destination.name }}</h2>
        <div class="cards">
            <router-link v-for="experience in destination.experiences" :key="experience.slug"
                :to="{ name: 'experience.show', params: { experienceSlug: experience.slug } }">
                <experience-card :experience="experience"></experience-card>
            </router-link>
        </div>
        <router-view></router-view>
    </section>
</template>

<script setup>
import sourceData from '@/data.json'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import ExperienceCard from '@/components/ExperienceCard.vue'

const route = useRoute();
const destinations = ref(sourceData.destinations);

const destination = computed(() => destinations.value.find(destination => destination.slug === route.params.slug));



</script>