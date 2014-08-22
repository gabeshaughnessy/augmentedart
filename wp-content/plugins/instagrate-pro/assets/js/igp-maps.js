jQuery(document).ready(function($) {

	$maps = $('.map_canvas');
	$maps.each(function(index, Element) {
	    var map;
	    var geocoder;
	    var marker;
	    var infowindow;
	  
		var lat = $(Element).attr("data-lat");
		console.log(lat);
		var lon = $(Element).attr("data-lon");
		var markertitle = $(Element).attr("data-marker");
		
		var mapstyle = $(Element).attr("data-style");	
	    var myLatlng = new google.maps.LatLng(lat, lon);
	    var myOptions = {		zoom: parseInt($(Element).attr("data-zoom")),
								center: myLatlng,
								mapTypeId: google.maps.MapTypeId[mapstyle]
							};
	        
	    map = new google.maps.Map(Element, myOptions);
	    marker = new google.maps.Marker({
	        map: map,
	        position: myLatlng,
	        title: markertitle
	    });
	    google.maps.event.addListener(marker, 'load', function() {
	        infowindow.open(map, marker);
	    });
     
    });
    
    $maps = $('.multi_map_canvas');
	$maps.each(function(index, Element) {
	    var map;
	    var geocoder;
	    var marker;
	    var infowindow;
	  
		var markers = JSON.parse($(Element).attr("data-markers"));
		var mapstyle = $(Element).attr("data-style");	
	   
	    var centerLatlng = new google.maps.LatLng(markers[0].lat, markers[0].lng);
	    var myOptions = {	zoom: parseInt($(Element).attr("data-zoom")),
							center: centerLatlng,
							mapTypeId: google.maps.MapTypeId[mapstyle]
						};
	        
	    map = new google.maps.Map(Element, myOptions);
	    var infowindow = new google.maps.InfoWindow({ maxWidth: 200 });
	    $.each(markers, function () {
		    add_marker(map, this, infowindow);
		});
    });
    
    var clicked = false;
    function infoCallback(map, infowindow, marker, content) {
		return function() {
			if (infowindow) {
		        infowindow.close();
		    }
		    infowindow.setContent(content);
			infowindow.open(map, marker);
			if (clicked) map.panTo(marker.getPosition());
			clicked = false;
		};
	}
	
    function add_marker(map, marker, infowindow) {
	    var myLatlng = new google.maps.LatLng(marker.lat, marker.lng);
	    newMarker = new google.maps.Marker({
	        map: map,
	        position: myLatlng,
	        title: marker.marker
	    });
	    
	    google.maps.event.addListener(
			newMarker,
			'click',
			infoCallback(map, infowindow, newMarker, '<div class="igp-map-thumb"><a href="' + marker.image +'" title="' + marker.marker + '" rel="' + igp_maps.lightbox_rel + '"><img src="' + marker.image +'" alt="' + marker.marker +'" ></a><br><strong>' + marker.marker + '</strong></div>')
		);	      
    }
    
});

