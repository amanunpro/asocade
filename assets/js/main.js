//===================================================================
//Theme Name:  Asocade Portfolio HTML Template.
//Author:Aman Nur.
//Description: Creative portfolio one page  HTML5 template.
//Version: 1.0
//=================================================================








// ========================================
// ALL ACTIVE JS INDEX
// ==========================================





(function($) {

    'use strict';

    // Window load function
    $(window).on('load', function() {
    preloader();

    });

    // DOM ready function
$(document).ready(function(){
    Animatetext();
    activeOverlay();
    hoverOverlay();
    waypoint();
    scrollUp();
    isotopeInit();
    magnificPopupInit();
    circleProgressbar();
    testimonialCarousel();
    smoothScroolInit();
    LogoCarousel();
    caseCarousel();
    counterInit();
    wowanimate();
    teambtn();
    isotopeInit();  
// ..........


    });


                
})(jQuery);









// -------------------------------------------------
// -------------   PRELOADER  -------------------
// -------------------------------------------------
function preloader() {
    'use strict';
    setTimeout(function() {
        $('.preloader').addClass('loaded');
        $('.preloader').fadeOut('slow');
    }, 300);
}
// -------------------------------------------------
// ------------- ISOTOPE PROJECT GALLERY  ----------
// -------------------------------------------------
function isotopeInit() {
    $('.project_items').isotope({
        itemSelector: '.item',
        masonry: {
            columnWidth: '.item'
        }
    });
    $('.project_filter_menu ul li').on('click', function() {
        $('.project_filter_menu ul li').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $('.project_items').isotope({
            filter: selector
        });
        return false;
    });
}
// -------------------------------------------------
// ------------- TPYED ANIMATE TEXT  ----------
// -------------------------------------------------
function Animatetext() {
    'use strict';
   new Typed('#ityped', {
        strings: ["Jhon Nur", "Web Desginer" , "Graphic Designer"],
        backSpeed: 40,
        typeSpeed: 40,
        loop: true
    });

}
// -------------------------------------------------
// -------------  HOVER/ACTIVE LINK   --------------
// -------------------------------------------------
function activeOverlay() {
    'use strict';
    $('.nav-menu a').on('click', function() {
        $('.nav-menu a').removeClass("active");
        $(this).addClass("active");
    });
}

function hoverOverlay() {
    'use strict';
    $('.single-service-item').hover(function() {
        $('.single-service-item').removeClass("single-service-item-active");
        $(this).addClass("single-service-item-active");
    });
}
// -------------------------------------------------
// ------------- SCROLLTOTOP BUTTON JS  ------------
// -------------------------------------------------
function scrollUp() {
    'use strict';
    $.scrollUp({
        scrollName: 'scrollUp',
        topDistance: '300',
        topSpeed: 300,
        animation: 'fade',
        animationInSpeed: 200,
        animationOutSpeed: 200,
        scrollText: '<i class="fas fa-level-up-alt"></i>',
        activeOverlay: false
    });
}
// -------------------------------------------------
// -------------  STICKY TOP  ---------------------
// -------------------------------------------------
function waypoint() {
    'use strict';
    $(".sticky-js").waypoint(function(direction) {
        if(direction == "down") {
            $("nav").addClass("fixed-top");
        } else {
            $("nav").removeClass("fixed-top");
        }
    });
}
// ----------------------------------------------------------
// -------------  magnific Popup Init  ----------------------
// ----------------------------------------------------------
function magnificPopupInit() {
    'use strict';
    $('.popup-item a').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true,
        }
    });
}
// ------------------------------------------------------------------
// ------------- testimonial OWL CAROUSEL SLIDER  -------------------
// -----------------------------------------------------------------
function testimonialCarousel() {
    'use strict';
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        rtl: true,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1024: {
                items: 1
            },
            1366: {
                items: 1
            }
        }
    });
}
// -------------------------------------------------
// ------------- Counter Initialize  -------------------
// -------------------------------------------------
function counterInit() {
    'use strict';
    $('.counter_wrapper .count').counterUp({
        elay: 10,
        time: 1500,
    });
}
// -------------------------------------------------
// ------------- circle PROGRESSBAR  -------------
// -------------------------------------------------
function circleProgressbar() {
    'use strict';
    $("#web-design-skill-bar").circleProgress({
        value: 0.95,
        size: 170,
        thickness: 4,
        easing: "circleProgressEasing",
        fill: '#1abc9c',
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.skill-count-number').html(Math.round(95 * progress) + '<i>%</i>');
    });
    $("#graphic-design-skill-bar").circleProgress({
        value: 0.84,
        size: 170,
        thickness: 4,
        easing: "circleProgressEasing",
        fill: "#9b59b6",
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.skill-count-number').html(Math.round(84 * progress) + '<i>%</i>');
    });
    $("#digital-skill-bar").circleProgress({
        value: 0.90,
        size: 170,
        thickness: 4,
        easing: "circleProgressEasing",
        fill: '#1abc9c',
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.skill-count-number').html(Math.round(90 * progress) + '<i>%</i>');
    });
    $("#Video-Editing-skill-bar").circleProgress({
        value: 0.70,
        size: 170,
        thickness: 4,
        easing: "circleProgressEasing",
        fill: "#9b59b6",
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.skill-count-number').html(Math.round(70 * progress) + '<i>%</i>');
    });
}
// -------------------------------------------------
// ------------- logo CAROUSEL  ----------------
// -------------------------------------------------
function LogoCarousel() {
    'use strict';
    $(".logo-carosuel").owlCarousel({
        items: 6,
        loop: true,
        dots: false,
        autoplay: true,
        slideTransition: 'linear',
        autoplaySpeed: 2000,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        nav: false,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 4
            },
            1024: {
                items: 6
            },
            1366: {
                items: 6
            }
        }
    });
}
// -------------------------------------------------------- --------
// ------------- ALL HREF & HASH lINK SCROLL JS  -------------------
// -----------------------------------------------------------------
function smoothScroolInit() {
    'use strict';
    $('a').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if(target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 1200);
        }
    });
}

// -------------------------------------------------
// -------------   WOW ANIMATION JS   -------------------
// -------------------------------------------------

function wowanimate() {
    'use strict';
    new WOW().init();
}

// -------------------------------------------------
// -------------  case studies Carousel JS   -------------------
// -------------------------------------------------

function caseCarousel() {
    'use strict';
    $(".case-studies-carousel").owlCarousel({
        items: 3,
        margin: 30,
        loop: true,
        dots: true,
        nav: true,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1024: {
                items: 3
            },
            1366: {
                items: 3
            }
        }
    });
}

// -------------------------------------------------
// -------------  Team Btn JS   -------------------
// -------------------------------------------------

function teambtn() {
    'use strict';
    $('.single-team-item > .mc-btn-action').click(function() {
        var card = $(this).parent('.single-team-item');
        var icon = $(this).children('.spin');
        icon.addClass('fa-times');
        if(card.hasClass('mc-active')) {
            card.removeClass('mc-active');
            window.setTimeout(function() {
                icon.removeClass('fa-times').addClass('fa-bars');
            }, 500);
        } else {
            card.addClass('mc-active');
            window.setTimeout(function() {
                icon.removeClass('fa-bars').addClass('fa-times');
            }, 500);
        }
    });
}