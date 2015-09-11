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
      
      
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'background'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         sym.play('loop');

      });
      //Edge binding end

   })("background");
   //Edge symbol end:'background'

   //=========================================================
   
   //Edge symbol: 'instructions'
   (function(symbolName) {   
   
   })("instructions");
   //Edge symbol end:'instructions'

   //=========================================================
   
   //Edge symbol: 'Red-light'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 31000, function(sym, e) {
         sym.play('loop');

      });
      //Edge binding end

   })("Red-light");
   //Edge symbol end:'Red-light'

})(jQuery, AdobeEdge, "EDGE-221343168");