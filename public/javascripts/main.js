requirejs.config({
    baseUrl: '../javascripts',
    paths: {
        'jquery': 'libs/jquery',
        'category': 'src/category',
        'list': 'src/list'
    },
    shim: {
        "category": {
            deps: ['jquery'],
            exports: 'category'
        },
        "list": {
            deps: ['jquery'],
            exports: 'list'
        }
    }
});

require(['category'], function (category) {
    category.category();
});

require(['list'], function (list) {
    list.list();
});
