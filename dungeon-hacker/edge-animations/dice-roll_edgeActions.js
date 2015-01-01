/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
var roll = true;
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'diceroll_spritesheet_symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_diceroll_spritesheet}", "click", function(sym, e) {
         if(roll == true){
         roll = false;
         sym.play();
         }
         else{
         roll = true;
         sym.stop();
         }
         

      });
      //Edge binding end

   })("diceroll_spritesheet_symbol_1");
   //Edge symbol end:'diceroll_spritesheet_symbol_1'

})(jQuery, AdobeEdge, "EDGE-112942984");