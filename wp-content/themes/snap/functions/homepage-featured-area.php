<?php
/**
 * @package Snap
 */

if ( ! class_exists( 'Snap_Homepage_Featured_Area' ) ) :
/**
 * Generate information needed to display the homepage featured area.
 *
 * This class is only used on the homepage. It sorts out the logic of determining what to display in the featured area,
 * or header area, of the homepage.
 *
 * The class determines one of three display states: slider, image, or blank. If the user has added 2 or more posts to
 * the featured slider, a slider will be displayed. If only 1 featured slider post is chosen, or if no featured slider
 * posts are chosen and the user has set a featured image for the homepage, an image will display in the header area.
 * If neither of the above conditions are true, nothing is displayed. All of this information is tracked in this class.
 * Once called in the template, the information can be accessed to make decisions about what to display.
 *
 * To make things a bit more complicated, the three display states are determined for both admins (people who do not get
 * a cached view) and normal users (people who get a cached view). Admins will see special notices, which will help them
 * to correct issues with curating the content for the homepage. As an example, if the admin chooses two posts to
 * display in a featured slider, but forgets to add a featured image for one of the selected posts, the admin's display
 * state will be "slider"; however, the post with the missing image, will display a notice to the admin indicating that
 * the content is missing. The normal user, on the other hand, will have a display state of "image" and will only see
 * the image for the post that has a featured image.
 *
 * This class provides all of the logic to make these decisions. The public methods and instance variables expose the
 * information to the caller in the template page.
 *
 * @since 1.0.
 */
class Snap_Homepage_Featured_Area {

	/**
	 * ID of the post in question.
	 *
	 * @since 1.0.
	 *
	 * @var   int    A value 0 or greater.
	 */
	var $post_id = 0;

	/**
	 * The type of display for this page that admins will see.
	 *
	 * @since 1.0.
	 *
	 * @var   string    Will either be 'slider', 'image', or 'blank'.
	 */
	var $display_type_for_admin = 'blank';

	/**
	 * The type of display for this page that subscribers will see.
	 *
	 * @since 1.0.
	 *
	 * @var   string    Will either be 'slider', 'image', or 'blank'.
	 */
	var $display_type_for_subscriber = 'blank';

	/**
	 * The type of display for this page that the current user will see.
	 *
	 * @since 1.0.
	 *
	 * @var   string    Will either be 'slider', 'image', or 'blank'.
	 */
	var $display_type_for_current_user = 'blank';

	/**
	 * The IDs of the slider posts.
	 *
	 * @since 1.0.
	 *
	 * @var   array    Empty array if no slider posts are available. Array of IDs if available.
	 */
	var $all_possible_slider_posts = array();

	/**
	 * The IDs of the slider posts that have post thumbnails.
	 *
	 * @since 1.0.
	 *
	 * @var   array    Empty array if no slider posts with thumbnails are available. Array of IDs if available.
	 */
	var $slider_posts_with_post_thumbnails = array();

	/**
	 * Collects the status of each image that may be displayed.
	 *
	 * This array uses post IDs for keys and will store a value of 'no-image' or 'too-small', which indicate that an
	 * image is not available or too small for display, respectively.
	 *
	 * @since 1.0.
	 *
	 * @var   array    Post IDs as keys with the value of 'no-image' or 'too-small'.
	 */
	var $image_display_status = array();

	/**
	 * Construct the object by cleaning the ID and determining display type.
	 *
	 * @since  1.0.
	 *
	 * @param  string|int                     $post_id    The post ID.
	 * @return Snap_Homepage_Featured_Area
	 */
	public function __construct( $post_id = 0 ) {
		// Default to the global post ID if none is given.
		if ( 0 === $post_id ) {
			$post_id = get_the_ID();
		}

		// Clean the ID
		$this->post_id = $this->_clean_post_id( $post_id );

		// If a valid value is returned, determine display type
		if ( $this->post_id > 0 ) {
			$display_types = $this->_determine_display_types( $this->post_id );
			$this->_determine_display_type_for_current_user( $display_types );
		}
	}

	/**
	 * Determine whether to show slider posts, featured image, or nothing.
	 *
	 * @since  1.0.
	 *
	 * @param  int       $post_id    The post ID.
	 * @return string                Display type.
	 */
	private function _determine_display_types( $post_id ) {
		// Get the needed data to decide what to display.
		$this->slider_posts_with_post_thumbnails = $this->_get_featured_slider_posts( $post_id );

		// Only create a slider for regular visitors if there are 1 or more posts for the slider.
		if ( count( $this->slider_posts_with_post_thumbnails ) > 1 ) {
			$this->display_type_for_subscriber = 'slider';

		// If there is only a single slider post with a thumbnail, display as an image for regular users
		} else if ( ! empty( $this->slider_posts_with_post_thumbnails ) && 1 === count( $this->slider_posts_with_post_thumbnails ) ) {
			$this->display_type_for_subscriber = 'image';
		}

		// If there are more than 1 slider posts possible, display them all for the admin
		if ( count( $this->all_possible_slider_posts ) > 1 ) {
			$this->display_type_for_admin = 'slider';

		// If there is only 1 slider post available, display it for the admin
		} else if ( 1 === count( $this->all_possible_slider_posts ) ) {
			$this->display_type_for_admin = 'image';
		}

		return array(
			'admin'      => $this->display_type_for_admin,
			'subscriber' => $this->display_type_for_subscriber,
		);
	}

	/**
	 * Sets the display type for the current user based on user caps.
	 *
	 * @since  1.0.
	 *
	 * @param  array     $display_types    Array of display type for admin and subscriber roles.
	 * @return string                      The display type for the user.
	 */
	private function _determine_display_type_for_current_user( $display_types ) {
		// Default to blank
		$result = 'blank';

		// Make sure that the passed array contains the needed elements
		if ( isset( $display_types['admin'] ) && isset( $display_types['subscriber'] ) ) {
			// Assign display type
			if ( current_user_can( 'edit_theme_options' ) ) {
				$result = $display_types['admin'];
			} else {
				$result = $display_types['subscriber'];
			}
		}

		// Record the display type
		$this->display_type_for_current_user = $result;

		return $this->display_type_for_current_user;
	}

	/**
	 * Get the IDs for the slider posts with thumbnails.
	 *
	 * @since  1.0.
	 *
	 * @return array    Array of post IDs on success. Empty array if no featured posts exist.
	 */
	private function _get_featured_slider_posts() {
		// Grab all slider posts
		$this->all_possible_slider_posts = ttf_get_featured_slider_post_ids();
		$page_thumbnail_id               = get_post_thumbnail_id( get_the_ID() );

		// Check for a post thumbnail for each post. If exists, add the post to the appropriate array.
		if ( ! empty( $this->all_possible_slider_posts ) ) {
			foreach ( $this->all_possible_slider_posts as $id ) {
				// Accessing the ID tells whether or not the thumb exists
				$thumb_id = get_post_thumbnail_id( $id );

				// If a valid ID is not returned, ignore the post
				if ( $thumb_id > 0 ) {
					// An image will only be displayed if it has a width equal to or greater than content width
					if ( $this->validate_image_size( $thumb_id ) ) {
						/**
						 * The post has met the requirement of having a thumbnail that is at least the width of the featured
						 * area. It will be shown to regular visitors.
						 */
						$this->slider_posts_with_post_thumbnails[] = $id;
					} else {
						$this->image_display_status[ $id ] = 'too-small';
					}
				} else {
					$this->image_display_status[ $id ] = 'no-image';
				}
			}
		} else {
			/**
			 * At this point, there are no featured slider posts. Check for the presence of a page featured image. If
			 * it exists, validate the image. Note that if a thumbnail does not exist, the status is not considered
			 * "no-image". This allows the user to display nothing on the page.
			 */
			if ( $page_thumbnail_id > 0 ) {
				// Since we have a valid thumbnail, add it to the possible slider posts
				$this->all_possible_slider_posts[] = get_the_ID();

				// An image will only be displayed if it has a width equal to or greater than content width
				if ( $this->validate_image_size( $page_thumbnail_id ) ) {
					$this->slider_posts_with_post_thumbnails[] = get_the_ID();
				} else {
					$this->image_display_status[ get_the_ID() ] = 'too-small';
				}
			}
		}

		return $this->slider_posts_with_post_thumbnails;
	}

	/**
	 * Guarantee that a thumbnail meets the minimum display width requirements.
	 *
	 * @since  1.0.
	 *
	 * @param  string|int    $thumbnail_id    The thumbnail to test.
	 * @return bool                           True if width requirements are met. False if they are not.
	 */
	public function validate_image_size( $thumbnail_id ) {
		// Get the image source information
		$thumb_info = wp_get_attachment_image_src( $thumbnail_id, 'snap-full-width' );

		// Verify if it has a width equal to or greater than content width
		return ( isset( $thumb_info[1] ) && $thumb_info[1] >= 994 );
	}

	/**
	 * Return whether or not the image has a status meaning that it cannot be displayed.
	 *
	 * @since  1.0.
	 *
	 * @param  string|int    $id    The post ID in question.
	 * @return bool                 True if the image can be displayed. False if it cannot be displayed.
	 */
	public function can_image_be_displayed( $id ) {
		return ( ! isset( $this->image_display_status[ $id ] ) && in_array( $id, $this->slider_posts_with_post_thumbnails ) );
	}

	/**
	 * Get an image's display status.
	 *
	 * @since  1.0.
	 *
	 * @param  string|int    $id    The post ID in question.
	 * @return string               Status of the image.
	 */
	public function why_image_cannot_be_displayed( $id ) {
		if ( isset( $this->image_display_status[ $id ]  ) ) {
			return $this->image_display_status[ $id ];
		} elseif ( in_array( $id, $this->slider_posts_with_post_thumbnails ) ) {
			return 'display';
		} else {
			return 'unknown';
		}
	}

	/**
	 * Determine if the current page is the same as the id passed to the function.
	 *
	 * @since  1.0.
	 *
	 * @param  int     $id    ID to compare the current ID with.
	 * @return bool           True if the passed ID and the current ID are the same. False if they are not.
	 */
	public function post_is_this_page( $id ) {
		return (int) get_the_ID() === (int) $id;
	}

	/**
	 * Sanitize and validation a post ID.
	 *
	 * @since  1.0.
	 *
	 * @param  string|int    $post_id    The post ID.
	 * @return int                       0 if invalid. Clean ID if successful.
	 */
	private function _clean_post_id( $post_id ) {
		$clean_id = absint( $post_id );

		// If the ID is 0, do not perform any more checks.
		if ( 0 !== $clean_id ) {

			// Validate that get_post( n ) returns post n
			$post = get_post( $clean_id );
			if ( $post->ID !== $post_id ) {
				$clean_id = 0;
			}
		}

		return $clean_id;
	}
}
endif;