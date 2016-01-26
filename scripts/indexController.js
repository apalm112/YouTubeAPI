(function(module) {
  var indexController = {};

  indexController.index = function() {
    $('main').empty();
    $('main').load('index.html main')

  };

  module.indexController = indexController;
})(window);
