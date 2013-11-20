
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_spanked}","click",function(sym,e){});
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

//Edge symbol: 'background'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_bg}","click",function(sym,e){sym.$('bg').fadeToggle("fast");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Glowball-group}","click",function(sym,e){sym.$('bg').fadeIn("fast");});
//Edge binding end
})("background");
//Edge symbol end:'background'

//=========================================================

//Edge symbol: 'large-circle'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_large-circle2}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_headdress}","click",function(sym,e){sym.play()});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_small-circle}","click",function(sym,e){sym.play()});
//Edge binding end
})("large-circle");
//Edge symbol end:'large-circle'

//=========================================================

//Edge symbol: 'small-circle'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Small-Circle2}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",731,function(sym,e){sym.getComposition().getStage().getSymbol("large-circle").play(0);});
//Edge binding end
})("small-circle");
//Edge symbol end:'small-circle'

//=========================================================

//Edge symbol: 'chair'
(function(symbolName){})("chair");
//Edge symbol end:'chair'

//=========================================================

//Edge symbol: 'spanking'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",733,function(sym,e){sym.stop(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_spank_sprite_sheet2}","click",function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",301,function(sym,e){sym.getComposition().getStage().getSymbol("spanked").play();});
//Edge binding end
})("spanking");
//Edge symbol end:'spanking'

//=========================================================

//Edge symbol: 'spanked'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_spanked-woman4}","click",function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",400,function(sym,e){sym.stop(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",200,function(sym,e){sym.getComposition().getStage().getSymbol("small-circle").play(0);});
//Edge binding end
})("spanked");
//Edge symbol end:'spanked'

//=========================================================

//Edge symbol: 'ames'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Flames2}","click",function(sym,e){sym.play();});
//Edge binding end
})("ames");
//Edge symbol end:'ames'

//=========================================================

//Edge symbol: 'headdress'
(function(symbolName){})("headdress");
//Edge symbol end:'headdress'
})(jQuery,AdobeEdge,"EDGE-227757856");