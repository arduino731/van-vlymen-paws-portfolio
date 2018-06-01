var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Brian van Vlymen' });
});


router.get('/projects', function(req, res, next) {
    res.render('projects/projectsList');
});



module.exports = router;