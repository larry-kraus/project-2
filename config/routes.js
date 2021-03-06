//requirements
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var usersController = require('../controllers/users');
var staticsController = require('../controllers/statics');

//checks to see if user is authenticated
function authenticatedUser(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect('/'); 
};

//routes for all of my web pages
router.route('/')
	.get(staticsController.home);

router.route('/signup')
	.get(usersController.getSignup)
	.post(usersController.postSignup)

router.route('/login')
	.get(usersController.getLogin)
	.post(usersController.postLogin)

router.route('/logout')
	.get(usersController.getLogout)

router.route('/setlists')
	.get(usersController.setlists)

router.route('/index')
	.get(usersController.index)

router.route('/myshows')
	.get(usersController.myshows)
	//.get(usersController.retrieve)

router.route('/mysongs')
	.get(usersController.mysongs)

router.route('/show')
	.get(usersController.show)			

//router.route('/secret')
//	.get(authenticatedUser.usersController.secret)

module.exports = router;






