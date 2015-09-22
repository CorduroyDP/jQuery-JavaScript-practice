$(document).ready(function(){
var names = ["Tatyana", "Olga", "Yana", "Elvira", "Svetlana"];
var dress_color = ["Red", "Orange", "Yellow", "Green", "Blue"];

function greeting(){
  var counter = 0;
  return function (){
    counter += 1;
    return counter;
  }



}


});
