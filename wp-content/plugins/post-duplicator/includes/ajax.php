<?php

/**
 * Thehe jQuery ajax call to create a new post.
 * Duplicates all the data including custom meta.
 *
 * @since 2.16
 */
function m4c_duplicate_post() {
	
	// Get access to the database
	global $wpdb;
	
	// Check the nonce
	check_ajax_referer( 'm4c_ajax_file_nonce', 'security' );
	
	// Get variables
	$original_id  = $_POST['original_id'];
	
	// Get the post as an array
	$duplicate = get_post( $original_id, 'ARRAY_A' );
		
	$settings = get_mtphr_post_duplicator_settings();
	
	// Modify some of the elements
	$duplicate['post_title'] = $duplicate['post_title'].' '.$settings['title'];
	$duplicate['post_name'] = sanitize_title($duplicate['post_name'].'-'.$settings['slug']);
	
	// Set the status
	if( $settings['status'] != 'same' ) {
		$duplicate['post_status'] = $settings['status'];
	}
	
	// Set the type
	if( $settings['type'] != 'same' ) {
		$duplicate['post_type'] = $settings['type'];
	}
	
	// Set the post date
	$timestamp = ( $settings['timestamp'] == 'duplicate' ) ? strtotime($duplicate['post_date']) : current_time('timestamp',0);
	$timestamp_gmt = ( $settings['timestamp'] == 'duplicate' ) ? strtotime($duplicate['post_date_gmt']) : current_time('timestamp',1);
	
	if( $settings['time_offset'] ) {
		$offset = intval($settings['time_offset_seconds']+$settings['time_offset_minutes']*60+$settings['time_offset_hours']*3600+$settings['time_offset_days']*86400);
		if( $settings['time_offset_direction'] == 'newer' ) {
			$timestamp = intval($timestamp+$offset);
			$timestamp_gmt = intval($timestamp_gmt+$offset);
		} else {
			$timestamp = intval($timestamp-$offset);
			$timestamp_gmt = intval($timestamp_gmt-$offset);
		}
	}
	$duplicate['post_date'] = date('Y-m-d H:i:s', $timestamp);
	$duplicate['post_date_gmt'] = date('Y-m-d H:i:s', $timestamp_gmt);
	$duplicate['post_modified'] = date('Y-m-d H:i:s', current_time('timestamp',0));
	$duplicate['post_modified_gmt'] = date('Y-m-d H:i:s', current_time('timestamp',1));

	// Remove some of the keys
	unset( $duplicate['ID'] );
	unset( $duplicate['guid'] );
	unset( $duplicate['comment_count'] );

	// Insert the post into the database
	$duplicate_id = wp_insert_post( $duplicate );
	
	// Duplicate all the taxonomies/terms
	$taxonomies = get_object_taxonomies( $duplicate['post_type'] );
	foreach( $taxonomies as $taxonomy ) {
		$terms = wp_get_post_terms( $original_id, $taxonomy, array('fields' => 'names') );
		wp_set_object_terms( $duplicate_id, $terms, $taxonomy );
	}
  
  // Duplicate all the custom fields
	$custom_fields = get_post_custom( $original_id );
  foreach ( $custom_fields as $key => $value ) {
	  if( is_array($value) && count($value) > 0 ) {
			foreach( $value as $i=>$v ) {
				$result = $wpdb->insert( $wpdb->prefix.'postmeta', array(
					'post_id' => $duplicate_id,
					'meta_key' => $key,
					'meta_value' => $v
				));
			}
		}
  }

	echo $duplicate_id;

	die(); // this is required to return a proper result
}
add_action( 'wp_ajax_m4c_duplicate_post', 'm4c_duplicate_post' );