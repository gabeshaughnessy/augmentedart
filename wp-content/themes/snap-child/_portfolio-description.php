<?php
/**
 * @package Snap
 */
?>
<section class="portfolio-description">
	<a href="<?php the_permalink(); ?>" rel="bookmark">
		<h4><?php the_title(); ?></h4>
	</a>
	<div class="portfolio-excerpt">
		<?php 
		get_template_part('_portfolio-meta');
        ?>

	</div>
	<?php get_template_part( '_portfolio-details' ); ?>
	<?php if ( is_page_template( 'portfolio.php' ) ) : ?>
		<?php $button_text = apply_filters( 'snap_button_text', get_theme_mod( 'button-text', __( 'View Project', 'snap' ) ), get_the_ID(), get_queried_object_id() ); ?>
		<?php if ( '' !== $button_text ) : ?>
			<a href="<?php the_permalink(); ?>" rel="bookmark">
				<button class="portfolio-button"><?php echo esc_html( $button_text ); ?></button>
			</a>
		<?php endif; ?>
	<?php endif; ?>
</section>