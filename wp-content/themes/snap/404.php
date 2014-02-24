<?php
/**
 * @package Snap
 */
?>
<?php get_header(); ?>
<div class="frame">
	<h1><?php _e( '404: Page Not Found', 'snap' ); ?></h1>
	<p>
		<?php
			printf(
				__(
					'We are terribly sorry, but the %1$s you typed no longer exists. It might have been moved or deleted. Try searching the site:',
					'snap'
				)
				,
				sprintf(
					'<abbr title="%1$s">%2$s</abbr>',
					esc_attr__( 'Uniform resource locator (Web address)', 'snap' ),
					__( 'URL', 'snap' )
				)
			);
		?>
	</p>
	<?php get_search_form(); ?>
</div>
<?php get_footer();