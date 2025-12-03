$(function(){
    
    // var i = 0;
    // setInterval(function(){
    //     var next = (i+1)%3;
    //     $(".slide li").eq(next).css("left","100%").animate({left:"0"},600);
    //     $(".slide li").eq(1).css("left",0).animate({left:"-100%"},600);
    //  i = next;
    // },3000);



var i = 0;
    setInterval(function(){
        var next = (i+1)%3;
        $(".slide li").eq(next).stop().fadeOut();
        $(".slide li").eq(i).stop().fadeIn();
     i = next;
    },3000);


    $(".title1").click(function(){
        $(".noti").addClass("active");
        $(".gall").removeClass("active");
    });

    $(".title2").click(function(){
        $(".noti").removeClass("active");
        $(".gall").addClass("active");
        
 
    });





    $(".t1").click(function(){
        $(".pop").stop().fadeIn();
    });
    $("button").click(function(){
        $(".pop").stop().fadeOut();
    });
});