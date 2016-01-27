(function(module) {
  var videoList = {};

    $('.inputOne').submit(function(e) {
      e.preventDefault();
      //$('.inputOne').text()
      videoList.requestVideos = function() {
        $.get(
          'https://www.googleapis.com/youtube/v3/search', {
            part: 'snippet',
            maxResult: 2,
            q: 'html',
            order: 'viewCount',
            key: 'AIzaSyCPIPcf2n-VyIyKO8KpMMMv5Ap2VxU_Tis'},
            function(data) {
              var videoOutput;
              $.each(data.items, function(i, item) {
                videoTitle = item.snippet.title;
                videoId = item.id.videoId;
                videoOutput = '<li><iframe src=\'//www.youtube.com/embed/'+videoId+'\"></iframe></li>';
                $('#VideoResults').append(videoOutput);
              });
            }
          )
        }
      videoList.requestVideos();
    });



  $('.button').on('click', function(e) {
    console.log('button click');
    e.preventDefault();
  });



  module.videoList = videoList;
})(window);
