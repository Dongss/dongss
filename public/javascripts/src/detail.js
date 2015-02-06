define(['jquery'], function($) {
    var detail = function(post_name) {
        $.ajax({
            type: 'get',
            url: '/get/post/:category/' + post_name,
            success: function(data) {
                $('#list').after(data);
            }
        });
    }
    return {detail: detail};
});