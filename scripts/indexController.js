(function(module) {
  var indexController = {};

  indexController.index = function(next) {
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
