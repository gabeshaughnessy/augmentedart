<?php
/**
 * @package Snap
 */

if ( ! class_exists( 'Snap_Attached_Posts' ) ) :
/**
 * The Snap_Attached_Posts class defines functionality for attaching posts to a page.
 *
 * Both the homepage template and the portfolio page template need attached posts for their designs to be fully realized.
 * This class allows for attaching posts to a page via meta data.
 *
 * A metabox is added to the page edit screen that displays recent posts to choose to attach to the page. The user can
 * also search via an AJAX autocomplete interface to find posts to attach to the page. Once posts are chosen for the
 * page, the display order can be changed through a drag and drop interface.
 *
 * Note that this is a class that can be instantiated to register a new attached posts relationship. Doing so takes the
 * form of:
 *
 *     new Snap_Attached_Posts(
 *         'snap_homepage_posts',  // Unique ID to identify this attached posts relationship
 *         array(                  // Post type to set this up for
 *             'page',
 *         ),
 *         array(                  // Template in which the metabox is activated
 *             'homepage.php',
 *         ),
 *         array(                  // Labels for defining unique output for the relationship
 *             'meta_box_title' => __( 'Featured Posts', 'snap' ),
 *         )
 *     );
 *
 * @since 1.0.
 */
class Snap_Attached_Posts {
	/**
	 * The unique string to identify items related to this instance.
	 *
	 * @since 1.0.
	 *
	 * @var   string    Prefixed, unique string.
	 */
	public $key = '';

	/**
	 * Templates to apply it to.
	 *
	 * @since 1.0.
	 *
	 * @var   array    Array of templates with .php extensions.
	 */
	public $templates = array();

	/**
	 * Post types to apply to.
	 *
	 * @since 1.0.
	 *
	 * @var   array    Post type to activate the metabox on.
	 */
	public $post_types = array();

	/**
	 * Labels to apply to various parts of the metabox.
	 *
	 * @since 1.0.
	 *
	 * @var   array    Array of strings that are applied to different places. Labels should be translatable.
	 */
	public $labels = array();

	/**
	 * Construct the class by validating/sanitizing data and initiating actions.
	 *
	 * @since  1.0.
	 *
	 * @param  string                 $key           Prefixed, unique string.
	 * @param  array                  $post_types    Post type to activate the metabox on.
	 * @param  array                  $templates     Array of templates with .php extensions.
	 * @param  array                  $labels        Array of strings that are applied to different places. Labels should be translatable.
	 * @return Snap_Attached_Posts
	 */
	public function __construct( $key, $post_types, $templates, $labels ) {
		// Sanitize $key
		$this->key = sanitize_key( $key );

		// Validate the post types
		$valid_post_types = array();
		foreach ( $post_types as $post_type ) {
			if ( in_array( $post_type, get_post_types() ) ) {
				$valid_post_types[] = $post_type;
			}
		}

		// Set the instance variable
		$this->post_types = $valid_post_types;

		// Clean the post types
		$clean_templates = array();
		foreach ( $templates as $template ) {
			$clean_template = $this->clean_template( $template );
			if ( ! empty( $clean_template ) ) {
				$clean_templates[] = $this->clean_template( $template );
			}
		}

		// Set the instance variable
		$this->templates = $clean_templates;

		// Provide defaults for the labels. Sanitization will be done at the time of printing the labels
		$default_labels = array(
			'meta_box_title'     => __( 'Attached Posts', 'snap' ),
			'selected_posts'     => __( 'Selected Posts', 'snap' ),
			'no_current_posts'   => __( 'No posts currently associated with this page.', 'snap' ),
			'choose_posts'       => __( 'Choose Posts', 'snap' ),
			'recent_posts'       => __( 'Recent Posts', 'snap' ),
			'search_posts'       => __( 'Search', 'snap' ),
			'no_available_posts' => __( 'No posts available', 'snap' ),
		);
		$default_labels = apply_filters( 'snap_attached_posts_label_defaults', $default_labels, $key, $post_types, $labels );
		$merged_labels  = wp_parse_args( $labels, $default_labels );

		// Set the instance variable
		$this->labels = $merged_labels;

		// Initiate actions
		$this->init_actions();
	}

	/**
	 * Add the WordPress actions needed.
	 *
	 * @since  1.0.
	 *
	 * @return void
	 */
	public function init_actions() {
		if ( is_admin() && $this->have_valid_data() ) {
			add_action( 'add_meta_boxes', array( $this, 'add_meta_boxes' ) );
			add_action( 'admin_enqueue_scripts', array( $this, 'admin_enqueue_scripts' ) );
			add_action( 'save_post', array( $this, 'save_post' ) );
		}
	}

	/**
	 * Add a meta box to each post type specified.
	 *
	 * @since  1.0.
	 *
	 * @return void
	 */
	public function add_meta_boxes() {
		// Add a meta box to each post_type edit page
		foreach ( $this->post_types as $post_type ) {
			add_meta_box(
				$this->key,
				$this->labels['meta_box_title'],
				array( $this, 'display_meta_box' ),
				$post_type,
				'side'
			);
		}
	}

	/**
	 * Display the metabox.
	 *
	 * @since  1.0.
	 *
	 * @param  WP_Post    $post_local    A WP_Post object for the current post.
	 * @return void
	 */
	public function display_meta_box( $post_local ) {
		// Save the original post so we can reset it if necessary
		global $post;
		$original_post = $post;

		// Get the current vals
		$current_posts     = get_post_meta( $post_local->ID, $this->key, true );
		$current_posts_val = ( ! empty( $current_posts ) ) ? implode( ',', $current_posts ) : '';

		// Set up the query to echo out the currently attached posts
		if ( ! empty( $current_posts ) ) {
			// If not running 3.5 (when "edit_form_image_editor" was introduced) or above, provide sort by "post__in" support
			if ( ! function_exists( 'edit_form_image_editor' ) ) {
				add_filter( 'posts_orderby', 'snap_sort_query_by_post_in', 10, 2 );
			}

			// Query for posts
			$current_posts_query = new WP_Query(
				array(
					'post__in'       => $current_posts,
					'posts_per_page' => 99,
					'orderby'        => 'post__in'
				)
			);

			// Remove the back compat support for by post__in sort. Removing for all versions is ok.
			remove_filter( 'posts_orderby', 'snap_sort_query_by_post_in', 10, 2 );
		}

		// Grab the latest posts
		$args = array(
			'posts_per_page' => 10,
		);

		// Filter out currently associated posts if necessary
		if ( ! empty( $current_posts ) ) {
			$args['post__not_in'] = $current_posts;
		}

		// Add a filter to modify this query
		$args = apply_filters( 'snap_recent_posts_in_chooser_args', $args, $post_local->ID, $this );

		// Query
		$latest_posts = new WP_Query( $args );
	?>
		<p>
			<strong><?php echo esc_html( $this->labels['selected_posts'] ); ?></strong>
		</p>
		<div class="snap-attached-posts">
			<?php if ( ! empty( $current_posts ) && isset( $current_posts_query ) && is_a( $current_posts_query, 'WP_Query' ) && $current_posts_query->have_posts() ) : ?>
				<?php while ( $current_posts_query->have_posts() ) : $current_posts_query->the_post(); ?>
					<li title="<?php esc_attr_e( 'Drag-and-drop post into order' , 'snap' ); ?>" id="<?php echo esc_attr( $this->key ); ?>-<?php the_ID(); ?>" data-id="<?php the_ID(); ?>">
						<?php the_title(); ?>
						<a title="<?php esc_attr_e( 'Remove post', 'snap' ); ?>" class="snap-remove-item" href="#">
							<?php _e( '(Remove)', 'snap' ); ?>
						</a>
					</li>
				<?php endwhile; ?>
			<?php endif; ?>
		</div>

		<p class="snap-no-posts"<?php if ( ! empty( $current_posts ) ) : ?> style="display:none;"<?php endif; ?>>
			<?php echo esc_html( $this->labels['no_current_posts'] ); ?>
		</p>

		<p>
			<strong>
				<?php echo esc_html( $this->labels['choose_posts'] ); ?>
			</strong>
		</p>

		<div class="snap-post-chooser">
			<ul id="attach-posts-tabs" class="category-tabs">
				<li class="tabs">
					<a class="tab-link" href="#posts-recent">
						<?php echo esc_html( $this->labels['recent_posts'] ); ?>
					</a>
				</li>
				<li class="hide-if-no-js">
					<a class="tab-link" href="#posts-search">
						<?php echo esc_html( $this->labels['search_posts'] ); ?>
					</a>
				</li>
			</ul>
			<div id="posts-recent" class="tabs-panel snap-active-tab">
				<ul>
					<?php if ( $latest_posts->have_posts() ) : ?>
						<?php while ( $latest_posts->have_posts() ) : $latest_posts->the_post(); ?>
							<li class="recent-post">
								<a class="snap-recent-post" title="<?php esc_attr_e( 'Add post', 'snap' ); ?>" href="#" data-id="<?php the_ID(); ?>" data-title="<?php the_title_attribute(); ?>">
									<?php the_title(); ?>
								</a>
							</li>
						<?php endwhile; ?>
					<?php else : ?>
						<li>
							<?php echo esc_html( $this->labels['no_available_posts'] ); ?>
						</li>
					<?php endif; ?>
				</ul>
			</div>
			<div id="posts-search" class="tabs-panel snap-inactive-tab">
				<p id="<?php echo esc_attr( $this->key ); ?>-input-parent" class="snap-input-parent">
					<label for="<?php echo esc_attr( $this->key ); ?>-input">
						<input id="<?php echo esc_attr( $this->key ); ?>-input" class="snap-apa-input widefat" type="text" autofocus="autofocus" placeholder="<?php esc_attr_e( 'Search for posts', 'snap' ); ?>" />
					</label>
				</p>
			</div>
		</div>

		<!-- Hidden element to track IDs of attached posts -->
		<input type="hidden" value="<?php echo esc_attr( $current_posts_val ); ?>" class="snap-current-posts" name="<?php echo esc_attr( $this->key ); ?>-current-posts" />
	<?php
		wp_nonce_field( $this->key . '-save', $this->key . '-nonce' );

		// We've modified the global post variable, so set it back here.
		$post = $original_post;
	}

	/**
     * Enqueue the necessary JS, but only when needed.
	 *
	 * @since  1.0.
	 *
	 * @return void
	 */
	public function admin_enqueue_scripts() {
		global $pagenow;

		// Get the post type regardless of whether this is a new or edited post
		$screen_post_type = ( isset( $_GET['post_type'] ) ) ? $_GET['post_type'] : get_post_type();

		// Only add the JS/CSS if necessary
		if ( in_array( $pagenow, array( 'post-new.php', 'post.php' ) ) && in_array( $screen_post_type, $this->post_types ) ) {
			// Enqueue the JS that controls the posts chooser
			wp_enqueue_script(
				'snap-attached-posts',
				get_template_directory_uri() . '/includes/javascripts/attached-posts' . SNAP_SUFFIX . '.js',
				array( 'jquery-ui-autocomplete', 'jquery-ui-sortable' ),
				SNAP_VERSION,
				true
			);

			// Add data for the script
			$data = array(
				'action'               => 'snap_apa',
				'nonce'                => wp_create_nonce( 'snap_apa' ),
				'removePostsTitleAttr' => __( 'Remove post', 'snap' ),
				'removePostsLinkText'  => __( '(Remove)', 'snap' ),
			);

			/**
			 * This method can be called multiple times. The localization data only needs to be printed once. If this
			 * function runs twice, it gets printed both times. This does not cause an error, but is rather sloppy.
			 * Before calling the localization function, check if it has already been added. Note that this code
			 * carefully checks if the $wp_scripts method are available before making the check. The API is a bit
			 * fragile and has changed a lot over time. It is preferable for the localization function to be printed
			 * twice than an error or notice thrown due to an undefined method.
			 */
			global $wp_scripts;
			$has_data = ( ! method_exists( $wp_scripts, 'get_data' ) || false === $wp_scripts->get_data( 'snap-attached-posts', 'data' ) )
				? false
				: true;

			if ( ! $has_data ) {
				wp_localize_script(
					'snap-attached-posts',
					'snapData',
					$data
				);
			}

			// Add the CSS
			wp_enqueue_style(
				'snap-attached-posts',
				get_template_directory_uri() . '/includes/stylesheets/attached-posts.css',
				array(),
				SNAP_VERSION
			);
		}
	}

	/**
	 * Save the post data.
	 *
	 * @since  1.0.
	 *
	 * @param  int    $post_id    The current post ID.
	 * @return void
	 */
	public function save_post( $post_id ) {
		// Don't do anything during autosave
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE )
			return;

		// Check the nonce
		if ( ! isset( $_POST[ $this->key . '-nonce' ] ) || ! wp_verify_nonce( $_POST[ $this->key . '-nonce' ], $this->key . '-save' ) )
			return;

		// Check permissions
		if ( 'page' === $_POST['post_type'] ) {
			if ( ! current_user_can( 'edit_page', $post_id ) ) {
				return;
			}
		} elseif ( ! current_user_can( 'edit_post', $post_id ) ) {
			return;
		}

		// Get the key for the value in the $_POST var
		$current_posts_key = $this->key . '-current-posts';

		// If the value is not available, return early
		if ( ! isset( $_POST[ $current_posts_key ] ) )
			return;

		$posts = explode( ',', $_POST[ $current_posts_key ] );

		// Validate that each post id is a valid post before continuing
		$clean_ids = array();
		foreach ( $posts as $id ) {
			// No need to continue if the value isn't numeric
			if ( is_numeric( $id ) ) {
				$this_post = get_post( $id );

				if ( ! is_null( $this_post ) ) {
					$clean_ids[] = absint( $this_post->ID );
				}
			}
		}

		// Save the IDs if available, otherwise delete the post meta
		if ( ! empty( $clean_ids ) ) {
			update_post_meta( $post_id, $this->key, $clean_ids );
		} else {
			delete_post_meta( $post_id, $this->key );
		}

		// A lovely little hook to run something on update
		do_action( 'snap_save_attached_posts', $post_id, $this->key, $this->post_types, $this->templates, $clean_ids );
	}

	/**
	 * Sanitize the name of the template.
	 *
	 * Assumes name is {a-z0-9\-_}.php.
	 *
	 * @since  1.0.
	 *
	 * @param  string    $slug    The dirty slug.
	 * @return string             The clean slug.
	 */
	public function clean_template( $slug ) {
		// Expecting PHP file. Separate the name by the . in the file. Note that this excludes files with dots in it.
		list( $name, $extension ) = explode( '.', $slug );

		// If the extension is not "php", something is wrong; abort.
		if ( 'php' !== $extension ) {
			return '';
		} else {
			// Clean up the name
			$clean_name = sanitize_key( $name );

			// Put it back together
			$full_name = $clean_name . '.' . 'php';
			return $full_name;
		}
	}

	/**
	 * Test to see if the necessary data is available for the class.
	 *
	 * @since  1.0.
	 *
	 * @return bool    True if id, post_types, templates, and labels are set. False if any one of them is not.
	 */
	public function have_valid_data() {
		if ( empty( $this->key ) || empty( $this->post_types ) || empty( $this->templates ) || empty( $this->labels ) ) {
			return false;
		} else {
			return true;
		}
	}
}
endif;

if ( ! function_exists( 'snap_attached_posts_autocomplete_data' ) ) :
/**
 * Callback for handling autocomplete request.
 *
 * @since  1.0.
 *
 * @return void
 */
function snap_attached_posts_autocomplete_data() {
	// Verify request
	if ( check_ajax_referer( 'snap_apa', 'snap_apa_nonce' ) && isset( $_POST['snap_apa_term'] ) ) {
		// Search for the items
		$query = new WP_Query(
			array(
				'posts_per_page'         => 50,
				'no_found_rows'          => true,
				'update_post_meta_cache' => false,
				'update_post_term_cache' => false,
				's'                      => $_POST[ 'snap_apa_term' ], // Term is escaped by WP_Query
			)
		);

		$formatted_results = array();

		// Remove the &nbsp; that will otherwise be displayed
		$filter_existed = remove_filter( 'the_title', 'widont' );

		// Loop through the items and place needed data in a nice little array
		if ( $query->have_posts() ) {
			while ( $query->have_posts() ) {
				$query->the_post();

				// Get the title and make sure that text is displayed even when there is no title
				$title = get_the_title();
				$title = ( empty( $title ) ) ? '[no title]' : $title;

				// Group the results
				$formatted_results[] = array(
					'label' => $title,
					'value' => get_the_ID(),
				);
			}
			wp_reset_postdata();
		}

		// Reinstate widont for good measure
		if ( $filter_existed ) {
			add_filter( 'the_title', 'widont' );
		}

		// Send the json encoded data
		wp_send_json( $formatted_results );
	}
	die();
}
endif;

add_action('wp_ajax_snap_apa', 'snap_attached_posts_autocomplete_data');