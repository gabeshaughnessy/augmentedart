<?php
/**
 * @package Snap
 */
?>
<?php get_header(); ?>
<?php while ( have_posts() ) : the_post(); ?>

	<?php global $post; $has_excerpt = ( ! empty( $post->post_excerpt ) ); ?>

	<div class="portfolio-single-content<?php if ( ! $has_excerpt ) : ?> portfolio-single-content-without-excerpt<?php endif; ?>">
		<?php if ( ! $has_excerpt ) : ?>
			<h1><?php the_title(); ?></h1>
		<?php endif; ?>
		<?php the_content(); ?>
		<?php if ( ! $has_excerpt ) : ?>
			<?php get_template_part( '_portfolio-details' ); ?>
		<?php endif; ?>
	</div>

	<?php if ( $has_excerpt ) : ?>
		<?php get_template_part( '_portfolio-description' ); ?>
	<?php endif; ?>

	<?php if ( comments_open() || have_comments() ) : ?>
		<div class="portfolio-single-content<?php if ( ! $has_excerpt ) : ?> portfolio-single-content-without-excerpt<?php endif; ?>">
			<?php comments_template( '', true ); ?>
		</div>
	<?php endif; ?>

<?php endwhile; ?>
<?php get_footer();