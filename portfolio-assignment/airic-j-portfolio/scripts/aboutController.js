(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    // ProjectsModule.init();
    PortfolioModule.initAbout();
  };

  module.aboutController = aboutController;
})(window);
