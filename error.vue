<template>
	<div class="flex justify-center items-center h-full">
		<div class="flex flex-col text-center">
			<div class="my-auto">
				<h1 v-if="error.statusCode" class="text-5xl font-bold">
					{{ error.statusCode }}
				</h1>
				<p class="mt-5 text-lg">
					{{ error.statusMessage }}
				</p>
				<button type="button" class="mt-10 underline hover:no-underline" @click="handleError">
					Homepage
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	error: {
		type: Object,
		required: true,
	},
});

useHead({
	title: `Error: ${props.error.statusMessage}`,
});

const handleError = () => clearError({ redirect: '/' });
</script>
