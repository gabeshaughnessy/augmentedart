<?php
/**
 * @package Snap
 */
?>
<footer role="contentinfo" id="footer" class="post-detail">
	<div class="footer-text-wrapper">
		<?php $footer_text = get_theme_mod( 'footer-text' ); ?>
		<?php if ( ! empty( $footer_text ) ) : ?>
			<p id="credit-line">
				<?php echo wp_kses_data( $footer_text ); ?>
			</p>
		<?php endif; ?>
	</div>

	<?php $social_links = snap_get_social_links(); ?>
	<?php if ( ! empty( $social_links ) ) : ?>
		<ul id="social" class="icons">
			<?php foreach ( $social_links as $service_name => $details ) : ?>
				<?php if ( ! empty( $details['title'] ) && ! empty( $details['url'] ) ) : ?>
					<li>
						<a class="<?php echo esc_attr( $service_name ); ?>" href="<?php echo esc_url( $details['url'] ); ?>" title="<?php echo esc_attr( $details['title'] ); ?>"></a>
					</li>
				<?php endif; ?>
			<?php endforeach; ?>
		</ul>
	<?php endif; ?>
</footer>
</div>
<?php wp_footer(); ?>
<!-- GA Tracking -->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-55894751-1', 'auto');
  ga('send', 'pageview');

</script><!-- end GA TRACKING -->
</body>
</html>