var Post = require('../models/post');
var Request = require('request');

module.exports.home = function(req, res) {
    res.render('layout/index', {jsfile:'main'});
}

module.exports.get_by_category = function(req, res) {
    Request({
        method: 'get',
        url: 'http://localhost:3000/get/post/' + req.params.category
    }, function(err, response, data) {
        if(err) {
            console.log(err);
            res.end();
            return;
        }
        res.render('layout/index', {jsfile:'main'});
    });
}

module.exports.get_post = function(req, res) {
    Request({
        method: 'get',
        url: 'http://localhost:3000/get/post/' + req.params.category + '/' + req.params.post_name
    }, function(err, response, data) {
        if(err) {
            console.log(err);
            res.end();
            return;
        }
        res.render('post/detail', {jsfile:'post_detail'});
    })
}

module.exports.get_post_detail = function(req, res) {
    Post.get_post_detail(req.params.category, req.params.post_name, function(err, data) {
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