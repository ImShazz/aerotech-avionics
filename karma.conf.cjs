
module.exports = function (config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'tests/bundles/*.bundle.js'
    ],

    reporters: ['progress'],

    browsers: ['ChromeHeadless'],

    singleRun: true,

    autoWatch: false,

    client: {
      clearContext: false
    }
  })
}
