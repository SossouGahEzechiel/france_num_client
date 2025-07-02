export const useApiUrl = () => {
	const configs = useRuntimeConfig();
	const apiBase = configs.public.apiBase;

	return {
		FORMS: `${apiBase}/forms`,
		CONTACT_DATA: `${apiBase}/contact-data`,
	};
}