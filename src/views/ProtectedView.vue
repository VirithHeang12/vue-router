<template>
    <div>
        <div class="protected">
            <h1>Dashboard</h1>
            <p>Welcome to the protected area, {{ user }}</p>
        </div>
        <button @click="logout">Logout</button>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const user = ref(window.user);
const router = useRouter();

const logout = () => {
    window.user = null;
    router.push({ name: "home" });
};
</script>