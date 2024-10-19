// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-10-19',

  // ssr: false,

  // Enabled version Nuxt 4
  // future: {
  //   compatibilityVersion: 4,
  // },

  devtools: {
    enabled: true
  },

  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-svgo',
  ],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1',
        },
        {
          name: 'robots',
          content: process.env.ENV === 'production' ? 'index, follow' : 'noindex, nofollow',
        },
        { name: 'msapplication-TileColor', content: '#00aba9' },
        { name: 'theme-color', content: '#ffffff' },
      ],
      // link: [
      //   { rel: 'icon', sizes: '48x48', type: 'image/png', href: '/favicon-48x48.png' },
      // 	{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      // 	{ rel: 'shortcut icon', href: '/favicon.ico' },
      // 	{ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      // 	{ rel: 'manifest', href: '/site.webmanifest' },
      // ],
    },
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || '',
      baseUrl: process.env.BASE_URL || '',
      gtm: process.env.GTM_ID,
      gtmEnabled: process.env.GTM_ENABLED,
      gtmDebug: process.env.GTM_DEBUG,
    },
  },

  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  svgo: {
    autoImportPath: './assets/svg/',
    defaultImport: 'component',
    global: false,
  },

  typescript: {
    strict: true,
    typeCheck: true,
  },
})