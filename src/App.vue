<template>
	<div class="home">
		<the-navigation></the-navigation>
		<div class="container">
			<!-- 
				Use key to force re-render of the component 
				when the route changes, so that the component
				is re-mounted and the data is re-fetched.
			-->

			<!-- <router-view :key="$route.path"></router-view> -->

			<router-view v-slot="{ Component, route }">
				<transition name="slide" mode="out-in">
					<component :is="Component" :key="route.path" />
				</transition>
			</router-view>
		</div>
	</div>
</template>

<script setup>
import TheNavigation from '@/components/TheNavigation.vue'
</script>


<style scoped>
.slide-enter-active,
.slide-leave-active {
	transition: opacity 0.3s, transform 0.3s;
}

.slide-enter-from,
.slide-leave-to {
	opacity: 0;
	transform: translateX(-30%);
}
</style>
