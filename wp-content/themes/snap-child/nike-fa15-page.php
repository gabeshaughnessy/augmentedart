<?php
/**
 * Template Name: Nike FA15 Page
 * @package Snap
 */

$noheader = true;
?>
<?php get_header(); 

$quote_text = get_field('quote_text');
$quote_bg = get_field('background_image');
$quote_source = get_field('quote_source');
$quote_text_color = get_field('quote_text_color');
?>
<?php //.futura for futura condensed extra bold ?>
<script type="text/javascript">
jQuery(document).ready(function($){
	$('.bg-image').each(function(){
		var bgImage = jQuery(this).data('src');
		if(bgImage.length > 0){
			jQuery(this).css({'background-image': 'url('+bgImage+')', 'background-size' : 'cover', 'background-repeat' : 'no-repeat'});
		}
	});
});
</script>
<link type="text/css" rel="stylesheet" href="http://fast.fonts.net/cssapi/6b75ebd8-ae2d-452e-a135-4862c297ee03.css"/>
	<div class="pseudo-header">
				
				<div class="quote-wrapper">
				<div class="img-wrapper">
					<img src="<?php bloginfo('stylesheet_directory'); ?>/images/nike-fa15/FA15_logo.jpg" width="30" />
				</div>
				<h1 class="page-title futura"><?php the_title(); ?></h1>
					<p class="quote" style="color: <?php echo $quote_text_color; ?>"><?php echo $quote_text; ?><span class="source"><?php echo $quote_source; ?></span></p>
				
				<div class="bg-image" data-src="<?php echo (isset($quote_bg['url']) ? $quote_bg['url'] : get_bloginfo('stylesheet_directory').'/images/nike-fa15/app-image-placeholder.jpg'); ?>" ></div></div>
			</div>
	<div class="theme-container frame">
	<?php while ( have_posts() ) : the_post(); global $post; ?>
		<div id="page-<?php the_ID(); ?> nike-page">
			
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