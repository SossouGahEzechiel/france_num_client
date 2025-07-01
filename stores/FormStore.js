import {defineStore} from "pinia";
import {ApiUrl} from "~/utils/api-url.js";


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
			this.loading = true;
			try {
				const response = await $fetch(ApiUrl.getAsUrl(ApiUrl.FORMS), {
					method: "POST",
					body: JSON.stringify(data)
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