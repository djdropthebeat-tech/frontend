$(function(){
    $(".t1").click(function(){
        $(".pop").stop().fadeIn();
    });
    $("button").click(function(){
        $(".pop").stop().fadeOut();
    });


   var i = 0;

    setInterval(function(){
        var next = (i + 1) % 3;   

        $(".slide").eq(next).css("left","100%").animate({left:0},600);
        $(".slide").eq(i).css("left",0).animate({left:"-100%"},600);

        i = next;
    }, 3000);


});

