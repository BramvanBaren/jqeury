$(document).ready(function(){
    //test
    // $('main').hide(3000).delay(1000).show(500);

    //mouse events

    // $('.plaatje').mouseenter(function(){
    //     $(this).fadeTo(600, .01);
    // }).mouseleave(function(){
    //     $(this).fadeTo(1000, 1);
    // }).click(function(){
    //     $(this).next().toggle(700);
    // });

    $( document.body ).click(function () {
        if ( $( ".plaatje" ).first().is( ":hidden" ) ) {
          $( ".plaatje" ).slideDown( "slow" );
        } else {
          $( ".plaatje" ).hide();
        }
      });



    // footer

    $('footer').click(function(){
        $(this).animate({
            top: '-=20px' ,
            opacity: '-=.2'
        }, 900)
    }).dblclick (function(){
        $(this).animate({
            top: '0',
            opacity: '1'
        },900);
    });
});