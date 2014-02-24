<?php
/*
Plugin Name: Foundry Slider
Plugin URI: http://thethemefoundry.com/
Description: A featured slider component for The Theme Foundry themes.
Author: The Theme Foundry
Version: 1.0
Author URI: http://thethemefoundry.com/
*/

if ( ! class_exists( 'TTF_Foundry_Slider' ) ) :

/**
 * Initiates basic functionality and defines global functions.
 *
 * @since 0.1
 */
class TTF_Foundry_Slider {

	/**
	 * Store the base URL for the plugin.
	 *
	 * @since 0.1
	 * @var   string
	 */
	public $plugin_url = '';

	/**
	 * Holds the single instance of TTF_Foundry_Slider.
	 *
	 * @since 0.1
	 * @var   TTF_Foundry_Slider
	 */
	private static $instance;

	/**
	 * Key for the post meta entry.
	 *
	 * @since 0.1
	 * @var   string
	 */
	public $meta_key = '_ttf_foundry_slider';

	/**
	 * Instantiates or returns the one TTF_Foundry_Slider instance.
	 *
	 * @since  0.1
	 * @return TTF_Foundry_Slider
	 */
	public static function instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new TTF_Foundry_Slider();
			self::$instance->_init();
		}
		return self::$instance;
	}

	/**
	 * Dummy constructor.
	 *
	 * @since  0.1
	 * @return TTF_Foundry_Slider
	 */
	private function __construct() {}

	/**
	 * Sets up variables and add actions and filters.
	 *
	 * @since  0.1
	 * @return void
	 */
	private function _init() {
		// Setup paths
		$this->plugin_url = apply_filters( 'ttf_foundry_slider_plugin_url', plugins_url( '/', __FILE__ ) );

		if ( is_ssl() )
			$this->plugin_url = str_replace( 'http://', 'https://', $this->plugin_url );

		if ( is_admin() ) {
			include dirname( __FILE__ ) . '/includes/post-meta.php';
			include dirname( __FILE__ ) . '/includes/quick-edit.php';
		}

		include dirname( __FILE__ ) . '/includes/public-functions.php';

		// Withhold the posts in the appropriate places
		add_action( 'pre_get_posts', array( $this, 'remove_featured_slider_posts' ) );
	}

	/**
	 * Get the cached or newly generated version of the slider query.
	 *
	 * @since 0.1
	 *
	 * @param  bool    $refresh    Whether or not to force refresh the cache.
	 * @return WP_Query            The WP_Query object for the slider query.
	 */
	public function get_featured_slider_query( $refresh = false ) {
		$cache_key = 'ttf-featured-slider-query';
		$query	   = get_transient( $cache_key );

		if ( false === $query || true === $refresh ) {
			$query = $this->_generate_featured_slider_query( $refresh );
			set_transient( $cache_key, $query );
		}

		return $query;
	}

	/**
	 * Generate the featured slider query.
	 *
	 * @since 0.1
	 *
	 * @param  bool    $refresh    Whether or not to force refresh the post id listing.
	 * @return WP_Query            The generated WP_Query object for the slider posts.
	 */
	public function _generate_featured_slider_query( $refresh = false ) {
		$post__in = $this->get_featured_slider_post_ids( $refresh );

		/**
		 * If no post ids are in the $post__in array, that means no feature slider posts exists. In that case, there is
		 * no need to run the next query. Instead, return a blank WP_Query object so that the result of this function
		 * can still operate on a WP_Query object as normal.
		 */
		if ( empty( $post__in ) )
			return new WP_Query();

		$args = array(
			'post__in'       => $post__in,
			'post_status'    => 'publish',
			'no_found_rows'  => true,
			'posts_per_page' => 999,
		);

		$query = new WP_Query( $args );

		return $query;
	}

	/**
	 * Get the featured slider post ids either from cache or regenerate the post ids.
	 *
	 * @since 0.1
	 *
	 * @param  bool    $refresh    Whether or not to force refresh the cache.
	 * @return array               Array of slider post ids.
	 */
	public function get_featured_slider_post_ids( $refresh = false ) {
		$cache_key = 'ttf-featured-slider-post-ids';
		$post_ids  = get_transient( $cache_key );

		// Note that false should only be checked here; an empty response means that there are no featured slider posts.
		if ( false === $post_ids || true === $refresh ) {
			$post_ids = $this->_generate_featured_slider_post_ids();

			// Set the transient and do not expire it
			set_transient( $cache_key, $post_ids );
		}

		return $post_ids;
	}

	/**
	 * Get an array of post IDs for featured slider posts.
	 *
	 * @since  0.1
	 * @return array    Empty array on failure; array of IDs on success.
	 */
	private function _generate_featured_slider_post_ids() {
		// Allow additional actions to run before the function
		do_action( 'ttf_pre_generate_featured_slider_post_ids' );

		// Set the default return value
		$featured_slider_post_ids = array();

		// Query for posts
		$args = array(
			'post_status'    => 'publish',
			'fields'         => 'ids',
			'meta_query'     => array(
				array(
					'key'   => $this->meta_key,
					'value' => '1',
				),
			),
			'no_found_rows'  => true,
			'posts_per_page' => 999,
			'id'             => 'test'
		);

		// Allow arguments to be filtered
		$args = apply_filters( 'ttf_generate_featured_slider_post_ids_args', $args );

		// Run the query
		$featured_slider_posts = new WP_Query( $args );

		// Set the return value if there were posts returned
		if ( $featured_slider_posts->have_posts() )
			$featured_slider_post_ids = $featured_slider_posts->get_posts();

		// Allow the resulting IDs to be filtered
		$featured_slider_post_ids = apply_filters( 'ttf_generate_featured_slider_post_ids', $featured_slider_post_ids, $featured_slider_posts );

		// Allow additional actions to run after the function
		do_action( 'ttf_after_generate_featured_slider_post_ids' );

		return $featured_slider_post_ids;
	}

	/**
	 * Determines whether or not a post is in the slider or not.
	 *
	 * @since 0.1
	 *
	 * @param  int    $post_id    ID of the post in question.
	 * @return bool               True if post is in slider; false if it is not.
	 */
	public function is_in_featured_slider( $post_id = 0 ) {
		if ( 0 === $post_id )
			$post_id = get_the_ID();

		// Just in case something unacceptable is sent
		$post_id = absint( $post_id );

		if ( $post_id < 1 )
			return false;

		return (boolean) get_post_meta( $post_id, $this->meta_key, true );
	}

	/**
	 * Removes posts that are in the featured slider from the the home page.
	 *
	 * @param  WP_Query    $query    The unmodified WP_Query object.
	 * @return void
	 */
	function remove_featured_slider_posts( $query ) {
		if ( ! $query->is_main_query() || ! $query->is_home() )
			return;

		$post_ids = ttf_get_featured_slider_post_ids();

		if ( ! empty( $post_ids ) )
			$query->set( 'post__not_in', $post_ids );
	}
}

/**
 * Public accessor for the single TTF_Foundry_Slider instance.
 *
 * @since  0.1
 * @return TTF_Foundry_Slider
 */
function ttf_get_foundry_slider() {
	return TTF_Foundry_Slider::instance();
}

add_action( 'init', 'ttf_get_foundry_slider' );

endif;