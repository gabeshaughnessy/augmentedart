<?php
/**
 * Template Name: Travel Portland Fact Page
 * @package Snap
 */

$noheader = true;

$tweetMessage = urlencode('I learned a fun fact about Portland!');
global $tweetUrl, $facebookUrl;

$tweetUrl = urlencode("http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]");
$facebookUrl = 'https://www.facebook.com/sharer/sharer.php?'.'u='.$tweetUrl;


$fact = get_field('fact');
$fact_comparison = get_field('fact_comparison');
$fact_image = get_field('fact_image');
function tp_meta_tags(){
global $fact;
	

	echo '<meta name="description" content="'.$fact.'">
	<meta property="og:type" content="article">
	<meta property="og:title" content="Travel Portland - Facts about Portland">
	<meta property="og:site_name" content="Travel Portland">
	<meta property="og:url" content="'.get_permalink().'"/>
	<meta property="og:description" content="'.$fact.'">
	<meta property="og:image" content="http://www.augmentedart.com/wp-content/uploads/2015/02/TP_Illustration_social.jpg">
	<meta name="twitter:image" content="http://www.augmentedart.com/wp-content/uploads/2015/02/TP_Illustration_social.jpg">
	<meta name="twitter:card" content="summary">
	<meta name="twitter:site" content="@jetpack">';

}
add_filter( 'jetpack_enable_open_graph', '__return_false' );
if( function_exists( 'rel_canonical' ) )
{
    remove_action( 'wp_head', 'rel_canonical' );
}
add_action('wp_head', 'tp_meta_tags');
add_action('wp_head', 'tp_fonts');
function tp_fonts(){
	echo '<link type="text/css" rel="stylesheet" href="http://fast.fonts.net/cssapi/02e06e5f-bbc5-440f-98a0-ae5568ccea3b.css"/>';
	//wp_enqueue_script('tp-fonts', 'http://fast.fonts.net/jsapi/02e06e5f-bbc5-440f-98a0-ae5568ccea3b.js', array(), false);
}
//add_action('wp_enqueue_scripts', 'tp_fonts');


get_header(); 
?>
<div role="main" class="main-container">
	<div class="pseudo-header">
		<div class="header-wrapper">
			<div class="img-wrapper left">
			</div>
		</div>
		
	</div>

	<div class="theme-container frame">

		<?php while ( have_posts() ) : the_post(); global $post; ?>
		<?php 
			if(isset($fact_image) && !empty($fact_image)){
				echo '<div class="header-image-wrapper"><div class="header-image" data-src="'.$fact_image['url'].'"></div></div>';
			}
		?>
			<div id="page-<?php the_ID(); ?>" class="tp-page">
				<h2 class="did-you-know">Did You Know?</h2>
				<?php if(isset($fact) && !empty($fact)){
					echo '<p class="fact">'.$fact.'</p>';
				}
				if(isset($fact_comparison) && !empty($fact_comparison)){
					echo '<p class="fact-comparison">'.$fact_comparison.'</p>';
				}
				?>
				<a target="_blank" href="http://www.travelportland.com/" class="logo-wrapper"><img class="logo" src="<?php bloginfo('stylesheet_directory'); ?>/travel-portland/tp_logo.svg" width="50%" height="auto" alt="Travel Portland" /></a>
				
				<?php if ( empty( $post->post_content) && current_user_can( 'edit_page', get_the_ID() ) ) : ?>
					
				<?php else : ?>

					<?php get_template_part( '_the-content' ); ?>

				<?php endif; ?>
				
			</div>
			<div class="sharing-wrapper">
					<h3 class="sharing-title">Share This Fun Fact</h3>
					<a class="share-item" target="_blank" href="<?php echo $facebookUrl; ?>">
						<img class="share-icon" src="<?php bloginfo('stylesheet_directory'); ?>/travel-portland/facebook.png" width="60px" height="auto" alt="facebook share icon" />
						<p>Share on Facebook</p>
					</a>
					<a class="share-item" target="_blank" href="https://twitter.com/intent/tweet?text=<?php echo  $tweetMessage; ?>&url=<?php echo $tweetUrl; ?>">
						<img class="share-icon" src="<?php bloginfo('stylesheet_directory'); ?>/travel-portland/twitter.png" width="60px" height="auto" alt="twitter share icon" />
						<p>Post to Twitter</p>
					</a>
				</div>
		<?php endwhile;?>
		
		<?php get_footer();?>
	</div>
	<script>
	jQuery('document').ready(function($){
		$('.header-image-wrapper .header-image').each(function(){
			var imageSrc = $(this).data('src');
			if(typeof imageSrc != 'undefined' && imageSrc.length > 0){
				$(this).css({'background-image': 'url('+imageSrc+')'});

			}
		});
		
		var lastScrollTop = 0;
		$(window).scroll(function(e){	
			
			var currentPosition = $('.header-image-wrapper .header-image').css('background-position-y');


			   if ( $(this).scrollTop() > lastScrollTop){
			       // downscroll code
			      if(Number(currentPosition.substring(0, currentPosition.length - 1)) < 100){
	      			currentPosition =  Number(currentPosition.substring(0, currentPosition.length - 1)) + 1 + '%';
		      		}

			   } else {
			      // upscroll code
			       
		      		 if(Number(currentPosition.substring(0, currentPosition.length - 1)) > 0){
	       			currentPosition =  Number(currentPosition.substring(0, currentPosition.length - 1)) - 1 + '%';
		       		}

			   }
			   lastScrollTop =  $(this).scrollTop();
			$('.header-image-wrapper .header-image').css('background-position-y', currentPosition);

		});
	});//end dom ready

	</script>