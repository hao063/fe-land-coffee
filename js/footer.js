$(document).ready(function () {
    $('.item-title').click(function() {
        let dataFooter = $(this).attr('data-footer'); 
        let menuFooter = $(".category-footer [data-footer-child='"+ dataFooter + "']");
        let li = $(".category-footer [data-footer-child='"+ dataFooter + "'] li");
        if(menuFooter.hasClass('active')) { 
            li.addClass('hiden');
            li.removeClass('active');
            setTimeout(() => {
                menuFooter.addClass('hiden');
                menuFooter.removeClass('active');
            }, 700);
        }else {
            li.addClass('active');
            li.removeClass('hiden');
            menuFooter.addClass('active');
            menuFooter.removeClass('hiden');
        
        }
    });


});