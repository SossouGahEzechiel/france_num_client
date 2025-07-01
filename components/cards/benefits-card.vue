<template>
	<div class="benefit-card">
		<div class="benefit-icon">
			<i :class="`fas ${icon}`"></i>
		</div>
		<h3>{{ title }}</h3>
		<p>{{ description }}</p>
	</div>
</template>

<script setup lang="ts">
defineProps({
	icon: {
		type: String,
		default: ""
	},
	title: {
		type: String,
		default: ""
	},
	description: {
		type: String,
		default: ""
	}
});
</script>