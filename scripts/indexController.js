(function(module) {
  var indexController = {};

  indexController.index = function(next) {
    $('nav ul li').removeClass('active');
    $('nav ul li').first().addClass('active');
    $('main').empty();
    $('main').load('index.html main');
    videoList.getHTML();
    videoList.getCSS();
    videoList.getJavaScript();
    videoList.getRuby();
    videoList.getPython();
    videoList.getObjC();
    videoList.getSwift();
  }


  module.indexController = indexController;
})(window);
