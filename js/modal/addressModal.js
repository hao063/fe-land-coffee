$(document).ready(function () {
    $('#modal-address input').keyup(function() {
        if($(this).val().length > 0) {
            $('#modal-address img').addClass('active');  
        } else {
            $('#modal-address img').removeClass('active');  
        }
    });


    $('#modal-address img').click(function() {
        $('#modal-address input').val('');  
        $(this).removeClass('active');  
    });

    $('.header-address').click(function() {
        $('#model-backdrop').attr('class', 'show');
        $('#modal-address').addClass('show');
        $('#modal-address').removeClass('hiden');
        $('#modal-address').removeClass('fade');
    });


    $(document).mouseup(function (e) {
        if ($(e.target).closest("#modal-address").length === 0 && $('.modal').hasClass('show')) {
            $('#model-backdrop').attr('class', 'fade');
            $('#modal-address').removeClass('show');
            $('#modal-address').addClass('fade');
            setTimeout(() => {
                $('#model-backdrop').attr('class', 'hiden');
                $('#modal-address').removeClass('fade');
                $('#modal-address').addClass('hiden');
            }, 1000);
        }
    });
});