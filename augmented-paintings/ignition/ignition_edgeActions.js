
yepnope({load:["scripts/EdgeCommons.Core.js","scripts/EdgeCommons.Sound.js","scripts/EdgeCommon.style.css",],complete:function(){var assetsPath="audio/";EC.Sound.setup([{src:assetsPath+"bass.mp3",id:"bassdrum"},{src:assetsPath+"spank.mp3",id:"spank"},],function(){});}});(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;var superSpank=false;
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
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_tracer-sprite-sheet-desat}","click",function(sym,e){sym.play('left-tracer');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_right-tracer-desat}","click",function(sym,e){sym.play('right-tracer');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",33,function(sym,e){EC.Sound.stop("bassdrum")
EC.Sound.play("bassdrum");});
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
Symbol.bindElementAction(compId,symbolName,"${_large-circle-blur2}","click",function(sym,e){sym.play();});
//Edge binding end
})("large-circle");
//Edge symbol end:'large-circle'

//=========================================================

//Edge symbol: 'small-circle'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Small-Circle2}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Small-Circle-Blur2}","click",function(sym,e){sym.play();});
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
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2133,function(sym,e){if(superSpank==true){}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_spank_sprite_sheet2}","click",function(sym,e){sym.play('spank');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1466,function(sym,e){sym.getComposition().getStage().getSymbol("spanked").play();sym.getComposition().getStage().getSymbol('flames').getSymbol("flame_bg").stop('faded-out');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1533,function(sym,e){if(superSpank==true){sym.getComposition().getStage().getSymbol("flames").getSymbol("Flame1").play(0);}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1600,function(sym,e){if(superSpank==true){sym.getComposition().getStage().getSymbol("flames").getSymbol("Flame2").play(0);}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1666,function(sym,e){if(superSpank==true){sym.getComposition().getStage().getSymbol("flames").getSymbol("Flame3").play(0);}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1732,function(sym,e){if(superSpank==true){sym.getComposition().getStage().getSymbol("flames").getSymbol("Flame4").play(0);}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1800,function(sym,e){if(superSpank==true){sym.getComposition().getStage().getSymbol("flames").getSymbol("Flame5").play(0);}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3500,function(sym,e){if(superSpank==true){sym.getComposition().getStage().getSymbol('flames').getSymbol("flame_bg").stop(0);}
superSpank=false;sym.stop(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_handblast_small}","touchstart",function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_handblast_small}","mousedown",function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1101,function(sym,e){superSpank=true;});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_handblast_small}","mouseup",function(sym,e){if(superSpank==true){}
else{sym.play('spank');}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1201,function(sym,e){EC.Sound.stop('spank');EC.Sound.play('spank');});
//Edge binding end
})("spanking");
//Edge symbol end:'spanking'

//=========================================================

//Edge symbol: 'spanked'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",600,function(sym,e){sym.stop(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",200,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_spank_sprite_sheet3}","click",function(sym,e){sym.play(0);});
//Edge binding end
})("spanked");
//Edge symbol end:'spanked'

//=========================================================

//Edge symbol: 'ames'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Flame5}","mouseover",function(sym,e){sym.getSymbol("Flame5").play(0);sym.getSymbol("flame_bg").stop('faded-out');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Flame4}","mouseover",function(sym,e){sym.getSymbol("Flame4").play(0);sym.getSymbol("flame_bg").stop('faded-out');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Flame3}","mouseover",function(sym,e){sym.getSymbol("Flame3").play(0);sym.getSymbol("flame_bg").stop('faded-out');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Flame2}","mouseover",function(sym,e){sym.getSymbol("Flame2").play(0);sym.getSymbol("flame_bg").stop('faded-out');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Flame1}","mouseover",function(sym,e){sym.getSymbol("Flame1").play(0);sym.getSymbol("flame_bg").stop('faded-out');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Flame1}","touchstart",function(sym,e){sym.getSymbol("Flame1").play(0);sym.getSymbol("flame_bg").stop('faded-out');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Flame2}","touchstart",function(sym,e){sym.getSymbol("Flame2").play(0);sym.getSymbol("flame_bg").stop('faded-out');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Flame3}","touchstart",function(sym,e){sym.getSymbol("Flame3").play(0);sym.getSymbol("flame_bg").stop('faded-out');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Flame4}","touchstart",function(sym,e){sym.getSymbol("Flame4").play(0);sym.getSymbol("flame_bg").stop('faded-out');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Flame5}","touchstart",function(sym,e){sym.getSymbol("Flame5").play(0);sym.getSymbol("flame_bg").stop('faded-out');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Flame5}","touchmove",function(sym,e){sym.getSymbol("Flame5").play(0);sym.getSymbol("flame_bg").stop('faded-out');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Flame2}","touchmove",function(sym,e){sym.getSymbol("Flame2").play(0);sym.getSymbol("flame_bg").stop('faded-out');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Flame3}","touchmove",function(sym,e){sym.getSymbol("Flame3").play(0);sym.getSymbol("flame_bg").stop('faded-out');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Flame1}","touchmove",function(sym,e){sym.getSymbol("Flame1").play(0);sym.getSymbol("flame_bg").stop('faded-out');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Flame4}","touchmove",function(sym,e){sym.getSymbol("Flame4").play(0);sym.getSymbol("flame_bg").stop('faded-out');});
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

//=========================================================

//Edge symbol: 'tracer-sprite'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1900,function(sym,e){sym.play('loopStart');});
//Edge binding end
})("tracer-sprite");
//Edge symbol end:'tracer-sprite'

//=========================================================

//Edge symbol: 'tracer1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_tracer-sprite}","click",function(sym,e){sym.$('bg').fadeIn("fast");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.stop('wait');});
//Edge binding end
})("tracer1");
//Edge symbol end:'tracer1'

//=========================================================

//Edge symbol: 'tracer2'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_tracer_2}","click",function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){sym.stop('wait');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("tracer2");
//Edge symbol end:'tracer2'

//=========================================================

//Edge symbol: 'tracer3'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_tracer_3}","click",function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.stop('wait');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("tracer3");
//Edge symbol end:'tracer3'

//=========================================================

//Edge symbol: 'tracer4'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_tracer_4}","click",function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.stop('wait');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("tracer4");
//Edge symbol end:'tracer4'

//=========================================================

//Edge symbol: 'tracer5'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_tracer_5}","click",function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3533,function(sym,e){sym.stop('wait');});
//Edge binding end
})("tracer5");
//Edge symbol end:'tracer5'
})(jQuery,AdobeEdge,"EDGE-227757856");