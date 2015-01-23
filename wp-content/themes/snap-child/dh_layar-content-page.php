<?php
/**
 * Template Name: DungeonHacker Layar Content
 * @package Snap
 */
/* look at header. If this is a layar device, or there is a debugging querystring, set $has_access to true;
otherwise set access to false and redirect user to 'no-access' page.
*/

?>
<?php
session_start();
$user_agent = $_SERVER['HTTP_USER_AGENT'];

if(isset($_SERVER['HTTP_X_LAYAR_OS']) || isset($_GET['spoof']) || LC_ENVIRONMENT == 'development' || is_user_logged_in() == true){
    //this is a layar client
    $layar_client = true;
}
else{
	//disabled for deve, uncomment for production to avoid any traffic except layar client.
  //wp_redirect(home_url());
}

if(isset($_GET['userID'])){
  $user_id = $_GET['userID'];
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
 //The global Javascript variables from the Layar client and WordPress go here
 var playerId = "<?php  echo $user_id; ?>";
 </script>
 <?php 
$intro_fields = get_field('intro_mural_fields');
if(isset($intro_fields) && !empty($intro_fields[0])){
?>
<script type="text/javascript">
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