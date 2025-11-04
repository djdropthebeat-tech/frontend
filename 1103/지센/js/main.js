
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

// $(function(){
//     $('.mobile_tab').click(function(){
//         $(this).toggleClass('active');
//         $('.mobile_nav').toggleClass('active');
//         $('.moblie_tab_bc').toggleClass('active');
//     });
// });

// $('.mobile_nav > ul > li').hover(
//     function(){ $(this).find('.sub').stop().slideDown(300); },
//     function(){ $(this).find('.sub').stop().slideUp(300); }
// );


$(function () {

    $(window).resize(function(){
        var w = $(this).width();
        console.log(w);

        if(w<=850){

        }else{
            if($('.mobile_nav').hasClass('active')){
                $(".mobile_nav").removeClass("active");
                $(".transparency").removeClass("active");
                $(".container").removeClass("active");
                $(".mobile_nav .sub").css("display","none"); 
            }
        }
    });

    $(window).trigger('resize');
    // 컴퓨터가 브라우저를 켜자마자 한 번 resize 명령을 실행

    $(".nav ul").hover(function(){
        $(this).addClass("over");
    },function(){
        $(this).removeClass("over");
    });





    $(".mobile_tab").click(function () {
        $(".mobile_nav").addClass("active");
        $(".transparency").addClass("active");
        $(".container").addClass("active");
    });

    $(".transparency").click(function (){
        $(".mobile_nav").removeClass("active");
        $(".transparency").removeClass("active");
        $(".container").removeClass("active");
        $(".mobile_nav .sub").css("display","none");
    });

    $(".mobile_nav > ul > li > a").click(function(){
        var k =$(this).next(".sub").css("display");
        // alert(k);
        if(k == 'none'){
            $(".mobile_nav .sub").slideUp(300);
            $(this).next(".sub").slideDown(300);
        }else{
            $(this).next(".sub").slideUp(300);
        }
        
        return false;
    });

});

