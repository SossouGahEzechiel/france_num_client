<template>
	<section class="hero">
		<div class="container">
			<div class="hero-grid">
				<div class="hero-content">
					<h1>VOTRE SITE INTERNET ENTIÈREMENT GRATUIT</h1>
					<div class="hero-tagline">Financé par l'État et votre région</div>
					<p class="hero-subtitle">Un programme officiel soutenu par votre région et la transition numérique des
						TPE/PME</p>

					<div class="hero-features">
						<div class="hero-feature">
							<i class="fas fa-check-circle"></i>
							<span>Site vitrine ou e-commerce sur-mesure</span>
						</div>
						<div class="hero-feature">
							<i class="fas fa-check-circle"></i>
							<span>Aucune avance de frais - 100% financé</span>
						</div>
						<div class="hero-feature">
							<i class="fas fa-check-circle"></i>
							<span>Subvention régionale garantie</span>
						</div>
						<div class="hero-feature">
							<i class="fas fa-check-circle"></i>
							<span>Accompagnement personnalisé</span>
						</div>
					</div>

					<p class="hero-subtitle"><strong>Offre limitée dans le temps - Vérifiez votre éligibilité maintenant</strong>
					</p>
				</div>

				<div class="form-container">
					<div class="form-header">
						<h2>Vérifiez votre éligibilité</h2>
						<p>En 30 secondes seulement</p>
					</div>

					<Form/>

					<p class="disclaimer">En soumettant ce formulaire, vous acceptez d'être contacté par nos conseillers.</p>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup lang="ts">
import Form from "~/components/partials/form.vue";
</script>