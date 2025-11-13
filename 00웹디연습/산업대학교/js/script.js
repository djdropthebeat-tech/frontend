$(function(){
	$(".gnb").mouseenter(function(){
		$(".menu>li>ul, .menu-bg").stop().slideDown();
	});
	$(".gnb").mouseleave(function(){
		$(".menu>li>ul, .menu-bg").stop().slideUp();
	});

	var i = 0;
	
	setInterval(function(){
		i++;
		if(i==3){
			i=0;
		}
		$(".slide").eq(i).css("left","100%").stop().animate({
			"left":"0"
		});
		$(".slide").eq(i-1).css("left","0%").stop().animate({
			"left":"-100%"
		});
		
	},3000);
	
	$(".t1").click(function(){
		$(".pop").fadeIn();
	});
	$("button").click(function(){
		$(".pop").fadeOut();
	});



});