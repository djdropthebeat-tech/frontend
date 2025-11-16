$(function(){
    $('.main1').mouseenter(function(){
        $('.sub1').stop().slideDown();
    });
    $('.gnb').mouseleave(function(){
        $('.sub1').stop().slideUp();
    });
});
$(function(){
    $('.main2').mouseenter(function(){
        $('.sub2').stop().slideDown();
    });
    $('.gnb').mouseleave(function(){
        $('.sub2').stop().slideUp();
    });
});


$(function(){
  var visual = $('.slide');
  var current = 0;
  var total = visual.length;

  function move(i){
    if(current == i) return;

    var cu = visual.eq(current);
    var ne = visual.eq(i);

    cu.css('left','0').stop().animate({'left':'-100%'},900);
    ne.css('left','100%').stop().animate({'left':'0%'},900);

    current = i;
  }

  // 자동 슬라이드
  setInterval(function(){
    var next = (current + 1) % total; // 다음 슬라이드 인덱스
    move(next);
  }, 5000); // 3초마다 슬라이드
});