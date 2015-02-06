var Post = require('../models/post');
var Request = require('request');

module.exports.demo = function(req, res) {
    res.json({
        data: Post.get_all()
    });
}

module.exports.home = function(req, res) {
    res.render('layout/index');
}

module.exports.get_by_category = function(req, res) {
    Request({
        method: 'get',
        url: 'http://localhost:3000/get/post/' + req.params.category
    }, function(err, resonse, data) {
        if(err) {
            console.log(err);
            res.end();;
            return;
        }
        res.render('layout/index');
    });
}

module.exports.get_post_detail = function(req, res) {
    Post.get_post_detail('nodejs-stuff', '1', function(err, data) {
        if(err) {
            res.end();
        } else{
            res.send(data);
        }
    });
}

module.exports.get_all_by_category = function(req, res) {
    res.json({
        data: Post.get_all_by_catepory()
    });
}


module.exports.get_post_all = function(req, res) {
    //category || "all"
    res.json({
        data: Post.get_by_category(req.params.category)
    });
}