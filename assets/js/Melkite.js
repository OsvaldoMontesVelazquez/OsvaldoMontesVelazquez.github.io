/*!
=========================================================
* JohnDoe Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Preloader
$(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
});

function DeterminarMenu() 
{
    const anchoVentana = $(window).width();

    if (anchoVentana<=974) 
    {
         $("#navBottom").hide();     
        $("#navTop").show();    
    }
    else
    {
         $("#navTop").hide();     
         $("#navBottom").show(); 
    }    
}

$(window).resize(function() 
{     
     DeterminarMenu();
    /* 
    if (anchoVentana > 991)
    {
        $("#navTop").hide();     
        $("#navBottom").show();             
    }
    else
    {
        $("#navBottom").hide();     
        $("#navTop").show();        
    }*/
});

$(".nav-link").on("click", function(){
    if ($("#navbarSupportedContent").hasClass("show"))
    {
        $("#navbarSupportedContent").removeClass("show");
    }
});

// smooth scroll
$(document).ready(function(){

    DeterminarMenu();
    
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});


