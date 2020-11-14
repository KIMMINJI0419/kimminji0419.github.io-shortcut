AOS.init();

var prevScrollpos = window.pageYOffset;
var header = window.document.getElementById("menu");

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        header.style.top = "0";
    } 
    else {
        header.style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
}

$(document).ready(function(){
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
    
        if (scroll >= 100) {
            $("#menu").addClass("color_c");
        }
    });
});



var mySwiper = new Swiper('.first', {
    // Optional parameters
    direction: 'vertical',
    loop: false,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

var mySwiper1 = new Swiper('.second', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
  
    // Navigation arrows
    navigation: {
      nextEl: '.se_btn_n',
      prevEl: '.se_btn_p',
    },
  })  

  $(window).scroll(function() {
  
    var $window = $(window),
        $panel = $('.actor_e');
    
    
    var scroll = $window.scrollTop() + ($window.height() / 3);
   
    $panel.each(function () {
      var $this = $(this);
      
      
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        $panel.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
        
        $panel.addClass('color-' + $(this).data('color'));
      }
    });    
    
  })