var path = require('path');

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'browserify'],
    preprocessors: {
      'dist/lion.js': ['browserify', 'coverage'],
      'test/**/*.js': ['browserify']
    },
    reporters: ['progress', 'junit', 'coverage'],
    junitReporter: {
      outputFile: path.join(process.env.CIRCLE_TEST_REPORTS || '.', "karma", "junit.xml"),
      suite: 'karma'
    },
    coverageReporter: {
      type: 'html',
      dir: 'test/coverage',
      file: 'coverage.html'
    },
    files: [{
        pattern: 'test/helpers/describeEach.js',
        included: true,
        served: true
      }, {
        pattern: 'bower_components/angular/angular.js',
        included: true,
        served: true
      }, {
        pattern: 'bower_components/angular-mocks/angular-mocks.js',
        included: true,
        served: true
      }, {
        pattern: 'bower_components/joi-browserify/joi-browserify.min.js',
        included: true,
        served: true
      },
      'test/unit/*.spec.js', {
        pattern: 'dist/lion.js',
        included: true,
        served: true
      }
    ],
    browsers: ['PhantomJS'],
    browserify: {
      debug: true,
      configure: function (bundle) {
        bundle.on('prebundle', function () {
          bundle.external('joi-browserify');
          bundle.external('angular');
        });
      }
    }
  });
};
