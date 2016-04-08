Requests = {
	QueryString : function(item){
	var svalue = location.search.match(new RegExp("[\?\&]" + item + "=([^\&]*)(\&?)","i"));
	return svalue ? svalue[1] : svalue;
	}
}
var sigil;
//Handle the url parameters
if(typeof Requests.QueryString("Sigil1") !== 'undefined' && Requests.QueryString("Sigil1") == "true"){
	sigil = "Sigil1";
}else if(typeof Requests.QueryString("Sigil2") !== 'undefined' && Requests.QueryString("Sigil2") == "true"){
	sigil = "Sigil2";
}else if(typeof Requests.QueryString("Sigil3") !== 'undefined' && Requests.QueryString("Sigil3") == "true"){
	sigil = "Sigil3";
}else if(typeof Requests.QueryString("Sigil4") !== 'undefined' && Requests.QueryString("Sigil4") == "true"){
	sigil = "Sigil4";
}

console.log(sigil);

//load the sprite sheet
var spriteSheet = new Image();
spriteSheet.src = 'animations/spritesheets/spriteSheet.png';
var animation;
var loop;
spriteSheet.onload = function(){
$('.sprite-wrapper').removeClass('loading');
$('.sprite').css('background-image' , 'url('+spriteSheet.src+')').addClass('open');
	animationLoop();
	var loop = setInterval(function(){
		animationLoop();
	}, 10000);
};
function triggerAnimation(speed, animationType) {
    animation = setTimeout(function(){ 
    	$('.sprite').attr('class', 'sprite');
    	var el     = $('.sprite'),  
		newone = el.clone(true);           
		el.after(newone);
		el.first().remove(); 
		$('.sprite').addClass(animationType);       
    }, speed); 
}
function animationLoop(){
	triggerAnimation(3000, 'pulse');
	triggerAnimation(6000, 'close');
	triggerAnimation(8000, 'open');
}
function stopAnimation() {
    clearTimeout(animation);
    clearInterval(loop);
}
$(document).ready(function(){
	$('.sprite-wrapper').append('<a href="/ar-taste/one-pager.html?'+sigil+'=true" class="sprite loading"></a>');	
});