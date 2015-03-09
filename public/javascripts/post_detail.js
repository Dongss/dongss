requirejs.config({
    baseUrl: '../../javascripts',
    paths: {
        'jquery': 'libs/jquery',
        'category': 'src/category',
        'detail': 'src/detail'
    },
    shim: {
        "category": {
            deps: ['jquery'],
            exports: 'category'
        },
        "detail": {
            deps: ['jquery'],
            exports: 'detail'
        }
    }
});

require(['category'], function (category) {
    category.category();
});


require(['detail'], function(detail) {
    detail.detail();
});