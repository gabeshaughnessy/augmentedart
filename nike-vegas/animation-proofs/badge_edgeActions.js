
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){jQuery.cookie('FA15-test','true',{expires:4,path:'/'});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_FA15_badge_1}","click",function(sym,e){sym.play('loop');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Reset_device2}","click",function(sym,e){$.removeCookie('FA15-test',{path:'/'});alert('removed cookie');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-116472068");