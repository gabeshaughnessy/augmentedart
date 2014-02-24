<?php
/**
 * @package Snap
 */
?>
<div class="frame">
	<?php 
	if ( is_search() ) :
	get_search_form(); 
	endif; ?>
	<div class="with-sidebar">
		<?php if ( have_posts() ) : ?>

			<section class="sub-desc">
				<?php if ( is_archive() ) : ?>
					
					<?php echo wp_kses_post( category_description() ); ?>
				<?php elseif ( is_search() ) : ?>
					<h4 class="sub-title"><?php printf( __( "Search results for '%s'", "snap" ), get_search_query() ); ?></h4>
				<?php else : ?>
					<h4 class="sub-title"><?php _e( 'Post listing', 'snap' ); ?></h4>
				<?php endif; ?>
			</section>

			<?php while ( have_posts() ) : the_post(); ?>

				<div class="post">
					<a href="<?php the_permalink(); ?>" title="<?php esc_attr_e( 'Read full article', 'snap' ); ?>" rel="bookmark">
						<h4><?php the_title(); ?></h4>
					</a>
					<span class="post-detail">
						<?php _e( 'By', 'snap' ); ?> <?php the_author_posts_link(); ?> <?php _e( 'on', 'snap' ); ?>
						<?php get_template_part( '_date' ); ?>
					</span>
				</div>

			<?php endwhile; ?>

			<?php $prev = get_previous_posts_link( __( 'Newer posts', 'snap' ) ); ?>
			<?php $next = get_next_posts_link( __( 'Older posts', 'snap' ) ); ?>

			<?php if ( ! empty( $prev ) || ! empty( $next ) ) : ?>
				<nav class="pagination post-footer">
					<p>
						<?php if ( ! empty( $prev ) ) : ?>
							<?php echo $prev; ?>
						<?php endif; ?>
						<?php if ( ! empty( $next ) ) : ?>
							<?php echo $next; ?>
						<?php endif; ?>
					</p>
				</nav>
			<?php endif; ?>

		<?php else : ?>

			<?php if ( is_archive() ) : ?>
				<p><?php _e( 'No posts found.', 'snap' ); ?></p>
			<?php else : ?>
				<p><?php printf( __( 'Sorry, your search for "%s" did not turn up any results. Please try again.', 'snap' ), get_search_query() );?></p>
			<?php endif; ?>

		<?php endif; ?>
	</div>
	<?php get_sidebar(); ?>
</div>