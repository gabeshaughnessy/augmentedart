/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/



/* --- Globals --- */
if(typeof playerId == 'undefined'){//first check if playerId is set globally elsewhere
   if( $.urlParam('playerId') != null ){//then check if playerId is passed as a url parameter
      var playerId = $.urlParam('playerId');
   }
   else{
     var playerId = 'test-id';
   }
 
};
var player = new Player(playerId);

/* - end Globals - */

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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here

        
         
         


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

})(jQuery, AdobeEdge, "player");