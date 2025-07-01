const baseUrl = 'http://localhost:3001/api';

export const ApiUrl = {
	FORMS: "/forms",
	CONTACT_DATA: "/contact-data",


	getAsUrl(pattern) {
		return `${baseUrl}${pattern}`;
	}
};