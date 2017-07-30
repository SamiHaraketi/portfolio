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





