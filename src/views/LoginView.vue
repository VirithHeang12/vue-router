<template>
    <div class="login">
        <form @submit.prevent="login" class="form">
            <h1>Login</h1>
            <label for="username">Username</label>
            <input type="text" id="username" v-model="username" class="input" />
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" class="input" />
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const username = ref("");
const password = ref("");

const login = () => {
    window.user = username.value;
    const redirectPath = route.query.redirect || "/protected";
    router.push({ path: redirectPath });
};
</script>

<style scoped></style>