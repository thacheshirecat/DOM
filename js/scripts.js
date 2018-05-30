$(document).ready(function() {

//
// Cats vs Dogs scripts
//

$("button#meowbutton").click(function(){
  $("ul#meowcall").prepend("<li>Meow!</li>");
  $("ul#barkcall").prepend("<li>Bark!</li>");
})

$("button#barkbutton").click(function(){
  $("ul#meowcall").prepend("<li>Meow!</li>");
  $("ul#barkcall").prepend("<li>Bark!</li>");
})

$("#moreanimals").click(function(){
  $("#fuckthisbullshit").toggle();
})

//
// Talk to webpage functions
//

  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Howdy!</li>");
    $("ul#user").children("li").first().click(function() {
  $(this).remove();
});
$("ul#webpage").children("li").first().click(function() {
  $(this).remove();
});
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>See ya!</li>");
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Wut?</li>");
  });


//
// DOM selector/removal practice functions
//

  $("#talktitle").click(function(){
    $("h1").addClass("green");
    $("#talktitle").click(function(){
      $(this).remove();
    });
  });

  $("#greentext").click(function(){
    $("p#greentext").addClass("green");
    $("#greentext").click(function(){
      $(this).remove();
    });
  });

  $("#yousaidtitle").click(function(){
    $("h2#yousaidtitle").addClass("green");
    $("#yousaidtitle").click(function(){
      $(this).remove();
    });
  });

  $("#webpagesaidtitle").click(function(){
    $("h2#webpagesaidtitle").addClass("green");
    $("#webpagesaidtitle").click(function(){
      $(this).remove();
    });
  });

});
