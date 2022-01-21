module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  pluginOptions: {
    i18n: {
      locale: 'fr',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
      includeLocales: false,
      enableBridge: true
    },
    moment: {
      locales: [
        'fr'
      ]
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vuejstuto/'
    : '/'
}
