
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_spanked}","click",function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){});
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
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",731,function(sym,e){});
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
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1233,function(sym,e){sym.getComposition().getStage().getSymbol("small-circle").play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_spank_sprite_sheet2}","click",function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",267,function(sym,e){sym.getComposition().getStage().getSymbol("spanked").play();sym.getComposition().getStage().getSymbol('flames').getSymbol("flame_bg").stop('faded-out');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",633,function(sym,e){sym.getComposition().getStage().getSymbol("flames").getSymbol("Flame1").play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",700,function(sym,e){sym.getComposition().getStage().getSymbol("flames").getSymbol("Flame2").play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",766,function(sym,e){sym.getComposition().getStage().getSymbol("flames").getSymbol("Flame3").play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",832,function(sym,e){sym.getComposition().getStage().getSymbol("flames").getSymbol("Flame4").play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",900,function(sym,e){sym.getComposition().getStage().getSymbol("flames").getSymbol("Flame5").play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",967,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.getComposition().getStage().getSymbol('flames').getSymbol("flame_bg").stop(0);sym.stop(0);});
//Edge binding end
})("spanking");
//Edge symbol end:'spanking'

//=========================================================

//Edge symbol: 'spanked'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_spanked-woman4}","click",function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",400,function(sym,e){sym.stop(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",200,function(sym,e){});
//Edge binding end
})("spanked");
//Edge symbol end:'spanked'

//=========================================================

//Edge symbol: 'ames'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Flame5}","mouseover",function(sym,e){sym.getSymbol("Flame5").play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Flame4}","mouseover",function(sym,e){sym.getSymbol("Flame4").play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Flame3}","mouseover",function(sym,e){sym.getSymbol("Flame3").play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Flame2}","mouseover",function(sym,e){sym.getSymbol("Flame2").play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Flame1}","mouseover",function(sym,e){sym.getSymbol("Flame1").play(0);sym.getSymbol("flame_bg").stop('faded-out');});
//Edge binding end
})("ames");
//Edge symbol end:'ames'

//=========================================================

//Edge symbol: 'headdress'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.stop(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_headdress2}","click",function(sym,e){sym.play();});
//Edge binding end
})("headdress");
//Edge symbol end:'headdress'

//=========================================================

//Edge symbol: 'triangle'
(function(symbolName){})("triangle");
//Edge symbol end:'triangle'

//=========================================================

//Edge symbol: 'Flame_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1300,function(sym,e){sym.stop(0);});
//Edge binding end
})("Flame_1");
//Edge symbol end:'Flame_1'

//=========================================================

//Edge symbol: 'Flame1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1300,function(sym,e){sym.stop(0);});
//Edge binding end
})("Flame1");
//Edge symbol end:'Flame1'

//=========================================================

//Edge symbol: 'Flame2'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1300,function(sym,e){sym.stop(0);});
//Edge binding end
})("Flame2");
//Edge symbol end:'Flame2'

//=========================================================

//Edge symbol: 'Flame3'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1300,function(sym,e){sym.stop(0);});
//Edge binding end
})("Flame3");
//Edge symbol end:'Flame3'

//=========================================================

//Edge symbol: 'Flame4'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1300,function(sym,e){sym.stop(0);});
//Edge binding end
})("Flame4");
//Edge symbol end:'Flame4'

//=========================================================

//Edge symbol: 'Flame5'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1300,function(sym,e){sym.stop(0);});
//Edge binding end
})("Flame5");
//Edge symbol end:'Flame5'

//=========================================================

//Edge symbol: 'flame_bg'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Flames2}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",67,function(sym,e){sym.stop();});
//Edge binding end
})("flame_bg");
//Edge symbol end:'flame_bg'
})(jQuery,AdobeEdge,"EDGE-227757856");