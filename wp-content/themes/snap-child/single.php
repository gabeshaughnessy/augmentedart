<?php
/**
 * @package Snap
 */
?>
<?php get_header(); ?>

	<?php if ( have_posts() ) : ?>
	<?php global $post; 
	if (in_category('profile', $post->ID)){
		get_template_part('_profile_post');
	}
	else {
	?>
		<?php while ( have_posts() ) : the_post(); ?>
			<h1 class="with-sidebar"><?php the_title(); ?></h1>
		<?php endwhile; ?>
		<?php rewind_posts(); ?>

		<div class="with-sidebar">
			<?php while ( have_posts() ) : the_post(); ?>
				<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
					<div class="byline">
						<?php printf( __( 'By <strong>%s</strong>', 'snap' ), get_the_author() ); ?>
					</div>
					<?php if ( true !== get_theme_mod( 'hide-featured-image' ) ) : ?>
						<?php get_template_part( '_post-thumbnail' ); ?>
					<?php endif; ?>
					<?php get_template_part( '_the-content' ); ?>
					<div class="clear">
						<?php wp_link_pages(); ?>
					</div>
					<?php get_template_part( '_date' ); ?>
					<nav class="pagination post-footer">
						<div>
							<?php the_tags( __( 'Tags: ', 'snap' ), ', ', '' ); ?>
						</div>
						<div>
							<?php printf( __( 'Categories: %s', 'snap' ), get_the_category_list( ', ' ) ); ?>
						</div>
					</nav>
				</div>
				
			<?php endwhile; ?>
			<nav class="post-footer pagination">
				<?php if ( ( get_adjacent_post( false, '', true ) || get_adjacent_post( false, '', false ) ) ) : ?>
					<div title="<?php esc_attr_e( 'Read previous post', 'snap' ); ?>"><?php previous_post_link( '%link', '%title' ); ?></div>
					<div title="<?php esc_attr_e( 'Read next post', 'snap' ); ?>"><?php next_post_link( '%link', '%title' ); ?></div>
				<?php endif; ?>
			</nav>
		</div>

		<?php get_sidebar(); 
		}//end default single
		?>

	<?php endif; 
	
	?>
<?php get_footer();