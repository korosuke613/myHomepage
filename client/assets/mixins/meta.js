export default {
  head () {
    return {
      title: this.meta.title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: this.meta.title },
        {
          hid: 'description',
          name: 'description',
          content: this.meta.description
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.meta.description
        },
        { hid: 'og:url', property: 'og:url', content: 'https://korosuke613.github.io' + this.meta.url }

      ]
    }
  }
}
