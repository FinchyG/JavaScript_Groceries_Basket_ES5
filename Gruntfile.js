module.exports = function(grunt) { //eslint-disable-line
    
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        
        uglify: {
          options: {
            mangle: false
          },
          my_target: {
            files: {
              'index.min.js': ['index.js']
            }
          }
        },

        cssmin: {
          target: {
            files: {
              'index.min.css': ['index.css']
            }
          }
        }
      });

      grunt.loadNpmTasks('grunt-contrib-uglify');
      grunt.loadNpmTasks('grunt-contrib-cssmin');

      grunt.registerTask('default', [ 'uglify', 'cssmin']);
    
};