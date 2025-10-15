$(function(){

    var slide = $('.slide_img li');
    var btn = $('.pager_list>li');  
    var current = 0; 
    var id;
    var i;


    btn.click(function(){
        i = $(this).index();
        btn.removeClass('on');
        btn.eq(i).addClass('on');
        move();

        return false;        
    });

    function timer(){
        id = setInterval(function(){
            var n = current + 1;
            if(n>=slide.length){n=0;}
            
            btn.eq(n).trigger('click');
        },3000);
    }
timer();

    function move(){
        if(current == i) return;

        var cu = slide.eq(current);
        var ne = slide.eq(i);

        cu.css('left','0').stop().animate({'left':'-100%'},500)
        ne.css('left','100%').stop().animate({'left':'0%'},500)
        
        current=-i;
    }
});

