$(document).ready(function(){

   // Mint button increment decrement
//    $('#buttonIncrement').click(function add() {
//     var $rooms = $("#piece");
//     var a = $rooms.val();
    
//     a++;
//         $("#buttonDecrement").prop("disabled", !a);
//         $rooms.val(a);
//     });
//     $("#buttonDecrement").prop("disabled", !$("#piece").val());

    // $('#buttonDecrement').click(function subst() {
    //     var $rooms = $("#piece");
    //     var b = $rooms.val();
    //     if (b >= 1) {
    //         b--;
    //         $rooms.val(b);
    //     }
    //     else {
    //         $("#buttonDecrement").prop("disabled", true);
    //     }
    // });
    // Mint button increment decrement

    // Stick menu when scrolling
    $(document).scroll(function() {
        
      });
    // Stick menu when scrolling


    
});

$(window).scroll(function() {
    var $height = $(window).scrollTop();
  if($height > 5) {
    $('.navbar').addClass('sticked');
    } else {
        $('.navbar').removeClass('sticked');
    }
});