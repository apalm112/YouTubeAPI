(function(module) {
  var aboutController = {}

  aboutController.index = function(next) {
    $('nav ul li').removeClass('active')
    $('nav ul li').first().next().next().addClass('active');
    $('main').empty();
    $('main').load('about.html main')
  }

  module.aboutController = aboutController;
})(window);
