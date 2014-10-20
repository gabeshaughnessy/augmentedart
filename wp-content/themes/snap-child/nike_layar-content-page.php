<?php
/**
 * Template Name: Nike Layar Content
 * @package Snap
 */
/* look at header. If this is a layar device, or there is a debugging querystring, set $has_access to true;
otherwise set access to false and redirect user to 'no-access' page.
*/

?>
<?php

$user_agent = $_SERVER['HTTP_USER_AGENT'];
error_log('$_REQUEST: '.print_r($_REQUEST, true));
if(isset($_SERVER['HTTP_X_LAYAR_OS']) || isset($_GET['spoof']) || LC_ENVIRONMENT == 'development' || is_user_logged_in() == true){
    //this is a layar client
    $layar_client = true;
}
else{
	wp_redirect(home_url());
}
remove_action( 'init', 'wp_admin_bar_init' );

 get_header();
 global $post; 
 ?>
 <style type="text/css">
 html{
 	margin-top: 0 !important;
 }
 p{
 	margin:0;
 }
 </style>

<?php while ( have_posts() ) : the_post(); ?>
 <script type="text/javascript">
 var pageText = "<?php  echo get_the_content($post->ID); ?>";
 var appName = "<?php  echo get_field('app_name', $post->ID); ?>";
 var msgPt1 = "<?php  echo get_field('message_pt_1', $post->ID); ?>";
 var msgPt2 = "<?php  echo get_field('message_pt_2', $post->ID); ?>";
  var msgPt3 = "<?php  echo get_field('message_pt_3', $post->ID); ?>";
 </script>
 <?php 
$intro_fields = get_field('intro_mural_fields');
if(isset($intro_fields) && !empty($intro_fields[0])){
?>
<script type="text/javascript">
var introMessages = new Array();
<?php  foreach($intro_fields as $intro_message){ ?>
	 var message = {
		pt1 : "<?php  echo $intro_message['message_pt_1']; ?>",
		pt2 : "<?php  echo $intro_message['message_pt_2']; ?>",
		pt3 : "<?php  echo $intro_message['message_pt_3']; ?>",
		};
	introMessages[introMessages.length] = message;
 <?php } ?>
 </script>
<?php }
 ?>
<?php
  if(function_exists('edge_suite_view')){
    echo '<div class="large-10 large-offset-1 columns centered">';
    echo edge_suite_view();
	echo '</div>';
  }
  
   ?>
<?php endwhile; ?>
<!-- Google Tag Manager -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-P2GK66"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P2GK66');</script>
<!-- End Google Tag Manager -->