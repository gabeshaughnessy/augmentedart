/**
 * Add Immediately-Invoked Function Expression that initiates all of the general purpose theme JS.
 *
 * @since  1.0.
 *
 * @param  object    window    The window object.
 * @param  object    $         The jQuery object.
 * @return void
 */

(function ( window, $ ) {
	// Cache document for fast access.
	var document = window.document;

	/**
	 * The faux "class" constructor.
	 *
	 * @since  1.0.
	 *
	 * @return void
	 */
	var Snap = function () {

		/**
		 * Holds reusable elements.
		 *
		 * @since 1.0.
		 *
		 * @type  {{}}
		 */
		var cache = {};

		/**
		 * Initiate all actions for this class.
		 *
		 * @since  1.0.
		 *
		 * @return void
		 */
		function init( snapResponsiveNavOptions ) {
			// Cache the reusable elements
			cacheElements();

			// Initiate FitVids
			setupFitVids();

			// Label the last posts
			labelLastPosts();

			// Grid items without an image can be truncated immediately
			addEllipsis();

			// Enable the mobile menu
			setupMenu( snapResponsiveNavOptions );

			// Setup event binding
			bindEvents();
		}

		/**
		 * Caches elements that are used in this scope.
		 *
		 * @since  1.0.
		 *
		 * @return void
		 */
		function cacheElements() {
			cache.$window   = $( window );
			cache.$document = $( document );
		}

		/**
		 * Setup event binding.
		 *
		 * @since  1.0.
		 *
		 * @return void
		 */
		function bindEvents() {
			// Re-label the last posts when IS loads
			cache.$document.on( 'post-load', labelLastPosts );

			// After Infinite Scroll has loaded, all images are present all grid items can be dotdotdot-ed
			cache.$document.on( 'post-load', addEllipsis );

			// When the window resizes, redo the ellipsis. Check that the dependency is available
			if ( 'function' === typeof cache.$window.smartresize ) {
				cache.$window.smartresize( addEllipsis );
			}
		}

		/**
		 * Run FitVids.
		 *
		 * @since  1.0.
		 *
		 * @return void
		 */
		function setupFitVids() {
			// FitVids is only loaded on the pages and single post pages. Check for it before doing anything.
			if ( ! $.fn.fitVids )
				return;

			$( '.page .frame, .single-post .frame' ).fitVids();
		}

		/**
		 * Label posts in the last row of the blog listing.
		 *
		 * Posts in the last row of the blog listing need to be labeled as "last-of-posts". This removes the thin border
		 * at the bottom of those posts. This is being implemented via JS for better handling of edge cases with odd
		 * number of posts, sticky posts, and Infinite Scroll.
		 *
		 * @since  1.0.
		 *
		 * @return void
		 */
		function labelLastPosts() {
			// This function should only run on pages using dotdotdot. Exit if not loaded
			if ( ! $.fn.dotdotdot )
				return;

			var $tile      = $( '.tile' ),
				$lastPosts = $( '.last-of-posts', $tile ),
				$posts     = $( '.post, .page', $tile );

			// When IS loads, the "last-of-posts" class needs to be removed as the last of posts posts are no longer last of posts
			$lastPosts.removeClass( 'last-of-posts' );

			/**
			 * Assume that there are an even number of posts displayed, meaning that there are 2 posts in the last row.
			 * Slice is initially set to -2 (which later leads to selecting the posts in the last row) to meet this
			 * assumption. Then, check for that assumption. If there are not an even number of posts, set slice to -1 to
			 * pick the 1 post in the last row.
			 */
			var slice = -2;

			if ( 0 !== $posts.length % 2 ) {
				slice = -1;
			}

			// Tag the post(s) in the last row with the "last-of-posts" class
			$posts.slice( slice ).addClass( 'last-of-posts' );
		}

		/**
		 * Truncate content to fit in an area and add an ellipsis.
		 *
		 * @since  1.0.
		 *
		 * @return void
		 */
		function addEllipsis() {
			// Dotdotdot is only loaded on the blog page and homepage. Check for it before doing anything.
			if ( ! $.fn.dotdotdot )
				return;

			var $setPosts      = $( '.set-post', '.post, .page' ),                              // Used to set context for other selectors
				$withoutThumbs = $( '.without-thumb .grid-content-wrapper', $setPosts ), // Get all of the grid items without thumbs. These are treated differently than items with thumbs.
				$withThumbs    = $( '.with-thumb .grid-content-wrapper', $setPosts ),    // Get all of the grid items with thumbs.
				deviceWidth    = cache.$window.width(),                                  // Current device width for getting image size.
				gridItemWidth  = Math.round( $( '.set-post:first' ).width() ),                         // Get the grid item width based on the first item's width
				maxGridHeight  = ( deviceWidth >= 600 ) ? 360 : 0;                       // Get the max height of the grid items, which is based on the device width

			// Posts with thumbs can be dotted. Height needs to be static in all but the narrow view.
			if ( $withoutThumbs.length > 0 ) {
				$withoutThumbs.dotdotdot( {
					height : ( 0 !== maxGridHeight ) ? maxGridHeight : '' // '' will allow the area to be flexible
				} );
			}

			/**
			 * When the grid item has a thumbnail, the content area needs to be adjusted. Based on the size of the screen,
			 * the content area is adjusted differently.
			 */
			$withThumbs.each( function () {
				var $this            = $( this ),
					$img             = $( 'img:first', $this.parent() ),
					htmlHeight       = parseInt( $img.attr( 'height' ) ),
					htmlWidth        = parseInt( $img.attr( 'width' ) ),
					hasHeight        = ( ! isNaN( htmlHeight ) ),
					hasWidth         = ( ! isNaN( htmlWidth ) ),
					hasDimensions    = ( hasHeight && hasWidth ),
					currentMaxHeight = getCurrentMaxHeight(),
					contentHeight    = '';

				// Estimates can only be made it HTML attrs for dimensions are available
				if ( hasDimensions ) {
					var estimatedThumbHeight = guessImageDisplayHeight( htmlHeight, htmlWidth, currentMaxHeight, gridItemWidth );
					contentHeight = ( 0 !== maxGridHeight && 0 !== estimatedThumbHeight ) ? maxGridHeight - estimatedThumbHeight : '';
				} else {
					// Assume that the full height of the thumb area is taken and set the content height based on that
					contentHeight = ( 0 !== maxGridHeight ) ? maxGridHeight - currentMaxHeight : '';
				}

				// Adjust the height to account for 11 px of margin
				contentHeight = contentHeight - 11;
				contentHeight = ( contentHeight < 0 ) ? 0 : contentHeight;

				// Set the correct height for the content to avoid having half of a line get cut off
				if ( contentHeight > 0 ) {
					$this.css( {
						height : contentHeight
					} );
				}

				// Apply dotdotdot with the correct height
				$this.dotdotdot( {
					height : ( contentHeight > 0 ) ? contentHeight : null
				} );
			} );
		}

		/**
		 * Based on the 4 parameters, attempt to guess the display height of an image.
		 *
		 * @since   1.0.3.
		 *
		 * @param   htmlHeight    int    Height HTML attr.
		 * @param   htmlWidth     int    Width HTML attr.
		 * @param   maxHeight     int    The max height that the current thumb can be.
		 * @param   maxWidth      int    The max width that the current thumb can be.
		 * @returns {int}
		 */
		function guessImageDisplayHeight( htmlHeight, htmlWidth, maxHeight, maxWidth ) {
			var estimatedDisplayHeight = 0;

			if ( 'landscape' === getImageOrientation( htmlHeight, htmlWidth ) ) {
				if ( htmlWidth > maxWidth ) {
					/**
					 * Since the width of the image is greater than the max width of the grid area, the image is resized.
					 * Get the percent size reduction for the width, then apply that to the height to get the estimated
					 * display height.
 					 */
					var ratio = maxWidth / htmlWidth;
					estimatedDisplayHeight = htmlHeight * ratio;
				} else {
					/**
					 * In this condition, the image will not stretch the full width of the grid area. The width of the
					 * image is less that the grid width. We need to verify that the height of the image is not greater
					 * than the max height for the area. If it is, the image height (and width for that matter) will be
					 * altered. It will be the same as the maxHeight value.
					 */
					if ( htmlHeight > maxHeight ) {
						estimatedDisplayHeight = maxHeight;
					} else {
						estimatedDisplayHeight = htmlHeight;
					}
				}
			} else {
				if ( htmlHeight > maxHeight ) {
					/**
					 * Since this is a portrait image and because the image's height is greater than the max height for
					 * the element, it must be scaled down to the max height.
					 */
					estimatedDisplayHeight = maxHeight;
				} else {
					/**
					 * This is the tricky condition. At this point the image is a portrait that is shorter than the max
					 * height of the grid area.
					 */
					if ( htmlWidth > maxWidth ) {
						/**
						 * In this condition, we know that the image is being resized based on reducing the width of the
						 * image. We can use the ratio reduction to determine the height of the image.
						 */
						var ratio = maxWidth / htmlWidth;
						estimatedDisplayHeight = htmlHeight * ratio;
					} else {
						/**
						 * In this condition, the image is not exceeding the height or the width of the grid area. This
						 * means the the image isn't resized at all. Most likely, the height is the htmlHeight.
						 */
						estimatedDisplayHeight = htmlHeight;
					}
				}
			}

			return Math.round( estimatedDisplayHeight );
		}

		/**
		 * Determine the max height of the thumbnail area given the current screen width.
		 *
		 * @since   1.0.3.
		 *
		 * @returns {int}
		 */
		function getCurrentMaxHeight() {
			var deviceWidth      = cache.$window.width(),
				deviceWidthLabel = 'default',
				thumbMaxSizes    = {
					default : 407,
					small   : 285,
					medium  : 221
				};

			// Determine the size of the screen. This corresponds to the media queries in the CSS.
			if ( deviceWidth >= 600 && deviceWidth < 900 ) {
				deviceWidthLabel = 'small';
			} else if ( deviceWidth >= 900 ) {
				deviceWidthLabel = 'medium';
			}

			return thumbMaxSizes[ deviceWidthLabel ];
		}

		/**
		 * Determine an image's orientation.
		 *
		 * @since   1.0.3.
		 *
		 * @param   htmlHeight    int    Height HTML attr.
		 * @param   htmlWidth     int    Width HTML attr.
		 * @returns {string}
		 */
		function getImageOrientation( htmlHeight, htmlWidth ) {
			if ( htmlHeight > htmlWidth ) {
				return 'portrait';
			} else {
				return 'landscape';
			}
		}

		/**
		 * Activate the mobile menu
		 *
		 * @since  1.0.
		 *
		 * @return void
		 */
		function setupMenu( snapResponsiveNavOptions ) {
			// Be safe and check that the resource is loaded
			if ( 'function' !== typeof responsiveNav )
				return;

			// Verify that we have a legit object
			if ( 'object' !== typeof snapResponsiveNavOptions ) {
				/**
				 * Looks like the expected object does not exist, which likely means someone did something to 
				 * "unlocalize" the script. To try to correct for this situation, define the defaults so the menu will
				 * still work.
				 */
				var snapResponsiveNavOptions = {
					animate      : true,
					transition   : 400,
					label        : 'Show Menu',
					insert       : 'before',
					customToggle : 'mobile-toggle',
					openPos      : 'relative',
					jsClass      : 'js',

					// This is not a part of Responsive Nav, but is needed for changing the menu label
					closedLabel  : 'Hide Menu'
				}
			}

			// Cache the object for use in other methods
			cache.responsiveNavOptions = snapResponsiveNavOptions;

			// Add callback function to change the label when the menu is closed
			cache.responsiveNavOptions.open = function() {
				toggleLabel( cache.responsiveNavOptions.closedLabel );
			}

			// Add callback function to change the label when the menu is opened
			cache.responsiveNavOptions.close = function() {
				toggleLabel( cache.responsiveNavOptions.label );
			}

			// Initiate the Responsive Nav menu
			cache.nav = responsiveNav( '#snap-nav', cache.responsiveNavOptions );
		}

		/**
		 * Change the label in the menu.
		 *
		 * @since  1.0
		 *
		 * @param  label    Value to change the menu to.
		 * @return void
		 */
		function toggleLabel( label ) {
			// If the element is not cached, cache it
			if ( 'object'  !== cache.$navMenuLabel ) {
				cache.$navMenuLabel = $( 'span', '#' + cache.responsiveNavOptions.customToggle );
			}

			// Set the label
			cache.$navMenuLabel.text( label );
		}

		// Initiate the actions.
		init( snapResponsiveNavOptions );
	}

	// Instantiate the "class".
	window.Snap = new Snap();
})( window, jQuery );
