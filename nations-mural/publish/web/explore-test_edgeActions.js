
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Boat'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){sym.play(0);});
//Edge binding end
})("Boat");
//Edge symbol end:'Boat'

//=========================================================

//Edge symbol: 'Zepellin'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9000,function(sym,e){sym.play(0);});
//Edge binding end
})("Zepellin");
//Edge symbol end:'Zepellin'
})(jQuery,AdobeEdge,"edge-animate");