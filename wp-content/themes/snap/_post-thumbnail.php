<?php
/**
 * @package Snap
 */
?>
<?php $thumbnail = get_the_post_thumbnail( get_the_ID(), 'snap-full-width' ); ?>
<?php if ( '' !== $thumbnail ) : ?>
	<figure class="featured-image">
		<?php echo $thumbnail; ?>
		<?php snap_post_thumbnail_caption(); ?>
	</figure>
<?php endif;