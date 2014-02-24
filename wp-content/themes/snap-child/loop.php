<?php
/**
 * @package Snap
 */
?>
<?php if ( have_posts() ) : ?>
	<div class="blog-wrapper" id="content">
		<?php while ( have_posts() ) : the_post(); ?>
			<?php 
				if(is_category('profile')){
					get_template_part('_profile-content'  );
				}
				else if(is_category('press')){
					get_template_part('_press-content'  );
				}
				else{
					get_template_part( '_post-content' );
				}
	 ?>
		<?php endwhile; ?>
	</div>

	<?php $prev = get_previous_posts_link( __( 'Newer posts', 'snap' ) ); ?>
	<?php $next = get_next_posts_link( __( 'Older posts', 'snap' ) ); ?>

	<?php if ( ( ! empty( $prev ) || ! empty( $next ) ) ) : ?>
		<nav class="pagination post-footer">
			<?php if ( ! empty( $prev ) ) : ?>
				<div>
					<?php echo $prev; ?>
				</div>
			<?php endif; ?>
			<?php if ( ! empty( $next ) ) : ?>
				<div>
					<?php echo $next; ?>
				</div>
			<?php endif; ?>
		</nav>
	<?php endif; ?>

<?php else : ?>
	<div class="placeholder-text">
		<p>
			<?php
				printf(
					__(
						'<strong>Admin:</strong> Oh snap! It looks like you haven\'t added any posts yet. <a href="%s" title="Add post">Add your first post</a> now!',
						'snap'
					),
					esc_url( admin_url( 'post-new.php' ) )
				);
			?>
		</p>
	</div>
<?php endif;