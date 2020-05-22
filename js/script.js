jQuery(document).ready(function($){

    function createBookListItem(book){
        var $li = $('<li>');
        $li.addClass('list-group-item hover-invert cursor-pointer');
        $li.html(book.title);
        $li.data('bookId', book.id);
        return $li;
    }
    var request = axios.get('http://csc225.mockable.io/books');
    request.then(function(response){
        $('.pageload').addClass('progress');
        response.data.forEach(function(book){
            $('#book-list').append(createBookListItem(book));
            
        });
        $('.list-group-item').on('click',function(){
            $('.list-group-item').removeClass('active');
            var bookId = $(this).data('bookId');
            $(this).addClass('active');
            var $img2 = $('<img>').attr('src', '/images/loading2.gif').attr('alt', 'LOADING PAGE PLEASE BE PATIENT');
            $('.card').addClass('progress');
            $('#cover').html($img2);

            axios.get('http://csc225.mockable.io/books/' + bookId).then(function(response){
                console.log(response.data.cover);
                $('#cover').html('<img>');
                $('.card').removeClass('progress');
                $('.card-img-top').attr('src', response.data.cover).attr('alt', response.data.title);
                $('.card-title').empty();
                $('.card-text').empty();
                $('.e1').empty();
                $('.e2').empty();
                $('.e3').empty();
                $('.e4').empty();
                $('.e5').empty();
                $('.card-title').append('Title: ',response.data.title);
                $('.card-text').append('Author: ',response.data.author);
                $('.e1').append('Country: ',response.data.country);
                $('.e2').append('Language: ',response.data.language);
                $('.e3').append('Pages: ',response.data.pages);
                $('.e4').append('Yeaer: ',response.data.year);
                $('.e5').append('Link: ',response.data.link);
            });
            
        });
    });
    console.log('hello!');

    // var content = createBookListItem('testing');
    // $('#book-list').html(content);

});

