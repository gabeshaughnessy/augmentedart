<?php
/**
 * @package Snap
 */
?>
<?php get_header(); ?>
<?php while ( have_posts() ) : the_post(); global $post; ?>
	<div class="frame">
		<h4><?php the_title(); ?></h4>
	
		<?php if ( wp_attachment_is_image ( get_the_ID() ) ) : ?>
			<?php echo wp_get_attachment_image( get_the_ID(), 'snap-full-width', false, array( 'class' => 'attachment-image attachment-snap-full-width' ) ); ?>
		<?php else : ?>
			<?php echo basename( wp_get_attachment_url( get_the_ID() ) ); ?>
		<?php endif; ?>
	
		<?php if ( ! empty( $post->post_excerpt ) ) : ?>
			<div class="attachment-content attachment-excerpt">
				<?php the_excerpt(); ?>
			</div>
		<?php endif; ?>
	
		<?php if ( $content = $post->post_content ) : ?>
			<div class="attachment-content">
				<?php get_template_part( '_the-content' ); ?>
			</div>
		<?php endif; ?>
	
		<nav class="pagination post-footer">
			<div><?php previous_image_link( 0, __( 'Previous image', 'snap' ) ); ?></div>
			<div><?php next_image_link( 0, __( 'Next image', 'snap' ) ); ?></div>
		</nav>
		
		<?php comments_template( '', true ); ?>
	</div>
<?php endwhile; ?>
<?php get_footer();