<?php
/**
 * @package Snap
 */

if ( ! function_exists( 'snap_get_social_links' ) ) :
/**
 * Get the social links from options.
 *
 * @since  1.0.
 *
 * @return array    Keys are service names and the values are links.
 */
function snap_get_social_links() {
	// Define default services
	$default_services = array(
		'twitter' => array(
			'title' => 'Twitter',
		),
		'facebook' => array(
			'title' => 'Facebook',
		),
		'google' => array(
			'title' => 'Google+',
		),
		'flickr' => array(
			'title' => 'Flickr',
		),
		'pinterest' => array(
			'title' => 'Pinterest',
		),
		'linkedin' => array(
			'title' => 'LinkedIn',
		),
		'rss' => array(
			'title' => 'RSS',
		),
	);

	// Set up the collector array
	$services_with_links = array();

	// Get the links for these services
	foreach ( $default_services as $service => $details ) {
		$url = get_theme_mod( $service, false );
		if ( false !== $url ) {
			$services_with_links[ $service ] = array(
				'title' => $details['title'],
				'url'   => $url,
			);
		}
	}

	return apply_filters( 'snap_get_social_links', $services_with_links );
}
endif;

if ( ! function_exists( 'snap_sanitize_footer_text' ) ) :
/**
 * Sanitize the footer text option.
 *
 * @since  1.0.1.
 *
 * @param  string    $text    Unsanitized text.
 * @return string             Sanitized text.
 */
function snap_sanitize_footer_text( $text ) {
	return wp_kses_data( $text );
}
endif;

if ( ! function_exists( 'snap_sanitize_bool' ) ) :
/**
 * Sanitize the boolean values.
 *
 * @since  1.0.1.
 *
 * @param  bool    $value    Unsanitized value.
 * @return bool              Sanitized value.
 */
function snap_sanitize_bool( $value ) {
	return (bool) $value;
}
endif;

if ( ! function_exists( 'snap_disable_web_font' ) ) :
/**
 * Add a class that removes the use of the web font if the option is chosen.
 *
 * @since  1.0.
 *
 * @param  array     $classes    The classes added to the body element.
 * @param  string    $class      The current class.
 * @return array                 Modified classes.
 */
function snap_disable_web_font( $classes, $class ) {
	if ( true === get_theme_mod( 'disable-web-font' ) ) {
		$classes[] = 'disable-web-font';
	}

	return $classes;
}
endif;

add_filter( 'body_class', 'snap_disable_web_font', 10, 2 );