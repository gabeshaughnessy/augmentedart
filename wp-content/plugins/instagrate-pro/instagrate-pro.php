<?php
/*  
Plugin Name: Instagrate Pro
Plugin URI: http://www.instagrate.co.uk/  
Description: Instagrate Pro is a powerful WordPress plugin that allows you to automatically integrate Instagram images into your WordPress site.
Author: polevaultweb 
Version: 1.5.2
Author URI: http://www.polevaultweb.com/

Copyright 2012  polevaultweb  (email : info@polevaultweb.com)

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License, version 2, as 
published by the Free Software Foundation.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

*/

class instagrate_pro {

    private $plugin_path;
    private $plugin_url;
	private $plugin_version;
	private $plugin_db_version;
    private $plugin_table;
	private $plugin_l10n;
	
	private $sellwire_id;
	private $sellwire_url;
    
	private $api_base;
	private $access_token_url;
	private $authorize_url;
	private $consumer_key;
	private $consumer_secret;
	private $redirect_uri;
	
	private $http_timeout;
	private $http_user_agent;
	
	private $template_image;
	private $template_video;
	private $template_caption;
	private $template_caption_tags_no_hash;
	private $template_caption_no_tags;
	private $template_tags;
	private $template_tags_first;
	private $template_username;
	private $template_user_profile_url;
	private $template_user_profile_image_url;
	private $template_instagram_media_type;
	private $template_instagram_url;
	private $template_instagram_image_url;
	private $template_instagram_video_url;
	private $template_wordpress_image_url;
	private $template_wordpress_video_url;
	private $template_wordpress_post_url;
	private $template_map;
	private $template_location_lat;
	private $template_location_lng;
	private $template_location_name;
	private $template_date;
	private $template_filter;
	private $template_likes;
	private $template_instagram_media_id;
	private $template_instagram_embed_url;
	
	private $debug_mode;
	private $debug_text;
	
	public $video_count = 0;

    function __construct()
    {	
        // Set up default vars
        $this->plugin_path = plugin_dir_path( __FILE__ );
        $this->plugin_url = plugin_dir_url( __FILE__ );
		$this->plugin_version = '1.5.2';
		$this->plugin_db_version = '1.3';
        $this->plugin_table = 'igp_images';
		$this->plugin_l10n = 'instagrate-pro';
		
		// Sellwire 
		$this->sellwire_id = 'uz';
		$this->sellwire_url = 'https://app.sellwire.net/api/1/';
		
		// Instagram API
		$this->consumer_key = '41107c261543439b870a95c97fd17398';
		$this->consumer_secret = '6879b4b9656c4365aed0843333f641b4';
		$this->redirect_uri = 'http://plugins.polevaultweb.com/igpv2.php';
		$this->api_base = 'https://api.instagram.com/v1/';
		$this->access_token_url = 'https://api.instagram.com/oauth/access_token/';
		$this->authorize_url = 'https://api.instagram.com/oauth/authorize/';
		
		// Http helpers
		$this->http_timeout = 60;
		$this->http_user_agent = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; .NET CLR 1.1.4322)';
		
		// Template tags
		$this->template_image = '';
		$this->template_video = '';
		$this->template_caption = '';
		$this->template_caption_tags_no_hash = '';
		$this->template_caption_no_tags = '';
		$this->template_tags = '';
		$this->template_tags_first = '';
		$this->template_username = '';
		$this->template_user_profile_url = '';
		$this->template_user_profile_image_url = '';
		$this->template_instagram_media_type = '';
		$this->template_instagram_url = '';
		$this->template_instagram_image_url = '';
		$this->template_instagram_video_url = '';
		$this->template_wordpress_image_url = '';
		$this->template_wordpress_video_url = '';
		$this->template_wordpress_post_url = '';
		$this->template_map = '';
		$this->template_location_lat = '';
		$this->template_location_lng = '';
		$this->template_location_name = '';
		$this->template_date = '';
		$this->template_filter = '';
		$this->template_likes = '[igp-likes]';
		$this->template_instagram_media_id = '';
		$this->template_instagram_embed_url = '';
			
		$this->debug_mode = false;
		$this->debug_text = '';
		
        
		// Set up activation hooks
        register_activation_hook( __FILE__, array(&$this, 'activate') );
        register_deactivation_hook( __FILE__, array(&$this, 'deactivate') );
		
		// Set up uninstall hook
		register_uninstall_hook(__FILE__, 'igp_uninstall_plugin');
        
		// Set up l10n
        load_plugin_textdomain( 'instagrate-pro', false, dirname( plugin_basename( __FILE__ ) ) . '/lang' );
        
        // Hooks/filters
        add_action( 'init', array(&$this, 'init') );
        add_filter('post_updated_messages', array(&$this, 'updated_messages'));
        add_action('manage_edit-instagrate_pro_columns', array(&$this, 'edit_columns'));
        add_action('manage_instagrate_pro_posts_custom_column', array(&$this, 'custom_columns'));
		add_action('admin_menu', array(&$this, 'add_sub_menus'));
		add_action('admin_menu', array(&$this, 'remove_sub_menus'));
		add_action('admin_init', array(&$this, 'admin_init'));
		add_action('admin_print_footer_scripts', array(&$this, 'custom_quicktags'));
		add_action('save_post', array(&$this, 'save_post_meta'));
		add_action('admin_enqueue_scripts', array(&$this, 'add_admin_scripts'));
		
		add_filter('plugin_action_links', array(&$this, 'plugin_action_links' ), 10, 2);
		add_filter('cron_schedules', array(&$this, 'add_custom_schedules' ));
		add_filter('admin_init', array(&$this, 'remove_media_button' ));
		add_filter('admin_post_thumbnail_html',  array(&$this, 'custom_feat_image_text'));
		add_filter('bulk_actions-edit-instagrate_pro',  array(&$this,'remove_bulk_edit') );
		add_filter('sanitize_file_name_chars',  array(&$this,'add_to_sanitize') );
		add_filter('enter_title_here', array(&$this,'custom_enter_title_here') );
		add_filter('get_avatar', array(&$this, 'instagram_avatar'), 10, 5);

		add_action('do_meta_boxes', array(&$this, 'change_image_box'));		
		add_action('do_meta_boxes', array(&$this, 'change_custom_meta_box'));	
		add_action('do_meta_boxes', array(&$this, 'change_tag_box'));	
		
		add_action('wpmu_new_blog', array(&$this,'new_blog_install'), 10, 6);   
		add_action('delete_post', array(&$this,'delete_igp_post'));  
		add_action('admin_menu', array(&$this, 'disable_menu'));
		add_action('admin_notices', array(&$this, 'plugin_admin_notice'));
		add_action('wp_enqueue_scripts', array(&$this, 'add_map_scripts'));
		add_action('the_posts', array(&$this, 'has_video_shortcode'));
		add_action('scheduled_post_account', array(&$this, 'post_account'));
		add_action('template_redirect', array(&$this,'controller'));
		
		add_shortcode('igp_map', array(&$this, 'get_map_shortcode') );
		add_shortcode('igp_multimap', array(&$this, 'get_multimap_shortcode') );
		add_shortcode('igp-likes', array(&$this, 'get_likes') );
		add_shortcode('igp_get_map', array(&$this, 'get_map_shortcode') );
		add_shortcode('igp-image-position', array($this, 'image_position') );
		add_shortcode('igp-video', array($this, 'get_video') );
		add_shortcode('igp-embed', array($this, 'get_embed') );
		
		// Ajax Hooks
		add_action('wp_ajax_igp_post_objects', array(&$this,'igp_post_objects_callback'));
		add_action('wp_ajax_igp_taxonomies', array(&$this,'igp_taxonomies_callback'));
		add_action('wp_ajax_igp_terms', array(&$this,'igp_terms_callback'));
		add_action('wp_ajax_igp_tag_taxonomies', array(&$this,'igp_tag_taxonomies_callback'));
		add_action('wp_ajax_igp_load_images', array(&$this,'igp_load_images_callback'));
		add_action('wp_ajax_igp_load_meta', array(&$this,'igp_load_meta_callback'));
		add_action('wp_ajax_igp_save_meta', array(&$this,'igp_save_meta_callback'));
		add_action('wp_ajax_igp_manual_frequency', array(&$this,'igp_manual_frequency_callback'));
		add_action('wp_ajax_igp_bulk_edit_status', array(&$this,'igp_bulk_edit_status_callback'));
		add_action('wp_ajax_igp_disconnect', array(&$this,'igp_disconnect_callback'));
		add_action('wp_ajax_igp_refresh', array(&$this,'igp_refresh_callback'));
		add_action('wp_ajax_igp_change_stream', array(&$this,'igp_change_stream_callback'));
		add_action('wp_ajax_igp_get_user_id', array(&$this,'igp_get_user_id_callback'));
		add_action('wp_ajax_igp_get_locations', array(&$this,'igp_get_locations_callback'));
		add_action('wp_ajax_igp_send_install_data', array(&$this,'igp_send_install_data_callback'));
		add_action('wp_ajax_igp_send_debug_data', array(&$this,'igp_send_debug_data_callback'));
		add_action('wp_ajax_igp_manual_post', array(&$this,'igp_manual_post_callback'));
		add_action('wp_ajax_igp_duplicate_account', array(&$this,'igp_duplicate_account_callback'));
		add_action('wp_ajax_igp_sync_likes', array(&$this,'igp_sync_likes'));
		add_action('wp_ajax_igp_sync_comments', array(&$this,'igp_sync_comments'));
		add_action('wp_ajax_nopriv_instagram_sync', array($this, 'sync_all_comments_likes'));
		add_action('wp_ajax_nopriv_instagrate', array($this, 'cron_controller'));
		
		add_action('wp_ajax_igp_activate_license', array(&$this, 'activate_license'));
        add_action('wp_ajax_igp_deactivate_license', array(&$this, 'deactivate_license'));
        add_action('after_plugin_row_'. plugin_basename( __FILE__ ), array( $this, 'plugin_row' ), 11 );
        
		// Settings
		require_once( $this->plugin_path .'includes/wp-settings-framework.php' );
        $this->wpsf = new igpWordPressSettingsFramework( $this->plugin_path .'includes/igp-settings.php' );
        add_filter( $this->wpsf->get_option_group() .'_settings_validate', array(&$this, 'validate_settings') );
        $this->settings = wpsf_get_settings( $this->plugin_path .'includes/igp-settings.php' );
		
		// Upgrade Check
		add_action('admin_init', array(&$this,'upgrade_check'));
		
		// Emoji for stripping emoticons
		include('includes/emoji.php');
		
		// Auto updates via wp-updates.com
		require_once('includes/wp-updates-plugin.php');
		$license = $this->get_license_key();
		new WPUpdatesPluginUpdater_200( 'http://wp-updates.com/api/2/plugin', plugin_basename(__FILE__), $license);

    }
    
    function activate( $network_wide ) {
    	global $wpdb;
	    if (function_exists('is_multisite') && is_multisite()) {
	        // check if it is a network activation - if so, run the activation function for each blog id
	        if ($network_wide) {
	            $current_blog = $wpdb->blogid;
	            // Get all blog ids
	            $blogids = $wpdb->get_col("SELECT blog_id FROM $wpdb->blogs");
	            foreach ($blogids as $blog_id) {
	                switch_to_blog($blog_id);
	                $this->install();
	            }
	            switch_to_blog($current_blog);
	            return;
	        }  
	    }
	    $this->install();          
    }
    
    function new_blog_install($blog_id, $user_id, $domain, $path, $site_id, $meta ) {
	    global $wpdb;
	    if (is_plugin_active_for_network('instagrate-pro/instagrate-pro')) {
	        $old_blog = $wpdb->blogid;
	        switch_to_blog($blog_id);
	        $this->install();
	        switch_to_blog($old_blog);
	    }
	}
    
    function deactivate( $network_wide ) {
    	global $wpdb;
	    if (function_exists('is_multisite') && is_multisite()) {
	        // check if it is a network deactivation - if so, run the deactivation function for each blog id
	        if ($network_wide) {
	            $current_blog = $wpdb->blogid;
	            // Get all blog ids
	            $blogids = $wpdb->get_col("SELECT blog_id FROM $wpdb->blogs");
	            foreach ($blogids as $blog_id) {
	                switch_to_blog($blog_id);
	                $this->deactivate_plugin();
	            }
	            switch_to_blog($current_blog);
	            return;
	        }  
	    }
	    $this->deactivate_plugin();   
    }
    
    
    function deactivate_plugin () {
    	$this->clear_schedules();
    }
	
	function install($upgrade = false) {
	   // Reactivate schedules
	   if (!$upgrade) $this->reactivate_schedules();
	   // Install Table
	   global $wpdb;
	   $installed_ver = (get_option('igp_db_version')) ? get_option( 'igp_db_version' ) : '0';
	   if( version_compare( $installed_ver, $this->plugin_db_version, '!=' )) {
		   $table_name = $wpdb->prefix . $this->plugin_table;
		   $sql = 	"CREATE TABLE $table_name (
						  id int(11) unsigned NOT NULL AUTO_INCREMENT,
						  account_id bigint(20) NOT NULL,
						  image_id varchar(256) NOT NULL,
						  image_timestamp bigint(20) NOT NULL,
						  status enum('pending','posted','ignore','posting') NOT NULL,
						  media_type varchar(50) NOT NULL,
						  image_url varchar(256) NOT NULL,
						  image_thumb_url varchar(256) NOT NULL,
						  video_url varchar(256) NOT NULL,
						  tags text NULL,
						  filter varchar(256) NULL,
						  link varchar(256) NULL,
						  caption text NULL,
						  caption_clean text NULL,
						  caption_clean_no_tags text NULL,
						  username text NULL,
						  user_id varchar(256) NULL,
						  user_image_url text NULL,
						  latitude varchar(256) NULL,
						  longitude varchar(256) NULL,
						  location_name text NULL,
						  location_id varchar(256) NULL,
						  comments_count bigint(20) NOT NULL,
						  comments longblob NOT NULL,
						  likes_count bigint(20) NOT NULL,
						  UNIQUE KEY (id)
					) DEFAULT CHARACTER SET utf8;";

		   require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
		   dbDelta($sql);
		   update_option('igp_db_version', $this->plugin_db_version);
		}
	}
		
	function upgrade_check() {
		
		if (!get_option('pvw_igp_version')) {
			add_option( 'pvw_igp_version',  $this->plugin_version );
			return;
		}
		$current_version = get_option('pvw_igp_version');
		if ( version_compare( $current_version, $this->plugin_version, '!=' ) ){
			// Database upgrades
			$this->install(true);
			
			// Large upgrade to v1.0
			if ( version_compare( $current_version, '1.0', '<' ) ) {
				$this->migrate_one_zero();
			}
			
			// UTF8 Changes to images table
			if ( version_compare( $current_version, '1.1.3', '<' ) ) {
				global $wpdb;
				$table = $wpdb->prefix . $this->plugin_table;
				$wpdb->query( "	alter table $table change tags tags BLOB;" );
				$wpdb->query( "alter table $table change tags tags text CHARACTER SET utf8;" );		
				$wpdb->query( "alter table $table change caption caption BLOB;" );
				$wpdb->query( "alter table $table change caption caption text CHARACTER SET utf8;" );				
				$wpdb->query( "alter table $table change caption_clean caption_clean BLOB;" );
				$wpdb->query( "alter table $table change caption_clean caption_clean text CHARACTER SET utf8;" );			
				$wpdb->query( "alter table $table change caption_clean_no_tags caption_clean_no_tags BLOB;" );
				$wpdb->query( "alter table $table change caption_clean_no_tags caption_clean_no_tags text CHARACTER SET utf8;" );			
				$wpdb->query( "alter table $table change username username BLOB;" );
				$wpdb->query( "alter table $table change username username text CHARACTER SET utf8; " );				
				$wpdb->query( "alter table $table CHARACTER SET utf8;" );
		
			}
			
			// Large upgrade to v1.2
			if ( version_compare( $current_version, '1.2.1', '<' ) ) {
				$this->migrate_one_two();
			}
					
			// Finally update the database version
			update_option( 'pvw_igp_version',  $this->plugin_version );
		}
	} 
	
	function plugin_admin_notice(){
		global $post;
		if((isset($post->post_type) && $post->post_type == 'instagrate_pro') 
			|| (isset($_GET['page']) && $_GET['page'] == 'instagrate-pro-settings')){
			
			// Duplicate Account
			if(isset($_GET['message']) && $_GET['message'] == '14') {
				echo 	'<div class="updated">
							<p>'. __( 'Account duplicated' ) .' </p>
						</div>';
			}
			// Likes Synced Account
			if(isset($_GET['message']) && $_GET['message'] == '15') {
				echo 	'<div class="updated">
							<p>'. __( 'Likes have been synced for this account successfully' ) .' </p>
						</div>';
			}
			// Comments Synced Account
			if(isset($_GET['message']) && $_GET['message'] == '16') {
				echo 	'<div class="updated">
							<p>'. __( 'Comments have been synced for this account successfully' ) .' </p>
						</div>';
			}
			// Display check for user to make sure a blog page is selected 
			if ('page' == get_option('show_on_front')) {
				if ( 0 == get_option('page_for_posts') ) {
					$link_text = __( 'Settings -> Reading', $this->plugin_l10n );
					$link = '<a href="'. get_admin_url() .'options-reading.php">'. $link_text .'</a>';
					echo '<div class="updated">
							<p>'. __( 'You must select a page to display your posts in ', $this->plugin_l10n ). $link .' </p>
						</div>';
				}
			}
			// Display check to make sure there is write permissions on the debug file 
			$debug_mode = $this->default_val($this->settings, 'igpsettings_support_debug-mode', '0');
			$debug_file = $this->plugin_path .'debug.txt';
			$file = file_exists($debug_file);
			if ($debug_mode == 1 && $file) {
				$write = $this->can_write($debug_file);
				if ($write == false) {
					$link_text = __( 'file', $this->plugin_l10n );
					$link = ' <a href="'.  plugin_dir_url( __FILE__ ) . 'debug.txt">debug.txt '. $link_text .'</a>';
					echo '<div class="error">
							<p>'. __( 'Debug mode is turned on. However, the debug file in the plugin folder is not writeable. Please contact your web hosting provider to amend the permissions on the', $this->plugin_l10n ). $link .'</p>
						  </div>';
				}
			}
			// Instagram API Check
			$check = array();
			$check = $this->instagram_api_check();
			if ($check[0] == 0) {
				echo '<div class="error"><p>'.$check[1].'</p></div>';	
			}
			// Account Error Message
			if(isset($_GET['post']) && isset($_GET['action']) && $_GET['action'] == 'edit') {
				$account_settings = get_post_meta($post->ID, '_instagrate_pro_settings', true );
				$settings = (object)$account_settings;	
				if (isset($settings->ig_error) && $settings->ig_error != '') {
					echo '<div class="error"><p>'. $settings->ig_error .'</p></div>';	
				} 	
			}
			// Auto Draft Warning Message
			if(isset($_GET['post_type']) && $_GET['post_type'] == 'instagrate_pro') {
				if (isset($post->post_status) && $post->post_status == 'auto-draft') {
					echo '<div class="updated"><p>'. __( 'You must save the draft of this account before authorising with Instagram', $this->plugin_l10n ) .'</p></div>';	
				}
			}
			// Safe mode for execution time
			if (ini_get('safe_mode') && ini_get('max_execution_time') != 0) {
					echo '<div class="updated">
							<p>'. sprintf(
					__("%sSafe mode%s is enabled on your server, so the PHP time and memory limits cannot be set by this plugin.
					Your time limit is %s seconds and your memory limit is %s, so if your accounts are posting lots of images at a time and saving them to the WordPress Media Library this may exceed the execution time. Each host has different methods available to increase these settings and a quick Google search should
					yield some information. If not, please contact your host for help.
					If you cannot find an answer, please feel free to post a new topic.", $this->plugin_l10n),
					'<a href="http://php.net/manual/en/features.safe-mode.php"><strong>',
					'</a></strong>',
					ini_get('max_execution_time'),
					ini_get('memory_limit'),
					'</a>') .' </p>
						</div>';
			}
		}
	}

    function init() {
        $labels = array(
            'name' => _x( 'Instagrate Accounts', 'post type general name' ),
            'singular_name' => _x( 'Account', 'post type singular name' ),
            'add_new' => __( 'Add Account', $this->plugin_l10n ),
            'all_items' => __( 'All Accounts', $this->plugin_l10n ),
			'add_new_item' => __( 'Add New Account', $this->plugin_l10n ),
            'edit_item' => __( 'Edit Account', $this->plugin_l10n ),
            'new_item' => __( 'New Account', $this->plugin_l10n ),
            'view_item' => __( 'View Account', $this->plugin_l10n ),
            'search_items' => __( 'Search Accounts', $this->plugin_l10n ),
            'not_found' =>  __( 'No Accounts found', $this->plugin_l10n ),
            'not_found_in_trash' => __( 'No Accounts found in Trash', $this->plugin_l10n ), 
            'menu_name' => 'Instagrate Pro',
        );
		
        register_post_type(
            'instagrate_pro',
            array(
                'labels' => $labels,
                'public' => false,
                'show_ui' => true,
                'menu_position' => 100,
                'supports' => array( 'title', 'editor', 'custom-fields', 'thumbnail' ),
                'taxonomies' => array('post_tag'),
                'menu_icon' => plugins_url('assets/img/favicon.png' , __FILE__ )
               )
        );
		if( current_user_can('edit_posts') && current_user_can('edit_pages') && get_user_option('rich_editing') == 'true' ){
			add_filter( 'user_can_richedit', array(&$this, 'disable_visual_editor') );
		}
			
    }
	
	function disable_menu() {
		$default =  array();
		$default[] = 'administrator';
		$allowed_roles = apply_filters( 'igp_allowed_roles', $default );
		global $current_user;
		$user_roles = $current_user->roles;
		$show = false;
		foreach ($allowed_roles as $role) {
			if (in_array($role , $user_roles)) $show = true;
		}
		if (!$show) remove_menu_page( 'edit.php?post_type=instagrate_pro' );
    }
	
	function disable_visual_editor( $default ) {
		global $post;
		if ( 'instagrate_pro' == get_post_type( $post ) ) return false;
		return $default;
	}
		
	function admin_init() {
		global $post;
		$account_id = 0;
		if(isset($_GET['post']) && isset($_GET['action']) && $_GET['action'] == 'edit') $account_id = $_GET['post'];
		add_meta_box( 'igp_instagram_box', __( 'Instagram Settings', $this->plugin_l10n ), array(&$this, 'meta_box_instagram'), 'instagrate_pro', 'side', 'high' );
		add_meta_box( 'igp_images_box', __( 'Instagram Media'. $this->get_images_key($account_id), $this->plugin_l10n ), array(&$this, 'meta_box_images'), 'instagrate_pro', 'normal', 'high' );
		
		if ($this->default_val($this->settings, 'igpsettings_general_hide-meta-template', '0') == '0')
			add_meta_box( 'igp_template_tags_box', __( 'Template Tags', $this->plugin_l10n ), array(&$this, 'meta_box_template_tags'), 'instagrate_pro', 'normal', 'high' );
			
			
		add_meta_box( 'igp_posting_box', __( 'Posting Settings', $this->plugin_l10n ), array(&$this, 'meta_box_posting'), 'instagrate_pro', 'side', 'default' );
		add_meta_box( 'igp_post_box', __( 'Post Settings', $this->plugin_l10n ), array(&$this, 'meta_box_post'), 'instagrate_pro', 'side', 'default' );
		if ($this->default_val($this->settings, 'igpsettings_general_hide-meta-map', '0') == '0')
			add_meta_box( 'igp_map_map', __( 'Map Settings', $this->plugin_l10n ), array(&$this, 'meta_box_map'), 'instagrate_pro', 'side', 'low' );
		
		if ($this->default_val($this->settings, 'igpsettings_general_hide-meta-links', '0') == '0')
			add_meta_box( 'igp_links', __( 'Useful Links', $this->plugin_l10n ), array(&$this, 'meta_box_links'), 'instagrate_pro', 'normal', 'low' );
		$this->instagram_connect();

		// Retrieve Images if PT is Instagrate_pro, account is logged in and not auto-draft
		global $post;
		if(isset($_GET['post']) && isset($_GET['action']) && $_GET['action'] == 'edit') {
			$post = get_post($_GET['post']);
			if ( 'instagrate_pro' == get_post_type( $post ) && $post->post_status != 'auto-draft') {
				$this->retrieve_images($post->ID);	
			}
		}	
	}
	
	function plugin_action_links($links, $file) {
	    static $this_plugin;
		if (!$this_plugin) {
	        $this_plugin = plugin_basename(__FILE__);
	    }
		if ($file == $this_plugin) {
	        $settings_link = '<a href="' . get_admin_url() .'edit.php?post_type=instagrate_pro&page=instagrate-pro-settings">'. __('Settings') .'</a>';
	        array_unshift($links, $settings_link);
	    }
	    return $links;
	}
		
	function updated_messages( $messages ) {
        global $post, $post_ID;

        $instagrate_messages = array(
            0 => '', 
            1 => __('Account updated.', $this->plugin_l10n),
            2 => __('Custom field updated.', $this->plugin_l10n),
            3 => __('Custom field deleted.', $this->plugin_l10n),
            4 => __('Account updated.', $this->plugin_l10n),
            5 => isset($_GET['revision']) ? sprintf( __('Account restored to revision from %s', $this->plugin_l10n), wp_post_revision_title( (int) $_GET['revision'], false ) ) : false,
            6 => __('Account published.', $this->plugin_l10n),
            7 => __('Account saved.', $this->plugin_l10n),
            8 => __('Account submitted.', $this->plugin_l10n),
            9 => sprintf( __('Account scheduled for: <strong>%1$s</strong>. <a target="_blank" href="%2$s">Preview Account</a>', $this->plugin_l10n),
                date_i18n( __( 'M j, Y @ G:i', $this->plugin_l10n ), strtotime( $post->post_date ) ), esc_url( get_permalink($post_ID) ) ),
            10 => __('Account draft updated.', $this->plugin_l10n),
            11 => __('Instagram account connected.', $this->plugin_l10n),
			12 => __('Instagram account disconnected.', $this->plugin_l10n),
			13 => __('You did not authorise your Instagram account with this plugin.', $this->plugin_l10n),
			14 => __('Account duplicated.', $this->plugin_l10n),
			15 => __('Likes have been synced for this account successfully.', $this->plugin_l10n),
			16 => __('Comments have been synced for this account successfully.', $this->plugin_l10n)
        );
        
        $messages['instagrate_pro'] = $instagrate_messages;
        return $messages;
    }
    
    function edit_columns( $columns ) {
        $columns = array(
            'cb' => '<input type="checkbox" />',
            'profile-img' => __( '', $this->plugin_l10n ),
            'profile' => __( 'Profile', $this->plugin_l10n ),
            'images' => __( 'Media', $this->plugin_l10n ),
            'frequency' => __( 'Frequency', $this->plugin_l10n ),
            'multiple-images' => __( 'Multiple Media', $this->plugin_l10n ),
            'type' => __( 'Type', $this->plugin_l10n ),
            'imagesaving' => __( 'Media Saving', $this->plugin_l10n ),
            'classification' => __( 'Classification', $this->plugin_l10n ),
            'status' => __( 'Status', $this->plugin_l10n ),
            'title' => __( 'Custom Title', $this->plugin_l10n ),
			'igp-actions' => __( 'Actions', $this->plugin_l10n ),
        );
        return $columns;
    }

    function custom_columns( $column ) {
        global $post;
        $options = get_post_meta( $post->ID, '_instagrate_pro_settings', true );
        $profile_src = plugins_url('assets/img/not-connected.png' , __FILE__ );
        $profile_name = 'Not connected';
        if ($this->default_val($options, 'token', '') != '') $profile_name = $options['username'];
        if ($this->default_val($options, 'user_thumb', '') != '') $profile_src = $options['user_thumb'];
        $edit_url = get_admin_url() .'post.php?post='. $post->ID .'&amp;action=edit';
        switch ( $column )
        {
            case 'profile-img':
            ?>
            	<a href="<?php echo $edit_url; ?>"><img src="<?php echo $profile_src; ?>" width="30" height="30" alt="<?php echo $profile_name; ?>"></a>
            <?php
            	break;
            case 'profile':      
             ?>
                <strong><a href="<?php echo $edit_url; ?>" title="Edit Account"><?php echo $profile_name ?></a></strong><br/>
            <?php
                echo $this->get_images_key($post->ID, true);			
				break;
            case 'images':  
				$posting = $this->default_val($options, 'instagram_images', '');
				if ($posting =='') $posting_text = __('Not configured', $this->plugin_l10n);
				else {
					$posting_text = ucfirst($posting) . __(' Media', $this->plugin_l10n);
					if ($posting == 'users' && $this->default_val($options, 'instagram_user', '') != '' && $this->default_val($options, 'instagram_users_id', '') != '') {
						$posting_text .= '<br/>'. __( 'User', $this->plugin_l10n ) .': <strong>'. $this->default_val($options, 'instagram_user', '') .'</strong>';
					}
					if ($posting == 'location' && $this->default_val($options, 'instagram_location', '') != '' && $this->default_val($options, 'instagram_location_id', '') != '') {
						$posting_text .= '<br/><strong>'. $this->get_location_name($post->ID, $this->default_val($options, 'instagram_location_id', '')) .'</strong>';
					}
					
					$filter = $this->default_val($options, 'instagram_hashtags', '');
					if ($filter != '') $posting_text .= '<br/>'. __( 'Filter', $this->plugin_l10n ) .': <strong>'. $filter .'</strong>';
				}
				echo $posting_text;
   				break;
   			case 'frequency':  
				$frequency = $this->default_val($options, 'posting_frequency', 'constant');
				$frequency = ucfirst($frequency);
				if ($frequency == 'Schedule') {
					$frequency .= ' - '. $this->get_all_schedules($this->default_val($options, 'posting_schedule', 'igp_daily'));
					$frequency .= '<br/><div class="curtime"><span id="timestamp">'. __( 'Next', $this->plugin_l10n ) .': <b>'. $this->get_next_schedule($post->ID, $this->default_val($options, 'posting_schedule', 'igp_daily')) .'</b></span></div>';
				}
				echo $frequency;
   				break;
   			case 'multiple-images':  
				$multiple = $this->default_val($options, 'posting_multiple', 'each');
				switch ($multiple) {
					case 'each':
						$multiple_text = __( 'Post Per Media', $this->plugin_l10n );
					break;
					case 'group':
						$multiple_text = __( 'Media Grouped', $this->plugin_l10n );
					break;
					case 'single':
						$type = $this->default_val($options, 'post_type', 'post');
						$same_post = $this->default_val($options, 'posting_same_post', '');
						if ($same_post != '') {
							$same_post = get_post($same_post);
							$same_post = $same_post->post_title;
							$same_post = '<br/><strong>'. $same_post .'</strong>';
						}
						$multiple_text = __( 'Same', $this->plugin_l10n ) .' '. ucfirst($type) . $same_post ;
					break;
				}
				echo $multiple_text;
   				break;
   			case 'imagesaving':  
				$feat = ($this->default_val($options, 'post_featured_image', 'off') == 'on') ? '<br/>Featured Image' : '';
				$saving = ($this->default_val($options, 'post_save_media', 'off') == 'on') ? __( 'Media Library', $this->plugin_l10n ) . $feat : __( 'Instagram Media', $this->plugin_l10n );
				echo $saving;
   				break;
   			case 'classification':
   				$tax = ($this->default_val($options, 'post_taxonomy', '0') != '0') ? ucwords($this->default_val($options, 'post_taxonomy', '0')) : '';
   				if ($tax != '') {
   					$terms = $this->default_val($options, 'post_term', array());
   					if ( !is_array( $terms ) ) {
                        $terms = (array)$terms;
                    }
                    $term_text = '';
   					if ($terms && count($terms) > 0) {
	   					foreach ($terms as $term_selected) {
		   					$term_add = get_term( $term_selected, $this->default_val($options, 'post_taxonomy', '0'));
		   					if ( !is_wp_error( $term_add ) ) $term_text .= $term_add->name .', ';
	   					}
	   					if (substr($term_text, -2) == ', ' ) $term_text = substr($term_text, 0, -2);
	   				} else {
   						$term_text = 'Not Selected';
   					}
   					
   					echo __( 'Taxonomy', $this->plugin_l10n ) .': <strong>'. $tax . '</strong><br/>'. __( 'Terms', $this->plugin_l10n ) .': <strong>'. $term_text .'</strong>';
   				} else {
	   				_e( 'None', $this->plugin_l10n );
   				}
   				break;
   			case 'type':  
				$type = $this->default_val($options, 'post_type', 'post');
				echo ucfirst($type);
   				break;
   			case 'status':  
				$type = $this->default_val($options, 'post_status', 'publish');
				echo ucfirst($type);
   				break;
			case 'igp-actions':  
				$actions = '<a class="button igp-duplicate" title="Duplicate Account" rel="'. $post->ID .'" href="#">Duplicate</a>';
				$actions .= '<p><strong>Sync:</strong></p>';
				$actions .= '<a class="button igp-sync-likes" title="Sync Likes" rel="'. $post->ID .'" href="#">Likes</a>';
				if ($this->default_val($this->settings, 'igpsettings_comments_enable-comments', '0') == 1) {
					$actions .= '<a class="button igp-sync-comments" title="Sync Comments" rel="'. $post->ID .'" href="#">Comments</a>';
				}
				echo $actions;
   				break;
        }
    }
    
    function image_position($atts, $content = null) {
		extract(shortcode_atts(array( 'position' => 'below' ), $atts));
		return false;	
	}
	
	function custom_quicktags() {
		global $post;
		if((isset($post->post_type) && $post->post_type == 'instagrate_pro')) {
			if (have_posts()) return;
			$template_tags = $this->get_template_tags();
			$html = '<script type="text/javascript">'. " \n";
			$count = 1;
			foreach ($template_tags as $tag ) {
				$slug = 'igp_'. str_replace('-', '_', $tag['name']);
				$title = ucwords(str_replace('-', ' ', $tag['name']));
				$tag_name = '%%'. $tag['name'] .'%%';
				$num = 200 + $count;
				$html .= "QTags.addButton( '". $slug . "', '". $title ."', '". $tag_name ."', '', '', '". $tag['desc'] ."', ". $num ."); \n";
				$count ++;
			}
			$html .= '</script>';
			echo $html; 
		}
	}
	
	function remove_media_button() {
		global $post;
		if((isset($post->post_type) && $post->post_type == 'instagrate_pro') || (isset($_GET['post_type']) && $_GET['post_type'] == 'instagrate_pro') ) {
			remove_all_actions('media_buttons');
			add_action('media_buttons', array(&$this, 'custom_content_header'));
		}
	}
	
	function remove_bulk_edit( $actions ){
		unset( $actions[ 'edit' ] );
		return $actions;
	}
	
	function custom_content_header() {
	    $link_text = __( 'here', $this->plugin_l10n );
		$link = ' <a target="_blank" style="color: #21759B" href="http://www.instagrate.co.uk/docs/template-tags/">'. $link_text .'</a>';
		$title = __( 'You can find examples of template tag usage', $this->plugin_l10n ) . $link ;
	    echo $title;
	}
	
	function custom_enter_title_here( $title ){
	    $screen = get_current_screen();
	    if ( 'instagrate_pro' == $screen->post_type ) {
	        $title = __( 'Enter your custom title', $this->plugin_l10n ) .', eg. %%caption%% '. __( 'for just the Instagram image caption', $this->plugin_l10n );
	    }
	    return $title;
	}
	
	function change_image_box() {
		remove_meta_box( 'postimagediv', 'instagrate_pro', 'side' );
		if ($this->default_val($this->settings, 'igpsettings_general_hide-meta-featured', '0') == '0')
			add_meta_box('postimagediv', __('Custom Featured Image', $this->plugin_l10n), 'post_thumbnail_meta_box', 'instagrate_pro', 'side', 'low');
	}
	
	function change_custom_meta_box() {
		remove_meta_box( 'postcustom', 'instagrate_pro', 'normal' );
		if ($this->default_val($this->settings, 'igpsettings_general_hide-meta-custom', '0') == '0')	
			add_meta_box('postcustom', __('Custom Fields For Template Tags', $this->plugin_l10n), 'post_custom_meta_box', 'instagrate_pro', 'normal');
	}
	
	function change_tag_box() {
		remove_meta_box( 'tagsdiv-post_tag', 'instagrate_pro', 'side' );
		if ($this->default_val($this->settings, 'igpsettings_general_hide-meta-tags', '0') == '0')
			add_meta_box('tagsdiv-post_tag', __('Default Tags', $this->plugin_l10n), 'post_tags_meta_box', 'instagrate_pro', 'side');
	}
	
	function custom_feat_image_text( $content, $post_id = 0 ){
		$screen = get_current_screen();
	    if ( isset($screen) && 'instagrate_pro' == $screen->post_type ) {
	        $content = '<p>'. __( 'You can make an Instagram image the featured image by using the setting in the Post Settings box.', $this->plugin_l10n ) .'</p><p>'. __( 'Setting a featured image here will override that setting and always set the featured image as this image.', $this->plugin_l10n ) .'</p>'. str_replace(__('featured image'), __('custom featured image'), $content);
	    }
	    return $content;
	}
	
	function add_sub_menus() {
		add_submenu_page( 'edit.php?post_type=instagrate_pro', 'Settings', 'Settings', 'manage_options', 'instagrate-pro-settings', array(&$this, 'settings_page') );
    }
    
    function remove_sub_menus() {
		remove_submenu_page( 'edit.php?post_type=instagrate_pro', 'edit-tags.php?taxonomy=post_tag&amp;post_type=instagrate_pro');
    }
	
	function add_admin_scripts() {
		global $post;
		if((isset($post->post_type) && $post->post_type == 'instagrate_pro') 
			|| (isset($_GET['page']) && $_GET['page'] == 'instagrate-pro-settings')){	
			// js
            wp_register_script( 'igp-simple-modal', plugins_url('assets/js/jquery.simplemodal.1.4.1.min.js' , __FILE__ ), array('jquery'), $this->plugin_version );
            wp_enqueue_script( 'igp-simple-modal' );
            wp_register_script( 'igp-google-geo', 'https://maps.googleapis.com/maps/api/js?sensor=false', array('jquery'), $this->plugin_version );
			wp_enqueue_script( 'igp-google-geo' );
			
			$this->enqueue_video();
			
			wp_register_script( 'igp-admin', plugins_url('assets/js/igp-admin.js' , __FILE__ ), array('jquery', 'igp-simple-modal', 'igp-google-geo', 'igp-jplayer'), $this->plugin_version );
            wp_enqueue_script( 'igp-admin' );
			wp_localize_script( 'igp-admin', 'instagrate_pro', array(  'nonce' => wp_create_nonce('instagrate_pro'), 'jplayer_path' => plugins_url('assets/js/jquery.jplayer/' , __FILE__ )	));

			// css
			wp_register_style( 'igp-admin-style', plugins_url('assets/css/igp-admin.css' , __FILE__ ), array(), $this->plugin_version);
			wp_enqueue_style('igp-admin-style');
		}
	}
	
	private function enqueue_video() {
		wp_register_script( 'igp-jplayer', plugins_url('assets/js/jquery.jplayer/jquery.jplayer.min.js' , __FILE__ ), array('jquery'), $this->plugin_version );
        wp_enqueue_script( 'igp-jplayer' );
        wp_register_style( 'igp-jplayer-style', plugins_url('assets/css/igp-video.css' , __FILE__ ), array(), $this->plugin_version);
		wp_enqueue_style( 'igp-jplayer-style');
	}
	
	function has_map_shortcode($content) {
		$shortcodes = array( 'igp_map', 'igp_multimap', 'igp_get_map' ); 
		foreach ($shortcodes as $shortcode) {
			if ($this->has_shortcode_wrap($content, $shortcode)) {
				return true;
			}
		}
		return false;
	}
	
	function has_shortcode_wrap($content, $shortcode = '') {  
	    if (function_exists('has_shortcode')) return has_shortcode($content, $shortcode);
	    $found = false;  
	    if (!$shortcode) {  
	        return $found;  
	    }   
	    if ( stripos($content, '[' . $shortcode) !== false ) {  
	        $found = true;  
	    }  
	    return $found;  
	} 
	
	function page_has_maps($posts) {
		$result = false;
		if (isset($posts) && is_array($posts)) {			
			foreach ($posts as $post) {
				$post_id = $post->ID;
				if (get_post_meta($post_id, '_igp_latlon') && $this->has_map_shortcode($post->post_content)) {
					$result = true;
					break;
				}				
			}
		}
		return $result;
	}
	
	function add_map_scripts() {	
		global $wp_query;
		$posts = $wp_query->posts;
		if( $this->page_has_maps($posts)){
			wp_register_script( 'igp-google-maps', 'https://maps.googleapis.com/maps/api/js?sensor=false', array('jquery'), $this->plugin_version );
            wp_enqueue_script( 'igp-google-maps' );
            wp_register_script( 'igp-maps', plugins_url('assets/js/igp-maps.js' , __FILE__ ), array('jquery', 'igp-google-maps'), $this->plugin_version );
            wp_enqueue_script( 'igp-maps' );
            $custom_rel = $this->default_val($this->settings, 'igpsettings_general_lightbox-rel', 'lightbox');
            wp_localize_script( 'igp-maps', 'igp_maps', array( 'lightbox_rel' => $custom_rel));
            
            wp_register_style( 'igp-maps-style', plugins_url('assets/css/igp-maps.css' , __FILE__ ), array(), $this->plugin_version);
			wp_enqueue_style( 'igp-maps-style');
       	}		
	}
	
	function has_video_shortcode($posts){
		if (empty($posts)) {
			return $posts;
		}
		$found = false;
		foreach ($posts as $post) {
			if (stripos($post->post_content, '[igp-video') !== false) {
				$found = true;
				break;
			}
		}
		if ($found) $this->enqueue_video();
		return $posts;
	}
	
	function add_custom_schedules($schedules) {
		$new_schedules = array(		'igp_hourly' => array( 	'interval' => 3600,
															'display' => __( 'Hourly', $this->plugin_l10n ) ),
									'igp_twicedaily' => array(	'interval' => 43200,
															'display' => __( 'Twice Daily', $this->plugin_l10n ) ),
									'igp_daily' => array(	'interval' => 86400,
															'display' => __( 'Daily', $this->plugin_l10n ) ),		
									'igp_weekly' => array( 	'interval' => 604800,
															'display' => __( 'Weekly', $this->plugin_l10n ) ),
									'igp_fortnightly' => array( 'interval' => 1209600,
																'display' => __( 'Fortnightly', $this->plugin_l10n ) ),
									'igp_monthly' => array( 	'interval' => 2419200,
																'display' => __( 'Monthly', $this->plugin_l10n )  )
								);
		return array_merge( $schedules, $new_schedules );
	}
	
	function settings_page() {
		global $wpsfigp_settings;
		$active_tab = isset($_GET['tab']) ? $_GET['tab'] : 'general'; 
		  ?>
		<div class="wrap">
		  <div id="icon-options-general" class="icon32"></div>
		  <h2><?php _e('Instagrate Pro Settings', $this->plugin_l10n) ?></h2>
		  <h2 class="nav-tab-wrapper">
			  <?php foreach( $wpsfigp_settings as $tab ){ ?>
				<a href="?post_type=instagrate_pro&page=<?php echo $_GET['page']; ?>&tab=<?php echo $tab['section_id']; ?>" class="nav-tab<?php echo $active_tab == $tab['section_id'] ? ' nav-tab-active' : ''; ?>"><?php echo $tab['section_title']; ?></a>
				<?php } ?>
			  </h2>
		  <form action="options.php" method="post">
				<?php settings_fields( $this->wpsf->get_option_group() ); ?>
				<?php $this->do_settings_sections( $this->wpsf->get_option_group() ); ?>
				<p class="submit"><input type="submit" class="button-primary" value="<?php _e( 'Save Changes', $this->plugin_l10n ); ?>" /></p>
		  </form>
		  
		</div>
		<?php
	}
  
	function do_settings_sections($page) {
        global $wp_settings_sections, $wp_settings_fields;
        $active_tab = isset($_GET['tab']) ? $_GET['tab'] : 'general'; 
        if ( !isset($wp_settings_sections) || !isset($wp_settings_sections[$page]) )
            return;
        foreach ( (array) $wp_settings_sections[$page] as $section ) {
            echo '<div id="section-'. $section['id'] .'"class="igp-section'. ($active_tab == $section['id'] ? ' igp-section-active' : '') .'">';
            call_user_func($section['callback'], $section);
            if ( !isset($wp_settings_fields) || !isset($wp_settings_fields[$page]) || !isset($wp_settings_fields[$page][$section['id']]) )
                    continue;
            echo '<table class="form-table">';
            do_settings_fields($page, $section['id']);
            echo '</table>
            </div>';
        }
    }
  
	function validate_settings( $input ) { return $input; }
	
	public static function default_val( $options, $value, $default = '' ){
        if( !isset($options[$value]) ) return $default;
        else return $options[$value];
    }
    
    function license_args() {
	    $args = array( 	'timeout' => 15, 
	    				'sslverify' => false,
	    				'user-agent' => 'WordPress; '. home_url()	
	    		     );
	    return $args;
    }
    
    public static function is_license_constant() {
		return defined( 'IGP_LICENSE' );
	}

	public static function get_license_key($settings = false) {
		if (instagrate_pro::is_license_constant()) {
			$license = IGP_LICENSE;
		} else {
			if (!$settings) $settings = get_option('igpsettings_settings');
			$license = trim(instagrate_pro::default_val($settings, 'igpsettings_support_license-key', ''));
		}
		return $license;
	}
    
    function plugin_row() {
		$licence = $this->get_license_key();
		if( empty( $licence ) || $licence == '') {
			$settings_link = sprintf( '<a href="%s">%s</a>', admin_url('edit.php?post_type=instagrate_pro&page=instagrate-pro-settings&tab=support'), __( 'Settings', $this->plugin_l10n ) );
			$message = 'To finish activating Instagrate Pro, please go to ' . $settings_link . ' and enter your licence key and activate it to enable automatic updates.';
		} else return;
		?>
		<tr class="plugin-update-tr igp-custom">
			<td colspan="3" class="plugin-update">
				<div class="update-message">
					<div class="igp-licence-error-notice"><?php echo $message; ?></div>
				</div>
			</td>
		</tr>
		<?php
	}
    
    function activate_license() {
    	if ( !isset($_POST['nonce']) || !wp_verify_nonce( $_POST['nonce'], plugin_basename('instagrate_pro') ))
            return 0;
        
        if ( !isset($_POST['license_key']) ) return 0;
        
        $ajax_response['error'] = false;
        $ajax_response['message'] = '';
               
        $options = get_option( 'igpsettings_settings' );		
		$license = trim($_POST['license_key']);
		$options['igpsettings_support_license-key'] = $license;
			
		$api_params = array( 
			'license' 	=> $license, 
			'file' => $this->sellwire_id
		);		
		$response = wp_remote_get( add_query_arg( $api_params, $this->sellwire_url. 'activate_license' ), $this->license_args() );
		if ( is_wp_error( $response ) ) {
			$ajax_response['error'] = true;
			$ajax_response['message'] = $response->get_error_message();
		} else {
			$license_data = json_decode( wp_remote_retrieve_body( $response ) );
			if (isset($license_data->license)) {
				$options['igpsettings_support_license-status'] = $license_data->license;
				$ajax_response['license_status'] = $license_data->license;
				$ajax_response['redirect'] = admin_url('edit.php?post_type=instagrate_pro&page=instagrate-pro-settings&tab=support');
			} else if (isset($license_data->error)) {
				$ajax_response['error'] = true;
				$ajax_response['message'] = $license_data->error;
			}
		}
		update_option( 'igpsettings_settings', $options );
		echo json_encode($ajax_response);
        die;
    }
	
	function deactivate_license() {
		if ( !isset($_POST['nonce']) || !wp_verify_nonce( $_POST['nonce'], plugin_basename('instagrate_pro') ))
            return 0;

		$ajax_response['error'] = false;
        $ajax_response['message'] = '';
        
		$options = get_option( 'igpsettings_settings' );		
		$license = trim( $this->default_val($options, 'igpsettings_support_license-key', '') );

		$api_params = array( 
			'license' 	=> $license, 
			'file' => $this->sellwire_id
		);
		$response = wp_remote_get( add_query_arg( $api_params, $this->sellwire_url. 'deactivate_license' ), $this->license_args() );
		if ( is_wp_error( $response ) ) {
			$ajax_response['error'] = true;
			$ajax_response['message'] = $response->get_error_message();
		} else {
			$license_data = json_decode( wp_remote_retrieve_body( $response ) );
			if (isset($license_data->license) || (isset($license_data->error) && $license_data->error == 'License expired')) {
				unset($options['igpsettings_support_license-key']);
				unset($options['igpsettings_support_license-status']);
				update_option('igpsettings_settings', $options );
				$ajax_response['license_status'] = 'deactivated';
				$ajax_response['redirect'] = admin_url('edit.php?post_type=instagrate_pro&page=instagrate-pro-settings&tab=support');
			} else if (isset($license_data->error)) {
				$ajax_response['error'] = true;
				$ajax_response['message'] = $license_data->error;
			}
		}
		echo json_encode($ajax_response);
        die;
		
	}
	
	function get_template_tags( $filter = '') {
		$template_tags = array(	
							array(
								'name' => 'image',
								'desc' => __( 'The image url, either direct from Instagram or from the WP media library.', $this->plugin_l10n ),
								'exclude_from' => array( 'title'),
								'value' => $this->template_image
							),
							array(
								'name' => 'video',
								'desc' => __( 'The video url, either direct from Instagram or from the WP media library.', $this->plugin_l10n ),
								'exclude_from' => array( 'title'),
								'value' => $this->template_video
							),
							array(
								'name' => 'caption',
								'desc' => __( 'The image caption from Instagram including tags.', $this->plugin_l10n ),
								'exclude_from' => array(),
								'value' => $this->template_caption
							),
							array(
								'name' => 'caption-tags-no-hash',
								'desc' => __( 'The image caption from Instagram including tags without the #.', $this->plugin_l10n ),
								'exclude_from' => array(),
								'value' => $this->template_caption_tags_no_hash
							),
							array(
								'name' => 'caption-no-tags',
								'desc' => __( 'The image caption from Instagram excluding tags.', $this->plugin_l10n ),
								'exclude_from' => array(),
								'value' => $this->template_caption_no_tags
							), 
							array(
								'name' => 'tags',
								'desc' => __( 'The image tags from Instagram', $this->plugin_l10n ),
								'exclude_from' => array(),
								'value' => $this->template_tags
							),
							array(
								'name' => 'tags-first',
								'desc' => __( 'The first image tag from Instagram', $this->plugin_l10n ),
								'exclude_from' => array(),
								'value' => $this->template_tags_first
							),
							array(
								'name' => 'username',
								'desc' => __( 'The username of who posted the image on Instagram.', $this->plugin_l10n ),
								'exclude_from' => array(),
								'value' => $this->template_username
							),
							array(
								'name' => 'instagram-user-profile-url',
								'desc' => __( 'The link to the Instagram profile of who posted the image.', $this->plugin_l10n ),
								'exclude_from' => array( 'title' ),
								'value' => $this->template_user_profile_url
							),
							array(
								'name' => 'instagram-user-profile-image-url',
								'desc' => __( 'The link to the Instagram profile image of who posted the image.', $this->plugin_l10n ),
								'exclude_from' => array( 'title' ),
								'value' => $this->template_user_profile_image_url
							),
							array(
								'name' => 'instagram-media-type',
								'desc' => __( 'The type of Instagram media, i.e. image or video.', $this->plugin_l10n ),
								'exclude_from' => array(),
								'value' => $this->template_instagram_media_type
							),
							array(
								'name' => 'instagram-media-id',
								'desc' => __( 'The ID of the Instagram media', $this->plugin_l10n ),
								'exclude_from' => array(),
								'value' => $this->template_instagram_media_id
							),
							array(
								'name' => 'instagram-url',
								'desc' => __( 'The link to the Instagram media page.', $this->plugin_l10n ),
								'exclude_from' => array( 'title' ),
								'value' => $this->template_instagram_url
							),
							array(
								'name' => 'instagram-image-url',
								'desc' => __( 'The link to the Instagram image.', $this->plugin_l10n ),
								'exclude_from' => array( 'title' ),
								'value' => $this->template_instagram_image_url
							),
							array(
								'name' => 'instagram-video-url',
								'desc' => __( 'The link to the Instagram video.', $this->plugin_l10n ),
								'exclude_from' => array( 'title' ),
								'value' => $this->template_instagram_video_url
							),
							array(
								'name' => 'instagram-embed-url',
								'desc' => __( 'The Instagram embed link for images and videos.', $this->plugin_l10n ),
								'exclude_from' => array( 'title' ),
								'value' => $this->template_instagram_embed_url
							),
							array(
								'name' => 'wordpress-image-url',
								'desc' => __( 'The link to the image if saved in the WP media library.', $this->plugin_l10n ),
								'exclude_from' => array( 'title' ),
								'value' => $this->template_wordpress_image_url
							),
							array(
								'name' => 'wordpress-video-url',
								'desc' => __( 'The link to the video if saved in the WP media library.', $this->plugin_l10n ),
								'exclude_from' => array( 'title' ),
								'value' => $this->template_wordpress_video_url
							),
							array(
								'name' => 'wordpress-post-url',
								'desc' => __( 'The link to the post created in WP.', $this->plugin_l10n ),
								'exclude_from' => array( 'title' ),
								'value' => $this->template_wordpress_post_url
							),
							array(
								'name' => 'gallery',
								'desc' => __( 'A gallery of all images that have been saved to the WP media library for the post.', $this->plugin_l10n ),
								'exclude_from' => array( 'title', 'meta' ),
								'value' => '[gallery]'
							),
							array(
								'name' => 'map',
								'desc' => __( 'A Google map of the location of a geo tagged image.', $this->plugin_l10n ),
								'exclude_from' => array( 'title', 'meta' ),
								'value' => $this->template_map
							),
							array(
								'name' => 'location-name',
								'desc' => __( 'The name of the location of a geo tagged image.', $this->plugin_l10n ),
								'exclude_from' => array(),
								'value' => $this->template_location_name
							),
							array(
								'name' => 'location-lat',
								'desc' => __( 'The latitude of the location of a geo tagged image.', $this->plugin_l10n ),
								'exclude_from' => array(),
								'value' => $this->template_location_lat
							),
							array(
								'name' => 'location-lng',
								'desc' => __( 'The longitude of the location of a geo tagged image.', $this->plugin_l10n ),
								'exclude_from' => array(),
								'value' => $this->template_location_lng
							),
							array(
								'name' => 'image-date',
								'desc' => __( 'The date the image was taken on Instagram.', $this->plugin_l10n ),
								'exclude_from' => array(),
								'value' => $this->template_date
							),
							array(
								'name' => 'filter',
								'desc' => __( 'The Instagram filter used on the image.', $this->plugin_l10n ),
								'exclude_from' => array(),
								'value' => $this->template_filter
							),
							array(
								'name' => 'likes',
								'desc' => __( 'The Instagram Likes count for the image.', $this->plugin_l10n ),
								'exclude_from' => array(),
								'value' => $this->template_likes
							),
							
						);				
						
		if ($filter != '') {
			foreach ($template_tags as $tag_key => $tag ) {
				if (!empty($tag['exclude_from'])) {
					foreach ($tag['exclude_from'] as $key => $exclude) {
						if ($exclude == $filter) unset($template_tags[$tag_key]);
					}
				}
			}
		}
		
		// Apply filters to template tags
		foreach ($template_tags as $tag_key => $tag ) {
			$filter_name = 'igp_template_'. str_replace('-', '_', $tag['name']);
			$filter_value = $tag['value'];
			$template_tags[$tag_key]['value'] = apply_filters( $filter_name, $filter_value);
		}
		
		return $template_tags;
    }
	
	function replace_template_tags($text, $tags, $default) {
		foreach ($tags as $tag_key => $tag) {
			$find_text = '%%'. $tag['name'] .'%%';
			$replace_text = $tag['value'];
			$text = str_replace($find_text, $replace_text, $text);
		}
		if ($text == '') $text = $default;
		return $text;	
	}
	
	function get_post_objects( $post_type ) {
		global $post;
		$data = array();
		global $wpdb;
		$post_data = $wpdb->get_results( 
			$wpdb->prepare( "	SELECT ID, post_title FROM $wpdb->posts
								WHERE post_status = 'publish'
								AND post_type = %s
								ORDER BY post_date desc 	", $post_type )	);
		if ($post_data) {
			foreach( $post_data as $post_item ) {
				$id = $post_item->ID;
				$name = $post_item->post_title;
				$data[$id] = $name;
			}
		}
		return $data;
	}
	
	function igp_post_objects_callback() {
		if ( !isset($_POST['nonce']) || !wp_verify_nonce( $_POST['nonce'], 'instagrate_pro' ))
            return 0;
		if ( !isset($_POST['post_type']))
            return 0;
        $response['error'] = false;
        $response['message'] = '';
        $objects = $this->get_post_objects($_POST['post_type']); 
        $response['objects'] = $objects;
        $response['message'] = 'success';
        echo json_encode($response);
        die;
	}
	
	function get_all_taxonomies( $post_type = '' ) {
		$options[0] = '— '. __('Select', $this->plugin_l10n). ' —';
		$taxonomies = get_object_taxonomies($post_type, 'objects');
		foreach ($taxonomies as $key => $tax) {
			if($tax->hierarchical != 1) continue;
			$options[$key] = $tax->labels->singular_name;
		}
		return $options;
	}
	
	function igp_taxonomies_callback() {
		if ( !isset($_POST['nonce']) || !wp_verify_nonce( $_POST['nonce'], 'instagrate_pro' ))
            return 0;
		if ( !isset($_POST['post_type']))
            return 0;
        $response['error'] = false;
        $response['message'] = '';
        $objects = $this->get_all_taxonomies($_POST['post_type']); 
        $response['objects'] = $objects;
        $response['message'] = 'success';
        echo json_encode($response);
        die;
	}
	
	function get_all_terms( $taxonomy = '', $select = true ) {
		$options = array();
		if ($select) $options[0] = '— '. __('Select', $this->plugin_l10n). ' —';
		if ($taxonomy == '0') 
			return $options;		
		$terms = get_terms( $taxonomy, array('hide_empty' => 0) );
		if ($terms) {
			foreach ($terms as $key => $term) {
				if(isset($term->term_id)) $options[$term->term_id] = $term->name;
			}
		}
		return $options;
	}
	
	function igp_terms_callback() {
		if ( !isset($_POST['nonce']) || !wp_verify_nonce( $_POST['nonce'], 'instagrate_pro' ))
            return 0;
		if ( !isset($_POST['taxonomy']))
            return 0;
        $response['error'] = false;
        $response['message'] = '';
        $objects = $this->get_all_terms($_POST['taxonomy'], false); 
        $taxonomy_label = '';
        if ($_POST['taxonomy'] != '') {
        	$taxonomy_obj = get_taxonomy($_POST['taxonomy']);
        	$taxonomy_label = $taxonomy_obj->labels->name;
        }
        $response['label'] = $taxonomy_label;
        $response['objects'] = $objects;
        $response['message'] = 'success';
        echo json_encode($response);
        die;
	}
	
	function get_all_tag_taxonomies( $post_type = '' ) {
		$options[0] = '— '. __('Select', $this->plugin_l10n). ' —';
		$taxonomies = get_object_taxonomies($post_type, 'objects');
		foreach ($taxonomies as $key => $tax) {
			if($tax->hierarchical != 0 || $key == 'post_format') continue;
			$options[$key] = $tax->labels->name;
		}
		return $options;
	}
	
	function igp_tag_taxonomies_callback() {
		if ( !isset($_POST['nonce']) || !wp_verify_nonce( $_POST['nonce'], 'instagrate_pro' ))
            return 0;
		if ( !isset($_POST['post_type']))
            return 0;
        $response['error'] = false;
        $response['message'] = '';
        $objects = $this->get_all_tag_taxonomies($_POST['post_type']); 
        $response['objects'] = $objects;
        $response['message'] = 'success';
        echo json_encode($response);
        die;
	}
	
	function get_all_schedules( $schedule = '' ) {
		$options = array();
		$schedules = wp_get_schedules();
		if($schedules) {
			foreach ($schedules as $key => $row) $orderByInterval[$key] = $row['interval'];
			array_multisort($orderByInterval, SORT_ASC, $schedules);
			foreach ($schedules as $key=> $option) {
				if ($schedule != '' && $key == $schedule) return ucfirst($option['display']);
				if (substr($key, 0, 4) == 'igp_') $options[$key] = ucfirst($option['display']);
			}
		}
		return $options;
	}
	
	function get_schedule($frequency) {
		$schedules = wp_get_schedules();
		return $schedules[$frequency];
	}
	
	function schedule_no_day($frequency) {
		$schedule = $this->get_schedule($frequency);
		if ($schedule['interval'] <= 86400) return true;
		return false;		
	} 
	
	function meta_box_instagram() {
        global $post;
		?>
		<iframe id="logoutframe" src="https://instagram.com/accounts/logout/" width="0" height="0"></iframe>
		<?php
		if ($post->post_status == 'auto-draft') {
			$html = '<input value="'. __( 'Login to Instagram', $this->plugin_l10n ) .'" class="button-primary" type="button" disabled="disabled">';
			echo $html;
		}
        else {
			$options = get_post_meta( $post->ID, '_instagrate_pro_settings', true );
			//check post meta for auth token and username, and valid auth token
			if (!isset($options['token']) || $options['token'] == '') {
				$auth_url = $this->instagram_authorise_url();
				$html = '<p><a class="button-primary" href="'. $auth_url .'">'. __( 'Login to Instagram', $this->plugin_l10n ) .'</a></p>';
				echo $html;
			}
			else { 
				wp_nonce_field( plugin_basename( __FILE__ ), 'instagrate_pro_noncename' );
				?>
				<div class="igp-profile">
					<div class="igp-avatar">
						<?php 
							$profile_src = (!isset($options['user_thumb']) || $options['user_thumb'] == '') ? plugins_url('assets/img/not-connected.png' , __FILE__ ) : $options['user_thumb'];
						?>
						<img id="user-thumb" src="<?php echo $profile_src; ?>" width="50" height="50" alt="Instagram profile image for <?php echo $options['username']; ?>">
					</div>
					<div class="igp-details">
						<p><b><?php echo $options['username']; ?></b></p>
						<input id="igp-logout" class="button" type="button" value="Disconnect">
						<input id="igp-refresh" class="button" type="button" value="Refresh" title="Refresh Profile Image">
						<div class="spinner"></div>
					</div>
				</div>
				<table class="form-table igp-admin"> 
					<tr valign="top">
						<th scope="row"><?php _e('Media Stream', $this->plugin_l10n); ?></th>
						<td>
							<select name="_instagrate_pro_settings[instagram_images]">
								<option value="recent"<?php if($this->default_val($options, 'instagram_images', 'recent') == 'recent') echo ' selected="selected"'; ?>><?php _e('My Recent Media', $this->plugin_l10n); ?></option>
								<option value="feed"<?php if($this->default_val($options, 'instagram_images', '') == 'feed') echo ' selected="selected"'; ?>><?php _e('My Feed', $this->plugin_l10n); ?></option>
								<option value="users"<?php if($this->default_val($options, 'instagram_images', '') == 'users') echo ' selected="selected"'; ?>><?php _e('Users Media', $this->plugin_l10n); ?></option>
								<option value="tagged"<?php if($this->default_val($options, 'instagram_images', '') == 'tagged') echo ' selected="selected"'; ?>><?php _e('All Hashtagged Media', $this->plugin_l10n); ?></option>
								<option value="location"<?php if($this->default_val($options, 'instagram_images', '') == 'location') echo ' selected="selected"'; ?>><?php _e('Location Media', $this->plugin_l10n); ?></option>
							</select>
						</td>
					</tr>
					<tr valign="top" class="instagram_user">
		                <th scope="row"><?php _e('Users Name', $this->plugin_l10n); ?></th>
		                <td>
							<input class="large-text" type="text" id="igp-users-name-input" name="_instagrate_pro_settings[instagram_user]" value="<?php echo $this->default_val($options, 'instagram_user', ''); ?>" /><br />
							<input type="hidden" value="<?php echo $this->default_val($options, 'instagram_users_id', ''); ?>" name="_instagrate_pro_settings[instagram_users_id]" />
		                </td>
		            </tr>
					<tr valign="top" class="instagram_location">
		                <th scope="row"><?php _e('Location Name', $this->plugin_l10n); ?></th>
		                <td>
							<input type="text" id="igp-location-name-input" class="large-text" name="_instagrate_pro_settings[instagram_location]" value="<?php echo $this->default_val($options, 'instagram_location', ''); ?>" /><br />
							<input type="hidden" value="<?php echo $this->default_val($options, 'location_lat', ''); ?>" name="_instagrate_pro_settings[location_lat]" />
							<input type="hidden" value="<?php echo $this->default_val($options, 'location_lng', ''); ?>" name="_instagrate_pro_settings[location_lng]" />
		                </td>
		            </tr>
					<tr valign="top" class="instagram_location">
		                <th scope="row"><?php _e('Instagram Location', $this->plugin_l10n); ?></th>
		                <td>
							<select name="_instagrate_pro_settings[instagram_location_id]">
							<?php	
								$locations = $this->get_locations($post->ID, $this->default_val($options, 'instagram_location', ''), $this->default_val($options, 'location_lat', ''), $this->default_val($options, 'location_lng', '') );
								if ($locations && is_array($locations)) {
                                    foreach ($locations as $key => $location) {
                                        ($this->default_val($options, 'instagram_location_id', '') == $key) ? $selected = ' selected="selected"': $selected = '';
                                        echo '<option value="'. $key .'"'. $selected .'>'. $location .'</option>';
                                    }
                                }
							?>	
							</select>
		                </td>
		            </tr>
					<tr valign="top">
		                <th scope="row"><?php _e('Hashtags Filter', $this->plugin_l10n); ?></th>
		                <td>
							<input type="text" class="large-text" name="_instagrate_pro_settings[instagram_hashtags]" value="<?php echo $this->default_val($options, 'instagram_hashtags', ''); ?>" /><br />
		                </td>
		            </tr>
		            <tr valign="top">
		                <th scope="row"><?php _e('Media Filter', $this->plugin_l10n); ?></th>
		                <td>
							<select name="_instagrate_pro_settings[instagram_media_filter]">
								<option value="all"<?php if($this->default_val($options, 'instagram_media_filter', 'all') == 'all') echo ' selected="selected"'; ?>><?php _e('Images and Videos', $this->plugin_l10n); ?></option>
								<option value="image"<?php if($this->default_val($options, 'instagram_media_filter', 'all') == 'image') echo ' selected="selected"'; ?>><?php _e('Only Images', $this->plugin_l10n); ?></option>
								<option value="video"<?php if($this->default_val($options, 'instagram_media_filter', 'all') == 'video') echo ' selected="selected"'; ?>><?php _e('Only Videos', $this->plugin_l10n); ?></option
							</select>
		                </td>
		            </tr>

				</table>
				<div style="display: none"> 
					<input type="hidden" name="_instagrate_pro_settings[token]" value="<?php echo $this->default_val($options, 'token', ''); ?>" /><br />
					<input type="hidden" name="_instagrate_pro_settings[user_id]" value="<?php echo $this->default_val($options, 'user_id', ''); ?>" /><br />
					<input type="hidden" name="_instagrate_pro_settings[username]" value="<?php echo $this->default_val($options, 'username', ''); ?>" /><br />
					<input type="hidden" name="_instagrate_pro_settings[bio]" value="<?php echo $this->default_val($options, 'bio', ''); ?>" /><br />
					<input type="hidden" name="_instagrate_pro_settings[user_thumb]" value="<?php echo $this->default_val($options, 'user_thumb', ''); ?>" /><br />
					<input type="hidden" name="_instagrate_pro_settings[last_id]" value="<?php echo $this->default_val($options, 'last_id', ''); ?>" /><br />
					<input type="hidden" name="_instagrate_pro_settings[next_url]" value="<?php echo $this->default_val($options, 'next_url', ''); ?>" /><br />	
					<input type="hidden" name="_instagrate_pro_settings[ig_error]" value="<?php echo $this->default_val($options, 'ig_error', ''); ?>" /><br />
					<input type="hidden" name="_instagrate_pro_settings[locked]" value="" /><br />	
				</div>
		<?php }
		}
    }
	
	function get_images_key($account_id, $numbers = false) {
		$pending = 0;
		$posted = 0;
		$ignore = 0;
		$processing_amount = 0;
		if ($account_id != 0) {
			$stats = $this->account_stats($account_id);
			if (is_array($stats) && !empty($stats)) {
				$pending = (isset($stats['pending']->Total)) ? $stats['pending']->Total : 0;
				$posted = (isset($stats['posted']->Total)) ? $stats['posted']->Total : 0;
				$ignore = (isset($stats['ignore']->Total)) ? $stats['ignore']->Total : 0;
				$processing_amount = (isset($stats['posting']->Total)) ? $stats['posting']->Total : 0;
			}
		}
		$pending = '<span class="stat" title="'. __( 'Pending', $this->plugin_l10n ) .'">'. $pending .'</span>';
		$posted = '<span class="stat" title="'. __( 'Posted', $this->plugin_l10n ) .'">'. $posted .'</span>';
		$ignore = '<span class="stat" title="'. __( 'Ignore', $this->plugin_l10n ) .'">'. $ignore .'</span>';
		$processing = '<span class="stat" title="'. __( 'Posting', $this->plugin_l10n ) .'">'. $processing_amount .'</span>';

		if (!$numbers) {
			$pending = $pending .' '. __( 'Pending', $this->plugin_l10n );
			$processing = $processing .' '. __( 'Posting', $this->plugin_l10n ); 
			$posted = $posted .' '. __( 'Posted', $this->plugin_l10n );
			$ignore = $ignore .' '. __( 'Ignore', $this->plugin_l10n ); 
		} 

		$html = '<label class="igp-status pending">'. $pending . '</label>';
		if ($processing_amount > 0) $html .= '<label class="igp-status posting">'. $processing . '</label>';
		$html .= '<label class="igp-status posted">'. $posted . '</label>';
		$html .= '<label class="igp-status ignore">'. $ignore . '</label>';
		return $html;
	}
	
	function meta_box_images() {
        global $post;
        $html = '';
        $options = get_post_meta( $post->ID, '_instagrate_pro_settings', true );
        if(!isset($options['token']) || $options['token'] == '') {
	       _e( 'You will need to connect an Instagram account from the Instagram settings', $this->plugin_l10n );	        
        } else { 			
			//get images from table
	        $limit = $this->default_val($this->settings, 'igpsettings_general_admin-images', '');
	        $images = $this->get_images($post->ID, '', 'DESC', false, '', $limit);
	        $show_zero = '';
			$toggle_load = ' style="display: none;"';
			$show_bulk = ' style="display: none;"';
			if ($images) {
		        $html = '';
				if (sizeof($images) > 0) {
					$show_bulk = '';
					$show_zero = ' style="display: none;"';
				}
				foreach($images as $key => $image) {
			       $title = esc_attr( substr($image->caption_clean_no_tags, 0, 20) );
			       $html .= '<li>';
			       $html .= '<a class="edit-image '. $image->media_type . '" href="#" rel="'. $image->image_id .'">';
			       $html .= '<img class="'. $image->status . '" src="'. $image->image_url . '" width="70" alt="'. $title .'" title="'. __( 'Edit', $this->plugin_l10n ) .' '. $title .'">';
			       $html .= '<span class="video-ind"></span>';
			       $html .= '</a>';
				   $html .= '<input id="'. $image->image_id .'" class="igp-bulk" type="checkbox"'.  $show_bulk .'>';
			       $html .= '</li>';
		        }
		        if (isset($options['next_url']) && $options['next_url'] != '') $toggle_load = '';
			} 
			?>
			<div class="igp-zero-images" <?php echo $show_zero; ?>>
				<?php echo __('No images found', $this->plugin_l10n); ?>
			</div>
			<div id="igp-image-manager">
				<input id="igp-load-images" type="button" class="button" value="<?php _e( 'Load More', $this->plugin_l10n ); ?>" <?php echo $toggle_load; ?>>
				<div id="igp-bulk-wrap" class="igp-bulk" <?php echo $show_bulk; ?>>
					<label>
						<input type="checkbox" id="toggle_bulk" /> <span id="toggle_bulk_text"><?php _e('All Media', $this->plugin_l10n); ?></span>
					</label>
					<select name="igp_bulk_status" id="igp_bulk_status">
						<option value="pending"><?php _e('Pending', $this->plugin_l10n); ?></option>
						<option value="ignore"><?php _e('Ignore', $this->plugin_l10n); ?></option>
					</select>
					<input id="igp-set-bulk-status" type="button" class="button" value="Set Status">
				</div>
			</div>
			<ul id="igp-images" class="">
				<?php echo $html; ?>
			</ul>
			<div id="igp-edit-image">
				<p><strong><?php _e('Edit Details', $this->plugin_l10n); ?></strong></p>
				
				<!--container for everything-->
				<div id="jp_container_1" class="jp-video jp-video-460p">
				
					<!--container in which our video will be played-->
					<div id="igp-jplayer" class="jp-jplayer"></div>
					
					<!--main containers for our controls-->
					<div class="jp-gui">
					   
					   	<div class="jp-video-play" style="display: block;">
							<a class="jp-video-play-icon jp-play" tabindex="1" href="javascript:;">play</a>
						</div>
					   
					    <div class="jp-interface">
					        <div class="jp-controls-holder">
					
								<!--play and pause buttons-->
							    <a href="javascript:;" class="jp-play" tabindex="1">play</a>
							    <a href="javascript:;" class="jp-pause" tabindex="1">pause</a>
							    <span class="separator sep-1"></span>
							 
								<!--progress bar-->
							    <div class="jp-progress">
							        <div class="jp-seek-bar">
										<div class="jp-play-bar"><span></span></div>
									</div>
							    </div>
							 
							    <!--time notifications-->
							    <div class="jp-current-time"></div>
							    <span class="time-sep">/</span>
							    <div class="jp-duration"></div>
							    <span class="separator sep-2"></span>
							 
							    <!--mute / unmute toggle-->
							    <a href="javascript:;" class="jp-mute" tabindex="1" title="mute">mute</a>
							    <a href="javascript:;" class="jp-unmute" tabindex="1" title="unmute">unmute</a>
							 
							    <!--volume bar-->
							    <div class="jp-volume-bar">
							        <div class="jp-volume-bar-value"><span class="handle"></span></div>
							    </div>
							    <span class="separator sep-2"></span>
							 
							    <!--full screen toggle-->
							    <a href="javascript:;" class="jp-full-screen" tabindex="1" title="full screen">full screen</a>
							    <a href="javascript:;" class="jp-restore-screen" tabindex="1" title="restore screen">restore screen</a>
								<a href="javascript:;" class="jp-repeat" tabindex="1" title="repeat">repeat</a>
								<a href="javascript:;" class="jp-repeat-off" tabindex="1" title="repeat off">repeat off</a>
							
					        </div><!--end jp-controls-holder-->
					    </div><!--end jp-interface-->
					</div><!--end jp-gui-->
					
					<!--unsupported message-->
					<div class="jp-no-solution">
					    <span>Update Required</span>
					    To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.
					</div>
				
				</div><!--end jp_container_1-->
				
				<img id="igp_meta_image" class="" width="455" src="<?php echo plugins_url('assets/img/large_spinner.gif' , __FILE__ ); ?>" alt="<?php _e('Image to edit', $this->plugin_l10n); ?>">
				<table class="form-table">
					<tr valign="top">
						<th scope="row"><?php _e('Caption (without Tags)', $this->plugin_l10n); ?></th>
						<td><input type="text" name="igp_meta_caption" id="igp_meta_caption" value="" class="regular-text" />
						<input type="hidden" name="igp_meta_caption_old" id="igp_meta_caption_old" value="" class="regular-text" />
						 <input type="hidden" name="igp_meta_caption_clean_old" id="igp_meta_caption_clean_old" value="" class="regular-text" />
						</td>
					</tr>
					<tr valign="top">
						<th scope="row"><?php _e('Status', $this->plugin_l10n); ?></th>
						<td>
							<label id="igp_meta_status_old" class="igp-status-old"></label>
						</td>
					</tr>
					<tr valign="top">
						<th scope="row"><?php _e('Change Status', $this->plugin_l10n); ?></th>
						<td>
							<select name="igp_meta_status" id="igp_meta_status">
								<option value="0"><?php echo '— '. __('Select', $this->plugin_l10n). ' —'; ?></option>
								<option value="pending"><?php _e('Pending', $this->plugin_l10n); ?></option>
								<option value="ignore"><?php _e('Ignore', $this->plugin_l10n); ?></option>
							</select>
						</td>
					</tr>
					<tr valign="top">
						<th scope="row"><?php _e('Hashtags', $this->plugin_l10n); ?></th>
						<td>
							<div id="igp_meta_hashtags"></div>
						</td>
					</tr>
				</table>
				<p class="submit"><input type="button" name="igp_meta_submit" id="igp_meta_submit" class="button-primary" value="<?php _e( 'Save Changes', 'instagrate-pro' ); ?>"></p>
			</div>
		    <?php		
        }
		
    }
	
	function meta_box_posting() {
		global $post;
        $options = get_post_meta( $post->ID, '_instagrate_pro_settings', true );
        wp_nonce_field( plugin_basename( __FILE__ ), 'instagrate_pro_noncename' );
        ?>
        <table class="form-table igp-admin"> 
            <tr valign="top">
                <th scope="row"><?php _e('Frequency', $this->plugin_l10n); ?></th>
                <td>
					<select name="_instagrate_pro_settings[posting_frequency]">
						<option value="constant"<?php if($this->default_val($options, 'posting_frequency', 'constant') == 'constant') echo ' selected="selected"'; ?>><?php _e('Constant', $this->plugin_l10n); ?></option>
						<option value="schedule"<?php if($this->default_val($options, 'posting_frequency', '') == 'schedule') echo ' selected="selected"'; ?>><?php _e('Scheduled', $this->plugin_l10n); ?></option>
						<option value="cron"<?php if($this->default_val($options, 'posting_frequency', '') == 'cron') echo ' selected="selected"'; ?>><?php _e('Cron Job', $this->plugin_l10n); ?></option>
						<option value="manual"<?php if($this->default_val($options, 'posting_frequency', '') == 'manual') echo ' selected="selected"'; ?>><?php _e('Manual', $this->plugin_l10n); ?></option>
					</select>
				</td>
            </tr>
            <tr valign="top" class="schedule">
                <th scope="row"><?php _e('Schedule', $this->plugin_l10n); ?></th>
                <td>
					<select name="_instagrate_pro_settings[posting_schedule]">
					<?php	
						$schedules = $this->get_all_schedules();
						foreach ($schedules as $key => $schedule) {
							($this->default_val($options, 'posting_schedule', 'igp_daily') == $key) ? $selected = ' selected="selected"': $selected = '';
							echo '<option value="'. $key .'"'. $selected .'>'. $schedule .'</option>';
						}
					?>	
					</select>
				</td>
            </tr>
            <?php
					$next_time = $this->get_next_schedule($post->ID, $this->default_val($options, 'posting_schedule', 'igp_daily'));
					if ($next_time !== '')  { ?>
            <tr valign="top" class="schedule">
                <th scope="row"><div class="curtime"><span id="timestamp"><?php _e('Next', $this->plugin_l10n); ?>: </span></div></th>
                <td>
					<?php echo '<b>'. $next_time .'</b>'; ?>
				</td>
            </tr>
            <?php } ?>
            <tr valign="top" class="schedule">
                <th scope="row"><?php _e('Day', $this->plugin_l10n); ?></th>
                <td>
					<select name="_instagrate_pro_settings[posting_day]" <?php echo ($this->schedule_no_day($this->default_val($options, 'posting_schedule', 'igp_daily'))) ? 'disabled="disabled"' : '';  ?>>
						<option value="Mon"<?php if($this->default_val($options, 'posting_day', '') == 'Mon') echo ' selected="selected"'; ?>><?php _e('Monday', $this->plugin_l10n); ?></option>
						<option value="Tue"<?php if($this->default_val($options, 'posting_day', '') == 'Tue') echo ' selected="selected"'; ?>><?php _e('Tuesday', $this->plugin_l10n); ?></option>
						<option value="Wed"<?php if($this->default_val($options, 'posting_day', '') == 'Wed') echo ' selected="selected"'; ?>><?php _e('Wednesday', $this->plugin_l10n); ?></option>
						<option value="Thu"<?php if($this->default_val($options, 'posting_day', '') == 'Thu') echo ' selected="selected"'; ?>><?php _e('Thursday', $this->plugin_l10n); ?></option>
						<option value="Fri"<?php if($this->default_val($options, 'posting_day', '') == 'Fri') echo ' selected="selected"'; ?>><?php _e('Friday', $this->plugin_l10n); ?></option>
						<option value="Sat"<?php if($this->default_val($options, 'posting_day', '') == 'Sat') echo ' selected="selected"'; ?>><?php _e('Saturday', $this->plugin_l10n); ?></option>
						<option value="Sun"<?php if($this->default_val($options, 'posting_day', '') == 'Sun') echo ' selected="selected"'; ?>><?php _e('Sunday', $this->plugin_l10n); ?></option>
						<?php if ($this->schedule_no_day($this->default_val($options, 'posting_schedule', 'igp_daily'))) { ?>
						<option value="" selected="selected"><?php _e('Daily', $this->plugin_l10n); ?></option>
						<?php } ?>
					</select>
				</td>
            </tr>
            <tr valign="top" class="schedule">
                <th scope="row"><?php _e('Time', $this->plugin_l10n); ?></th>
                <td>
					<select name="_instagrate_pro_settings[posting_time]">
						<option value="00:00"<?php if($this->default_val($options, 'posting_time', '') == '00:00') echo ' selected="selected"'; ?>>00:00</option>
						<option value="01:00"<?php if($this->default_val($options, 'posting_time', '') == '01:00') echo ' selected="selected"'; ?>>01:00</option>
						<option value="02:00"<?php if($this->default_val($options, 'posting_time', '') == '02:00') echo ' selected="selected"'; ?>>02:00</option>
						<option value="03:00"<?php if($this->default_val($options, 'posting_time', '') == '03:00') echo ' selected="selected"'; ?>>03:00</option>
						<option value="04:00"<?php if($this->default_val($options, 'posting_time', '') == '04:00') echo ' selected="selected"'; ?>>04:00</option>
						<option value="05:00"<?php if($this->default_val($options, 'posting_time', '') == '05:00') echo ' selected="selected"'; ?>>05:00</option>
						<option value="06:00"<?php if($this->default_val($options, 'posting_time', '') == '06:00') echo ' selected="selected"'; ?>>06:00</option>
						<option value="07:00"<?php if($this->default_val($options, 'posting_time', '') == '07:00') echo ' selected="selected"'; ?>>07:00</option>
						<option value="08:00"<?php if($this->default_val($options, 'posting_time', '') == '08:00') echo ' selected="selected"'; ?>>08:00</option>
						<option value="09:00"<?php if($this->default_val($options, 'posting_time', '') == '09:00') echo ' selected="selected"'; ?>>09:00</option>
						<option value="10:00"<?php if($this->default_val($options, 'posting_time', '') == '10:00') echo ' selected="selected"'; ?>>10:00</option>
						<option value="11:00"<?php if($this->default_val($options, 'posting_time', '') == '11:00') echo ' selected="selected"'; ?>>11:00</option>
						<option value="12:00"<?php if($this->default_val($options, 'posting_time', '') == '12:00') echo ' selected="selected"'; ?>>12:00</option>
						<option value="13:00"<?php if($this->default_val($options, 'posting_time', '') == '13:00') echo ' selected="selected"'; ?>>13:00</option>
						<option value="14:00"<?php if($this->default_val($options, 'posting_time', '') == '14:00') echo ' selected="selected"'; ?>>14:00</option>
						<option value="15:00"<?php if($this->default_val($options, 'posting_time', '') == '15:00') echo ' selected="selected"'; ?>>15:00</option>
						<option value="16:00"<?php if($this->default_val($options, 'posting_time', '') == '16:00') echo ' selected="selected"'; ?>>16:00</option>
						<option value="17:00"<?php if($this->default_val($options, 'posting_time', '') == '17:00') echo ' selected="selected"'; ?>>17:00</option>
						<option value="18:00"<?php if($this->default_val($options, 'posting_time', '') == '18:00') echo ' selected="selected"'; ?>>18:00</option>
						<option value="19:00"<?php if($this->default_val($options, 'posting_time', '') == '19:00') echo ' selected="selected"'; ?>>19:00</option>
						<option value="20:00"<?php if($this->default_val($options, 'posting_time', '') == '20:00') echo ' selected="selected"'; ?>>20:00</option>
						<option value="21:00"<?php if($this->default_val($options, 'posting_time', '') == '21:00') echo ' selected="selected"'; ?>>21:00</option>
						<option value="22:00"<?php if($this->default_val($options, 'posting_time', '') == '22:00') echo ' selected="selected"'; ?>>22:00</option>
						<option value="23:00"<?php if($this->default_val($options, 'posting_time', '') == '23:00') echo ' selected="selected"'; ?>>23:00</option>
					</select>
				</td>
            </tr>
            <tr valign="top" class="manual">
                <th scope="row"></th>
                <td>
					<?php
					if ($post->post_status != 'publish') { 
						_e( 'You can only manually post images for a published account.	', $this->plugin_l10n );			
					} else { ?>
					<div id="manual-posting">
						<img class="ig_ajax-loading" src="<?php echo get_admin_url() .'images/wpspin_light.gif'; ?>">
						<input id="igp-manual-post" class="button-primary" type="button" value="Manual Post">
					</div>
					<?php } ?>
				</td>
            </tr>
            <tr valign="top">
                <th scope="row"><?php _e('Post Type', $this->plugin_l10n); ?></th>
                <td>
					<select name="_instagrate_pro_settings[post_type]">
					<?php 	
						$args = array (	'public'  => true,
										'show_ui' => true	);
						$posttypes  = get_post_types( $args, 'objects' );
						foreach ($posttypes as $pt) {
							if ( esc_attr( $pt->name ) != 'attachment') {
								($this->default_val($options, 'post_type', 'post') == esc_attr( $pt->name )) ? $selected = ' selected="selected"': $selected = '';
								echo '<option value="'. esc_attr( $pt->name ) .'"'. $selected .'>'. $pt->labels->singular_name .'</option>';
							}
						}
					?>	
					</select>
				</td>
            </tr>
			 <tr valign="top">
                <th scope="row"><?php _e('Multiple Media', $this->plugin_l10n); ?></th>
                <td>
					<select name="_instagrate_pro_settings[posting_multiple]">
						<option value="each"<?php if($this->default_val($options, 'posting_multiple', 'each') == 'each') echo ' selected="selected"'; ?>><?php echo ucfirst($this->default_val($options, 'post_type', 'post')) . ' '. __('Per Media', $this->plugin_l10n); ?></option>
						<option value="group"<?php if($this->default_val($options, 'posting_multiple', '') == 'group') echo ' selected="selected"'; ?>><?php _e('Media Grouped', $this->plugin_l10n); ?></option>
						<option value="single"<?php if($this->default_val($options, 'posting_multiple', '') == 'single') echo ' selected="selected"'; ?>><?php echo __('Same', $this->plugin_l10n) .' '. ucfirst($this->default_val($options, 'post_type', 'post')) ?></option>
					</select>
				</td>
            </tr>
			<tr valign="top" class="single_post">
                <th scope="row" id="select_post_label"><?php _e('Select '. ucfirst($this->default_val($options, 'post_type', 'post')), $this->plugin_l10n); ?></th>
                <td><select name="_instagrate_pro_settings[posting_same_post]">
					<?php	
						$post_objects = $this->get_post_objects( $this->default_val($options, 'post_type', 'post'));
						foreach ($post_objects as $key => $post_object) {
							($this->default_val($options, 'posting_same_post', '') == $key) ? $selected = ' selected="selected"': $selected = '';
							echo '<option value="'. $key .'"'. $selected .'>'. $post_object .'</option>';
						}
					?>	
					</select>
				</td>
            </tr>
			<tr valign="top" class="single_post">
                <th scope="row"><?php _e('Media Location', $this->plugin_l10n); ?></th>
               <td>
					<select name="_instagrate_pro_settings[posting_single_location]">
						<option value="top"<?php if($this->default_val($options, 'posting_single_location', 'top') == 'top') echo ' selected="selected"'; ?>><?php _e('Top', $this->plugin_l10n); ?></option>
						<option value="bottom"<?php if($this->default_val($options, 'posting_single_location', '') == 'bottom') echo ' selected="selected"'; ?>><?php _e('Bottom', $this->plugin_l10n); ?></option>
						<option value="specific"<?php if($this->default_val($options, 'posting_single_location', '') == 'specific') echo ' selected="selected"'; ?>><?php _e('Specific', $this->plugin_l10n); ?></option>

					</select>
				</td>
            </tr>
			<tr valign="top" class="single_post grouped">
                <th scope="row"><?php _e('Media Ordering', $this->plugin_l10n); ?></th>
               <td>
					<select name="_instagrate_pro_settings[posting_image_order]">
						<option value="ASC"<?php if($this->default_val($options, 'posting_image_order', 'ASC') == 'ASC') echo ' selected="selected"'; ?>><?php _e('Oldest at Top', $this->plugin_l10n); ?></option>
						<option value="DESC"<?php if($this->default_val($options, 'posting_image_order', '') == 'DESC') echo ' selected="selected"'; ?>><?php _e('Newest at Top', $this->plugin_l10n); ?></option>						
					</select>
				</td>
            </tr>
            <tr valign="top" class="grouped">
                <th scope="row"><?php _e('Multi Map', $this->plugin_l10n); ?></th>
               <td>
					<select name="_instagrate_pro_settings[grouped_multi_map]">
						<option value="none"<?php if($this->default_val($options, 'grouped_multi_map', 'none') == 'none') echo ' selected="selected"'; ?>><?php _e('No multi map', $this->plugin_l10n); ?></option>
						<option value="bottom"<?php if($this->default_val($options, 'grouped_multi_map', 'none') == 'bottom') echo ' selected="selected"'; ?>><?php _e('Map at bottom', $this->plugin_l10n); ?></option>
						<option value="top"<?php if($this->default_val($options, 'grouped_multi_map', 'none') == 'top') echo ' selected="selected"'; ?>><?php _e('Map at top', $this->plugin_l10n); ?></option>					
					</select>
				</td>
            </tr>
		</table>
		<?php
	}
	
	function meta_box_post() {
		global $post;
        $options = get_post_meta( $post->ID, '_instagrate_pro_settings', true );
        wp_nonce_field( plugin_basename( __FILE__ ), 'instagrate_pro_noncename' );
        ?>
        <table class="form-table igp-admin"> 
            <tr valign="top">
                <th scope="row"><?php _e('Save Instagram Media to Media Library', $this->plugin_l10n); ?></th>
                <td><input type="hidden" name="_instagrate_pro_settings[post_save_media]" value="off" />
                <label><input type="checkbox" name="_instagrate_pro_settings[post_save_media]" value="on"<?php if($this->default_val($options, 'post_save_media', 'off') == 'on') echo ' checked="checked"'; ?> /> 
                </label></td>
            </tr>
			<tr valign="top" class="image-saving">
                <th scope="row"><?php _e('Featured Image', $this->plugin_l10n); ?></th>
                <td><input type="hidden" name="_instagrate_pro_settings[post_featured_image]" value="off" />
                <label><input type="checkbox" name="_instagrate_pro_settings[post_featured_image]" value="on"<?php if($this->default_val($options, 'post_featured_image', 'off') == 'on') echo ' checked="checked"'; ?> /> 
                </label></td>
            </tr>
			<tr valign="top">
                <th scope="row"><?php _e('Taxonomy', $this->plugin_l10n); ?></th>
                <td>
					<select name="_instagrate_pro_settings[post_taxonomy]">
					<?php 	
						$post_type = $this->default_val($options, 'post_type', 'post');
						$taxonomies = $this->get_all_taxonomies($post_type);
						foreach ($taxonomies as $key => $tax) {
							($this->default_val($options, 'post_taxonomy', 'category') == $key) ? $selected = ' selected="selected"': $selected = '';
							echo '<option value="'. $key .'"'. $selected .'>'. $tax .'</option>';
						}
					?>	
					</select>
				</td>
            </tr>
			<tr valign="top">
                <?php 
                $taxonomy = $this->default_val($options, 'post_taxonomy', '');
                $taxonomy_label = '';
                if ($taxonomy != '') {
                	$taxonomy_obj = get_taxonomy($taxonomy);
                	$taxonomy_label = $taxonomy_obj->labels->name;
                }
                ?>
                <th scope="row" id="tax_plural_label"><?php echo $taxonomy_label; ?></th>
                <td>
					<div id="post_terms">
						<?php 	
						if ($taxonomy != '') {
							$terms = $this->get_all_terms( $taxonomy, false );
							foreach ($terms as $key => $term) {
								(in_array($key, (array)$this->default_val($options, 'post_term', '')) ) ? $selected = ' checked': $selected = '';
								echo '<input type="checkbox" name="_instagrate_pro_settings[post_term][]" value="'. $key .'" '. $selected .'/> '. $term .'<br />';
							}
						}
					?>	
					</div>
				</td>
            </tr>
            <tr valign="top">
                <th scope="row"><?php _e('Convert Media Hashtags to', $this->plugin_l10n); ?></th>
                <td>
					<select name="_instagrate_pro_settings[post_tag_taxonomy]">
					<?php 	
						$taxonomy = $this->default_val($options, 'post_tag_taxonomy', '');
						$terms = $this->get_all_tag_taxonomies( $post_type );
						foreach ($terms as $key => $term) {
							($this->default_val($options, 'post_tag_taxonomy', '') == $key) ? $selected = ' selected="selected"': $selected = '';
							echo '<option value="'. $key .'"'. $selected .'>'. $term .'</option>';
						}
					?>	
					</select>
				</td>
            </tr>
			<tr valign="top">
                <th scope="row"><?php _e('Author', $this->plugin_l10n); ?></th>
                <td>
					<?php 	
					$args = array( 	'selected' => $this->default_val($options, 'post_author', ''),
									'include_selected' => true,
									'name' => '_instagrate_pro_settings[post_author]',
									); 
					wp_dropdown_users($args);
					?>	
				</td>
            </tr>
			<tr valign="top">
                <th scope="row"><?php _e('Status', $this->plugin_l10n); ?></th>
                <td>
					<select name="_instagrate_pro_settings[post_status]">
						<option value="publish"<?php if($this->default_val($options, 'post_status', 'publish') == 'publish') echo ' selected="selected"'; ?>><?php _e('Publish', $this->plugin_l10n); ?></option>
						<option value="draft"<?php if($this->default_val($options, 'post_status', '') == 'draft') echo ' selected="selected"'; ?>><?php _e('Draft', $this->plugin_l10n); ?></option>
					</select>
				</td>
            </tr>
			<tr valign="top">
                <th scope="row"><?php _e('Format', $this->plugin_l10n); ?></th>
                <td>
					<select name="_instagrate_pro_settings[post_format]">
						<option value="Standard"<?php if($this->default_val($options, 'post_format', 'Standard') == 'Standard') echo ' selected="selected"'; ?>><?php _e('Standard', $this->plugin_l10n); ?></option>
						<?php
						if ( current_theme_supports( 'post-formats' ) ) {
							$post_formats = get_theme_support( 'post-formats' );
							foreach ($post_formats[0] as $option) {
								($this->default_val($options, 'post_format', '') == $option) ? $selected = ' selected="selected"': $selected = '';
								echo '<option value="'. $option .'"'. $selected .'>'. ucfirst($option) .'</option>';
							}
						} ?>
					</select>
				</td>
            </tr>
			<tr valign="top">
                <th scope="row"><?php _e('Use Instagram Date', $this->plugin_l10n); ?></th>
                <td><input type="hidden" name="_instagrate_pro_settings[post_date]" value="off" />
                <label><input type="checkbox" name="_instagrate_pro_settings[post_date]" value="on"<?php if($this->default_val($options, 'post_date', 'on') == 'on') echo ' checked="checked"'; ?> /> 
                </label></td>
            </tr>
		</table>
		<?php
	}
	
	function meta_box_map() {
		global $post;
        $options = get_post_meta( $post->ID, '_instagrate_pro_settings', true );
        wp_nonce_field( plugin_basename( __FILE__ ), 'instagrate_pro_noncename' );
        ?>
        <table class="form-table igp-admin"> 
            <tr valign="top">
                <th scope="row"><?php _e('Style', $this->plugin_l10n); ?></th>
                <td>
					<select name="_instagrate_pro_settings[map_style]">
						<option value="ROADMAP"<?php if($this->default_val($options, 'map_style', '') == 'ROADMAP') echo ' selected="selected"'; ?>><?php _e('Road', $this->plugin_l10n); ?></option>
						<option value="HYBRID"<?php if($this->default_val($options, 'map_style', '') == 'HYBRID') echo ' selected="selected"'; ?>><?php _e('Hybrid', $this->plugin_l10n); ?></option>
						<option value="SATELLITE"<?php if($this->default_val($options, 'map_style', '') == 'SATELLITE') echo ' selected="selected"'; ?>><?php _e('Satellite', $this->plugin_l10n); ?></option>
						<option value="TERRAIN"<?php if($this->default_val($options, 'map_style', '') == 'TERRAIN') echo ' selected="selected"'; ?>><?php _e('Terrain', $this->plugin_l10n); ?></option>
					</select>
				</td>
            </tr>
			<tr valign="top">
                <th scope="row"><?php _e('CSS Class', $this->plugin_l10n); ?></th>
                <td>
					<input type="text" class="large-text" name="_instagrate_pro_settings[map_css]" value="<?php echo $this->default_val($options, 'map_css', ''); ?>" /><br />
                </td>
            </tr>
			<tr valign="top">
                <th scope="row"><?php _e('Width', $this->plugin_l10n); ?></th>
                <td>
					<input type="text" class="small-text" name="_instagrate_pro_settings[map_width]" value="<?php echo $this->default_val($options, 'map_width', '400'); ?>" />
					<select name="_instagrate_pro_settings[map_width_type]" class="igp-select-small">
						<option value="pixel"<?php if($this->default_val($options, 'map_width_type', 'pixel') == 'pixel') echo ' selected="selected"'; ?>>px</option>
						<option value="percent"<?php if($this->default_val($options, 'map_width_type', '') == 'percent') echo ' selected="selected"'; ?>>%</option>
					</select>
                </td>
            </tr>
            <tr valign="top">
                <th scope="row"><?php _e('Height', $this->plugin_l10n); ?></th>
                <td>
					<input type="text" class="small-text" name="_instagrate_pro_settings[map_height]" value="<?php echo $this->default_val($options, 'map_height', '300'); ?>" />
					<select name="_instagrate_pro_settings[map_height_type]" class="igp-select-small">
						<option value="pixel"<?php if($this->default_val($options, 'map_height_type', 'pixel') == 'pixel') echo ' selected="selected"'; ?>>px</option>
						<option value="percent"<?php if($this->default_val($options, 'map_height_type', '') == 'percent') echo ' selected="selected"'; ?>>%</option>
					</select>
				</td>
            </tr>
            <tr valign="top">
                <th scope="row"><?php _e('Zoom Level', $this->plugin_l10n); ?></th>
                <td>
					<input type="text" class="small-text" name="_instagrate_pro_settings[map_zoom]" value="<?php echo $this->default_val($options, 'map_zoom', '15'); ?>" />
				</td>
            </tr>
		</table>
		<?php
	}
	
	function meta_box_template_tags() {
        $template_tags = $this->get_template_tags();
        $html = '<p>'. __( 'You can use the following template tags in the title, content and custom field values:', $this->plugin_l10n ) .'</p>';
        foreach ($template_tags as $tag ) {
			$no_title = ' ';
			if (!empty($tag['exclude_from'])) {
				$no_title .= __('Not available for ', $this->plugin_l10n);
				foreach ($tag['exclude_from'] as $key => $exclude) {
					$no_title .= ucwords($exclude) .', ';
				}
				$no_title = substr($no_title, 0,  -2) .'.';
			}
			$html .= '<b>%%'. $tag['name'] .'%%</b> - '. $tag['desc'] . $no_title .'<br/>';
		}
		$html .= '<p>'. __( 'You can also run these through filters for each. The filter name is in the format igp_template_[tag] where tag has underscores not hypens, <br>e.g. %%location-name%% can be filtered with \'igp_template_location_name\')', $this->plugin_l10n ) .'</p>';
        echo $html; 
    }
	
	function meta_box_links() {
        $html = '<ul>';
		$html .= '<li><a target="_blank" href="http://www.instagrate.co.uk/docs">'. __( 'Documentation', $this->plugin_l10n ) .'</a> - '. __( 'get help on what settings mean and how to use them', $this->plugin_l10n ) .'</li>';
		$html .= '<li><a target="_blank" href="http://www.instagrate.co.uk/docs/template-tags/">'. __( 'Template Tags', $this->plugin_l10n ) .'</a> - '. __( 'get some simple examples of using template tags for the custom content', $this->plugin_l10n ) .'</li>';
		$html .= '<li><a target="_blank" href="http://www.instagrate.co.uk/support/">'. __( 'Support', $this->plugin_l10n ) .'</a> - '. __( 'get support for the plugin', $this->plugin_l10n ) .'</li>';
		$html .= '<li><a target="_blank" href="http://www.instagrate.co.uk/category/release/">'. __( 'Changelog', $this->plugin_l10n ) .'</a> - '. __( 'read the plugin\'s changelog', $this->plugin_l10n ) .'</li>';
		$html .= '</ul>';
		echo $html; 
    }
	
	function save_post_meta( $post_id ){
        if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) 
            return;
        if ( !isset($_POST['instagrate_pro_noncename']) || !wp_verify_nonce( $_POST['instagrate_pro_noncename'], plugin_basename( __FILE__ ) ) )
            return;
        if ( 'page' == $_POST['post_type'] ) {
            if ( !current_user_can( 'edit_page', $post_id ) )
                return;
        } else {
            if ( !current_user_can( 'edit_post', $post_id ) )
                return;
        }
        
        $settings = $_POST['_instagrate_pro_settings'];
		// Schedule
        if ($settings['posting_frequency'] == 'schedule') {
        	$old_settings = get_post_meta( $post_id, '_instagrate_pro_settings', true ); 
			$old_sch = isset($old_settings['posting_schedule']) ? $old_settings['posting_schedule'] : ''; 
			$old_day = isset($old_settings['posting_day']) ? $old_settings['posting_day'] : ''; 
			$old_time = isset($old_settings['posting_time']) ? $old_settings['posting_time'] : ''; 
			$new_sch = $settings['posting_schedule'];
			$new_day = isset($settings['posting_day']) ? $settings['posting_day'] : '';
			$new_time = $settings['posting_time'];
			if ($old_sch != $new_sch || $old_day != $new_day || $old_time != $new_time || $settings['posting_frequency'] != $old_settings['posting_frequency']) {
				$this->clear_all_schedules($post_id);
				$posting_day = isset($settings['posting_day']) ? $settings['posting_day'] : '';
				$this->set_schedule($post_id, $new_day, $new_time, $new_sch);    
			}
		} else $this->clear_all_schedules($post_id);
        
		update_post_meta( $post_id, '_instagrate_pro_settings', $settings );
    }
	
	function instagram_api_check(){
	    $response = array();
		$response[0] = 1;
		$response[1] = '';
		$resp = wp_remote_get($this->api_base, array('sslverify' => false, 'user-agent' => $this->http_user_agent, 'timeout' => $this->http_timeout));
		if ( is_wp_error($resp)) {
			$response[0] = 0;
			$response[1] = 'Error attempting API check: '. $resp->get_error_message();
		} else {
			if ( 404 != $resp['response']['code'] ) {
				$response[0] = 0;
				$response[1] = 'Error: Instagram API Servers Down';
			}
		}
		return $response;
    }
	
	function instagram_callback_url() {
		(isset($_SERVER["HTTPS"]) && $_SERVER["HTTPS"] == "on" ) ? $protocol = "https://" : $protocol = "http://"; 
		$callback =  $protocol . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"]; 
		return $callback;
	}
	
	private function custom_api_client() {
		$enabled = $this->default_val($this->settings, 'igpsettings_api_enable-custom-client', '0');
		if ($enabled == '0') return false;

		$client_id = $this->default_val($this->settings, 'igpsettings_api_custom-client-id', '');
		$client_secret = $this->default_val($this->settings, 'igpsettings_api_custom-client-secret', '');
		
		if ($client_id == '' || $client_secret == '') return false;	
		return true;	
	}
	
	private function get_client_id() {
		return ($this->custom_api_client()) ? $this->default_val($this->settings, 'igpsettings_api_custom-client-id', '') : $this->consumer_key;
	}
	
	private function get_client_secret() {
		return ($this->custom_api_client()) ? $this->default_val($this->settings, 'igpsettings_api_custom-client-secret', '') : $this->consumer_secret;
	}
	
	private function get_redirect_uri($callback = '') {
		if ($callback == '') $callback = $this->instagram_callback_url();
		$return_uri = base64_encode($callback); 
		return (($this->custom_api_client()) ? get_admin_url() : $this->redirect_uri) .'?return_uri='. $return_uri;
	}
	
	function instagram_authorise_url() {
		$callback = $this->instagram_callback_url();
		$return_uri = base64_encode($callback); 
		$redirect = $this->redirect_uri .'?return_uri='. $return_uri;
		return $this->authorize_url.'?client_id='. $this->get_client_id(). '&redirect_uri='. $this->get_redirect_uri() . '&response_type=code&scope=basic';
	}
	
	function instagram_auth_token($code) {
		$callback = $this->instagram_callback_url();
		$callback = substr($callback, 0, strpos($callback, 'igp_code') - 1);
		$token = array();
		$token['error'] = false;
		$token['message'] = '';
		$token['token'] = '';
		$client_id = $this->get_client_id();
		$client_secret = $this->get_client_secret();
		$redirect_uri = $this->get_redirect_uri( $callback );
		$data = array(	'client_id' => $client_id,
						'client_secret' => $client_secret,
						'grant_type' => 'authorization_code',
						'redirect_uri' => $redirect_uri,
						'code' => $code
					);
		$remote = wp_remote_post( 	$this->access_token_url, 
									array(	'method' => 'POST',
											'sslverify' => false,
											'timeout' => $this->http_timeout,
											'user-agent' => $this->http_user_agent,
											'body' => $data	)
				);			
		$response = wp_remote_retrieve_body( $remote );	
		if ( is_wp_error($response) ) {
			$token['error'] = true;
			$token['message'] = $response->get_error_message();
		} else $token['token'] = json_decode($response);
		return $token;
	}
	
	function instagram_get_user($access, $user_id) {
		$url = 'users/'. $user_id. '/';
		$data = $this->do_http_request( $access, $url, array());
		$user = '';
		if (!$data) return $user;
		if ($data->meta->code == 200) {
			$user = $data->data;
		}
		return $user;
	}
	
	function instagram_get_media($access, $media_id) {
		$url = 'media/'. $media_id. '/';
		$data = $this->do_http_request( $access, $url, array());
		$media = '';
		if (!$data) return $media;
		if ($data->meta->code == 200) {
			$media = $data->data;
		}
		return $media;
	}
	
	function instagram_get_media_comments($access, $media_id) {
		$url = 'media/'. $media_id. '/comments';
		$data = $this->do_http_request( $access, $url, array());
		$media = '';
		if (!$data) return $media;
		if ($data->meta->code == 200) {
			$media = $data->data;
		}
		return $media;
	}
	
	function instagram_connect() {
		if ( $this->custom_api_client() ) {
			if( isset( $_GET['return_uri'] ) ){
				$redirect = '';
				if(isset($_GET['error']) || isset($_GET['error_reason']) || isset($_GET['error_description'])){
					$error = $_GET['error'];
					$reason = $_GET['error_reason'];
					$descp = $_GET['error_description'];
					$url = base64_decode($_GET['return_uri']);
					$redirect = $url.'&igp_error='.$error.'&igp_error_reason='.$reason.'&igp_error_description='.$descp;
				}
				else if(isset($_GET['code'])){
					$code = $_GET['code'];
					$url = base64_decode($_GET['return_uri']);
					$redirect = $url.'&igp_code='. $code;
				}
				
				if ($redirect != '') {
					wp_redirect($redirect);
					die();
				}
				
			}	
		} 
	
		if(isset($_GET['post']) && (isset($_GET['igp_code']) ||  isset($_GET['igp_error']))) {
			if (isset($_GET['igp_code'])) {
				$code = $_GET['igp_code'];
				$account_settings = get_post_meta( $_GET['post'], '_instagrate_pro_settings', true ); 
				$auth_token = $this->instagram_auth_token($code);
				if ($auth_token['error'] == true) {
					echo '<div class="error"><strong>Error getting Access Token: </strong><p>'. $auth_token['message'] .'</p></div>';
					return;
				}
				$auth_token = $auth_token['token'];
				if (isset($auth_token->code)) {
					$account_settings['ig_error'] = '<strong>'. $auth_token->error_type .'</strong> '. $auth_token->error_message;
					$redirect = get_admin_url() .'post.php?post='. $_GET['post'] .'&action=edit';
				} else {
					$account_settings['token'] = $auth_token->access_token;
					$account_settings['user_id'] = isset($auth_token->user->id) ? $auth_token->user->id : '';
					$account_settings['username'] = isset($auth_token->user->username) ? $auth_token->user->username : '';
					$account_settings['bio'] = isset($auth_token->user->bio) ? $this->clean_caption($auth_token->user->bio) : '';
					$account_settings['user_thumb'] = isset($auth_token->user->profile_picture) ? $auth_token->user->profile_picture : '';
					$account_settings['instagram_images'] = 'recent';
					
					$response = $this->instagram_get_images($_GET['post'], 'recent', $auth_token->access_token, '', $auth_token->user->id);
					$data = $response[0];
					$last_id = $response[1];
					$next_url = $response[2];
					if ($data != '') {
						if ($data->meta->code == 200) {
							$account_settings['next_url'] = $next_url;
							$images = $data->data;
							$account_settings['last_id'] = $last_id ;
							$this->insert_images($_GET['post'], $images );
							$account_settings['ig_error'] = '';
							$redirect = get_admin_url() .'post.php?post='. $_GET['post'] .'&action=edit&message=11';
						} else {
							$account_settings['ig_error'] = '<strong>'. $data->meta->error_type .'</strong> '. $data->meta->error_message;
						}
					}
					$redirect = get_admin_url() .'post.php?post='. $_GET['post'] .'&action=edit';
				}
				update_post_meta($_GET['post'], '_instagrate_pro_settings', $account_settings);
				header( 'Location: '. $redirect) ;
			}
			if (isset($_GET['igp_error'])) {
				$redirect = get_admin_url() .'post.php?post='. $_GET['post'] .'&action=edit&message=13';
				header( 'Location: '. $redirect);		
			}
		}
	}
	
	function igp_disconnect_callback() {
		if ( !isset($_POST['nonce']) || !wp_verify_nonce( $_POST['nonce'], 'instagrate_pro' ))
            return 0;
		if ( !isset($_POST['post_id']))
            return 0;
        $response['error'] = false;
        $response['message'] = '';
        $response['redirect'] = '';
		$account_settings = get_post_meta( $_POST['post_id'], '_instagrate_pro_settings', true ); 
		$account_settings['token'] = '';
		$account_settings['user_id'] = '';
		$account_settings['username'] = '';
		$account_settings['bio'] = '';
		$account_settings['user_thumb'] = '';
		$account_settings['ig_error'] = '';
		update_post_meta($_POST['post_id'], '_instagrate_pro_settings', $account_settings);
		$this->delete_images($_POST['post_id'] );
		$redirect = get_admin_url() .'post.php?post='. $_POST['post_id'] .'&action=edit&message=12';
		$response['redirect'] = $redirect;
        $response['message'] = 'success';
        echo json_encode($response);
        die;
	}
	
	function igp_refresh_callback() {
		if ( !isset($_POST['nonce']) || !wp_verify_nonce( $_POST['nonce'], 'instagrate_pro' ))
            return 0;
		if ( !isset($_POST['post_id']))
            return 0;
        $response['error'] = false;
        $response['message'] = '';
        $response['redirect'] = '';
		$account_settings = get_post_meta( $_POST['post_id'], '_instagrate_pro_settings', true ); 
		$user = $this->instagram_get_user( $account_settings['token'], $account_settings['user_id'] );
		$account_settings['user_thumb'] = $user->profile_picture;
		update_post_meta($_POST['post_id'], '_instagrate_pro_settings', $account_settings);
		$response['user_thumb'] = $account_settings['user_thumb'];
        $response['message'] = 'success';
        echo json_encode($response);
        die;
	}
	
	function encode_params($params) {
        $postdata = '';
        if(empty($params)) return $postdata;
        foreach($params as $key => $value) $postdata .= '&'.$key.'='.urlencode($value);
        return $postdata;
    }
	
	function do_http_request( $access, $url, $params = '', $full_url = '') {
		if ($full_url == '') {
			$url = $this->api_base . $url;
			$url = $url .'?access_token='. $access;
			$url = $url . $this->encode_params($params);
		} else $url = $full_url;
		$contents = wp_remote_get($url, array('sslverify' => false, 'user-agent' => $this->http_user_agent, 'timeout' => $this->http_timeout)) ;
		if (is_wp_error($contents)) return false;
		if ( 200 == $contents ['response']['code'] ) {	 
			if ( is_wp_error($contents) || ! isset($contents['body']) ) return false;
			$contents = $contents['body'];
			if ($contents == '') return false;	
			if (empty($contents)) return false;
			$data = json_decode($contents);
			return $data;
		} else return false;
	}
	
	function instagram_get_images($account_id, $stream, $access = '', $min_id = '', $user_id = '',  $tag_name = '', $users_id = '',  $location_id = '') {
		$response = array();
		$response[0] = '';
		$response[1] = '';
		$response[2] = '';
		$options = get_post_meta( $account_id, '_instagrate_pro_settings', true ); 
		if ($access == '') $access = $options['token'];
		if ($user_id == '') $user_id = $options['user_id'];
		if ($users_id == '') $users_id = isset($options['instagram_users_id']) ? $options['instagram_users_id'] : '';
		$params = '';
		$param_key = 'min_id';
		switch($stream) {
			case 'recent':
				$url = 'users/'.$user_id.'/media/recent/';		
			break;
			case 'feed':
				$url = 'users/self/feed/';
			break;
			case 'users':
				$url = 'users/'. $users_id .'/media/recent/';
			break;
			case 'tagged':
				$url = 'tags/'.$tag_name.'/media/recent/';
				$param_key = 'min_tag_id';
			break;
			case 'location':
				if ($location_id == '' || $location_id == '0') return $response;
				$url = 'locations/'. $location_id .'/media/recent/';
			break;
			default:
				$url = 'users/'.$user_id.'/media/recent/';	
			break;
		}
		if ($min_id != '') $params = array( $param_key => $min_id );
		$data = $this->do_http_request( $access, $url, $params);
		if (!$data) return $response;
		if ($data->meta->code == 200) {
			if (is_array($data->data) && !empty($data->data) ) {
				$images = $data->data;
				$last_id = $images[0]->id;
				$count = 1;
				if ($stream == 'tagged') $last_id = $data->pagination->min_tag_id;
				$next_url = (isset($data->pagination->next_url)) ? $data->pagination->next_url : '';
				if ($min_id != '') {
					if (isset($data->pagination->next_url)) {
						$nexturl = $data->pagination->next_url;
						do {
							$count ++;
							$new_data = $this->do_http_request($access, '', '', $nexturl);
							unset($nexturl);
							if (isset($new_data->pagination->next_url)) $nexturl = $new_data->pagination->next_url;
							if ($stream != 'tagged' || ($stream == 'tagged' && $new_data->pagination->min_tag_id > $min_id )) {
								if (is_array($new_data->data) && !empty($new_data->data) ) {
									$images = array_merge($images, $new_data->data);
								}
							}
						} while (($stream != 'tagged' && isset($nexturl)) || ($stream == 'tagged' && isset($nexturl) && $new_data->pagination->min_tag_id > $min_id ));
					}
				}
				$data->data = $images;
				$response[0] = $data;
				$response[1] = $last_id;
				$response[2] = $next_url;
			} else {
				// No Images returned
				$response[0] = $data;
			}
		} else {
			$account_settings = get_post_meta($account_id, '_instagrate_pro_settings', true );
			$account_settings['ig_error'] = '<strong>'. $data->meta->error_type .'</strong> '. $data->meta->error_message;
			update_post_meta($account_id, '_instagrate_pro_settings', $account_settings);
		}
		return $response;
	}
	
	function retrieve_images($account_id) {
		$account_settings = get_post_meta($account_id, '_instagrate_pro_settings', true );
		$settings = (object)$account_settings;		
		if (!isset($settings->last_id)) return;
		if ($settings->last_id != '' && $settings->token != '') {
			$tags = (isset($settings->instagram_hashtags)) ? $settings->instagram_hashtags : '';
			$tag_name = '';
			if ($tags != '') {
				$tags = str_replace( ' ', '', $tags);
				$tags = str_replace( '#', '', $tags);
				$tags = explode(',', $tags);
				$tag_name = $tags[0];
			}
			$users_id = (isset($settings->instagram_users_id)) ? $settings->instagram_users_id : '';
			$location_id = (isset($settings->instagram_location_id)) ? $settings->instagram_location_id : '';
			$response = $this->instagram_get_images($account_id, $settings->instagram_images, $settings->token, $settings->last_id, $settings->user_id, $tag_name, $users_id, $location_id);
			$data = $response[0];
			$last_id = $response[1];
			$next_url = $response[2];
			if ($data != '' && isset($data->data) && (is_array($data->data) && !empty($data->data))) {
				if ($data->meta->code == 200) {
					$images = $data->data;
					$account_settings['last_id'] = $last_id;
					$account_settings['ig_error'] = '';
					$this->insert_images($account_id, $images);
				} else {
					$account_settings['ig_error'] = '<strong>'. $data->meta->error_type .'</strong> '. $data->meta->error_message;
				}
				update_post_meta($account_id, '_instagrate_pro_settings', $account_settings);
			}
		}
	}
	
	function insert_images($account_id, $images, $status = 'pending') {
		global $wpdb;
		if (!$images) return;
		foreach ($images as $key => $image) {
			if ($this->check_account_image_exists($account_id, $image->id)) continue;		
			$caption = '';
			$caption_clean = '';
			$caption_clean_no_tags = '';
			if (isset($image->caption->text)){
				$caption = $this->fix_tags_caption($image->caption->text);
				$caption_clean = $this->clean_caption($caption);
				$tags = (isset($image->tags)) ? $image->tags : '';
				$caption_clean_no_tags = $this->caption_strip_tags($caption_clean, $tags);
			}
			$comments = (isset($image->comments->data)) ? $image->comments->data : array();
			if ($this->default_val($this->settings, 'igpsettings_comments_enable-comments', '0') == 1 && $image->comments->count > 8 ) {
				$comments = $this->get_comments('', $image->id, $account_id);
			}

			$data = array(
				'account_id' => esc_attr($account_id),
				'image_id' => esc_attr($image->id),
				'status' => $status,
				'image_timestamp' => esc_attr($image->created_time),
				'media_type' => esc_attr($image->type),
				'image_url' => esc_attr($image->images->standard_resolution->url),
				'image_thumb_url' => esc_attr($image->images->thumbnail->url),
				'video_url' => (isset($image->videos->standard_resolution->url)) ? esc_attr($image->videos->standard_resolution->url) : '',
				'tags' => (isset($image->tags)) ? serialize($image->tags) : '',
				'filter' => (isset($image->filter)) ? esc_attr($image->filter) : 'nofilter',
				'link' => esc_attr($image->link),
				'caption' => $caption,
				'caption_clean' => $caption_clean,
				'caption_clean_no_tags' => $caption_clean_no_tags,
				'username' => esc_attr($image->user->username),
				'user_id' => esc_attr($image->user->id),
				'user_image_url' => esc_attr($image->user->profile_picture),
				'latitude' => (isset($image->location->latitude)) ? esc_attr($image->location->latitude) : '',
				'longitude' => (isset($image->location->longitude)) ? esc_attr($image->location->longitude) : '',
				'location_name' => (isset($image->location->name)) ? esc_attr($image->location->name) : '',			
				'location_id' => (isset($image->location->id)) ? esc_attr($image->location->id) : '',
				'comments_count' => esc_attr($image->comments->count),
				'likes_count' => esc_attr($image->likes->count),
				'comments' => base64_encode(serialize($comments)),
			);
			$wpdb->insert($wpdb->prefix . $this->plugin_table , $data);

		}
	}
	
	function get_images($account_id, $status = '', $order = 'DESC', $exclude_other_accounts = false, $locked = '', $limit = '', $offset = '') {
		global $wpdb;
		$table = $wpdb->prefix . $this->plugin_table;
		if ($status != '') $status = 'AND status = "'. $status .'"';
		$exclude = ($exclude_other_accounts) ? "AND image_id NOT IN (SELECT image_id FROM $table WHERE account_id <> $account_id AND status = 'posted')" : '';
		
		if($limit != '') $limit = ' LIMIT '. $limit;
		if($offset != '') $limit = ' LIMIT 20 OFFSET '. $offset;

		$images = $wpdb->get_results("SELECT * FROM $table WHERE account_id = $account_id $status $exclude ORDER BY image_timestamp $order$limit");
	
		if ($locked != '') {
			$meta = array ( 'status' => $locked );
			foreach ($images as $img) {
				$this->save_image_meta($img->image_id, $img->account_id, $meta);
			}
		}
		return $images;	
	}
	
	function update_duplicate_images($account_id) {
		global $wpdb;
		$table = $wpdb->prefix . $this->plugin_table;
		$wpdb->query( 
				"UPDATE $table a
					INNER JOIN $table b
				 	ON a.image_id = b.image_id
				 	AND b.status = 'posted'
				 	AND a.account_id != b.account_id
				SET a.status = 'ignore'
				WHERE a.account_id = $account_id 
				and a.status = 'pending'" 
		);
	}
	
	function duplicate_images($old_account_id, $new_account_id) {
		global $wpdb;
		$table_name = $wpdb->prefix . $this->plugin_table;
		$sql = 						  
				"	INSERT INTO $table_name
						(
							account_id
							,image_id
							  ,image_timestamp
							  ,status
							  ,image_url
							  ,image_thumb_url
							  ,tags
							  ,filter
							  ,link
							  ,caption
							  ,caption_clean
							  ,caption_clean_no_tags
							  ,username
							  ,user_id
							  ,user_image_url
							  ,latitude
							  ,longitude
							  ,location_name
							  ,location_id
							  ,comments_count
							  ,comments
							  ,likes_count
						)
					SELECT 	$new_account_id
							  ,image_id
							  ,image_timestamp
							  ,status
							  ,image_url
							  ,image_thumb_url
							  ,tags
							  ,filter
							  ,link
							  ,caption
							  ,caption_clean
							  ,caption_clean_no_tags
							  ,username
							  ,user_id
							  ,user_image_url
							  ,latitude
							  ,longitude
							  ,location_name
							  ,location_id
							  ,comments_count
							  ,comments
							  ,likes_count
					FROM $table_name
					WHERE account_id = $old_account_id
				";
		
		$wpdb->query( $sql);
	}
	
	function check_account_image_exists($account_id, $image_id) {
		global $wpdb;
		$table = $wpdb->prefix . $this->plugin_table;
		$wpdb->get_results( "SELECT * FROM $table WHERE account_id = $account_id AND image_id = '$image_id'" );
		if($wpdb->num_rows > 0) return true;
		return false;				
	}
	
	function account_stats($account_id) {
		global $wpdb;
		$table = $wpdb->prefix . $this->plugin_table;
		$stats = $wpdb->get_results( "	SELECT status, COUNT(*) AS Total
										FROM $table
										WHERE account_id = $account_id 
										GROUP BY status" , OBJECT_K);
		return $stats;				
	}
	
	// TODO
	function images_total($account_id) {
		global $wpdb;
		$table = $wpdb->prefix . $this->plugin_table;
		$stats = $wpdb->get_results( "	SELECT COUNT(*) AS Total
										FROM $table
										WHERE account_id = $account_id");
		return $stats;				
	}
	
	function delete_images($account_id) {
		global $wpdb;
		$table = $wpdb->prefix . $this->plugin_table;
		$wpdb->query( 
				"DELETE FROM $table
				WHERE account_id = $account_id"
		);		
	}
	
	function get_user_id($account_id, $username) {
        $account_settings = get_post_meta($account_id, '_instagrate_pro_settings', true );
        $access = $account_settings['token'];
		$options = get_post_meta( $account_id, '_instagrate_pro_settings', true ); 
		$url = 'users/search/';
		$users_id = '';
		$params = array('q' => $username, 'count' => 1) ;
		$data = $this->do_http_request( $access, $url, $params);
		if (!$data) return;
		if ($data->meta->code == 200) {
			$usernames = $data->data;
			if ($usernames && is_array($usernames)) { 
				$users_id = $usernames[0]->id;
				$options['instagram_users_id'] = $users_id;
				$options['instagram_user'] = $username;
			}
			$options['ig_error'] = '';
		} else {
			$options['ig_error'] = '<strong>'. $data->meta->error_type .'</strong> '. $data->meta->error_message;
		}
		update_post_meta($account_id, '_instagrate_pro_settings', $options);
		return $users_id;
	}
	
	function igp_get_user_id_callback() {
		if ( !isset($_POST['nonce']) || !wp_verify_nonce( $_POST['nonce'], 'instagrate_pro' ))
            return 0;
		if ( !isset($_POST['post_id']) || !isset($_POST['username']))
            return 0;
        $response['error'] = false;
        $response['message'] = '';
        $users_id = $this->get_user_id($_POST['post_id'], $_POST['username']);
        $response['users_id'] = $users_id;
        $response['message'] = 'success';
        echo json_encode($response);
        die;
	}
	
	function get_location_name($account_id, $location_id) {
		$account_settings = get_post_meta($account_id, '_instagrate_pro_settings', true );
        $access = $account_settings['token'];
		$url = 'locations/'. $location_id;
		$data = $this->do_http_request( $access, $url, '');
		if (!$data) return;
		if ($data->meta->code == 200) {
			$location = $data->data;
			return $location->name;
		}
		return 'Not Found';
	}
	
	function get_locations($account_id, $location, $lat, $lng, $ajax = false ) {
        $account_settings = get_post_meta($account_id, '_instagrate_pro_settings', true );
        $access = $account_settings['token'];
		$options = get_post_meta( $account_id, '_instagrate_pro_settings', true ); 
		$url = 'locations/search/';
		$new_locations = array();
		$distance = $this->default_val($this->settings, 'igpsettings_general_location-distance', '');
		if ($lat == '' || $lng == '') {
			$new_locations[0] = '— '. __('Enter Location', $this->plugin_l10n). ' —';
			return $new_locations;
		}
		$new_locations[0] = '— '. __('No Locations Found', $this->plugin_l10n). ' —';
		$params = array('lat' => $lat, 'lng' =>  $lng );
		if ( $distance != '' ) {
            $params['distance'] = $distance;
        }
        $data = $this->do_http_request( $access, $url, $params);
		if (!$data) {
            if ($ajax) {
                $options['ig_error'] = 'The Instagram API is currently throwing errors for large locations';
            } else {
                $options['ig_error'] = '<strong>Instagram API Error</strong> For large locations try settings the distance to default or 500 metres in the <a href="'. admin_url('edit.php?post_type=instagrate_pro&page=instagrate-pro-settings&tab=general') .'">settings</a>';
            }
        } else {

            if ($data->meta->code == 200) {
                $locations = $data->data;
                if ($locations && is_array($locations)) {
                    $new_locations[0] = '— '. __('Select', $this->plugin_l10n). ' —';
                    foreach($locations as $ig_location) {
                        $new_locations[$ig_location->id] = $ig_location->name;
                    }
                    $options['instagram_location'] = $location;
                    $options['location_lat'] = $lat;
                    $options['location_lng'] = $lng;
                }
                $options['ig_error'] = '';
            } else {
                $options['ig_error'] = '<strong>'. $data->meta->error_type .'</strong> '. $data->meta->error_message;
            }

        }
		update_post_meta($account_id, '_instagrate_pro_settings', $options);
		if ($ajax) {
            return array('locations' => $new_locations, 'error' => $options['ig_error'] );
        }
        return $new_locations;
	}
	
	function igp_get_locations_callback() {
		if ( !isset($_POST['nonce']) || !wp_verify_nonce( $_POST['nonce'], 'instagrate_pro' ))
            return 0;
		if ( !isset($_POST['post_id']) || !isset($_POST['location']) || !isset($_POST['lat']) || !isset($_POST['lng']))
            return 0;
        $response['error'] = false;
        $response['message'] = '';
        $locations = $this->get_locations($_POST['post_id'], $_POST['location'], $_POST['lat'], $_POST['lng'], true);
        $response['locations'] = $locations['locations'];
        $response['message'] = ($locations['error'] == '') ? 'success' : $locations['error'];
        echo json_encode($response);
        die;
	}
	
	function change_stream($account_id, $stream, $tags, $tag, $users_id, $location_id, $status = 'pending') {
        $images = array();
        $account_settings = get_post_meta($account_id, '_instagrate_pro_settings', true );
        $access = $account_settings['token'];
		$response = $this->instagram_get_images($account_id, $stream, $access, '', '', $tag, $users_id, $location_id );	
		$data = $response[0];
		$last_id = $response[1];
		$next_url = $response[2];
		if ($data == '') return $images;
        if (!isset($data->meta->code)) return $images;
		if ($data->meta->code == 200) {
			$this->delete_images($account_id);
			$account_settings['next_url'] = $next_url;
			$account_settings['last_id'] = $last_id;
			$account_settings['instagram_images'] = $stream;
			$account_settings['instagram_location_id'] = $location_id;
			$account_settings['instagram_hashtags'] = $tags;
			$account_settings['ig_error'] = '';
			if (is_array($data->data) && !empty($data->data)) {
				$images = $data->data;
				$this->insert_images($account_id, $images, $status);
			}
			update_post_meta($account_id, '_instagrate_pro_settings', $account_settings);
			return $images;
		} else {
			$account_settings['ig_error'] = '<strong>'. $data->meta->error_type .'</strong> '. $data->meta->error_message;
			update_post_meta($account_id, '_instagrate_pro_settings', $account_settings);
		}
		return $images;
	}
	
	function igp_change_stream_callback() {
		if ( !isset($_POST['nonce']) || !wp_verify_nonce( $_POST['nonce'], 'instagrate_pro' ))
            return 0;
		if ( !isset($_POST['post_id']) || !isset($_POST['stream']))
            return 0;
        $response['error'] = false;
        $response['message'] = '';
        $response['next_url'] = '';
		$response['last_id'] = '';
        $images = $this->change_stream($_POST['post_id'], $_POST['stream'], $_POST['tags'], $_POST['tag'], $_POST['users_id'], $_POST['location_id']);
        $response['stats'] = $this->account_stats($_POST['post_id']);
		$account_settings = get_post_meta($_POST['post_id'], '_instagrate_pro_settings', true ); 
        $response['images'] = $images;
        $response['next_url'] = $account_settings['next_url'];
		$response['last_id'] = $account_settings['last_id'];
        $response['message'] = 'success';
        echo json_encode($response);
        die;
	}
	
	function load_images($account_id) {
        $images = array();
        $account_settings = get_post_meta($account_id, '_instagrate_pro_settings', true );
        $next_url = $account_settings['next_url'];
        if ($next_url == '') return $images;
        $access = $account_settings['token'];
        $data = $this->do_http_request($access, '', '', $next_url);
        if (!$data ) return;
		if ($data->meta->code == 200) {
			$account_settings['next_url'] = (isset($data->pagination->next_url)) ? $data->pagination->next_url : '';
			$account_settings['ig_error'] = '';
			$images = $data->data;
			update_post_meta($account_id, '_instagrate_pro_settings', $account_settings);
			$this->insert_images($account_id, $images);
			return $images;
		} else {
			$account_settings['ig_error'] = '<strong>'. $data->meta->error_type .'</strong> '. $data->meta->error_message;
			update_post_meta($account_id, '_instagrate_pro_settings', $account_settings);
		}
		return $images;
	}
	
	function igp_load_images_callback() {
		if ( !isset($_POST['nonce']) || !wp_verify_nonce( $_POST['nonce'], 'instagrate_pro' ))
            return 0;
		if ( !isset($_POST['post_id']))
            return 0;
        if ( !isset($_POST['img_count']))
            return 0;
        $response['error'] = false;
        $response['message'] = '';
        $response['next_url'] = '';
        $response['load'] = false;
        
        $all_count = $this->images_total($_POST['post_id']);

		if($_POST['img_count'] < $all_count[0]->Total && $this->default_val($this->settings, 'igpsettings_general_admin-images', '') != '' ) {
	        
	        $older_images = $this->get_images($_POST['post_id'], '', 'DESC', false, '', 20, $_POST['img_count']);
	        $images = array();
	        foreach($older_images as $image) {
		        $images[] = array(	'id' => $image->image_id,
		        					'images' => array('thumbnail' => array('url' => $image->image_thumb_url)),
		        					'status' => $image->status,
		        					'media_type' => $image->media_type,
		        				);
		        
	        }
	        $response['images'] = $images;
	        // TODO
	        
        } else {
	       
	        $images = $this->load_images($_POST['post_id']);
	        $response['stats'] = $this->account_stats($_POST['post_id']);
			$account_settings = get_post_meta($_POST['post_id'], '_instagrate_pro_settings', true ); 
	        $response['images'] = $images;
	        $response['next_url'] = $account_settings['next_url'];
	        $response['load'] = true;
        }
        $response['message'] = 'success';
        
        echo json_encode($response);
        die;
	}
	
	function get_image_meta($image_id, $account_id) {
        global $wpdb;
		$table = $wpdb->prefix . $this->plugin_table;
		$meta = $wpdb->get_row( "SELECT * FROM $table WHERE account_id = $account_id AND image_id = '$image_id'" );
		$meta->caption_clean =  $meta->caption_clean ; 
		$meta->caption_clean_no_tags = $meta->caption_clean_no_tags;
		$meta->tags = unserialize($meta->tags);
		return $meta;	
	}
	
	function igp_manual_frequency_callback() {
		if ( !isset($_POST['nonce']) || !wp_verify_nonce( $_POST['nonce'], 'instagrate_pro' ))
            return 0;
		if ( !isset($_POST['post_id']) )
            return 0;
        $response['error'] = false;
        $response['message'] = '';
        $old_post_meta = get_post_meta($_POST['post_id'], '_instagrate_pro_settings', true );
		$old_post_meta['posting_frequency'] = 'manual';
		update_post_meta($_POST['post_id'], '_instagrate_pro_settings', $old_post_meta);
        $response['message'] = 'success';
        echo json_encode($response);
        die;
	}
	
	function igp_load_meta_callback() {
		if ( !isset($_POST['nonce']) || !wp_verify_nonce( $_POST['nonce'], 'instagrate_pro' ))
            return 0;
		if ( !isset($_POST['post_id']) || !isset($_POST['id']) )
            return 0;
        $response['error'] = false;
        $response['message'] = '';
        $meta = $this->get_image_meta($_POST['id'], $_POST['post_id']);
        $response['meta'] = $meta;
        $response['message'] = 'success';
        echo json_encode($response);
        die;
	}
	
	function save_image_meta($image_id, $account_id, $meta) {
        global $wpdb;
		$table = $wpdb->prefix . $this->plugin_table;	
		$wpdb->update( 
					$table, 
					$meta, 
					array( 	'account_id' => $account_id,
							'image_id' => $image_id  )
				);
	}
	
	function igp_save_meta_callback() {
		if ( !isset($_POST['nonce']) || !wp_verify_nonce( $_POST['nonce'], 'instagrate_pro' ))
            return 0;
		if ( !isset($_POST['post_id']) || !isset($_POST['id']) )
            return 0;
        $response['error'] = false;
        $response['message'] = '';
        $caption_clean_no_tags = $this->clean_caption(stripslashes($_POST['caption']));
        $caption_clean = str_replace(stripslashes($_POST['caption_old']), $caption_clean_no_tags, stripslashes($_POST['caption_clean']));
        $meta = array (
        				'caption_clean_no_tags' => $caption_clean_no_tags,
        				'caption_clean' => $caption_clean,
        				'status' => strip_tags($_POST['status'])        
        				);
        $this->save_image_meta($_POST['id'], $_POST['post_id'], $meta);
        $response['stats'] = $this->account_stats($_POST['post_id']);
		$response['message'] = 'success';
        echo json_encode($response);
        die;
	}
	
	function bulk_edit_status($account_id, $status, $images = '') {
        global $wpdb;
		$images = "'". str_replace(",", "','", $images). "'";
		$table = $wpdb->prefix . $this->plugin_table;	
		$wpdb->query( 
			 "UPDATE $table SET status = '$status' WHERE account_id = $account_id AND image_id IN ($images)" 
		);
	}
	
	function igp_bulk_edit_status_callback() {
		if ( !isset($_POST['nonce']) || !wp_verify_nonce( $_POST['nonce'], 'instagrate_pro' ))
            return 0;
		if ( !isset($_POST['post_id']) || !isset($_POST['status']) || !isset($_POST['images']) )
          return 0;
        $response['error'] = false;
        $response['message'] = '';
        $this->bulk_edit_status($_POST['post_id'], $_POST['status'], $_POST['images']);
        $response['stats'] = $this->account_stats($_POST['post_id']);
		$response['message'] = 'Images updated to '. $_POST['status'];
        echo json_encode($response);
        die;
	}
	
	function delete_igp_post($post_id) {
	    $post = get_post($post_id);
	    if ($post->post_type == 'instagrate_pro') {
	        $this->delete_images($post_id);
	        $this->clear_all_schedules($post_id);
	    }
	}
	
	function fix_tags_caption($caption) {
		$pattern = '/(\S)(\#)/i';
		$caption = preg_replace($pattern, '\1 \2', $caption);
		return $caption;
	}
	
	function clean_caption($caption) {
		$clean = '';
		$clean = sanitize_text_field($caption);
		$clean = igp_emoji_html_stripped($clean);
		$clean = trim($clean);
		return $clean;	
	}
	
	function caption_strip_tags($caption, $tags) {
		if ($tags == '') return $caption;
		if ($tags && is_array($tags)) {
			foreach($tags as $key => $tag) {
				$tag = '#'. $tag;
				$pattern = '/'. $tag .'(\#|\Z|\s)/i';
				$caption = preg_replace($pattern, '', $caption);
			}
		}	
		return trim($caption);
	}

	function can_write($file) {
		$can_write = false;
		$fhandle = @fopen($file, 'a');
		if ($fhandle == '' ) return false;
		else {
			fclose($fhandle);
			return true;
		}			
	}
	
	function plugin_debug_write($string) {
		$debug_path_file = $this->plugin_path .'debug.txt';
		if ($this->can_write($debug_path_file) == true) {
			try {
				$fh = fopen( $debug_path_file, "a" );
				fwrite( $fh, $string );
				fclose( $fh );
			} catch (Exception $e) { }
		}
	}
	
	function debug_file_exists() {
		$debug_mode = $this->settings['igpsettings_support_debug-mode'];
		$debug_file = $this->plugin_path .'debug.txt';
		$file = file_exists($debug_file);
		if ($debug_mode == 1 && $file ) return true;
		return false;
	}
	
	function igp_send_debug_data_callback() {
        if ( !isset($_POST['nonce']) || !wp_verify_nonce( $_POST['nonce'], 'instagrate_pro' ))
            return 0;
		$response['error'] = true;
        $response['message'] = __( 'There was an error sending your email using wp_mail()', $this->plugin_l10n );
        $email = $this->send_debug_data();
		$response['message'] = $email[1];
        echo json_encode($response);
        die;	
	}
	
	function send_debug_data() {
		$debug_mode = $this->settings['igpsettings_support_debug-mode'];
		$debug_file = $this->plugin_path .'debug.txt';
		$file = file_exists($debug_file);
		$response = array();
		$response[0] = false;
		$response[1] = '';
		if ($debug_mode == 1 && $file ) {
			global $current_user;
			get_currentuserinfo();
			$subject = 'Instagrate Pro Support - Debug File';
			$message = $this->get_install_body();
			$headers =  "From: \"$current_user->display_name\" <$current_user->user_email>\r\n";
			$response[0] = wp_mail( 'support@polevaultweb.com',$subject,$message,$headers,$debug_file);
			$response[1] = __( 'Debug file sent successfully. Please make sure you have raised an issue on the Support Forum. Without knowing the issue this file isn\'t much help on its own and will not be responded too.', $this->plugin_l10n );
		} else {
			$response[1] = __( 'Cannot send file. Debug mode must be on and a debug.txt file needs to have been created.', $this->plugin_l10n );
		}
		return $response;
	}
	
	function igp_send_install_data_callback() {
        if ( !isset($_POST['nonce']) || !wp_verify_nonce( $_POST['nonce'], 'instagrate_pro' ))
            return 0;
		$response['error'] = true;
        $response['message'] = __( 'There was an error sending your email using wp_mail()', $this->plugin_l10n );
        $email = $this->send_install_data();
		if ($email) {
			$response['error'] = false;
			$response['message'] = __( 'Install data sent successfully. Please make sure you have raised an issue on the Support Forum. Without knowing the issue this file isn\'t much help on its own and will not be responded too.', $this->plugin_l10n );
		}
        echo json_encode($response);
        die;	
	}
	
	function duplicate_account($account_id) {
		$old_post = get_post($account_id, ARRAY_A);
		$old_post_meta = get_post_meta($account_id, '_instagrate_pro_settings', true );
		unset($old_post['ID']);
		unset($old_post['guid']);
		// New Account
		$new_post_id = wp_insert_post( $old_post);
		// New Account settings
		add_post_meta($new_post_id, '_instagrate_pro_settings', $old_post_meta);
		// Copy Images across
		$this->duplicate_images($account_id, $new_post_id);
		// New schedule if needed
		if ($old_post_meta['posting_frequency'] == 'schedule') {
        	$this->clear_all_schedules($new_post_id);
        	$posting_day = isset($old_post_meta['posting_day']) ? $old_post_meta['posting_day'] : '';
        	$this->set_schedule($new_post_id, $posting_day, $old_post_meta['posting_time'], $old_post_meta['posting_schedule']);        	
        } 
	}
	
	function igp_duplicate_account_callback() {
        if ( !isset($_POST['nonce']) || !wp_verify_nonce( $_POST['nonce'], 'instagrate_pro' ))
            return 0;
		if ( !isset($_POST['post_id']))
          return 0;
        $response['error'] = false;
		$response['redirect'] = '';
        $this->duplicate_account($_POST['post_id']);
		$redirect = get_admin_url() .'edit.php?post_type=instagrate_pro&message=14';
		$response['redirect'] = $redirect;
        echo json_encode($response);
        die;
	}
	
	function igp_sync_likes() {
        if ( !isset($_POST['nonce']) || !wp_verify_nonce( $_POST['nonce'], 'instagrate_pro' ))
            return 0;
		if ( !isset($_POST['post_id']))
          return 0;
        $response['error'] = false;
		$response['redirect'] = '';
        $this->sync_likes($_POST['post_id']);
		$redirect = get_admin_url() .'edit.php?post_type=instagrate_pro&message=15';
		$response['redirect'] = $redirect;
        echo json_encode($response);
        die;
	}
	
	function igp_sync_comments() {
        if ( !isset($_POST['nonce']) || !wp_verify_nonce( $_POST['nonce'], 'instagrate_pro' ))
            return 0;
		if ( !isset($_POST['post_id']))
          return 0;
        $response['error'] = false;
		$response['redirect'] = '';
        $this->sync_comments($_POST['post_id']);
		$redirect = get_admin_url() .'edit.php?post_type=instagrate_pro&message=16';
		$response['redirect'] = $redirect;
        echo json_encode($response);
        die;
	}
	
	function get_accounts($status = '') {
		$accounts = array();
		global $wpdb;
		$post_type = 'instagrate_pro';
		if ($status != '') $status = " AND post_status = '". $status ."'";
		$post_data = $wpdb->get_results( 
			$wpdb->prepare( "	SELECT * FROM $wpdb->posts
								WHERE post_type = %s
								AND post_status <> 'auto-draft' 
								$status
								ORDER BY post_date desc 	", $post_type )	);
		if ($post_data) {
			foreach( $post_data as $post_item ) {
				$meta = array(	'account_status' => $post_item->post_status,
								'custom_title' => $post_item->post_title,
								'custom_text' => $post_item->post_content
							);
				$accounts[$post_item->ID] = $meta;
			}
		}
		return $accounts;
	}
	
	function send_install_data() {
		global $current_user;
		$subject = 'Instagrate Pro Support - Install Data';
		$message = $this->get_install_body();
		$headers =  "From: \"$current_user->display_name\" <$current_user->user_email>\r\n";
		return wp_mail( 'support@polevaultweb.com',$subject,$message,$headers);	
	}
	
	function get_install_body() {
		$html = '';
		$break = "\n";
		$install_data = $this->get_install_data();
		$account_data = $this->get_account_data();
		$data = array_merge((array)$install_data, (array)$account_data);
		foreach ($data as $key => $setting) {
			if ($key == 'title') {
				$html .= '================= '.$setting.' =====================';
				$html .= $break.$break;
			} elseif (substr($key,0,6) == 'title-') {
				$html .= $break;
				$html .= '== '.$setting.' ==';
				$html .= $break.$break;
			} else {
				$html .= $key.': '.$setting;
				$html .= $break;
			}
		}
		return $html;
	}
	
	function get_account_data() {
		global $post;
		$data = array();
		$accounts = $this->get_accounts();
		if ($accounts) {
			$data['title'] = 'Install Data - Instagrate Pro v'. $this->plugin_version;
			foreach( $accounts as $key => $account ) {
				$account_settings = get_post_meta($key, '_instagrate_pro_settings', true );
				$data['title-'. $key] = 'Account Data - '. $key;
				// Stats
				$stats = $this->account_stats($key);
				if (is_array($stats) && !empty($stats)) {
					$data['['. $key .'] IMAGES PENDING'] = ((isset($stats['pending'])) ? $stats['pending']->Total : 0);
					$data['['. $key .'] IMAGES POSTED'] = ((isset($stats['posted'])) ? $stats['posted']->Total : 0);
					$data['['. $key .'] IMAGES IGNORE'] = ((isset($stats['ignore'])) ? $stats['ignore']->Total : 0);
					$data['['. $key .'] IMAGES POSTING'] = ((isset($stats['posting'])) ? $stats['posting']->Total : 0);
				} else $data['images-'. $key] = 'No images';
				foreach( $account as $meta_key => $meta ) {
					$data['['. $key .'] '. strtoupper($meta_key)] = $meta;
				}
				foreach( $account_settings as $setting_key => $setting ) {
					if ($setting_key == 'post_term' ) {
						$terms = $setting;
	   					$term_text = '';
	   					if ($terms) {
		   					foreach ($terms as $term_selected) {
			   					$term_add = get_term( $term_selected, $account_settings['post_taxonomy'] );
			   					if ( !is_wp_error( $term_add ) ) $term_text .= $term_add->name .', ';
		   					}
		   					if (substr($term_text, -2) == ', ' ) $term_text = substr($term_text, 0, -2);
		   				} else {
	   						$term_text = 'Not Selected';
	   					}
						$setting = $term_text; 	
					}
					if ($setting_key == 'posting_same_post' && $setting != 0 && $account_settings['posting_multiple'] == 'single') {
						$single_post = get_post( $setting );
						$setting = $setting. ' - <a href="'. get_permalink($setting) .'">'. $single_post->post_title .'</a>'; 	
					}
					$data['['. $key .'] '. strtoupper($setting_key)] = $setting;
				}
				$custom_fields =  get_post_custom($key);
				foreach ( $custom_fields as $meta_key => $meta_value ) {
					if (substr($meta_key, 0, 1) == '_') continue;
					$data['['. $key .'] CUSTOM META - '. $meta_key] = $meta_value[0];
				}
				$data['['. $key .'] CUSTOM FEATURED IMAGE'] = has_post_thumbnail( $key);			
				unset($account_settings);
			}
		}
		$settings = $this->settings;
		$data['title-settings'] = 'Settings';
		foreach( $settings as $key => $setting ) {
			$data[strtoupper($key)] = $setting;
		}
		return $data;
	}
	
	function get_install_data() {
		global $current_user, $wpt_version;
		get_currentuserinfo();
		$data = array();
		$data['title'] = 'Install Data - Instagrate Pro v'. $this->plugin_version;
		// WordPress
		$data['title-wp'] = 'WordPress Settings';
		$wpver = get_bloginfo('version');
		$data['Version'] = $wpver;
		$data['URL'] = home_url();
		$data['Install'] = get_bloginfo('wpurl');
		$data['Language'] = get_bloginfo('language');
		$data['Charset'] = get_bloginfo('charset');
		//PHP
		$data['title-php'] = 'PHP Settings';
		$data['PHP Version'] = phpversion();
		$data['Server Software'] = $_SERVER['SERVER_SOFTWARE'];
		$data['User Agent'] = $_SERVER['HTTP_USER_AGENT'];
		$data['cURL Init'] =  ( function_exists('curl_init') )?'On':'Off';
		$data['cURL Exec'] = ( function_exists('curl_exec') )?'On':'Off';
		// Sessions
		$data['title-sess'] = 'Session Settings';
		$_SESSION['enableSessionsTest'] = "On";
		$data['Session Support'] = !empty($_SESSION['enableSessionsTest']) ? "Enabled" : "Disabled";
		$data['Session name'] = ini_get('session.name');
		$data['Cookie path path'] =  ini_get('session.cookie_path');
		$data['Save path'] = ini_get('session.save_path'); 
		$data['Use cookies'] = (ini_get('session.use_cookies') ? 'On' : 'Off');
		$data['Use only cookies'] = (ini_get('session.use_only_cookies') ? 'On' : 'Off');
		// Theme
		$theme_data;
		if (function_exists('wp_get_theme')){
			$theme_data = wp_get_theme();
			$theme_uri = $theme_data->ThemeURI;
			$author_uri = $theme_data->Author_URI;
		} else {
			$theme_data = (object) get_theme_data(get_template_directory() . '/style.css');
			$theme_uri = $theme_data->URI;
			$author_uri = $theme_data->AuthorURI;
		}
		$theme_version = $theme_data->Version;
		$theme_name = $theme_data->Name;
		$description = $theme_data->Description;
		$author = $theme_data->Author;
		$theme_parent = $theme_data->Template;
		$data['title-theme'] = 'Theme Settings';
		$data['Theme Name'] = $theme_name;
		$data['URI'] = $theme_uri;
		$data['Theme Author'] = $author;
		$data['Author URI'] = $author_uri;
		$data['Parent'] = $theme_parent ;
		$data['Theme Version'] = $theme_version;
		// Plugins
		$data['title-plugins'] = 'Plugins Activated';
		$plugins = get_plugins();
		$plugins_string = '';
			foreach( array_keys($plugins) as $key ) {
				if ( is_plugin_active( $key ) ) {
					$plugin =& $plugins[$key];
					$plugin_name = $plugin['Name'];
					$plugin_uri = $plugin['PluginURI'];
					$plugin_version = $plugin['Version'];
					$data[$plugin_name] = 'v.'.$plugin_version.' - '. $plugin_uri;
				}
			}
		return $data;
	}

	function strip_querysting($url) {
		if (strpos($url,'?') !== false) $url = substr($url,0,strpos($url, '?'));
		return $url;
	}
	
	function add_to_sanitize($special_chars) {
		$special_chars[] = '%';
		return $special_chars;		
	}
	
	function attach_image($url, $postid, $post_name, $type = 'image', $image_caption = '') {
		require_once(ABSPATH . "wp-admin" . '/includes/image.php');
		require_once(ABSPATH . "wp-admin" . '/includes/file.php');
		require_once(ABSPATH . "wp-admin" . '/includes/media.php');
		
		$tmp = download_url( $url );
		$file = basename( $url );
		$info = pathinfo($file);
		
		$image_id = $this->default_val($this->settings, 'igpsettings_general_image-save-name', '0');
		if ($post_name == '' || $image_id == 1) {
            $file_name = $file;
        } else {
            $file_name = $post_name;
            $file_name = sanitize_file_name($file_name);
            $file_name = remove_accents($file_name);
            $file_name = substr($file_name, 0, 100);
            $file_name = $file_name .'.'. $info['extension'];
        }

		$file_array = array(
			'name' => $file_name,
			'tmp_name' => $tmp
		);
		// Check for download errors
		if ( is_wp_error( $tmp ) ) {
			@unlink( $file_array[ 'tmp_name' ] );
$this->make_debug('Attaching '. $type .': '. $file_name);
$this->make_debug('Error Attaching '. $type .' - download_url: '. $tmp->get_error_message());
			return 0;
		}
		$id = media_handle_sideload( $file_array, $postid );
		
		// Check for handle sideload errors.
		if ( is_wp_error( $id ) ) {
			@unlink( $file_array['tmp_name'] );
$this->make_debug('Attaching '. $type .': '. $file_name);
$this->make_debug('Error Attaching '. $type .' - media_handle_sideload: '. $id->get_error_message());
			return 0;
		} 
		
		// If caption supplied add it to the image attachement
		if ($image_caption != '') {
			$attachment_post = array(
			  'ID' => $id,
			  'post_excerpt' => apply_filters('igp_image_caption', $image_caption)
			);
			wp_update_post( $attachment_post );
		}
		
		return $id;
	}
	
	
	function igp_manual_post_callback() {
		if ( !isset($_POST['nonce']) || !wp_verify_nonce( $_POST['nonce'], 'instagrate_pro' ))
            return 0;
		if ( !isset($_POST['post_id']) || !isset($_POST['frequency']) )
            return 0;
        $response['error'] = false;
        $response['message'] = '';	
		$images = $this->post_account($_POST['post_id'], 'manual');
        $response['stats'] = $this->account_stats($_POST['post_id']);
		$response['meta'] = 'Done';
		$response['images'] = $images;
		$count = 0;
		$msg = "No media posted";
		if (is_array($images)) {
			$count = sizeof($images);
			$image_txt =  ($count > 1) ? ' media items posted' : ' media item posted';
			$msg = $count . $image_txt;
		}
		$response['message'] = $msg;
        echo json_encode($response);
        die;
	}
	
	function get_likes($atts, $content = null) {
		extract(shortcode_atts(array(), $atts));
		global $post; 
		$likes = get_post_meta($post->ID, 'ig_likes', true);
		return $likes;
	}
	
	function get_map_shortcode($atts, $content = null) {
		extract(shortcode_atts(array(	'lat' => '',
										'lon' => '',
										'marker' => '',
										'style' => 'ROADMAP',
										'class' => '',
										'width' => '400',
										'height' => '300',
										'width_type' => 'pixel',
										'height_type' => 'pixel',
										'zoom' => '15'
										  ), $atts));
		$html = '';
		if ($lat != '' && $lon != '') {
			$width_type = ($width_type == 'percent')? '%' : 'px';
			$height_type = ($height_type == 'percent')? '%' : 'px';
					
			$html .= '<div class="map_canvas '.$class.'" ';
			$html .= 'data-lat="'.$lat.'" ';
			$html .= 'data-lon="'.$lon.'" ';
			$html .= 'data-style="'.$style.'" ';
			$html .= 'data-zoom="'.$zoom.'" ';
			if ($marker != '') {
				$html .= 'data-marker="'.$marker.'" ';
			}
			$html .= 'style="width: '.$width. $width_type .'; height: '.$height. $height_type .';">';
			$html .= '</div>';
		} 
		return $html;
	}
	
	function get_multimap_shortcode($atts, $content = null) {
		extract(shortcode_atts(array(	'style' => 'ROADMAP',
										'class' => '',
										'width' => '400',
										'height' => '300',
										'width_type' => 'pixel',
										'height_type' => 'pixel',
										'zoom' => '15'  ), $atts));
		$html = '';
		global $post;
		$markers = get_post_meta($post->ID, '_igp_latlon', TRUE);
		if (is_array($markers) && $markers && count($markers) > 0) {
			$width_type = ($width_type == 'percent')? '%' : 'px';
			$height_type = ($height_type == 'percent')? '%' : 'px';
					
			$html .= '<div class="multi_map_canvas '.$class.'" ';
			$html .= 'data-markers="'. htmlspecialchars(json_encode($markers)) . '" ';
			$html .= 'data-style="'.$style.'" ';
			$html .= 'data-zoom="'.$zoom.'" ';
			$html .= 'style="width: '.$width. $width_type .'; height: '.$height. $height_type .';">';
			$html .= '</div>';
		}
		return $html;
	}
	
	function get_embed($atts, $content = null) {
		extract(shortcode_atts(array(	'url' => '',
										'width' => '612',
										'height' => '710' ), $atts));
		$html = '';
		if ($url != '') {
			$html .= '<iframe src="'. $url .'" width="'. $width .'" height="'. $height .'" frameborder="0" scrolling="no" allowtransparency="true"></iframe>';
		}
		return $html;
	}
	
	function get_video($atts, $content = null) {
		$this->video_count += 1;
		
		if (empty($atts['src'])) {
			return '';
		}
		$count = $this->video_count;
		if (function_exists('wp_video_shortcode') && !isset($atts['jplayer'])) {
				
			if (!isset($atts['width']) && !isset($atts['height']) ) {
				switch ($atts['size']) {
					case 'medium':
						$atts['width'] = $atts['height'] = '460';
						break;
					case 'small':
						$dim = '320';
						break;
					case 'large':
						$dim = '620';
						break;
					default:
						$dim = '620';
						break;	
				}
				$atts['width'] = $atts['height'] = $dim;
				unset($atts['size']);	
				
			}
			return wp_video_shortcode($atts);
		} else {
			
			$default = array(
	            'src' => '',
	            'title' => '',
	            'poster' => '',
	            'size' => 'large'
	        );
	        
	        extract(shortcode_atts($default, $atts));
	        
			$dim = '620';
			
			switch ($size) {
				case 'medium':
					$dim = '460';
					break;
				case 'small':
					$dim = '320';
					break;
				case 'large':
					$dim = '620';
					break;
			}
	
			
			$jsurl = plugins_url('assets/js/jquery.jplayer/' , __FILE__ );
			
			$player = '
				<script type="text/javascript">
					//<![CDATA[
					jQuery(document).ready(function($){ 
						var videoHeight = "auto";
						if ($.browser.mozilla) {
							var realWidth = $("#jp_container_'. $count. '").parent().width();
							if (realWidth > '. $dim .') realWidth = '. $dim .';
							videoHeight = realWidth + "px";
						}
						$("#igp-jplayer-'. $count .'").jPlayer({
							ready: function () {
							  $(this).jPlayer("setMedia", {
							    m4v: "'. $src .'",
							    poster: "'. $poster. '"
							  });
							},
							play: function() { // To avoid multiple jPlayers playing together.
								$(this).jPlayer("pauseOthers");
							},
							swfPath: "'. $jsurl .'",
							supplied: "m4v",
							size: {
								width: "100%",
								height: videoHeight,
								cssClass: "jp-video-'. $dim .'p"
							},
							cssSelectorAncestor: "#jp_container_'. $count. '"
						});
					});	
					//]]>
				</script>
				<div id="jp_container_'. $count. '" class="jp-video jp-video-'. $dim .'p">
					<div id="igp-jplayer-'. $count .'" class="jp-jplayer"></div>
					<div class="jp-gui">
						<div class="jp-video-play" style="display: block;">
							<a class="jp-video-play-icon jp-play" tabindex="1" href="javascript:;">play</a>
						</div>
					   	<div class="jp-interface">
					        <div class="jp-controls-holder">
							    <a href="javascript:;" class="jp-play" tabindex="1">play</a>
							    <a href="javascript:;" class="jp-pause" tabindex="1">pause</a>
							    <span class="separator sep-1"></span>
							    <div class="jp-progress">
							        <div class="jp-seek-bar">
										<div class="jp-play-bar"><span></span></div>
									</div>
							    </div>
							    <div class="jp-current-time"></div>
							    <span class="time-sep">/</span>
							    <div class="jp-duration"></div>
							    <span class="separator sep-2"></span>
							    <a href="javascript:;" class="jp-mute" tabindex="1" title="mute">mute</a>
							    <a href="javascript:;" class="jp-unmute" tabindex="1" title="unmute">unmute</a>
							    <div class="jp-volume-bar">
							        <div class="jp-volume-bar-value"><span class="handle"></span></div>
							    </div>
							    <span class="separator sep-2"></span>
							    <a href="javascript:;" class="jp-full-screen" tabindex="1" title="full screen">full screen</a>
							    <a href="javascript:;" class="jp-restore-screen" tabindex="1" title="restore screen">restore screen</a>
								<a href="javascript:;" class="jp-repeat" tabindex="1" title="repeat">repeat</a>
								<a href="javascript:;" class="jp-repeat-off" tabindex="1" title="repeat off">repeat off</a>
					        </div>
					    </div>
					</div>
					<div class="jp-no-solution">
					    <span>Update Required</span>
					    To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.
					</div>
				</div>';
			return str_replace("\r\n", '', $player);
		}
	}
	
	function make_debug($text, $divider = false) {
		if (!$this->debug_mode) return;
		if ($divider) $this->debug_text .= '------------------------------------------------------------------------------' . "\n";
		if( is_array( $text ) || is_object( $text ) ){
			$write_text = print_r( $text, true );
		} else {
			$write_text = $text;
		}
		$this->debug_text .=  Date( DATE_RFC822 ) . ' -- ' . $write_text . "\n"; 
	}
	
	function write_debug($account_id = 0) {
		// UnLock Account
		$images = $this->get_images($account_id, 'posting', '', false, 'pending');
		$this->make_debug('Account Unlocked');
		$this->lock_account($account_id, false);
		if (ini_get('safe_mode')) $this->make_debug('Safe Mode On'); else @set_time_limit(30);
		if (!$this->debug_mode) return;
		$output = Date( DATE_RFC822 ) . ' -- ' . 'Debug Output Instagrate Pro v'. $this->plugin_version . ' for '. get_bloginfo('wpurl') ."\n"; 
		$output .= '------------------------------------------------------------------------------' . "\n";
		$output .=  $this->debug_text . '------------------------------------------------------------------------------' . "\n";
		$this->plugin_debug_write($output);
		$this->debug_text = '';
	}
	
	function lock_account($account_id, $lock) {
		if ($account_id == 0) return;
		$account_settings = get_post_meta($account_id, '_instagrate_pro_settings', true );
		if (isset($account_settings['locked'])) unset($account_settings['locked']);
		if ($lock) $account_settings['locked'] = 'locked';
		update_post_meta($account_id, '_instagrate_pro_settings', $account_settings);
	}
	
	function limit_title($wp_post_title, $title_limit_type, $title_limit) {
		if ($title_limit != '' && is_numeric($title_limit) && floor($title_limit) == $title_limit) {
			if ($title_limit_type == 'characters') {
				$wp_post_title = substr($wp_post_title, 0, $title_limit);
			} else if ($title_limit_type == 'words') {
				 $words = explode(" ", $wp_post_title);
				 $wp_post_title = implode(" ", array_splice($words, 0, $title_limit));
			}			
		}
		return apply_filters('igp_post_title', $wp_post_title);
	}
		
	function post_account($account_id, $frequency = '', $schedule = '') {
		if (ini_get('safe_mode')) $this->make_debug('Safe Mode On'); else @set_time_limit(0);
		if ($frequency == '') $frequency = 'schedule';		
		$account = get_post($account_id);
		if (isset($account->post_status) && $account->post_status != 'publish') {
$this->make_debug('Account not published');
			return $this->write_debug($account_id);
		}
		if ($frequency == 'manual') $this->lock_account($account_id, false);
		$account_settings = get_post_meta($account_id, '_instagrate_pro_settings', true );
		if ($frequency == 'schedule') $schedule = $this->default_val($account_settings, 'posting_schedule', 'igp_daily');
		// Check if Account locked
		if (isset($account_settings['locked'])) {
$this->make_debug('Account already Locked - already posting');
			return $this->write_debug($account_id);
		}
		// Lock Account
		$this->lock_account($account_id, true);
$this->make_debug('Account Now Locked');		
		$settings = (object)$account_settings;
		$this->debug_mode = $this->default_val($this->settings, 'igpsettings_support_debug-mode', '0');
		$is_home = $this->default_val($this->settings, 'igpsettings_general_bypass-home', '0');
		$dup_image = $this->default_val($this->settings, 'igpsettings_general_allow-duplicates', '0');
		$default_title = $this->default_val($this->settings, 'igpsettings_general_default-title', 'Instagram Image');
		$title_limit = $this->default_val($this->settings, 'igpsettings_general_title-limit', '');
		$title_limit_type = $this->default_val($this->settings, 'igpsettings_general_title-limit-type', 'characters');
		$credit_link = $this->default_val($this->settings, 'igpsettings_general_credit-link', '0');
		$image_caption_tag = $this->default_val($this->settings, 'igpsettings_general_image-caption', '');
$this->make_debug('Starting to Post Account: '. $account_id);
$this->make_debug('Frequency: '. $frequency);
$this->make_debug('Schedule: '. $schedule);
$this->make_debug('is_home option: '. $is_home);
$this->make_debug('dup_image option: '. $dup_image);
$this->make_debug('default_title option: '. $default_title);
$this->make_debug('credit_link option: '. $credit_link);
		
		$comment_credit = "\n<!-- This post is created by Instagrate Pro v". $this->plugin_version ." -->\n";
		$link_credit = '<br/><a href="http://www.instagrate.co.uk" title="A plugin by polevaultweb.com">Posted by Instagrate Pro v'. $this->plugin_version .'</a>'; 

		// Check the account has a token and last id
		if (isset($settings->token) && $settings->token == '' && isset($settings->last_id) && $settings->last_id == '') {
$this->make_debug('Account has empty token and last id');
			return $this->write_debug($account_id);
		}
		$settings->posting_frequency = (isset($settings->posting_frequency)) ? $settings->posting_frequency : 'constant';
		// Check the account has the correct frequency
		if ($frequency != $settings->posting_frequency) {
$this->make_debug('Account frequency ('. $settings->posting_frequency .') is not the running frequency ('. $frequency .')');
			return $this->write_debug($account_id);
		}
		// Only do run for correct pages 
		if ( $settings->posting_frequency == 'constant' && !$is_home ){
$this->make_debug('Posting constantly as '. $settings->post_type);
			$settings_post_term = (isset($settings->post_term)) ? $settings->post_term : '';
            switch ($settings->post_type) {
				case 'post':
					if ($settings->posting_multiple != 'single') {
						if ( !is_front_page() && !is_home() && !is_category( $settings_post_term ) && !is_tax( $settings->post_taxonomy, $settings_post_term ) ) {
$this->make_debug('Not single '. $settings->post_type .' but not homepage or category page' );
							return $this->write_debug($account_id);
						}
					} else {
						if ( !is_single($settings->posting_same_post )) {
$this->make_debug('Single '. $settings->post_type .' but not the single '. $settings->post_type .'('. $settings->posting_same_post .')' );
							return $this->write_debug($account_id);
						}
					}
				break;
				case 'page':
					if ($settings->posting_multiple != 'single') {
						if ( !is_front_page() && !is_category( $settings_post_term )  && !is_tax( $settings->post_taxonomy, $settings_post_term ) ) {
$this->make_debug('Not single '. $settings->post_type .' but not front page or category page' );
							return $this->write_debug($account_id);
						}
					} else {
						if ( !is_page($settings->posting_same_post )) {
$this->make_debug('Single '. $settings->post_type .' but not the single '. $settings->post_type .'('. $settings->posting_same_post .')' );	
							return $this->write_debug($account_id);
						}
					}
				break;
				default:
					if ($settings->posting_multiple != 'single') {
						if ( !is_front_page() && !is_category( $settings_post_term )  && !is_tax( $settings->post_taxonomy, $settings_post_term ) ) {
$this->make_debug('Not single '. $settings->post_type .' but not front page or category page' );
							return $this->write_debug($account_id); 
						}
					} else {
						if ( !is_singular($settings->post_type)) {
$this->make_debug('Single '. $settings->post_type .' but not the single '. $settings->post_type .'('. $settings->posting_same_post .')' );								
							return $this->write_debug($account_id);
						}
					}
				break;
			}	
		}
		// Hastag Filter	
		$tags = (isset($settings->instagram_hashtags)) ? $settings->instagram_hashtags : '';
$this->make_debug('Hashtags Filter: '. $tags );
		$tag_name = '';
		if ($tags != '') {
			$tags = str_replace( ' ', '', $tags);
			$tags = str_replace( '#', '', $tags);
			$tags = explode(',', $tags);
			$tag_name = $tags[0];
		}
$this->make_debug('Tag to use for API: '. $tag_name );	
		// Retrieve newer images from Instragam
		$this->retrieve_images($account_id);
		
		// Get the order ASC or DESC for group and single types
		$image_order = 'ASC';
		if ($settings->posting_multiple != 'each') $image_order = $settings->posting_image_order;
		
		// Get all images pending
		$images = $this->get_images($account_id, 'pending', $image_order, !$dup_image, 'posting');
	
		if (!$dup_image) $this->update_duplicate_images($account_id);
		
		if (!$images) {
$this->make_debug('0 Images to post');
			return $this->write_debug($account_id);
		}
$this->make_debug('Images to post: '. sizeof($images) );			
		$count = sizeof($images);
		$i = 0;
		//Account specific settings
		$wp_post_author = $settings->post_author;
		$wp_post_status = $settings->post_status;
		$wp_post_type = $settings->post_type;
		$wp_post_tax = $settings->post_taxonomy;
		$wp_post_term = isset($settings->post_term) ? $settings->post_term : array();
		$media_filter = isset($settings->instagram_media_filter) ? $settings->instagram_media_filter : 'all'; 
		$multimap = isset($settings->grouped_multi_map) ? $settings->grouped_multi_map : 'none'; 
		$map_zoom = isset($settings->map_zoom) ? $settings->map_zoom : '15';  
		
		// Media Filtering
		if ($media_filter != 'all') {
			foreach ($images as $key => $image) {
				if($image->media_type != $media_filter) {
					$this->bulk_edit_status($account_id, 'ignore', $image->image_id);
					$this->make_debug('Media Filter set as '. $media_filter .' - Instagram Media is '. $image->media_type);
					unset($images[$key]);
				}
			}
		}
		
		// Custom Featured image
		$custom_feat_attach_id = get_post_thumbnail_id( $account_id );
		
		// Default Tags
		$default_tags_all = wp_get_post_tags($account_id);
		$default_tags = array();
		if ($default_tags_all) {
			foreach($default_tags_all as $tag_default) {
				$default_tags[] = $tag_default->name;
			}
		}
		
		// Hashtag filtering on images
		if (!empty($tags)) {
			foreach ($images as $key => $image) {

				$hashtags = unserialize($image->tags);
				if($hashtags !== false) {
	$this->make_debug('Image '. $key . ' - Tags: ');	
	$this->make_debug($hashtags);
					if (is_array($hashtags)) {
						$tags = array_map('strtolower', $tags);
						$hashtags = array_map('strtolower', $hashtags);
						
						$tag_match = true;
						foreach ($tags as $tag) {
							if (substr($tag, 0, 1) == '-') {
								if (in_array(substr($tag, 1), $hashtags)) {
									$tag_match = false;
									break;
								}
							} else {
								if (!in_array($tag, $hashtags)) {
									$tag_match = false;
									break;
								}
							}
						}
						
						if (!$tag_match) {
							$this->bulk_edit_status($account_id, 'ignore', $image->image_id);
							unset($images[$key]);
						}
					}
				}
			}
		}
		
		
		if (empty($images)) {
$this->make_debug('0 Images to post');
			return $this->write_debug($account_id);
		}
		// Logic for posting_multiple config
		switch ( $settings->posting_multiple ) {
			case 'each':
				foreach ($images as $image) {
					$i ++;
$this->make_debug('Image ID: '. $image->image_id, true);	
$this->make_debug('Image Status: '. $image->status);
					if ($image->status != 'pending') {
$this->make_debug('Image not pending');
						break;
					}			
					// Set up template tags for title
					$this->template_instagram_media_type = $image->media_type;
					$this->template_instagram_media_id = $image->image_id;
					$this->template_caption = $image->caption_clean;
					$this->template_caption_tags_no_hash = str_replace('#', '', $image->caption_clean);
					$this->template_caption_no_tags = $image->caption_clean_no_tags;
					$this->template_tags = implode( apply_filters( 'igp_tag_sep', ' '), unserialize($image->tags));
					$image_tags = unserialize($image->tags);
					$this->template_tags_first = reset( $image_tags );
					$this->template_username = $image->username;
					$this->template_date = date( 'M d, Y @ H:i', $this->get_instagram_time( $image->image_timestamp ) );
					$this->template_filter = $image->filter;
					$this->template_location_name = $image->location_name;
					$this->template_location_lat = $image->latitude;
					$this->template_location_lng = $image->longitude;
					// Template tags for title
					$template_tags = $this->get_template_tags('title');
					// Image caption
					$image_caption = ($image_caption_tag != '') ? $this->replace_template_tags($image_caption_tag, $template_tags, '') : '';
					// Custom title
					$wp_post_title = $this->replace_template_tags($account->post_title, $template_tags, $default_title);
					// Limit post title
					$wp_post_title = $this->limit_title($wp_post_title, $title_limit_type, $title_limit);
					// Post date
					$wp_post_date_gmt = date('Y-m-d H:i:s',current_time('timestamp',1) - (($count-$i) * 20));
					$wp_post_date = date('Y-m-d H:i:s',current_time('timestamp',0) - (($count-$i) * 20));
					if ($settings->post_date == 'on') {
						$wp_post_date = date('Y-m-d H:i:s', $this->get_instagram_time( $image->image_timestamp ) );
						$wp_post_date_gmt = date('Y-m-d H:i:s', $image->image_timestamp );
					}
					
					// Insert post
					$new_post = array(	'post_title' => $wp_post_title,
										'post_content' => '',
										'post_author' => $wp_post_author,
										'post_status' => 'draft',
										'post_type' => $wp_post_type,
										'post_date' => $wp_post_date,
										'post_date_gmt' => $wp_post_date_gmt
									 );
$this->make_debug('Insert New Post');	
$this->make_debug($new_post);
					$new_post_id = wp_insert_post( $new_post );
					$new_post = get_post($new_post_id);
					// Post Tax and Term
					if ($wp_post_tax != '0' && $wp_post_term) {
						$inserted_terms = wp_set_post_terms($new_post_id, $wp_post_term, $wp_post_tax);
						if ( is_wp_error( $inserted_terms ) ) $this->make_debug('Error: Setting Tax Term - '. $inserted_terms->get_error_message());						
					}
					// Post Tags
					if ($settings->post_tag_taxonomy != '0') {
						$wp_post_tags = unserialize($image->tags);
						$wp_post_tags = array_merge($wp_post_tags, $default_tags);
						$inserted_terms = wp_set_post_terms($new_post_id, $wp_post_tags, $settings->post_tag_taxonomy, true);
						if ( is_wp_error( $inserted_terms ) ) $this->make_debug('Error: Setting Tag Terms - '. $inserted_terms->get_error_message());						
					}
					// Post format
					if ($settings->post_format != 'Standard') set_post_format( $new_post_id, $settings->post_format);
					// Post image
					$instagram_image = $image->image_url;
					$wp_image_url = '';
					$wp_gallery = '';
					if ($settings->post_save_media == 'on') { 
						$file_name = $image->caption_clean;
						if ($file_name == '') $file_name = $new_post->post_title;
						$att_image = $this->strip_querysting($image->image_url);
						// Load into media library
						$attach_id = $this->attach_image($att_image, $new_post_id, $file_name, 'image', $image_caption);
						if ($attach_id != 0) {
							// Get new shot image url from media attachment
							$instagram_image = wp_get_attachment_url($attach_id);
							$wp_image_url = $instagram_image;
							// Featured image
							if ($settings->post_featured_image == 'on') {
								$wp_attach_id = (isset($custom_feat_attach_id) && $custom_feat_attach_id != '') ? $custom_feat_attach_id : $attach_id;
								add_post_meta($new_post_id, '_thumbnail_id', $wp_attach_id);
							}
						}
					} else {
						if ($custom_feat_attach_id) add_post_meta($new_post_id, '_thumbnail_id', $custom_feat_attach_id);
					}
					
					// Post Video
					$instagram_video = $image->video_url;
					$wp_video_url = '';
					if ($settings->post_save_media == 'on' && $image->media_type == 'video') { 
						$file_name = $image->caption_clean;
						if ($file_name == '') $file_name = $new_post->post_title;
						$att_image = $this->strip_querysting($image->video_url);
						// Load into media library
						$attach_id = $this->attach_image($att_image, $new_post_id, $file_name, 'video', $image_caption );
						if ($attach_id != 0) {
							// Get new shot image url from media attachment
							$instagram_video = wp_get_attachment_url($attach_id);
							$wp_video_url = $instagram_video;
						}
					} 
					
					// Comments 
					if ($this->default_val($this->settings, 'igpsettings_comments_enable-comments', '0') == 1) {
						$comments = $image->comments;
						if ($comments != '' ) $comments = unserialize(base64_decode($image->comments));
						$this->import_comments($settings->token, $comments, $image->image_id, $new_post_id, $image->id);
					}
					
					// Location map (shortcode)
					$map = '';
					if($image->latitude != '' && $image->longitude != '') {
						update_post_meta($new_post_id, '_igp_latlon' , $image->latitude .','. $image->longitude);
						$map = '[igp_map lat="'. $image->latitude .'" lon="'. $image->longitude .'" marker="'. $image->location_name .'" style="'. $settings->map_style .'" class="'. $settings->map_css .'" width="'. $settings->map_width .'" height="'. $settings->map_height .'" width_type="'. $settings->map_width_type .'" height_type="'. $settings->map_height_type .'" zoom="'. $map_zoom .'"]';
					}
					$this->template_image = $instagram_image;
					$this->template_video = $instagram_video;
					$this->template_user_profile_url = 'http://instagram.com/'. $image->username;
					$this->template_user_profile_image_url = $image->user_image_url;
					$this->template_instagram_url = $image->link;
					$this->template_instagram_image_url = $image->image_url;
					$this->template_instagram_video_url = $image->video_url;
					$this->template_instagram_embed_url = str_replace('http:', '', $image->link) . 'embed/';
					$this->template_wordpress_image_url = $wp_image_url;
					$this->template_wordpress_video_url = $wp_video_url;
					$this->template_wordpress_post_url = get_permalink( $new_post_id );
					$this->template_map = $map;
					// Template tags for content
					$template_tags = $this->get_template_tags();
					// Custom body text
					$wp_post_content = $this->replace_template_tags($account->post_content, $template_tags, '');
					// Template tags for meta
					$template_tags = $this->get_template_tags('meta');
					// Post meta 
					add_post_meta($new_post_id, '_igp_id', $image->id);
					add_post_meta($new_post_id, '_igp_instagram_id', $image->image_id);
					add_post_meta($new_post_id, 'ig_likes', $image->likes_count);

					$account_meta = get_post_meta( $account_id );
					foreach ($account_meta as $meta_key => $meta_value) {
						// Add meta to new post
						if ($meta_key != '_instagrate_pro_settings' && $meta_value[0] != '' )	{
$this->make_debug('Add Post Meta: Key - '. $meta_key . ', Template - '. $meta_value[0] . ', Value - '. $this->replace_template_tags($meta_value[0], $template_tags, ''));
							add_post_meta($new_post_id, $meta_key, $this->replace_template_tags($meta_value[0], $template_tags, '') );
						}
					}					
					// Credit links
					if ($credit_link) {
						$wp_post_content = $comment_credit . $wp_post_content . $link_credit;
					}
					// Update post
					$update_post = array();
					$update_post['ID'] = $new_post_id;
					$update_post['post_status'] = $wp_post_status;
					$update_post['post_content'] = $wp_post_content;
$this->make_debug('Update New Post');	
$this->make_debug($update_post);
					// Update the post into the database
					wp_update_post( $update_post );
					// Set image in table to published
					$meta = array ( 'status' => 'posted' );
					$this->save_image_meta($image->image_id, $account_id, $meta);
				}
			break;
			case 'group':
				// Set up template tags for title
				$this->template_instagram_media_type = '';
				$this->template_instagram_media_id = '';
				$this->template_caption = '';
				$this->template_caption_tags_no_hash = '';
				$this->template_caption_no_tags = '';
				$this->template_tags = '';
				$this->template_tags_first = '';
				$this->template_username = '';
				$this->template_date = '';
				$this->template_filter = '';
				$this->template_location_name = '';
				$this->template_location_lat = '';
				$this->template_location_lng = '';
				// Template tags for title
				$template_tags = $this->get_template_tags('title');
				// Custom title
				$wp_post_title = $this->replace_template_tags($account->post_title, $template_tags, $default_title);
				// Limit post title
				$wp_post_title = $this->limit_title($wp_post_title, $title_limit_type, $title_limit);
				// Post date
				$wp_post_date_gmt = date('Y-m-d H:i:s', current_time('timestamp', 1));
				$wp_post_date = date('Y-m-d H:i:s', current_time('timestamp', 0));
				// Insert post
				$wp_post_content = '';
				$lat_lng = array();
				$new_post = array(	'post_title' => $wp_post_title,
									'post_content' => $wp_post_content,
									'post_author' => $wp_post_author,
									'post_status' => 'draft',
									'post_type' => $wp_post_type,
									'post_date' => $wp_post_date,
									'post_date_gmt' => $wp_post_date_gmt
								 );
$this->make_debug('Insert New Post');	
$this->make_debug($new_post);
				$new_post_id = wp_insert_post( $new_post );
				$new_post = get_post($new_post_id);
				// Post Tax and Term
				if ($wp_post_tax != '0' && $wp_post_term) {
					$inserted_terms = wp_set_post_terms($new_post_id, $wp_post_term, $wp_post_tax);
					if ( is_wp_error( $inserted_terms ) ) $this->make_debug('Error: Setting Tax Term - '. $inserted_terms->get_error_message());						
				}
				// Post format
				if ($settings->post_format != 'Standard') set_post_format( $new_post_id, $settings->post_format);
				// Add all images to Post Content
				foreach ($images as $image) {
					// Post Tags
$this->make_debug('Image ID: '. $image->image_id, true);
$this->make_debug('Image Status: '. $image->status);
				if ($image->status != 'pending') {
$this->make_debug('Image not pending');
						break;
					}
					$this->template_instagram_media_type = $image->media_type;
					$this->template_instagram_media_id = $image->image_id;
					$this->template_caption = $image->caption_clean;
					$this->template_caption_tags_no_hash = str_replace('#', '', $image->caption_clean);
					$this->template_caption_no_tags = $image->caption_clean_no_tags;
					$this->template_tags = implode( apply_filters( 'igp_tag_sep', ' '), unserialize($image->tags));
					$image_tags = unserialize($image->tags);
					$this->template_tags_first = reset( $image_tags );
					$this->template_username = $image->username;
					$this->template_date = date( 'M d, Y @ H:i', $this->get_instagram_time( $image->image_timestamp ) );
					$this->template_filter = $image->filter;
					$this->template_location_name = $image->location_name;
					$this->template_location_lat = $image->latitude;
					$this->template_location_lng = $image->longitude;
					$title_template_tags = $this->get_template_tags('title');
					// Image captions
					$image_caption = ($image_caption_tag != '') ? $this->replace_template_tags($image_caption_tag, $title_template_tags, '') : '';
					
					if ($settings->post_tag_taxonomy != '0') {
						$wp_post_tags = unserialize($image->tags);
						$wp_post_tags = array_merge($wp_post_tags, $default_tags);
						$inserted_terms = wp_set_post_terms($new_post_id, $wp_post_tags, $settings->post_tag_taxonomy, true);
						if ( is_wp_error( $inserted_terms ) ) $this->make_debug('Error: Setting Terms - '. $inserted_terms->get_error_message());						
					}
					// Post image
					$instagram_image = $image->image_url;
					$wp_image_url = '';
					$wp_gallery = '';
					if ($settings->post_save_media == 'on') { 
						$file_name = $image->caption_clean;
						if ($file_name == '') $file_name = $new_post->post_title;
						$att_image = $this->strip_querysting($image->image_url);
						// Load into media library
						$attach_id = $this->attach_image($att_image, $new_post_id, $file_name, 'image', $image_caption );
						if ($attach_id != 0) {
							// Get new shot image url from media attachment
							$instagram_image = wp_get_attachment_url($attach_id);
							$wp_image_url = $instagram_image;
							// Featured image
							if ($settings->post_featured_image == 'on') {
								$wp_attach_id = (isset($custom_feat_attach_id) && $custom_feat_attach_id != '') ? $custom_feat_attach_id : $attach_id;
								update_post_meta($new_post_id, '_thumbnail_id', $wp_attach_id);
							}
						}
					} else {
						if ($custom_feat_attach_id) update_post_meta($new_post_id, '_thumbnail_id', $custom_feat_attach_id);
					}
					
					// Post Video
					$instagram_video = $image->video_url;
					$wp_video_url = '';
					if ($settings->post_save_media == 'on' && $image->media_type == 'video') { 
						$file_name = $image->caption_clean;
						if ($file_name == '') $file_name = $new_post->post_title;
						$att_image = $this->strip_querysting($image->video_url);
						// Load into media library
						$attach_id = $this->attach_image($att_image, $new_post_id, $file_name, 'video', $image_caption );
						if ($attach_id != 0) {
							// Get new shot video url from media attachment
							$instagram_video = wp_get_attachment_url($attach_id);
							$wp_video_url = $instagram_video;
						}
					} 
					
					// Location map (shortcode)
					$map = '';
					if($image->latitude != '' && $image->longitude != '') {
						$lat_lng[] = array(	'lat' => $image->latitude, 
											'lng' => $image->longitude, 
											'marker' => $image->location_name,
											'image' => $instagram_image,
										);
						$map = '[igp_map lat="'. $image->latitude .'" lon="'. $image->longitude .'" marker="'. $image->location_name .'" style="'. $settings->map_style .'" class="'. $settings->map_css .'" width="'. $settings->map_width .'" height="'. $settings->map_height .'" width_type="'. $settings->map_width_type .'" height_type="'. $settings->map_height_type .'" zoom="'. $map_zoom .'"]';
					}
					$this->template_image = $instagram_image;
					$this->template_video = $instagram_video;
					$this->template_user_profile_url = 'http://instagram.com/'. $image->username;
					$this->template_user_profile_image_url = $image->user_image_url;
					$this->template_instagram_url = $image->link;
					$this->template_instagram_image_url = $image->image_url;
					$this->template_instagram_video_url = $image->video_url;
					$this->template_instagram_embed_url = str_replace('http:', '', $image->link) . 'embed/';
					$this->template_wordpress_image_url = $wp_image_url;
					$this->template_wordpress_video_url = $wp_video_url;
					$this->template_wordpress_post_url = get_permalink( $new_post_id );
					$this->template_map = $map;
					// Template tags for content
					$template_tags = $this->get_template_tags();
					// Custom body text
					$new_content = $this->replace_template_tags($account->post_content, $template_tags, '');
					$gallery_exist = strrpos($wp_post_content, '[gallery]');
					if ($gallery_exist !== false) $new_content = str_replace('[gallery]', '', $new_content); 
					$wp_post_content .= $new_content;
					// Set image in table to published
					$meta = array ( 'status' => 'posted' );
					$this->save_image_meta($image->image_id, $account_id, $meta);
				}
				// Update post meta with Lat Lng
				update_post_meta($new_post_id, '_igp_latlon' , $lat_lng);
				
			
				// Multi Map
				if ($multimap != 'none') {
					$multimap_sc = '[igp_multimap style="'. $settings->map_style .'" class="'. $settings->map_css .'" width="'. $settings->map_width .'" height="'. $settings->map_height .'" width_type="'. $settings->map_width_type .'" height_type="'. $settings->map_height_type .'" zoom="'. $map_zoom .'"]';
					$wp_post_content = ($multimap == 'top') ? $multimap_sc .'<br>'. $wp_post_content : $wp_post_content .'<br>'. $multimap_sc;
				}
		
				// Credit links
				if ($credit_link) {
					$wp_post_content = $comment_credit . $wp_post_content . $link_credit;
				}
				// Update post
				$update_post = array();
				$update_post['ID'] = $new_post_id;
				$update_post['post_status'] = $wp_post_status;
				$update_post['post_content'] = $wp_post_content;
				// Update the post into the database
$this->make_debug('Update New Post');	
$this->make_debug($update_post);
				wp_update_post( $update_post );
			break;
			case 'single':
				$new_post_id = $settings->posting_same_post;
				$new_post = get_post($new_post_id);
				$old_content = $new_post->post_content;
				// Add all images to Post Content
				$wp_post_content = '';
				$old_lat_lng = get_post_meta( $new_post_id, '_igp_latlon');
				if (!is_array($old_lat_lng)) $old_lat_lng = array();
				if (isset($old_lat_lng[0])) $old_lat_lng = $old_lat_lng[0];
				$lat_lng = array();
				foreach ($images as $image) {
$this->make_debug('Image ID: '. $image->image_id, true);
$this->make_debug('Image Status: '. $image->status);
					if ($image->status != 'pending') {
$this->make_debug('Image not pending');
						break;
					}
					
					$this->template_instagram_media_type = $image->media_type;
					$this->template_instagram_media_id = $image->image_id;
					$this->template_caption = $image->caption_clean;
					$this->template_caption_tags_no_hash = str_replace('#', '', $image->caption_clean);
					$this->template_caption_no_tags = $image->caption_clean_no_tags;
					$this->template_tags = implode( apply_filters( 'igp_tag_sep', ' '), unserialize($image->tags));
					$image_tags = unserialize($image->tags);
					$this->template_tags_first = reset( $image_tags );
					$this->template_username = $image->username;
					$this->template_date = date( 'M d, Y @ H:i', $this->get_instagram_time( $image->image_timestamp ) );
					$this->template_filter = $image->filter;
					$this->template_location_name = $image->location_name;
					$this->template_location_lat = $image->latitude;
					$this->template_location_lng = $image->longitude;
					$title_template_tags = $this->get_template_tags('title');
					// Image caption
					$image_caption = ($image_caption_tag != '') ? $this->replace_template_tags($image_caption_tag, $title_template_tags, '') : '';
					
					// Post Tags
					if ($settings->post_tag_taxonomy != '0') {
						$wp_post_tags = unserialize($image->tags);
						$wp_post_tags = array_merge($wp_post_tags, $default_tags);
						$inserted_terms = wp_set_post_terms($new_post_id, $wp_post_tags, $settings->post_tag_taxonomy, true);
						if ( is_wp_error( $inserted_terms ) ) $this->make_debug('Error: Setting Terms - '. $inserted_terms->get_error_message());						
					}
					// Post image
					$instagram_image = $image->image_url;
					$wp_image_url = '';
					$wp_gallery = '';
					if ($settings->post_save_media == 'on') { 
						$file_name = $image->caption_clean;
						if ($file_name == '') $file_name = $new_post->post_title;
						$att_image = $this->strip_querysting($image->image_url);
						// Load into media library
						$attach_id = $this->attach_image($att_image, $new_post_id, $file_name, 'image', $image_caption );
						if ($attach_id != 0) {
							// Get new shot image url from media attachment
							$instagram_image = wp_get_attachment_url($attach_id);
							$wp_image_url = $instagram_image;
							// Featured image
							if ($settings->post_featured_image == 'on') {
								$wp_attach_id = (isset($custom_feat_attach_id) && $custom_feat_attach_id != '') ? $custom_feat_attach_id : $attach_id;
								update_post_meta($new_post_id, '_thumbnail_id', $wp_attach_id);
							}
						}
					} else {
						if ($custom_feat_attach_id) update_post_meta($new_post_id, '_thumbnail_id', $custom_feat_attach_id);
					}
					
					// Post Video
					$instagram_video = $image->video_url;
					$wp_video_url = '';
					if ($settings->post_save_media == 'on' && $image->media_type == 'video') { 
						$file_name = $image->caption_clean;
						if ($file_name == '') $file_name = $new_post->post_title;
						$att_image = $this->strip_querysting($image->video_url);
						// Load into media library
						$attach_id = $this->attach_image($att_image, $new_post_id, $file_name, 'video', $image_caption );
						if ($attach_id != 0) {
							// Get new shot video url from media attachment
							$instagram_video = wp_get_attachment_url($attach_id);
							$wp_video_url = $instagram_video;
						}
					} 
					
					// Location map (shortcode)
					$map = '';
					if($image->latitude != '' && $image->longitude != '') {
						$lat_lng[] = array(	'lat' => $image->latitude, 
											'lng' => $image->longitude, 
											'marker' => $image->location_name,
											'image' => $instagram_image,
										);
						$map = '[igp_map lat="'. $image->latitude .'" lon="'. $image->longitude .'" marker="'. $image->location_name .'" style="'. $settings->map_style .'" class="'. $settings->map_css .'" width="'. $settings->map_width .'" height="'. $settings->map_height .'" width_type="'. $settings->map_width_type .'" height_type="'. $settings->map_height_type .'" zoom="'. $map_zoom .'"]';
					}
					
					$this->template_image = $instagram_image;
					$this->template_video = $instagram_video;
					$this->template_user_profile_url = 'http://instagram.com/'. $image->username;
					$this->template_user_profile_image_url = $image->user_image_url;
					$this->template_instagram_url = $image->link;
					$this->template_instagram_image_url = $image->image_url;
					$this->template_instagram_video_url = $image->video_url;
					$this->template_instagram_embed_url = str_replace('http:', '', $image->link) . 'embed/';
					$this->template_wordpress_image_url = $wp_image_url;
					$this->template_wordpress_video_url = $wp_video_url;
					$this->template_wordpress_post_url = get_permalink( $new_post_id );
					$this->template_map = $map;
					// Template tags for content
					$template_tags = $this->get_template_tags();
					// Custom body text
					$new_content = $this->replace_template_tags($account->post_content, $template_tags, '');
					$gallery_exist = strrpos($wp_post_content, '[gallery]');
					if ($gallery_exist !== false) $new_content = str_replace('[gallery]', '', $new_content); 
					$wp_post_content .= $new_content;
					// Set image in table to published
					$meta = array ( 'status' => 'posted' );
					$this->save_image_meta($image->image_id, $account_id, $meta);
				}
				// Update post meta with Lat Lng
				$lat_lng = array_merge($old_lat_lng, $lat_lng);
				update_post_meta($new_post_id, '_igp_latlon' , $lat_lng);
				
				// Update post
				$update_post = array();
				$update_post['ID'] = $new_post_id;
				// Check for existing gallery content
				if (preg_match("|^\[gallery|", $wp_post_content) == 0 || preg_match("|^\[gallery|", $old_content) == 0) {
					// Put new content at the top or bottom of old content
					if ($settings->posting_single_location == 'specific') {
						 $pattern = get_shortcode_regex();
						 if (   preg_match_all( '/'. $pattern .'/s', $old_content, $matches )
						 		&& array_key_exists( 2, $matches )
						 			&& in_array( 'igp-image-position', $matches[2] ) ) {
					     
					        $key = array_search ('igp-image-position', $matches[2]);
					        $full_shortcode = $matches[0][$key];
					        $atts = shortcode_parse_atts( $matches[3][$key] );
							extract(shortcode_atts(array( 'position' => 'below' ), $atts));
							$num_position = ($position == 'above') ? strrpos($old_content, $full_shortcode) : strrpos($old_content, $full_shortcode) + strlen($full_shortcode);
							$wp_post_content = ($position == 'above') ? $wp_post_content ."\n" : "\n". $wp_post_content;
							$wp_post_content = substr_replace($old_content, $wp_post_content, $num_position, 0);							
					    } else $wp_post_content = $old_content . $wp_post_content;					
					} else {
						if ($settings->posting_single_location == 'top') $wp_post_content = $wp_post_content . $old_content;
						else $wp_post_content = $old_content . $wp_post_content;
					}
					$update_post['post_content'] = $wp_post_content;
				}			
				$update_post['post_status'] = $wp_post_status;
				// Update the post into the database
$this->make_debug('Update New Post');	
$this->make_debug($update_post);
				wp_update_post( $update_post );
			break;	
		}
		
		// Write to debug file if mode on
		$this->write_debug($account_id);
		return $images;
	}
	
	private function master_controller($frequency) {
		// Check if debug mode is on
		$this->debug_mode = $this->default_val($this->settings, 'igpsettings_support_debug-mode', '0');
$this->make_debug('Starting the controller for accounts with the frequency '. $frequency);

		$accounts = $this->get_accounts('publish');
$this->make_debug('Total accounts: '. sizeof($accounts) );
		if(isset($accounts) && $accounts) {
			foreach($accounts as $key => $account) {
				$account_settings = get_post_meta($key, '_instagrate_pro_settings', true );
$this->make_debug('Account: '.  $key);
				// Check if correct frequency			
				if ($this->default_val($account_settings, 'posting_frequency', 'constant')  == $frequency) {
$this->make_debug('Account: '.  $key. ' is a '. $frequency .' poster. Run the posting function');
					
					if ($frequency == 'cron') $this->lock_account($key, false);
					
					$this->post_account($key, $frequency, '');
				}
			}
		}
	}
	
	function controller() {
		$this->master_controller('constant');
	}
	
	function cron_controller() {
		instagrate_pro::master_controller('cron');
	    exit;
	}

    function get_instagram_time( $timestamp ) {
        // get datetime object from unix timestamp
        $datetime = new DateTime( "@{$timestamp}", new DateTimeZone( 'UTC' ) );

        // set the timezone to the site timezone
        $datetime->setTimezone( new DateTimeZone( $this->wp_get_timezone_string() ) );

        // return the unix timestamp adjusted to reflect the site's timezone
        return $timestamp + $datetime->getOffset();
    }


    private function wp_get_timezone_string() {

        // if site timezone string exists, return it
        if ( $timezone = get_option( 'timezone_string' ) )
            return $timezone;

        // get UTC offset, if it isn't set then return UTC
        if ( 0 === ( $utc_offset = get_option( 'gmt_offset', 0 ) ) )
            return 'UTC';

        // adjust UTC offset from hours to seconds
        $utc_offset *= 3600;

        // attempt to guess the timezone string from the UTC offset
        $timezone = timezone_name_from_abbr( '', $utc_offset );

        // last try, guess timezone string manually
        if ( false === $timezone ) {

            $is_dst = date( 'I' );

            foreach ( timezone_abbreviations_list() as $abbr ) {
                foreach ( $abbr as $city ) {
                    if ( $city['dst'] == $is_dst && $city['offset'] == $utc_offset )
                        return $city['timezone_id'];
                }
            }
        }

        // fallback to UTC
        return 'UTC';
    }
	
	function set_schedule($account_id, $day, $time, $frequency) {
		$args = array('account_id' => $account_id, 'frequency' => 'schedule', 'schedule' => $frequency );
		$blog_time = strtotime(date('Y-m-d H', strtotime(current_time('mysql'))) . ':00:00');
		//Grab the date in the blogs timezone
		$date = date('Y-m-d', $blog_time);
		//Check if we need to schedule in the future
		$time_arr = explode(':', $time);
		$current_day = date('D', $blog_time);
		if ($day && ($current_day != $day)) {
			$date = date('Y-m-d', strtotime("next $day"));
		} else if ((int)$time_arr[0] <= (int)date('H', $blog_time)) {
			if ($day) {
				$date = date('Y-m-d', strtotime("+7 days", $blog_time));
			} else {
				$date = date('Y-m-d', strtotime("+1 day", $blog_time));
			}
		}
		// Clear any future schedules
		$this->clear_schedule($account_id, $frequency);
		//This will be in the blogs timezone
		$scheduled_time = strtotime($date . ' ' . $time);
		//Convert the selected time to that of the server
		$server_time = strtotime(date('Y-m-d H') . ':00:00') + ($scheduled_time - $blog_time);
		wp_schedule_event($server_time, $frequency, 'scheduled_post_account', $args);
	}
	
	function clear_schedule( $account_id, $frequency ){
		$args = array('account_id' => $account_id, 'frequency' => 'schedule', 'schedule' => $frequency );
		$timestamp = wp_next_scheduled('scheduled_post_account', $args);
		if ($timestamp) {
			wp_unschedule_event($timestamp, 'scheduled_post_account', $args);
		}
	}
	
	function get_next_schedule($account_id, $frequency ) {
		$args = array('account_id' => (int)$account_id, 'frequency' => 'schedule', 'schedule' => $frequency );
		$timestamp = wp_next_scheduled('scheduled_post_account', $args);
		if ($timestamp == '') return '';
		return date( 'M d, Y @ H:i', $timestamp );
	}
		
	function clear_all_schedules($account_id) {
		$schedules = $this->get_all_schedules();
		foreach ($schedules as $key => $schedule) {
			$this->clear_schedule( $account_id, $key);
		}
	}
	
	function clear_schedules() {
		// Remove scheduled hooks
		$accounts = $this->get_accounts();
		if(isset($accounts) && $accounts) {
			foreach($accounts as $key => $account) {
				$account_settings = get_post_meta($key, '_instagrate_pro_settings', true );
				if ($this->default_val($account_settings, 'posting_frequency', 'constant')  == 'schedule') {
					$this->clear_all_schedules($key);
				}
			}
		}
	}
	
	function reactivate_schedules() {
		$accounts = $this->get_accounts();
		if(isset($accounts) && $accounts) {
			foreach($accounts as $key => $account) {
				$account_settings = get_post_meta($key, '_instagrate_pro_settings', true );
				if ($this->default_val($account_settings, 'posting_frequency', 'constant')  == 'schedule') {
					$schedule = $this->default_val($account_settings, 'posting_schedule', 'igp_daily');
					$new_day = ($this->schedule_no_day($schedule)) ? '' : $this->default_val($account_settings, 'posting_day', ''); 
					$new_time = $this->default_val($account_settings, 'posting_time', date('H:00', strtotime('+1 hour'))) ;
					$this->set_schedule($key, $new_day, $new_time, $schedule);
				}
			}
		}
	}
	
	function migrate_one_zero() {
		global $wpdb;
		
		// Install 
		$this->install();
		
		// Get old general settings
		$old_options = get_option('pvw_igp_options');
		$new_options = get_option('igpsettings_settings');
		
		// Set the Default Image title
		$new_options['igpsettings_general_default-title'] = $old_options['default_title'];
		// Set Is Home override
		$new_options['igpsettings_general_bypass-home'] = (isset($old_options['is_home']) && $old_options['is_home'] == 'true') ? '1' : '0';
		// Set Duplicate image posting
		$new_options['igpsettings_general_allow-duplicates'] = (isset($old_options['dup_image']) && $old_options['dup_image'] == 'true') ? '1' : '0';
		// Set Credit Link
		$new_options['igpsettings_general_credit-link'] = ($old_options['credit_link'] == 'true') ? '1' : '0';
		// Set Debug Mode
		$new_options['igpsettings_support_debug-mode'] = ($old_options['debug_mode'] == 'true') ? '1' : '0';
		
		// Update new options
		update_option('igpsettings_settings', $new_options);
		
		$old_accounts = get_option( 'pvw_igp_accounts');
		
		$new_account_meta = array();

		if(isset($old_accounts) && $old_accounts) {
			foreach ($old_accounts as $key => $old_account) {
				$tag = 'igp_'. $old_account['id'] . '_'. $old_account['userid'];
			
				// Instagram Settings
				$new_account_meta['token'] = $old_account['access'];
				$new_account_meta['user_id'] = $old_account['userid'];
				$new_account_meta['username'] = $old_account['username'];
				$user = $this->instagram_get_user($old_account['access'], $old_account['userid']);
				if ($user != '') $new_account_meta['user_thumb'] = $user->profile_picture;
				
				$new_account_meta['last_id'] = '';
				$new_account_meta['next_url'] = '';
				$stream = $old_options[$tag. '_instagram_options'];
				if ($stream == 'all') $stream = 'recent';
				if ($stream == 'hashtag') $stream = 'tagged';
				$new_account_meta['instagram_images'] = $stream;
				$new_account_meta['instagram_hashtags'] = $old_options[$tag. '_hashtag'];
				
				// Posting Settings
				$frequency = $old_options[$tag. '_post_config'];
				if ($frequency == 'real') $frequency = 'constant';				 
				$new_account_meta['posting_frequency'] = $frequency;
				$schedule = $old_options[$tag. '_schedule'];
				$new_account_meta['posting_schedule'] = 'igp_'. $schedule;
				if ($frequency == 'schedule') {
					$new_day = ($this->schedule_no_day('igp_'. $schedule)) ? '' : date('D'); 
					$new_time = date('H:00', strtotime('+1 hour'));
					$new_account_meta['posting_day'] = $new_day;
					$new_account_meta['posting_time'] = $new_time;
				}
				$new_account_meta['posting_multiple'] = $old_options[$tag. '_schedule_config'];
				if(isset($old_options[$tag. '_single_config'])) $new_account_meta['posting_same_post'] = $old_options[$tag. '_single_config'];
				$new_account_meta['posting_image_order'] = 'ASC';
				$new_account_meta['posting_single_location'] = 'top';
				
				// Post Settings
				$new_account_meta['post_save_media'] = ($old_options[$tag. '_image_saving'] == 'media') ? 'on' : 'off';
				$new_account_meta['post_featured_image'] = ($old_options[$tag. '_image_saving'] == 'media' && $old_options[$tag. '_feat_img'] == 'true') ? 'on' : 'off';				
				$new_account_meta['post_type'] = $old_options[$tag. '_post_type'];
				if ($old_options[$tag. '_post_type'] == 'post') {
					$new_account_meta['post_taxonomy'] = 'category';
					$new_account_meta['post_term'] = (array)$old_options[$tag. '_post_category'];
					if ($old_options[$tag. '_tags'] == 'true') $new_account_meta['post_tag_taxonomy'] = 'post_tag';
				}
				$new_account_meta['post_author'] = $old_options[$tag. '_post_author'];
				$new_account_meta['post_status'] = $old_options[$tag. '_post_status'];
				$new_account_meta['post_format'] = $old_options[$tag. '_post_format'];
				$new_account_meta['post_date'] = ($old_options[$tag. '_post_date'] == 'true') ? 'on' : 'off';
				
				// Map Settinsg
				$new_account_meta['map_style'] = 'ROAD';
				$new_account_meta['map_css'] = $old_options[$tag. '_location_css'];
				$new_account_meta['map_width'] = $old_options[$tag. '_location_width'];
				$new_account_meta['map_height'] = $old_options[$tag. '_location_height']; 
				
				// Custom
				$new_title_tag = (isset($old_options[$tag. '_title']) && $old_options[$tag. '_title'] == 'true') ? '%%caption-no-tags%%' : '%%caption%%';
				$wp_post_title = (isset($old_options[$tag. '_custom_title'])) ? $old_options[$tag. '_custom_title'] : '';
				if ($wp_post_title == '') $wp_post_title = $new_title_tag;
				else $wp_post_title = str_replace('%%title%%', $new_title_tag, $wp_post_title);
				
				$old_custom_body = $old_options[$tag. '_custom_body'];
								
				//%%title%%
				$old_custom_body = str_replace('%%title%%', $new_title_tag, $old_custom_body);
				//%%image%%
				if ($old_options[$tag. '_img_post'] == 'true') {
					$new_image_class = (!isset($old_options[$tag. '_css']) || $old_options[$tag. '_css'] == '') ? '' : ' class="'. $old_options[$tag. '_css'] .'"';
					$new_image_size = (!isset($old_options[$tag. '_size']) || $old_options[$tag. '_size'] == '') ? '' : ' width="'. $old_options[$tag. '_size'] .' height="'. $old_options[$tag. '_size'] .'"';
					$new_image = '<img alt="'. $new_title_tag .'" src="%%image%%"'. $new_image_class. $new_image_size .'>';
					if (isset($old_options[$tag. '_link']) && $old_options[$tag. '_link'] != 'no') {
						$new_link_target = (isset($old_options[$tag. '_link_target']) && $old_options[$tag. '_link_target'] == 'true') ? ' target="_blank"' : '';
						$new_link = '%%instagram-image-url%%';
						if ($old_options[$tag. '_image_saving'] == 'media' && $old_options[$tag. '_link'] == 'image') $new_link = '%%wordpress-image-url%%';
						$new_image = '<a href="'. $new_link .'" title="'. $new_title_tag .'"'. $new_link_target .'>'. $new_image .'</a>';
					}
					if ($old_custom_body == '' ) $old_custom_body = $new_image;
					else $old_custom_body = str_replace('%%image%%', $new_image, $old_custom_body)	;		
				} else $old_custom_body = str_replace('%%image%%', '', $old_custom_body);	
				//%%link%%
				if ($old_options[$tag. '_link_text'] != '') {
					$new_link = '<a href="%%instagram-image-url%%" title="'. $old_options[$tag. '_link_text'] .'">'. $old_options[$tag. '_link_text'] .'</a>';
					$old_custom_body = str_replace('%%link%%', $new_link, $old_custom_body);
				}
				//%%date%%
				$old_custom_body = str_replace('%%date%%', '%%image-date%%', $old_custom_body);
				//%%location%%
				$old_custom_body = str_replace('%%location-name%%', '%%image-date%%', $old_custom_body);
				//Gallery
				if ($new_account_meta['posting_multiple'] != 'each' && $old_options[$tag. '_gallery'] == 'true') {
					$old_custom_body = '[gallery]<br/>'. $old_custom_body;
				}
				//%%map%%
				if ($old_options[$tag. '_location'] == 'true') $old_custom_body .= '<br/>%%map%%';
				$wp_post_content = $old_custom_body;
				
				// Insert post
				$new_post = array(	'post_title' => $wp_post_title,
									'post_content' => $wp_post_content,
									'post_status' => 'publish',
									'post_type' => 'instagrate_pro'
								 );
				$new_post_id = wp_insert_post( $new_post );
	
				// Add post meta
				update_post_meta($new_post_id, '_instagrate_pro_settings', $new_account_meta);
				
				// Run change stream to get images
				$tags = $old_options[$tag. '_hashtag'];
				if ($tags != '') {
					$tags = str_replace( ' ', '', $tags);
					$tags = str_replace( '#', '', $tags);
					$tags = str_replace( ',', '', $tags);
				}
				$images = $this->change_stream($new_post_id, $stream, $tags, $tags, '', '', 'posted');
				
				// Set schedule if needed
				if ($frequency == 'schedule') $this->set_schedule($new_post_id, $new_day, $new_time, 'igp_'. $schedule);
			}
		}
		
		// Convert meta for lat long
		$table = $wpdb->prefix .'postmeta';
		$wpdb->query(  "UPDATE $table SET meta_key = '_igp_latlon' WHERE meta_key = 'igp_latlon'" );
		
		// Delete ig image id meta
		$table = $wpdb->prefix .'postmeta';
		$wpdb->query(  "DELETE FROM $table WHERE meta_key IN ('instagrate_id', 'instagrate_image_id')" );

		// Uninstall of old plugin
		
		//remove schedule hooks
		if ( wp_next_scheduled( 'hourly_listen' )) 		wp_clear_scheduled_hook( 'hourly_listen' );
		if ( wp_next_scheduled( 'twicedaily_listen' ))	wp_clear_scheduled_hook( 'twicedaily_listen' );
		if ( wp_next_scheduled( 'daily_listen' ))		wp_clear_scheduled_hook( 'daily_listen' );
		if ( wp_next_scheduled( 'weekly_listen' ))		wp_clear_scheduled_hook( 'weekly_listen' );
		if ( wp_next_scheduled( 'fortnightly_listen')) 	wp_clear_scheduled_hook( 'fortnightly_listen' );
		if ( wp_next_scheduled( 'monthly_listen' ))		wp_clear_scheduled_hook( 'monthly_listen' );
		
		//delete settings and template options
		delete_option('pvw_igp_template'); 
		delete_option('pvw_igp_options'); 
		delete_option('pvw_igp_accounts'); 
		
	}
	
	function migrate_one_two() {
		$accounts = $this->get_accounts('publish');
		global $wpdb;
		
		if(isset($accounts) && $accounts) {
			foreach($accounts as $key => $account) {
				$title_template = $account['custom_title'];
				
				$images = $this->get_images($key, 'posted');

				if(isset($images) && $images) {
					foreach($images as $image) {
						// Set up template tags for title
						$this->template_caption = $image->caption_clean;
						$this->template_caption_tags_no_hash = str_replace('#', '', $image->caption_clean);
						$this->template_caption_no_tags = $image->caption_clean_no_tags;
						$this->template_tags = implode( apply_filters( 'igp_tag_sep', ' '), unserialize($image->tags));
						$image_tags = unserialize($image->tags);
						$this->template_tags_first = reset( $image_tags );
						$this->template_username = $image->username;
						$this->template_date = date( 'M d, Y @ H:i', $this->get_instagram_time( $image->image_timestamp ) );
						$this->template_filter = $image->filter;
						$this->template_location_name = $image->location_name;
						$this->template_location_lat = $image->latitude;
						$this->template_location_lng = $image->longitude;
						// Template tags for title
						$template_tags = $this->get_template_tags('title');
						// Custom title
						$wp_post_title = $this->replace_template_tags($title_template, $template_tags, 'migrate_one_two');
						
						$post_table = $wpdb->prefix .'posts';
											
						$querystr = $wpdb->prepare( "	SELECT ID 
														FROM $post_table  
														WHERE post_title = %s
														AND post_status = 'publish' ", $wp_post_title );

						$posts = $wpdb->get_results($querystr, OBJECT);
			
						foreach($posts as $post) {
							update_post_meta($post->ID, '_igp_id', $image->id);
							update_post_meta($post->ID, 'ig_likes', $image->likes_count);
						}
					}
				}				
			}
		}
		
	}
	
	function sync_likes($account_id = 0) {
		$access_token = '';
		//get all likes count from instagram on images in _igp_images table
		$acc_where = '';
		if($account_id == 0) {
			$accounts = $this->get_accounts('publish');
			if(isset($accounts) && $accounts && count($accounts) > 0) {
				$account_id = key($accounts);
			}
		} else $acc_where = 'AND account_id = '. $account_id;
		if ($account_id == 0) return;
		
		$account_settings = get_post_meta($account_id, '_instagrate_pro_settings', true );
		$settings = (object)$account_settings;
		if (isset($settings->token) && $settings->token != '') $access_token = $settings->token;
		
		if ($access_token == '') return;
		
		global $wpdb;
		$table = $wpdb->prefix . $this->plugin_table;
		$images = $wpdb->get_results("SELECT * FROM $table WHERE status = 'posted' $acc_where");
		foreach($images as $image) {
			$image_id = $image->image_id;
			$media = $this->instagram_get_media($access_token, $image_id);
			$likes = $media->likes->count;
			$wpdb->query( "UPDATE $table SET likes_count = $likes WHERE image_id = '$image_id'"	);			
		}
		$meta_table = $wpdb->prefix .'postmeta';
		$post_table = $wpdb->prefix .'posts';
		//sync those like counts across posts that have been created
		$wpdb->query( 
				"UPDATE $meta_table a
				INNER JOIN $meta_table b
					ON a.post_id = b.post_id
					AND b.meta_key = '_igp_id'
						INNER JOIN $table c
						ON b.meta_value = c.id 
				SET a.meta_value = c.likes_count
				WHERE a.meta_key = 'ig_likes'"
		);	
	}
	
	function instagram_avatar($avatar, $id_or_email, $size, $default, $alt) {
		if ( $this->default_val($this->settings, 'igpsettings_comments_avatar', '1') == 0 ) 
			return $avatar;
		$comment = $id_or_email;
		if (!isset($comment->comment_ID))
			return $avatar;
		$return = $avatar;
		$ig_avatar = get_comment_meta($comment->comment_ID, '_igp_comment_avatar', true);	
		if ($ig_avatar) {
			$return = "<img alt='{$comment->comment_author} profile image' src='{$ig_avatar}' class='avatar avatar-{$size} photo' height='{$size}' width='{$size}' />";
		}
		return $return;
	}
	
	function get_comments($access_token = '', $image_id, $account_id = 0) {
		if ($access_token == '') {
			$account_settings = get_post_meta($account_id, '_instagrate_pro_settings', true );
			$access_token = $account_settings['token'];
		}	
		$comments = $this->instagram_get_media_comments($access_token, $image_id);
		return $comments;
	}
		
	function import_comments($access_token, $comments, $image_id, $post_id, $id, $sync = false) {
		global $wpdb;
		if ($comments == '') {
			$comments = $this->get_comments($access_token, $image_id);
			$data = array(
				'comments' => (isset($comments)) ? base64_encode(serialize($comments)) : array(),
			);
			$where = array( 'id' => $id	);
			$wpdb->update($wpdb->prefix . $this->plugin_table , $data, $where);
		} 
		
		$meta_table = $wpdb->prefix .'commentmeta';
		
		foreach($comments as $comment) {
			$querystr = "	SELECT count(*) 
							FROM $meta_table m 
							WHERE m.meta_key = '_igp_comment_id'
							AND m.meta_value = '$comment->id'	";
			$exists = $wpdb->get_var($querystr);
			
			if($exists > 0) continue;
						
			$content = $comment->text;
			if ($this->default_val($this->settings, 'igpsettings_comments_mentions', '1') == 1) {
				$content = preg_replace("/@(\w+)/", "<a href=\"http://instagram.com/\\1\" target=\"_blank\">@\\1</a>", $content);
			}	
			// set comment data
			$data = array(
			    'comment_post_ID' => $post_id,
			    'comment_author' => $comment->from->username,
			    'comment_author_email' => '@instagram_igp',
			    'comment_author_url' => 'http://instagram.com/'. $comment->from->username,
			    'comment_content' => $content,
			    'comment_type' => '',
			    'comment_parent' => 0,
			    'user_id' => 0,
			    'comment_author_IP' => '127.0.0.1',
			    'comment_agent' => 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.10) Gecko/2009042316 Firefox/3.0.10 (.NET CLR 3.5.30729)',
			    'comment_date' => date('Y-m-d H:i:s', $comment->created_time),
			    'comment_approved' => $this->default_val($this->settings, 'igpsettings_comments_auto-approve', '0'),
			);
						
			$comment_id = wp_insert_comment($data);
			
			//set comment meta ig comment id
			add_comment_meta( $comment_id, '_igp_comment_id', $comment->id, true ); 
			//set comment meta with user image url
			add_comment_meta( $comment_id, '_igp_comment_avatar', $comment->from->profile_picture, true ); 
			
		}	
	}
	
	function sync_comments($account_id = 0) {
		
		if ($this->default_val($this->settings, 'igpsettings_comments_enable-comments', '0') == 0) 
			return;
		
		$access_token = '';
		$acc_where = '';
		if($account_id == 0) {
			$accounts = $this->get_accounts('publish');
			if(isset($accounts) && $accounts && count($accounts) > 0) {
				$account_id = key($accounts);
			}
		} else $acc_where = 'AND account_id = '. $account_id;
		if ($account_id == 0) return;
		
		$account_settings = get_post_meta($account_id, '_instagrate_pro_settings', true );
		$settings = (object)$account_settings;
		if (isset($settings->token) && $settings->token != '') $access_token = $settings->token;
		
		if ($access_token == '') return;
		
		global $wpdb;
		$table = $wpdb->prefix . $this->plugin_table;
		$images = $wpdb->get_results("SELECT * FROM $table WHERE status = 'posted' $acc_where");
		foreach($images as $image) {
			//get posts with the ig_id
			$meta_table = $wpdb->prefix .'postmeta';
			$post_table = $wpdb->prefix .'posts';
			$querystr = "	SELECT post_id 
							FROM $meta_table m 
							WHERE m.meta_key = '_igp_id'
							AND m.meta_value = '$image->id'	";

			$posts = $wpdb->get_results($querystr, OBJECT);
			
			foreach($posts as $post) {
				$this->import_comments($access_token, '', $image->image_id, $post->post_id, $image->id, true);
			}					
		}

	}
	
	function sync_all_comments_likes(){
		instagrate_pro::sync_comments();
	    instagrate_pro::sync_likes();
	    exit;
	}
}
new instagrate_pro();

function igp_uninstall_plugin() {
	global $wpdb;
	if (function_exists('is_multisite') && is_multisite()) {
		$current_blog = $wpdb->blogid;
		// Get all blog ids
		$blogids = $wpdb->get_col("SELECT blog_id FROM $wpdb->blogs");
		foreach ($blogids as $blog_id) {
			switch_to_blog($blog_id);
			igp_uninstall();
		}
		switch_to_blog($current_blog);
		return; 
	} else igp_uninstall();  
}

function igp_uninstall() {
	global $wpdb;
	$table_name = $wpdb->prefix . 'igp_images';
	
	// Delete tables igp_images
	$wpdb->query( "DROP TABLE IF EXISTS `$table_name`;" );
	
	// Delete all meta for posts of type instagrate pro
	$meta_table = $wpdb->prefix .'postmeta';
	$post_table = $wpdb->prefix .'posts';
	$wpdb->query( "DELETE FROM $meta_table WHERE post_id IN ( SELECT id FROM $post_table WHERE post_type = 'instagrate_pro')" );
	
	// Delete posts of type instagrate_pro
	$wpdb->query( "DELETE FROM $post_table WHERE post_type = 'instagrate_pro'" );
	
	// Delete options settings, version and db version
	delete_option('igp_db_version');
	delete_option('pvw_igp_version');
	delete_option('igpsettings_settings');			
}

?>