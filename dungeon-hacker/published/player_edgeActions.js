
var player=new Player('test-id');player.title='Project Manager';player.playerClass='Project Manager';player.attributes={charisma:1,creativity:1,knowledge:1};player.description='A Project Manager is the all-around balanced character';(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){player.addPlayer();player.update('title',player.title);player.update('description',player.description);player.update('attributes',player.attributes);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'PlayerImage'
(function(symbolName){})("PlayerImage");
//Edge symbol end:'PlayerImage'
})(jQuery,AdobeEdge,"player");