var express = require('express');
var router = express.Router();

// GET home page
router.get('/', function(req, res) {
  res.render('index', { title: 'Home' });
});

// GET about page
router.get('/about.html', function(req, res){
	res.render('about', {title: 'About'});
})

// GET blog page
router.get('/blog.html', function(req, res){
	res.render('blog', {title: 'Blog'});
})

module.exports = router;