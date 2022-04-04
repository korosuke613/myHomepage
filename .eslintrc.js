module.exports = {
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  ignorePatterns: [
    'client/static/**/*'
  ],
  overrides: [
    {
      files: ['client/pages/**/*', 'client/layouts/**/*'],
      rules: {
        'vue/multi-word-component-names': ['off']
      }
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: [
        '@typescript-eslint'
      ],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
      ]
    }
  ]
}
