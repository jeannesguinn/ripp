var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hits', function(req, res, next) {
  res.render('hits', { title: 'Hits' });
});

router.post('/auth/spotify', passport.authenticate('spotify'), function(req, res, next) {
  res.redirect('/hits');
});


router.get('/auth/spotify/callback', passport.authenticate('spotify', { failureRedirect: '/' }), function(req, res, next) {
  res.redirect('/hits');
});
module.exports = router;
