$(document).ready(function() {

  $(".btn_main").on('click', function (){
    $('.overlay_order, .modal_order').fadeIn('slow');
    });

  $('.modal_close').on('click', function() {
    $('.overlay_order, .overlay_mini, .modal_order, .modal_mini').fadeOut('slow');
  }); 
    
  $(".btn_main").on('click', function (){
    $('.overlay_order, .modal_order').fadeIn('slow');
    });

   $('#submitBtn').submit(function(e) {
         e.preventDefault();
     $('.overlay_mini, .modal_mini').fadeIn('slow');
         });
});