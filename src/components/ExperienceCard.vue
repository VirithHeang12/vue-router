<template>
    <div class="card">
        <img :src="`/images/${experience.image}`" :alt="experience.name" />
        <span class="card__text">
            <h3>{{ experience.name }}</h3>
        </span>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    experience: {
        type: Object,
        required: true,
    },
});
</script>

<style scoped></style>