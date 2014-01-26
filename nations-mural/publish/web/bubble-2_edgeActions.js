
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",12500,function(sym,e){sym.play('begin');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){yepnope({nope:['jquery.cookie.js'],complete:init});function init(){}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.$('cookie-value').append('<p>Explore cookie? : '+jQuery.cookie('explore_cookie')+'</p>');if(jQuery.cookie('explore_cookie')=='true'){sym.play();}
else{sym.play('no-cookie');}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",17750,function(sym,e){sym.play('no-cookie');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",13507,function(sym,e){sym.stop();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-210503108");