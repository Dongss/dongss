define(['jquery'], function($) {
    var detail = function() {
        var category =window.location.href.split('/');

        console.log('/get/post/' + category[category.length-2] + '/' + category[category.length-1]);
        $.ajax({
            url: '/get/post/' + category[category.length-2] + '/' + category[category.length-1],
            success: function(data) {
                $('#detail').append(data);
            }
        });
    }
    return {detail: detail};
});