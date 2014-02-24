<?php
/**
 * @package Snap
 */

if ( ! class_exists( 'Snap_Logo' ) ) :
/**
 * A class that adds custom logo functionality.
 *
 * Two inputs are added in the customizer that allow uploading of a regular and a retina image. Images are displayed
 * using CSS's background image property. CSS is printed to the head dynamically to make this happen.
 *
 * @since 1.0.
 */
class Snap_Logo {

	/**
	 * The one instance of Snap_Logo.
	 *
	 * @since 1.0.
	 *
	 * @var   Snap_Logo
	 */
	private static $instance;

	/**
	 * Stores the logo image, width, and height information.
	 *
	 * This var acts as a "run-time" cache. Since the functions in this class are called in different places throughout
	 * the page load, once the logo information is computed for the first time, it is cached to this variable.
	 * Subsequent requests for the information are pulled from the variable in memory instead of recomputing it.
	 *
	 * @since 1.0.
	 *
	 * @var   array    Holds the image, width, and height information for the logos.
	 */
	var $logo_information = array();

	/**
	 * Stores whether or not a specified logo type is available.
	 *
	 * @since 1.0.
	 *
	 * @var   array    Holds boolean values to indicate if the logo type is available.
	 */
	var $has_logo_by_type = array();

	/**
	 * Instantiate or return the one Snap_Logo instance.
	 *
	 * @since  1.0.
	 *
	 * @return Snap_Logo
	 */
	public static function instance() {
		if ( is_null( self::$instance ) )
			self::$instance = new self();

		return self::$instance;
	}

	/**
	 * Initiate the actions.
	 *
	 * @since  1.0.
	 *
	 * @return Snap_Logo
	 */
	public function __construct() {
		add_action( 'wp_head', array( $this, 'print_logo_css' ) );
		add_action( 'customize_register', array( $this, 'customize' ) );
	}

	/**
	 * Add logo options via the WordPress Customizer.
	 *
	 * @since  1.0.
	 *
	 * @param  object    $wp_customize    The main customizer object.
	 * @return void
	 */
	public function customize( $wp_customize ) {
		// Add Logo section
		$wp_customize->add_section(
			'snap_logo',
			array(
				'title'    => __( 'Logo', 'snap' ),
				'priority' => 35,
			)
		);

		// Regular Logo
		$wp_customize->add_setting(
			'regular-logo',
			array(
				'default'           => '',
				'type'              => 'theme_mod',
				'sanitize_callback' => 'esc_url_raw',
			)
		);

		$wp_customize->add_control(
			new WP_Customize_Image_Control(
				$wp_customize,
				'regular-logo',
				array(
					'label'    => __( 'Regular Logo', 'snap' ),
					'section'  => 'snap_logo',
					'settings' => 'regular-logo',
					'priority' => 20,
				)
			)
		);

		// Retina Logo
		$wp_customize->add_setting(
			'retina-logo',
			array(
				'default'           => '',
				'type'              => 'theme_mod',
				'sanitize_callback' => 'esc_url_raw',
			)
		);

		$wp_customize->add_control(
			new WP_Customize_Image_Control(
				$wp_customize,
				'retina-logo',
				array(
					'label'    => __( 'Retina Logo', 'snap' ),
					'section'  => 'snap_logo',
					'settings' => 'retina-logo',
					'priority' => 40,
				)
			)
		);
	}

	/**
	 * Get the ID of an attachment from its image URL.
	 *
	 * This function is taken directly from WordPress 3.6 beta.
	 *
	 * @since  1.0.
	 *
	 * @param  string      $url    The path to an image.
	 * @return int|bool            ID of the attachment or 0 on failure.
	 */
	function get_attachment_id_from_url( $url ) {
		// This is an exact copy of the 3.6 beta function that was eventually removed as it was not needed.
		global $wpdb;
		if ( preg_match( '#\.[a-zA-Z0-9]+$#', $url ) ) {
			$id = $wpdb->get_var( $wpdb->prepare( "SELECT ID FROM $wpdb->posts WHERE post_type = 'attachment' " . "AND guid = %s", $url ) );

			if ( ! empty( $id ) )
				return (int) $id;
		}

		return 0;
	}

	/**
	 * Get the dimensions of a logo image from cache or regenerate the values.
	 *
	 * @since  1.0.
	 *
	 * @param  string    $url    The URL of the image in question.
	 * @return array             The dimensions array on success, and a blank array on failure.
	 */
	function get_logo_dimensions( $url ) {
		// Build the cache key
		$key = 'snap-' . md5( 'logo-dimensions-' . $url . SNAP_VERSION );

		// Pull from cache
		$dimensions = get_transient( $key );

		// If the value is not found in cache, regenerate
		if ( false === $dimensions ) {
			// Get the ID of the attachment
			$attachment_id = $this->get_attachment_id_from_url( $url );

			// Get the dimensions
			$info = wp_get_attachment_image_src( $attachment_id, 'full' );

			if ( false !== $info && isset( $info[1] ) && isset( $info[2] ) ) {
				// Package the data
				$dimensions = array(
					'width'  => $info[1],
					'height' => $info[2],
				);
			} else {
				// Get the image path from the URL
				$wp_upload_dir = wp_upload_dir();
				$path          = trailingslashit( $wp_upload_dir['basedir'] ) . get_post_meta( $attachment_id, '_wp_attached_file', true );

				// Sometimes, WordPress just doesn't have the metadata available. If not, get the image size
				if ( file_exists( $path ) ) {
					$getimagesize  = getimagesize( $path );

					if ( false !== $getimagesize && isset( $getimagesize[0] ) && isset( $getimagesize[1] ) ) {
						$dimensions = array(
							'width'  => $getimagesize[0],
							'height' => $getimagesize[1],
						);
					} else {
						$dimensions = array();
					}
				} else {
					$dimensions = array();
				}
			}

			// Store the transient
			set_transient( $key, $dimensions, 86400 );
		}

		return $dimensions;
	}

	/**
	 * Determine if a custom logo should be displayed.
	 *
	 * @since  1.0.
	 *
	 * @return bool    True if a logo should be displayed. False if a logo shouldn't be displayed.
	 */
	function has_logo() {
		return ( $this->has_logo_by_type( 'regular-logo' ) || $this->has_logo_by_type( 'retina-logo' ) );
	}

	/**
	 * Determine if necessary information is available to show a particular logo.
	 *
	 * @since  1.0.
	 *
	 * @param  string    $type    The type of logo to inspect for.
	 * @return bool               True if all information is available. False is something is missing.
	 */
	function has_logo_by_type( $type ) {
		// Clean the type value
		$type = sanitize_key( $type );

		// If the information is already set, return it from the instance cache
		if ( isset( $this->has_logo_by_type[ $type ] ) ) {
			return $this->has_logo_by_type[ $type ];
		}

		// Grab the logo information
		$information = $this->get_logo_information();

		// Set the default return value
		$return = false;

		// Verify that the logo type exists in the array
		if ( isset( $information[ $type ] ) ) {

			// Verify that the image is set and has a value
			if ( isset( $information[ $type ]['image'] ) && ! empty( $information[ $type ]['image'] ) ) {

				// Verify that the width is set and has a value
				if ( isset( $information[ $type ]['width'] ) && ! empty( $information[ $type ]['width'] ) ) {

					// Verify that the height is set and has a value
					if ( isset( $information[ $type ]['height'] ) && ! empty( $information[ $type ]['height'] ) ) {
						$return = true;
					}
				}
			}
		}

		// Cache to the instance var for future use
		$this->has_logo_by_type[ $type ] = $return;
		return $this->has_logo_by_type[ $type ];
	}

	/**
	 * Utility function for getting information about the theme logos.
	 *
	 * @since  1.0.
	 *
	 * @return array    Array containing image file, width, and height for each logo.
	 */
	function get_logo_information() {
		// If the logo information is cached to an instance var, pull from there
		if ( ! empty( $this->logo_information ) ) {
			return $this->logo_information;
		}

		// Set the logo slugs
		$logos = array(
			'regular-logo',
			'retina-logo',
		);

		// For each logo slug, get the image, width and height
		foreach ( $logos as $logo ) {
			$this->logo_information[ $logo ]['image'] = get_theme_mod( $logo );

			// Set the defaults
			$this->logo_information[ $logo ]['width']  = '';
			$this->logo_information[ $logo ]['height'] = '';

			// If there is an image, get the dimensions
			if ( ! empty( $this->logo_information[ $logo ]['image'] ) ) {
				$dimensions = $this->get_logo_dimensions( $this->logo_information[ $logo ]['image'] );

				// Set the dimensions to the array if all information is present
				if ( ! empty( $dimensions ) && isset( $dimensions['width'] ) && isset( $dimensions['height'] ) ) {
					$this->logo_information[ $logo ]['width']  = $dimensions['width'];
					$this->logo_information[ $logo ]['height'] = $dimensions['height'];
				}
			}
		}

		return $this->logo_information;
	}

	/**
	 * Print CSS in the head for the logo.
	 *
	 * @since  1.0.
	 *
	 * @return void
	 */
	function print_logo_css() {
		// Grab the logo information
		$info = $this->get_logo_information();

		// CSS for displaying both logos
		if ( $this->has_logo_by_type( 'regular-logo' ) && $this->has_logo_by_type( 'retina-logo' ) ) : ?>
			<style type="text/css" media="all">
				.snap-custom-logo {
					background: url("<?php echo addcslashes( esc_url_raw( $info['regular-logo']['image'] ), '"' ); ?>") no-repeat;
					width: <?php echo absint( $info['regular-logo']['width'] ); ?>px;
					height: <?php echo absint( $info['regular-logo']['height'] ); ?>px;
					display: block;
					margin: 0 auto;
				}
				@media screen and (min-width: 900px), print {
					.snap-custom-logo {
						margin: 0;
					}
				}
				@media
				(-webkit-min-device-pixel-ratio: 1.3),
				(-o-min-device-pixel-ratio: 2.6/2),
				(min--moz-device-pixel-ratio: 1.3),
				(min-device-pixel-ratio: 1.3),
				(min-resolution: 1.3dppx) {
					.snap-custom-logo {
						background: url("<?php echo addcslashes( esc_url_raw( $info['retina-logo']['image'] ), '"' ); ?>") no-repeat;
						background-size: <?php echo absint( $info['regular-logo']['width'] ); ?>px <?php echo absint( $info['regular-logo']['height'] ); ?>px;
					}
				}
			</style>
		<?php elseif ( $this->has_logo_by_type( 'regular-logo' ) ) : // CSS when ONLY the regular logo is available ?>
			<style type="text/css" media="all">
				.snap-custom-logo {
					background: url("<?php echo addcslashes( esc_url_raw( $info['regular-logo']['image'] ), '"' ); ?>") no-repeat;
					width: <?php echo absint( $info['regular-logo']['width'] ); ?>px;
					height: <?php echo absint( $info['regular-logo']['height'] ); ?>px;
					display: block;
					margin-left: auto;
					margin-right: auto;
				}
				@media screen and (min-width: 900px), print {
					.snap-custom-logo {
						margin: 0;
					}
				}
			</style>
		<?php elseif ( $this->has_logo_by_type( 'retina-logo' ) ) : // CSS when ONLY the retina logo is available ?>
			<?php $width  = absint( $info['retina-logo']['width'] ) / 2; ?>
			<?php $height = absint( $info['retina-logo']['height'] ) / 2; ?>
			<style type="text/css" media="all">
				.snap-custom-logo {
					background: url("<?php echo addcslashes( esc_url_raw(  $info['retina-logo']['image'] ), '"' ); ?>") no-repeat;
					width: <?php echo $width; ?>px;
					height: <?php echo $height; ?>px;
					background-size: <?php echo $width ?>px <?php echo $height; ?>px;
					display: block;
					margin-left: auto;
					margin-right: auto;
				}
				@media screen and (min-width: 900px), print {
					.snap-custom-logo {
						margin: 0;
					}
				}
			</style>
		<?php endif;
	}
}

/**
 * Return the one Snap_Logo object.
 *
 * @since  1.0.
 *
 * @return Snap_Logo    The one Snap_Logo instance.
 */
function snap_get_logo() {
	return Snap_Logo::instance();
}
endif;

add_action( 'init', 'snap_get_logo', 1 );