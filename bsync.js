var bs = require('browser-sync').create();

bs.init({
	proxy: "http://localhost:8080/components/iris-polymer-report-hub/demo/",
	files: ['*.html', 'demo/index.html'],
	reloadDelay: 1000
});