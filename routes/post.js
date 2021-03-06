var express = require('express');
var router = express.Router();
var Post = require('../controllers/post');

/* GET home page. */
router.get('/', function(req, res, next) {
    Post.home(req, res);
});

/* GET by category. */
router.get('/category/:category', function(req, res, next) {
        Post.get_by_category(req, res);
});

/* GET a post by post_name. */
router.get('/post/:category/:post_name', function(req, res, next) {
    Post.get_post(req, res)
});

/* Get detial of post*/
router.get('/post/:categoty/:post_name', function(req, res, next) {
    Post.post_detail(req, res);
});

//#res detail of a post
router.get('/get/post/:category/:post_name', function(req, res, next) {
    Post.get_post_detail(req, res);
});
//#res category and num
router.get('/get/category', function(req, res, next) {
    Post.get_all_by_category(req, res);
});
//#res all posts by category || all
router.get('/get/post/:category', function(req, res, next) {
    Post.get_post_all(req, res);
});

module.exports = router;