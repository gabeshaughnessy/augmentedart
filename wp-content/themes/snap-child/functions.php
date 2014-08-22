<?php
/* DEFINE ENVIRONMENT GLOBAL */
$host = $_SERVER['HTTP_HOST'];
if (stristr($host, 'com') == FALSE){
    define('LC_ENVIRONMENT', "development");
    }
    elseif ((stristr($host, 'staging') !== FALSE)){
        define('LC_ENVIRONMENT', "staging");
        }
        else{
            define('LC_ENVIRONMENT', "production");
            } 
/* Plugins Activiation */
/* ################################################################################# */

    if (LC_ENVIRONMENT != 'development') {
       define('ACF_LITE', true);
    }

    /* Advanced Custome Fields */
    require_once('functions/plugins/advanced-custom-fields/acf.php');
    /* ACF Add-ons */
    include_once( 'functions/plugins/advanced-custom-fields/add-ons/acf-repeater/acf-repeater.php' );
    //include_once( 'functions/plugins/advanced-custom-fields/add-ons/acf-flexible-content/acf-flexible-content.php' );
    //include_once( 'functions/plugins/advanced-custom-fields/add-ons/acf-options-page/acf-options-page.php' ); 
    //include_once( 'functions/plugins/advanced-custom-fields/add-ons/acf-field-date-time-picker/acf-date_time_picker.php' ); 

    if ( LC_ENVIRONMENT != 'development' ) {
        // If this is staging or production
            // load ACF declarations
            require_once('functions/plugins/advanced-custom-fields/register_fields.php'); 
        }
        else{            
            add_action( 'admin_menu', 'lc_acf_menu', 9 );
            function lc_acf_menu(){
                add_submenu_page( 'edit.php?post_type=acf', __('Custom Fields','acf'), __('Custom Fields','acf'), 'manage_options', 'edit.php?post_type=acf');
                add_submenu_page( 'edit.php?post_type=acf', __('Import ACF','acf'), __('Import ACF','acf'), 'manage_options', 'admin.php?import=wordpress');

                }

    }

add_filter('body_class','add_category_to_single');
function add_category_to_single($classes) {
	if (is_single() ) {
		global $post;
		foreach((get_the_category($post->ID)) as $category) {
			// add category slug to the $classes array
			$classes[] = $category->category_nicename;
		}
	}
	// return the $classes array
	return $classes;
}

add_image_size( 'full-screen', 1600, 9999 );




//ENQUEUE ADDITIONAL JAVASCRIPTS
//wp_enqueue_script( $handle, $src, $deps, $ver, $in_footer );

function lc_scripts(){
wp_enqueue_script('child-theme', get_bloginfo("stylesheet_directory").'/assets/javascripts/child-theme.js', array( 'jquery' ), false);
}
add_action('wp_enqueue_scripts', 'lc_scripts');


//ADD IMAGE SIZES 
add_image_size( 'profile-grid', 800, 450, false );
add_image_size( 'press-grid', 400, 450, false );


function get_cat_slug($cat_id) {
    $cat_id = (int) $cat_id;
    $category = &get_category($cat_id);
    return $category->slug;
}

require_once('functions/frontend-post.php');
?>