
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_petals}","click",function(sym,e){sym.getComposition().getStage().getSymbol('petals').play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_petal-trigger}","click",function(sym,e){sym.getComposition().getStage().getSymbol('petals').play(0);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'background'
(function(symbolName){})("background");
//Edge symbol end:'background'

//=========================================================

//Edge symbol: 'torch'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_torch-sprite-short-desat}","click",function(sym,e){sym.play();});
//Edge binding end
})("torch");
//Edge symbol end:'torch'

//=========================================================

//Edge symbol: 'petals'
(function(symbolName){})("petals");
//Edge symbol end:'petals'
})(jQuery,AdobeEdge,"into-the-woods");