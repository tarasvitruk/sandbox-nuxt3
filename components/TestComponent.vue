<template>
	<div class="flex flex-col justify-center items-center py-10">
		<h1 class="mb-4">{{ welcomeText }}</h1>

		<svgo-logo-tarvit class="w-20 h-auto mb-4" />

		<button type="button" @click="scrollToSection('testId')" class="p-2 bg-gray-300">
			Scroll to testId
		</button>
	</div>
</template>

<script setup lang="ts">
const welcomeText = ref('Sandbox Nuxt 3');
const myNumber = ref(7);

function test (num: number) {
	console.log(num);
}

test(myNumber.value);

function scrollToSection (idSection: string) {
	const section = document.getElementById(idSection);
	if (section) {
		section.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	}
}
</script>