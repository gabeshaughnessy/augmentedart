/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
/* --- Globals --- */
var player = new Player('test-id');
player.title = 'Project Manager';
player.playerClass = 'Project Manager';
player.attributes = { charisma : 1, creativity : 1, knowledge : 1};
player.description = 'A Project Manager is the all-around balanced character';

/* - end Globals - */

(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         
         player.addPlayer();
         player.update('title' , player.title);
         player.update('description' , player.description);
         player.update('attributes' , player.attributes);

      });
      //Edge binding end

      

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "player");