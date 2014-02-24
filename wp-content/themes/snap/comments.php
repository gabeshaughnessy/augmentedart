<?php
/**
 * @package Snap
 */
?>
<?php if ( post_password_required() ) : ?>
	<?php return; ?>
<?php endif; ?>

<?php if ( have_comments() ) : ?>
	<section id="comments">
		<h3 id="comment-headline"><?php printf( _n( 'One Response to <span>%2$s</span>', '%1$s Responses to <em>%2$s</em>', get_comments_number(), 'snap' ), number_format_i18n( get_comments_number() ), get_the_title() ); ?></h3>

		<ol>
			<?php wp_list_comments( array( 'callback' => 'snap_comment' ) ); ?>
		</ol>

		<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : ?>
			<nav id="comments-nav" class="pagination">
				<div class="comments-previous"><?php previous_comments_link( __( 'Older comments', 'snap' ) ); ?></div>
				<div class="comments-next"><?php next_comments_link( __( 'Newer comments', 'snap' ) ); ?></div>
			</nav>
		<?php endif; ?>

		<?php if ( ! comments_open() && ! is_page() && post_type_supports( get_post_type(), 'comments' ) ) : ?>
			<p class="comments-closed"><em><?php _e( 'Comments are closed.', 'snap' ); ?></em></p>
		<?php endif; ?>
	</section>
<?php endif; ?>

<?php comment_form();