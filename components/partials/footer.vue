<template>
	<footer>
		<div class="container">
			<div class="footer-content">
				<div class="footer-section">
					<h3>À propos du programme</h3>
					<p>Ce programme officiel est soutenu par votre région et la transition numérique des TPE/PME. Nous vous
						accompagnons dans votre digitalisation grâce à des subventions publiques.</p>
				</div>

				<div class="footer-section">
					<h3>Contact</h3>
					<div class="contact-info">
						<TelLink :phone="contactData.phone"/>
						<MailToLink :email="contactData.email"/>
						<a href="#">
							<i class="fas fa-user"></i>
							<span>{{contactData.responsibleName}} - {{contactData.positionHeld}}</span>
						</a>
					</div>
				</div>

				<div class="footer-section">
					<h3>Liens utiles</h3>
					<p><a href="https://www.francenum.gouv.fr/" target="_blank" style="color: #ccc; text-decoration: none;">FranceNum
						- Portail officiel</a></p>
					<p><a href="#" style="color: #ccc; text-decoration: none;">Conditions d'éligibilité</a></p>
					<p><a href="#" style="color: #ccc; text-decoration: none;">FAQ</a></p>
				</div>
			</div>

			<div class="copyright">
				<p>&copy; 2023 Programme de digitalisation des TPE/PME. Tous droits réservés.</p>
				<p>En partenariat avec les dispositifs régionaux de soutien à la digitalisation.</p>
			</div>
		</div>
	</footer>
</template>

<script lang="js" setup>
import TelLink from "~/components/tel-link.vue";
import MailToLink from "~/components/mail-to-link.vue";

defineProps({
	contactData: {
		type: Object,
		default: () => ({})
	}
});
</script>