jQuery(document).ready(function(){
	var scale=150;
	jQuery('.site-header').css({'backgroundSize': scale+'%'});
	function animateHeader(event,speed, scale)
	{
	var canvas = new Object();
		canvas.width = jQuery('.site-header').width();
		canvas.height = jQuery('.site-header').height();
	var mouse = new Object();
		mouse.x = event.pageX;
		mouse.y = event.pageY;
	var origin = new Object();
		origin.x = canvas.width/5;
		origin.y = canvas.height/5;
		if(Number(origin.x-mouse.x)/Number(scale/100) < 0 && Number(Number(origin.x-mouse.x)/Number(scale/100)) > Number(0-canvas.width/2)){
		canvas.x = Number(origin.x-mouse.x)/Number(scale/100);
		}
		if(Number(origin.y-mouse.y)/Number(scale/100) < 0 && Number(Number(origin.y-mouse.y)/Number(scale/100)) > Number(0-canvas.height/4)){
		canvas.y = Number(origin.y-mouse.y)/Number(scale/100);
		}
		
	//console.log(Number(0-canvas.height/2),' ',Number(origin.y-mouse.y)/Number(scale/100));
	jQuery('.site-header').css({'backgroundSize': scale+'%'}).css({'backgroundPositionX':canvas.x, 'backgroundPositionY': canvas.y });
	}
	
	jQuery('.site-header .home-link').bind('mouseover', function(e){
		animateHeader(e,100, scale);
		e.preventDefault();
	});
	jQuery('.touch .site-header .home-link').bind('click', function(e){
		animateHeader(e,100, 150);
		e.preventDefault();
	});
});