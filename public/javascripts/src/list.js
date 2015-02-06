define(['jquery'], function($) {
    var list = function() {
        $.ajax({
            url: '/get/post' + '/all',
            success: function(data) {
                $('#list').empty();

                for(var i in data.data) {
                    var html = '<a href="#">' + data.data[i].title + '</a></br>';
                    $('#list').after(html);
                }
            }
        });
    }
    return {list: list};
});