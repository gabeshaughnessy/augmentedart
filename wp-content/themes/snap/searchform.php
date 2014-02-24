<?php
/**
 * @package Snap
 */
?>
<form method="get" role="search" action="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php esc_attr_e( 'Type and press Enter to search', 'snap' ); ?>">
	<input type="text" id="s" name="s" size="25" placeholder="<?php esc_attr_e( 'Search site&hellip;', 'snap' ); ?>" />
</form>