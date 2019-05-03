export default {
    modules: [
    ],
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
        ]
    },
    ...routerBase
}
