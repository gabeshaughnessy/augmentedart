<?php
/**
 * @package Snap
 */

if ( ! function_exists( 'snap_customize' ) ) :
/**
 * Add theme options via the WordPress Customizer.
 *
 * @since  1.0.
 *
 * @param  object    $wp_customize    The main customizer object.
 * @return void
 */
function snap_customize( $wp_customize ) {
	// Add the Social Links section
	$wp_customize->add_section(
		'snap_footer',
		array(
			'title'    => __( 'Footer', 'snap' ),
			'priority' => 160,
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
			'section'  => 'snap_footer',
			'type'     => 'text',
			'priority' => 10,
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
			'section'  => 'snap_footer',
			'type'     => 'text',
			'priority' => 20,
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
			'section'  => 'snap_footer',
			'type'     => 'text',
			'priority' => 30,
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
			'section'  => 'snap_footer',
			'type'     => 'text',
			'priority' => 40,
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
			'section'  => 'snap_footer',
			'type'     => 'text',
			'priority' => 50,
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
			'section'  => 'snap_footer',
			'type'     => 'text',
			'priority' => 70,
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
			'section'  => 'snap_footer',
			'type'     => 'text',
			'priority' => 60,
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
			'section'  => 'snap_footer',
			'type'     => 'text',
			'priority' => 70,
		)
	);

	// Add the Display section
	$wp_customize->add_section(
		'snap_display',
		array(
			'title'    => __( 'Display', 'snap' ),
			'priority' => 45,
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
			'section'  => 'snap_display',
			'type'     => 'text',
			'priority' => 20,
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
			'section'  => 'snap_display',
			'type'     => 'checkbox',
			'priority' => 30,
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
			'section'  => 'snap_display',
			'type'     => 'checkbox',
			'priority' => 40,
		)
	);

	// Primary Color
	$wp_customize->add_setting(
		'primary-color',
		array(
			'default'           => '#007fd0',
			'type'              => 'theme_mod',
			'sanitize_callback' => 'snap_maybe_hash_hex_color'
		)
	);

	$wp_customize->add_control(
		new WP_Customize_Color_Control(
			$wp_customize,
			'primary-color',
			array(
				'label'    => __( 'Primary Color', 'snap' ),
				'section'  => 'colors',
				'settings' => 'primary-color',
				'priority' => 80,
			)
		)
	);

	// Primary Color
	$wp_customize->add_setting(
		'secondary-color',
		array(
			'default'           => '#ffc300',
			'type'              => 'theme_mod',
			'sanitize_callback' => 'snap_maybe_hash_hex_color'
		)
	);

	$wp_customize->add_control(
		new WP_Customize_Color_Control(
			$wp_customize,
			'secondary-color',
			array(
				'label'    => __( 'Secondary Color', 'snap' ),
				'section'  => 'colors',
				'settings' => 'secondary-color',
				'priority' => 90,
			)
		)
	);
}
endif;

add_action( 'customize_register', 'snap_customize' );

if ( ! function_exists( 'snap_implement_custom_colors' ) ) :
/**
 * Print custom colors.
 *
 * @since  1.0.
 *
 * @return void
 */
function snap_implement_custom_colors() {
	$primary   = snap_maybe_hash_hex_color( get_theme_mod( 'primary-color' ) );
	$secondary = snap_maybe_hash_hex_color( get_theme_mod( 'secondary-color' ) );

	// Only add color if one is set and it is not the default color
	if ( ! empty( $primary ) && '#007fd0' !== $primary ) : ?>
		<style type="text/css" media="all">
			a,
			.drop-cap {
				color: <?php echo $primary; ?>;
			}

			<?php if ( false !== ( $color = snap_maybe_hash_hex_color( snap_adjust_hex_color( $primary, 'lighten', 8 ) ) ) ) : ?>
				a:hover {
					color: <?php echo $color; ?>
				}
			<?php else : ?>
				a:hover {
					color: <?php echo $primary; ?>
				}
			<?php endif; ?>

			#comments .bypostauthor .comment-name,
			.sticky-post-message {
				background-color: <?php echo $primary; ?>;
			}

			textarea:focus,
			select:focus,
			input:focus {
				outline-color: <?php echo $primary; ?>;
			}
		</style>
	<?php endif;

	// Only add the color if it is set and is not the default color
	if ( ! empty( $secondary ) && '#ffc300' !== $secondary ) : ?>
		<?php
			$secondary_border_top          = snap_maybe_hash_hex_color( snap_adjust_hex_color( $secondary, 'lighten', 8 ) );
			$secondary_border_bottom       = snap_maybe_hash_hex_color( snap_adjust_hex_color( $secondary, 'darken', 1 ) );
			$secondary_hover               = snap_maybe_hash_hex_color( snap_adjust_hex_color( $secondary, 'lighten', 8 ) );
			$secondary_hover_border_top    = snap_maybe_hash_hex_color( snap_adjust_hex_color( $secondary, 'lighten', 18 ) );
			$secondary_hover_border_bottom = snap_maybe_hash_hex_color( snap_adjust_hex_color( $secondary, 'lighten', 9 ) );
		?>
		<style type="text/css" media="all">
			.grid-read-more:hover:before,
			.portfolio-button:hover,
			button,
			input[type="reset"],
			input[type="submit"],
			input[type="button"],
			#infinite-handle span {
				background-color: <?php echo $secondary; ?>;
			}

			<?php if ( false !== $secondary_border_top && false !== $secondary_border_bottom ) : ?>
				button,
				input[type="reset"],
				input[type="submit"],
				input[type="button"],
				#infinite-handle span,
				.portfolio-button:hover {
					border-top: 1px solid <?php echo $secondary_border_top; ?>;
					border-bottom: 2px solid <?php echo $secondary_border_bottom; ?>;
				}
			<?php endif; ?>

			<?php if ( false !== $secondary_hover && false !== $secondary_hover_border_top && false !== $secondary_hover_border_bottom ) : ?>
				button:hover,
				input[type="reset"]:hover,
				input[type="submit"]:hover,
				input[type="button"]:hover,
				#infinite-handle:hover span {
					background-color: <?php echo $secondary_hover; ?>;
					border-top: 1px solid <?php echo $secondary_hover_border_top; ?>;
					border-bottom: 2px solid <?php echo $secondary_hover_border_bottom; ?>;
				}
			<?php endif; ?>

			#mobile-toggle span:before {
				color: <?php echo $secondary; ?>;
			}
		</style>
	<?php endif;
}
endif;

add_action( 'wp_head', 'snap_implement_custom_colors', 15 );

if ( ! function_exists( 'snap_hex_to_rgb' ) ) :
/**
 * Convert a hexidecimal color to RGB.
 *
 * @since  1.0.
 *
 * @param  string    $hex    A hexidecimal representation of a color.
 * @return array             An array with the RGB values.
 */
function snap_hex_to_rgb( $hex ) {
	$hex = str_replace( '#', '', $hex );
	return array( 'r' => hexdec( substr( $hex, 0, 2 ) ), 'g' => hexdec( substr( $hex, 2, 2 ) ), 'b' => hexdec( substr( $hex, 4, 2 ) ) );
}
endif;

if ( ! function_exists( 'snap_rgb_to_hex' ) ) :
/**
 * Convert an RGB color to its hexidecimal representation.
 *
 * @since  1.0.
 *
 * @param  string         $rgb    An array with the RGB values. Assumes the array has the "r", "g", and "b" keys.
 * @return string|bool            Hexidecimal sting with the hash. Returns false on failure.
 */
function snap_rgb_to_hex( $rgb ) {
	if ( ! isset( $rgb['r'] ) || ! isset( $rgb['g'] ) || ! isset( $rgb['b'] ) ) {
		return false;
	}

	$hex = "#";

	// Convert each piece to the hexidecimal piece
	foreach ( $rgb as $component ) {
		$hex .= str_pad( dechex( $component ), 2, "0", STR_PAD_LEFT );
	}

	return $hex;
}
endif;

if ( ! function_exists( 'snap_rgb_to_hsl' ) ) :
/**
 * Convert RGB color to HSL respresentation.
 *
 * @since  1.0.
 *
 * @param  string         $rgb    An array with the RGB values. Assumes the array has the "r", "g", and "b" keys.
 * @return array|bool             An array containing the HSL values. Returns false on failure.
 */
function snap_rgb_to_hsl( $rgb ) {
	if ( ! isset( $rgb['r'] ) || ! isset( $rgb['g'] ) || ! isset( $rgb['b'] ) ) {
		return false;
	}

	$modded_rgb = array(
		'r' => $rgb['r'] / 255.0,
		'g' => $rgb['g'] / 255.0,
		'b' => $rgb['b'] / 255.0,
	);

	// Get the max and min that are needed in conversions
	$max = max( $modded_rgb );
	$min = min( $modded_rgb );

	// Chroma value needed for the conversions
	$d = $max - $min;

	// Calculate the hue
	switch( $max ) {
		case $min :
			$hue = 0.0;
			break;

		case $modded_rgb['r'] :
			$hue = 60.0 * ( $modded_rgb['g'] - $modded_rgb['b'] ) / $d;
			break;

		case $modded_rgb['g'] :
			$hue = 60.0 * ( $modded_rgb['b'] - $modded_rgb['r'] ) / $d + 120.0;
			break;

		case $modded_rgb['b'] :
			$hue = 60.0 * ( $modded_rgb['r'] - $modded_rgb['g'] ) / $d + 240.0;
			break;
	}

	// Calculate the lightness
	$lightness = ( $max + $min ) / 2;

	// Calculate the saturation
	if ( $max === $min ) {
		$saturation = 0;
	} elseif ( $lightness < 0.5 ) {
		$saturation = $d / ( 2 * $lightness );
	} else {
		$saturation = $d / ( 2 - 2 * $lightness );
	}

	// Return the values in the proper format
	return array(
		'h' => (float) ( $hue % 360.0 ),
		's' => $saturation * 100,
		'l' => $lightness * 100,
	);
}
endif;

if ( ! function_exists( 'snap_hsl_to_rgb' ) ) :
/**
 * Convert an HSL representation to RGB.
 *
 * @since  1.0.
 *
 * @param  array         $hsl    An array with the HSL values. Assumes the array has the "h", "s", and "l" keys.
 * @return array|bool            An array with the RGB values. False on failure
 */
function snap_hsl_to_rgb( $hsl ) {
	if ( ! isset( $hsl['h'] ) || ! isset( $hsl['s'] ) || ! isset( $hsl['l'] ) ) {
		return false;
	}

	// Convert values to normal representation
	$modded_hsl = array(
		'h' => $hsl['h'] / 360.0,
		's' => $hsl['s'] / 100.0,
		'l' => $hsl['l'] / 100.0,
	);

	// Create the $ms2 value needed for the conversion
	if ( $modded_hsl['l'] <= 0.5 ) {
		$m2 = $modded_hsl['l'] * ( $modded_hsl['s'] + 1 );
	} else {
		$m2 = $modded_hsl['l'] + $modded_hsl['s'] - $modded_hsl['l'] * $modded_hsl['s'];
	}

	// Create the $ms1 value needed for the conversion
	$m1 = $modded_hsl['l'] * 2 - $m2;

	// Convert the hues to RGB and return
	return array(
		'r' => round( snap_hue_to_rgb( $m1, $m2, $modded_hsl['h'] + 1.0 / 3.0 ) * 0xff ),
		'g' => round( snap_hue_to_rgb( $m1, $m2, $modded_hsl['h'] ) * 0xff ),
		'b' => round( snap_hue_to_rgb( $m1, $m2, $modded_hsl['h'] - 1.0 / 3.0 ) * 0xff ),
	);
}
endif;

if ( ! function_exists( 'snap_hue_to_rgb' ) ) :
/**
 * Convert a hue to its R, G, or B value.
 *
 * @since  1.0.
 *
 * @param  float    $m1    The m1 value.
 * @param  float    $m2    The m2 value.
 * @param  float    $h     The h value.
 * @return float           R, G, or B value.
 */
function snap_hue_to_rgb( $m1, $m2, $h ) {
	if ( $h < 0 ) {
		$h += 1;
	} elseif ( $h > 1 ) {
		$h -= 1;
	}

	if ( $h * 6 < 1 ) {
		return $m1 + ( $m2 - $m1 ) * $h * 6;
	} elseif ( $h * 2 < 1 ) {
		return $m2;
	} elseif ( $h * 3 < 2 ) {
		return $m1 + ( $m2 - $m1 ) * ( 2.0 / 3.0 - $h ) * 6;
	} else {
		return $m1;
	}
}
endif;

if ( ! function_exists( 'snap_adjust_hex_color' ) ) :
/**
 * Lighten or darken a hex color by adjusting the L of the HSL value.
 *
 * @since  1.0.
 *
 * @param  string    $hex       Hex representation of the color.
 * @param  string    $type      Type of operation. Either "darken" or "lighten".
 * @param  int       $amount    Amount of adjustment.
 * @return string               Altered hexidecimal representation of the color.
 */
function snap_adjust_hex_color( $hex, $type, $amount ) {
	// Convert the value to its HSL version
	$hsl = snap_rgb_to_hsl( snap_hex_to_rgb( $hex ) );

	// Either add or subtract the amount based on the type of operation
	if ( 'lighten' === $type ) {
		$hsl['l'] += $amount;
	} elseif ( 'darken' === $type ) {
		$hsl['l'] -= $amount;
	}

	// Make sure the adjustment isn't beyond the range
	if ( $hsl['l'] > 100 ) {
		$hsl['l'] = 100;
	} elseif ( $hsl['l'] < 0 ) {
		$hsl['l'] = 0;
	}

	// Return the color as a hex color
	return snap_rgb_to_hex( snap_hsl_to_rgb( $hsl ) );
}
endif;

if ( ! function_exists( 'snap_sanitize_hex_color' ) ) :
/**
 * Validates a hex color.
 *
 * Returns either '', a 3 or 6 digit hex color (with #), or null.
 * For validating values without a #, see sanitize_hex_color_no_hash().
 *
 * @since  1.0.
 *
 * @param  string         $color    Hexidecimal value to sanitize.
 * @return string|null              Sanitized value.
 */
function snap_sanitize_hex_color( $color ) {
	if ( '' === $color )
		return '';

	// 3 or 6 hex digits, or the empty string.
	if ( preg_match('|^#([A-Fa-f0-9]{3}){1,2}$|', $color ) )
		return $color;

	return null;
}
endif;

if ( ! function_exists( 'snap_sanitize_hex_color_no_hash' ) ) :
/**
 * Sanitizes a hex color without a hash. Use sanitize_hex_color() when possible.
 *
 * Saving hex colors without a hash puts the burden of adding the hash on the
 * UI, which makes it difficult to use or upgrade to other color types such as
 * rgba, hsl, rgb, and html color names.
 *
 * Returns either '', a 3 or 6 digit hex color (without a #), or null.
 *
 * @since  1.0.
 *
 * @param  string         $color    Hexidecimal value to sanitize.
 * @return string|null              Sanitized value.
 */
function snap_sanitize_hex_color_no_hash( $color ) {
	$color = ltrim( $color, '#' );

	if ( '' === $color )
		return '';

	return snap_sanitize_hex_color( '#' . $color ) ? $color : null;
}
endif;

if ( ! function_exists( 'snap_maybe_hash_hex_color' ) ) :
/**
 * Ensures that any hex color is properly hashed.
 * Otherwise, returns value untouched.
 *
 * This method should only be necessary if using sanitize_hex_color_no_hash().
 *
 * @since  1.0.
 *
 * @param  string    $color    Hexidecimal value to sanitize.
 * @return string              Sanitized value.
 */
function snap_maybe_hash_hex_color( $color ) {
	if ( $unhashed = snap_sanitize_hex_color_no_hash( $color ) )
		return '#' . $unhashed;

	return $color;
}
endif;