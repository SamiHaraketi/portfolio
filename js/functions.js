/*smooth scroll*/
$('a[href*="#"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {

        });
      }
    }
  });


/*map funtion*/
 function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}


/*function work*/
$(".img-work").show();

$(".btn-work-all").click(function(){
  $(".img-work").show();

});

$(".btn-work-ux").click(function(){
  $(".img-work").hide();
  $(".ux").show();

});

$(".btn-work-ill").click(function(){
  $(".img-work").hide();
  $(".ill").show();

});

$(".btn-work-print").click(function(){
  $(".img-work").hide();
  $(".print").show();

});


/*menu*/
var modal = document.getElementById('myModal');


var btn = document.getElementById("btn-menu");

var linkPage =  document.getElementsByClassName("link-page");


var x=0;

btn.onclick = function() {
    btn.classList.toggle("change");
    if(x==0)
    {
    modal.style.display = "block";
    x=x+1;
    }
    else 
    {
    modal.style.display = "none";
    x=x-1;      
    }


}

linkPage.onclick = function() {
    modal.style.display = "none";

}




/*menu-color*/
$(document).ready(function(){       
var scroll_start1 = 0;
var scroll_start2 = 0;

var startchange1 = $(".hom1");
var startchange2 = $(".about");
var startchange3 = $(".service");
var startchange4 = $(".work");
var startchange5 = $(".contact");

var offset1 = startchange1.offset();
var offset2 = startchange2.offset();
var offset3 = startchange3.offset();
var offset4 = startchange4.offset();
var offset5 = startchange5.offset();




 if (startchange2.length){
 $(document).scroll(function() { 
  scroll_start2 = $(this).scrollTop();
  if(scroll_start2 > offset2.top) {
      $(".bar1").css('background-color', '#1674ad');
      $(".bar2").css('background-color', '#1674ad');
      $(".bar3").css('background-color', '#1674ad');
      $(".bar4").css('background-color', '#1674ad');

   }

   else
   {
      $(".bar1").css('background-color', '#fff');
      $(".bar2").css('background-color', '#fff');
      $(".bar3").css('background-color', '#fff');
      $(".bar4").css('background-color', '#fff');    
   }

});
}

 if (startchange3.length){
 $(document).scroll(function() { 
  scroll_start3 = $(this).scrollTop();
  if(scroll_start3 > offset3.top) {
      $(".bar1").css('background-color', '#fff');
      $(".bar2").css('background-color', '#fff');
      $(".bar3").css('background-color', '#fff');
      $(".bar4").css('background-color', '#fff');

   }

});
}
 if (startchange4.length){
 $(document).scroll(function() { 
  scroll_start4 = $(this).scrollTop();
  if(scroll_start4 > offset4.top) {
      $(".bar1").css('background-color', '#1674ad');
      $(".bar2").css('background-color', '#1674ad');
      $(".bar3").css('background-color', '#1674ad');
      $(".bar4").css('background-color', '#1674ad');

   }

});
}

 if (startchange5.length){
 $(document).scroll(function() { 
  scroll_start5 = $(this).scrollTop();
  if(scroll_start5 > offset5.top) {
      $(".bar1").css('background-color', '#1674ad');
      $(".bar2").css('background-color', '#1674ad');
      $(".bar3").css('background-color', '#1674ad');
      $(".bar4").css('background-color', '#1674ad');

   }

});
}


});