export const useApi = () => {
	const config = useRuntimeConfig()

	// ""
	const apiBase = config.public.apiBase
	console.log("ApiBase-c:", config.public);

	const defaultHeaders = {
		'Content-Type': 'application/json',
		'Accept': 'application/json',
		'ngrok-skip-browser-warning': 'true',
	}

	return {
		async get(endpoint, options = {}) {
			return await $fetch(endpoint, {
				method: 'GET',
				baseURL: apiBase,
				headers: {...defaultHeaders, ...options.headers},
				...options
			})
		},

		async post(endpoint, data, options = {}) {
			return await $fetch(endpoint, {
				method: 'POST',
				baseURL: apiBase,
				headers: {...defaultHeaders, ...options.headers},
				body: data,
				...options
			})
		},

		async put(endpoint, data, options = {}) {
			return await $fetch(endpoint, {
				method: 'PUT',
				baseURL: apiBase,
				headers: {...defaultHeaders, ...options.headers},
				body: data,
				...options
			})
		},

		async delete(endpoint, options = {}) {
			return await $fetch(endpoint, {
				method: 'DELETE',
				baseURL: apiBase,
				headers: {...defaultHeaders, ...options.headers},
				...options
			})
		}
	}
}