'use strict'; 

module.exports = function (grunt) {
	grunt.initConfig({
		clean: {
			dist: ['work', 'dist']
		},

		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [	'*.js',
					'app/**/*.js',
					'spec/**/*.js'
				]
		},
		
		karma: {
			unit: {
				configFile: 'spec/karma-unit.conf.js',
				runnerPort: 9999,
				singleRun: true,
				browsers: ['PhantomJS']
			}
		},
		
	});

	grunt.registerTask('default', [
		'clean', 
		'jshint', 'karma'
	]);

	// load tasks
	[
	 'grunt-contrib-clean', 
	 'grunt-contrib-jshint', 
	 'grunt-karma'].forEach(function (task) {
		grunt.loadNpmTasks(task);
	});

};