$(document).ready(function(){
  $("form#quiz").submit(function(){

    event.preventDefault();

    var windows = parseInt($("input:radio[name=windows]:checked").val());

    var games = parseInt($("input:radio[name=games]:checked").val());

    var flexibility = parseInt($("input:radio[name=flexibility]:checked").val());

    var fullstack = parseInt($("input:radio[name=fullstack]:checked").val());

    var dynamic = parseInt($("input:radio[name=dynamic]:checked").val());

    var everything = (windows + games + flexibility + fullstack + dynamic)

    if ((fullstack + dynamic) > 4 && (windows + games) > 4 && flexibility === 3) {
      $("#javascript").show();
      $("#ruby").show();
      $("#csharp").show();
      $("#uninterested").hide();
      $("#output").show();
    } else if ((fullstack + dynamic) > 4 && flexibility === 3) {
      $("#javascript").show();
      $("#ruby").show();
      $("#csharp").hide();
      $("#uninterested").hide();
      $("#output").show();
    } else if ((fullstack + dynamic) > 4 && (windows + games) > 4) {
      $("#javascript").show();
      $("#ruby").hide();
      $("#csharp").show();
      $("#uninterested").hide();
      $("#output").show();
    } else if ((windows + games) > 4 && flexibility === 3) {
      $("#javascript").hide();
      $("#ruby").show();
      $("#csharp").show();
      $("#uninterested").hide();
      $("#output").show();
    } else if ((windows+games) > 4) {
      $("#javascript").hide();
      $("#ruby").hide();
      $("#csharp").show();
      $("#uninterested").hide();
      $("#output").show();
    } else if ((fullstack + dynamic) > 4) {
      $("#javascript").show();
      $("#ruby").hide();
      $("#csharp").hide();
      $("#uninterested").hide()
      $("#output").show();
    } else if (flexibility === 3) {
      $("#javascript").hide();
      $("#ruby").show();
      $("#csharp").hide();
      $("#uninterested").hide();
      $("#output").show();
    } else if (everything <= 10){
      $("#uninterested").show();
      $("#javascript").hide();
      $("#ruby").hide();
      $("#csharp").hide();
      $("#uninterested").hide();
      $("#output").hide();
    } else if (isNaN(fullstack) || isNaN(dynamic) || isNaN(games) || isNaN(windows) || isNaN(flexibility)){
      $("#incomplete").show();
      $("#javascript").hide();
      $("#ruby").hide();
      $("#csharp").hide();
      $("#uninterested").hide();
      $("#output").hide();
    }

    console.log(windows)
    console.log(games)
    console.log(flexibility)
    console.log(fullstack)
    console.log(dynamic)


  });
});
