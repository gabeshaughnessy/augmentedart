<?php
/**
 * Template Name: Nike FA15 Page
 * @package Snap
 */

$noheader = true;
?>
<?php get_header(); ?>
<?php //.futura for futura condensed extra bold ?>
<link type="text/css" rel="stylesheet" href="http://fast.fonts.net/cssapi/6b75ebd8-ae2d-452e-a135-4862c297ee03.css"/>	<?php while ( have_posts() ) : the_post(); global $post; ?>
		<div id="page-<?php the_ID(); ?> nike-page">
			<div class="pseudo-header">
				<div class="img-wrapper">
					<img src="<?php bloginfo('stylesheet_directory'); ?>/images/nike-fa15/FA15_logo.jpg" width="30" />
				</div>
				<h1 class="page-title futura"><?php the_title(); ?></h1>
			</div>
			
			<?php if ( empty( $post->post_content) && current_user_can( 'edit_page', get_the_ID() ) ) : ?>
				<div class="placeholder-text">
					<p>
						<?php
							printf(
								__( '<strong>Admin:</strong> Oh snap! It looks like you haven\'t added any content. You can add content in the <a href="%1$s" title="Edit %2$s">Edit Page</a> screen.', 'snap' ),
								esc_url( get_edit_post_link() ),
								the_title_attribute( array( 'echo' => false, ) )
							);
						?>
					</p>
				</div>
			<?php else : ?>

				<?php get_template_part( '_the-content' ); ?>
			<?php endif; ?>
		</div>
	<?php endwhile; ?>
<?php get_footer();