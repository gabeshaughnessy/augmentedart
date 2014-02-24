<?php
/**
 * Template Name: Splash Page
 * @package Snap
 */
?>
<?php get_header(); ?>
<?php while ( have_posts() ) : the_post(); ?>
<?php the_content(); ?>
<?php endwhile; ?>