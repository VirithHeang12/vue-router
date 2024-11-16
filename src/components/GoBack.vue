<template>
    <div>
        <span class="go-back">
            <button @click="clickCallback">Go Back</button>
        </span>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const clickCallback = () => {
    router.go(-1);
};
</script>

<style scoped></style>