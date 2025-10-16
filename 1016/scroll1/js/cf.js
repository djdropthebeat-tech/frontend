$(function(){
   
    let dLeft = $('#floatdiv').offset().left;
    $('nav ul li').click(function(){
        var i = $(this).index();
        var offset_t =  $('section>article').eq(i).offset().left;

        $('html, body').stop().animate({scrollLeft : offset_t},1300);
        $('nav ul li').removeClass('on');
        $('nav ul li').eq(i).addClass('on');
        return false;
    });

    $(window).scroll(function(){
        let sct = $(this).scrollLeft();
        $('#sTop').text(sct);
        $('#floatdiv').stop().animate({left:dLeft+sct},500)
        if(sct > 0){
            $('nav').addClass('on');
        } else {
            $('nav').removeClass('on')
        }

        for(let i = 0; i < $('section > article').length; i++){
            if(sct >= $('section > article').eq(i).offset().left){
                $('nav ul li').removeClass('on');
                $('nav ul li').eq(i).addClass('on');
                $('#floatdiv ul li').removeClass('on');
                $('#floatdiv ul li').eq(i).addClass('on');
            }
        }
    })

    $('#floatdiv ul li').click(function(){
        let index = $(this).index();
        let offset_t = $('section > article').eq(index).offset().left;
        $('html, body').stop().animate({scrollLeft:offset_t},1300)
        $('nav ul li').removeClass('on');
        $('nav ul li').eq(index).addClass('on');
        return false;
    })

    $('#popup').draggable();

    if($.cookie('pop')!= 'no'){
        //쿠키 pop 변수에 no란 값이 없다면 팝업을 보여준다
        $('#popup').show()
    }
    $('#popup area:eq(0)').click(function(){
        $('#popup').fadeOut('fast');
        //hide한 효과
    })
    $('#popup area:eq(1)').click(function(){
        $.cookie('pop','no',{expires:1});
        //쿠키 pop변수에 no라는 값을 넣고 하루동안 기한을 준다
        $('#popup').fadeOut('fast');
    })

    $('#notice_wrap').draggable();

    if($.cookie('popup') == 'none'){
        $('#notice_wrap').hide();
    }

    let chk = $('#expiresChk');
    $('.closeBtn').on('click',closePop);
    //함수가 행동을 할 시 적용

    function closePop(){
        if(chk.is(":checked")){
            //input창에 체크되어 있을시
            $.cookie('popup','none',{expires:3});
            //쿠키 popup에 none을 가지고 3일의 기한을 가진다
        }
        $('#notice_wrap').fadeOut("fast")
    }

});
