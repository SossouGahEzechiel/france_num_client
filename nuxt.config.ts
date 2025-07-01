// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	devtools: {enabled: true},
	runtimeConfig: {
		public: {
			apiBase: 'http://localhost:3001/api'
		}
	},
	css: [
		"~/assets/css/main.css",
		'toastify-js/src/toastify.css'
	],
	modules: [
		'@pinia/nuxt',
	],
	app: {
		head: {
			title: "Votre site internet gratuit | Financé par l'État et votre région",
			link: [
				{
					rel: "stylesheet",
					href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
				},
				{
					rel: "stylesheet",
					href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css",
					integrity: "sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr",
					crossorigin: "anonymous"
				}
			]
		}
	}
})
