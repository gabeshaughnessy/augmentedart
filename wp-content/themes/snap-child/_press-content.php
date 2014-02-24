<?php
/**
 * @package Snap
 */
?>
<div id="post-<?php the_ID(); ?>" <?php post_class('press-post'); ?>>
	<article class="set-post">
		<?php
			$thumbnail_id = get_post_thumbnail_id( get_the_ID() );
			$print_thumb  = false;
			$thumbnail    = '';
			$type         = '';

			if ( $thumbnail_id > 0 ) {
				$print_thumb = true;
				$thumbnail   = get_the_post_thumbnail( get_the_ID(), 'press-grid' );
				$type        = 'featured';
			} elseif ( 'image' === get_post_format() && function_exists( 'get_the_post_format_image' ) && $thumbnail = get_the_post_format_image( 'snap-grid' ) ) {
				$print_thumb = true;
				$type        = 'post-format';
			}
		?>
		<?php //news posts
			if(has_category('press', $post->ID)){
				$permalink = get_field('press_link_url');
				
				if(empty($permalink)){
					$press_content = get_the_content($post->ID);
					if(stristr('http', $press_content) == true){
						$permalink = $press_content;
					}
				else {
					$permalink = get_permalink($post->ID);
				}
				}
				$link_target = "_blank";
			}
			else {
				$permalink = get_permalink($post->ID);
				$link_target = "_top";
			}
		?>

		<div class="post-wrapper <?php if ( $print_thumb ) : ?>with-thumb<?php else : ?>without-thumb<?php endif; ?>">
			<?php if ( $print_thumb ) : ?>
				<div class="grid-thumb-wrapper">
					<?php if ( 'featured' === $type ) : ?>
						<a href="<?php echo $permalink; ?>" rel="bookmark" target="<?php echo $link_target; ?>">
					<?php endif; ?>

					<?php echo $thumbnail; ?>

					<?php if ( 'featured' === $type ) : ?>
						</a>
					<?php endif; ?>
				</div>
			<?php endif; ?>

			<div class="grid-content-wrapper">
				<?php if ( is_sticky() ) : ?>
					<span class="sticky-post-message post-detail">
						<?php _e( 'Featured', 'snap' ); ?>
					</span>
				<?php endif; ?>

				<?php get_template_part( '_date' ); ?>

				<a href="<?php echo $permalink; ?>" rel="bookmark" target="<?php echo $link_target; ?>">
					<h3><?php the_title(); ?></h3>
				</a>

				<?php if ( $print_thumb ) : ?>
					<?php $filter_existed = remove_filter( 'excerpt_length', 'snap_excerpt_length' ); ?>
					<?php the_excerpt(); ?>
					<?php if ( $filter_existed ) : ?>
						<?php add_filter( 'excerpt_length', 'snap_excerpt_length' ); ?>
					<?php endif; ?>
				<?php else : ?>
					<?php the_excerpt(); ?>
				<?php endif; ?>
			</div>
		</div>
		<a href="<?php echo $permalink; ?>" rel="bookmark" target="<?php echo $link_target; ?>">
			<p class="grid-read-more post-detail">
				<?php _e( 'Read more', 'snap' ); ?>
			</p>
		</a>
	</article>
</div>