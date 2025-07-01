import {defineStore} from "pinia";
import {ApiUrl} from "~/utils/api-url.js";

export const useContactData = defineStore('ContactData', {
	state: () => ({
		contactData: {
			name: '',
			email: '',
			responsibleName: '',
			positionHeld: '',
			phone: ''
		},
		message: '',
	}),
	actions: {
		async get() {
			const response = await $fetch(ApiUrl.getAsUrl(ApiUrl.CONTACT_DATA));

			try {
				this.contactData = response.data;
				this.message = "success";
			} catch (error) {
				this.contactData = {};
				this.message = error?.message || "error";
			}

		}
	}
});