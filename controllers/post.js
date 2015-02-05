var Post = require('../models/post');

module.exports.demo = function(req, res) {
    res.json({
        data: Post.get_all()
    });
}

module.exports.home = function(req, res) {
    res.render('layout/index');
}

module.exports.get_by_category = function(req, res) {
    res.json({
        data: "get_by_category"
    });
}

module.exports.get_post_detail = function(req, res) {
    Post.get_post_detail('node-stuff', '1', function(err, data) {
        if(err) {
            res.end();
        } else {
            res.json({
                data: data
            });
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
        data: Post.get_by_category("all")
    });
}