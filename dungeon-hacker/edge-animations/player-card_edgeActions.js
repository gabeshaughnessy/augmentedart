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
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         player.syncData();
         player.getPlayerClass();

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         sym.stop();// insert code here

      });
      //Edge binding end

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'PlayerImage'
   (function(symbolName) {   
   
   })("PlayerImage");
   //Edge symbol end:'PlayerImage'

   //=========================================================
   
   //Edge symbol: 'SelectButton'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.$('Text').html('Character Selected');
         sym.stop();// insert code here
         

      });
      //Edge binding end

   })("SelectButton");
   //Edge symbol end:'SelectButton'

   //=========================================================
   
   //Edge symbol: 'PlayerCardButton'
   (function(symbolName) {   
   
   })("PlayerCardButton");
   //Edge symbol end:'PlayerCardButton'

   //=========================================================
   
   //Edge symbol: 'Inventory'
   (function(symbolName) {   
   
   })("Inventory");
   //Edge symbol end:'Inventory'

   //=========================================================
   
   //Edge symbol: 'inventory-item'
   (function(symbolName) {   
   
   })("inventory-item");
   //Edge symbol end:'inventory-item'

   //=========================================================
   
   //Edge symbol: 'item-image-container'
   (function(symbolName) {   
   
   })("item-image-container");
   //Edge symbol end:'item-image-container'

})(jQuery, AdobeEdge, "player");