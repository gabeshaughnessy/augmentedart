<?php
/**
 * @package Snap
 */

if ( ! class_exists( 'Snap_Portfolio_Selected_Posts' ) ) :
/**
 * Class Snap_Portfolio_Selected_Posts.
 *
 * A simple class for getting the posts that are displayed on the portfolio pages.
 *
 * @since 1.0.
 */
class Snap_Portfolio_Selected_Posts {

	/**
	 * The current post ID.
	 *
	 * @since 1.0.
	 *
	 * @var   int    The post's ID.
	 */
	var $post_id = 0;

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
	 * @return Snap_Portfolio_Selected_Posts
	 */
	public function __construct( $post_id = 0 ) {
		if ( 0 === $post_id ) {
			$post_id = get_the_ID();
		}

		// Assign the post ID.
		$this->post_id = absint( $post_id );

		// Set up $this->posts as a blank WP_Query so it can be treated as a WP_Query object in all situations.
		$this->posts = new WP_Query();
	}

	/**
	 * Retrieve all posts that have been associated with the current post.
	 *
	 * @since  1.0.
	 *
	 * @return WP_Query    The generated WP_Query object.
	 */
	public function retrieve_posts() {
		// Verify that we have data to query for.
		$this->selected_post_ids = get_post_meta( $this->post_id, 'snap_portfolio_posts', true );
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
				'post_status'         => 'publish',
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