
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_instructions}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7900,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8250,function(sym,e){sym.play('loop');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'background'
(function(symbolName){})("background");
//Edge symbol end:'background'

//=========================================================

//Edge symbol: 'instructions'
(function(symbolName){})("instructions");
//Edge symbol end:'instructions'
})(jQuery,AdobeEdge,"EDGE-221343168");