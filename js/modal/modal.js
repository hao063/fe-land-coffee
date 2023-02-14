$(document).ready(function () {

    $('#modal-address input').keyup(function () {
        if ($(this).val().length > 0) {
            $('#modal-address img').addClass('active');
        } else {
            $('#modal-address img').removeClass('active');
        }
    });

    $('#modal-address img').click(function () {
        $('#modal-address input').val('');
        $(this).removeClass('active');
    });


    $('.header-address').click(function () {
        $('#modal-backdrop').attr('class', 'show');
        modalClick('#modal-address');
    });

    $('.btn-search-product').click(function () {
        $('#modal-backdrop').attr('class', 'show');
        modalClick('#modal-search-product');
    });

    $('.session-product-home .item').click(function () {
        $('#modal-backdrop').attr('class', 'show');
        modalClick('#modal-addproduct-to-cart');
    });

    $('header .btn-login-number-phone').click(function () {
        showBackdrop();
        modalClick('#modal-login');
    });

    $('.checkout-product .btn-click-change-date').click(function () {
        showBackdrop();
        modalClick('#modal-date-receive');
    });

    $('.checkout-product .btn-click-change-date').click(function () {
        showBackdrop();
        modalClick('#modal-date-receive');
    });

    $('header .btn-click-promotion').click(function () {
        showBackdrop();
        modalClick('#modal-promotion');
    });

    function showBackdrop() {
        $('#modal-backdrop').attr('class', 'show');
        $('html, body').addClass('fix-csroll');
    }

    function hideBackdrop() {
        $('#modal-backdrop').attr('class', 'hiden');
        $('html, body').attr('class', '');
    }


    modalFunc([
        '#modal-search-product',
        '#modal-address',
        '#modal-addproduct-to-cart',
        '#modal-login',
        '#modal-date-receive',
        '#modal-promotion'
    ]);


    function modalClick(id) {
        let modal = $(id);
        modal.addClass('show');
        modal.removeClass('hiden');
        modal.removeClass('fade');
    }

    function modalFunc(idArray) {
        $(document).mouseup(function (e) {
            let status = false;
            idArray.forEach(element => {
                if ($(e.target).closest(element).length != 0 && $('.modal').hasClass('show')) {
                    status = true;
                }
            });

            if (!status) {
                idArray.forEach(element => {
                    let statusModalActive = $(element);
                    if (statusModalActive.hasClass('show')) {
                        $('#modal-backdrop').attr('class', 'fade');
                        statusModalActive.removeClass('show');
                        statusModalActive.addClass('fade');
                        setTimeout(() => {
                            hideBackdrop();
                            statusModalActive.removeClass('fade');
                            statusModalActive.addClass('hiden');
                        }, 500);
                    }
                });
            }


        });
    }


    $('#modal-search-product .close').click(function () { 
        $('#modal-backdrop').attr('class', 'fade');
        $('#modal-search-product').removeClass('show');
        $('#modal-search-product').addClass('fade');
        setTimeout(() => {
            $('#modal-backdrop').attr('class', 'hiden');
            $('#modal-search-product').removeClass('fade');
            $('#modal-search-product').addClass('hiden');
        }, 500);
    })


    $('#modal-addproduct-to-cart .close').click(function () { 
        $('#modal-backdrop').attr('class', 'fade');
        $('#modal-addproduct-to-cart').removeClass('show');
        $('#modal-addproduct-to-cart').addClass('fade');
        setTimeout(() => {
            $('#modal-backdrop').attr('class', 'hiden');
            $('#modal-addproduct-to-cart').removeClass('fade');
            $('#modal-addproduct-to-cart').addClass('hiden');
        }, 500);
    })

    $('#modal-date-receive .close').click(function () { 
        $('#modal-backdrop').attr('class', 'fade');
        $('#modal-date-receive').removeClass('show');
        $('#modal-date-receive').addClass('fade');
        setTimeout(() => {
            $('#modal-backdrop').attr('class', 'hiden');
            $('#modal-date-receive').removeClass('fade');
            $('#modal-date-receive').addClass('hiden');
        }, 500);
    })

    $('#modal-promotion .close').click(function () { 
        $('#modal-backdrop').attr('class', 'fade');
        $('#modal-promotion').removeClass('show');
        $('#modal-promotion').addClass('fade');
        setTimeout(() => {
            $('#modal-backdrop').attr('class', 'hiden');
            $('#modal-promotion').removeClass('fade');
            $('#modal-promotion').addClass('hiden');
        }, 500);
    })

});
