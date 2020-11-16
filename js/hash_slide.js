$(document).ready(function(){
    var slideIndex = 0;
    var $btn = $('.hash_btn').on('click', function() {
        var idx = $btn.index(this);
        $(".banner-container").animate({marginLeft:-265 * idx});
        slideIndex = $btn.index(); 
      });

 });