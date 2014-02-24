<?php
/**
 * @package Snap
 */
?>
<aside role="complementary" id="sidebar">
	<?php if ( is_active_sidebar( 'snap-sidebar' ) ) : ?>
		<?php dynamic_sidebar( 'snap-sidebar' ); ?>
	<?php elseif ( current_user_can( 'edit_theme_options' ) ) : ?>
		<div class="widget placeholder-text">
			<p>
				<?php
					printf(
						__(
							'<strong>Admin:</strong> Oh snap! It looks like you haven\'t added any <a href="%1$s" title="WordPress Widgets">Widgets</a>. Head over to the <a href="%2$s">Widgets admin page</a> to add Widgets.',
							'snap'
						),
						'http://codex.wordpress.org/WordPress_Widgets',
						esc_url( admin_url( 'widgets.php' ) )
					);
				?>
			</p>
		</div>
	<?php endif; ?>
</aside>