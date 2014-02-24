<?php
/**
 * @package Snap
 */

if ( ! class_exists( 'Snap_Homepage_Selected_Posts' ) ) :
/**
 * A simple class for getting the posts that are displayed in the "Selected Posts" area on the homepage.
 *
 * In the lower right hand corner of the homepage, either user selected posts, latest posts, or nothing is shown. This
 * class adds the logic to determine what to display in that area. It also prepares a WP_Query for using when displaying
 * the content.
 *
 * @since 1.0.
 */
class Snap_Homepage_Selected_Posts {

	/**
	 * The current post ID.
	 *
	 * @since 1.0.
	 *
	 * @var   int    The post's ID.
	 */
	var $post_id = 0;

	/**
	 * Type of post to retrieve.
	 *
	 * @since 1.0.
	 *
	 * @var   string    The type of posts that will be retrieved.
	 */
	var $which_posts = 'latest';

	/**
	 * Array of post ids attached to $this->post_id.
	 *
	 * @since 1.0.
	 *
	 * @var   array    Array of post IDs.
	 */
	var $selected_post_ids = array();

	/**
	 * WP_Query object of posts for the selected area.
	 *
	 * @since 1.0.
	 *
	 * @var   WP_Query    The WP_Query object containing the posts.
	 */
	var $posts;

	/**
	 * Set basic vars for the object.
	 *
	 * @since  1.0.
	 *
	 * @param  int                             $post_id    The post ID.
	 * @return Snap_Homepage_Selected_Posts
	 */
	public function __construct( $post_id = 0 ) {
		if ( 0 === $post_id ) {
			$post_id = get_the_ID();
		}

		// Assign the post ID.
		$this->post_id = absint( $post_id );

		// Set up $this->posts as a blank WP_Query so it can be treated as a WP_Query object in all situations.
		$this->posts = new WP_Query();

		// Determine which type of posts apply.
		$this->which_posts();
	}

	/**
	 * Query for the posts.
	 *
	 * @since  1.0.
	 *
	 * @return WP_Query                A WP_Query of the posts.
	 */
	public function retrieve_posts() {
		return call_user_func( array( $this, 'get_posts_' . $this->which_posts ) );
	}

	/**
	 * Determine which kind of posts are being displayed.
	 *
	 * @since  1.0.
	 *
	 * @return string    The identifier for the type of posts being shown.
	 */
	public function which_posts() {
		// If this page has the meta value set and it is not empty, selected posts are displayed
		$this->selected_post_ids = get_post_meta( $this->post_id, 'snap_homepage_posts', true );

		if ( ! empty( $this->selected_post_ids ) ) {
			$this->which_posts = 'selected';
		} else {
			$this->which_posts = 'latest';
		}

		return $this->which_posts;
	}

	/**
	 * Retrieve all posts that have been associated with the current post.
	 *
	 * @since  1.0.
	 *
	 * @return WP_Query    The generated WP_Query object.
	 */
	public function get_posts_selected() {
		// Verify that we have data to query for.
		if ( empty( $this->selected_post_ids ) ) {
			return $this->posts;
		}

		// If not running 3.5 (when "edit_form_image_editor" was introduced) or above, provide sort by "post__in" support
		if ( ! function_exists( 'edit_form_image_editor' ) && function_exists( 'snap_sort_query_by_post_in' ) ) {
			add_filter( 'posts_orderby', 'snap_sort_query_by_post_in', 10, 2 );
		}

		// Query for the selected posts
		$query = new WP_Query(
			array(
				'post__in'            => $this->selected_post_ids,
				'orderby'             => 'post__in',
				'no_found_rows'       => true,
				'ignore_sticky_posts' => true,
				'post_type'           => array(
					'page',
					'post',
				),
				'posts_per_page'      => 99,
			)
		);

		remove_filter( 'posts_orderby', 'snap_sort_query_by_post_in', 10, 2 );

		// Set the posts to the instance variable
		$this->posts = $query;

		return $this->posts;
	}

	/**
	 * Retrieve the 4 latest posts as a default.
	 *
	 * @since  1.0.
	 *
	 * @return WP_Query    WP_Query object with the 4 latest posts.
	 */
	public function get_posts_latest() {
		// Allow a developer to change what is displayed
		$args = apply_filters(
			'snap_homepage_latest_posts_args',
			array(
				'no_found_rows'       => true,
				'ignore_sticky_posts' => true,
				'post__not_in'        => ttf_get_featured_slider_post_ids(),
			)
		);

		return new WP_Query( $args );
	}

	/**
	 * Either pull the posts from the instance var or generate the posts.
	 *
	 * @since  1.0.
	 *
	 * @return WP_Query    WP_Query of the posts.
	 */
	public function get_posts() {
		// If a real WP_Query has not been executed
		if ( ! is_null( $this->posts->query ) ) {
			return $this->posts;
		} else {
			$this->posts = $this->retrieve_posts();
			return $this->posts;
		}
	}
}
endif;