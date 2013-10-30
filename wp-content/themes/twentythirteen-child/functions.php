<?php

//hide admin bar for layar pages
function hide_admin_bar() {
	if (is_page_template('templates/layar-page.php')) {
		return false;
	}
}
add_filter( 'show_admin_bar', 'hide_admin_bar' );

//allow additional MIME types for uploading files to the media library
 
function aa_custom_upload_mimes( $existing_mimes ) {
	// add webm to the list of mime types
	$existing_mimes['webm'] = 'video/webm';
	$existing_mimes['mp4'] = 'video/mp4';
	$existing_mimes['svg'] = 'image/svg+xml';

 
	// return the array back to the function with our added mime type
	return $existing_mimes;
}
add_filter( 'mime_types', 'aa_custom_upload_mimes' );

?>