
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_petals}","click",function(sym,e){sym.getComposition().getStage().getSymbol('petals').play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_petal-trigger}","click",function(sym,e){sym.getComposition().getStage().getSymbol('petals').play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_crown_flame_1}","click",function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_head}","click",function(sym,e){setTimeout(function(){sym.getSymbol('crown-flame-17').play(0);},100);setTimeout(function(){sym.getSymbol('crown-flame-13').play(0);},200);setTimeout(function(){sym.getSymbol('crown-flame-12').play(0);},300);setTimeout(function(){sym.getSymbol('crown-flame-1').play(0);},400);setTimeout(function(){sym.getSymbol('crown_flame_1').play(0);},500);setTimeout(function(){sym.getSymbol('crown-flame-14').play(0);},600);setTimeout(function(){sym.getSymbol('crown-flame-15').play(0);},700);setTimeout(function(){sym.getSymbol('crown-flame-16').play(0);},800);setTimeout(function(){sym.getSymbol('crown-flame-18').play(0);},900);});
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

//=========================================================

//Edge symbol: 'crown'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_crown-flame-sprite-small}","click",function(sym,e){sym.play(0);});
//Edge binding end
})("crown-flame-1");
//Edge symbol end:'crown-flame-1'
})(jQuery,AdobeEdge,"into-the-woods");