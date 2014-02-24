<?php
/*
Plugin Name: Layar Maker
Plugin URI: http://www.augmentedart.com/
Add content to Layar.com layers registered on their site. This plugin makes a custom post type with fields for you to add the necessary content and position it. 
Version: 1.0
Author: Gabe Shaughnessy
Author URI: http://gabesimagination.com
License: GPL
*/
?>
<?php
/*
Plugin Name: Layar Maker
Plugin URI: http://www.augmentedart.com/
Add content to Layar.com layers registered on their site. This plugin makes a custom post type with fields for you to add the necessary content and position it. 
Version: 1.0
Author: Gabe Shaughnessy
Author URI: http://gabesimagination.com
License: GPL

Registers the post_type 'Layar'

*/

global $prefix;
/** Layar registration ================================= */

add_action( 'init', 'lc_layar_register' );

function lc_layar_register() {
	$layar_args = array(
		'public' => true,
		'publicly_queryable' => true,
		'query_var' => 'layar',
		'rewrite' => array(
			'slug' => 'layar'
		),
		/*'menu_icon' => plugins_url( 'images/Layar_icon-16.png' , __FILE__ ), // 16px16*/
		'show_ui' => true,
		'supports' => array(
			'title', 
			'thumbnail',
			'revisions',


		),

		'labels' => array(
			'name' => 'Layar',
			'singular_name' => 'Layar',
			'add_new' => 'Add New Layar',
			'add_new_item' => 'Add New Layar',
			'edit_item' => 'Edit Layar',
			'new_item' => 'New Layar',
			'view_item' => 'View Layar',
			'search_items' => 'Search Layar',
			'not_found' => 'No layar Found',
			'not_found_in_trash' => 'No Layar Found In Trash',
		),
		'taxonomies' => array(
		//custom taxonomies defined below, link to existing taxonomies like category or tag here
		)
	);
	register_post_type( 'layar', $layar_args	);

}

function layar_rewrite_flush() {
  
    lc_layar_register();

   
    flush_rewrite_rules();
}
register_activation_hook( __FILE__, 'layar_rewrite_flush' );

?>