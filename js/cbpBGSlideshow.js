/**
 * cbpBGSlideshow.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpBGSlideshow = (function() {

	var $slideshow = $( '#cast_main_slideshow' ),
        $cast_detail =$('#cast_detail'),
		$items = $slideshow.children( 'li' ),
        $items_text = $cast_detail.children('li'),
		itemsCount = $items.length,
//        textCount = $items_text.length,
		$controls = $( '#cast_main_controls' ),
		navigation = {
			$navPrev : $controls.find( 'span.prev' ),
			$navNext : $controls.find( 'span.next' ),
			$navPlayPause : $controls.find( 'span.pause' )
		},
		// current item´s index
		current = 0,
		// timeout
		slideshowtime,
		// true if the slideshow is active
		isSlideshowActive = true,
		// it takes 3.5 seconds to change the background image
		interval = 3500;

	function init( config ) {

		// preload the images
		$slideshow.imagesLoaded( function() {
			
			if( Modernizr.backgroundsize ) {
				$items.each( function() {
					var $item = $( this );
					$item.css( 'background-image', 'url(' + $item.find( 'img' ).attr( 'src' ) + ')' );
				} );
			}
			else {
				$slideshow.find( 'img' ).show();
				// for older browsers add fallback here (image size and centering)
			}
			// show first item
			$items.eq( current ).css( 'opacity', 1 );
            $items_text.eq(current).css('opacity', 1);
            $items_text.eq(current).css('margin-left', 250);
			// initialize/bind the events
			initEvents();
			// start the slideshow
//			startSlideshow();

		} );
		
	}

	function initEvents() {

		navigation.$navPlayPause.on( 'click', function() {

			var $control = $( this );
			if( $control.hasClass( 'play' ) ) {
				$control.removeClass( 'play' ).addClass( 'pause' );
//				startSlideshow();
			}
			else {
				$control.removeClass( 'pause' ).addClass( 'play' );
//				stopSlideshow();
			}

		} );

		navigation.$navPrev.on( 'click', function() { 
			navigate( 'prev' ); 
//			if( isSlideshowActive ) { 
//				startSlideshow(); 
//			} 
		} );
		navigation.$navNext.on( 'click', function() { 
			navigate( 'next' ); 
//			if( isSlideshowActive ) { 
//				startSlideshow(); 
//			}
		} );

	}

	function navigate( direction ) {

		// current item
		var $oldItem = $items.eq( current );
		var $oldText = $items_text.eq( current );
		if( direction === 'next' ) {
			current = current < itemsCount - 1 ? ++current : 0;
		}
		else if( direction === 'prev' ) {
			current = current > 0 ? --current : itemsCount - 1;
		}

		// new item
        console.log(current);
		var $newItem = $items.eq( current );
        var $newText = $items_text.eq( current );
		// show / hide items
		$oldItem.css('opacity', 0);
		$newItem.css('opacity', 1);
        $oldText.css('opacity', 0);
        $oldText.css('display', 'none');
        $newText.css('opacity', 1);
        $newText.css('display', 'list-item');
        if(current == 5){
            $newText.css('margin-right', 350);
        }else{
            $newText.css('margin-left', 250);
        }
	}

//	function startSlideshow() {
//
//		isSlideshowActive = true;
//		clearTimeout( slideshowtime );
//		slideshowtime = setTimeout( function() {
//			navigate( 'next' );
//			startSlideshow();
//		}, interval );
//
//	}

	function stopSlideshow() {
		isSlideshowActive = false;
		clearTimeout( slideshowtime );
	}

	return { init : init };

})();