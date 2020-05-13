var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Brian van Vlymen' });
});







// need move to different place    ================================================================
router.get('/projects', function(req, res, next) {
    res.render('projects/projectsList');
});



module.exports = router;