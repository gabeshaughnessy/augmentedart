<?php
/**
 * @package Snap
 */
?>
<?php get_header(); ?>
<?php while ( have_posts() ) : the_post(); ?>

	<?php global $post; $has_excerpt = ( ! empty( $post->post_excerpt ) ); ?>
	
	<div class="portfolio-single-content<?php if ( ! $has_excerpt ) : ?> portfolio-single-content-without-excerpt<?php endif; ?>">
		<?php if ( ! $has_excerpt ) : ?>
			<h1><?php the_title(); ?></h1>
		<?php endif; ?>
		<?php
		//check if this post has a video in the custom field, if it does, check if it should be displayed in the slider, if it should, show the embed coe
			$videos = array();
			$video_embed = '';
			$videos['youtube_id'] = get_field('youtube_video_id', $post->ID);
			$videos['vimeo_id'] = get_field('vimeo_video_id', $post->ID);
			$videos['embed_code'] = get_field('video_embed_code', $post->ID);
			if($videos['youtube_id'] != ''){
				$video_embed = '<iframe width="560" height="315" src="//www.youtube.com/embed/'.$videos['youtube_id'].'?enablejsapi=1 " frameborder="0" allowfullscreen></iframe>';
			}
			elseif($videos['vimeo_id'] != ''){

				$video_embed = '<iframe src="//player.vimeo.com/video/'.$videos['vimeo_id'].'" width="800" height="450" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
			}
			$show_video = get_field('show_video', $post->ID);
			$video_size = get_field('video_size', $post->ID);
			if($show_video != false){
			if($video_embed != '' && in_array('post-start', $show_video)){
				echo '<div class="fit-vid '.$video_size.'">'.$video_embed.'</div><hr />';
			}}
			else if(get_the_post_thumbnail( $post->ID ) != ''){
				//echo get_the_post_thumbnail( $post->ID );
			}
			
			 ?>
		<?php the_content(); ?>
		<?php if ( ! $has_excerpt ) : ?>
			<?php get_template_part( '_portfolio-details' ); ?>
		<?php endif; ?>
		<?php comments_template( '', true ); ?>
	</div>
	
	<?php if ( $has_excerpt ) : ?>
		<?php get_template_part( '_portfolio-description' ); ?>
	<?php endif; ?>

<?php endwhile; ?>
<?php get_footer();