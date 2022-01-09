$(document).ready(function(){ 
  $('tw-story').mousemove(function(e){
    var pageX; // mouse coordinates
    var pageY;
    var amountMovedX = (e.pageX * -1 / 10);// divide them to get smaller number
    var amountMovedY = (e.pageY * -1 / 10);
    $('.values').html("<div>" + amountMovedX + 'px ' + amountMovedY + 'px' + "</div>");
    $(this).css('background-position',amountMovedX+'px '+amountMovedY+'px');// move the background image
});
});
