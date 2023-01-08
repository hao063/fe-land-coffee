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
        $('#model-backdrop').attr('class', 'show');
        modalClick('#modal-address');
    });

    $('.btn-search-product').click(function () {
        $('#model-backdrop').attr('class', 'show');
        modalClick('#model-search-product');
    });


    modalFunc(['#model-search-product', '#modal-address']);


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
                        $('#model-backdrop').attr('class', 'fade');
                        statusModalActive.removeClass('show');
                        statusModalActive.addClass('fade');
                        setTimeout(() => {
                            $('#model-backdrop').attr('class', 'hiden');
                            statusModalActive.removeClass('fade');
                            statusModalActive.addClass('hiden');
                        }, 500);
                    }
                });
            }


        });
    }


    $('#model-search-product .close').click(function () { 
        $('#model-backdrop').attr('class', 'fade');
        $('#model-search-product').removeClass('show');
        $('#model-search-product').addClass('fade');
        setTimeout(() => {
            $('#model-backdrop').attr('class', 'hiden');
            $('#model-search-product').removeClass('fade');
            $('#model-search-product').addClass('hiden');
        }, 500);
    })






});