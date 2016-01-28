(function(module) {
  var videoShow = {};
  var videoHeight = 400;
  var videoWidth = 800;
  videoShow.customQuery = function() {
    $('body').on('click', '.button', function() {
      console.log('button click');
      $('.videoResults').empty();
      var $firstParam = $('.inputOne').val();
      var $secondParam = $('.inputTwo').val();

      console.log($firstParam);
      console.log($secondParam);
        $.get(
          'https://www.googleapis.com/youtube/v3/search',
          {
            part: 'snippet',
            maxResults: 1,
            q: $firstParam+$secondParam,
            order: 'viewCount',
            key: 'AIzaSyCPIPcf2n-VyIyKO8KpMMMv5Ap2VxU_Tis'
          },
        function(data) {
          var videoOutput;
          $.each(data.items, function(i, item) {
            console.log(item);
            videoTitle = item.snippet.title;
            videoId = item.id.videoId;
            videoOutput = '<li><iframe height="' + videoHeight + '" width="' + videoWidth + '" src=\"//www.youtube.com/embed/' + videoId + '\"></iframe></li>';
            $('.videoResults').append(videoOutput);
            $('.jsonData').append(videoTitle);
              });
            });
          }
        )
      };
  module.videoShow = videoShow;
})(window);
