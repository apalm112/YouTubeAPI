(function(module) {
  var indexController = {};

  indexController.index = function(next) {
    $('main').empty();
    $('main').load('index.html main');
    // videoList.requestVideos();
  };

  module.indexController = indexController;
})(window);
