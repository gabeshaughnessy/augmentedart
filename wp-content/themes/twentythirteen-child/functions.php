<?php

function hide_admin_bar() {
	if (is_page_template('templates/layar-page.php')) {
		return false;
	}
}
add_filter( 'show_admin_bar', 'hide_admin_bar' );

?>