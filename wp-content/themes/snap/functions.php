<?php
/**
 * @package Snap
 */

/**
 * The current version of Snap.
 *
 * @since 1.0.
 */
define( 'SNAP_VERSION', '1.0.9' );

/**
 * Define the suffix used for JS.
 *
 * @since 1.0.1.
 */
if ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) {
	define( 'SNAP_SUFFIX', '' );
} else {
	define( 'SNAP_SUFFIX', '.min' );
}

/**
 * Set the theme's content width.
 */
if ( ! isset( $content_width ) ) {
	$content_width = 651;
}

if ( ! function_exists( 'snap_setup' ) ) :
/**
 * Setup theme basics on "after_theme_setup".
 *
 * @since  1.0.
 *
 * @return void
 */
function snap_setup() {
	global $content_width;

	// The the theme's text domain
	load_theme_textdomain( 'snap', get_template_directory() . '/languages' );

	// Include functionality files
	require( get_template_directory() . '/functions/homepage-featured-area.php' );
	require( get_template_directory() . '/functions/homepage-selected-posts.php' );
	require( get_template_directory() . '/functions/logo.php' );
	require( get_template_directory() . '/functions/portfolio-selected-posts.php' );
	require( get_template_directory() . '/functions/options-shared.php' );
	require( get_template_directory() . '/functions/options.php' );

	// Load "plugins"
	require( get_template_directory() . '/includes/foundry-slider/foundry-slider.php' );
	require( get_template_directory() . '/includes/tinymce-plugin/tinymce-plugin.php' );

	// Add the theme's editor style
	add_editor_style( 'includes/stylesheets/editor-style.css' );

	// Add the RSS links
	add_theme_support( 'automatic-feed-links' );

	// Register the nav menu
	register_nav_menu( 'primary', __( 'Primary Menu', 'snap' ) );

	// Add post thumbnail support for posts and pages
	add_theme_support( 'post-thumbnails' );
	set_post_thumbnail_size( $content_width, 9999 );

	// Allow the user to natively update the background
	add_theme_support( 'custom-background' );

	// Add support for Jetpack's Infinite Scroll
	add_theme_support(
		'infinite-scroll',
		array(
			'container'      => 'content',
			'render'         => 'snap_infinite_scroll_render',
			'footer'         => false,
			'wrapper'        => false,
			'posts_per_page' => get_option( 'posts_per_page' ),
		)
	);

	// Allow pages to use the excerpt. This is needed for some page templates in Snap.
	add_post_type_support( 'page', 'excerpt' );

	// Set up the needed thumbnail sizes
	add_image_size( 'snap-full-width', 994, 9999 );
	add_image_size( 'snap-sidebar', 292, 9999 );
	add_image_size( 'snap-grid', 600, 450, true );

	// Initiate attached posts
	if ( is_admin() ) {
		/**
		 * The library only needs to be available in the admin. It sets up metaboxes and save routines. On the front end,
		 * data is only ever accessed from metadata and this class is unnecessary.
		 */
		require( get_template_directory() . '/functions/attached-posts.php' );

		// Setup the homepage attached posts
		new Snap_Attached_Posts(
			'snap_homepage_posts',
			array(
				'page',
			),
			array(
				'homepage.php',
			),
			array(
				'meta_box_title' => __( 'Selected Posts', 'snap' ),
			),
			array(
				'post',
				'page'
			)
		);

		// Setup the portfolio attached posts
		new Snap_Attached_Posts(
			'snap_portfolio_posts',
			array(
				'page',
			),
			array(
				'portfolio.php',
			),
			array(
				'meta_box_title' => __( 'Portfolio Posts', 'snap' ),
			),
			array(
				'post'
			)
		);
	}

	/**
	 * The Foundry Slider component used in the theme assumes featured sliders are shown on the posts page. The aim is
	 * to never have two posts show twice on the same view. Since the featured slider in Snap is shown on the homepage,
	 * there is no need to remove featured posts from the posts page and this removes that.
	 */
	remove_filter( 'pre_get_posts', array( ttf_get_foundry_slider(), 'remove_featured_slider_posts' ) );
}
endif;

add_action( 'after_setup_theme', 'snap_setup' );

if ( ! function_exists( 'snap_infinite_scroll_render' ) ) :
/**
 * Callback function for rendering posts with Jetpack's Infinite Scroll.
 *
 * @since  1.0.
 *
 * @return void
 */
function snap_infinite_scroll_render() {
	while ( have_posts() ) {
		the_post();
		get_template_part( '_post-content' );
	}
}
endif;

if ( ! function_exists( 'snap_enqueue_scripts' ) ) :
/**
 * Add theme styles and scripts.
 *
 * @since  1.0.
 *
 * @return void
 */
function snap_enqueue_scripts() {
	// Only dealing with frontend scripts
	if ( is_admin() )
		return;

	// Collector for dependent scripts since some are conditionally loaded
	$deps = array();

	// Only load the web font if the user hasn't disabled it
	if ( true !== get_theme_mod( 'disable-web-font' ) ) {
		// Load the Google Fonts
		$protocol = is_ssl() ? 'https' : 'http';
		wp_enqueue_style(
			'snap-fonts',
			$protocol . '://fonts.googleapis.com/css?family=Merriweather:400,900',
			array(),
			SNAP_VERSION
		);

		$deps[] = 'snap-fonts';
	}

	// Add the main "style.css" file
	wp_enqueue_style(
		'snap-style',
		get_bloginfo( 'stylesheet_url' ),
		$deps,
		SNAP_VERSION
	);

	// Add the print styles
	wp_enqueue_style(
		'snap-print-style',
		get_template_directory_uri() . '/includes/stylesheets/print-styles.css',
		array( 'snap-style' ),
		SNAP_VERSION,
		'print'
	);

	// Define the dependencies for the main theme JS
	$deps = array();

	// Only load FitVids on pages or posts
	if ( is_page() || is_single() ) {
		// FitVids script
		wp_enqueue_script(
			'snap-fitvids',
			get_template_directory_uri() . '/includes/javascripts/fitvids/jquery.fitvids' . SNAP_SUFFIX . '.js',
			array( 'jquery' ),
			SNAP_VERSION,
			true
		);

		$deps[] = 'snap-fitvids';
	}

	// Responsive nav script
	wp_enqueue_script(
		'snap-responsive-nav',
		get_template_directory_uri() . '/includes/javascripts/responsive-nav/responsive-nav' . SNAP_SUFFIX . '.js',
		array( 'jquery' ),
		SNAP_VERSION,
		true
	);

	$deps[] = 'snap-responsive-nav';

	// Send args to the script
	wp_localize_script(
		'snap-responsive-nav',
		'snapResponsiveNavOptions',
		snap_get_responsive_nav_options()
	);

	// Load the library to truncate and add ellipsises to grid items only if necessary
	if ( is_page_template( 'homepage.php' ) || is_home() ) {
		// Debounce script
		wp_enqueue_script(
			'snap-debounce',
			get_template_directory_uri() . '/includes/javascripts/debounce/debounce' . SNAP_SUFFIX . '.js',
			array( 'jquery' ),
			SNAP_VERSION,
			true
		);

		$deps[] = 'snap-debounce';

		// Dotdotdot script
		wp_enqueue_script(
			'snap-dotdotdot',
			get_template_directory_uri() . '/includes/javascripts/dotdotdot/jquery.dotdotdot' . SNAP_SUFFIX . '.js',
			array( 'jquery' ),
			SNAP_VERSION,
			true
		);

		$deps[] = 'snap-dotdotdot';
	}

	// Primary theme JavaScript
	wp_enqueue_script(
		'snap-javascript',
		get_template_directory_uri() . '/javascripts/theme.js',
		$deps,
		SNAP_VERSION,
		true
	);

	// Support threaded comment replies
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
endif;

add_action( 'wp_enqueue_scripts', 'snap_enqueue_scripts' );

if ( ! function_exists( 'snap_get_responsive_nav_options' ) ) :
/**
 * Returns all of the nav options or a single one.
 *
 * @since  1.0.3
 *
 * @param  bool|string              $which    The option to get or false for all options
 * @return string|int|bool|array              All of the options or just a single option.
 */
function snap_get_responsive_nav_options( $which = false ) {
	// Set the default options for the responsive nav
	$responsive_nav_options = array(
		'animate'      => true,
		'transition'   => 400,
		'label'        => __( 'Show Menu', 'snap' ),
		'insert'       => 'before',
		'customToggle' => 'mobile-toggle',
		'openPos'      => 'relative',
		'jsClass'      => 'js',

		// This is not part of Responsive Nav, but is sent to the JS for toggling a translatable label
		'closedLabel'  => __( 'Hide Menu', 'snap' ),
	);

	// Allow dev to customize the options
	global $post;
	$responsive_nav_options = apply_filters( 'snap_responsive_nav_options', $responsive_nav_options, ( ! is_null( $post ) ) ? get_the_ID() : 0 );

	// Return either one of the options or all of them
	if ( false !== $which && isset( $responsive_nav_options[ $which ] ) ) {
		return $responsive_nav_options[ $which ];
	} else {
		return $responsive_nav_options;
	}
}
endif;

if ( ! function_exists( 'snap_register_sidebar' ) ) :
/**
 * Register the sidebar.
 *
 * @since  1.0.
 *
 * @return void
 */
function snap_register_sidebar() {
	register_sidebar(
		array(
			'name'          => __( 'Sidebar', 'snap' ),
			'id'            => 'snap-sidebar',
			'description'   => __( 'When widgets are used, this sidebar appears on posts and the pages using the Default Template.', 'snap' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget'  => '</div>',
			'before_title'  => '<h3 class="widgettitle">',
			'after_title'   => '</h3>',
		)
	);
}
endif;

add_action( 'widgets_init', 'snap_register_sidebar' );

if ( ! function_exists( 'snap_comment' ) ) :
/**
 * Callback function for writing the comments.
 *
 * @since  1.0.
 *
 * @param  string    $comment    The comment text.
 * @param  array     $args       Arguments to adjust the output.
 * @param  int       $depth      Comment depth.
 * @return void
 */
function snap_comment( $comment, $args, $depth ) {
	$GLOBALS['comment'] = $comment; ?>
	<li  id="comment-<?php comment_ID(); ?>" <?php comment_class(); ?>>
		<?php echo get_avatar( $comment, $size = '188' ); ?>
		<article class="respond-body">
			<header class="comment-author vcard">
				<span class="fn comment-name"><?php comment_author_link(); ?></span>
				<?php
					printf(
						'<a title="%1$s" href="%2$s"><time class="comment-date post-detail" datetime="%3$s">%4$s</time></a>',
						esc_attr( __( 'Permalink', 'snap' ) ),
						esc_url( get_comment_link( $comment->comment_ID ) ),
						get_comment_time( 'c' ),
						get_comment_date()
					);
				?>
			</header>

			<?php if ( '0' === $comment->comment_approved ) : ?>
				<p><?php _e( 'Your comment is awaiting moderation.', 'snap' ); ?></p>
			<?php endif ?>

			<section class="comment-text">
				<?php comment_text(); ?>
			</section>

			<?php comment_reply_link( array_merge( $args, array( 'depth' => $depth, 'max_depth' => $args['max_depth'] ) ) ); ?>

		</article>
	<?php
}
endif;

if ( ! function_exists( 'snap_comment_form_defaults' ) ) :
/**
 * Change the comment form defaults.
 *
 * @since  1.0.
 *
 * @param  array    $defaults    The default values.
 * @return array                 The modified defaults.
 */
function snap_comment_form_defaults( $defaults ) {
	// Set basic fields
	$defaults['comment_field']        = '<fieldset><label for="comment" class="comment-field">' . _x( 'Comment', 'noun', 'snap' ) . '</label><textarea id="comment" class="blog-textarea respond-type" name="comment" rows="10" aria-required="true" tabindex="4"></textarea></fieldset>';
	$defaults['comment_notes_before'] = '';
	$defaults['comment_notes_after']  = sprintf(
		'<p><span class="guidelines respond-note">%1$s</span>' . "\n" . '</p>',
		__( 'Basic <abbr title="Hypertext Markup Language">HTML</abbr> is allowed. Your email address will not be published.', 'snap' )
	);

	// Get the generic field and commenter information for use with the form fields
	$field                = '<p><label for="%1$s" class="comment-field">%2$s</label><input class="text-input respond-type" type="text" name="%1$s" id="%1$s" value="%3$s" size="36" tabindex="%4$d" /></p>';
	$comment_author       = ( isset( $_POST['author'] ) ) ? trim( strip_tags( $_POST['author'] ) ) : null;
	$comment_author_email = ( isset( $_POST['email'] ) )  ? trim( $_POST['email'] ) : null;
	$comment_author_url   = ( isset( $_POST['url'] ) )    ? trim( $_POST['url'] ) : null;

	// Using information above, set the individual form fields
	$author_field = sprintf(
		$field,
		'author',
		__( 'Name <span class="required">(Required)</span>', 'snap' ),
		esc_attr( $comment_author ),
		1
	);

	$email_field = sprintf(
		$field,
		'email',
		__( 'Email <span class="required">(Required)</span>', 'snap' ),
		esc_attr( $comment_author_email ),
		2
	);

	$url_field = sprintf(
		$field,
		'url',
		__( 'Website', 'snap' ),
		esc_attr( $comment_author_url ),
		3
	);

	// Set the fields in the $defaults array
	$defaults['fields'] = array(
		'author' => $author_field,
		'email'  => $email_field,
		'url'    => $url_field,
	);

	return $defaults;
}
endif;

add_filter( 'comment_form_defaults', 'snap_comment_form_defaults' );

if ( ! function_exists( 'snap_page_title' ) ) :
/**
 * Adjust the page title based on context.
 *
 * @since  1.0.
 *
 * @param  string    $title    Current title value.
 * @return string              New value of the title.
 */
function snap_page_title( $title ) {
	// We don't want to affect RSS feeds
	if ( is_feed() )
		return $title;

	if ( is_front_page() ) {
		return get_bloginfo( 'name' );
	} elseif ( is_404() ) {
		return __( 'Page Not Found | ', 'snap' ) . get_bloginfo( 'name' );
	} elseif ( is_search() ) {
		return __( 'Search results | ', 'snap' ) . get_bloginfo( 'name' );
	} else {
		return trim( $title ) . ' | ' . get_bloginfo( 'name' );
	}
}
endif;

add_filter( 'wp_title', 'snap_page_title' );

if ( ! function_exists( 'snap_link_rel_next' ) ) :
/**
 * Add rel="prev" to prev links.
 *
 * @since  1.0.
 *
 * @param  string    $attr    Current attribute value.
 * @return string             New attribute value.
 */
function snap_link_rel_next( $attr ) {
	return implode( ' ', array( $attr, 'rel="next"' ) );
}
endif;

add_filter( 'next_posts_link_attributes', 'snap_link_rel_next' );

if ( ! function_exists( 'snap_link_rel_prev' ) ) :
/**
 * Add rel="prev" to prev links.
 *
 * @since  1.0.
 *
 * @param  string    $attr    Current attribute value.
 * @return string             New attribute value.
 */
function snap_link_rel_prev( $attr ) {
	return implode( ' ', array( $attr, 'rel="prev"' ) );
}
endif;

add_filter( 'previous_posts_link_attributes', 'snap_link_rel_prev' );

if ( ! function_exists( 'snap_wp_get_attachment_link' ) ) :
/**
 * Add a "rel" tag to the attachment link.
 *
 * Unfortunately, the *_image_link() functions do not allow you to easily alter the attachment link HTML (unless you
 * use RegEx or DOMElement, both of which are not recommended). As such, the link needs to be entirely reconstructed. In
 * order to do so, the "wp_get_attachment_link" needs to be filtered. This filter is necessary in order to get as much
 * of the original raw data as needed to regenerate the HTML. Note that this filter exits early if it is not likely the
 * theme that is calling the function.
 *
 * The majority of this function is taken directly from the "wp_get_attachment_link" function. From "// Get the post" to
 * "// Verify legit link text" is taken directly from the function, with the only changes being code standard updates.
 *
 * @since  1.0.
 *
 * @param  string        $output       The current output.
 * @param  string|int    $id           The attachment ID.
 * @param  string|int    $size         Size of the thumbnail, or a falsy value to not show thumbnail.
 * @param  bool          $permalink    Whether or not to include a link to the attachment.
 * @param  bool          $icon         Whether or not to include the icon.
 * @param  string        $text         Text to display in the link output.
 * @return string                      The modified HTML.
 */
function snap_wp_get_attachment_link( $output, $id, $size, $permalink, $icon, $text ) {
	/**
	 * Setting the "rel" tag and exiting early is dependent upon the text value that is sent to the filter. The text
	 * value can change due to translatable strings. When making the comparisons, it needs to be based on the translated
	 * string. Translate those strings here and use throughout.
	 */
	$translated_next = __( 'Next image', 'snap' );
	$translated_prev = __( 'Previous image', 'snap' );

	// Exit early if this is likely not the filtering function called by the theme.
	if ( ! in_array( $text, array( $translated_next, $translated_prev ) ) ) {
		return $output;
	}

	// Get the post
	$id    = intval( $id );
	$_post = get_post( $id );

	// If permalink is desired, use the attachment link
	if ( $permalink ) {
		$url = get_attachment_link( $_post->ID );
	}

	// Get the post title
	$post_title = esc_attr( strip_tags( $_post->post_title ) );

	// Get the text for the link
	if ( $text ) {
		$link_text = $text;
	} elseif ( $size && 'none' !== $size ) {
		$link_text = wp_get_attachment_image( $id, $size, $icon );
	} else {
		$link_text = '';
	}

	// Verify legit link text
	if ( '' === trim( $link_text ) ) {
		$link_text = $_post->post_title;
	}

	$rel = '';

	// Set the rel attribute based on the text value
	if ( $translated_prev === $text ) {
		$rel = 'prev';
	} elseif ( $translated_next === $text ) {
		$rel = 'next';
	}

	// Build the rel attribute
	$rel_text = ( ! empty( $rel ) ) ? ' rel="' . $rel . '"' : '';

	// Build the final link
	$output = '<a href="' . esc_url( $url ) . '" title="' . esc_attr( strip_tags( $post_title ) ) . '" ' . $rel_text . '>' . esc_html( $link_text ) . '</a>';

	// Provide a filter just in case
	return apply_filters( 'snap_wp_get_attachment_link', $output, $id, $size, $permalink, $icon, $text );
}
endif;

add_filter( 'wp_get_attachment_link', 'snap_wp_get_attachment_link', 10, 6 );

if ( ! function_exists( 'snap_excerpt_more' ) ) :
/**
 * Add custom excerpt more string.
 *
 * @since  1.0.
 *
 * @param  string    $more    Current attribute value.
 * @return string             New attribute value.
 */
function snap_excerpt_more( $more ) {
	return '&hellip;';
}
endif;

add_filter('excerpt_more', 'snap_excerpt_more');

if ( ! function_exists( 'snap_tag_cloud_widget' ) ) :
/**
 * Custom tag cloud font sizes.
 *
 * @since  1.0.
 *
 * @param  string    $args    Current attribute value.
 * @return string             New attribute value.
 */
function snap_tag_cloud_widget( $args ) {
	$args['largest']  = 1.33333; //24px
	$args['smallest'] = 0.83333; //15px
	$args['unit']     = 'rem';
	return $args;
}
endif;

add_filter( 'widget_tag_cloud_args', 'snap_tag_cloud_widget' );

if ( ! function_exists( 'snap_archives_title' ) ) :
/**
 * Print archive title depending on the archive context.
 *
 * @since  1.0.
 *
 * @return void
 */
function snap_archives_title() {
	if ( is_category() ) {
		printf( __( 'Posts from the <strong>%s</strong> category', 'snap' ), single_cat_title( '', false ) );
	} elseif ( is_tag() ) {
		printf( __( 'Posts tagged <strong>%s</strong>', 'snap' ), single_tag_title( '', false ) );
	} elseif ( is_day() ) {
		printf( __( 'Archive for <strong>%s</strong>', 'snap' ), get_the_time( 'F jS, Y' ) );
	} elseif ( is_month() ) {
		printf( __( 'Archive for <strong>%s</strong>', 'snap' ), get_the_time( 'F, Y' ) );
	} elseif ( is_year() ) {
		printf( __( 'Archive for <strong>%s</strong>', 'snap' ), get_the_time( 'Y' ) );
	} elseif ( is_author() ) {
		// In order for "get_the_author" to work, we need to call "the_post"
		the_post();

		printf( __( 'Posts by <strong>%s</strong>', 'snap' ), get_the_author() );

		// Rewind the posts to reset the loop
		rewind_posts();
	} elseif ( is_paged() ) {
		_e( 'Blog Archives', 'snap' );
	}
}
endif;

if ( ! function_exists( 'snap_add_menu_parent_class' ) ) :
/**
 * Add "snap-menu-parent-item" to any menu item that has children.
 *
 * Props to @tammyhart for the codex contribution below for determining how to add this class.
 *
 * @link   http://codex.wordpress.org/Function_Reference/wp_nav_menu#How_to_add_a_parent_class_for_menu_item
 *
 * @since  1.0.
 *
 * @param  array    $items    The menu items.
 * @return array              Modified menu items.
 */
function snap_add_menu_parent_class( $items ) {
	// Collect all menu items that are a parent
	$parents = array();
	foreach ( $items as $item ) {
		// If the item has a positive integer item parent, we have identified a parent item. Log it.
		if ( isset( $item->menu_item_parent ) && $item->menu_item_parent > 0 ) {
			$parents[] = $item->menu_item_parent;
		}
	}

	// Loop through each item and append the parent class if the item is a parent.
	foreach ( $items as $item ) {
		if ( in_array( $item->ID, $parents ) ) {
			// Add filter to change the class name.
			$item->classes[] = apply_filters( 'snap_add_menu_parent_class_name', 'snap-menu-parent-item', $item, $items );
		}
	}

	return $items;
}
endif;

add_filter( 'wp_nav_menu_objects', 'snap_add_menu_parent_class' );

if ( ! function_exists( 'snap_page_css_class' ) ) :
/**
 * Add "snap-menu-parent-item" to items with children in page nav menu.
 *
 * Brings parity to the nav menu and the page nav menu.
 *
 * @since  1.0.
 *
 * @param  array         $css_class       Array of classes applied to the item.
 * @param  string|int    $page            ID of the item.
 * @param  int           $depth           Level of nagivation for current item.
 * @param  array         $args            Args sent to the menu.
 * @param  string|int    $current_page    ID of the current page.
 * @return array                          Modified classes
 */
function snap_page_css_class( $css_class, $page, $depth, $args, $current_page ) {
	// Add the parent indicator if the item has children
	if ( $args['has_children'] ) {
		$css_class[] = 'snap-menu-parent-item';
	}

	return $css_class;
}
endif;

add_filter( 'page_css_class', 'snap_page_css_class', 10, 5 );

/**
 * Add an ID to the page menu.
 *
 * @since  1.0.
 *
 * @param  string    $menu    The current HTML for the menu.
 * @param  array     $args    Original args for the menu.
 * @return string             The modified menu.
 */
function snap_wp_page_menu( $menu, $args ) {
	return str_replace( '<div class=', '<div id="snap-nav" class=', $menu );
}

add_filter( 'wp_page_menu', 'snap_wp_page_menu', 10, 2 );

if ( ! function_exists( 'snap_wp_page_menu_args' ) ) :
/**
 * Change menu class for page menu to "menu-navigation-container".
 *
 * Brings parity to the nav menu and the page nav menu.
 *
 * @param  array    $args    The default args sent to the menu.
 * @return array             The new args.
 */
function snap_wp_page_menu_args( $args ) {
	$args['menu_class'] = $args['menu_class'] . ' menu-navigation-container';
	return $args;
}
endif;

add_filter( 'wp_page_menu_args', 'snap_wp_page_menu_args' );

if ( ! function_exists( 'snap_ttf_foundry_slider_metabox_title' ) ) :
/**
 * Give Foundry Slider an appropriate title for Snap.
 *
 * @since  1.0.
 *
 * @param  string    $title    The default title.
 * @return string              The new title.
 */
function snap_ttf_foundry_slider_metabox_title( $title ) {
	return __( 'Homepage Featured Slider', 'snap' );
}
endif;

add_filter( 'ttf_foundry_slider_metabox_title', 'snap_ttf_foundry_slider_metabox_title' );

if ( ! function_exists( 'snap_add_responsive_slides_scripts' ) ) :
/**
 * Enqueue scripts needed for Responsive Slides slider.
 *
 * These are added in a template, on-demand. These are only ever needed in the homepage template and only in some
 * conditions. It seems cleaner to use a function that is called in the template rather than add all of this in the
 * template itself.
 *
 * @since  1.0.
 *
 * @return void
 */
function snap_add_responsive_slides_scripts() {
	wp_enqueue_script(
		'snap-responsiveslides',
		get_template_directory_uri() . '/includes/javascripts/responsiveslides/responsiveslides' . SNAP_SUFFIX . '.js',
		array( 'jquery' ),
		SNAP_VERSION,
		true
	);

	wp_enqueue_script(
		'snap-homepage-slider',
		get_template_directory_uri() . '/includes/javascripts/homepage-slider' . SNAP_SUFFIX . '.js',
		array( 'snap-responsiveslides' ),
		SNAP_VERSION,
		true
	);

	// Set the options for the slider
	$responsive_slides_options = array(
		'timeout' => 6000,
	);

	// Allow dev to customize the options
	$responsive_slides_options = apply_filters( 'responsive_slides_options', $responsive_slides_options, get_the_ID() );

	// Send to the script
	wp_localize_script(
		'snap-homepage-slider',
		'snapResponsiveSlidesOptions',
		$responsive_slides_options
	);
}
endif;

if ( ! function_exists( 'snap_post_thumbnail_caption' ) ) :
/**
 * Print the caption for a featured image.
 *
 * @since  1.0.
 *
 * @return void
 */
function snap_post_thumbnail_caption() {
	$thumbnail_id = get_post_thumbnail_id();

	// If there is no thumbnail, do nothing more
	if ( empty( $thumbnail_id ) ) {
		return;
	}

	// Get the post
	$post = get_post( $thumbnail_id );

	// If the post exists, print the excerpt
	if ( ! is_null( $post ) ) {
		$excerpt = $post->post_excerpt;
		$excerpt = apply_filters( 'the_excerpt', $excerpt );
		echo '<figcaption>' . $excerpt . '</figcaption>';
	}
}
endif;

if ( ! function_exists( 'sort_query_by_post_in' ) ) :
/**
 * Sorts a WP_Query by "post__in"
 *
 * This is only used for WP 3.4 and lower.
 *
 * @link   http://wordpress.org/extend/plugins/sort-query-by-post-in/
 *
 * @since  1.0.
 *
 * @param  string    $sortby      The current sort clause.
 * @param  object    $thequery    The query object.
 * @return string                 Modified sort clause.
 */
function snap_sort_query_by_post_in( $sortby, $thequery ) {
	if ( ! empty($thequery->query['post__in']) && isset($thequery->query['orderby']) && $thequery->query['orderby'] == 'post__in' )
		$sortby = "find_in_set(ID, '" . implode( ',', $thequery->query['post__in'] ) . "')";

	return $sortby;
}
endif;

if ( ! function_exists( 'snap_update_attached_posts_cache' ) ) :
/**
 * Regenerate the post ID cache.
 *
 * This function gets all posts that use the templates defined when instantiating the object. For each of these
 * posts, all posts "attached" are gathered into an array. These items are then cached for 24 hours.
 *
 * This function is a companion to the Snap_Attached_Posts class. Once data is saved and posts are attached to another
 * post, this function gets all like attached posts and groups then in a transient. As an example, in Snap, Portfolio
 * items (i.e., posts attached to a page using the "portfolio.php" template) need to be identifiable. Storing this
 * transient allows for this to happen.
 *
 * @since  1.0.
 *
 * @param  int       $post_id       Current post ID.
 * @param  string    $key           Prefixed, unique string.
 * @param  array     $post_types    Post type to activate the metabox on.
 * @param  array     $templates     Array of templates with .php extensions.
 * @param  array     $ids           The current IDs being updated.
 * @return array                    Array of post IDs attached to the template.
 */
function snap_update_attached_posts_cache( $post_id, $key, $post_types, $templates, $ids ) {
	$post_ids = array();

	/**
	 * Before querying, remove the removal of portfolio posts action as it will cause an infinite loop and we do not
	 * want to withhold portfolio items from this query as the main purpose of this query is to get portfolio items
	 */
	$restore_action = false;
	if ( has_action( 'pre_get_posts', 'snap_maybe_remove_portfolio_posts_from_blog' ) ) {
		remove_action( 'pre_get_posts', 'snap_maybe_remove_portfolio_posts_from_blog' );
		$restore_action = true;
	}

	// Query for all posts with this template
	$template_query = new WP_Query(
		array(
			'post_type'      => 'page',
			'posts_per_page' => 999,
			'meta_query'     => array(
				array(
					'key'   => '_wp_page_template',
					'value' => $templates,
				)
			),
			'no_found_rows'  => true,
		)
	);

	// Restore the action
	if ( true === $restore_action ) {
		add_action( 'pre_get_posts', 'snap_maybe_remove_portfolio_posts_from_blog' );
	}

	// Foreach post that is using the template, get posts associated with it.
	if ( $template_query->have_posts() ) {
		while ( $template_query->have_posts() ) {
			$template_query->the_post();

			// Get posts attached to this page
			$this_post_ids = get_post_meta( get_the_ID(), $key, true );

			// If there are posts attached, add to the collector array
			if ( ! empty( $this_post_ids ) ) {
				$post_ids = array_merge( $post_ids, $this_post_ids );
			}
		}
	}

	// Put things back
	wp_reset_postdata();

	// Store the associated posts
	set_transient( $key, $post_ids, 86400 );

	return $post_ids;
}
endif;

add_action( 'snap_save_attached_posts', 'snap_update_attached_posts_cache', 10, 5 );

if ( ! function_exists( 'snap_is_portfolio_post' ) ) :
/**
 * Returns whether or not a post is a portfolio post.
 *
 * @since  1.0.
 *
 * @param  string|int    $id    The post ID to test.
 * @return bool                 True if portfolio post. False if not portfolio post.
 */
function snap_is_portfolio_post( $id ) {
	// Get all portfolio posts
	$portfolio_post_ids = snap_get_portfolio_posts();

	// Check if the post is in the collection of portfolio posts
	$is_portfolio_post = in_array( $id, $portfolio_post_ids );

	// Add a filter for granular control
	return apply_filters( 'snap_is_portfolio_post', $is_portfolio_post, $id );
}
endif;

/**
 * Get all portfolio post IDs.
 *
 * First, attempt to pull from the transient cache. If not available, the cache needs to be regenerated. This
 * regeneration is controlled by the Snap_Attached_Posts class. Normally, the file that defines this class is not
 * included on the front end. Since we need it here, it is included. Additionally, the portfolio instance of that class
 * is instantiated (it normally is only instantiated on the backend). Finally, the regeneration method is called.
 *
 * @since  1.0.
 *
 * @return array    The array of portfolio posts.
 */
function snap_get_portfolio_posts() {
	$portfolio_post_ids = get_transient( 'snap_portfolio_posts' );

	// There is no record of our post ID cache, regenerate it.
	if ( false === $portfolio_post_ids ) {
		$portfolio_post_ids = snap_update_attached_posts_cache( null, 'snap_portfolio_posts', array( 'page' ), array( 'portfolio.php' ), array() );
	}

	return $portfolio_post_ids;
}

if ( ! function_exists( 'snap_redirect_single_portfolio_item_template' ) ) :
/**
 * If viewing a portfolio post, redirect to the portfolio template.
 *
 * @since  1.0.
 *
 * @param  string    $template    The current template.
 * @return string                 The modified template location.
 */
function snap_redirect_single_portfolio_item_template( $template ) {
	// If this is single post that is a portfolio post, redirect to different template
	if ( is_single() && snap_is_portfolio_post( get_the_ID() ) ) {
		$template = locate_template( 'single-portfolio.php' );
	}

	return $template;
}
endif;

add_filter( 'template_include', 'snap_redirect_single_portfolio_item_template' );

if ( ! function_exists( 'snap_maybe_remove_portfolio_posts_from_blog' ) ) :
/**
 * Remove portfolio items from blog content is an option is set.
 *
 * In order for users to show portfolio items only on the portfolio page and keep portfolio items sectioned away from the
 * normal post content. By default, portfolio content is mixed with blog content. Only if the "hide portfolio items"
 * option is enabled will the content be withheld from the blog. The "snap_maybe_remove_portfolio_posts_from_blog_condition"
 * filter can be used to further refine the logic used to withold items. Note that by default this function will remove
 * portfolio posts from everywhere, so checking for main query is purposefully excluded.
 *
 * @since  1.0.5.
 *
 * @param  object    $query    The unmodified query object.
 * @return void
 */
function snap_maybe_remove_portfolio_posts_from_blog( $query ) {
	// Do not filter in the admin
	if ( is_admin() ) {
		return;
	}

	// Option must be enabled to hide the portfolio posts
	if ( true !== get_theme_mod( 'hide-portfolio-posts' ) ) {
		return;
	}

	// Do not withhold on the portfolio page
	if ( 'portfolio.php' === get_page_template_slug() ) {
		return;
	}

	// Allow the post to be shown as a single post
	if ( $query->is_main_query() && is_single() ) {
		return;
	}

	/**
	 * Developers can further fine tune this function by exiting the function using this filter. If the filter returns
	 * (bool) true, the filter will not be applied and portfolio post items will be displayed.
	 */
	if ( true === apply_filters( 'snap_maybe_remove_portfolio_posts_from_blog_condition', false ) ) {
		return;
	}

	// Remove the portfolio items via post__not_in
	$query->set( 'post__not_in', snap_get_portfolio_posts() );
}
endif;

add_action( 'pre_get_posts', 'snap_maybe_remove_portfolio_posts_from_blog' );

if ( ! function_exists( 'snap_do_not_remove_portfolio_items_from_slider' ) ) :
/**
 * Do not remove portfolio posts from the featured slider.
 *
 * Users are allowed to hand curate the items in the featured slider. If they chose to add portfolio items to the
 * slider, that choice should trump the "Hide portfolio posts from the blog" option. If users do not want to have a
 * portfolio post in the slider, s/he should change the items in the slider and not use the global option.
 *
 * @since  1.0.6.
 *
 * @return void
 */
function snap_do_not_remove_portfolio_items_from_slider() {
	// Use a global for restoring the action in another function
	global $snap_restore_action;
	$snap_restore_action = false;

	// Do not remove the portfolio posts from this query as this is a hand curated query
	if ( has_action( 'pre_get_posts', 'snap_maybe_remove_portfolio_posts_from_blog' ) ) {
		remove_action( 'pre_get_posts', 'snap_maybe_remove_portfolio_posts_from_blog' );
		$snap_restore_action = true;
	}
}
endif;

add_action( 'ttf_pre_generate_featured_slider_post_ids', 'snap_do_not_remove_portfolio_items_from_slider' );

if ( ! function_exists( 'snap_do_not_remove_portfolio_items_from_slider_clean_up' ) ) :
/**
 * Clean up the action taken in `snap_do_not_remove_portfolio_items_from_slider()`.
 *
 * @since  1.0.6.
 *
 * @return void
 */
function snap_do_not_remove_portfolio_items_from_slider_clean_up() {
	// Restore the action
	global $snap_restore_action;
	if ( true === $snap_restore_action ) {
		add_action( 'pre_get_posts', 'snap_maybe_remove_portfolio_posts_from_blog' );
	}

	// Cleanup the global
	unset( $snap_restore_action );
}
endif;

add_action( 'ttf_after_generate_featured_slider_post_ids', 'snap_do_not_remove_portfolio_items_from_slider_clean_up' );

if ( ! function_exists( 'snap_content_width' ) ) :
/**
 * Adjusts content_width value for full width templates.
 *
 * This includes: full-width page template, attachment pages, some variants of the profile page template, variants of
 * the single-portfolio template
 *
 * @since  1.0
 *
 * @return void
 */
function snap_content_width() {
	global $post;

	// If no post is available, exit the function
	if ( is_null( $post ) ) {
		return;
	}

	$template = get_page_template_slug();
	$excerpt  = $post->post_excerpt;

	if (
			( is_attachment() ) ||
			( 'full-width.php' === $template ) ||
			( 'profile.php' === $template && '' === $excerpt && '' === get_post_thumbnail_id() ) ||
			( is_single() && in_array( get_the_ID(), snap_get_portfolio_posts() ) && '' === $excerpt )
	) {
		global $content_width;
		$content_width = 994;
	}
}
endif;

add_action( 'template_redirect', 'snap_content_width' );

if ( ! function_exists( 'snap_trim_portfolio_page_excerpt' ) ) :
/**
 * Limit the excerpt to 55 words.
 *
 * @since  1.0.
 *
 * @param  string    $excerpt    The original excerpt.
 * @return string                The modified excerpt.
 */
function snap_trim_portfolio_page_excerpt( $excerpt ) {
	$excerpt = wp_trim_words( $excerpt, apply_filters( 'snap_trim_portfolio_page_excerpt', 55 ) );
	return $excerpt;
}
endif;

if ( ! function_exists( 'snap_excerpt_length' ) ) :
/**
 * Increase the size of excerpts in grid views.
 *
 * It looks best if the grid is fuller rather than emptier. Having a longer excerpt helps with this.
 *
 * @since  1.0.
 *
 * @param  int    $length    The current length.
 * @return int               The modified length.
 */
function snap_excerpt_length( $length ) {
	if ( is_home() || is_page_template( 'homepage.php' ) ) {
		$length = 110;
	}

	return $length;
}
endif;

add_filter( 'excerpt_length', 'snap_excerpt_length' );

if ( ! function_exists( 'snap_grid_excerpt_filter' ) ) :
/**
 * Increase the size of excerpts in grid views
 *
 * @since  1.0.
 *
 * @param  string    $excerpt    The current excerpt.
 * @return string                The modified excerpt.
 */
function snap_grid_excerpt_filter( $excerpt ) {
	if ( is_home() || is_page_template( 'homepage.php' ) ) {
		// Everything in $allowedtags except <blockquote>
		$snap_allowedtags = array(
			'a' => array(
				'href' => true,
				'title' => true,
			),
			'abbr' => array(
				'title' => true,
			),
			'acronym' => array(
				'title' => true,
			),
			'b' => array(),
			'cite' => array(),
			'code' => array(),
			'del' => array(
				'datetime' => true,
			),
			'em' => array(),
			'i' => array(),
			'q' => array(
				'cite' => true,
			),
			'strike' => array(),
			'strong' => array(),
		);
		$excerpt = wp_kses( $excerpt, $snap_allowedtags );
	}

	return $excerpt;
}
endif;

add_filter( 'the_excerpt', 'snap_grid_excerpt_filter' );

if ( ! function_exists( 'snap_remove_grid_page_sharing_display' ) ) :
/**
 * Remove Jetpack's sharing buttons on the homepage and the posts page.
 *
 * The grid on the homepage and the posts page relies on cutting off content with overflow hidden. This causes issues
 * with not reliably showing the sharing buttons. Honestly, it really makes the grid look ugly too. As such, it is
 * removed.
 *
 * Users can change this and style the buttons by removing this action:
 *     remove_action( 'wp_head', 'snap_remove_grid_page_sharing_display' );
 *
 * @since  1.0.
 *
 * @return void
 */
function snap_remove_grid_page_sharing_display() {
	if ( is_home() || is_page_template( 'homepage.php' ) ) {
		remove_filter( 'the_excerpt', 'sharing_display', 19 );
	}
}
endif;

// Using wp_head to make sure needed template tags are set
add_action( 'wp_head', 'snap_remove_grid_page_sharing_display' );

if ( ! function_exists( 'snap_disable_archive_infinite_scroll' ) ) :
/**
 * Turn off infinite scroll for every page but the home page.
 *
 * @since  1.0.
 *
 * @param  bool     $supported    Current supported value.
 * @param  array    $settings     Infinite Scroll settings.
 * @return bool                   The modified supported value.
 */
function snap_disable_archive_infinite_scroll( $supported, $settings ) {
	if ( ! is_home() ) {
		$supported = false;
	}

	return $supported;
}
endif;

add_filter( 'infinite_scroll_archive_supported', 'snap_disable_archive_infinite_scroll', 10, 2 );

if ( ! function_exists( 'snap_foundry_slider_url' ) ) :
/**
 * Filters the location of the Foundry Slider assets.
 *
 * @since 1.0.7
 *
 * @return array    Foundry slider location.
 */
function snap_foundry_slider_url( $url ) {
	return get_template_directory_uri() . '/includes/foundry-slider';
}
endif;

add_filter( 'ttf_foundry_slider_plugin_url', 'snap_foundry_slider_url' );
