var pack = require('reapp-pack');
var path = require('path');
var dir = path.join(__dirname, '..');

module.exports = pack({
  dir: dir,
  linkModules: true,
  entry: './app/app.js',
  devtool: 'source-map',
  target: 'web',
  debug: true,
  env: 'production'
});