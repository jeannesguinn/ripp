$(function(){
    $("#top-tracks").click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        var top_tracks_data = $.ajax({
            url: 'https://api.spotify.com/v1/artists/5a2EaR3hamoenG9rDuVn8j/top-tracks?country=US',
            type: 'GET',
            dataType: 'json'
        });
        top_tracks_data.done(function(data){
            for (var i = 0; i < data.tracks.length ; i ++) {
            // console.log(data.tracks[i].name);
            $('#insert-songs').append("<p>"+data.tracks[i].name+"</p>");
        }




        });
        top_tracks_data.fail(function(jqXHR, textStatus, errorThrown){
            console.log(errorThrown)
        });

    })
});
