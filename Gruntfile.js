module.exports = function(grunt) {
	"use strict";

	grunt.file.defaultEncoding = 'utf8';

	grunt.initConfig({
		jshint: {
			files: [
				'Gruntfile.js',
				'**/*.js',
			],
			options : {
				globalstrict: false,
				undef : false,
				eqeqeq: false,
				browser : true,
				globals: {
					"jQuery" : true,
					"console" : true,
					"window" : true
				},
				ignores : [
					'node_modules/**',
					'**/*.min.js',
					'**/*.compressed.js',
					'**/jquery*.js',
					'**/*.min.js',
					'**/*-packed.js'
				]
			}
		},
		csslint: {
			'common-css': {
				options: {
					import : 2,
					'adjoining-classes' : false,
					'box-model' : false,
					'duplicate-background-images' : false,
					'ids' : false,
					'important' : false,
					'overqualified-elements' : false,
					'qualified-headings' : false,
					'star-property-hack' : false,
					'underscore-property-hack' : false,
				},
				src: [
					'**/*.css',
					'!**/*.min.css',
					'!node_modules/**',
				]
			}
		},
		phplint: {
			default : {
				options: {
					phpCmd: "php",
				},

				src: [
					"**/*.php",
					"!node_modules/**",
				],
			},
		},
		uglify: {
			'common': {
				files: {
					'tpl/js/board.min.js': ['tpl/js/board.js'],
					'tpl/js/board_admin.min.js': ['tpl/js/board_admin.js']
				}
			},
			'skin': {
				files: {
					'skins/default/board.default.min.js': ['skins/default/board.default.js'],
				}
			},
			'm.skin': {
				files: {
					'm.skins/default/js/mboard.min.js': ['m.skins/default/js/mboard.js'],
					'm.skins/simpleGray/js/mboard.min.js': ['m.skins/simpleGray/js/mboard.js']
				}
			},
		},
		cssmin: {
			'skin': {
				files: {
					'skins/default/board.default.min.css': ['skins/default/board.default.css'],
				}
			},
			'm.skin': {
				files: {
					'm.skins/default/css/mboard.min.css': ['m.skins/default/css/mboard.css'],
					'm.skins/simpleGray/css/mboard.min.css': ['m.skins/simpleGray/css/mboard.css']
				}
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-phplint');

	grunt.registerTask('default', 'lint');
	grunt.registerTask('lint', ['jshint', 'csslint', 'phplint']);
	grunt.registerTask('minify', ['jshint', 'csslint', 'uglify', 'cssmin']);
};
