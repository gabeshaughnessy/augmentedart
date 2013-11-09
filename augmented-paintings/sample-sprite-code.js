/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
function animateSprite(sym, e, frames, Fwidth, Fheight, rep, compName){
  currentFrame = Math.floor(e.elapsed/e.timeline.fps);
 
  var x = (currentFrame) % rep * Fwidth * -1;
  var y = Math.floor((currentFrame) / rep) * Fheight * -1;
   sym.$(compName).css('background-position-x', x);
   sym.$(compName).css('background-position-y', y); 
    
    if(currentFrame - frames >= 0){
    currentFrame = 0;
    sym.play(0);
   
   }
}
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "update", function(sym, e) {
            // insert code to be run on every tick of the timeline here.
            // Be careful not to block or do too much work!
       animateSprite(sym, e, 60, 600, 400, 6, 'explosion12');
         });
      //Edge binding end
      
      
      
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.play()// insert code here
      });
      //Edge binding end
      
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
         // insert code to be run at timeline play here
      
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
      sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play(0);
         
         var explosion = sym.$('explosion12');
         var explosionX = e.clientX - explosion.parent().outerWidth()/2;
         var explosionY = e.clientY - explosion.parent().outerHeight()/2;
         sym.$('explosion12').css({'top':explosionY, 'left' : explosionX});

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "learn-video");