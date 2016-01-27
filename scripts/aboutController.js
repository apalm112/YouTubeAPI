(function(module) {
  var aboutController = {}

  aboutController.index = function() {
    $('main').empty();
    $('main').load('about.html main')
    console.log("aboutController")
  }

  module.aboutController = aboutController;
})(window);
