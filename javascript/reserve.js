$(function () {			
    $('.rese_left').click(function(){
        $('.rese_center').animate({
            left: 900,
            opacity: 0,
        },1200,'easeInSine'),
        $('.rese_right').animate({
            left: 900,
            opacity: 0,
        },1200,'easeInSine'),
        $(this).css({
            width: 500,
            
        },1200,'easeInSine')
    })
});

