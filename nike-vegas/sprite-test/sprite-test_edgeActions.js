/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
var pageText = 'foo fucking bar';

(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         if(typeof(pageText) != undefined){
         sym.getSymbol('Page-text').$('Text').html(pageText);
         }
         else{
         console.log(pageText);
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'explosion_small_symbol_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${explosion_small}", "click", function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("explosion_small_symbol_1");
   //Edge symbol end:'explosion_small_symbol_1'

   //=========================================================
   
   //Edge symbol: 'Page-text'
   (function(symbolName) {   
   
   })("Page-text");
   //Edge symbol end:'Page-text'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-10349505");