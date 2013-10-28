<?php
/*
Plugin Name: WSA Favicon
Plugin URI: http://wordpress.org/extend/plugins/wsa-favicon/
Description: Easily upload your favicon and convert regular images to favicons
Version: 1.0
Author: WebStartAvenue
Author URI: http://webstartavenue.com

Copyright 2012 WebStartAvenue (email: contact@webstartavenue.com)

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License, version 3, as 
published by the Free Software Foundation.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

*/

define( 'WSAF_PLUGIN_NAME', 'WSA Favicon' );
define( 'WSAF_CONTACT_EMAIL', 'contact@webstartavenue.com' );
define( 'WSAF_OPTION_PAGE', 'wsa-favicon' );
define( 'WSAF_OPTION_SECTION', 'wsaf_option_section' );
define( 'WSAF_OPTION_GROUP', 'wsaf_option_group' );
define( 'WSAF_OPTION_FAVICON_FILE', 'wsaf_option-favicon_file' );
define( 'WSAF_OPTION_FAVICON_URL', 'wsaf_option-favicon_url' );
define( 'WSAF_OPTION_FAVICON_ORIGINAL_FILE', 'wsaf_option-favicon_original_file' );
define( 'WSAF_OPTION_FAVICON_ORIGINAL_URL', 'wsaf_option-favicon_original_url' );
define( 'WSAF_OPTION_TOUCH_FILE', 'wsaf_option-touch_file' );
define( 'WSAF_OPTION_TOUCH_URL', 'wsaf_option-touch_url' );
define( 'WSAF_OPTION_TOUCH_ORIGINAL_FILE', 'wsaf_option-touch_original_file' );
define( 'WSAF_OPTION_TOUCH_ORIGINAL_URL', 'wsaf_option-touch_original_url' );

add_action( 'admin_menu', 'wsaf_admin_menu' );
function wsaf_admin_menu() {
	add_options_page( 'Favicon', 'Favicon', 'manage_options', WSAF_OPTION_PAGE, 'wsaf_add_options_page_favicon' );
}

add_action( 'admin_init', 'wsaf_register_settings' );
function wsaf_register_settings() { //WSAF_OPTION_FAVICON_URL
	register_setting( WSAF_OPTION_GROUP, WSAF_OPTION_GROUP, 'wsaf_sanitize_option_favicon_url' );
	add_settings_section(
		WSAF_OPTION_SECTION,
		'Upload your favicon in PNG, JPG, or GIF format',
		'wsaf_settings_section_display',
		WSAF_OPTION_PAGE
	);
	add_settings_field(
		WSAF_OPTION_FAVICON_URL,
		'Upload the default Favicon',
		'wsaf_settings_field_display',
		WSAF_OPTION_PAGE,
		WSAF_OPTION_SECTION
	);
	add_settings_field(
		WSAF_OPTION_TOUCH_URL,
		'Upload an iPad, iPhone, or iPod Touch Icon',
		'wsaf_settings_field_display_touch',
		WSAF_OPTION_PAGE,
		WSAF_OPTION_SECTION
	);
}
function wsaf_settings_section_display() { ?>
<p style="padding:0px 7px 0px 7px;">
	<ul style="list-style: disc; margin-left: 40px;">
		<li>Upload an image file to use as your favicon. Acceptable image types are PNG, JPG, GIF, and ICO.</li>
		<li>All images will be converted to ICO, resized, and compressed as needed.</li>
		<?php if (!wsaf_has_imagick()): ?>
		<li style="color:red;">
			WARNING: Currently your web server does not have Imagick installed. This will prevent WSA Favicon from
			creating ICO files with support for multiple resolutions or transparency. Please ask your web hosting
			provider for instructions on how to install <a href="http://php.net/manual/en/book.imagick.php" target="_blank">Imagick</a>.
		</li>
		<?php else: ?>
		<li>ICO files will contain multiple resolutions for all devices.</li>
		<li>Transparency will be maintained for GIF and PNG files.</li>
		<?php endif; ?>
	</ul>
</p>
<?php }
function wsaf_sanitize_option_favicon_url($value) {
	$options = get_option( WSAF_OPTION_GROUP, array() );
	
	if ( isset( $_FILES['file-' . WSAF_OPTION_FAVICON_URL] ) && $_FILES['file-' . WSAF_OPTION_FAVICON_URL]['error'] == 0 ) {
		$file = $_FILES['file-' . WSAF_OPTION_FAVICON_URL];
		$uploaded = wp_handle_upload( $file, array( 'test_form' => false, 'test_upload' => false ) );
		$ext = pathinfo( $uploaded['file'], PATHINFO_EXTENSION );
		
		if ( !empty( $uploaded['error'] ) ) {
			// TODO: Handle upload error?
		} else if ( $ext == 'ico' ) {
			$options = array_merge( $options, array(
				WSAF_OPTION_FAVICON_FILE => $uploaded['file'],
				WSAF_OPTION_FAVICON_URL => $uploaded['url'],
				WSAF_OPTION_FAVICON_ORIGINAL_FILE => $uploaded['file'],
				WSAF_OPTION_FAVICON_ORIGINAL_URL => $uploaded['url'],
			) );
		} else {
			$favicon_file = wsaf_resize_and_convert_to_ico( $uploaded['file'], 16, 16, true );
			$favicon_url = substr( $uploaded['url'], 0, strrpos( $uploaded['url'], '.' ) + 1 ) . 'ico';
			$options = array_merge( $options, array(
				WSAF_OPTION_FAVICON_FILE => $favicon_file,
				WSAF_OPTION_FAVICON_URL => $favicon_url,
				WSAF_OPTION_FAVICON_ORIGINAL_FILE => $uploaded['file'],
				WSAF_OPTION_FAVICON_ORIGINAL_URL => $uploaded['url'],
			) );
		}
	}
	
	if ( isset( $_FILES['file-' . WSAF_OPTION_TOUCH_URL] ) && $_FILES['file-' . WSAF_OPTION_TOUCH_URL]['error'] == 0 ) {
		$file = $_FILES['file-' . WSAF_OPTION_TOUCH_URL];
		$uploaded = wp_handle_upload( $file, array( 'test_form' => false, 'test_upload' => false ) );
		
		if ( !empty( $uploaded['error'] ) ) {
			// TODO: Handle upload error?
			print_r($uploaded['error']);
		} else {
			$touch_file = wsaf_resize_and_convert_to_png( $uploaded['file'], 114, 114, true );
			$touch_url = substr( $uploaded['url'], 0, strrpos( $uploaded['url'], '.' ) + 1 ) . 'png';
			$options = array_merge( $options, array(
				WSAF_OPTION_TOUCH_FILE => $touch_file,
				WSAF_OPTION_TOUCH_URL => $touch_url,
				WSAF_OPTION_TOUCH_ORIGINAL_FILE => $uploaded['file'],
				WSAF_OPTION_TOUCH_ORIGINAL_URL => $uploaded['url'],
			) );
		}
	}
	
	return $options;
}

function wsaf_settings_field_display() {
	$options = get_option( WSAF_OPTION_GROUP );
?>
<input id="<?php echo WSAF_OPTION_FAVICON_URL; ?>" name="<?php echo WSAF_OPTION_GROUP; ?>[<?php echo WSAF_OPTION_FAVICON_URL; ?>]" size="40" type="text" value="<?php echo $options[WSAF_OPTION_FAVICON_URL]; ?>" disabled="disabled" />
<div style="display:inline-block; position:relative;">
	<input id="file-<?php echo WSAF_OPTION_FAVICON_URL; ?>" name="file-<?php echo WSAF_OPTION_FAVICON_URL; ?>" size="40" type="file" style="position:absolute; top:0; left:0; opacity:0; -moz-opacity:0; width:120px; filter:alpha(opacity: 0); z-index:2; cursor:pointer;" />
	<input type="button" value="Upload Favicon" class="button" id="wsaf_btn_upload" />
</div>
<?php if (!empty($options[WSAF_OPTION_FAVICON_URL])): ?>
<div style="display:inline-block; width:16px; height:12px; line-height:23px;">
	<img src="<?php echo $options[WSAF_OPTION_FAVICON_ORIGINAL_URL]; ?>" width="16" height="16" alt="Favicon" />
</div>
<?php endif; ?>
<br />
Recommend dimensions: 128px by 128px;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Recommended format: PNG
<?php
}

function wsaf_settings_field_display_touch() {
	$options = get_option( WSAF_OPTION_GROUP );
?>
<input id="<?php echo WSAF_OPTION_TOUCH_URL; ?>" name="<?php echo WSAF_OPTION_GROUP; ?>[<?php echo WSAF_OPTION_TOUCH_URL; ?>]" size="40" type="text" value="<?php echo $options[WSAF_OPTION_TOUCH_URL]; ?>" disabled="disabled" />
<div style="display:inline-block; position:relative;">
	<input id="file-<?php echo WSAF_OPTION_TOUCH_URL; ?>" name="file-<?php echo WSAF_OPTION_TOUCH_URL; ?>" size="40" type="file" style="position:absolute; top:0; left:0; opacity:0; -moz-opacity:0; width:120px; filter:alpha(opacity: 0); z-index:2; cursor:pointer;" />
	<input type="button" value="Upload touch Icon" class="button" id="wsaf_btn_upload_touch" />
</div>
<?php if (!empty($options[WSAF_OPTION_TOUCH_URL])): ?>
<div style="display:inline-block; width:57px; height:20px; line-height:23px; overflow:visible;">
	<img src="<?php echo $options[WSAF_OPTION_TOUCH_URL]; ?>" width="57" height="57" alt="Apple Touch Icon" />
</div>
<?php endif; ?>
<br />
Recommend dimensions: 114px by 114px;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Recommend format: PNG
<?php
}

function wsaf_add_options_page_favicon() {
?>
<div class="wrap">
	<h2>WSA Favicon</h2>
	<div class="metabox-holder has-right-sidebar">
		<div class="inner-sidebar">
			<div class="postbox" style="display:block;">
				<h3 style="cursor:default;"><span>Donate</span></h3>
				<div class="inside" style="margin:0;padding:0;">
					<div id="minor-publishing-actions">
						<p style="text-align:left;">
							If you would like to contribute to the on going development of WSA plugins...
						</p>
					</div>
					<div id="misc-publishing-actions" style="padding-bottom:0px; display:none;">
						<div class="misc-pub-section">
							<label for="post_status">Amount to Donate:</label>
							<select name="post_status" id="post_status" tabindex="4">
								<option value="1.00">$1.00 USD</option>
								<option value="5.00">$5.00 USD</option>
								<option value="10.00" selected="selected">$10.00 USD</option>
								<option value="20.00">$20.00 USD</option>
								<option value="30.00">$30.00 USD</option>
								<option value="40.00">$40.00 USD</option>
								<option value="50.00">$50.00 USD</option>
								<option value="60.00">$60.00 USD</option>
								<option value="70.00">$70.00 USD</option>
								<option value="80.00">$80.00 USD</option>
								<option value="90.00">$90.00 USD</option>
								<option value="100.00">$100.00 USD</option>
							</select>
						</div>
					</div>
					<div id="major-publishing-actions">
						<div id="publishing-action">							
<form action="https://www.paypal.com/cgi-bin/webscr" method="post">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
">
<input type="submit" name="publish" id="publish" class="button-primary" value="Donate" tabindex="1" accesskey="d">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>
							
						</div>
						<div class="clear"></div>
					</div>
				</div>
			</div>
			
			<div class="postbox" style="display:block;">
				<h3 style="cursor:default;"><span>Suggestions, Comments, Bugs?</span></h3>
				<div class="inside" style="margin:0;padding:0;">
					<form method="post" action="<?php echo admin_url( 'admin-ajax.php' ); ?>" id="form-comments">
						<div id="minor-publishing-actions">
							<p style="text-align:left;">
								If you have found any issues with this WSA plugin or would like to make a suggestion please fill out the form
								below. We'd love to hear your feedback.
							</p>
						</div>
						<div id="misc-publishing-actions" style="padding-bottom:0px; padding-top:0px;">
							<div id="target-comments"></div>
							<div class="misc-pub-section" style="border-top: none;">
								<label for="post_status">Suggestions, Comments, or Bugs:</label>
								<div>
									<textarea name="comments" id="comments" rows="5" cols="33"></textarea>
								</div>
							</div>
						</div>
						<div id="major-publishing-actions">
							<div id="publishing-action">
								<img src="<?php echo site_url( 'wp-admin/images/wpspin_light.gif' ); ?>" class="ajax-loading" id="ajax-loading" alt="" style="visibility: hidden;" />
								<input name="action" type="hidden" id="action-send" value="wsaf_send_comments" />
								<input type="submit" name="publish" id="publish" class="button-primary" value="Send" tabindex="3" accesskey="s">
							</div>
							<div class="clear"></div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<div id="post-body">
			<div id="post-body-content">
				<form method="post" action="options.php" enctype="multipart/form-data">
					<?php
						settings_fields( WSAF_OPTION_GROUP );
						do_settings_sections( WSAF_OPTION_PAGE );
					?>
					<p class="submit"><input type="submit" class="button-primary" value="<?php _e('Save Changes') ?>" /></p>
				</form>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript">
jQuery(document).ready(function($) {
	$('#file-<?php echo WSAF_OPTION_FAVICON_URL; ?>').change(function() {
		$('#<?php echo WSAF_OPTION_FAVICON_URL; ?>').val($(this).val().replace('C:\\fakepath\\', ''));
	});
	$('#file-<?php echo WSAF_OPTION_TOUCH_URL; ?>').change(function() {
		$('#<?php echo WSAF_OPTION_TOUCH_URL; ?>').val($(this).val().replace('C:\\fakepath\\', ''));
	});
	
	
	$('#form-comments').ajaxForm({
		target: '#target-comments'
	}); 
});
</script>
<?php
}

add_action( 'wp_head', 'wsaf_wp_head_favicon' );
add_action( 'add_action', 'wsaf_wp_head_favicon' );
function wsaf_wp_head_favicon() {
	$options = get_option( WSAF_OPTION_GROUP );
	if ( !empty( $options[WSAF_OPTION_FAVICON_URL] ) ) {
		echo sprintf(
			'<link rel="shortcut icon" href="%s" />',
			$options[WSAF_OPTION_FAVICON_URL]
		);
	}
	if ( !empty( $options[WSAF_OPTION_TOUCH_URL] ) ) {
		echo sprintf(
			'<link rel="apple-touch-icon" href="%s" />',
			$options[WSAF_OPTION_TOUCH_URL]
		);
	}
}

function wsaf_resize_and_convert_to_ico( $file, $max_w, $max_h, $crop = false, $dest_path = null ) {
	$info = pathinfo($file);
	$dir = $info['dirname'];
	$ext = 'ico';
	$name = wp_basename($file, ".$ext");
	$name = substr( $name, 0, strrpos( $name, '.' ) );
	
	if ( !is_null($dest_path) and $_dest_path = realpath($dest_path) )
	    $dir = $_dest_path;
	$destfilename = "{$dir}/{$name}.{$ext}";
	
	// Try to use Imagick, otherwise fallback to BMP
	if (wsaf_has_imagick()) {
		$image = new Imagick( $file );
		$geometry = $image->getImageGeometry();
		if ( 128 / $geometry['width'] * $geometry['height'] > 128 ) {
			$image->scaleImage( 128, 0 );
		} else {
			$image->scaleImage( 0, 128 );
		}
		$image->cropImage( 128, 128, 0, 0 );
	
		$icon = new Imagick();
		$icon->setFormat( 'ico' );
		foreach( array( 128, 64, 32, 16  ) as $dimension ) {
			$imagick = $image->clone();
			$imagick->scaleImage( $dimension, 0 );
			$icon->addImage( $imagick );
		}
		$icon->writeImages( $destfilename, true );
		
		$icon->destroy();
		$image->destroy();
		$imagick->destroy();
	} else {
		require_once( plugin_dir_path(__FILE__) . '/vendor/BMP_v2/BMP.php' );

		$image = wp_load_image( $file );
		if ( !is_resource( $image ) )
			return new WP_Error( 'error_loading_image', $image, $file );
	
	    $size = @getimagesize( $file );
	    if ( !$size )
			return new WP_Error('invalid_image', __('Could not read image size'), $file);
	    list($orig_w, $orig_h, $orig_type) = $size;
		
		$dims = image_resize_dimensions($orig_w, $orig_h, $max_w, $max_h, $crop);
		if ( !$dims )
			return new WP_Error( 'error_getting_dimensions', __('Could not calculate resized image dimensions') );
		list($dst_x, $dst_y, $src_x, $src_y, $dst_w, $dst_h, $src_w, $src_h) = $dims;
		
	    $newimage = wp_imagecreatetruecolor( $dst_w, $dst_h );
		
	    imagecopyresampled( $newimage, $image, $dst_x, $dst_y, $src_x, $src_y, $dst_w, $dst_h, $src_w, $src_h);
		
		// convert from full colors to index colors, like original PNG.
		if ( IMAGETYPE_PNG == $orig_type && function_exists('imageistruecolor') && !imageistruecolor( $image ) )
			imagetruecolortopalette( $newimage, false, imagecolorstotal( $image ) );
		
	    // we don't need the original in memory anymore
	    imagedestroy( $image );
	
		if ( !Bmp::imagebmp( $newimage, $destfilename ) )
     	   return new WP_Error('resize_path_invalid', __( 'Resize path invalid' ));
		
		imagedestroy( $newimage );
	}
	
    // Set correct file permissions
    $stat = stat( dirname( $destfilename ));
    $perms = $stat['mode'] & 0000666; //same permissions as parent folder, strip off the executable bits
	@ chmod( $destfilename, $perms );
	
    return $destfilename;
}

function wsaf_resize_and_convert_to_png( $file, $max_w, $max_h, $crop = true, $dest_path = null ) {
	$square = 114;

	$image = wp_load_image( $file );
	if ( !is_resource( $image ) )
		return new WP_Error( 'error_loading_image', $image, $file );

    $size = @getimagesize( $file );
    if ( !$size )
		return new WP_Error('invalid_image', __('Could not read image size'), $file);
    list($orig_w, $orig_h, $orig_type) = $size;
	
	$dims = image_resize_dimensions($orig_w, $orig_h, $max_w, $max_h, $crop);
	if ( !$dims )
		return new WP_Error( 'error_getting_dimensions', __('Could not calculate resized image dimensions') );
	//print_r($dims);
	list($dst_x, $dst_y, $src_x, $src_y, $dst_w, $dst_h, $src_w, $src_h) = $dims;
	$dst_w = $max_w; $dst_h = $max_h;
	//$src_w = $max_w; $src_h = $max_h;
	
    $newimage = wp_imagecreatetruecolor( $dst_w, $dst_h );
	
    imagecopyresampled( $newimage, $image, $dst_x, $dst_y, $src_x, $src_y, $dst_w, $dst_h, $src_w, $src_h);
	
	// convert from full colors to index colors, like original PNG.
	if ( IMAGETYPE_PNG == $orig_type && function_exists('imageistruecolor') && !imageistruecolor( $image ) )
		imagetruecolortopalette( $newimage, false, imagecolorstotal( $image ) );
	
    // we don't need the original in memory anymore
    imagedestroy( $image );
    
    $info = pathinfo($file);
	$dir = $info['dirname'];
	$ext = 'png';
	$name = wp_basename($file, ".$ext");
	$name = substr( $name, 0, strrpos( $name, '.' ) );
	
	if ( !is_null($dest_path) and $_dest_path = realpath($dest_path) )
	    $dir = $_dest_path;
	$destfilename = "{$dir}/{$name}.{$ext}";
	
	if ( !imagepng( $newimage, $destfilename ) )
 	   return new WP_Error('resize_path_invalid', __( 'Resize path invalid' ));
	
	imagedestroy( $newimage );
	
	// Set correct file permissions
	$stat = stat( dirname( $destfilename ));
    $perms = $stat['mode'] & 0000666; //same permissions as parent folder, strip off the executable bits
	@ chmod( $destfilename, $perms );
	
    return $destfilename;
}

add_action( 'admin_enqueue_scripts', 'wsaf_admin_enqueue_scripts' );
function wsaf_admin_enqueue_scripts() {
	wp_enqueue_script( 'jquery-form' );
}

add_action( 'wp_ajax_wsaf_send_comments', 'wp_ajax_wsaf_send_comments' );
function wp_ajax_wsaf_send_comments() {
	global $current_user;
	wp_mail(
		WSAF_CONTACT_EMAIL,
		'[WSAF_PLUGIN_NAME] Comments - ' . site_url(),
		trim($_POST['comments']),
		'From: ' . $current_user->user_identity . ' <' . $current_user->user_email . '>' . "\r\n"
	);
	
	echo '<div class="updated" style="width:80%;margin:0 auto;"><p>Message Sent!</p></div>';
	exit;
}

function wsaf_has_imagick() {
	return class_exists('Imagick');
}
