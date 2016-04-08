//load the sprite sheet
var spriteSheet = 'animations/spritesheets/spriteSheet.png';
var animation;
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
	$('.sprite-wrapper').append('<div class="sprite open" style="background-image: url('+spriteSheet+');"></div>');

		animationLoop();
		setInterval(function(){
			animationLoop();
		}, 10000)
});