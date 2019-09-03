(function () {
  "use strict";
  $(function () {
    $(".menu-container").load("menu.html");
  });
})();

window.onscroll = function() {myFunction()};

var menu = document.getElementById("menu");

function myFunction() {
    
  var menu = document.getElementById("menu");
  var y = document.scrollTop;
    
  if (window.pageYOffset > 350) {
    menu.classList.add("sticky");
  } else {
    menu.classList.remove("sticky");
  }
}