
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){item.getItemData();item.addItem();item.syncData();player.getPlayerData();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Equip-Item-Button}","click",function(sym,e){alert(playerId);alert(item.price);if(player.hasItem(item.title)===false&&player.cryptoCredits>=item.price){sym.play('selected');sym.$('Equip-Button-text').html('Item Equipped');}
else if(player.cryptoCredits<item.price){sym.$('Equip-Button-text').html('Not Enough Credits');}
else{sym.$('Equip-Button-text').html('Item Already Equipped');}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$('Equip-Button-text').html('Cost: '+item.price);sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){if(typeof item!='undefined'&&typeof player.id!='undefined'){if(player.cryptoCredits>=item.price){player.update('cryptoCredits',player.cryptoCredits-item.price);player.addItem(item,item.title,'charisma',1);}}
else{alert('no player or item');console.log('whoops, no item or player object to work with here.');}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'item-image'
(function(symbolName){})("item-image");
//Edge symbol end:'item-image'
})(jQuery,AdobeEdge,"item");