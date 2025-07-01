<template>
	<section class="benefits">
		<div class="container">
			<div class="section-title">
				<h2>Créez votre présence en ligne sans frais</h2>
				<p>Profitez d'un site internet professionnel entièrement pris en charge par les subventions publiques</p>
			</div>

			<div class="benefits-grid">
				<CardsBenefitsCard
					v-for="benefit in benefits"
					:key="benefit.title"
					:icon="benefit.icon"
					:title="benefit.title"
					:description="benefit.description"
				/>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
const benefits = [
	{
		icon: "fa-store",
		title: "Site vitrine ou e-commerce",
		description: "Créez un site web professionnel adapté à votre activité, qu'il s'agisse de présentation ou de vente en ligne."
	},
	{
		icon: "fa-euro-sign",
		title: "Aucune avance de frais",
		description: "Nous avançons tous les coûts. Vous ne payez rien grace aux subventions que nous obtenons pour vous."
	},
	{
		icon: "fa-file-contract",
		title: "Subvention régionale validée",
		description: "Notre expertise garantit l'acceptation de votre dossier de subvention par les autorités régionales."
	},
	{
		icon: "fa-hands-helping",
		title: "Accompagnement complet",
		description: "De la création à la mise en ligne, nous vous accompagnons à chaque étape de votre projet numérique."
	}
];
</script>
