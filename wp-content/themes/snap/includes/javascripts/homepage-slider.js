( function( $ ) {
	if ( 'object' === typeof snapResponsiveSlidesOptions ) {
		$( '.homepage-featured-area-slides' ).responsiveSlides( snapResponsiveSlidesOptions );
	} else {
		$( '.homepage-featured-area-slides' ).responsiveSlides();
	}
} ) ( jQuery )