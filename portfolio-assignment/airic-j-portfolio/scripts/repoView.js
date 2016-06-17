(function(module) {
  var repoView = {};

  var ui = function() {
    var $github = $('#github');
    $github.find('ul').empty();
    // $github.show().siblings().hide();
    console.log('ran ui');
  };

  var render = Handlebars.compile($('#repo-template').text());

  repoView.index = function() {
    console.log('append github projects');
    ui();
    console.log(typeof repos.with('name').map(render));
    $('#github ul').append(
      // repos.with('name').map(render)
      // repos.all.map(render)
      'test'
    );
  };

  module.repoView = repoView;
})(window);
