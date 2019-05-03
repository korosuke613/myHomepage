export default {
    modules: [
        '@nuxtjs/google-adsense',
        '@nuxtjs/google-analytics',
    ],
    googleAnalytics: {
        id: 'UA-91531907-1'
    },
    'google-adsense': {
        id: 'ca-pub-7246355771451460'
    },
    dir: {
        layouts: 'src/components/layouts',
        pages: 'src/components/pages',
    },
    head: {
        title: 'Korosuke613@miyazaki',
        titleTemplate: '%s - Korosuke613@miyazaki',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            //{ name: "google-site-verification", content: "V65tkfTzyTOAIVOF3kEq5KCkGYaNpG6fTLj8Imi6S-0" },
            { hid: 'og:title', property: 'og:title', content: 'Korosuke613@miyazaki' },
            //{ hid: 'og:image', property: 'og:image', content: 'https://github.com/TakaShinoda/beeenowiki/raw/master/src/img/beeno1.jpg' },
            //{ hid: 'og:image:width', property: 'og:image:width', content: '1029' },
            //{ hid: 'og:image:height', property: 'og:image:height', content: '1239' },
            { hid: 'description', name: 'description', content: 'ひらこば ふうたのホームページ' },
        ],
        script: [
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
        ],
        link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Anton' },
            { rel: 'stylesheet', href: 'https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css' }
        ],
    },
    css: [
        'src/assets/css/bootstrap.css',
        'src/assets/css/bootstrap-xxs-1.0.2.css',
        'src/assets/css/menu.css',
        'src/assets/css/font-size.css',
        'src/assets/css/lightbox.css',
        'src/assets/css/hr.css',
        'src/assets/css/font_change.css',
        'src/assets/css/link.css',
    ],
}
