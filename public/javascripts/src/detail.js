define(['jquery', 'highlight'], function($) {
    var detail = function() {
        var category =window.location.href.split('/');

        $.ajax({
            url: '/get/post/' + category[category.length-2] + '/' + category[category.length-1],
            success: function(data) {
                $('#detail').append(data);
                $(document).ready(function() {
                    $('pre code').each(function(i, block) {
                        hljs.highlightBlock(block);
                    });
                });
            }
        });
    }
    return {detail: detail};
});