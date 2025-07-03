import {defineStore} from "pinia";
import {useApi} from "~/composables/use-api";

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
			const api = useApi();
			const apiUrl = useApiUrl();

			try {
				const response = await api.get(apiUrl.CONTACT_DATA);

				this.contactData = response.data;
				this.message = "success";
			} catch (error) {
				this.contactData = {};
				this.message = error?.message || "error";
			}

		}
	}
});