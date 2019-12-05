$(document).ready(function(){
  $("form#quiz").submit(function(){

    event.preventDefault();

    var windows = parseInt($("input:radio[name=windows]:checked").val());

    var games = parseInt($("input:radio[name=games]:checked").val());

    var flexibility = parseInt($("input:radio[name=flexibility]:checked").val());

    var fullstack = parseInt($("input:radio[name=fullstack]:checked").val());

    var dynamic = parseInt($("input:radio[name=dynamic]:checked").val());

    var everything = (windows + games + flexibility + fullstack + dynamic)

    if (isNaN(fullstack) || isNaN(dynamic) || isNaN(games) || isNaN(windows) || isNaN(flexibility)){
      $("#incomplete").slideDown();
      $("#javascript").slideUp();
      $("#ruby").slideUp();
      $("#csharp").slideUp();
      $("#uninterested").slideUp();
      $("#output").slideUp();
    } else if ((fullstack + dynamic) > 4 && (windows + games) > 4 && flexibility === 3) {
      $("#javascript").slideDown();
      $("#ruby").slideDown();
      $("#csharp").slideDown();
      $("#uninterested").slideUp();
      $("#output").slideDown();
      $("#incomplete").slideUp();
    } else if ((fullstack + dynamic) > 4 && flexibility === 3) {
      $("#javascript").slideDown();
      $("#ruby").slideDown();
      $("#csharp").slideUp();
      $("#uninterested").slideUp();
      $("#output").slideDown();
      $("#incomplete").slideUp();
    } else if ((fullstack + dynamic) > 4 && (windows + games) > 4) {
      $("#javascript").slideDown();
      $("#ruby").slideUp();
      $("#csharp").slideDown();
      $("#uninterested").slideUp();
      $("#output").slideDown();
      $("#incomplete").slideUp();
    } else if ((windows + games) > 4 && flexibility === 3) {
      $("#javascript").slideUp();
      $("#ruby").slideDown();
      $("#csharp").slideDown();
      $("#uninterested").slideUp();
      $("#output").slideDown();
      $("#incomplete").slideUp();
    } else if ((windows+games) > 4) {
      $("#javascript").slideUp();
      $("#ruby").slideUp();
      $("#csharp").slideDown();
      $("#uninterested").slideUp();
      $("#output").slideDown();
      $("#incomplete").slideUp();
    } else if ((fullstack + dynamic) > 4) {
      $("#javascript").slideDown();
      $("#ruby").slideUp();
      $("#csharp").slideUp();
      $("#uninterested").slideUp()
      $("#output").slideDown();
      $("#incomplete").slideUp();
    } else if (flexibility === 3) {
      $("#javascript").slideUp();
      $("#ruby").slideDown();
      $("#csharp").slideUp();
      $("#uninterested").slideUp();
      $("#output").slideDown();
      $("#incomplete").slideUp();
    } else if (everything <= 10){
      $("#uninterested").slideDown();
      $("#javascript").slideUp();
      $("#ruby").slideUp();
      $("#csharp").slideUp();
      $("#output").slideUp();
      $("#incomplete").slideUp();
    }

    console.log(windows)
    console.log(games)
    console.log(flexibility)
    console.log(fullstack)
    console.log(dynamic)


  });
});
