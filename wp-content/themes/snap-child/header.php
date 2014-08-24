<?php
/**
 * @package Snap
 */
?>
<!DOCTYPE html>
<!--[if IE 7]>    <html class="no-js IE7 IE" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 8]>    <html class="no-js IE8 IE" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 9]>    <html class="no-js IE9 IE" <?php language_attributes(); ?>> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-js" <?php language_attributes(); ?>> <!--<![endif]-->
<head>
	<title><?php wp_title( '' ); ?></title>
	
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<div id="mobile-toggle">
	<span><?php echo wp_strip_all_tags( snap_get_responsive_nav_options( 'label' ) ); ?></span>
</div>
<?php if(is_page_template('splash-page.php') || is_page_template('layar-content-page.php') || is_page_template('page-center-panel.php')){
	?><div class="splash-content">
<?php	
}
else{ ?>
<div id="main-header" role="banner">
	<div class="frame header-wrapper">
		<nav id="nav">
			<?php
				wp_nav_menu( array(
					'theme_location' => 'primary',
					'container_id'   => 'snap-nav',
					'menu_class'     => 'nav',
					'depth'          => '2'
				) );
			?>
		</nav>
		<div class="logo-wrapper">
			<?php if ( snap_get_logo()->has_logo() ) : ?>
				<a class="snap-custom-logo" title="<?php esc_attr_e( 'Home', 'snap' ); ?>" href="<?php echo esc_url( home_url( '/' ) ); ?>"></a>
			<?php else : ?>
				<h1 class="snap-site-title">
					<a title="<?php esc_attr_e( 'Home', 'snap' ); ?>" href="<?php echo esc_url( home_url( '/' ) ); ?>">
						<?php bloginfo( 'name' ); ?>:
					</a>
				</h1>
			<?php endif; ?>
			<?php if ( get_bloginfo( 'description' ) ) : ?>
				<span class="snap-tagline">
					<?php bloginfo( 'description' ); ?>
				</span>
			<?php endif; ?>
		</div>
	</div>
</div>
<div class="theme-container frame"><?php } ?>