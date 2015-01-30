<?php
/**
 * Template Name: Dungeon Hacker Player Card
 * @package Snap
 */

$noheader = true;

//DUNGEON HACKER SCRIPTS
function enqueue_dh_scripts(){
	wp_enqueue_script('firebase', 'https://cdn.firebase.com/js/client/2.1.1/firebase.js', array(), '', false);
	wp_enqueue_script('dh-app', '/dungeon-hacker/edge-animations/js/app.js', array('jquery'), '', false);
}
add_action('wp_enqueue_scripts', 'enqueue_dh_scripts');

function dh_meta_tags(){

	add_filter( 'jetpack_enable_open_graph', '__return_false' );

	echo '<meta name="description" content="Hack and Slash in Augmented Reality at the Diode Gallery.">';
}
add_action('wp_head', 'dh_meta_tags');

get_header(); 
?>
<script type="text/javascript">
jQuery(document).ready(function($){

	player.syncData();
    player.getPlayerClass();
   

   console.log(player);
});
</script>
<div role="main" class="main-container">
	<div class="pseudo-header">
		
		<div class="header-wrapper">
			<div class="img-wrapper left">
				<img src="/dungeon-hacker/edge-animations/images/logo.png" width="100%"/>
			</div>
		</div>
		
	</div>

	<div class="theme-container frame has-sidebar">

		<?php while ( have_posts() ) : the_post(); global $post; ?>
			<div id="page-<?php the_ID(); ?>" class="dh-page">
				<h1 id="player-title">Player Title</h1>
				<div id="description" class="section">Player Description</div>
				<div id="player-image" class="section"><img src="/dungeon-hacker/edge-animations/images/player-img-default.png" alt="" width="100%" height="auto" /></div>
				<h4>Attributes:</h4>
				<div id="player-attributes" class="section"></div>
				<h4>Inventory:</h4>
				<div id="inventory" class="section"></div>
				<h4>Crypto-Credits:</h4>
				<div id="crypto-credits" class="section"></div>
				<h4>Monsters Defeated:</h4>
				<div id="monsters-defeated" class="section"></div>

				<h4>Share your Player Card on the Interwebs:</h4>
				<div id="sharing" class="section">
					<?php 
					$tweetMessage = urlencode('Check out my sweet Dungeon Hacker Player Card:');
					$tweetUrl = urlencode("http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]");
					?>
				<h5>Tweet Your Feats</h3>
					<p>Your bravery should not go unnoticed.</p>
				<p><a href="https://twitter.com/intent/tweet?text=<?php echo  $tweetMessage; ?>&url=<?php echo $tweetUrl; ?>" target="_blank" >Share your Player Card on Twitter</a></p>
				<p>and/or</p>
				<p><a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $tweetUrl; ?>" target="_blank" >Post your Player Card to the Book of Faces</a></p>

				</div>

				
				<?php if ( empty( $post->post_content) && current_user_can( 'edit_page', get_the_ID() ) ) : ?>
					
				<?php else : ?>

					<?php get_template_part( '_the-content' ); ?>

				<?php endif; ?>
			</div>
		<?php endwhile;?>
		
		<?php get_footer();?>
	</div>