



let curPos = 0;
function init() { 
  new WOW().init();
  jQuery('.item').hide()
  jQuery('.active').show()
 }
 
function prev(){
  if(curPos > 0){
    $('button').removeAttr('disabled')
    document.querySelectorAll('.item')[curPos].classList.toggle("active");
    document.querySelectorAll('.step')[curPos].classList.toggle("active-step");
    jQuery('.item').hide()
    curPos -= 1;
    document.querySelectorAll('.item')[curPos].classList.toggle("active");
    document.querySelectorAll('.step')[curPos].classList.toggle("active-step");
    jQuery('.active').fadeIn()
  }

  if(curPos == 0){
    console.log($('button')[0])
    $('button')[0].setAttribute('disabled', 'true')
  }
}
function next(){
  if(curPos < 10){
    $('button').removeAttr('disabled')
    document.querySelectorAll('.item')[curPos].classList.toggle("active");
    document.querySelectorAll('.step')[curPos].classList.toggle("active-step");
    jQuery('.item').hide()
    curPos += 1;
    document.querySelectorAll('.item')[curPos].classList.toggle("active");
    document.querySelectorAll('.step')[curPos].classList.toggle("active-step");
    jQuery('.active').fadeIn()
  }

  if(curPos == 10){
    $('button')[1].setAttribute('disabled', 'true')
  }
}





$(document).ready(function(){
  init()
});







$('#player_screen .top_img').on('click', function(e) { 
  e.preventDefault(); 
  var $item_top = $("#player_screen").find("video").attr("src"); 
  $('#player_screen .top_img').fadeOut("slow");
  $('#player_screen video').show().attr("src",$item_top); 
 });


 
$('#list .movs a').on('click', function(e) { 
  e.preventDefault(); 
  var $itemx = $(this).parents("dl.movs") 
  var $itemx_url = $itemx.find("dd.url video").attr("src"); 
  var $sc_top = $(document).scrollTop(); 
  var $player_top = $('#player').offset().top 



  $('#player_screen .top_img').hide(); 
  $('#player_screen video').attr("src",$itemx_url);  
  $('#player_screen video').show(); 
  if ( $player_top < $sc_top) { 
    $('html, body').animate({ scrollTop: $player_top }, "slow"); 
    }
  else { return false } 
 });





 function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
var items = document.querySelectorAll(".timeline li");
 

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}
 
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);

$(function() { 
  $(window).scroll(function() { if ($(this).scrollTop() > 250) { 
     $('#Top').fadeIn(); $('#Top').css('left', $('#sidebar').offset().left);  }
      else { $('#Top').fadeOut(); } 
    });

  $("#Top").click(function() { $('html, body').animate({ scrollTop : 0  }, 400); 
    return false; });
    });

     

