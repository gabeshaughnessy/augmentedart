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
         item.getItemData();
         item.addItem();
         item.syncData();
         player.getPlayerData();
         
          
         //player.syncData();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Equip-Item-Button}", "click", function(sym, e) {
       linkUrl = playerCardURL+'?playerId='+player.id;
         if(player.hasItem(item.title) === false && player.cryptoCredits >= item.price){
            sym.play('selected');// insert code for mouse click here
            sym.$('Equip-Button-text').html('Item Equipped');
         }
         
         else if(player.cryptoCredits < item.price){
         
            sym.$('Equip-Button-text').html('Not enough credits.<br /> Tap to view your player card.');
            sym.$('Equip-Item-Button').wrap('<a href="'+linkUrl+'">');

         }
         else{
         
            sym.$('Equip-Button-text').html('Item already equipped.<br /> Tap to view your player card.');
            sym.$('Equip-Item-Button').wrap('<a href="'+linkUrl+'">');

         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.$('Equip-Button-text').html('Tap to purchase.');
         sym.stop();// insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         if(typeof item != 'undefined' && typeof player.id != 'undefined'){
            if(player.cryptoCredits >= item.price){
                 player.update('cryptoCredits', player.cryptoCredits - item.price );
                 for(attribute in item.attributes){
                 player.addItem(item, item.title, attribute, 1 );
                 }
            }
         }
         
         
         else {
         console.log('whoops, no item or player object to work with here.');
         }
         
         linkUrl = playerCardURL+'?playerId='+player.id;
                  sym.$('Equip-Item-Button').wrap('<a href="'+linkUrl+'">');

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'item-image'
   (function(symbolName) {   
   
   })("item-image");
   //Edge symbol end:'item-image'

})(jQuery, AdobeEdge, "item");