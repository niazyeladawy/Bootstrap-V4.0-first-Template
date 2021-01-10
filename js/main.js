$(function (){
    'use strict';
    // adjust slider height
    
    var winh = $(window).height(),
        upperh = $('.upper-bar').innerHeight(),
        navh = $('.navbar').innerHeight();
        
    $('.slider , .carousel-item').height(winh - ( upperh + navh ));

    // featured work shuffle
    $('.featured-work ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class')  == 'all' ){
            $('.shuffle-img .col-md').css('opacity','1');
        }
        else {
            $('.shuffle-img .col-md').css('opacity','.09');
            $($(this).data('class')).parent().css('opacity','1');
        }
    })
    
    //scroll top
    var scrollbutton = $("#scroll-top");

    $(window).on('scroll', function(){
        
        if($(this).scrollTop()>=1300){
            scrollbutton.show();
        }
        else{
            scrollbutton.hide();
        }

       
    })
     // click on button to scroll to up
     scrollbutton.click(function()
     {
         $("html,body").animate({scrollTop:0},600);
     })

});