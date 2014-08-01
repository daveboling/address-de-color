'use strict';

var express    = require('express');
var app 	   = express();
var port 	   = 3001;
var db 		   = process.env.DB;

//Passed ^ app in as a function to the
//config.js file that then uses it to set the directories
//for views and view engine
require('./lib/config')(app);
require('./lib/pipeline')(app, express);
require('./lib/mongodb')(db);

app.listen(port, function(){
	console.log('Express ready on port: ' + port);
});
