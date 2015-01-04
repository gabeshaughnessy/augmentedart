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
         // insert code to be run when the composition is fully loaded here
         
         item.getItemData();
         item.addItem();
         //player.getPlayerData();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Equip-Item-Button}", "click", function(sym, e) {
         sym.play('selected');// insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();// insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         if(typeof item != 'undefined' && typeof player.id != 'undefined'){
            console.log(player.id);
            firebaseRef.child('players').child(player.id).on('value', function(snapshot){
               var playerData = snapshot.val();
               
               console.log(playerData);   
               if(player.cryptoCredits >= item.price){
                  
                  var creditObject = {};
                  creditObject['cryptoCredits'] = player.cryptoCredits - item.price;
                  var itemObject = {}
                  itemObject['inventory'] = 'foobar';

                   firebaseRef.child('players').child(player.id).update(creditObject);
                   firebaseRef.child('players').child(player.id).update(itemObject);
               }
            });
         }
         
         
         else {
         alert('whoops');
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-257681527");