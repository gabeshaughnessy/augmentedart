<?php
/**
 * @package Snap
 */
?>
<?php get_header(); ?>
	<?php

	//setup user meta
	$author= (isset($_GET['author_name'])) ? get_user_by('slug', $author_name) : get_userdata(intval($author));
	$authorMeta = get_user_meta($author->ID);
if(isset($authorMeta["wp_user_avatar"])){
	$avatarID = $authorMeta["wp_user_avatar"][0];
	}
	else  $avatarID = false;

	?><form id="user-select"><div class="choose-avatar" target="_blank"><?php echo ($avatarID ? wp_get_attachment_image($avatarID ) : "" ); ?><p class="name"><?php echo $author->display_name; ?></p> <input type="checkbox" name="user_devices" value="<?php echo $author->ID; ?>" id="f"> </a>
<pre><?php print_r($authorMeta); ?></pre>
	<?php
	 while ( have_posts() ) : the_post(); global $post; ?>
		<div id="page-<?php the_ID(); ?>">
			
		</div>
	<?php endwhile; ?>
<?php get_footer();