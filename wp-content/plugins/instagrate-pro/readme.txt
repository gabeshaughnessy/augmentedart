=== Instagrate Pro ===
Contributors: polevaultweb
Plugin URI: http://www.instagrate.co.uk/
Author URI: http://www.polevaultweb.com/
Tags: instagram, posts, integration, automatic, post, wordpress, posting, images
Requires at least: 3.0
Tested up to: 3.7.1
Stable tag: 1.5.2

The best plugin to automatically integrate Instagram images with WordPress.

== Description ==

Instagrate Pro is a powerful WordPress plugin that allows you to automatically integrate Instagram images into your WordPress site.

== Installation ==

This section describes how to install the plugin and get it working.

1. Delete any existing `instagrate-pro` folder from the `/wp-content/plugins/` directory.
2. Upload `instagrate-pro` folder to the `/wp-content/plugins/` directory.
3. Activate the plugin through the 'Plugins' menu in WordPress.
4. Go to the Instagrate Pro menu item under the 'Settings' menu and connect your Instagram accounts and set the rest of configuration you want.

To update the plugin either use the automatic updater or manually follow these steps:

1. Deactivate the plugin through the 'Plugins' menu in WordPress.
2. Delete any existing `instagrate-pro` folder from the `/wp-content/plugins/` directory.
3. Upload `instagrate-pro` folder to the `/wp-content/plugins/` directory.
4. Activate the plugin through the 'Plugins' menu in WordPress.

== Changelog ==

= 1.5.2 =

* Fix - Issues with Instagram image date not converting to timezone of WordPress site
* Fix - Image saving duplicate extension
* Fix - PHP Notice:  Undefined property: stdClass::$post_term
* Fix - PHP Notice:  Undefined property: instagrate_pro::$plgin_l10n
* Fix - PHP Warning:  Invalid argument supplied for foreach() on all accounts screen
* Improvement - Account edit screen UI changes and fixes
* Improvement - Bulk setting image statuses not unchecks after status changed

= 1.5.1 =

* New - Use your own Instagram API client
* Fix - Strict standards notices
* Fix - License message still showing after activation on plugins screen
* Improvement - Changed links to support page

= 1.5 =

* New - Tested up to 3.7.1
* New - Licensing (sellwire.net) and updates (wp-updates.com) verification
* New - Exclude a hashtag in filtering, eg. tag1, tag2, -tag3
* New - Filter 'igp_tag_sep' for %%tags%% tag. Default: " "
* New - Settings to hide certain meta boxes on the edit account page
* New - Ability to refresh you connect account's profile image
* New - All template tags run through filters for customising. E.g. %%location-name%% can be filtered with 'igp_template_location_name'
* Improvement - Added a check for is_front_page()
* Fix - Multiple hashag filtering
* Fix - Map JS and CSS not added unless shortcodes present
* Fix - Removed PHP warning wpdb::prepare() on multisite installs
* Fix - Responsive videos in WP 3.6+
* Fix - Issues with long captions in account admin images

= 1.4.2 =

* New - Ability to set the Caption of an image when saving to media library. Full control with template tags and a filter: igp_image_caption.
* New - Title length limit options - characters, words.
* New - Post title filter: igp_post_title
* Fix - Map CSS issue.

= 1.4.1 =

* New - Map zoom level setting.
* Improvement - For WordPress 3.6 installs [igp-video] uses the default HTML video player in WordPress.
* Fix - Bug when frequency changes to 'Manual' then button pressed straight away didn't work.
* Fix - Videos in admin didn't have icon when stream changed.
* New - Icon changed to new logo.


= 1.4 =

* Added - WordPress 3.6 compatibility.
* New - Multi Map setting for grouped images and shortcode for same posts, showing all the locations of multiple media in a post.
* New - Select multiple terms for a taxonomy.
* New - The ability to add default tags to an account. They will be always added to the create post or page as the tag taxonomy you choose in the setting 'Convert Image Hashtags to'.
* New - Media type filter for the Instagram stream in an account. Post images and videos, only images or only videos.
* New - When saving the images to the media library the filename will be the caption. However, you can now choose to save the images with the Instagram image ID as the filename e.g. c6077c14fe0a11e2b55e22000a9f09fb_7.jpg. This avoids any issues with non standard characters in the filename which can lead to the images not being displayed.
* New - Title length limit setting.
* New - Added link to settings page in plugin page.
* Improvement - References to Instagram images changed to Media as the plugin supports images and videos.
* Improvement - Using wp-updates.com for plugin automatic updates.
* Fix - Bug where manual button had to be pressed twice or didn't work.
* Fix - Template tag for just Instagram URL. Instagram Image URL and Video URL are now corrected to the media url.
* Fix - Conflict with settings of other plugins using the same settings framework.
* Fix - PHP notices on first save of a scheduled account.

= 1.3.2 =

* New - Embed support of images and videos.
* New - Media Id template tag.
* Fix - Issues with the video player shortcode.

= 1.3.1 =

* Fix - Image missing when posting to same post or page.

= 1.3 =

* New - Instagrate Pro now supports videos from Instagram.
* New - An option to set the amount of images to show when the account is edited. This helps performance for accounts with a large number of images.
* New - Added a URL that can be used by UNIX Cron jobs to schedule the posting of pending images from accounts with the Posting Frequency of 'Cron Job'.

= 1.2.2 =

* Fix - Syncing for likes.

= 1.2.1 =

* Fix - Migration for likes and comments.

= 1.2 =

* Added - WordPress 3.6 compatibility
* Added - Comments! The plugin now supports Instagram Comments as WordPress post comments. You can enable the import and control syncing of the comments from Instagram.
* Added - Likes! The plugin now supports Instagram Likes and syncing of them. You can use the template tag %%likes%%, the shortcode [igp-likes], or the post meta 'ig_likes' to display the Like count from Instagram.
* Added - Template Tag - Caption Tags No Hash
* Added - Template Tag - First Tag
* Improvement - Admin UI tweaks

= 1.1.4 = 

* Fix - Issues removing menu for non-admins
* Fix - Issues with hashtag filtering

= 1.1.3 =

* Fix - Images table converted to utf8 for chinese character support
* Fix - Resetting posting status when plugin jumps out of main posting function

= 1.1.2 =

* Added - Specific position of image location in the same post or page. Using the shortcode [igp-image-position position="above"]
* Added - Instagram user profile image url as a template tag
* Added - Instagram image tags as a template tag
* Fix - Improvements added to stop occasional duplicates
* Fix - Location posting position fix
* Fix - Custom post meta now being set if not using template tags as meta value
* Fix - Strip emoticons from bio when authorising Instagram account
* Fix - Custom placeholder text for title
* Fix - Location distance bug
* Improvement - Admin UI tweaks
* Improvement - Debug data tweaks

= 1.1.1 =

* Fix - Custom taxonomy issues
* Fix - Scheduling issues
* Improvement - Manual posting image count update
* Fix - Removed Media from post type select as not relevant to plugin
* Fix - Case issues with hashtag filtering

= 1.1.0 =

* New - Duplicate accounts
* Fix - Remove accent characters from filename to stop saving errors for some users
* Fix - sslverify issues on some hosts
* Fix - API notice for issues with SSL certificate

= 1.0.5 =

* Fix - Catching WP error during Instagram connect
* Fix - Catching WP error during API check
* Fix - Image saving errors - % in filename
* Fix - Setting status on an individual image
* Fix - General bug fixes and interface improvements

= 1.0.4 =

* Improvement - Map size choice of px or %
* Fix - Image saving errors
* Fix - Tag and caption issues
* Fix - Stop non published accounts being posted by a schedule
* Fix - Map bug when adding a custom class
* Fix - Schedules deactivated and unistalled correctly
* Fix - API down notice for some users
* Fix - General bug fixes and interface improvements

= 1.0.3 =

* Fix - Featured images not working
* Fix - Duplicate galleries on group posts

= 1.0.2 =

* Fix - Map shortcode for maps created pre v1.0.1

= 1.0.1 =

* Major release with a change of admin interface
* New - WordPress 3.5 compatible
* New - Multisite compatible
* New - Location image posting
* New - Post another users photos
* Improvement - Post all photos, no limit. Ability to get all older images
* Improvement - When a new batch of images are posted, all images between the last one posted and the newest images are posted
* New - Performance issues fixed when using a large number of accounts
* New - View images for account in tne settings. Bulk and single control those to be posted or ignored. Easy to repost
* New - Custom featured image posts to use a selected image instead of one from Instagram.
* New - Full control of posting to taxonomies and setting image hashtags to a taxonomy not just tags. Support for custom post type taxonomies
* New - Google map setting for map style
* Improvement - Better scheduling. Set time and day of the schedule start
* Improvement - Images saved to media library now with image name as file name
* New - Multiple hashtag filtering on all types of images
* New - New post content system with lots of template tags. Full control of the post content created
* New - Add custom post meta with template tags
* New - Can choose the order of images posted to grouped post or same post
* New - Can choose the placement of new images when posting to same post

= 0.3.1 = 

* Fix - Reinstated post meta for location data.
* Fix - Custom post text with %%title%% now showing correctly if custom title was also set.

= 0.3 =

* New - Continual posting of images to the same post, page or custom post type.
* New - Image link option to open in new window.
* New - New template tag for Instagram image taken date - %%date%%.
* New - New template tag for Instagram location name for geotagged images - %%location%%.
* Improvement - Custom body text now allows HTML content.
* Improvement - Warning if cURL extension not installed. This is a prerequisite of the plugin.
* Fix - The plugin's settings are now only visible to administrators.
* Fix - Post is only published once image is set. This is a fix for users with auto social posting plugins who weren't seeing images in their social posts.
* Fix - Small warning in updater.
* Fix - Removed post meta for location data as this is stored in shortcode in the post body.

= 0.2.2 =

* New - New template tag for Instagram username - %%username%%
* New - Added better custom body text support for mulitple images in single posts.
* Fix - Removes error message if hashtagging selected but no tag inputted, or tag has no photos.
* Fix - Changed the way the Google Maps are saved and displayed using shortcodes to avoid stripping of HTML tags by WordPress.
* Misc - Amends code comment before post to remove links, leaving just plugin name and version for troubleshooting.

= 0.2.1 =

* Fix - Strips emojis but keeps foreign characters in the Instagram image title.
* Fix - Last image Id not updating correctly.
* Fix - Debug.txt was getting deleted on check to see if write permissions existed.

= 0.2 =

* New - Automatic plugin updates!
* New - Option to override is_home() check setting on automatic posting if themes do not have a set blog page.
* New - Option to allow duplicate posting of images by separate accounts. By default images will only ever get posted once.
* New - Accounts display info if the Instagram servers are down.
* Fix - Posting issues if Instagram server is down.
* Fix - PHP notices on has_cap and get_theme.
* Fix - Removed nested form bugs for browser compatibility.
* Fix - Checks for write permissions on debug.txt file and displays message if not writeable.

= 0.1.1 =

* Fix - extended schedules (weekly and longer) not being run.
* Fix - custom / default post title for grouped image posts.
* Fix - removed special characters from post titles.

= 0.1 =

* First release, bugs expected.

== Frequently Asked Questions ==

= I have an issue with the plugin =

Please visit the [Support Forum](http://www.polevaultweb.com/support/forum/instagrate-pro-plugin/) and see what has been raised before, if not raise a new topic.

== Disclaimer ==

This plugin uses the Instagram(tm) API and is not endorsed or certified by Instagram or Burbn, inc. All Instagram(tm) logoes and trademarks displayed on this website are property of Burbn, inc.