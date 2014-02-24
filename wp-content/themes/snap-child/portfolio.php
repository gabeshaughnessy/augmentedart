<?php
/**
 * Template Name: Portfolio Template
 * @package Snap
 */
?>
<?php get_header(); ?>

<?php //add_filter( 'the_excerpt', 'snap_trim_portfolio_page_excerpt', 50 ); ?>
<?php while ( have_posts() ) : the_post(); ?>
	<?php get_template_part( '_post-thumbnail' ); ?>
	
	<?php $selected_portfolio_posts_query = new Snap_Portfolio_Selected_Posts( get_the_ID() ); ?>
	<?php $portfolio_posts = $selected_portfolio_posts_query->get_posts(); ?>
	
	<?php if ( $portfolio_posts->have_posts() ) : ?>
		<?php while ( $portfolio_posts->have_posts() ) : $portfolio_posts->the_post(); ?>
			<article class="portfolio-post">
				<?php
					$thumbnail_id   = get_post_thumbnail_id();
					$thumb_info     = wp_get_attachment_image_src( $thumbnail_id, 'snap-full-width' );
				?>
				<?php if ( $thumbnail_id > 0 ) : ?>
					<?php if ( isset( $thumb_info[1] ) && $thumb_info[1] > 900 ) : ?>
						<figure class="portfolio-image">
							<a href="<?php the_permalink(); ?>" rel="bookmark">
								<?php the_post_thumbnail( 'snap-full-width' ); ?>
							</a>
						</figure>
					<?php elseif ( current_user_can( 'edit_post', get_the_ID() ) ) : ?>
						<div class="portfolio-placeholder placeholder-text">
							<p>
								<?php
									printf(
										__(
											'<strong>Admin:</strong> Oh snap! It looks like this post is using a <a href="%1$s" title="Writing &amp; Editing, Featured Images">Featured Image</a> that is too small for this area. Please add a Featured Image in the <a href="%2$s" title="Edit %3$s">Edit Post</a> screen that is at least 994px wide.',
											'snap'
										),
										'http://en.support.wordpress.com/featured-images/',
										esc_url( get_edit_post_link() ),
										the_title_attribute( array( 'echo' => false, ) )
									);
								?>
							</p>
						</div>
					<?php endif; ?>
				<?php elseif ( current_user_can( 'edit_post', get_the_ID() ) ) : ?>
					<div class="portfolio-placeholder placeholder-text">
						<p>
							<?php
								printf(
									__(
										'<strong>Admin:</strong> You can remove this placeholder by setting a <a href="%1$s" title="Writing &amp; Editing, Featured Images">Featured Image</a> in the <a href="%2$s" title="Edit %3$s">Edit Post</a> screen for this post.',
										'snap'
									),
									'http://en.support.wordpress.com/featured-images/',
									esc_url( get_edit_post_link() ),
									the_title_attribute( array( 'echo' => false, ) )
								);
							?>
						</p>
					</div>
				<?php endif; ?>
				<?php get_template_part( '_portfolio-description' ); ?>
			</article>
		<?php endwhile; wp_reset_postdata(); ?>
	<?php elseif ( current_user_can( 'edit_page', get_the_ID() ) ) : ?>
		<div class="placeholder-text">
			<p>
				<?php
					printf(
						__(
							'<strong>Admin:</strong> Oh snap! You need to add portfolio items to this page. You can do so in the <strong>Portfolio Posts</strong> section of the <a href="%s" title="Edit page">Edit Page</a> screen.',
							'snap'
						),
						esc_url( get_edit_post_link() )
					);
				?>
			</p>
		</div>
	<?php endif; ?>
<?php endwhile; ?>
<?php remove_filter( 'the_excerpt', 'snap_trim_portfolio_page_excerpt', 50 ); ?>
<?php get_footer();