module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine3-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
    ],
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    files: process.env['NODE_ENV'] === 'my' ? ['src/*.my.js', 'src/*.spec.js'] : ['src/*.js'],
    exclude: process.env['NODE_ENV'] !== 'my' ? ['src/*.my.js'] : []
  });
};

