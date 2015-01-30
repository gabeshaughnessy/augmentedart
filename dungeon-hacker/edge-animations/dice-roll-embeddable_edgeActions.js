/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_diceRoll}", "click", function(sym, e) {
         sym.getSymbol('diceRoll').play('roll');// insert code for mouse click here

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'dice-roll-sprite_symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 927, function(sym, e) {         
         diceValue = Math.floor(Math.random() * 20) + 1;
         sym.stop("frame-"+diceValue);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         

      });
      //Edge binding end

   })("dice-roll-sprite_symbol_1");
   //Edge symbol end:'dice-roll-sprite_symbol_1'

})(jQuery, AdobeEdge, "EDGE-87176573");