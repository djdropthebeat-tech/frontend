$(function(){
    $('.m_menu li ul').css('display','none');
    // $('.sub').css('display','none');
    // $('.sub').hide();
    
    // $('.sub').eq(0).show();
    //sub중 첫번째 것만 보여라

    //$('.m_menu li:nth-child(1) ul').css('display','block');
    //$('.m_menu li:nth-child(1) ul').show();
    //$('.m_menu li:eq(0) ul').show();
    //$('.m_menu li:first ul').show();

    $('.m_menu>li>a').click(function(e){
        e.preventDefault(); //a 링크 금지

        // .m_menu안의 li 자식중에 a태그를 클릭하면
        var  status = $(this).next('.sub').css('display');
            // .css('display') : css display의 속성이 none인지,block인지 판별하라.
            // .css('display','none/block') 이렇게 쓰면 속성값을 지정하는 것임.
        // 클릭한 a 태그 안에 있는 요소 중 클래스가 sub인 요소의 display 속성값을 가져와서
        // status에 저장. 이 때 none: 현재 sub가 닫혀있는 상태 / block: 현재 서브가 열린상태
        
        // alert(status);
        if(status ==='none'){
            $('.sub').slideUp();
            $(this).next('.sub').slideDown();
        }
        else{
            $('.sub').slideUp();
        }
        // return false;
        // a 링크 금지(스크롤이 자동으로 올라가는 걸 방지)
    });
});