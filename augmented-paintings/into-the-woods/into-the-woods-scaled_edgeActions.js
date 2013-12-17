
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
Symbol.bindElementAction(compId,symbolName,"${_tree}","click",function(sym,e){sym.getSymbol('tree').getSymbol('leftleaf').play(0);sym.getSymbol('tree').getSymbol('leftleaf2').play(0);sym.getSymbol('tree').getSymbol('leftleaf3').play(0);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'background'
(function(symbolName){})("background");
//Edge symbol end:'background'

//=========================================================

//Edge symbol: 'torch'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_torch-sprite-short-desat}","click",function(sym,e){sym.play(0);});
//Edge binding end
})("torch");
//Edge symbol end:'torch'

//=========================================================

//Edge symbol: 'petals'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
})("petals");
//Edge symbol end:'petals'

//=========================================================

//Edge symbol: 'crown'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_crown-flame-sprite-small}","click",function(sym,e){sym.play(0);});
//Edge binding end
})("crown-flame-1");
//Edge symbol end:'crown-flame-1'

//=========================================================

//Edge symbol: 'horned-god'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_horned-god-sprite-sheet4}","click",function(sym,e){sym.play(0);});
//Edge binding end
})("horned-god");
//Edge symbol end:'horned-god'

//=========================================================

//Edge symbol: 'tree'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_leftleaf}","click",function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_leftleaf}","mouseover",function(sym,e){sym.getSymbol('leftleaf').play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_leftleaf}","mouseout",function(sym,e){setTimeout(function(){sym.getSymbol('leftleaf').stop();},2000);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_leftleaf2}","mouseover",function(sym,e){sym.getSymbol('leftleaf2').play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_leftleaf2}","mouseout",function(sym,e){setTimeout(function(){sym.getSymbol('leftleaf2').stop();},2000);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_leftleaf3}","mouseover",function(sym,e){sym.getSymbol('leftleaf3').play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_leftleaf3}","mouseout",function(sym,e){setTimeout(function(){sym.getSymbol('leftleaf3').stop();},2000);});
//Edge binding end
})("tree");
//Edge symbol end:'tree'

//=========================================================

//Edge symbol: 'leftleaf'
(function(symbolName){})("leftleaf");
//Edge symbol end:'leftleaf'

//=========================================================

//Edge symbol: 'leftleaf2'
(function(symbolName){})("leftleaf2");
//Edge symbol end:'leftleaf2'

//=========================================================

//Edge symbol: 'leftleaf3'
(function(symbolName){})("leftleaf3");
//Edge symbol end:'leftleaf3'

//=========================================================

//Edge symbol: 'rightleaf1'
(function(symbolName){})("rightleaf1");
//Edge symbol end:'rightleaf1'

//=========================================================

//Edge symbol: 'rightleaf2'
(function(symbolName){})("rightleaf2");
//Edge symbol end:'rightleaf2'

//=========================================================

//Edge symbol: 'rightleaf3'
(function(symbolName){})("rightleaf3");
//Edge symbol end:'rightleaf3'

//=========================================================

//Edge symbol: 'rightleaf4'
(function(symbolName){})("rightleaf4");
//Edge symbol end:'rightleaf4'

//=========================================================

//Edge symbol: 'rightleaf5'
(function(symbolName){})("rightleaf5");
//Edge symbol end:'rightleaf5'

//=========================================================

//Edge symbol: 'rightleaf6'
(function(symbolName){})("rightleaf6");
//Edge symbol end:'rightleaf6'

//=========================================================

//Edge symbol: 'rightleaf7'
(function(symbolName){})("rightleaf7");
//Edge symbol end:'rightleaf7'
})(jQuery,AdobeEdge,"into-the-woods");