$(function(){
	$(".gnb").mouseenter(function(){
		$(".menu>li>ul, .menu-bg").stop().slideDown();
	});
	$(".gnb").mouseleave(function(){
		$(".menu>li>ul, .menu-bg").stop().slideUp();
	});

	$(function(){
		let i = 0;
		setInterval(function(){
			let next = (i + 1) % $(".slide").length;

			$(".slide").eq(i).animate({left: "-100%"}, 800);
			$(".slide").eq(next).css({left: "100%"}).animate({left: "0"}, 800);

			i = next; 
		}, 3000);
	});

	
	$(".t1").click(function(){
		$(".pop").fadeIn();
	});
	$("button").click(function(){
		$(".pop").fadeOut();
	});



});