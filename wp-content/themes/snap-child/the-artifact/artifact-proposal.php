<?php
/**
 * Template Name: Artifact Proposal
 * @package Snap
 */
?>
<?php get_header(); ?>
	<?php while ( have_posts() ) : the_post(); global $post; ?>
		<div id="page-<?php the_ID(); ?>" class="artifact">
			<?php get_template_part( '_post-thumbnail' ); ?>
		</div>
	<?php endwhile; ?>
<?php get_footer();