$(function(){

//     $(".menu-title").click(function(){
//         $("nav>ul").stop().slideUp()
//         $(this).next("ul").stop().slideDown()
//     });
//    $(".menu-title").click(function(){
//         $(this).next("ul").stop().slideDown()
//     });

$(".menu-title").click(function(){
    const ul = $(this).next("ul");
    $("nav>ul").not(ul).stop().slideUp();
    ul.stop().slideToggle();
});
    

    
    var i = 0;

    setInterval(function(){
        var next = (i + 1) % 3;   

        $(".slide").eq(next).css("left", "100%").animate({left:0}, 600);
        $(".slide").eq(i).css("left", 0).animate({left:"-100%"}, 600);
        i = next;
    },3000);


    $(".title1").click(function(){
        $(".c1").addClass("active");
        $(".c2").removeClass("active");
    });

    $(".title2").click(function(){
        $(".c2").addClass("active");
        $(".c1").removeClass("active");
    });



    $(".t1").click(function(){
        $(".pop").stop().fadeIn();
    });
    $("button").click(function(){
        $(".pop").stop().fadeOut();
    });



});