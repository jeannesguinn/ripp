var express = require('express');
var router = express.Router();
//var User = require('../models/user');
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hits', function(req, res, next){
  res.send('/hits');
})

router.get('/auth/spotify', function(req, res, next){
  res.send('auth/spotify');
})

router.get('/auth/spotify/callback', function(req, res, next) {
  res.send('auth/spotify/callback');
})

module.exports = router;
