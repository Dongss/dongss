define(['jquery'], function($) {
    var category = function() {
        $.ajax({
            type: 'get',
            url: '/get/category',
            success: function(data) {
                for(var i in data.data) {
                    var html = '<a href="/post/category/' + i + '">' + i + '</a>&nbsp;&nbsp;&nbsp;(' + data.data[i].length + ')</br>';
                    $('#category').append(html);
                }
            }
        });
    }
    return {category: category};
});