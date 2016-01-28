(function(module) {
  var learnController = {};

  learnController.index = function(next) {
    $('main').empty();
    $('main').load('page2.html main')
    videoShow.customQuery();
  }
  module.learnController = learnController;
})(window);
