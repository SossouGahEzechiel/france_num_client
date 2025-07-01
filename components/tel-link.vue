<template>
	<a :href="`tel:${phone}`">
		<i class="fas fa-phone"></i>
		<span>{{ phone }}</span>
	</a>
</template>

<script setup lang="ts">
defineProps({
	phone: {
		type: String,
		default: () => ""
	}
});</script>
