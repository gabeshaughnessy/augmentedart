
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","stop",function(sym,e){});
//Edge binding end
Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","update",function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Into-the-Woods-woman}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.play(0);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-75241278");