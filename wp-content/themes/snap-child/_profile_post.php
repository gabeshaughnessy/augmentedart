<?php while ( have_posts() ) : the_post(); ?>

		<?php
			global $post;
			$thumbnail_id   = get_post_thumbnail_id();
			$thumb_info     = wp_get_attachment_image_src( $thumbnail_id, 'snap-sidebar' );
			$excerpt        = $post->post_excerpt;
			$has_excerpt    = ( '' !== $excerpt ); // Intentionally check if the user has deliberately set an excerpt
			$has_thumbnail  = ( $thumbnail_id > 0 );
			$sidebar_needed = ( $has_excerpt || $has_thumbnail );
			$has_content    = ( '' !== $post->content );
		?>

		<?php if ( $sidebar_needed || $has_content ) : ?>
			<?php if ( $sidebar_needed ) : ?>
				<aside role="complementary" id="sidebar">
					<?php if ( isset( $thumb_info[1] ) && $thumb_info[1] >= 292 ) : ?>
						<?php the_post_thumbnail( 'snap-sidebar' ); ?>
					<?php elseif ( current_user_can( 'edit_page', get_the_ID() ) ) : ?>
						<div class="placeholder-text">
							<p>
								<?php
									printf(
										__(
											'<strong>Admin:</strong> Oh snap! It looks like this post is using a <a href="%1$s" title="Writing &amp; Editing, Featured Images">Featured Image</a> that is too small for this area. Please add a Featured Image in the <a href="%2$s" title="Edit %3$s">Edit Page</a> screen that is at least 292px wide.',
											'snap'
										),
										'http://en.support.wordpress.com/featured-images/',
										esc_url( get_edit_post_link( $id ) ),
										the_title_attribute( array( 'echo' => false, ) )
									);
								?>
							</p>
						</div>
					<?php endif; ?>
					<?php if ( $has_excerpt ) : ?>
						<?php the_excerpt(); ?>
					<?php endif; ?>
				</aside>
			<?php endif; ?>

			<div class="<?php if ( $sidebar_needed ) : ?>with-sidebar<?php else : ?>no-sidebar<?php endif; ?>">
				<h1 class="desktop-element"><?php the_title(); ?></h1>
				<?php get_template_part( '_the-content' ); ?>
				
			</div>
		<?php elseif ( current_user_can( 'edit_page', get_the_ID() ) ) : ?>
			<div class="placeholder-text">
				<p>
					<?php
						printf(
							__(
								'<strong>Admin:</strong> Oh snap! You need to add content to this page. It is recommended that you add a <a href="%1$s" title="Writing &amp; Editing, Featured Images">Featured Image</a>, <a href="%2$s" title="">Excerpt</a>, and <a href="%3$s" title="">Post Content</a> to this page. You can add these items in the <a href="%4$s" title="Edit %5$s">Edit Post</a> screen.',
								'snap'
							),
							'http://en.support.wordpress.com/featured-images/',
							'http://en.support.wordpress.com/splitting-content/excerpts/',
							'http://en.support.wordpress.com/editors/',
							esc_url( get_edit_post_link() ),
							the_title_attribute( array( 'echo' => false, ) )
						);
					?>
				</p>
			</div>
		<?php endif; ?>
	</div>
<?php endwhile; ?>

<?php get_footer();