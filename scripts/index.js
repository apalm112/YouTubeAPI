(function (module) {
  var videoList = {};
  var videoHeight = 400;
  var videoWidth = 500;

  $('#html').on('click', function() {
    // console.log('HTML clicked!');
    $('#VideoResults').empty();
    videoList.requestVideos = function() {
        $.get(
          'https://www.googleapis.com/youtube/v3/search',{
          part: 'snippet',
          maxResults: 3,
          q: 'html+learn+programming',
          order: 'viewCount',
          key: 'AIzaSyCPIPcf2n-VyIyKO8KpMMMv5Ap2VxU_Tis'},
          function(data) {
            var videoOutput;
            $.each(data.items, function(i, item) {
              // console.log(item);
              videoTitle = item.snippet.title;
              videoId = item.id.videoId;
              videoOutput = '<li><iframe height="'+videoHeight+'" width="'+videoWidth+'" src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></li>';
              $('#VideoResults').append(videoOutput);
            });
          }
        )
      }
    videoList.requestVideos();
  });

  $('#css').on('click', function() {
      // console.log('CSS clicked!');
      $('#VideoResults').empty();
      videoList.requestVideos = function() {
          $.get(
            'https://www.googleapis.com/youtube/v3/search',{
            part: 'snippet',
            maxResults: 3,
            q: 'css+learn+programming',
            order: 'viewCount',
            key: 'AIzaSyCPIPcf2n-VyIyKO8KpMMMv5Ap2VxU_Tis'},
            function(data) {
              var videoOutput;
              $.each(data.items, function(i, item) {
                // console.log(item);
                videoTitle = item.snippet.title;
                videoId = item.id.videoId;
                videoOutput = '<li><iframe height="'+videoHeight+'" width="'+videoWidth+'" src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></li>';
                $('#VideoResults').append(videoOutput);
              });
            }
          )
        }
      videoList.requestVideos();
  });

  $('#javascript').on('click', function() {
      // console.log('JavaScript clicked!');
      $('#VideoResults').empty();
      videoList.requestVideos = function() {
          $.get(
            'https://www.googleapis.com/youtube/v3/search',{
            part: 'snippet',
            maxResults: 3,
            q: 'javascript+learn+programming',
            order: 'viewCount',
            key: 'AIzaSyCPIPcf2n-VyIyKO8KpMMMv5Ap2VxU_Tis'},
            function(data) {
              var videoOutput;
              $.each(data.items, function(i, item) {
                // console.log(item);
                videoTitle = item.snippet.title;
                videoId = item.id.videoId;
                videoOutput = '<li><iframe height="'+videoHeight+'" width="'+videoWidth+'" src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></li>';
                $('#VideoResults').append(videoOutput);
              });
            }
          )
        }
      videoList.requestVideos();
  });

  $('#ruby').on('click', function() {
      // console.log('Ruby clicked!');
      $('#VideoResults').empty();
      videoList.requestVideos = function() {
          $.get(
            'https://www.googleapis.com/youtube/v3/search',{
            part: 'snippet',
            maxResults: 3,
            q: 'ruby+learn+programming',
            order: 'viewCount',
            key: 'AIzaSyCPIPcf2n-VyIyKO8KpMMMv5Ap2VxU_Tis'},
            function(data) {
              var videoOutput;
              $.each(data.items, function(i, item) {
                // console.log(item);
                videoTitle = item.snippet.title;
                videoId = item.id.videoId;
                videoOutput = '<li><iframe height="'+videoHeight+'" width="'+videoWidth+'" src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></li>';
                $('#VideoResults').append(videoOutput);
              });
            }
          )
        }
      videoList.requestVideos();
  });

  $('#python').on('click', function() {
      // console.log('Python clicked!');
      $('#VideoResults').empty();
      videoList.requestVideos = function() {
          $.get(
            'https://www.googleapis.com/youtube/v3/search',{
            part: 'snippet',
            maxResults: 3,
            q: 'python+learn+programming',
            order: 'viewCount',
            key: 'AIzaSyCPIPcf2n-VyIyKO8KpMMMv5Ap2VxU_Tis'},
            function(data) {
              var videoOutput;
              $.each(data.items, function(i, item) {
                // console.log(item);
                videoTitle = item.snippet.title;
                videoId = item.id.videoId;
                videoOutput = '<li><iframe height="'+videoHeight+'" width="'+videoWidth+'" src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></li>';
                $('#VideoResults').append(videoOutput);
              });
            }
          )
        }
      videoList.requestVideos();
  });

  $('#objectivec').on('click', function() {
      // console.log('Objective C clicked!');
      $('#VideoResults').empty();
      videoList.requestVideos = function() {
          $.get(
            'https://www.googleapis.com/youtube/v3/search',{
            part: 'snippet',
            maxResults: 3,
            q: 'objective c+learn+programming',
            order: 'viewCount',
            key: 'AIzaSyCPIPcf2n-VyIyKO8KpMMMv5Ap2VxU_Tis'},
            function(data) {
              var videoOutput;
              $.each(data.items, function(i, item) {
                // console.log(item);
                videoTitle = item.snippet.title;
                videoId = item.id.videoId;
                videoOutput = '<li><iframe height="'+videoHeight+'" width="'+videoWidth+'" src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></li>';
                $('#VideoResults').append(videoOutput);
              });
            }
          )
        }
      videoList.requestVideos();
  });

  $('#swift').on('click', function() {
      // console.log('Swift clicked!');
      $('#VideoResults').empty();
      videoList.requestVideos = function() {
          $.get(
            'https://www.googleapis.com/youtube/v3/search',{
            part: 'snippet',
            maxResults: 3,
            q: 'swift+learn+programming',
            order: 'viewCount',
            key: 'AIzaSyCPIPcf2n-VyIyKO8KpMMMv5Ap2VxU_Tis'},
            function(data) {
              var videoOutput;
              $.each(data.items, function(i, item) {
                // console.log(item);
                videoTitle = item.snippet.title;
                videoId = item.id.videoId;
                videoOutput = '<li><iframe height="'+videoHeight+'" width="'+videoWidth+'" src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></li>';
                $('#VideoResults').append(videoOutput);
              });
            }
          )
        }
      videoList.requestVideos();
  });

  module.videoList = videoList;
})(window);
