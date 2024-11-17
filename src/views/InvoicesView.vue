<template>
    <div>
        <h1>Invoices</h1>
    </div>
</template>

<script setup>
import { onBeforeRouteLeave } from 'vue-router';

onBeforeRouteLeave((to, from, next) => {
    if (confirm('Are you sure you want to leave?')) {
        next();
    } else {
        next(false);
    }
});

</script>