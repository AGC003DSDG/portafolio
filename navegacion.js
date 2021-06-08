$(document).ready(function() {
  $('.rez-button').click(function() {
    if($('.rez-button').hasClass('boton-long')) {
      $('.rez-button').addClass('boton-short', 1000, 'easeOutBounce');
      $('.rez-button').removeClass('boton-long');
    }
  });
});


$(document).ready(function() {
  $('.rez-button').click(function() {
    if($('.descripcion').hasClass('des-on')) {
      $('.descripcion').addClass('des-off', 3000, 'easeOutBounce');
      $('.descripcion').removeClass('des-on');
    }
  });
});

$(document).ready(function() {
  $('.titulo').click(function() {
    if($('.descripcion').hasClass('des-off')) {
      $('.descripcion').addClass('des-on', 3000, 'easeOutBounce');
      $('.descripcion').removeClass('des-off');
      $('.Titulo, h1').removeClass('titulo-pointer');
      $('.cont-titulo').addClass('col-md-6');
    }
    if($('.cta-contacto').hasClass('port-on')) {
      $('.ccta-contacto').addClass('port-off');
      $('.cta-contacto').removeClass('port-on');
    }
  });
});


$(document).ready(function() {
  $('.btn-mod-1').click(function() {
    if($('.mod-1').hasClass('slide-down')) {
      $('.mod-1').addClass('slide-up',3000, 'easeOutBounce');
      $('.mod-1').removeClass('slide-down');
      $(' .Titulo, h1').addClass('titulo-pointer');
      $('.cont-titulo').removeClass('col-md-6');
      $('.mod-2, .mod-3, .mod-4').addClass('slide-down', 3000, 'easeOutBounce');
    }
    if($('.cta-contacto').hasClass('port-off')) {
      $('.ccta-contacto').addClass('port-on');
      $('.cta-contacto').removeClass('port-off');
    }
  });
});


$(document).ready(function() {
  $('.btn-mod-2').click(function() {
    if($('.mod-2').hasClass('slide-down')) {
      $('.mod-2').addClass('slide-up', 3000, 'easeOutBounce');
      $('.mod-2').removeClass('slide-down');
      $(' .Titulo, h1').addClass('titulo-pointer');
      $('.cont-titulo').removeClass('col-md-6');
      $('.mod-1, .mod-3, .mod-4').addClass('slide-down', 3000, 'easeOutBounce');

    }
    if($('.cta-contacto').hasClass('port-off')) {
      $('.ccta-contacto').addClass('port-on');
      $('.cta-contacto').removeClass('port-off');
    }
  });
});


$(document).ready(function() {
  $('.btn-mod-3').click(function() {
    if($('.mod-3').hasClass('slide-down')) {
      $('.mod-3').addClass('slide-up', 3000, 'easeOutBounce');
      $('.mod-3').removeClass('slide-down');
      $(' .Titulo, h1').addClass('titulo-pointer');
      $('.cont-titulo').removeClass('col-md-6');
      $('.mod-1, .mod-2, .mod-4').addClass('slide-down', 3000, 'easeOutBounce');
    }
    if($('.cta-contacto').hasClass('port-off')) {
      $('.ccta-contacto').addClass('port-on');
      $('.cta-contacto').removeClass('port-off');
    }
  });
});

$(document).ready(function() {
  $('.btn-mod-4').click(function() {
    if($('.mod-4').hasClass('slide-down')) {
      $('.mod-4').addClass('slide-up', 3000, 'easeOutBounce');
      $('.mod-4').removeClass('slide-down');
      $(' .Titulo, h1').addClass('titulo-pointer');
      $('.cont-titulo').removeClass('col-md-6');
      $('.mod-1, .mod-2, .mod-3').addClass('slide-down', 3000, 'easeOutBounce');
    }
    if($('.cta-contacto').hasClass('port-off')) {
      $('.ccta-contacto').addClass('port-on');
      $('.cta-contacto').removeClass('port-off');
    }
    if($('.portfolio-1').hasClass('port-off')) {
      $('.portfolio-1').addClass('port-on');
      $('.portfolio-1').removeClass('port-off');
      $('.portfolio-2, .portfolio-3, .portfolio-4, .portfolio-5').addClass('port-off');
    }
  });
});

// idioma


$(document).ready(function() {
  $('.btn-esp').click(function() {
    if($('.esp-lg').hasClass('lg-off')) {
      $('.esp-lg').addClass('lg-on');
      $('.esp-lg').removeClass('lg-off');
      $('.eng-lg').addClass('lg-off');
      $('.btn-esp').addClass('lg-active');
      $('.btn-eng').removeClass('lg-active');
    }
  });
});


$(document).ready(function() {
  $('.btn-eng').click(function() {
    if($('.eng-lg').hasClass('lg-off')) {
      $('.eng-lg').addClass('lg-on');
      $('.eng-lg').removeClass('lg-off');
      $('.esp-lg').addClass('lg-off');
      $('.btn-eng').addClass('lg-active');
      $('.btn-esp').removeClass('lg-active');
    }
  });
});

// portafolio

$(document).ready(function() {
  $('.btn-port-1').click(function() {
    if($('.portfolio-1').hasClass('port-off')) {
      $('.portfolio-1').addClass('port-on');
      $('.portfolio-1').removeClass('port-off');
      $('.portfolio-2, .portfolio-3, .portfolio-4, .portfolio-5').addClass('port-off');
    }
  });
});

$(document).ready(function() {
  $('.btn-port-2').click(function() {
    if($('.portfolio-2').hasClass('port-off')) {
      $('.portfolio-2').addClass('port-on');
      $('.portfolio-2').removeClass('port-off');
      $('.portfolio-1, .portfolio-3, .portfolio-4, .portfolio-5').addClass('port-off');
    }
  });
});

$(document).ready(function() {
  $('.btn-port-3').click(function() {
    if($('.portfolio-3').hasClass('port-off')) {
      $('.portfolio-3').addClass('port-on');
      $('.portfolio-3').removeClass('port-off');
      $('.portfolio-2, .portfolio-1, .portfolio-4, .portfolio-5').addClass('port-off');
    }
  });
});


$(document).ready(function() {
  $('.btn-port-4').click(function() {
    if($('.portfolio-4').hasClass('port-off')) {
      $('.portfolio-4').addClass('port-on');
      $('.portfolio-4').removeClass('port-off');
      $('.portfolio-2, .portfolio-1, .portfolio-3, .portfolio-5').addClass('port-off');
    }
  });
});

$(document).ready(function() {
  $('.btn-port-5').click(function() {
    if($('.portfolio-5').hasClass('port-off')) {
      $('.portfolio-5').addClass('port-on');
      $('.portfolio-5').removeClass('port-off');
      $('.portfolio-2, .portfolio-1.portfolio-3, .portfolio-4').addClass('port-off');
    }
  });
});

// slider
