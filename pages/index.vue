<template>
	<!-- Header -->
	<HeaderComponent :email="contactData.email" :phone="contactData.phone"/>

	<!-- Hero Section avec Formulaire -->
	<Hero/>

	<!-- Benefits Section -->
	<Benefits/>

	<!-- How It Works -->
	<HowItWorks/>

	<!-- Eligibility -->
	<Eligibility/>

	<!-- Partners -->
	<Partners/>

	<!-- Footer -->
	<Footer :contact-data="contactData"/>
</template>

<script lang="js" setup>
import HeaderComponent from "~/components/partials/header.vue";
import Hero from "~/components/partials/hero.vue";
import Benefits from "~/components/partials/benefits.vue";
import HowItWorks from "~/components/partials/how-it-works.vue";
import Eligibility from "~/components/partials/eligibility.vue";
import Partners from "~/components/partials/partners.vue";
import Footer from "~/components/partials/footer.vue";
import {useContactData} from "~/stores/ContactData";

const contactDataStore = useContactData();

const contactData = computed(() => contactDataStore.contactData);

contactDataStore.get();
</script>