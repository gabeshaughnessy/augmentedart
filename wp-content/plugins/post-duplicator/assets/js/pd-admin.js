jQuery( document ).ready( function() {

	/**
	 * Duplicate post listener.
	 *
	 * Creates an ajax request that creates a new post, 
	 * duplicating all the data and custom meta.
	 *
	 * @since 2.12
	 */
	 
	jQuery( '.m4c-duplicate-post' ).click( function( e ) {
		
		e.preventDefault();
	
		// Create the data to pass
		var data = {
			action: 'm4c_duplicate_post',
			original_id: jQuery(this).data('postid'),
			security: jQuery(this).attr('rel')
		};
	
		// since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
		jQuery.post( ajaxurl, data, function( response ) {
			
			var location = window.location.href;
			if( location.split('?').length > 1 ) {
				location = location + '&post-duplicated='+response;
			} else {
				location = location + '?post-duplicated='+response;
			}
			
			window.location.href = location;
		});
	});
});