$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000);
      window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

$(".lineUpButton").on("click", function(event){
  console.log("lineup button triggered")
  console.log(window.dancers)
  for(var i = 0; i<window.dancers.length; i++) {
    console.log("dancers", i, window.dancers[i]);
    window.dancers[i].lineUp();
  }
});

});



