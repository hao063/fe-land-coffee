$(document).ready(function () {
    $('header .login img').click(function() {
        let tab = $('.tab-action-account');
        console.log('22');
        
        if(!tab.hasClass('active')) {
            tab.addClass('active');
        }
    });

    $('header .login .close').click(function () { 
        console.log('ko');
        $('.tab-action-account').removeClass('active');
    });

});