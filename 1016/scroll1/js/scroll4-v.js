$(function(){


    var d_left = $('#float_div').offset().left;
    // alert(f_top);
    
    $('nav ul li').click(function(){
            var i = $(this).index();  //li의 인덱스 번호
            var offset_t = $('section> article').eq(i).offset().left;

            $('html,body').stop().animate({scrollLeft:offset_t},1000);
            $('nav ul li').removeClass('on');
            $('nav ul li').eq(i).addClass('on');
            
            return false;
    });

    $(window).scroll(function(){
        let sct = $(this).scrollLeft();
        $('#s_Top').text(sct);
        $('#float_div').stop().animate({left:d_left+sct},500)       
        if(sct > 0){
            $('nav').addClass('on');
        } else {
            $('nav').removeClass('on')
        }

        if(sct>=$('section> article').eq(0).offset().left){
            //클릭하면 nav 이름 색 바뀜
            $('nav ul li').removeClass('on');
            $('nav ul li').eq(i).addClass('on');
            //버튼 색 바뀜
            $('#float_div ul li').removeClass('on');
            $('#float_div ul li').eq(i).addClass('on');
        }

        // 간단하게 for 문으로 작성하는 방법
        for(var i=0; i<$('section> article').length; i++){
            if(sct>=$('section> article').eq(i).offset().left){
                $('nav ul li').removeClass('on');
                $('nav ul li').eq(i).addClass('on');
                $('#float_div ul li').removeClass('on');
                $('#float_div ul li').eq(i).addClass('on');
            }
        }            
        
       // nav 사라졌다 300이상스크롤 내리면 색 바뀌며 고정
        if(sct >= 300){
            $('nav').addClass('fixed');
        }else{
            $('nav').removeClass('fixed');
        }

    });
    // nav 이름 클릭하면 해당페이지로 이동
  


    // 버튼 클릭하면 해당페이지로 이동
     $('#float_div ul li').click(function(){
        let i = $(this).index();  //li의 인덱스 번호
        let offset_t = $('section > article').eq(i).offset().left;
        $('html,body').stop().animate({scrollLeft:offset_t},1000);
        $('nav ul li').removeClass('on');
        $('nav ul li').eq(i).addClass('on');
        return false;
    });

    // 마우스 스크롤했을 때 섹션에 딱 맞춰 보이게함
    $('section> article').mousewheel(function(event,d){
        console.log(d);

        if(d>0){ //휠 위로 동작 감지(+1)
            let preVal = $(this).prev().offset().left;
            $('html,body').stop().animate({scrollLeft:preVal},1000);
            // $('html,body').stop().animate({scrollLeft:preVal},1000,'easeOutBounce');
        }
        if(d<0){ //휠 아래로 동작 감지(-1)
            let nextVal = $(this).next().offset().left;
            $('html,body').stop().animate({scrollLeft:nextVal},1000);
        }
        //크롬에서 jquery.easing.1.3.js 검색. easing 효과 모음 jQuery공작소

    });

 

});