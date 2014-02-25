<?php
$hotspots = array();
$hotspots[0] = array(
    'object' => array(
                'url' => 'http://gabesimagination.com/layar/gabes-imagination/sxsw/turtle.html',
                'contentType' => 'text/html',
                'viewport' => array(
                    'height' => 225,
                    'width' => 600,
                    'interactive' => true,
                    'scrollable' => false
                ),
                'size' => 0.5
            ),
    'transform' => array(
        'translate' => array(
            'x' => 0,
            'y' => 0,
            'z' => 0,
        ),
        'scale' => 1
    ),  
    'anchor' => array(
        'referenceImage' => 'turtle'
        ),      
    'id' => 1
);
$layar = array(
    'hotspots' => $hotspots,
	'layer' => 'gabesimagination',
	'errorString' => 'Ok',
	'errorCode' => 0,
	'morePage' => false
	
);
echo json_encode($layar);
?>