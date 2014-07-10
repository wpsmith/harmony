var resolve = require('bower-path');
module.exports = function (grunt) {
    grunt.config.merge({
        jasmine: {
            dist: {
                src: 'dist/*.js',
                options: {
                    specs: 'tests/harmony.spec.js'
                }
            },
            src: {
                src: [
                    'src/log.js',
                    'src/adslot.js',
                    'src/harmony.js'
                ],
                options: {
                    specs: 'tests/*.spec.js'
                }
            },
            options: {
                helpers: 'tests/helpers/*.helper.js',
                vendor: resolve('lumberjack'),
                display: 'short',
                summary: true,
                template: require('grunt-template-jasmine-istanbul'),
                templateOptions: {
                    coverage: 'bin/coverage/coverage.json',
                    report: {
                        type: 'text-summary'
                    }
                }
            }
        }
    });
};