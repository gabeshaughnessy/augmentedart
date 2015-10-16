<?php
/**
 * Template Name: Artifact Proposal
 * @package Snap
 */

$image_dir = get_bloginfo('stylesheet_directory'). '/artifact/images/';
?>

<?php get_header(); ?>
	<?php while ( have_posts() ) : the_post(); global $post; ?>
		<div id="page-<?php the_ID(); ?>" class="artifact">
			<div class="page-header">
				<div class="logo">
					<h1 style="background-image: url('<?php echo $image_dir; ?>logo.png');">The Artifact - presented by Lumenal Code</h1>
				</div>
				<div class="header-image">
					<img src="<?php echo $image_dir; ?>artifact-lines.png" height="572px" width="1000px" alt="The Artifact Main Header Image" />
				</div>
			</div>
			<div class="page-content">
				<div class="section teal">
					<div class="large-6 columns">
						<div class="panel">
							<img src="<?php echo $image_dir; ?>animation.gif" alt="animation" width="100%" height="auto" />
						</div>
						<div class="caption">
							<p>The Artifact begins to make sound and pulse light when scanned with the Layar augmented reality app. As more people interact with it, the music and lights increase in intensity.</p>
						</div>
					</div>
					<div class="copy large-6 columns">
						<h2>What is The Artifact?</h2><p class="lead">The Artifact is a combination augmented reality scavenger hunt and interactive, musical light sculpture that a large group of people can all participate in at once.</p>
						<p>A centrally-located pyramid comes to life when you scan it with the augmented reality app Layar, but only if you have already scanned one of the four key-like shards found around the festival grounds.</p>
						<p>The pyramid lights up and makes music and sounds when it detects a device scanning it. The more people that interact with it, the more it comes to life.</p>
					</div>
				</div>
				<div class="section red">
					<div class="copy large-6 columns">
						<h2>The Story</h2><p class="lead">During the construction of the Tilikum Crossing bridge, workers found several artifacts buried in the ground: A large pyramid, and four smaller shards, all covered with strange, unknown designs. </p>
						<p>The artifacts were clearly of advanced technology, inconsistent with the age of the surrounding rock where they were found. However, until very recently, their purpose and origin has remained a complete mystery.</p>

						<p>At an initial site visit to OMSI for this festival, Lumenal Code discovered a fascinating property of the artifacts: they come to life when viewed in augmented reality. 
						When you scan any of the artifacts a digital layer appears over our physical world, giving us a window into their origin and purpose.</p>
						<p>The artifacts and shards react to our technology. Scanning it with Layar creates a noticeable reaction from the pyramid and shards. The pyramid is particularly responsive to multiple interactions, by multiple devices. Lumenal Code was asked to research the artifacts, create an opportunity for the public to interact with them, and help unlock their mysteries.</p>
					</div>

					<div class="large-6 columns">
						<div class="panel large-6 columns">
							<img src="<?php echo $image_dir; ?>frame2.jpg" alt="frame2" width="100%" height="auto" />
						</div>
						<div class="large-6 columns">
							<div class="panel large-12">
								<img src="<?php echo $image_dir; ?>frame3.jpg" alt="frame3" width="100%" height="auto" />
							</div>
							<div class="panel large-12">
								<img src="<?php echo $image_dir; ?>frame4.jpg" alt="frame4" width="100%" height="auto" />
							</div>
						</div>
						<div class="caption">
							<p>A kiosk near the pyramid provides visitors instructions and guidance. Locate the four shards spread around the festival grounds and scan them with Layar. Return to the pyramid to activate The Artifact. </p>
						</div>
					</div>
					

				</div>
				<div class="section pink">
					<div class="large-6 columns">
						<div class="panel">
							<img src="<?php echo $image_dir; ?>frame5.jpg" alt="frame5" width="100%" height="auto" />
						</div>
						<div class="caption">
							<p>The Artifact is a visual instrument that comes to life with music and lights when you scan it with Layar. The more people who scan it, the more it comes to life.</p>
						</div>
					</div>
					<div class="copy large-6 columns">
						<h3>Here’s what we know about them so far:</h3>
						<p class="lead">There is a four-sided pyramid  with four key-like geometric holes, each fitting one of the shards perfectly. Placing the shards themselves in the holes has no effect on the pyramid. However, scanning a shard with Layar, then scanning the face of the pyramid brings it to life. </p>
						<p>Each key may only be used once per device, but if two or more devices are used, each device contributes to the effects on the pyramid. We can only anticipate the effects of a large group of people scanning the pyramid.</p>
						<p>We’re excited to find out what happens, so help us do this thing by visiting get.layar.com on your Android or iOS device and downloading the free Layar app.</p>
						<p>Once your download Layar, find one of the shards, positioned around the festival grounds, and scan it with Layar. </p>
						<p>Return to the central pyramid after scanning one or more of the shards and scan their corresponding sides of the pyramid to activate them. 
						Find the rest of the shards to activate the entire pyramid. Get your friends or strangers on board so we can find out what happens when a bunch of people all activate it at once.</p>
					</div>
				</div>
				<div class="section teal">
					<div class="large-12 columns center-text">
						<h3 class="big">How Does it Work?</h3>
						<strong class="big">Spoiler Alert!!! The following section contains details about the inner workings of The Artifact. </strong><p>If you would like to keep the whole thing a mystery, you should probably stop reading here.</p>
					</div>
					<div class="large-12 columns center-text">
						<hr />
					</div>

				</div>
			</div>
		</div>
	<?php endwhile; ?>
<?php get_footer();