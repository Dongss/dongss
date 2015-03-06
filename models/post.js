var Fs = require('fs');
var Types =require('../config/category.json');
var APIs = require('../config/api.json');
var Markdown = require('markdown').markdown;

module.exports.get_all = function() {
    var results = [];

    for(var i in APIs) {
        results.push(APIs[i]);
    }
    return results;
}

module.exports.get_all_by_catepory = function() {
    var results = {};

    for(var i in Types) {
        results[i] = [];
    }

    for(var i in APIs) {
        results[APIs[i]['category']].push(APIs[i]);
    }
    return results;
}

module.exports.get_by_category = function(category) {
    var results = [];

    if(category === "all") {
        for(var i in APIs) {
            results.push(APIs[i]);
        }
        return results;
    }

    for(var i in APIs) {
        if(APIs[i]['category'] === category) {
            results.push(APIs[i]);
        }
    }
    return results;
}

module.exports.get_post_detail = function(category, post_name, callback) {
    Fs.readFile('../config/posts/' + category + '/' + post_name + '.md', {encoding: "utf8" },function(err, data) {
        if(err) {
            return callback(true);
        }
;        return callback(null, (Markdown.toHTML(data)))
    });
}