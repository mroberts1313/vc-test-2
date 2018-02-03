window.slate = window.slate || {};
window.theme = window.theme || {};

/*================ Slate ================*/
// =require slate/a11y.js
// =require slate/cart.js
// =require slate/utils.js
// =require slate/rte.js
// =require slate/sections.js
// =require slate/currency.js
// =require slate/images.js
// =require slate/variants.js

/*================ Sections ================*/
// =require sections/product.js

/*================ Templates ================*/
// =require templates/customers-addresses.js
// =require templates/customers-login.js

$(document).ready(function() {
  var sections = new slate.Sections();
  sections.register('product', theme.Product);

  // Common a11y fixes
  slate.a11y.pageLinkFocus($(window.location.hash));

  $('.in-page-link').on('click', function(evt) {
    slate.a11y.pageLinkFocus($(evt.currentTarget.hash));
  });

  // Target tables to make them scrollable
  var tableSelectors = '.rte table';

  slate.rte.wrapTable({
    $tables: $(tableSelectors),
    tableWrapperClass: 'rte__table-wrapper',
  });

  // Target iframes to make them responsive
  var iframeSelectors =
    '.rte iframe[src*="youtube.com/embed"],' +
    '.rte iframe[src*="player.vimeo"]';

  slate.rte.wrapIframe({
    $iframes: $(iframeSelectors),
    iframeWrapperClass: 'rte__video-wrapper'
  });

  // Apply a specific class to the html element for browser support of cookies.
  if (slate.cart.cookiesEnabled()) {
    document.documentElement.className = document.documentElement.className.replace('supports-no-cookies', 'supports-cookies');
  }



if ($(window).width() > 750) {

    //put small logo in nav bar on scrolling
    var hn = $(".header-nav");
    var mns = "main-nav-scrolled";
    var ls = $(".site-logo-small");
    var lss = "fadeIn";
    var hdr = $('header').height();

    $(window).scroll(function() {
      if( $(this).scrollTop() > hdr ) {
    	hn.addClass(mns);
    	ls.addClass(lss);
      } else {
    	hn.removeClass(mns);
    	ls.removeClass(lss);
      }
    });
}

var headerHeight = $('.header-wrap').outerHeight();

if ($(window).width() < 750) {
    $('.header-wrap').addClass('fixedHeader');
    $('#MainContent').css('padding-top',headerHeight);
}

	//toggle header nav for small screens
	$(".site-nav--has-submenu").hover(
	  function() {
		if ($(window).width() > 750) {
			$(this).children("ul").slideToggle('fast');
		}
	  }, function() {
		if ($(window).width() > 750) {
			$(this).children("ul").slideToggle('fast');
		}
	  }
	);
	//update header layout based on screensize
	$(window).resize(function() {
        var headerHeight = $('.header-wrap').outerHeight();
		if ($(window).width() >= 750) {
			if ( $('.site-nav').css('display') == 'none') {
			  $('.site-nav').css('display', 'flex');
			  $('.site-nav__submenu').css('display', 'none');
              $('.header-wrap').removeClass('fixedHeader');
              $('#MainContent').css('padding-top','0');
			}
		} else {
		  $('.site-nav').css('display', 'none');
		  $('.site-nav__submenu').css('display', 'block');
		  $(".site-logo-small").css('display', 'none');
          $('.header-wrap').addClass('fixedHeader');
          $('#MainContent').css('padding-top',headerHeight);
	    }
	});


  $(".hamburger").click(function(e) {
    e.preventDefault();
    $('.site-nav').slideToggle();
  });


  $('.collection-carousel').owlCarousel({
		margin:20,
		items:3,
		loop: false,
		responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
    			loop: true
            },
            600:{
                items:3,
                nav:false,
    			loop: false
            }
        }
	});



});
