$(document).ready(function(){
  $("form#quiz").submit(function(){

    event.preventDefault();

    var windows = parseInt($("input:radio[name=windows]:checked").val());

    var games = parseInt($("input:radio[name=games]:checked").val());

    var flexibility = parseInt($("input:radio[name=flexibility]:checked").val());

    var fullstack = parseInt($("input:radio[name=fullstack]:checked").val());

    var dynamic = parseInt($("input:radio[name=dynamic]:checked").val());

    console.log(windows)
    console.log(games)
    console.log(flexibility)
    console.log(fullstack)
    console.log(dynamic)

    $("#output").show();
    $("#csharp").show();
    $("#javascript").show();
    $("#ruby").show();
  });
});
