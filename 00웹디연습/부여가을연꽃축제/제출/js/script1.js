$(function(){

    $(".sub-title").mouseenter(function(){
        $(".sub-menu").stop().slideUp();
        $(this).next(".sub-menu").stop().slideDown();
    });
    $(".gnb").mouseleave(function(){
        $(".sub-menu").stop().slideUp();
    });



});