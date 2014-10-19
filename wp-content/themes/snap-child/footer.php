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

<!-- Google Tag Manager -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-P2GK66"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P2GK66');</script>
<!-- End Google Tag Manager -->
</body>
</html>