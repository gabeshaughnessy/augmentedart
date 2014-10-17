<?php
/**
 * Template Name: Nike Layar Content
 * @package Snap
 */
?>
<?php
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