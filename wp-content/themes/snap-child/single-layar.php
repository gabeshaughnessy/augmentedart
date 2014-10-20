<?php
global $post;

$user_agent = $_SERVER['HTTP_USER_AGENT'];

if(isset($user_agent) && strpos($user_agent,'Android') !== false) {
    //This person is using an android device so we are going to have z position stacking issues wher ethe hotspots overlap.
    $is_android = true;
}
else {
    $is_android = false;
}
$user_id = $_REQUEST['userId'];

$hotspots_output = array();
if(have_posts()) : while(have_posts()) : the_post();
    $layar_name = get_field('layar_name');
    $hotspots = get_field('layar_hotspots');
        if(!empty($hotspots)){
            $i = 0;
            foreach($hotspots as $hotspot) {      
                //build hotspots here
                $referenceImage = (isset($hotspot['layar_reference_image']) ? $hotspot['layar_reference_image'] : 'noimage');
                $layarUrl = (isset($hotspot['layar_url']) ? $hotspot['layar_url']:'nouurl');
                $contentType = (isset($hotspot['layar_content_type'])?$hotspot['layar_content_type']:'nocontenttype');
                $layarHeight = (isset($hotspot['layar_height'])?$hotspot['layar_height']:'noheight');
                $layarWidth = (isset($hotspot['layar_width'])?$hotspot['layar_width']:'nowidth');
                $interactive = (isset($hotspot['layar_interactive'])?$hotspot['layar_interactive']:true);
                $scrollable = (isset($hotspot['layar_scrollable'])?$hotspot['layar_scrollable']:false);
                $layarSize = (isset($hotspot['layar_size'])?$hotspot['layar_size']:1);
                $rotateX = (isset($hotspot['layar_rotate_x']) && $hotspot['layar_rotate_x'] ? "1" : "0");
                $rotateY = (isset($hotspot['layar_rotate_y'] ) && $hotspot['layar_rotate_y'] ? "1" : "0");
                $rotateZ = (isset($hotspot['layar_rotate_z']) && $hotspot['layar_rotate_z'] ? "1" : "0");
                $rotateAngle = (isset($hotspot['layar_rotate_angle'])? $hotspot['layar_rotate_angle'] : 0);
                $rotateRelative =  (isset($hotspot['layar_rotate_rel'])? $hotspot['layar_rotate_rel'] : false);
                $translateX = (isset($hotspot['layar_translate_x'])?$hotspot['layar_translate_x']:0);
                $translateY = (isset($hotspot['layar_translate_y'])?$hotspot['layar_translate_y']:0);
                $translateZ = (isset($hotspot['layar_translate_z'])? $hotspot['layar_translate_z'] : 0);
               // $translateZ = ($is_android === true ? 0-$translateZ : $translateZ );
                $layarScale = (isset($hotspot['layar_scale'])? $hotspot['layar_scale'] : 1);

                $hotspots_output[$i] = array(
                    'object' => array(
                                'url' => $layarUrl, //this is the content for the layar.
                                'contentType' => $contentType,
                                'viewport' => array(
                                    'height' => $layarHeight,
                                    'width' => $layarWidth,
                                    'interactive' => $interactive,
                                    'scrollable' => $scrollable
                                ),
                                'size' => $layarSize
                            ),
                    'transform' => array(
                        'translate' => array(
                            'x' => $translateX,
                            'y' => $translateY,
                            'z' => $translateZ,
                        ),
                        'rotate' => array(
                            'rel' => $rotateRelative,
                            'axis' => array(
                                'x' => $rotateX,
                                'y' => $rotateY,
                                'z' => $rotateZ
                            ),
                            'angle' => $rotateAngle   
                        ),
                        
                        'scale' => $layarScale
                    ),  
                    'anchor' => array(
                        'referenceImage' => $referenceImage //this is the 'page' name in the layar publishing site.
                        ),      
                    'id' => $post->ID+$i
                );
                $i++;
        }
    }
endwhile;

else : 
    echo 'no hotspots found';
endif;
if(!empty($hotspots_output) && isset($layar_name)){
    $layar = array(
        'hotspots' => $hotspots_output,
    	'layer' => $layar_name, //this is the layar name on the publishing site.
    	'errorString' => 'Ok',
    	'errorCode' => 0,
    	'morePage' => false
    	
    );
echo json_encode($layar);
}
?>
<!-- GA Tracking -->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-55894751-1', 'auto');
  ga('send', 'pageview');
  ga('send', 'layar_request');

</script><!-- end GA TRACKING -->