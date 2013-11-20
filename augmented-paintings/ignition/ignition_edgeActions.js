
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'glowball'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.play('glowstart');});
//Edge binding end
})("glowball");
//Edge symbol end:'glowball'

//=========================================================

//Edge symbol: 'Glowball-group'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Glowballs}","click",function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("Glowball-group");
//Edge symbol end:'Glowball-group'

//=========================================================

//Edge symbol: 'large_circle'
(function(symbolName){})("large_circle");
//Edge symbol end:'large_circle'

//=========================================================

//Edge symbol: 'background'
(function(symbolName){})("background");
//Edge symbol end:'background'

//=========================================================

//Edge symbol: 'small-circle'
(function(symbolName){})("small-circle");
//Edge symbol end:'small-circle'

//=========================================================

//Edge symbol: 'chair'
(function(symbolName){})("chair");
//Edge symbol end:'chair'

//=========================================================

//Edge symbol: 'spanking'
(function(symbolName){})("spanking");
//Edge symbol end:'spanking'

//=========================================================

//Edge symbol: 'spanked'
(function(symbolName){})("spanked");
//Edge symbol end:'spanked'

//=========================================================

//Edge symbol: 'flames'
(function(symbolName){})("flames");
//Edge symbol end:'flames'
})(jQuery,AdobeEdge,"EDGE-227757856");