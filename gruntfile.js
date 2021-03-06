module.exports = function (grunt) {
    // Load all grunt NPM tasks.
    require('matchdep').filterDev([
        'grunt-*',
        '!grunt-template-*'
    ]).forEach(grunt.loadNpmTasks);
    // Load harmony task confs.
    grunt.loadTasks('tasks');

    grunt.registerTask('build', 'Build distributable without tests.', [
        'browserify:global',
        'uglify:build'
    ]);
    grunt.registerTask('default', 'Full build suite.', [
        'browserify',
        'jasmine:modules',
        'jshint',
        'uglify:build',
        'jasmine:global'
    ]);
    grunt.registerTask('test', 'Run tests.', [
        'browserify:tests',
        'jasmine:modules'
    ]);
    grunt.registerTask('docs', 'Build and deploy autodocs.', [
        'build-readme',
        'exec:build-docs-win-version',
        'exec:build-docs-win-main'
    ]);
};
