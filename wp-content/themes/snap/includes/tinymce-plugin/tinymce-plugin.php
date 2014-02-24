<?php

if ( ! class_exists( 'Snap_Tiny_MCE_Plugin' ) ) :
/**
 * Adds extra Tiny MCE buttons.
 */
class Snap_Tiny_MCE_Plugin {

	/**
	 * The one instance of Snap_Tiny_MCE_Plugin.
	 *
	 * @since 1.0.
	 *
	 * @var   Snap_Tiny_MCE_Plugin
	 */
	private static $instance;

	/**
	 * Instantiate or return the one Snap_Tiny_MCE_Plugin instance.
	 *
	 * @since  1.0.
	 *
	 * @return Snap_Tiny_MCE_Plugin
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
	 * @return Snap_Tiny_MCE_Plugin
	 */
	public function __construct() {
		/**
		 * Add filter to easily disable the formatting buttons from a site plugin or child theme.
		 *
		 * To remove, use the following code:
		 *     add_filter( 'snap_add_formatting_buttons', '__return_false' );
		 */
		if ( true === apply_filters( 'snap_add_formatting_buttons', true ) ) {
			add_action( 'admin_init', array( $this, 'tinymce_plugin' ) );
			add_action( 'admin_enqueue_scripts', array( $this, 'admin_enqueue_scripts' ) );
		}
	}

	/**
	 * Load the plugin.
	 *
	 * @since  1.0.
	 *
	 * @return void
	 */
	public function tinymce_plugin() {
		// Don't bother loading buttons if the current user lacks permissions
		if ( ! current_user_can( 'edit_posts' ) && ! current_user_can( 'edit_pages' ) )
			return;

		// Add only in Rich Editor mode; options is return as a string, hence no strict compare
		if ( true == get_user_option( 'rich_editing' ) ) {
			add_filter( 'mce_external_plugins', array( $this, 'add_tinymce_plugin' ) );
			add_filter( 'mce_buttons_3', array( $this, 'register_tinymce_buttons' ) );
		}
	}

	/**
	 * Add the plugin to the array of Tiny MCE plugins.
	 *
	 * @since  1.0.
	 *
	 * @param  array    $plugin_array    Unmodified list of plugins.
	 * @return array                     Modified list of plugins.
	 */
	public function add_tinymce_plugin( $plugin_array ) {
		$plugin_array['snap'] = get_template_directory_uri() . '/includes/tinymce-plugin/js/tinymce-plugin.js';
		return $plugin_array;
	}

	/**
	 * Add buttons to Tiny MCE.
	 *
	 * @since  1.0.
	 *
	 * @param  array    $buttons    Unmodified list of buttons.
	 * @return array                Modified list of plugins.
	 */
	public function register_tinymce_buttons( $buttons ) {
		$new_buttons = array(
			'alert',
			'error',
			'success',
			'note',
			'dropCap',
			'intro',
		);
		return array_merge( $buttons, $new_buttons );
	}

	/**
	 * Enqueue the CSS for the admin.
	 *
	 * @since  1.0.
	 *
	 * @param  string    $hook_suffix    The suffix for the screen.
	 * @return void
	 */
	public function admin_enqueue_scripts( $hook_suffix ) {
		// Only load resources if they are needed on the current page
		if ( ! in_array( $hook_suffix, array( 'post-new.php', 'post.php' ) ) )
			return;

		wp_enqueue_style(
			'snap_tinymce_plugin_css',
			get_template_directory_uri() . '/includes/tinymce-plugin/css/style.css',
			array(),
			SNAP_VERSION
		);
	}
}
endif;

if ( ! function_exists( 'snap_get_tiny_mce_plugin' ) ) :
/**
 * Return the one Snap_Tiny_MCE_Plugin object.
 *
 * @since  1.0.
 *
 * @return Snap_Tiny_MCE_Plugin
 */
function snap_get_tiny_mce_plugin() {
	return Snap_Tiny_MCE_Plugin::instance();
}
endif;

add_action( 'admin_init', 'snap_get_tiny_mce_plugin', 1 );