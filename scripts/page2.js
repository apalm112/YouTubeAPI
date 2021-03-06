(function(module) {
  var videoShow = {};
  var videoHeight = 400;
  var videoWidth = 800;
  var firstInput = [];
  var secondInput = [];

  videoShow.customQuery = function() {
    $('body').on('click', '.button', function() {
      $('.jsonData').empty();
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
        var codeModal;
        $('.videoResults').empty();
        $.each(data.items, function(i, item) {
          videoTitle = item.snippet.title;
          videoId = item.id.videoId;
          videoOutput = '<li><iframe height="' + videoHeight + '" width="' + videoWidth + '" src=\"//www.youtube.com/embed/' + videoId + '\"></iframe></li>';
          codeModal = '<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">See JSON Query</button>';

          $('.videoResults').append(videoOutput);
          $('.jsonData').append(videoTitle);
          $('.returnQ').append(codeModal)
          $('.classBody').append("$.get('https://www.googleapis.com/youtube/v3/search',<br>{<br>part:\'snippet',<br> maxResults: 1,<br>q:\'" + $firstParam + "\',<br>order:\'viewCount',<br>key:\'" + $secondParam +"\' }, function(data) {console.log(data)})");
          });
      });
    })
  };
  module.videoShow = videoShow;
})(window);
