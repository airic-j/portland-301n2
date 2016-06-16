(function(module){

  // create a controller variable to attach iffe to
  var portfolioController = {};

  portfolioController.initIndex = function(){
    ProjectsModule.init();
    console.log('init index');
  };

  portfolioController.initIndex();

  module.portfolioController = portfolioController;
})(window);
