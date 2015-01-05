
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){item.getItemData();item.addItem();item.syncData();player.getPlayerData();player.syncData();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Equip-Item-Button}","click",function(sym,e){sym.play('selected');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){if(typeof item!='undefined'&&typeof player.id!='undefined'){if(player.cryptoCredits>=item.price){player.update('cryptoCredits',player.cryptoCredits-item.price);player.addItem(item.title,'charisma',1);}}
else{console.log('whoops, no item or player object to work with here.');}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'item-image'
(function(symbolName){})("item-image");
//Edge symbol end:'item-image'
})(jQuery,AdobeEdge,"item");