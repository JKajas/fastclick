aud = document.getElementById("media");
isPlaying = false ;

var image = document.getElementById('play')
function togglePlay() {
    isPlaying ? aud.pause() : aud.play();
};
          
    aud.onplaying = function() {
        isPlaying = true;
        image.setAttribute('src', '/templates/stop.png');
       
    };
    aud.onpause = function() {
        isPlaying = false;
        image.setAttribute('src', "/templates/play.png");
        };


$('#previous').click(function() {
    if (!aud.paused){
        $.ajax({
            url: '',
            type: 'get',
            data: {
                'page' : parseInt($('#previous').attr('alt')),
                'control': 1,
            },
            success: function(data1){
                $('#previous').attr({'alt': data1.prev_num});
                $('#media').attr('src', data1.prev_audio);
                $('#next').attr('alt', data1.prev_num);
                $('#title').text(data1.prev_title);
                $('#artist').text(data1.prev_artist);
                $('#media').get(0).load();
                $('#media').get(0).play();
                }
            })
    }
    else{
        $.ajax({
            url: '',
            type: 'get',
            data: {
                'page' : parseInt($('#previous').attr('alt')),
                'control': 1,
            },
            success: function(data1){
                $('#previous').attr({'alt': data1.prev_num});
                $('#media').attr('src', data1.prev_audio);
                $('#next').attr('alt', data1.prev_num);
                $('#title').text(data1.prev_title);
                $('#artist').text(data1.prev_artist);
                }
            })
        }
});
        
$('#next').click(function() {
    if (!aud.paused){
        $.ajax({
            url: '',
            type: 'get',
            data: {
                'page' : parseInt($('#next').attr('alt')),
            },
            success: function(data2){
            $('#next').attr({'alt': data2.next_num});
            $('#media').attr('src', data2.next_audio);
            $('#previous').attr('alt', data2.next_num);
            $('#title').text(data2.next_title);
            $('#artist').text(data2.next_artist);
            $('#media').get(0).load();
            $('#media').get(0).play();
            }
        })
    }
    else{
        $.ajax({
            url: '',
            type: 'get',
            data: {
                'page' : parseInt($('#next').attr('alt')),
            },
            success: function(data2){
            $('#next').attr({'alt': data2.next_num});
            $('#media').attr('src', data2.next_audio);
            $('#previous').attr('alt', data2.next_num);
            $('#title').text(data2.next_title);
            $('#artist').text(data2.next_artist);
            }
        })
    }
});

aud.onended = function(){
    $.ajax({
        url: '',
        type: 'get',
        data: {
            'page' : parseInt($('#next').attr('alt')),
        },
        success: function(data2){
        $('#next').attr({'alt': data2.next_num});
        $('#media').attr('src', data2.next_audio);
        $('#previous').attr('alt', data2.next_num);
        $('#title').text(data2.next_title);
        $('#artist').text(data2.next_artist);
        $('#media').get(0).load();
        $('#media').get(0).play();
        }
    })
}