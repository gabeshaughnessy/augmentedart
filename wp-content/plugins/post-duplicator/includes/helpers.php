<?php
	
/* --------------------------------------------------------- */
/* !Return an array of post types - 2.12 */
/* --------------------------------------------------------- */

if( !function_exists('mtphr_post_duplicator_post_types') ) {
function mtphr_post_duplicator_post_types() {
	
	$post_types = array('same' => __('Same as original', 'post-duplicator'));
	$pts = get_post_types(array(), 'objects');
	
	// Remove framework post types
	unset( $pts['attachment'] );
	unset( $pts['revision'] );
	unset( $pts['nav_menu_item'] );
	unset( $pts['wooframework'] );

	if( is_array($pts) && count($pts) > 0 ) {
		foreach( $pts as $i=>$pt ) {
			$post_types[$i] = $pt->labels->singular_name;
		}
	}
	
	return $post_types;	
}
}
