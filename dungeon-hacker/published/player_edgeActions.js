
if(typeof playerId=='undefined'){if($.urlParam('playerId')!=null){var playerId=$.urlParam('playerId');}
else{var playerId='test-id';}};var player=new Player(playerId);(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){player.getPlayerClass();playerCardUrl='http://augmentedart.com/dungeon-hacker/edge-animations/player-card.html?playerId='+player.player;sym.$('PlayerCardButton').wrap('<a href="'+playerCardUrl+'">');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_SelectButton}","click",function(sym,e){sym.play('selected');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){player.loadData(sym);sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){player.addPlayer();player.syncData();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'PlayerImage'
(function(symbolName){})("PlayerImage");
//Edge symbol end:'PlayerImage'

//=========================================================

//Edge symbol: 'SelectButton'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.$('Text').html('Character Selected');sym.stop();});
//Edge binding end
})("SelectButton");
//Edge symbol end:'SelectButton'

//=========================================================

//Edge symbol: 'PlayerCardButton'
(function(symbolName){})("PlayerCardButton");
//Edge symbol end:'PlayerCardButton'
})(jQuery,AdobeEdge,"player");