
$(document).ready(function() {
  $('.modal-btn-1').click(function() {
    if($('.cont-1').hasClass('modal-off')) {
      $('.cont-1').addClass('modal-on');
      $('.cont-1').removeClass('modal-off');
      $('.cont-2, .cont-3, .cont-4').removeClass('modal-on');
      $('.cont-2, .cont-3, .cont-4').addClass('modal-off');
    }
  });
});



$(document).ready(function() {
  $('.modal-btn-2').click(function() {
    if($('.cont-2').hasClass('modal-off')) {
      $('.cont-2').addClass('modal-on');
      $('.cont-2').removeClass('modal-off');
      $('.cont-1, .cont-3, .cont-4').removeClass('modal-on');
      $('.cont-1, .cont-3, .cont-4').addClass('modal-off');
    }
  });
});



$(document).ready(function() {
  $('.modal-btn-3').click(function() {
    if($('.cont-3').hasClass('modal-off')) {
      $('.cont-3').addClass('modal-on');
      $('.cont-3').removeClass('modal-off');
      $('.cont-2, .cont-1, .cont-4').removeClass('modal-on');
      $('.cont-2, .cont-1, .cont-4').addClass('modal-off');
    }
  });
});



$(document).ready(function() {
  $('.modal-btn-4').click(function() {
    if($('.cont-4').hasClass('modal-off')) {
      $('.cont-4').addClass('modal-on');
      $('.cont-4').removeClass('modal-off');
      $('.cont-2, .cont-3, .cont-1').removeClass('modal-on');
      $('.cont-2, .cont-3, .cont-1').addClass('modal-off');
    }
  });
});


