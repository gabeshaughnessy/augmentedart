
<div class="off-canvas sidebar">
	<a class="menu-toggle menu-close" onclick="toggleMenu(); return false;">Close</a>
<?php global $post; $menu_title = get_field('menu_title', $post->ID); 
if($menu_title != ''){

echo '<h5>'.$menu_title.'</h5>'; 
}?>
	<ul class="thumbnail-menu">
		<li class="menu-item <?php echo ($day >= 2 ? 'accessible' : 'disabled day2 ' ); ?>"><a href="/nike-fa15-gtm/page-content/plan" ><div class="image-wrapper"><img class="thumbnail" src="<?php bloginfo('stylesheet_directory'); ?>/images/nike-fa15/menu-thumbnails/plan.jpg" width="100%" height="auto"/></div><h6 class="title">Plan</h6></a></li>
		<li class="menu-item <?php echo ($day >= 2 ? ' accessible' : 'disabled day2 ' ); ?>"><a href="/nike-fa15-gtm/page-content/assort" ><div class="image-wrapper"><img class="thumbnail" src="<?php bloginfo('stylesheet_directory'); ?>/images/nike-fa15/menu-thumbnails/assort.jpg" width="100%" height="auto"/></div><h6 class="title">Assort</h6></a></li>
		<li class="menu-item <?php echo ($day >= 2 ? 'accessible' : 'disabled day2 ' ); ?>"><a href="/nike-fa15-gtm/page-content/create" ><div class="image-wrapper"><img class="thumbnail" src="<?php bloginfo('stylesheet_directory'); ?>/images/nike-fa15/menu-thumbnails/create.jpg" width="100%" height="auto"/></div><h6 class="title">Create</h6></a></li>

		<li class="menu-item <?php echo ($day >= 3 ? 'accessible' : 'disabled day3 ' ); ?>"><a href="/nike-fa15-gtm/page-content/download" ><div class="image-wrapper"><img class="thumbnail" src="<?php bloginfo('stylesheet_directory'); ?>/images/nike-fa15/menu-thumbnails/download.jpg" width="100%" height="auto"/></div>
			<h6 class="title">Download</h6></a>
		</li>
		<li class="menu-item <?php echo ($day >= 3 ? 'accessible' : 'disabled day3 ' ); ?>"><a href="/nike-fa15-gtm/page-content/present" ><div class="image-wrapper"><img class="thumbnail" src="<?php bloginfo('stylesheet_directory'); ?>/images/nike-fa15/menu-thumbnails/present.jpg" width="100%" height="auto"/></div><h6 class="title">Present</h6></a></li>
		<li class="menu-item <?php echo ($day >= 3 ? 'accessible' : 'disabled day3 ' ); ?>"><a href="/nike-fa15-gtm/page-content/order" ><div class="image-wrapper"><img class="thumbnail" src="<?php bloginfo('stylesheet_directory'); ?>/images/nike-fa15/menu-thumbnails/order.jpg" width="100%" height="auto"/></div><h6 class="title">Order</h6></a></li>
		<li class="menu-item <?php echo ($day >= 4 ? 'accessible' : 'disabled day4 ' ); ?>"><a href="/nike-fa15-gtm/page-content/manage" ><div class="image-wrapper"><img class="thumbnail" src="<?php bloginfo('stylesheet_directory'); ?>/images/nike-fa15/menu-thumbnails/manage.jpg" width="100%" height="auto"/></div><h6 class="title">Manage</h6></a></li>
		<li class="menu-item <?php echo ($day >= 4 ? 'accessible' : 'disabled day4 ' ); ?>"><a href="/nike-fa15-gtm/page-content/connect" ><div class="image-wrapper"><img class="thumbnail" src="<?php bloginfo('stylesheet_directory'); ?>/images/nike-fa15/menu-thumbnails/connect.jpg" width="100%" height="auto"/></div><h6 class="title">Connect</h6></a></li>
		<li class="menu-item <?php echo ($day >= 4 ? 'accessible' : 'disabled day4 ' ); ?>"><a href="/nike-fa15-gtm/page-content/measure" ><div class="image-wrapper"><img class="thumbnail" src="<?php bloginfo('stylesheet_directory'); ?>/images/nike-fa15/menu-thumbnails/measure.jpg" width="100%" height="auto"/></div><h6 class="title">Measure</h6></a></li>
		<!--<li class="menu-item <?php echo ($day >= 4 ? 'accessible' : 'disabled day4 ' ); ?>"><a href="/nike-fa15-gtm/page-content/administer" ><div class="image-wrapper"><img class="thumbnail" src="<?php bloginfo('stylesheet_directory'); ?>/images/nike-fa15/menu-thumbnails/administer.jpg" width="100%" height="auto"/></div><h6 class="title">Administer</h6></a></li>-->
	</ul> 
</div>
<div class="off-canvas overlay"></div>