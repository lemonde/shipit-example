var pkg = require('./package.json');

module.exports = function (grunt) {

  /**
   * Initialize config.
   */

  grunt.initConfig({
    shipit: {
      options: {
        // project will be build in this directory
        workspace: '/tmp/shipit-example-workspace',

        // project will be deployed in this directory
        deployTo: '/tmp/shipit-example',

        // repository url
        repositoryUrl: pkg.repository.url,

        // this files will not be transfered
        ignores: ['.git', 'node_modules'],

        // number of release to keep (for rollback)
        keepReleases: 3
      },

      staging: {
        servers: ['arnold.lemonde-interactif.fr']
      }
    }
  });

  /**
   * Load npm tasks.
   */

  grunt.loadNpmTasks('grunt-shipit');

  /**
   * Run pwd on the remote servers.
   */

  grunt.registerTask('pwd', function () {
    var done = this.async();
    grunt.shipit.remote('pwd', done);
  });
};