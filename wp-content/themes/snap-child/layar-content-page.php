<?php
/**
 * Template Name: Layar Content
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
 var pageText = '<?php  echo get_the_content($post->ID); ?>';
 </script>
<?php
          if(function_exists('edge_suite_view')){
            echo '<div class="large-10 large-offset-1 columns centered">';
            echo edge_suite_view();
			echo '</div>';
          }
          
          	the_content();
          
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