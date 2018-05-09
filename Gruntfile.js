module.exports = function(grunt) {
	//Project configuration

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		//Sass

		sass: {                              // Task
		    dist: {                            // Target
		      options: {                       // Target options
		        style: 'expanded'
		      },
		      files: {                         // Dictionary of files
		        'dist/main.css': 'sass/main.scss'     // 'destination': 'source'
		      }
		    }
		  },

		// Uglify

		uglify: {
		      options: {
		        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
		      },
		      build: {
		        src: ['bower_components/jquery/dist/jquery.js', 
		        'bower_components/owl.carousel/dist/owl.carousel.js', 
		        'js/classie.js',
		        'js/cbpAnimatedHeader.js',
		        'js/script.js',
		        'bower_components/jquery-easing-original/jquery.easing.js'
		        ],
		        dest: 'build/script.min.js'
		      }
		    },

		//Concatenation

		concat: {
		  js: {
		   src: [
		     'bower_components/bootstrap/dist/js/bootstrap.js'
		   ],
		   dest: 'dist/js/frontend.js'
		  },
		},

		//Watch

		watch: {
		  scripts: {
		  	files: ['js/*.js'],
		    tasks: ['uglify'],
		    options: {
		      spawn: false,
		    },
		  },

		  css: {
		      files: ['sass/*.scss'],
		      tasks: ['sass'],
		      options: {
		        livereload: {
		          host: 'localhost',
		          port: 9000
		          
		          // you can pass in any other options you'd like to the https server, as listed here: http://nodejs.org/api/tls.html#tls_tls_createserver_options_secureconnectionlistener
		        }
		      },
		    },
		},
	});


	//Load the plugins

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//Tasks

	grunt.registerTask('default', ['sass','uglify', 'watch']);
}