(function(module) {
  var learnController = {};

  learnController.index = function(next) {
    $('nav ul li').removeClass('active')
    $('nav ul li').first().next().addClass('active');
    $('main').empty();
    $('main').load('page2.html main')
    videoShow.customQuery();
  }
  module.learnController = learnController;
})(window);
