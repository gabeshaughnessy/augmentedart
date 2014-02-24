<?php
$layar = array(
	'layer' => 'gabesimagination',
	'errorString' => 'Ok',
	'errorCode' => 0,
	'morePage' => false,
	'refreshInterval' => 900,
	'hotspots' => array(
		'id' => 1,
		'anchor' => array(
			'referenceImage' => 'http://gabesimagination.com/layar/gabes-imagination/sxsw/turtle.html'
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

/*{
    "hotspots": [
    {
        "object": {
            "url": "http://gabesimagination.com/layar/gabes-imagination/sxsw/sxsw-design.html",//url pointing to your carousel.html
            "contentType": "text/html",
            "viewport": {
                "height": 233,//define the height of viewport  
                "width": 600,//define the width of the viewport . width and height define how much of our page will be shown
                "interactive": true,//users can swipe the carousel
                "scrollable": false//users cannot scroll  
            },
            "size": 0.3//the size of the widget. This is calculated relative to the reference image/Page
        },
        "transform": {
            "translate": {
                "y": 0,
                "x": 0,
                "z": 0.0001
            },
            "scale": 1
        },
        "anchor": {
            "referenceImage": "turtle"
        },
        "id": 1
    }    
    ],
    "layer": "gabesimagination",
    "errorString": "Ok",
    "errorCode": 0,
    "morePages": false,
    "refreshInterval": 900
}*/
?>
