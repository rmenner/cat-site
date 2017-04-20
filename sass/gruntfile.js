module.exports = function(grunt) {

	grunt.initConfig({
	  sass: {                              // Task
	    dist: {                            // Target
	      options: {                       // Target options
	        style: 'expanded',
	        sourcemap: 'none'
	      },
	      files: {                         // Dictionary of files
	        '../styles.css': 'main.scss',       // 'destination': 'source'
	      }
	    }
	  }
	});

	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['sass']);

};