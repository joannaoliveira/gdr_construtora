$( document ).ready(function() {

    $(".headerMain__menu--action").click(function(){
        ($("#header").hasClass("mainNav")) ? $("#header").removeClass("mainNav") : $("#header").addClass("mainNav");
    });
    
});