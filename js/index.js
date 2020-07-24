$(function(){
    $("[data-toggle='tooltip']").tooltip();
    $('[data-toggle="popover"]').popover();
    $('.carousel').carousel({
    interval: 2000
      });
      $('#contacto').on('show.bs.modal', function (e) {
          console.log('El modal se esta mostrando');
          $('#btn-contact').removeClass('btn-primary');
          $('#btn-contact').addClass('btn-outline-success');
         
      });
      $('#contacto').on('shown.bs.modal', function (e) {
          console.log('El modal se esta mostrando');
      });
      $('#contacto').on('hide.bs.modal', function (e) {
          console.log('El modal se oculta');
      });
      $('#contacto').on('hidden.bs.modal', function (e) {
          console.log('El modal se oculto');
          $('#btn-contact').prop('disabled', ture);
      });
    });