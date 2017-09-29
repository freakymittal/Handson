module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt); 
      grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: '',
            },
            assets: {
                src: 'assets/**/*.js',
                dest: 'grunt/assets.js',
            },
            // lib: {
            //     src: ['lib/tinycolor.min.js', 'lib/popper.min.js', 'lib/moment.min.js', 'lib/jquery-3.2.1.slim.min.js', 'lib/bootstrap.min.js', 'lib/angular.min.js', 'lib/angular-route.min.js', 'angular-moment.min.js'],
            //     dest: 'dist/lib.min.js',
            // },
        },
        uglify: {
            assets: {
              files: {
                'dist/assets.min.js': ['grunt/assets.es5.js']
              }
            },
        //     lib: {
        //       files: {
        //           'dist/lib.min.js' : ['grunt/lib.js']
        //       }
        //   },
          },
          babel: {
              options: {
                  sourceMap: false,
                  presets: ['es2015']
              },
              assets: {
                  files: {
                      'grunt/assets.es5.js' : 'grunt/assets.js'
                  }
              }
          },
      });
    
      grunt.loadNpmTasks('grunt-contrib-uglify');
      grunt.loadNpmTasks('grunt-contrib-concat');
      grunt.registerTask('default', ['concat', 'babel', 'uglify']);
    };