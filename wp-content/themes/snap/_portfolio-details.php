<?php
/**
 * @package Snap
 */
?>
<ul class="portfolio-details">
	<?php $tags = get_the_terms( get_the_ID(), 'post_tag' ); ?>
	<?php if ( ! is_wp_error( $tags ) && ! empty( $tags ) ) : ?>
		<li><?php echo esc_html( implode( ', ', wp_list_pluck( $tags, 'name' ) ) ); ?></li>
	<?php endif; ?>
	<li><?php the_time( get_option( 'date_format' ) ); ?></li>
</ul>