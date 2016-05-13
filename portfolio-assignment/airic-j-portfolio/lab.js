$('document').ready(function () {

	// hide projects at initial page load
  $('section').not('#about').hide();

  var projects = [];

  function Project(x) {
    this.title = x.title;
    this.date = x.date;
    this.description = x.description;
    this.link = x.link;
    this.image = x.image;
  }

  Project.prototype.toHtml = function() {
    // use handlebars
    var templateScript = $('#projectTemplate').html();
    var projectTemplate = Handlebars.compile(templateScript);
    var html = projectTemplate(this);
    return(html);
  };

  projectData.forEach(function(projectData){
    projects.push(new Project(projectData));
  });

  projects.forEach(function(project){
    $('#projects').append(project.toHtml());
  });

	//sticky nav

  var topOfNav = $('.nav').offset().top;
  var stickyNav = function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > topOfNav) {
      $('nav').addClass('stickyNav').removeClass('nav');
    } else {
      $('nav').removeClass('stickyNav').addClass('nav');
    }
  };

  stickyNav();

  $(window).scroll(function() {
    stickyNav();
  });


	// change visible tab by click on nav links

  $('nav a').on('click', function() {
    $tabClicked = $(this).data('tab');
    $(this).addClass('selected').siblings().removeClass('selected');
    $('section').hide();
    $('#' + $tabClicked).show();
  });

});
