$(function(){

    $(".sub-title").mouseenter(function(){
        $(".sub-menu").stop().slideUp();
        $(this).next(".sub-menu").stop().slideDown();
    });
    $(".gnb").mouseleave(function(){
        $(".sub-menu").stop().slideUp();
    });



    var i = 0;
	
	setInterval(function(){
		i++;
		if(i==3){
			i=0;
		}
		$(".slide").eq(i).stop().fadeIn();
		$(".slide").eq(i-1).stop().fadeOut();
		
		
	},3000);




    $(".t1").click(function(){
        $(".pop").stop().fadeIn();
    });
    $("button").click(function(){
        $(".pop").stop().fadeOut();
    });

});
