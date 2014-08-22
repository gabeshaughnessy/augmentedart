<?php
/**
 * Template Name: ACF form Template
 * @package Snap
 * reference: http://www.advancedcustomfields.com/resources/create-a-front-end-form/
 */


?>
<?php acf_form_head(); ?>
<?php get_header(); ?>
<div id="page-<?php the_ID(); ?>">
	<?php while ( have_posts() ) : the_post(); ?>

		<?php acf_form(
		array(
					'post_id'		=> 'new_post',
					'new_post'		=> array(
						'post_type'		=> 'event',
						'post_status'		=> 'publish'
					),
					'submit_value'		=> 'Create a new event'
			)
		); ?>

	<?php endwhile; ?>
</div>

<?php get_footer();