//load the sprite sheet
var spriteSheet = new Image();
spriteSheet.src = 'animations/spritesheets/spriteSheet.png';
var animation;
spriteSheet.onload = function(){
$('.sprite').css('background-image' , 'url('+spriteSheet.src+')').addClass('open');
	animationLoop();
	setInterval(function(){
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
}
$(document).ready(function(){
	$('.sprite-wrapper').append('<div class="sprite"></div>');	
});