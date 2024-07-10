// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  // ssr: false,

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
          name: 'robots',
          content: process.env.ENV === 'production' ? 'index, follow' : 'noindex, nofollow',
        },
        {
          name: 'msapplication-TileColor',
          content: '#00aba9',
        },
        {
          name: 'theme-color',
          content: '#ffffff',
        },
      ],
      // link: [
      //   { rel: 'icon', sizes: '16x16', type: 'image/png', href: '/favicon-16x16.png' },
      //   { rel: 'icon', sizes: '32x32', type: 'image/png', href: '/favicon-32x32.png' },
      //   { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      //   { rel: 'manifest', href: '/site.webmanifest' },
      //   { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ffffff' },
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
    typeCheck: true,
  },
})