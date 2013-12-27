
(function($,Edge,compId){function animateSpriteSheet(sym,spriteSheetName,spriteWidth,spriteHeight,spriteFrames){var currentPos=parseInt(sym.$(spriteSheetName).css('backgroundPositionX'),10);var newPos=currentPos-spriteWidth;if(newPos>=-1*(spriteWidth*spriteFrames)){setTimeout(function(){sym.$(spriteSheetName).css('backgroundPositionX',newPos);},15);}}
var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_petals}","click",function(sym,e){sym.getComposition().getStage().getSymbol('petals').play('fade start');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_petal-trigger}","click",function(sym,e){sym.getComposition().getStage().getSymbol('petals').play('fade start');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_crown_flame_1}","click",function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_tree}","click",function(sym,e){sym.getSymbol('tree').play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_horned-god-symbol}","click",function(sym,e){sym.getSymbol('horned-god-symbol').play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_head2}","click",function(sym,e){setTimeout(function(){sym.getSymbol('crown-flame-17').play(0);},100);setTimeout(function(){sym.getSymbol('crown-flame-13').play(0);},200);setTimeout(function(){sym.getSymbol('crown-flame-12').play(0);},300);setTimeout(function(){sym.getSymbol('crown-flame-1').play(0);},400);setTimeout(function(){sym.getSymbol('crown_flame_1').play(0);},500);setTimeout(function(){sym.getSymbol('crown-flame-14').play(0);},600);setTimeout(function(){sym.getSymbol('crown-flame-15').play(0);},700);setTimeout(function(){sym.getSymbol('crown-flame-16').play(0);},800);setTimeout(function(){sym.getSymbol('crown-flame-18').play(0);},900);});
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
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4449,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4800,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","play",function(sym,e){});
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
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getSymbol('eye-sprite').play(0);});
//Edge binding end
})("horned-god");
//Edge symbol end:'horned-god'

//=========================================================

//Edge symbol: 'tree'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.stop(0);});
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

//=========================================================

//Edge symbol: 'eye-sprite'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","update",function(sym,e){animateSpriteSheet(sym,'eye_sprite_sheet_small2',50,25,51);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){sym.stop(0);});
//Edge binding end
})("eye-sprite");
//Edge symbol end:'eye-sprite'

//=========================================================

//Edge symbol: 'triad-sprite'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","update",function(sym,e){animateSpriteSheet(sym,'first-triad-sprite-sheet_small',100,100,60);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.getComposition().getStage().getSymbol('triad-sprite-2').play(0);});
//Edge binding end
})("triad-sprite");
//Edge symbol end:'triad-sprite'

//=========================================================

//Edge symbol: 'triad-sprite-2'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","update",function(sym,e){animateSpriteSheet(sym,'second-triad-sprite-sheet_small',120,120,120);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.stop(0);});
//Edge binding end
})("triad-sprite-2");
//Edge symbol end:'triad-sprite-2'

//=========================================================

//Edge symbol: 'sparkle-sprite'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","update",function(sym,e){animateSpriteSheet(sym,'triad-sparkles-sprite-small',120,120,60);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){sym.stop(0);});
//Edge binding end
})("sparkle-sprite");
//Edge symbol end:'sparkle-sprite'

//=========================================================

//Edge symbol: 'horned-god-symbol'
(function(symbolName){})("horned-god-symbol");
//Edge symbol end:'horned-god-symbol'
})(jQuery,AdobeEdge,"into-the-woods");