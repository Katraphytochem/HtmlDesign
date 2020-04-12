$('.front_slider').owlCarousel({
    loop:true,
    margin:0,
	dots:true,
    nav:false,
	autoplay:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.vision_slider').owlCarousel({
    loop:true,
    margin:0,
    dots:true,
    nav:false,
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.brand_slider').owlCarousel({
    loop:true,
    margin:30,
    dots:false,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


$('.nutrac_slider').owlCarousel({
    loop:true,
    margin:30,
    dots:false,
    nav:true,
    autoplay:false,
    responsive:{
        0:{
            items:1,
            margin:30,
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})


$( ".nav-icon" ).click(function() {
  $( ".side-menu" ).addClass( "left");
   $( ".overlay" ).addClass( "show");
});


$( ".close-menu" ).click(function() {
  $( ".side-menu" ).removeClass( "left");
   $( ".overlay" ).removeClass( "show");
});



$( ".side-slider" ).click(function() {
  $( ".side-dropdown" ).slideToggle( "slow");
  $(this).toggleClass("active");
});



$(window).scroll(function () {
  if ( $(this).scrollTop() > 0 && !$('header').hasClass('sticky') ) {
    $('header').addClass('sticky');

   } else if ( $(this).scrollTop() <= 0 ) {
    $('header').removeClass('sticky');

  }
});



  $(document).ready(function() {
        //Horizontal Tab
        $('#parentHorizontalTab').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            tabidentify: 'hor_1', // The tab groups identifier
            activate: function(event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        });
   //Vertical Tab
        $('#parentVerticalTab').easyResponsiveTabs({
            type: 'vertical', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            closed: 'accordion', // Start closed if in accordion view
            tabidentify: 'hor_1', // The tab groups identifier
            activate: function(event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo2');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        });
        });