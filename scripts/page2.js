(function(module) {
  var videoShow = {};
  var videoHeight = 400;
  var videoWidth = 800;
  var firstInput = [];
  var secondInput = [];

  videoShow.customQuery = function() {
    $('body').on('click', '.button', function() {
      var $firstParam = $('.inputOne').val();
      var $secondParam = $('.inputTwo').val();

      firstInput.push($firstParam);
      secondInput.push($secondParam);

      localStorage.firstInput = JSON.stringify(firstInput);
      localStorage.secondInput = JSON.stringify(secondInput);

      $.get(
        'https://www.googleapis.com/youtube/v3/search',
        {
          part: 'snippet',
          maxResults: 1,
          q: $firstParam,
          order: 'viewCount',
          key: $secondParam
        },
      function(data) {
        var videoOutput;
        $('.videoResults').empty();
        $.each(data.items, function(i, item) {
          console.log(item);
          videoTitle = item.snippet.title;
          videoId = item.id.videoId;
          videoOutput = '<li><iframe height="' + videoHeight + '" width="' + videoWidth + '" src=\"//www.youtube.com/embed/' + videoId + '\"></iframe></li>';
          $('.videoResults').append(videoOutput);
          $('.jsonData').append(videoTitle);
        });
      });
    })
  };
  module.videoShow = videoShow;
})(window);
