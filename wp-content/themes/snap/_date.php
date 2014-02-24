<?php
/**
 * @package Snap
 */
?>
<?php if ( ! is_single() ) : ?>
	<a href="<?php the_permalink(); ?>" rel="bookmark">
<?php endif; ?>
<?php if ( is_single() ) : ?>
	<span class="post-detail"><?php _e( 'Published on', 'snap' ); ?></span>
<?php endif; ?>
<time class="post-detail" datetime="<?php the_time( 'Y-m-d' ); ?>"><?php the_time( get_option( 'date_format' ) ); ?></time>
<?php if ( ! is_single() ) : ?>
	</a>
<?php endif;