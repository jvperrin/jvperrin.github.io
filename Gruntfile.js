module.exports = function(grunt) {
  // Combine all javascript files in js/
  grunt.initConfig({
    uglify: {
      pkg: grunt.file.readJSON('package.json'),
      all_src : {
        files: {
          'js/app.min.js': [
            '_js/modernizr.min.js', '_js/jquery.min.js', '_js/turbolinks.js',
            '_js/accordion.js', '_js/carousel.js', '_js/modal.js',
            '_js/off-canvas-nav.js', '_js/tabs.js', '_js/tooltip.js',
            '_js/global.js'
          ]
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
};
