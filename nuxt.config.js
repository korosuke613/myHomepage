export default {
  mode: 'universal',
  workbox: {
    dev: false // 開発環境でもPWAできるように
  },
  generate: {
    subFolders: false,
    fallback: true
  },
  router: {
    base: process.env.BASE_DIR || '/',
    extendRoutes (routes /*, resolve */) {
      const aliases = routes.map(route => ({
        path: /\/$/.test(route.path)
          ? `${route.path}index.html`
          : `${route.path}.html`,
        alias: route.path,
        component: route.component
      }))
      routes.push(...aliases)
    }
  },
  hooks: {
    generate: {
      extendRoutes (routes) {
        const filtered = routes.filter(page => !/\.html$/.test(page.route))
        routes.splice(0, routes.length, ...filtered)
      }
    }
  },
  srcDir: 'client/',
  modules: [
    '@nuxtjs/google-adsense',
    '@nuxtjs/google-gtag',
    '@nuxtjs/sitemap',
    '@nuxtjs/pwa',
    '@aceforth/nuxt-optimized-images'
  ],
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true
  },
  sitemap: {
    hostname: 'https://korosuke613.github.io',
    exclude: []
  },
  'google-gtag': {
    id: 'G-T9J2NY25JV',
    debug: true // enable to track in dev mode
  },
  'google-adsense': {
    id: 'ca-pub-7246355771451460'
  },
  manifest: {
    name: 'Korosuke613@miyazaki',
    short_name: 'K613',
    lang: 'ja'
  },
  head: {
    title: 'Korosuke613@miyazaki',
    titleTemplate: '%s - Korosuke613@miyazaki',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'google-site-verification',
        content: 'V65tkfTzyTOAIVOF3kEq5KCkGYaNpG6fTLj8Imi6S-0'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Korosuke613@miyazaki'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Korosuke613@miyazaki'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://korosuke613.github.io'
      },
      { hid: 'og:image', property: 'og:image', content: 'https://raw.githubusercontent.com/korosuke613/myHomepage/master/client/assets/images/myPhoto.jpg' },
      {
        hid: 'og:description',
        content: 'ひらこば ふうたのホームページ'
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@shitimi_613' }
    ],
    script: [
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js',
        defer: true
      },
      {
        src:
          'https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js',
        integrity:
          'sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd',
        crossorigin: 'anonymous',
        defer: true
      },
      { src: '/js/lightbox.min.js', defer: true },
      { src: '/js/page_scroll.js', defer: true }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Anton',
        defer: true
      },
      {
        rel: 'stylesheet',
        href:
          'https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css',
        defer: true
      },
      {
        rel: 'stylesheet',
        href:
          'https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css',
        integrity:
          'sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu',
        crossorigin: 'anonymous'
      }
    ]
  },
  css: [
    '@/assets/css/bootstrap-xxs-1.0.2.css',
    '@/assets/css/menu.css',
    '@/assets/css/font-size.css',
    '@/assets/css/lightbox.min.css',
    '@/assets/css/font_change.css',
    '@/assets/css/link.css'
  ]
}
