var passport = require('passport');

// GET /signup
function getSignup(request, response) {
	response.render('signup.ejs', {message: request.flash('signupMesage')});
};

// POST /signup
function postSignup(request, response) {
	var signupStrategy = passport.authenticate('local-signup', {
		successRedirect: '/',
		failureRedirect: '/signup',
		failtureFlash: true
	});
	return signupStrategy(request, response);
};

// GET /login
function getLogin(request, response) {
	response.render('login.ejs', {message: request.flash('loginMessage')});
};

// POST /login
function postLogin(request, response) {
	var loginStrategy = passport.authenticate('local-login', {
		successRedirect: '/',
		failureRedirect: '/login',
		failtureFlash: true
	});
	return loginStrategy(request, response);
};

// GET /logout
function getLogout(request, response) {
	request.logout();
	response.redirect('/');
};

// Secret page
function secret(request, response) {
	response.redirect('/');
	//response.send({ScrtMsg: "I kissed a girl and I liked it"});
};

// GET /index
function index(request, response) {
	response.render('index.ejs');
};

// GET /setlists
function setlists(request, response) {
	response.render('setlists.ejs');
};

// GET /myshows
function myshows(request, response) {
	response.render('myshows.ejs');
};

// GET /mysongs
function mysongs(request, response) {
	response.render('mysongs.ejs');
};

// GET /show
function show(request, response) {
	response.render('show.ejs')
};

//prettifies the incoming JSON
function convertSet(json) {
	document.write("<div id=\"pnetsetlist\">");
	for(i = 0; i < json.length ; i++) {
		var n = json[i];
		document.write("<h3>" + n['mmddyy'] + " <a href=\"http://phish.net/setlists/?d=" + n['showdate'] + "\">" + n['venue'] + "</a></h3> <p class='pnetsl'>" + n['setlistdata'] + "</p>");
		if(n['setlistnotes'].replace(/^\s+|\s+$/g,"")!='') {
			document.write("<p class='pnetsn' style=\"font-size:10px;\">" + n['setlistnotes'] + "</p>");
		};
	};
	document.write("</div>");
};


module.exports = {
	getLogin: getLogin,
	postLogin: postLogin,
	getSignup: getSignup,
	postSignup: postSignup,
	getLogout: getLogout,
	secret: secret,
	setlists: setlists,
	index: index,
	myshows: myshows,
	mysongs: mysongs,
	convertSet: convertSet,
	show: show
};






