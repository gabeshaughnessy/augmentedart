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
			jQuery(this).css({'background-image': 'url('+bgImage+')', 'background-size' : 'cover', 'background-position' : 'center', 'background-repeat' : 'no-repeat'});
		}
	});
	$('.thumbnail-menu .menu-item').each(function(){

		if( document.URL.indexOf($(this).find('a').attr('href')) >= 0 ){
			
			$(this).find('a').addClass('current');
		}
		else{
			
			$(this).find('a').removeClass('current');
		}
	});
});
</script>
<link type="text/css" rel="stylesheet" href="http://fast.fonts.net/cssapi/6b75ebd8-ae2d-452e-a135-4862c297ee03.css"/>
	<div class="pseudo-header">
				
				<div class="header-wrapper">
					<h1 class="page-title "><?php the_title(); ?></h1> 
					<div class="img-wrapper right">
						<img src="<?php bloginfo('stylesheet_directory'); ?>/images/nike-fa15/Lead_logo.png" width="100%"/>
					</div>
				</div>
				<div class="quote-wrapper">
					<p class="quote" style="color: <?php echo $quote_text_color; ?>"><?php echo $quote_text; 
					if(isset($quote_source) && !empty($quote_source)) { ?><span class="source"><?php echo $quote_source; ?></span> <?php } ?></p>
				
				<div class="bg-image" data-src="<?php echo (isset($quote_bg['url']) ? $quote_bg['url'] : get_bloginfo('stylesheet_directory').'/images/nike-fa15/app-image-placeholder.jpg'); ?>" ></div></div>
			</div>
	<div class="theme-container frame">
	<?php while ( have_posts() ) : the_post(); global $post; ?>
		<div id="page-<?php the_ID(); ?> nike-page">
			
			<?php if ( empty( $post->post_content) && current_user_can( 'edit_page', get_the_ID() ) ) : ?>
				
			<?php else : ?>

				<?php get_template_part( '_the-content' ); ?>
			<?php endif; ?>
		</div>
		<h5>//Explore other Nike.net Apps</h5>
		<ul class="thumbnail-menu">
			<li class="menu-item"><a href="/nike-fa15-gtm/page-content/plan" ><div class="image-wrapper"><img class="thumbnail" src="<?php bloginfo('stylesheet_directory'); ?>/images/nike-fa15/menu-thumbnails/plan.jpg" width="100%" height="auto"/></div><h6 class="title">Plan</h6></a></li>
			<li class="menu-item"><a href="/nike-fa15-gtm/page-content/assort" ><div class="image-wrapper"><img class="thumbnail" src="<?php bloginfo('stylesheet_directory'); ?>/images/nike-fa15/menu-thumbnails/assort.jpg" width="100%" height="auto"/></div><h6 class="title">Assort</h6></a></li>
			<li class="menu-item"><a href="/nike-fa15-gtm/page-content/create" ><div class="image-wrapper"><img class="thumbnail" src="<?php bloginfo('stylesheet_directory'); ?>/images/nike-fa15/menu-thumbnails/create.jpg" width="100%" height="auto"/></div><h6 class="title">Create</h6></a></li>
			<li class="menu-item"><a href="/nike-fa15-gtm/page-content/download" ><div class="image-wrapper"><img class="thumbnail" src="<?php bloginfo('stylesheet_directory'); ?>/images/nike-fa15/menu-thumbnails/download.jpg" width="100%" height="auto"/></div><h6 class="title">Download</h6><a/></li>
			<li class="menu-item"><a href="/nike-fa15-gtm/page-content/present" ><div class="image-wrapper"><img class="thumbnail" src="<?php bloginfo('stylesheet_directory'); ?>/images/nike-fa15/menu-thumbnails/present.jpg" width="100%" height="auto"/></div><h6 class="title">Present</h6></a></li>
			<li class="menu-item"><a href="/nike-fa15-gtm/page-content/order" ><div class="image-wrapper"><img class="thumbnail" src="<?php bloginfo('stylesheet_directory'); ?>/images/nike-fa15/menu-thumbnails/order.jpg" width="100%" height="auto"/></div><h6 class="title">Order</h6></a></li>
			<li class="menu-item"><a href="/nike-fa15-gtm/page-content/manage" ><div class="image-wrapper"><img class="thumbnail" src="<?php bloginfo('stylesheet_directory'); ?>/images/nike-fa15/menu-thumbnails/manage.jpg" width="100%" height="auto"/></div><h6 class="title">Manage</h6></a></li>
			<li class="menu-item"><a href="/nike-fa15-gtm/page-content/connect" ><div class="image-wrapper"><img class="thumbnail" src="<?php bloginfo('stylesheet_directory'); ?>/images/nike-fa15/menu-thumbnails/connect.jpg" width="100%" height="auto"/></div><h6 class="title">Connect</h6></a></li>
			<li class="menu-item"><a href="/nike-fa15-gtm/page-content/measure" ><div class="image-wrapper"><img class="thumbnail" src="<?php bloginfo('stylesheet_directory'); ?>/images/nike-fa15/menu-thumbnails/measure.jpg" width="100%" height="auto"/></div><h6 class="title">Measure</h6></a></li>
			<li class="menu-item"><a href="/nike-fa15-gtm/page-content/administer" ><div class="image-wrapper"><img class="thumbnail" src="<?php bloginfo('stylesheet_directory'); ?>/images/nike-fa15/menu-thumbnails/administer.jpg" width="100%" height="auto"/></div><h6 class="title">Administer</h6></a></li>
		</ul>
		
	<?php endwhile; ?>
<?php get_footer();