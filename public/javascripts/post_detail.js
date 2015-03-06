requirejs.config({
    baseUrl: '../../javascripts',
    paths: {
        'jquery': 'libs/jquery',
        'category': 'src/category',
        'detail': 'src/detail',
        'highlight': 'libs/highlight.pack'
    },
    shim: {
        "category": {
            deps: ['jquery'],
            exports: 'category'
        },
        "detail": {
            deps: ['jquery', 'highlight'],
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