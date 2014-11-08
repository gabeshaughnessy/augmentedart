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

if(isset($_COOKIE['LayarUserId'])){
  $user_id = $_COOKIE['LayarUserId'];
}
else {
  $user_id = 'test_user_id'.rand(1, 100);
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
 alert('<?php  echo $user_id; ?>');
 var userID = "<?php  echo $user_id; ?>";
 var pageText = "<?php  echo get_the_content($post->ID); ?>";
 var appName = "<?php  echo get_field('app_name', $post->ID); ?>";
 var msgPt1 = "<?php  echo get_field('message_pt_1', $post->ID); ?>";
 var msgPt2 = "<?php  echo get_field('message_pt_2', $post->ID); ?>";
  var msgPt3 = "<?php  echo get_field('message_pt_3', $post->ID); ?>";
  <?php 
    $orb_urls = get_field('orb_urls');
    if(isset($orb_urls) && !empty($orb_urls[0])){
      $i = 1;
       foreach($orb_urls as $orb) {
        ?>
        var orb<?php  echo $i; ?>URL = "<?php echo $orb['url']; ?>";

        <?php
        $i ++;
      }
    }

  ?>
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
<!-- GA Tracking -->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-55894751-1', 'auto');
  ga('send', 'pageview');

</script><!-- end GA TRACKING -->