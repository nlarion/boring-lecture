$(document).ready(function(){
  $("p").click(function(){
    if($(this).css("background-color") === "rgb(255, 255, 0)"){
      $(this).removeClass();
    } else {
      $(this).addClass("highLight");      
    }
  });

});
