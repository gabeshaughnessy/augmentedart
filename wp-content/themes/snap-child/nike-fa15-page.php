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
$learn_more_links = get_field('learn_more_links');
$show_app_menu = get_field('show_app_menu');
$menu_link_text = get_field('menu_link_text');
$menu_title = get_field('menu_title');
if($menu_link_text == ''){
	$menu_link_text = 'Explore the Sales 2.0 Apps';
}
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
	



	$('.off-canvas.overlay').height($('.main-container').height());
	$('.off-canvas.sidebar').css('min-height', $('.main-container').height()+ 'px');


	$('.off-canvas.overlay').on('click', function(){
		$('body').removeClass('active-nav');
	});

});
function toggleMenu(){
	jQuery('body').toggleClass('active-nav');
	

}
</script>
<link type="text/css" rel="stylesheet" href="http://fast.fonts.net/cssapi/6b75ebd8-ae2d-452e-a135-4862c297ee03.css"/>
	<?php if($show_app_menu == 'top' || $show_app_menu == 'bottom') { 
			get_template_part('nike-templates/app-menu'); 
		} ?>
		<div role="main" class="main-container">
			<div class="pseudo-header">
				
				<div class="header-wrapper">
					<h1 class="page-title "><?php the_title(); ?></h1> 
					<div class="img-wrapper right">
						<img src="<?php bloginfo('stylesheet_directory'); ?>/images/nike-fa15/nike.net_logo.png" width="100%"/>
					</div>
				</div>
				<div class="quote-wrapper">
					<p class="quote" style="color: <?php echo $quote_text_color; ?>"><?php echo $quote_text; 
					if(isset($quote_source) && !empty($quote_source)) { ?><span class="source"><?php echo $quote_source; ?></span> <?php } ?></p>
				
				<div class="bg-image" data-src="<?php echo (isset($quote_bg['url']) ? $quote_bg['url'] : get_bloginfo('stylesheet_directory').'/images/nike-fa15/app-image-placeholder.jpg'); ?>" ></div></div>
			</div>

	<div class="theme-container frame">
		<?php if($show_app_menu == 'top') { 
			?>		<a href="" onclick="toggleMenu(); return false;" class="menu-toggle before-content"><?php echo $menu_link_text; ?></a>
<?php
		} ?>
	<?php while ( have_posts() ) : the_post(); global $post; ?>
		<div id="page-<?php the_ID(); ?>" class="nike-page">

			
			<?php if ( empty( $post->post_content) && current_user_can( 'edit_page', get_the_ID() ) ) : ?>
				
			<?php else : ?>

				<?php get_template_part( '_the-content' ); ?>
			<?php endif; ?>
			<?php if($show_app_menu == 'bottom') { 
			?>		<a href="" onclick="toggleMenu(); return false;" class="menu-toggle after-content"><?php echo $menu_link_text; ?></a>
<?php
		} ?>
		</div>
		
		

	<?php endwhile; ?>
<?php get_footer();
?>
<div class="pseudo-footer">
	<?php if(isset($learn_more_links) && !empty($learn_more_links)){ ?>
<div class="learn-more">
	<h3>Learn More</h3>
	<ul class="learn more links">
		<?php foreach ($learn_more_links as $link){
			echo '<li><a href="'.$link['url'].'" target="_blank">'.$link['label'].'</a></li>';
		}?>
	</ul>
</div>
<?php } ?>
</div>
</div>