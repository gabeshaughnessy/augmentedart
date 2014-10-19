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
<!-- Google Tag Manager -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-P2GK66"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P2GK66');</script>
<!-- End Google Tag Manager -->