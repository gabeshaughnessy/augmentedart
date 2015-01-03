/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
/* Get URL PARAMS */
$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}
// usage: console.log($.urlParam('playerId'));


/* --- Globals --- */
var player = new Player('test-id');

/* - end Globals - */

(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         
         player.getPlayerClass();

         playerCardUrl = 'http://augmentedart.com/dungeon-hacker/player-card/?playerId='+player.player;
         sym.$('PlayerCardButton').wrap('<a href="'+playerCardUrl+'">');

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_SelectButton}", "click", function(sym, e) {
         sym.play('selected');	// insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         player.loadData(sym);
         sym.stop();// insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here

         player.addPlayer();
         player.syncData();
         player.update('title' , player.title);
         player.update('description' , player.description);
         player.update('player-class' , player.playerClass);
         player.update('playerImg' , player.playerImg);
         player.update('attributes' , player.attributes);


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