


$(document).ready(function() {
  $('.btn-linkad-1').click(function() {
    if($('.linkad-1').hasClass('modal-off')) {
      $('.linkad-1').addClass('modal-on');
      $('.linkad-1').removeClass('modal-off');
      $('.linkad-2, .linkad-3, .linkad-4, .linkad-5, .linkad-6').removeClass('modal-on');
      $('.linkad-2, .linkad-3, .linkad-4, .linkad-5, .linkad-6').addClass('modal-off');
    }
  });
});


$(document).ready(function() {
  $('.btn-linkad-2').click(function() {
    if($('.linkad-2').hasClass('modal-off')) {
      $('.linkad-2').addClass('modal-on');
      $('.linkad-2').removeClass('modal-off');
      $('.linkad-1, .linkad-3, .linkad-4, .linkad-5, .linkad-6').removeClass('modal-on');
      $('.linkad-1, .linkad-3, .linkad-4, .linkad-5, .linkad-6').addClass('modal-off');
    }
  });
});

$(document).ready(function() {
  $('.btn-linkad-3').click(function() {
    if($('.linkad-3').hasClass('modal-off')) {
      $('.linkad-3').addClass('modal-on');
      $('.linkad-3').removeClass('modal-off');
      $('.linkad-2, .linkad-1, .linkad-4, .linkad-5, .linkad-6').removeClass('modal-on');
      $('.linkad-2, .linkad-1, .linkad-4, .linkad-5, .linkad-6').addClass('modal-off');
    }
  });
});


$(document).ready(function() {
  $('.btn-linkad-4').click(function() {
    if($('.linkad-4').hasClass('modal-off')) {
      $('.linkad-4').addClass('modal-on');
      $('.linkad-4').removeClass('modal-off');
      $('.linkad-2, .linkad-3, .linkad-1, .linkad-5, .linkad-6').removeClass('modal-on');
      $('.linkad-2, .linkad-3, .linkad-1, .linkad-5, .linkad-6').addClass('modal-off');
    }
  });
});


$(document).ready(function() {
  $('.btn-linkad-5').click(function() {
    if($('.linkad-5').hasClass('modal-off')) {
      $('.linkad-5').addClass('modal-on');
      $('.linkad-5').removeClass('modal-off');
      $('.linkad-2, .linkad-3, .linkad-4, .linkad-1, .linkad-6').removeClass('modal-on');
      $('.linkad-2, .linkad-3, .linkad-4, .linkad-1, .linkad-6').addClass('modal-off');
    }
  });
});

$(document).ready(function() {
  $('.btn-linkad-6').click(function() {
    if($('.linkad-6').hasClass('modal-off')) {
      $('.linkad-6').addClass('modal-on');
      $('.linkad-6').removeClass('modal-off');
      $('.linkad-2, .linkad-3, .linkad-4, .linkad-5, .linkad-1').removeClass('modal-on');
      $('.linkad-2, .linkad-3, .linkad-4, .linkad-5, .linkad-1').addClass('modal-off');
    }
  });
});