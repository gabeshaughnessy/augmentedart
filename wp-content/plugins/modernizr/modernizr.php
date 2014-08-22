<?php
/*
Plugin Name: Modernizr
Plugin URI: http://www.ramoonus.nl/wordpress/modernizr/
Description: Modernizr is a small JavaScript library that detects the availability of native implementations for next-generation web technologies
Version: 2.8.3
Author: Ramoonus
Author URI: http://www.ramoonus.nl/
*/

function rw_modernizr() {
		wp_deregister_script('modernizr'); // deregister
		wp_enqueue_script('wp_enqueue_scripts', plugins_url('/js/modernizr.js', __FILE__), false, '2.8.3', false);
}
add_action('wp_enqueue_scripts', 'rw_modernizr');