<template>
	<header>
		<div class="container header-content">
			<div class="logo">
				<i class="fas fa-globe-europe"></i>
				<span>FranceNum</span>
			</div>
			<div class="contact-header">
				<TelLink :phone="phone"/>
				<MailToLink :email="email"/>
			</div>
		</div>
	</header>
</template>

<script lang="ts" setup>
import TelLink from "~/components/tel-link.vue";
import MailToLink from "~/components/mail-to-link.vue";

defineProps({
	phone: {
		type: String,
		default: ""
	},
	email: {
		type: String,
		default: ""
	}
});
</script>