$(function(){
    var menubutton=$('.menubutton');

    menubutton.click(function(){
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $('nav').fadeIn(200,'swing');
        }else{
            $('nav').fadeOut(200,'swing');
        }
    });
});