//requirements
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var passport = require('passport');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/phish-users');

app.use(bodyParser.urlencoded({
	extended: true
}));

app.set('views', './views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

//aids passport functionality
app.use(session({secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./config/passport')(passport);

app.use(function(req, res, next) {
	res.locals.currentUser = req.user;
	next();
});

var routes = require('./config/routes');
app.use(routes);

app.listen(process.env.PORT || 3000);





