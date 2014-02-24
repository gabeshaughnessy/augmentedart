<?php

if ( ! function_exists( 'ttf_is_in_featured_slider' ) ) :

/**
 * Determines whether or not a post is in the slider or not.
 *
 * @since 0.1
 *
 * @param  int    $post_id    ID of the post in question.
 * @return bool               True if post is in slider; false if it is not.
 */
function ttf_is_in_featured_slider( $post_id = 0 ) {
	return ttf_get_foundry_slider()->is_in_featured_slider( $post_id );
}

endif;

if ( ! function_exists( 'ttf_get_featured_slider_post_ids' ) ) :

/**
 * Get the featured slider post ids either from cache or regenerate the post ids.
 *
 * @since 0.1
 *
 * @param  bool    $refresh    Whether or not to regenerate the cache.
 * @return array               Array of slider post ids.
 */
function ttf_get_featured_slider_post_ids( $refresh = false ) {
	return ttf_get_foundry_slider()->get_featured_slider_post_ids( $refresh );
}

endif;

if ( ! function_exists( 'ttf_get_featured_slider_query' ) ) :

/**
 * Get the cached or newly generated version of the slider query.
 *
 * @since 0.1
 *
 * @param  bool    $refresh    Whether or not to regenerate the cache.
 * @return WP_Query            The WP_Query object for the slider query.
 */
function ttf_get_featured_slider_query( $refresh = false ) {
	return ttf_get_foundry_slider()->get_featured_slider_query( $refresh );
}

endif;