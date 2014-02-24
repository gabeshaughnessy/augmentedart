<?php
/**
 * Template Name: Homepage Template
 * @package Snap
 */
?>
<?php get_header(); ?>
<?php while( have_posts() ) : the_post(); global $post; ?>
	<?php $featured_area = new Snap_Homepage_Featured_Area(); ?>

	<?php if ( 'slider' === $featured_area->display_type_for_current_user ) : ?>
		<?php snap_add_responsive_slides_scripts(); ?>
	<?php endif;?>

	<?php if ( in_array( $featured_area->display_type_for_current_user, array( 'slider', 'image' ) ) ) : ?>
		<?php $slider_post_ids = ( current_user_can( 'edit_theme_options' ) ) ? $featured_area->all_possible_slider_posts : $featured_area->slider_posts_with_post_thumbnails; ?>
		<section class="homepage-featured-area frame">
			<ul class="homepage-featured-area<?php if ( 'slider' === $featured_area->display_type_for_current_user ) : ?> homepage-featured-area-slides<?php endif;?>">
				<?php foreach ( $slider_post_ids as $id ) : ?>
					<li>
						<?php if ( current_user_can( 'edit_theme_options' ) && ! $featured_area->can_image_be_displayed( $id ) ) : // For some reason, the image will not work here. Print a notice to admins about the situation. ?>
							<?php
								$featured_image_link = 'http://en.support.wordpress.com/featured-images/';
								$edit_post_link      = get_edit_post_link( $id );
								$the_title_attribute = get_the_title( $id );
							?>
							<div class="featured-placeholder placeholder-text">
								<p>
									<?php if ( 'no-image' === $featured_area->why_image_cannot_be_displayed( $id ) ) : ?>
										<?php
											printf(
												__(
													'<strong>Admin:</strong> Oh snap! It looks like this post doesn\'t have a <a href="%1$s" title="Writing &amp; Editing, Featured Images">Featured Image</a>. Please add a Featured Image in the <a href="%2$s" title="Edit %3$s">Edit Post</a> screen.',
													'snap'
												),
												esc_url( $featured_image_link ),
												esc_url( $edit_post_link ),
												esc_attr( strip_tags( $the_title_attribute ) )
											);
										?>
									<?php elseif ( 'too-small' === $featured_area->why_image_cannot_be_displayed( $id ) ) : ?>
										<?php
											printf(
												__(
													'<strong>Admin:</strong> Oh snap! It looks like this post is using a <a href="%1$s" title="Writing &amp; Editing, Featured Images">Featured Image</a> that is too small. Please add a Featured Image in the <a href="%2$s" title="Edit %3$s">Edit Post</a> screen that is at least 994px wide.',
													'snap'
												),
												esc_url( $featured_image_link ),
												esc_url( $edit_post_link ),
												esc_attr( strip_tags( $the_title_attribute ) )
											);
										?>
									<?php else : ?>
										<?php
											printf(
												__(
													'<strong>Admin:</strong> Oh snap! It looks like there is an issue adding your post. Please try adding a different <a href="%1$s" title="Writing &amp; Editing, Featured Images">Featured Image</a> in the <a href="%2$s" title="Edit %3$s">Edit Post</a> screen.',
													'snap'
												),
												esc_url( $featured_image_link ),
												esc_url( $edit_post_link ),
												esc_attr( strip_tags( $the_title_attribute ) )
											);
										?>
									<?php endif; ?>
								</p>
							</div>
						<?php else : ?>
							<?php if ( ! $featured_area->post_is_this_page( $id ) ) : ?>
								<a href="<?php echo esc_url( get_permalink( $id ) ); ?>" title="<?php echo esc_attr( strip_tags( get_the_title( $id ) ) ); ?>">
							<?php endif; ?>
							<?php echo get_the_post_thumbnail( $id, 'snap-full-width' ); ?>
							<?php if ( ! $featured_area->post_is_this_page( $id ) ) : ?>
									<?php $button_text =  apply_filters( 'snap_button_text', get_theme_mod( 'button-text', __( 'View Project', 'snap' ) ), $id, get_the_ID() ); ?>
									<?php if ( '' !== $button_text ) : ?>
										<button class="homepage-button"><?php echo esc_html( $button_text ); ?></button>
									<?php endif; ?>
								</a>
							<?php endif; ?>
						<?php endif; ?>
					</li>
				<?php endforeach; ?>
			</ul>
		</section>
	<?php endif; ?>

	<div class="frame">
		<div id="blurb">
			<?php if ( empty( $post->post_content) && current_user_can( 'edit_page', get_the_ID() ) ) : ?>
				<div class="placeholder-text">
					<p>
						<?php
							printf(
								__(
									'<strong>Admin:</strong> Oh snap! It looks like you haven\'t added any content. You can add content in the <a href="%1$s" title="Edit %2$s">Edit Page</a> screen.',
									'snap'
								),
								esc_url( get_edit_post_link() ),
								the_title_attribute( array( 'echo' => false, ) )
							);
						?>
					</p>
				</div>
			<?php else : ?>
				<?php get_template_part( '_the-content' ); ?>
			<?php endif; ?>
		</div>
		<?php $homepage_selected_posts_query = new Snap_Homepage_Selected_Posts( get_the_ID() ); ?>
		<?php $selected_posts = $homepage_selected_posts_query->get_posts(); ?>
		<?php if ( $selected_posts->have_posts() ) : ?>
			<div class="with-sidebar tile homepage-posts-<?php echo esc_attr( $homepage_selected_posts_query->which_posts ); ?>">
				<?php while ( $selected_posts->have_posts() ) : $selected_posts->the_post(); ?>
					<?php get_template_part( '_post-content' ); ?>
				<?php endwhile; wp_reset_postdata(); ?>
			</div>
		<?php elseif ( current_user_can( 'edit_page', get_the_ID() ) ) : ?>
			<div class="with-sidebar placeholder-text">
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
		<?php endif; ?>
	</div>
<?php endwhile; ?>
<?php get_footer();