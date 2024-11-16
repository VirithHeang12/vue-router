<template>
    <section v-if="destination" class="destination">
        <h1>{{ destination.name }}</h1>
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.description">
            <p>{{ destination.description }}</p>
        </div>
    </section>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute();
const destination = ref(null);

const initData = async () => {
    const response = await fetch(`https://travel-dummy-api.netlify.app/${route.params.slug}`);
    destination.value = await response.json();
};

onMounted(initData);

watch(() => route.params.slug, initData);

</script>