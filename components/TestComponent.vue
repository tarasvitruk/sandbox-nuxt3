<template>
	<div class="flex flex-col justify-center items-center py-10">
		<h1 class="mb-4">{{ welcomeText }}</h1>
		<svgo-logo-tarvit class="w-20" />
	</div>
</template>

<script setup lang="ts">
const welcomeText = ref('Sandbox Nuxt 3');
</script>