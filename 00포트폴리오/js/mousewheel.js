let index = 0;
let isScrolling = false;

$(window).on("mousewheel", function(e){
  if(isScrolling) return;

  const sections = $("section");
  const delta = e.originalEvent.deltaY;

  if(delta > 0 && index < sections.length - 1){
    index++;
  } else if(delta < 0 && index > 0){
    index--;
  } else {
    return;
  }

  isScrolling = true;

  $("html, body").stop().animate(
    {
      scrollTop: sections.eq(index).offset().top
    },
    700,
    function(){
      isScrolling = false;
    }
  );
});
