
// $(function(){
//         $('.mobile_tab').click(function(){
//            var st = $(this).hasClass('active')  //true, false
//         // alert(st);
//             if(st === false){
//                 $('.mobile_nav').addClass('active');
//             }
//             else{
//                  $('.mobile_nav').removeClass('active');
//             }
//         });
//     });

$(function(){
    $('.mobile_tab').click(function(){
        $(this).toggleClass('active');
        $('.mobile_nav').toggleClass('active');
    });
});

$('.mobile_nav > ul > li').hover(
    function(){ $(this).find('.sub').stop().slideDown(300); },
    function(){ $(this).find('.sub').stop().slideUp(300); }
);
