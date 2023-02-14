$(document).ready(function () {
    $('#modal-confirm .group-form input').on( 'input', function() {
        this.value = this.value.replace(/[^0-9]/g,'').substring(0,1);
    });

    $('#modal-confirm .group-form input').on('keyup', function() {
        if ($(this).val().length === 1) {
          $(this).next('#modal-confirm .group-form input').focus(); 
        }
    });

    $('#modal-confirm .group-form input').on('keydown', function(e) {
        if (e.which === 8 && $(this).val().length === 0) {
          $(this).prev('#modal-confirm .group-form input').focus();
        }
      });
  
});