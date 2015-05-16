module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'browserify'],
    preprocessors: {
      'dist/lion.js': ['browserify'],
      'test/**/*.js': ['browserify']
    },
    files: [{
        pattern: 'bower_components/joi-browserify/joi-browserify.min.js',
        included: false,
        served: true
      },
      'test/unit/*.spec.js', {
        pattern: 'dist/lion.js',
        included: true,
        served: true
      }
    ],
    browsers: ['Chrome']
  });
};
