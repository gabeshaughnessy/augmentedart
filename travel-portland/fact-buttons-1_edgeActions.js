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
         fact1URL = 'http://augmentedart.com/travel-portland/fact-1/';
         sym.getSymbol('factButton1').$('button').wrap('<a href="'+fact1URL+'" style="z-index:1000; width:120px; height:105px; display: block;" ></a>');
         
         fact2URL = 'http://augmentedart.com/travel-portland/fact-2/';
         sym.getSymbol('factButton2').$('button').wrap('<a href="'+fact2URL+'" style="z-index:1000; width:120px; height:105px; display: block;" ></a>');
         
         tpURL = 'http://www.travelportland.com/';
         sym.getSymbol('logo').$('TP_logo').wrap('<a href="'+tpURL+'" style="z-index:1000; width:200px; height:42px; display: block;" ></a>');

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
   
   //Edge symbol: 'logo'
   (function(symbolName) {   
   
   })("logo");
   //Edge symbol end:'logo'

})(jQuery, AdobeEdge, "fact-buttons");