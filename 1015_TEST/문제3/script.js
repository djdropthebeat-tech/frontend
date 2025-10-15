$(function(){
    $('dd').hide();
    
    $('dl dt').click(function(){
        
        if($(this).next('dd').css('display') === 'none'){
            $('dd').slideUp('slow');
            $(this).next().slideDown('slow');

            $('dl dt').removeClass('on');
            $(this).addClass('on');
        }
    });

    $('dl dt').mouseover(function(){
        $(this).addClass('over');
    });
    $('dl dt').mouseout(function(){
        $(this).removeClass('over');
    });

});