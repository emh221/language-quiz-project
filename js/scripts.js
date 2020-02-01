$(document).ready(function(){
  $("form#quiz").submit(function(){

    event.preventDefault();

    var windows = parseInt($("input:radio[name=windows]:checked").val());

    var games = parseInt($("input:radio[name=games]:checked").val());

    var flexibility = parseInt($("input:radio[name=flexibility]:checked").val());

    var fullstack = parseInt($("input:radio[name=fullstack]:checked").val());

    var dynamic = parseInt($("input:radio[name=dynamic]:checked").val());

    var everything = (windows + games + flexibility + fullstack + dynamic)

    $("#incomplete").slideUp();
    $("#javascript").slideUp();
    $("#ruby").slideUp();
    $("#csharp").slideUp();
    $("#uninterested").slideUp();
    $("#output").slideUp();

    if (isNaN(fullstack) || isNaN(dynamic) || isNaN(games) || isNaN(windows) || isNaN(flexibility)){
      $("#incomplete").slideDown();
    } else if ((fullstack + dynamic) > 4 && (windows + games) > 4 && flexibility === 3) {
      $("#javascript").slideDown();
      $("#ruby").slideDown();
      $("#csharp").slideDown();
      $("#output").slideDown();
    } else if ((fullstack + dynamic) > 4 && flexibility === 3) {
      $("#javascript").slideDown();
      $("#ruby").slideDown();
      $("#output").slideDown();
    } else if ((fullstack + dynamic) > 4 && (windows + games) > 4) {
      $("#javascript").slideDown();
      $("#csharp").slideDown();
      $("#output").slideDown();
    } else if ((windows + games) > 4 && flexibility === 3) {
      $("#ruby").slideDown();
      $("#csharp").slideDown();
      $("#output").slideDown();
    } else if ((windows+games) > 4) {
      $("#csharp").slideDown();
      $("#output").slideDown();
    } else if ((fullstack + dynamic) > 4) {
      $("#javascript").slideDown();
    } else if (flexibility === 3) {
      $("#ruby").slideDown();
      $("#output").slideDown();
    } else if (everything <= 10){
      $("#uninterested").slideDown();
    }

    $('html, body').animate({scrollTop:$(document).height()}, 'slow');

  });
});
