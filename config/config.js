var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'accelerato-site'
    },
    port: 3000,
    db: 'mysql://root@localhost/accelerato-site-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'accelerato-site'
    },
    port: 3000,
    db: 'mysql://localhost/accelerato-site-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'accelerato-site'
    },
    port: 3000,
    db: 'mysql://localhost/accelerato-site-production'
  }
};

module.exports = config[env];
