(function(module) {
  var aboutController = {}

  aboutController.index = function() {
    $('main').load('about.html main')
  }

  module.aboutController = aboutController;
})(window);
