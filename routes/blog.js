var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('blog/blogList');
});
router.get('/StartedRWD', function(req, res, next) {
    res.render('blog/StartedRWD');
});
router.get('/quoteMachine', function(req, res, next) {
    res.render('blog/quoteMachine');
});
router.get('/weatherApp', function(req, res, next) {
    res.render('blog/weatherApp');
});
router.get('/cssSelectorReference', function(req, res, next) {
    res.render('blog/cssSelectorReference');
});







/* GET categories page. */
router.get('/jade', function(req, res, next) {
    res.render('categories/jade/1');
});
router.get('/jade2', function(req, res, next) {
    res.render('categories/jade/html2jade');
});
router.get('/angular', function(req, res, next) {
    res.render('categories/angular/1');
});
router.get('/jquery', function(req, res, next) {
    res.render('categories/jquery/1');
});
router.get('/devtools', function(req, res, next) {
    res.render('categories/DevTools/1');
});
router.get('/How-to-add-Jade-syntax-highlighting-in-Sublime-Text-2', function(req, res, next) {
    res.render('categories/jade/How-to-add-Jade-syntax-highlighting-in-Sublime-Text-2');
});
router.get('/sublime-text-create-new-snippet', function(req, res, next) {
    res.render('categories/DevTools/sublime-text-create-new-snippet');
});

module.exports = router;