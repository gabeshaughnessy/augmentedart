<?php
/**
 * Template Name: Layar Content
 * @package Snap
 */
?>
<?php
remove_action( 'init', 'wp_admin_bar_init' );
 get_header(); 

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
<?php
          if(function_exists('edge_suite_view')){
            echo '<div class="large-10 large-offset-1 columns centered">';
            echo edge_suite_view();
			echo '</div>';
          }
          
          	the_content();
          
           ?>
<?php endwhile; ?>