import axios from 'axios'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
	const config = useRuntimeConfig()

	const instance = axios.create({
		baseURL: config.public.apiBase, // définie dans nuxt.config.ts
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
	})

	return {
		provide: {
			axios: instance
		}
	}
})
