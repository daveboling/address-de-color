'use strict';
var morgan     = require('morgan');
var bodyParser = require('body-parser');
var home 	   = require('../controllers/home');
var people	   = require('../controllers/people');


module.exports = function(app, express){
//Pipeline runs every browser request
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../static'));

//Home Controls
app.get('/', home.index); 
app.get('/about', home.about);
app.get('/faq', home.faq);
app.get('/contact', home.contact);

//People Control
app.get('/people', people.index);

console.log('Express pipeline online.');
};