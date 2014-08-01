'use strict';

//Config file for Express
module.exports = function(app) {
	app.set('view engine', 'jade');
	app.set('views', __dirname + '/../views');

	console.log('Express configured.');
};

