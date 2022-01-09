// hide or show the menu divs

$('.start-btn').click( function() {
    $("#home").removeClass("show");
    $("#home").addClass("hidden");
    $("#enarksi").addClass("show");
    console.log("start");
} );


$('.about-btn').click( function() {
    $("#home").removeClass("show");
    $("#home").addClass("hidden");
    $("#about").addClass("show");
    console.log("about");
} );


$('.credits-btn').click( function() {
    $("#home").addClass("hidden");
    $("#home").removeClass("show");
    $("#credits").addClass("show");
    console.log("credits");
} );



$('.back').click( function() {
    $("#home").removeClass("hidden");
    $("#home").addClass("show");
    $("#enarksi").removeClass("show");
    $("#about").removeClass("show");
    $("#credits").removeClass("show");
    console.log("back");
} );


// loop title images



const timer = ms => new Promise(res => setTimeout(res, ms)) // create a timer

//arrays with images
var enarksii = ["images/enarksi2.png" , "images/enarksi3.png", "images/enarksi4.png", "images/enarksi5.png", "images/enarksi1.png"];
var credd = ["images/cred2.png" , "images/cred3.png", "images/cred4.png", "images/cred5.png", "images/cred.png", "images/cred6.png"];
var logoo = ["images/18m1.png" ,"images/18m2.png" ,"images/18m3.png"  ,"images/18m5.png" ,"images/18m6.png" ];
var pouu = ["images/pou1.png" ,"images/pou2.png" ,"images/pou3.png"  ,"images/pou4.png" ];
var startt = ["images/start.png" ,"images/start2.png" ,"images/start3.png"  ,"images/start4.png","images/start5.png" ];


async function cred(){// for the credit animation
        for (let i = 0; i < 5; i++) {
                document.getElementById("cred").src = credd[i];// loop through the array with the images
                await timer(145);// with a small delay
        }
        cred();
}

cred();// call the function again so it loops forever


async function logo(){// for the main logo animation
        for (let i = 0; i < 5; i++) {
                document.getElementById("logo").src = logoo[i];
                await timer(170);
        }
        logo();
}

logo();

async function pou(){
        for (let i = 0; i < 3; i++) {
                document.getElementById("pou").src = pouu[i];
                await timer(170);
        }
        pou();
}

pou();


async function start(){
        for (let i = 0; i < 3; i++) {
                document.getElementById("start").src = startt[i];
                await timer(170);
        }
        start();
}

start();



// PARALLAX MOVING BACKGROUND

$(document).ready(function(){
  $('body').mousemove(function(e){
    var pageX; // get mouse coordinates
    var pageY;
    var amountMovedX = (e.pageX * -1 / 10); // divide them to get smaller number
    var amountMovedY = (e.pageY * -1 / 10);
    $('.values').html("<div>" + amountMovedX + 'px ' + amountMovedY + 'px' + "</div>");
    $(this).css('background-position',amountMovedX+'px '+amountMovedY+'px'); // move the background image
});
  });