var server = require('reapp-server');
var webpackServer = require('reapp-pack/webpackServer');
var path = require('path');

var dir = path.join(__dirname, '..');
var webpackConfig = require('./run.config.js')(dir);

// express server
server({
  dir: dir,
  scripts: Object.keys(webpackConfig.entry),
  layout: dir + '/assets/layout.html',
  debug: true,
  port: 3010,
  wport: 3011
});

// webpack-dev-server
webpackServer(webpackConfig, {
  debug: true,
  port: 3011,
  dir: dir
});