$(function(){

    $(".gnb>li>a").mouseenter(function(){
        $(".sub-menu").stop().slideUp();
        $(this).next("ul").stop().slideDown();

    });
    // $(".gnb>li>ul").mouseenter(function(){
    //      $(this).stop().slideDown();

    // });

    $(".gnb>li>a").mouseleave(function(){
        $(".sub-menu").stop().slideUp();
    });






});