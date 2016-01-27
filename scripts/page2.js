(function(module) {
  var videoList = {};
  var videoHeight = 375;
  var videoWidth = 375;

 // var getVideo = function (inputOne, inputTwo) {
     // pass input text by user to the search params for requestVideos function
    $('.button').on('click', function() {
      console.log('button click');
      $('videoResults').empty();
      videoList.requestVideos = function() {
        $.get(
          'https://www.googleapis.com/youtube/v3/search',
          {
            part: 'snippet',
            maxResults: 2,
            q: 'html', //inputOne & inputTwo
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
            $('videoResults').append(videoOutput);
          })
        })
      }
      videoList.requestVideos();
    })

  module.videoList = videoList;
})(window);
