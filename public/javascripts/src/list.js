define(['jquery'], function($) {
    var list = function() {
        var category =window.location.href.split('/');

        $.ajax({
            url: '/get/post/' + ((category[category.length-2] == 'category') ? category[category.length-1] : 'all'),
            success: function(data) {
                $('#list').empty();

                for(var i in data.data) {
                    var n = data.data.length - i -1;
                    var html = '<a href="/post/' + data.data[n].category + '/' + data.data[n].name + '">' + data.data[n].title + '</a></br>'
                        + data.data[n].tags + '</br>'
                        + data.data[n].time + '</br>';
                    $('#list').append(html);
                }
            }
        });
    }
    return {list: list};
});