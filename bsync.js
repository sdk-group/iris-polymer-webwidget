var bs = require('browser-sync').create();

bs.init({
  server: ["./", "./bower_components"],
  files: ['*.html', 'demo/index.html'],
  startPath: 'demo/index.html',
  reloadDelay: 1000
});