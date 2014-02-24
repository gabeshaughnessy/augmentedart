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

		<p id="theme-byline">
			<a title="<?php esc_attr_e( 'Theme info', 'snap' ); ?>" href="http://thethemefoundry.com/wordpress/snap/">Snap theme</a> <span><?php _e( 'by', 'snap' ); ?></span> <a title="<?php esc_attr_e( 'The Theme Foundry home page', 'snap' ); ?>" href="http://thethemefoundry.com/">The Theme Foundry</a>
		</p>
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
</body>
</html>