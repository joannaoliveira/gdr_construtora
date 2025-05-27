$( document ).ready(function() {

    $('.beforeAfter').beforeAfter();

    $(".headerMain__menu--action").click(function(){
        ($("#header").hasClass("mainNav")) ? $("#header").removeClass("mainNav") : $("#header").addClass("mainNav");

        $('.navGallery').slick({
            dots: false,
            arrows: true,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            nextArrow: '.headerMain__menu__buttons .next',
            prevArrow: '.headerMain__menu__buttons .prev'
        });
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

    $('.projectPictures__gallery').slick({
        dots: false,
        arrows: false,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '60px',
        responsive: [
            {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
            },
            {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
            }
            },
        ]
    });

    /* Slider Nav */
    var itemCurrentSlideNav = "01";
    var totalSlidesNav = 1;

    $('.navGallery').on('init reInit afterChange', function(event, slick){
        totalSlidesNav = slick.slideCount;
        slideActionsInit (totalSlidesNav, itemCurrentSlideNav, ".navGallery__item--info-acoes", ".headerMain__menu__buttons");
    });
    
    $(".navGallery__item--info-acoes .active").html(itemCurrentSlideNav.toString());
    $('.navGallery').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        itemCurrentSlideNav = parseInt(nextSlide) + 1;
        slideActionsBeforeChange(itemCurrentSlideNav, totalSlidesNav, ".navGallery__item--info-acoes", ".headerMain__menu__buttons", "white");
    });

    /* Slider News */
    var itemCurrentSlide = "01";
    var totalSlides = 1;

    $('.newsGallery').on('init reInit afterChange', function(event, slick){
        totalSlides = slick.slideCount;
        slideActionsInit (totalSlides, itemCurrentSlide, ".newsGallery__item--info-acoes", ".newsGallery__buttons");
    });
    
    $(".newsGallery__item--info-acoes .active").html(itemCurrentSlide.toString());

    $('.newsGallery').slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        nextArrow: '.newsGallery__buttons .next',
        prevArrow: '.newsGallery__buttons .prev'
    });
    $('.newsGallery').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        itemCurrentSlide = parseInt(nextSlide) + 1;
        slideActionsBeforeChange(itemCurrentSlide, totalSlides, ".newsGallery__item--info-acoes", ".newsGallery__buttons", "black");
    });

    /* Slider interna */
    var itemCurrentSlideInterna = "01";
    var totalSlidesInterna = 1;

    $('.projectGallery').on('init reInit afterChange', function(event, slick){
        totalSlidesInterna = slick.slideCount;
        slideActionsInit (totalSlidesInterna, itemCurrentSlideInterna, ".projectGallery__item--info-acoes", ".projectGallery__item--info-acoes .buttons");
    });
    
    $(".projectGallery__item--info-acoes .active").html(itemCurrentSlide.toString());

    $('.projectGallery').slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        nextArrow: '.projectGallery__item--info-acoes .buttons .next',
        prevArrow: '.projectGallery__item--info-acoes .buttons .prev'
    });

    $('.projectGallery').on('init reInit afterChange', function(event, slick){
        totalSlidesNav = slick.slideCount;
        slideActionsInit (totalSlidesInterna, itemCurrentSlideInterna, ".projectGallery__item--info-acoes", ".projectGallery__item--info-acoes .buttons");
    });
    
    $(".navGallery__item--info-acoes .active").html(itemCurrentSlideInterna.toString());
    $('.projectGallery').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        itemCurrentSlideInterna = parseInt(nextSlide) + 1;
        slideActionsBeforeChange(itemCurrentSlideInterna, totalSlidesInterna, ".projectGallery__item--info-acoes", ".projectGallery__item--info-acoes .buttons", "white");
    });
    
});

function slideActionsInit (totalSlides, itemCurrentSlide, idAcoes, idButtons){
    if(totalSlides < 10){
        totalSlides = "0" + totalSlides.toString();
    }
    $(idAcoes + " .total").html(totalSlides);

    if(itemCurrentSlide == "01") {
        $(idButtons + " .prev svg path").css({fill: '#C2B9AE'});
        porcentagem = itemCurrentSlide / totalSlides * 100;
        $(idAcoes + " .percent").css({width: porcentagem + '%'});
    }
}

function slideActionsBeforeChange(itemCurrentSlide, totalSlides, idAcoes, idButtons, mainColor){
    (itemCurrentSlide < 10) ? itemCurrentSlide = "0" + itemCurrentSlide.toString() : itemCurrentSlide = itemCurrentSlide.toString();
    $(idAcoes + " .active").html(itemCurrentSlide);
    
    $(idButtons + " svg path").css({fill: mainColor});
    if(itemCurrentSlide == totalSlides){
        $(idButtons + " .next svg path").css({fill: '#C2B9AE'});
    }
    if(itemCurrentSlide == 1){
        $(idButtons + " .prev svg path").css({fill: '#C2B9AE'});
    }
    
    porcentagem = itemCurrentSlide / totalSlides * 100;
    $(idAcoes + " .percent").css({width: porcentagem + '%'});
    
}

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
