jQuery(document).ready(function(){

var glowReset = true;
function changeColor(c,speed,countup, glowReset)
{
	if(glowReset == true){
		var r = Math.floor(400-c);
		var g = Math.floor(Number(c+200)/2);
		var b = Math.floor(1.5*c+200);
		var blur = Math.floor(Number(c+1)/10);
		jQuery('h1.site-title, h2.site-description').css({'color': 'rgb('+r+','+g+','+b+')'});
		jQuery('h1.site-title, h2.site-description').css({'textShadow': 'rgb('+r+','+g+','+b+') 0 0 '+blur+'px'});
		
			if(c < 255 && countup == true){ c=c+1; }
			else if(c == 255 && countup == true){ countup = false; c = c-1;}
			else if(c > 0 && countup == false){ c = c-1; }
			else if(c == 0){ countup = true; c = c+1; glowReset = false; }
		
		console.log(r,g,b);
		t=setTimeout(function(){changeColor(c,speed,countup, glowReset)},Number(speed));
	}
	else{
		clearTimeout(t);
	}
}
jQuery('h1.site-title, h2.site-description').bind('click', function(e){
glowReset = true;
changeColor(0,20,true, glowReset);
});
changeColor(0,20,true, glowReset);
//changeColor(0,20,'true');
});