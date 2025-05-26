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

    /* Slider News */
    var itemCurrentSlide = "01";
    var totalSlides = 1;
    var porcentagem = 0;

    $('.newsGallery').on('init reInit afterChange', function(event, slick){
        totalSlides = slick.slideCount;
        if(totalSlides < 10){
            totalSlides = "0" + totalSlides.toString();
        }
        $(".newsGalley__item--info-acoes .total").html(totalSlides);

        if(itemCurrentSlide == "01") {
            $(".newsGallery__buttons .prev svg path").css({fill: '#C2B9AE'});
            porcentagem = itemCurrentSlide / totalSlides * 100;
            $(".newsGalley__item--info-acoes .percent").css({width: porcentagem + '%'});
        }
    });
    
    $(".newsGalley__item--info-acoes .active").html(itemCurrentSlide.toString());

    $('.newsGallery').slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        nextArrow: '.next',
        prevArrow: '.prev'
    });
    $('.newsGallery').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        itemCurrentSlide = parseInt(nextSlide) + 1;
        (itemCurrentSlide < 10) ? itemCurrentSlide = "0" + itemCurrentSlide.toString() : itemCurrentSlide = itemCurrentSlide.toString();
        $(".newsGalley__item--info-acoes .active").html(itemCurrentSlide);
        
        $(".newsGallery__buttons svg path").css({fill: 'black'});
        if(itemCurrentSlide == totalSlides){
            $(".newsGallery__buttons .next svg path").css({fill: '#C2B9AE'});
        }
        if(itemCurrentSlide == 1){
            $(".newsGallery__buttons .prev svg path").css({fill: '#C2B9AE'});
        }
        
        porcentagem = itemCurrentSlide / totalSlides * 100;
        $(".newsGalley__item--info-acoes .percent").css({width: porcentagem + '%'});
    });
    
});

$('.beforeAfter').beforeAfter({

  movable: true,
  clickMove: true,
  alwaysShow: true,
  position: 50,

  opacity: 0.4,
  activeOpacity: 1,
  hoverOpacity: 0.8,

  separatorColor: '#ffffff',
  bulletColor: '#ffffff',
  arrowColor: '#333333',
  
});
