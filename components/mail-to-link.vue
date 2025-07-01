<template>
	<a :href="`mailto:${email}`">
		<i class="fas fa-envelope"></i>
		<span>{{ email }}</span>
	</a>
</template>

<script lang="ts" setup>
defineProps({
	email: {
		type: String,
		default: ""
	}
})
</script>