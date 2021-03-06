(function (module) {
  var videoList = {};
  var videoHeight = 400;
  var videoWidth = 800;

  videoList.getHTML = function() {
    $('body').on('click', '#html', function(e) {
      emptyResults();
      $.get(
        'https://www.googleapis.com/youtube/v3/search',{
        part: 'snippet',
        maxResults: 3,
        q: 'html+learn+programming',
        order: 'viewCount',
        key: 'AIzaSyCPIPcf2n-VyIyKO8KpMMMv5Ap2VxU_Tis'},
        function(data) {
          var videoOutput;
          emptyResults();
          $.each(data.items, function(i, item) {
            videoTitle = item.snippet.title;
            videoId = item.id.videoId;
            videoOutput = '<li><iframe height="'+videoHeight+'" width="'+videoWidth+'" src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></li>';
            var pageSource = $('#video-template').html();
            var compiledTemplate = Handlebars.compile(pageSource);
            var context = {"title": videoTitle};
            var html = compiledTemplate(context);
            $('#VideoDisplay').append(html).append(videoOutput);
          });
        }
      )
    })
  };

  videoList.getCSS = function() {
    $('body').on('click', '#css', function() {
      emptyResults();
      $.get(
        'https://www.googleapis.com/youtube/v3/search',{
        part: 'snippet',
        maxResults: 3,
        q: 'css+design+learn+programming',
        order: 'viewCount',
        key: 'AIzaSyCPIPcf2n-VyIyKO8KpMMMv5Ap2VxU_Tis'},
        function(data) {
          var videoOutput;
          emptyResults();
          $.each(data.items, function(i, item) {
            videoTitle = item.snippet.title;
            videoId = item.id.videoId;
            videoOutput = '<li><iframe height="'+videoHeight+'" width="'+videoWidth+'" src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></li>';
            var pageSource = $('#video-template').html();
            var compiledTemplate = Handlebars.compile(pageSource);
            var context = {"title": videoTitle};
            var html = compiledTemplate(context);
            $('#VideoDisplay').append(html).append(videoOutput);
          });
        }
      )
    })
  };

  videoList.getJavaScript = function() {
    $('body').on('click', '#javascript', function(){
      emptyResults();
      $.get(
        'https://www.googleapis.com/youtube/v3/search',{
        part: 'snippet',
        maxResults: 3,
        q: 'javascript+learn+programming',
        order: 'viewCount',
        key: 'AIzaSyCPIPcf2n-VyIyKO8KpMMMv5Ap2VxU_Tis'},
        function(data) {
          var videoOutput;
          emptyResults();
          $.each(data.items, function(i, item) {
            videoTitle = item.snippet.title;
            videoId = item.id.videoId;
            videoOutput = '<li><iframe height="'+videoHeight+'" width="'+videoWidth+'" src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></li>';
            var pageSource = $('#video-template').html();
            var compiledTemplate = Handlebars.compile(pageSource);
            var context = {"title": videoTitle};
            var html = compiledTemplate(context);
            $('#VideoDisplay').append(html).append(videoOutput);
          });
        }
      )
    })
  };

  videoList.getRuby = function() {
    $('body').on('click', '#ruby', function(){
      emptyResults();
      $.get(
        'https://www.googleapis.com/youtube/v3/search',{
        part: 'snippet',
        maxResults: 3,
        q: 'ruby+learn+programming',
        order: 'viewCount',
        key: 'AIzaSyCPIPcf2n-VyIyKO8KpMMMv5Ap2VxU_Tis'},
        function(data) {
          var videoOutput;
          emptyResults();
          $.each(data.items, function(i, item) {
            videoTitle = item.snippet.title;
            videoId = item.id.videoId;
            videoOutput = '<li><iframe height="'+videoHeight+'" width="'+videoWidth+'" src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></li>';
            var pageSource = $('#video-template').html();
            var compiledTemplate = Handlebars.compile(pageSource);
            var context = {"title": videoTitle};
            var html = compiledTemplate(context);
            $('#VideoDisplay').append(html).append(videoOutput);
          });
        }
      )
    })
  };

  videoList.getPython = function() {
    $('body').on('click', '#python', function(e){
      emptyResults();
      $.get(
        'https://www.googleapis.com/youtube/v3/search',{
        part: 'snippet',
        maxResults: 3,
        q: 'python+learn+programming',
        order: 'viewCount',
        key: 'AIzaSyCPIPcf2n-VyIyKO8KpMMMv5Ap2VxU_Tis'},
        function(data) {
          var videoOutput;
          emptyResults();
          $.each(data.items, function(i, item) {
            videoTitle = item.snippet.title;
            videoId = item.id.videoId;
            videoOutput = '<li><iframe height="'+videoHeight+'" width="'+videoWidth+'" src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></li>';
            var pageSource = $('#video-template').html();
            var compiledTemplate = Handlebars.compile(pageSource);
            var context = {"title": videoTitle};
            var html = compiledTemplate(context);
            $('#VideoDisplay').append(html).append(videoOutput);
          });
        }
      )
    })
  };

  videoList.getObjC = function() {
    $('body').on('click', '#objectivec', function(){
      emptyResults();
      $.get(
        'https://www.googleapis.com/youtube/v3/search',{
        part: 'snippet',
        maxResults: 3,
        q: 'objectivec+learn+programming',
        order: 'viewCount',
        key: 'AIzaSyCPIPcf2n-VyIyKO8KpMMMv5Ap2VxU_Tis'},
        function(data) {
          var videoOutput;
          emptyResults();
          $.each(data.items, function(i, item) {
            videoTitle = item.snippet.title;
            videoId = item.id.videoId;
            videoOutput = '<li><iframe height="'+videoHeight+'" width="'+videoWidth+'" src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></li>';
            var pageSource = $('#video-template').html();
            var compiledTemplate = Handlebars.compile(pageSource);
            var context = {"title": videoTitle};
            var html = compiledTemplate(context);
            $('#VideoDisplay').append(html).append(videoOutput);
          });
        }
      )
    })
  };

  videoList.getSwift = function() {
    $('body').on('click', '#swift', function(){
      emptyResults();
      $.get(
        'https://www.googleapis.com/youtube/v3/search',{
        part: 'snippet',
        maxResults: 3,
        q: 'swift+learn+programming',
        order: 'viewCount',
        key: 'AIzaSyCPIPcf2n-VyIyKO8KpMMMv5Ap2VxU_Tis'},
        function(data) {
          var videoOutput;
          emptyResults();
          $.each(data.items, function(i, item) {
            videoTitle = item.snippet.title;
            videoId = item.id.videoId;
            videoOutput = '<li><iframe height="'+videoHeight+'" width="'+videoWidth+'" src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></li>';
            var pageSource = $('#video-template').html();
            var compiledTemplate = Handlebars.compile(pageSource);
            var context = {"title": videoTitle};
            var html = compiledTemplate(context);
            $('#VideoDisplay').append(html).append(videoOutput);
          });
        }
      )
    })
  };

 function emptyResults() {
   $('#VideoDisplay').empty();
 }
  module.videoList = videoList;
})(window);
