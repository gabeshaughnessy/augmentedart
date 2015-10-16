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
						<p>Learn more about the Layar app and see it in use in <a class="icon-external-link-icon" href="https://www.youtube.com/watch?v=bxSPb3htcrg">this short video</a></p>
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
				<div class="section pink">

					<div class="large-6 columns">
						<div class="panel">
							<img src="<?php echo $image_dir; ?>scan-shard.png" alt="scan a shard" width="100%" height="auto" />
						</div>
						<div class="caption">
							<p>Scan a shard to unlock your device. Each shard unlocks one side of the pyramid.</p>
						</div>
					</div>
					<div class="copy large-6 columns">
						<h3>Find a Shard and Scan it with Layar</h3>
						<p class="lead">Now you are ready to activate The Artifact.</p>
						<p>You must find and scan at least one of the shards, located around the festival grounds. Each shard activates one side of the pyramid.</p>
						<p class="teal">Download Layar at <a class="icon-external-link-icon" href="http://get.layar.com">Get.Layar.Com</a></p>
					</div>

				</div>

				<div class="section pink">
					<div class="large-12 columns">
						<hr />
					</div>
				</div>

				<div class="section teal">
					
					<div class="large-4 columns">
						<div class="">
							<img src="<?php echo $image_dir; ?>scan-pyramid.png" alt="scan the pyramid" width="100%" height="auto" />
						</div>
						<div class="caption">
							<p>Scan one of the sides of the pyramid with Layar to activate it.</p>
						</div>
					</div>
					<div class="large-4 columns">
						<div class="">
							<img src="<?php echo $image_dir; ?>database.png" alt="scan the pyramid" width="100%" height="auto" />
						</div>
						<div class="caption">
							<p>The server inside the pyramid is the control center, sending and receiving signals.</p>
						</div>
					</div>
					<div class="copy large-4 columns">
						<h3>Scan the Pyramid with Layar</h3>
						<p class="lead">When an unlocked device scans one of the sides of the pyramid, it sends a signal to the database. The pyramid has a server inside it, listening and responding to changes to the database.</p><p>The server in turn sends s signal to the lighting and music controllers inside the pyramid.</p>
					</div>

					
				</div>

				<div class="section red">
					<div class="large-12 columns">
						<hr />
					</div>
				</div>

				<div class="section red">
					<div class="large-3 columns">
						<div class="">
							<img src="<?php echo $image_dir; ?>sounds.png" alt="Bass, Drums, Melody and Ambiant Sounds" width="100%" height="auto" />
						</div>
						<!-- <div class="caption">
							<p>Each sound corresponds to a shard and a side of the pyramid.</p>
						</div> -->
					</div>
					
					<div class="copy large-9 columns">
						<h3>Each side of The Artifact makes a Different Type of Sound</h3>
						<p class="lead">Bass, Melody, Ambiant and Drums</p>
						<p>Together they create a complete composition, but they each stand alone as well. Find all four shards and then scan all four sides of the pyramid with layar to create the complete composition. 
					</div>

				</div>

				<div class="section red">
					<div class="large-12 columns">
						<hr />
					</div>
				</div>

				<div class="section teal">
					
					<div class="copy large-9 columns">
						<h3>Get your Friends On Board to Bring up the Intensity.</h3>
						<p class="lead">As more people interact with  The Artifact, the intensity of the music and lighting increases.</p>
						<p>Each additional person scanning the pyramid raises an intensity level that controls the music and lighting tracks. The Artifact builds toward a peak experience if enough people activate it simultaneously.</p>
					</div>
					<div class="large-3 columns">
						<div class="">
							<img src="<?php echo $image_dir; ?>intensity-knob.png" alt="Intensity Knob Goes to 11" width="100%" height="auto" />
						</div>
						<!-- <div class="caption">
							<p>It goes to 11.</p>
						</div>  -->
					</div>
				</div>

				<div class="section red">
					<div class="large-12 columns ">
						<h3 class="big center-text">How Will We Build It?</h3>
						<p class="lead">The Artifact’s components will be designed and fabricated using a combination of fine art aesthetics and cutting edge automated technologies such as computer assisted 3-D modeling, laser cutting, CnC routing, etc. We are working with an experienced 3D modeler to take our sketches and transform them into designs that can easily be turned into fabricated elements at a production house. We will insure that the structures are built to structural standards, keeping in mind ways to minimize waste. </p>
					</div>
				</div>
				
				<div class="section pink">
					<p class="lead">Our choice of materials can vary accordingly with the budget. We would ideally use a number of materials such as a steel for the frame, and a combination of translucent acrylic & extruded PVC sheet for the surface. We can also include such materials as glass or stone if appropriate.
					The surface will also feature multiple layers of cut and layered components to give the feeling of alien technology and provide texture and surface interest. </p>
				</div>

				<div class="section teal">

					<p class="lead">Our team of lighting and sound experts will wire the Artifact in such a way that the functionality behind the experience is hidden from view, maintaining a clean aesthetic and the illusion of ancient alien tech.</p>

					<p class="lead">We will use our proprietary approach to augmented reality, whereas the AR interface not only overlays digital information onto reality, but can directly affect it as well.</p>
				</div>
				<div class="section red">
					<p class="lead">By combining a sci-fi narrative, fine art aesthetics, cutting edge fabrication, sound and lighting design and bi-directional interactivity, we aim to give the viewer a never seen before fusion of art and technology.</p>
				</div>
			</div>
		</div>
	<?php endwhile; ?>
<?php get_footer();