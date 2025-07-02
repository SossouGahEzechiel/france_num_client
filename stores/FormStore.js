import {defineStore} from "pinia";


export const useFormStore = defineStore("FormStore", {
	state: () => ({
		forms: {
			fullName: "",
			email: "",
			phone: "",
			business: "",
		},
		message: "",
		loading: false
	}),

	actions: {
		async post(data) {
			const apiUrl = useApiUrl();
			console.log("apiUrl.FORMS:", apiUrl.FORMS);
			this.loading = true;
			try {
				const response = await $fetch(apiUrl.FORMS, {
					method: 'POST',
					body: data,
					headers: {
						'Content-Type': 'application/json',
						'Accept': 'application/json',
						'ngrok-skip-browser-warning': 'true',
					}
				});

				this.message = response.message;
				data = {};
				return response;
			} catch (error) {
				this.message = error.data?.message || "error.data.message";
				this.loading = false;
				return error;
			}
		},
		cleanMessage() {
			this.message = "";
			console.log("Message:", this.message);
		}
	},
});