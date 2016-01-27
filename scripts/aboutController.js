(function(module) {
  var aboutController = {}

  aboutController.index = function() {
    $('main').empty();
    $('main').load('about.html main')
  }

  module.aboutController = aboutController;
})(window);
