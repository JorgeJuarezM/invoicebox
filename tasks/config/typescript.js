module.exports = function (grunt) {
  //grunt.initConfig({
  //  typescript: {
  //    dev: {
  //      src    : ['path/to/typescript/files/**/*.ts'],
  //      dest   : 'where/you/want/your/js/files',
  //      options: {
  //        module     : 'amd', //or commonjs
  //        target     : 'es5', //or es3
  //        basePath   : 'path/to/typescript/files',
  //        sourceMap  : true,
  //        declaration: true
  //      }
  //    }
  //  }
  //});

  grunt.config.set("typescript", {
    app    : {
      src : ["assets/js/angular/app.ts"],
      dest: ".tmp/public/js/angular/a"
    },
    services: {
      src: ["assets/js/angular/services/*.ts"],
      dest: ".tmp/public/js/angular/b/services"
    },
    controllers: {
      src: ["assets/js/angular/controllers/*.ts"],
      dest: ".tmp/public/js/angular/c/controllers"
    },
    runner    : {
      src : ["assets/js/angular/runApp.ts"],
      dest: ".tmp/public/js/angular/d"
    },
    options: {
      module     : "amd",
      target     : "es5",
      //basePath   : "assets/js/angular/typings",
      sourceMap  : true,
      declaration: true
    }
  });

  grunt.loadNpmTasks('grunt-typescript');
};
