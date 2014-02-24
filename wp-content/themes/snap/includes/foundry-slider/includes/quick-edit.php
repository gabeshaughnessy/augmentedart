<?php

if ( ! class_exists( 'TTF_Foundry_Slider_Quick_Edit' ) ) :

/**
 * Defines functionality related to the Quick Edit feature.
 *
 * @since 0.1
 */
class TTF_Foundry_Slider_Quick_Edit {

	/**
	 * Holds the single instance of TTF_Foundry_Slider_Quick_Edit.
	 *
	 * @since 0.1
	 * @var   TTF_Foundry_Slider_Quick_Edit
	 */
	private static $instance;

	/**
	 * Instantiates or returns the one TTF_Foundry_Slider_Quick_Edit instance.
	 *
	 * @since  0.1
	 * @return TTF_Foundry_Slider_Quick_Edit
	 */
	public static function instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new TTF_Foundry_Slider_Quick_Edit();
			self::$instance->_init();
		}
		return self::$instance;
	}

	/**
	 * Dummy constructor.
	 *
	 * @since  0.1
	 * @return TTF_Foundry_Slider_Quick_Edit
	 */
	private function __construct() {}

	/**
	 * Sets up variables and add actions and filters.
	 *
	 * @since  0.1
	 * @return void
	 */
	private function _init() {
		add_filter( 'manage_post_posts_columns', array( $this, 'manage_post_posts_columns' ) );
		add_action( 'manage_posts_custom_column', array( $this, 'manage_posts_custom_column' ), 10, 2 );

		add_action( 'quick_edit_custom_box', array( $this, 'quick_edit_custom_box' ), 10, 2 );
		add_action( 'admin_enqueue_scripts', array( $this, 'admin_enqueue_scripts' ) );
	}

	/**
	 * Adds column to denote if the post is in the slider or not.
	 *
	 * @since 0.1
	 *
	 * @param  array    $columns    List of table columns.
	 * @return array                Modified list of table columns.
	 */
	public function manage_post_posts_columns( $columns ) {
		$columns['ttf-foundry-slider'] = apply_filters( 'ttf_foundry_slider_column_label', __( 'Featured Slider', 'snap' ) );
		return $columns;
	}

	/**
	 * Value for and individual post's "In Slider" column.
	 *
	 * @since 0.1
	 *
	 * @param  string    $column_name    Name of the current column.
	 * @param  int       $id             ID of the current post.
	 * @return void
	 */
	public function manage_posts_custom_column( $column_name, $id ) {
		if ( 'ttf-foundry-slider' !== $column_name )
			return;

		if ( ttf_is_in_featured_slider( $id ) )
			echo apply_filters( 'ttf_foundry_slider_status', __( 'Featured', 'snap' ) );
	}

	/**
	 * Display input for toggling featured slider.
	 *
	 * @since 0.1
	 *
	 * @param  string    $column_name    Name of the current column.
	 * @param  string    $post_type      The current post type.
	 * @return void
	 */
	public function quick_edit_custom_box( $column_name, $post_type ) {
		if ( 'ttf-foundry-slider' !== $column_name )
			return;
	?>
		<fieldset class="inline-edit-col-right">
			<div class="inline-edit-col">
				<div class="inline-edit-group">
					<label class="alignleft">
						<input type="checkbox" name="<?php echo esc_attr( ttf_get_foundry_slider()->meta_key ); ?>" class="ttf-foundry-slider-input" value="1">
							<span class="checkbox-title">
								<?php echo apply_filters( 'ttf_foundry_slider_quick_edit_box_checkbox_label', __( 'Show in featured slider', 'snap' ) ); ?>
							</span>
					</label>
					<?php wp_nonce_field( 'save', 'ttf-foundry-slider-input' ); ?>
				</div>
			</div>
		</fieldset>
	<?php
	}

	/**
	 * Add JS to prefill the slider values in the Quick Edit form.
	 *
	 * @since  0.1
	 * @return void
	 */
	public function admin_enqueue_scripts() {
		$current_screen = get_current_screen();

		// Only add to the post listing screen
		if ( 'edit' !== $current_screen->base )
			return;

		$display_on_post_types = apply_filters( 'tff_foundry_slider_display_on_post_types', array( 'post' ) );

		// Only add to whitelisted post types
		if ( ! in_array( $current_screen->post_type, $display_on_post_types ) )
			return;

		wp_enqueue_script( 'ttf-foundry-slider-quick-edit', ttf_get_foundry_slider()->plugin_url . '/js/quick-edit.js', array( 'jquery' ), '0.1', true );
	}
}

/**
 * Public accessor for the single TTF_Foundry_Slider instance.
 *
 * @since  0.1
 * @return TTF_Foundry_Slider_Quick_Edit
 */
function ttf_get_foundry_slider_quick_edit() {
	return TTF_Foundry_Slider_Quick_Edit::instance();
}

add_action( 'admin_init', 'ttf_get_foundry_slider_quick_edit' );

endif;