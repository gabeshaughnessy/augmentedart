<?php

/* --------------------------------------------------------- */
/* !Create an admin notice that a post has been duplicated - 2.11 */
/* --------------------------------------------------------- */

function mtphr_post_duplicator_notice() {
	
	$duplicated_id = isset($_GET['post-duplicated']) ? $_GET['post-duplicated'] : '';
	if( $duplicated_id != '' ) {
		
		$settings = get_mtphr_post_duplicator_settings();
	
		// Get the post type object
		$duplicated_post = get_post($duplicated_id);
		$post_type = get_post_type_object( $duplicated_post->post_type );
		
		// Set the button label
		$pt = $post_type->labels->singular_name;
		$link = '<a href="'.get_edit_post_link($duplicated_id).'">'.__('here', 'post-duplicator').'</a>';
		$label = sprintf( __( 'Successfully Duplicated! You can edit your new %1$s %2$s.', 'post-duplicator' ), $pt, $link );
		
		?>
    <div class="updated">
       <p><?php echo $label; ?></p>
    </div>
    <?php
	}
}
add_action('admin_notices', 'mtphr_post_duplicator_notice');