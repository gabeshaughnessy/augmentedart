<?php

if ( ! class_exists( 'TTF_Foundry_Slider_Post_Meta_Post_Meta' ) ) :

/**
 * Manages the post meta box and saving the post meta.
 * 
 * @since 0.1
 */
class TTF_Foundry_Slider_Post_Meta {

	/**
	 * Holds the single instance of TTF_Foundry_Slider_Post_Meta.
	 *
	 * @since 0.1
	 * @var   TTF_Foundry_Slider_Post_Meta
	 */
	private static $instance;

	/**
	 * Instantiates or returns the one TTF_Foundry_Slider_Post_Meta instance.
	 *
	 * @since  0.1
	 * @return TTF_Foundry_Slider_Post_Meta
	 */
	public static function instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new TTF_Foundry_Slider_Post_Meta();
			self::$instance->_init();
		}
		return self::$instance;
	}

	/**
	 * Dummy constructor.
	 *
	 * @since  0.1
	 * @return TTF_Foundry_Slider_Post_Meta
	 */
	private function __construct() {}

	/**
	 * Sets up variables and add actions and filters.
	 *
	 * @since  0.1
	 * @return void
	 */
	private function _init() {
		add_action( 'add_meta_boxes', array( $this, 'setup_foundry_slider_metabox' ), 10, 2 );
		add_action( 'save_post', array( $this, 'save_post' ), 10, 2 );

		add_action( 'trashed_post', array( $this, 'regenerate_slider_query_wrapper' ) );
		add_action( 'deleted_post', array( $this, 'regenerate_slider_query_wrapper' ) );
	}

	/**
	 * Adds the metabox for selecting a post as a featured slider post.
	 *
	 * @since 0.1
	 *
	 * @param  string     $post_type    Name of the current post type.
	 * @param  WP_Post    $post         Current post object.
	 * @return void
	 */
	public function setup_foundry_slider_metabox( $post_type, $post ) {
		// Post types to display the option on
		$display_on_post_types = apply_filters( 'tff_foundry_slider_display_on_post_types', array( 'post' ) );

		// Only display for this post type if post type is an acceptable post type
		if ( ! in_array( $post_type, $display_on_post_types ) )
			return;

		// Add the metabox and apply filters to allow other code to change the configuration of the metabox
		add_meta_box(
			'ttf_foundry_slider_post_option_section',
			apply_filters( 'ttf_foundry_slider_metabox_title',         __( 'Foundry Slider', 'snap' ) ),
			apply_filters( 'ttf_foundry_slider_metabox_callback',      array( $this, 'display_foundry_slider_metabox' ) ),
			apply_filters( 'ttf_foundry_slider_metabox_screen',        $post_type ),
			apply_filters( 'ttf_foundry_slider_metabox_context',       'side' ),
			apply_filters( 'ttf_foundry_slider_metabox_priority',      'default' ),
			apply_filters( 'ttf_foundry_slider_metabox_callback_args', null )
		);
	}

	/**
	 * Display the metabox.
	 *
	 * @since 0.1
	 *
	 * @param  WP_Post    $post    The current post object.
	 * @param  array      $args    Array of metabox arguments.
	 * @return void
	 */
	public function display_foundry_slider_metabox( $post, $args ) {
		$is_featured_checked = get_post_meta( $post->ID, ttf_get_foundry_slider()->meta_key, true );

		do_action( 'ttf_foundry_slider_before_metabox_content', $post, $args );
	?>
        <input type="checkbox" id="<?php echo esc_attr( ttf_get_foundry_slider()->meta_key ); ?>" name="<?php echo esc_attr( ttf_get_foundry_slider()->meta_key ); ?>" value="1" <?php checked( $is_featured_checked ); ?>/>

		<label for="<?php echo esc_attr( ttf_get_foundry_slider()->meta_key ); ?>">
			<?php echo apply_filters( 'ttf_foundry_slider_checkbox_label', __( 'Show in featured slider', 'snap' ) ); ?>
        </label>
	<?php
		do_action( 'ttf_foundry_slider_after_metabox_content', $post, $args );
		wp_nonce_field( 'save', 'ttf-foundry-slider-input' );
	}

	/**
	 * Save the ttf_get_foundry_slider()->meta_key meta value.
	 *
	 * In addition to saving post meta and in order to make this plugin as performant as possible, cache the post ids
	 * for featured slider posts when a post is updated. This should nearly guarantee that the slider does not need a
	 * heavy front end query in order to determine the post ids for the featured slider posts.
	 *
	 * @since 0.1
	 *
	 * @param  int        $post_id    Current post ID.
	 * @param  WP_Post    $post       Current post object.
	 * @return void
	 */
	public function save_post( $post_id, $post ) {
		$display_on_post_types = apply_filters( 'tff_foundry_slider_display_on_post_types', array( 'post' ) );

		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE )
			return;

		if ( ! in_array( $post->post_type, $display_on_post_types ) )
			return;

		if ( ! isset( $_POST['ttf-foundry-slider-input'] ) || ! wp_verify_nonce( $_POST['ttf-foundry-slider-input'], 'save' ) )
			return;

		if ( ! current_user_can( 'edit_' . $post->post_type, $post_id ) )
			return;

		// Only acceptable value is 1; all other values will lead to the meta value being deleted.
		if ( isset( $_POST[ ttf_get_foundry_slider()->meta_key ] ) && 1 == $_POST[ ttf_get_foundry_slider()->meta_key ] )
			update_post_meta( $post_id, ttf_get_foundry_slider()->meta_key, 1 );
		else
			delete_post_meta( $post_id, ttf_get_foundry_slider()->meta_key );

		ttf_get_featured_slider_query( true );
	}

	/**
	 * A simple wrapper for regenerating the slider query.
	 *
	 * This is a wrapper function that is helpful for attaching to hooks as a callback function. It simply acts as a
	 * wrapper for self::get_featured_slider_query that sends the "true" argument to force regenerate the query.
	 *
	 * @since  0.1
	 * @return void
	 */
	public function regenerate_slider_query_wrapper() {
		ttf_get_featured_slider_query( true );
	}
}

/**
 * Public accessor for the single TTF_Foundry_Slider instance.
 *
 * @since  0.1
 * @return TTF_Foundry_Slider_Post_Meta
 */
function ttf_get_foundry_slider_post_meta() {
	return TTF_Foundry_Slider_Post_Meta::instance();
}

add_action( 'admin_init' , 'ttf_get_foundry_slider_post_meta' );

endif;