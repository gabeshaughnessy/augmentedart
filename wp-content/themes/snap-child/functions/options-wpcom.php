<?php
/**
 * @package Snap
 */

if ( ! function_exists( 'snap_customize_wpcom' ) ) :
/**
 * Add theme options via the WordPress Customizer.
 *
 * @since  1.0.
 *
 * @param  object    $wp_customize    The main customizer object.
 * @return void
 */
function snap_customize_wpcom( $wp_customize ) {
	// Add the Social Links section
	$wp_customize->add_section(
		'snap_theme',
		array(
			'title'    => __( 'Theme', 'snap' ),
			'priority' => 160,
		)
	);

	// Change the "View Project" button text
	$wp_customize->add_setting(
		'button-text',
		array(
			'default'           => __( 'View Project', 'snap' ),
			'type'              => 'theme_mod',
			'sanitize_callback' => 'wp_strip_all_tags'
		)
	);

	$wp_customize->add_control(
		'button-text',
		array(
			'settings' => 'button-text',
			'label'    => __( 'Portfolio Item Button Text', 'snap' ),
			'section'  => 'snap_theme',
			'type'     => 'text',
			'priority' => 60,
		)
	);

	// Hide featured image on single post page option
	$wp_customize->add_setting(
		'hide-featured-image',
		array(
			'default'           => false,
			'type'              => 'theme_mod',
			'sanitize_callback' => 'snap_sanitize_bool',
		)
	);

	$wp_customize->add_control(
		'hide-featured-image',
		array(
			'settings' => 'hide-featured-image',
			'label'    => __( 'Hide featured image on post pages', 'snap' ),
			'section'  => 'snap_theme',
			'type'     => 'checkbox',
			'priority' => 80,
		)
	);

	// Remove the web font
	$wp_customize->add_setting(
		'disable-web-font',
		array(
			'default'           => false,
			'type'              => 'theme_mod',
			'sanitize_callback' => 'snap_sanitize_bool',
		)
	);

	$wp_customize->add_control(
		'disable-web-font',
		array(
			'settings' => 'disable-web-font',
			'label'    => __( 'Disable Merriweather web font', 'snap' ),
			'section'  => 'snap_theme',
			'type'     => 'checkbox',
			'priority' => 100,
		)
	);

	// Footer text
	$wp_customize->add_setting(
		'footer-text',
		array(
			'default'           => '',
			'type'              => 'theme_mod',
			'sanitize_callback' => 'snap_sanitize_footer_text',
		)
	);

	$wp_customize->add_control(
		'footer-text',
		array(
			'settings' => 'footer-text',
			'label'    => __( 'Footer Text', 'snap' ),
			'section'  => 'snap_theme',
			'type'     => 'text',
			'priority' => 120,
		)
	);

	// Twitter
	$wp_customize->add_setting(
		'twitter',
		array(
			'default'           => '',
			'type'              => 'theme_mod',
			'sanitize_callback' => 'esc_url_raw',
		)
	);

	$wp_customize->add_control(
		'twitter',
		array(
			'settings' => 'twitter',
			'label'    => __( 'Twitter URL', 'snap' ),
			'section'  => 'snap_theme',
			'type'     => 'text',
			'priority' => 140,
		)
	);

	// Facebook
	$wp_customize->add_setting(
		'facebook',
		array(
			'default'           => '',
			'type'              => 'theme_mod',
			'sanitize_callback' => 'esc_url_raw',
		)
	);

	$wp_customize->add_control(
		'facebook',
		array(
			'settings' => 'facebook',
			'label'    => __( 'Facebook URL', 'snap' ),
			'section'  => 'snap_theme',
			'type'     => 'text',
			'priority' => 160,
		)
	);

	// Google
	$wp_customize->add_setting(
		'google',
		array(
			'default'           => '',
			'type'              => 'theme_mod',
			'sanitize_callback' => 'esc_url_raw',
		)
	);

	$wp_customize->add_control(
		'google',
		array(
			'settings' => 'google',
			'label'    => __( 'Google Plus URL', 'snap' ),
			'section'  => 'snap_theme',
			'type'     => 'text',
			'priority' => 180,
		)
	);

	// Flickr
	$wp_customize->add_setting(
		'flickr',
		array(
			'default'           => '',
			'type'              => 'theme_mod',
			'sanitize_callback' => 'esc_url_raw',
		)
	);

	$wp_customize->add_control(
		'flickr',
		array(
			'settings' => 'flickr',
			'label'    => __( 'Flickr URL', 'snap' ),
			'section'  => 'snap_theme',
			'type'     => 'text',
			'priority' => 200,
		)
	);

	// Pinterest
	$wp_customize->add_setting(
		'pinterest',
		array(
			'default'           => '',
			'type'              => 'theme_mod',
			'sanitize_callback' => 'esc_url_raw',
		)
	);

	$wp_customize->add_control(
		'pinterest',
		array(
			'settings' => 'pinterest',
			'label'    => __( 'Pinterest URL', 'snap' ),
			'section'  => 'snap_theme',
			'type'     => 'text',
			'priority' => 220,
		)
	);

	// Linked In
	$wp_customize->add_setting(
		'linkedin',
		array(
			'default'           => '',
			'type'              => 'theme_mod',
			'sanitize_callback' => 'esc_url_raw',
		)
	);

	$wp_customize->add_control(
		'linked-in',
		array(
			'settings' => 'linkedin',
			'label'    => __( 'LinkedIn URL', 'snap' ),
			'section'  => 'snap_theme',
			'type'     => 'text',
			'priority' => 240,
		)
	);

	// RSS
	$wp_customize->add_setting(
		'rss',
		array(
			'default'           => '',
			'type'              => 'theme_mod',
			'sanitize_callback' => 'esc_url_raw',
		)
	);

	$wp_customize->add_control(
		'rss',
		array(
			'settings' => 'rss',
			'label'    => __( 'RSS URL', 'snap' ),
			'section'  => 'snap_theme',
			'type'     => 'text',
			'priority' => 260,
		)
	);
}
endif;

add_action( 'customize_register', 'snap_customize_wpcom' );