#!//usr/bin/env karma start

module.exports = function(config){
	'use strict';

	config.set({
		basePath : '../',
		
		files : [
			
			'vendor/**/*.js',
			
			'app/script/**/*.js',
			
			'spec/unit/**/*.js'
		],
		
		autoWatch : true,
		
		frameworks: ['jasmine'],
		
		browsers : ['Chrome'],
		
		plugins : [
			'karma-junit-reporter',
			'karma-chrome-launcher',
			'karma-firefox-launcher',
			'karma-phantomjs-launcher',
			'karma-jasmine'       
		],
		
		junitReporter : {
			outputFile: 'test_out/unit.xml',
			suite: 'unit'
		}
	
	});
};
