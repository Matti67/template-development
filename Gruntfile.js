module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    copy: {
      html: {
        expand: true,
        cwd: 'html',
        src: '**/*.html',
        dest: 'dist/thymeleaf/templates',
      }
    },

    less: {
      compile: {
        options: {
          sourceMapURL: 'frontend.css.map',
          sourceMapFilename: 'dist/css/frontend.css.map'
        },
        src: 'less/frontend.less',
        dest: 'dist/css/frontend.css'
      }
    },

    watch: {
      copy: {
        files: [ 'html/**/*.html' ],
        tasks: [ 'copy' ]
      },
      less: {
        files: [ 'less/**/*.less' ],
        tasks: [ 'less' ]
      }
    }

  });

  grunt.registerTask('default', [ 'copy', 'less' ]);

};
