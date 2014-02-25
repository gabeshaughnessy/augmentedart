<?php
$layar = array(
	'layer' => 'gabesimagination',
	'errorString' => 'Ok',
	'errorCode' => 0,
	'morePage' => false,
	'refreshInterval' => 900,
	'hotspots' =>
        array(
    		'id' => 1,
    		'anchor' => array(
    			'referenceImage' => 'turtle'
    			),
    		'object' => array(
    			'size' => 0.5,
    			'url' => 'http://gabesimagination.com/layar/gabes-imagination/sxsw/turtle.html',
    			'viewport' => array(
    				'height' => 225,
    				'width' => 600,
    				'interactive' => true,
    				'scrollable' => false
    			)
    		),
		'transform' => array(
			'translate' => array(
                'x' => 0,
                'y' => 0,
                'z' => 0,
			),
			'scale' => 1
		)
	)
);
echo json_encode($layar);
?>