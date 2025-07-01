<template>
	<form id="heroForm" method="post">
		<div class="form-group">
			<label for="name">Nom complet</label>
			<input type="text" id="name" v-model="formData.fullName" required placeholder="Votre nom">
		</div>

		<div class="form-group">
			<label for="email">Adresse email</label>
			<input type="email" id="email" v-model="formData.email" required placeholder="votre@email.com">
		</div>

		<div class="form-group">
			<label for="phone">Téléphone</label>
			<input type="tel" id="phone" v-model="formData.phone" required placeholder="01 23 45 67 89">
		</div>

		<div class="form-group">
			<label for="business">Type d'entreprise</label>
			<select id="business" v-model="formData.business" required>
				<option value="">Sélectionnez votre activité</option>
				<option value="Entreprise">Entreprise (TPE/PME)</option>
				<option value="Artisan">Artisan</option>
				<option value="Commerçant">Commerçant</option>
				<option value="Profession Libérale">Profession libérale</option>
			</select>
		</div>

		<button type="button" @click="formHandler" :disabled="isLoading" class="submit-btn">
			<span v-if="isLoading">
				<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
				<span class="sr-only">Loading...</span>
			</span>
			<span v-else>Vérifier mon éligibilité</span>
		</button>
	</form>
</template>

<script setup lang="js">
import {useFormStore} from '~/stores/FormStore';
import Toastify from 'toastify-js';

const formStore = useFormStore();
const isLoading = ref(false);

const formData = ref({
	fullName: "",
	email: "",
	phone: "",
	business: "",
});

const formHandler = () => {
	isLoading.value = true;
	formStore.post(formData.value).then(_ => showToast()).catch(_ => alert(formStore.message));
}

const showToast = () => {

	isLoading.value = false;
	if (formStore.message.length !== 0) {
		Toastify({
			text: formStore.message,
			duration: 3000,
			gravity: "top",
			position: "right",
			stopOnFocus: true,
			close: true,
			backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
		}).showToast();

		if (formStore.message === "Formulaire envoyé") {
			formData.value = {
				fullName: "",
				email: "",
				phone: "",
				business: "",
			};
		}
	}
}
</script>

