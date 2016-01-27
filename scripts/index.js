(function (module) {
  var videoList = {};

  // videoList.all = []; do we need an array??
 
  $('#html').on('click', function() {
    console.log('HTML clicked!');
    videoList.requestVideos = function() {
        $.get(
          'https://www.googleapis.com/youtube/v3/search',{
          part: 'snippet',
          maxResults: 3,
          q: 'html',
          order: 'viewCount',
          key: 'AIzaSyCPIPcf2n-VyIyKO8KpMMMv5Ap2VxU_Tis'},
          function(data) {
            var videoOutput;
            $.each(data.items, function(i, item) {
              console.log(item);
              videoTitle = item.snippet.title;
              videoId = item.id.videoId;
              videoOutput = '<li><iframe src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></li>';
              $('#VideoResults').append(videoOutput);
            });
          }
        )
      }
    videoList.requestVideos();
  });

  $('#css').on('click', function() {
      console.log('CSS clicked!');
  });

  $('#javascript').on('click', function() {
      console.log('JavaScript clicked!');
  });

  $('#ruby').on('click', function() {
      console.log('Ruby clicked!');
  });

  $('#python').on('click', function() {
      console.log('Python clicked!');
  });

  $('#objectivec').on('click', function() {
      console.log('Objective C clicked!');
  });

  $('#swift').on('click', function() {
      console.log('Swift clicked!');
  });

  module.videoList = videoList;
})(window);
