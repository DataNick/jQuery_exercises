$(document).ready(function(){
  x = 0;
  $("div").scroll(function(){
    $("span").text( x+= 1);
  });

});

// descendant selector
// $(".destination li")

// child selector
// $(".destination > li")