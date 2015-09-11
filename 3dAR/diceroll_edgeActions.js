/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
var dice = {};

		alert("navigator.vibrate?  " + (navigator.vibrate ? "Yes" : "No") + " | navigator.webkitVibrate?  " + (navigator.webkitVibrate ? "Yes" : "No")+ " | navigator.oVibrate?  " + (navigator.oVibrate ? "Yes" : "No"));

		
		function startVibrate(level) {
		
			navigator.vibrate(level);
			alert('If your device can vibrate, it will now vibrate');
		}

		var vibrateInterval;
		function startPeristentVibrate(level, interval) {
			vibrateInterval = setInterval(function() {
				startVibrate(level);
			}, interval);
		}
		
		function stopVibrate() {
			if(vibrateInterval) clearInterval(vibrateInterval);
			navigator.vibrate(0);
		}
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_dice}", "click", function(sym, e) {
         dice.value = Math.floor(Math.random() * (21 - 1)) + 1;
         sym.getSymbol('dice').play(0);
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'dice-roll-sprite_symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 927, function(sym, e) {         
         sym.stop("frame-"+dice.value);
         startVibrate(dice.value*100);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         

      });
      //Edge binding end

   })("dice-roll-sprite_symbol_1");
   //Edge symbol end:'dice-roll-sprite_symbol_1'

})(jQuery, AdobeEdge, "EDGE-639738925");