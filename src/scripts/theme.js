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
  
  
  /*$(".site-nav--has-submenu .icon").click(function(e) {
	  e.preventDefault();
	  $(this).parent().siblings("ul").slideToggle();
	});*/
	
	
	 $(".site-nav--has-submenu").hover(
	  function() {
		if ($(window).width() > 750) {
			$(this).children("ul").slideToggle();
		}
	  }, function() {
		if ($(window).width() > 750) {
			$(this).children("ul").slideToggle();
		}
	  }
	);
	$(window).resize(function() {
		if ($(window).width() > 750) {
			if ( $('.site-nav').css('display') == 'none') {
			  $('.site-nav').css('display', 'flex'); 
			  $('.site-nav__submenu').css('display', 'none');
			}
		} else {
		  $('.site-nav').css('display', 'none');
		  $('.site-nav__submenu').css('display', 'block');
	    }
	});
	

  $(".hamburger").click(function(e) {
    e.preventDefault();
    $('.site-nav').slideToggle();
  });
  
	
});
