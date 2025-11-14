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

	
	$(function() {
  // 처음엔 팝업 숨기기
  $(".pop").hide();

  // .c1 안의 .txt 클릭 시 팝업 열기
  $(".popup").click(function() {
    $(".pop").fadeIn();
  });

  // 닫기 버튼 클릭 시 팝업 닫기
  $("button").click(function() {
    $(".pop").fadeOut();
  });
});




});