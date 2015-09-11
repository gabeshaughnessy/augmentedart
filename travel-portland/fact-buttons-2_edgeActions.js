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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         fact1URL = 'http://augmentedart.com/travel-portland/fact-3/';
         sym.$('factButton1').append('<a class="trigger" href="'+fact1URL+'" style=" z-index:10000; width: 100%; height: 105px; display: block; " ></a>');
         
         fact2URL = 'http://augmentedart.com/travel-portland/fact-4/';
         sym.$('factButton2').append('<a class="trigger" href="'+fact2URL+'" style=" z-index:10000; width: 100%; height: 105px; display: block;" ></a>');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_factButton1}", "click", function(sym, e) {
         sym.getSymbol('factButton1').find('.trigger').trigger('click');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_factButton2}", "click", function(sym, e) {
         sym.getSymbol('factButton2').find('.trigger').trigger('click');
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'factButton'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         sym.play('loop');

      });
      //Edge binding end

   })("factButton");
   //Edge symbol end:'factButton'

   //=========================================================
   
   //Edge symbol: 'factButton_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         sym.play('loop');

      });
         //Edge binding end

      })("factButton_1");
   //Edge symbol end:'factButton_1'

})(jQuery, AdobeEdge, "fact-buttons");