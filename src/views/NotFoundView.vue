<template>
    <div class="not-found">
        <h1>404 Not Found</h1>
        <p>
            Oops, we couldn't find that page. Try going
            <router-link :to="{ name: 'home' }">home</router-link>
        </p>
    </div>
</template>