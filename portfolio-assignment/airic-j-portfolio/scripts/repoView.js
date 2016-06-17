(function(module) {
  var repoView = {};

  var ui = function() {
    var $github = $('#github');
    $github.find('ul').empty();
    // $github.show().siblings().hide();
    console.log('ran ui');
  };

  var render = Handlebars.compile($('#repo-template').text());

  // TODO get this working :(
  repoView.index = function() {
    console.log('append github projects');
    ui();
    $('#github ul').append(
      // repos.with('name').map(render)
      repos.all.map(render)
    );
  };

  module.repoView = repoView;
})(window);
