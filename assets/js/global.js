$( document ).ready(function() {

    $('.beforeAfter').beforeAfter();

    $(".headerMain__menu--action").click(function(){
        ($("#header").hasClass("mainNav")) ? $("#header").removeClass("mainNav") : $("#header").addClass("mainNav");
    });

    $("#frmContact").validate({
        rules: {
            iName: "required",
            iEmail: {
                required: true,
                email: true
            },
            iPhone: "required"
        },
        messages: {
            iName: "Campo obrigatório",
            iEmail: {
                required: "Campo obrigatório",
                email: "Digite um e-mail válido"
            },
            iPhone: "Campo obrigatório"
        }
    });
    
});

$('.beforeAfter').beforeAfter({

  // is draggable/swipeable
  movable: true,

  // click image to move the slider
  clickMove: true,

  // always show the slider
  alwaysShow: true,

  // intial position of the slider
  position: 50,

  // opacity between 0 and 1
  opacity: 0.4,
  activeOpacity: 1,
  hoverOpacity: 0.8,

  // slider colors
  separatorColor: '#ffffff',
  bulletColor: '#ffffff',
  arrowColor: '#333333',
  
});
