$(document).ready(function (){
    $('.header-tw__main-toggler').on('click', function(){
        $(this).parent().toggleClass('open');
    });

    $('.header-tw__main-menu ul li .ar').on('click', function(){
        $(this).parent().toggleClass('op');
    });


});
