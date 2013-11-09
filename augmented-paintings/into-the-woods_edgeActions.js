
function animateSprite(sym,e,frames,Fwidth,Fheight,rep,compName){currentFrame=Math.floor(e.elapsed/e.timeline.fps);var x=(currentFrame)%rep*Fwidth*-1;var y=Math.floor((currentFrame)/rep)*Fheight*-1;sym.$(compName).css('background-position-x',x);sym.$(compName).css('background-position-y',y);if(currentFrame-frames>=0){}}
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Into-the-Woods-woman}","click",function(sym,e){sym.play(4251);});
//Edge binding end
Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","update",function(sym,e){animateSprite(sym,e,60,150,100,6,'explosion_tiny2');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4173,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Explosion}","click",function(sym,e){sym.play(0);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-75241278");