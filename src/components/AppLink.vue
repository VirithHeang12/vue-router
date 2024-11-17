<template>
    <a v-if="isExternal" target="_blank" :href="to">
        <slot></slot>
    </a>
    <router-link v-else v-bind="props">
        <slot></slot>
    </router-link>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { computed, defineProps } from 'vue';

const props = defineProps({
    ...RouterLink.props,
});

const isExternal = computed(() => {
    return typeof props.to === 'string' && props.to.startsWith('http');
});
</script>