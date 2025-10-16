$(function(){

    // var f_top = 250;
    // var f_top = $('#float_div').offset().top;
    // var d_Left = $('#float_div').offset().left;
    var f_left =  $('section > article').eq(0).offset().left;
    // alert(f_top);
    


    $(window).scroll(function(){
        let sct = $(this).scrollLeft();
        $('#s_Top').text(sct);
        $('#float_div').stop().animate({left:f_left+sct},500)


        if(sct>=$('section> article').eq(0).offset().left){
            //클릭하면 nav 이름 색 바뀜
            $('nav ul li').removeClass('on');
            $('nav ul li').eq(0).addClass('on');
            //버튼 색 바뀜
            $('#float_div ul li').removeClass('on');
            $('#float_div ul li').eq(0).addClass('on');
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
    $('nav ul li').click(function(){
        var i = $(this).index();  //li의 인덱스 번호
        var offset_t = $('section> article').eq(i).offset().left;
        $('html,body').stop().animate({scrollLeft:offset_t},1000);
        // $('nav ul li').removeClass('on');
        // $('nav ul li').eq(i).addClass('on');
        
        return false;
    });


    // 버튼 클릭하면 해당페이지로 이동
     $('#float_div ul li').click(function(){
        var i = $(this).index();  //li의 인덱스 번호
        var offset_t = $('section> article').eq(i).offset().left;
        $('html,body').stop().animate({scrollLeft:offset_t},1000);
        
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

    $('#popup').draggable();
    // 드래그 가능

    // 나중에 pop=no를 넣어 하루동안 저장 예정
    // 처음에는 pop변수도 없고 no 도 없음
    if($.cookie('pop')!=='no'){
        $('#popup').show();
        //쿠키 pop변수에 no란 단어가 없다면 팝업을 보여준다.
    }
    $('#popup area:eq(0)').click(function(){
        $('#popup').fadeOut('fast');
        // 닫기 버튼을 클릭하면 팝업을 숨긴다.
    });
    $('#popup area:eq(1)').click(function(){
        
        $.cookie('pop','no',{expires:1});
        $('#popup').fadeOut('fast');
        // 닫기 버튼을 클릭하면 팝업을 숨긴다.
    });



    $('#notice_wrap').draggable();

    if($.cookie('popup')=='none'){
        $('#notice_wrap').hide();
    }
    //('popup')변수에 none이 저장돼있으면
    // $('#notice_wrap')을 숨겨라

    let chk = $('#expiresChk');
    $('.closeBtn').on('click',closePop);

    function closePop(){
        if(chk.is(':checked')){  //chk에 체크가 돼있으면
            $.cookie('popup','none', {expires:3});
            //쿠키에 popup에 none을 가지고 3일의 기한을 가진다
        }
        $('#notice_wrap').fadeOut();
    }
    // 방법 2: .prop('checked')가 true인지 확인

    // if (chk.prop('checked')) {
    // ...

});