$(function () {

  /* ===============================
     GNB 메뉴 슬라이드
  =============================== */
  $(".gnb > li").mouseenter(function () {
    $(this).find("ul").stop().slideDown();
  });

  $(".gnb > li").mouseleave(function () {
    $(this).find("ul").stop().slideUp();
  });


  /* ===============================
     이미지 슬라이드 (자동 롤링)
  =============================== */
  let i = 0;
  const slideCount = $(".slider ul li").length;

  setInterval(function () {
    i++;
    if (i >= slideCount) i = 0;

    // 현재 이미지와 이전 이미지 위치 조정
    $(".slider ul li").eq(i).css("top", "100%").animate({ "top": 0 }, 600);
    $(".slider ul li").eq(i - 1).css("top", 0).animate({ "top": "-100%" }, 600);
  }, 3000);


  /* ===============================
     탭 메뉴 (공지사항 / 갤러리)
  =============================== */
  const $tabs = $(".tab-menu ul li");
  const $c1 = $(".c1");
  const $c2 = $(".c2");

  // 초기 상태 설정
  $tabs.removeClass("active").first().addClass("active");
  $c1.addClass("active").show();
  $c2.removeClass("active").hide();

  $tabs.click(function () {
    const index = $(this).index();

    $tabs.removeClass("active");
    $(this).addClass("active");

    if (index === 0) {
      $c1.addClass("active").show();
      $c2.removeClass("active").hide();
    } else {
      $c2.addClass("active").show();
      $c1.removeClass("active").hide();
    }
  });

});
