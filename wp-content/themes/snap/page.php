<?php
/**
 * @package Snap
 */
?>
<?php get_header(); ?>
	<?php while ( have_posts() ) : the_post(); global $post; ?>
		<div id="page-<?php the_ID(); ?>">
			<?php get_template_part( '_post-thumbnail' ); ?>
			<h1><?php the_title(); ?></h1>
			<div class="with-sidebar">
				<?php if ( empty( $post->post_content) && current_user_can( 'edit_page', get_the_ID()) ) : ?>
					<div class="placeholder-text">
						<p>
							<?php
								printf(
									__(
										'<strong>Admin:</strong> Oh snap! It looks like you haven\'t added any content. You can add content in the <a href="%1$s" title="Edit %2$s">Edit Page</a> screen.',
										'snap'
									),
									esc_url( get_edit_post_link() ),
									the_title_attribute( array( 'echo' => false, ) )
								);
							?>
						</p>
					</div>
				<?php else : ?>
					<?php get_template_part( '_the-content' ); ?>
				<?php endif; ?>
				<?php comments_template( '', true ); ?>
			</div>
			<?php get_sidebar(); ?>
		</div>
	<?php endwhile; ?>
<?php get_footer();