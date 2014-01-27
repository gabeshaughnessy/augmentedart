
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){yepnope({nope:['jquery.cookie.js'],complete:init});function init(){if(jQuery.cookie('explore_cookie')=='true'){sym.play();}
else{sym.stop();}}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",104,function(sym,e){sym.stop();if(jQuery.cookie('explore_cookie')=='true'){sym.play();}
else{}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Boat'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){sym.play(0);});
//Edge binding end
})("Boat");
//Edge symbol end:'Boat'

//=========================================================

//Edge symbol: 'Zepellin'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9000,function(sym,e){sym.play(0);});
//Edge binding end
})("Zepellin");
//Edge symbol end:'Zepellin'

//=========================================================

//Edge symbol: 'clear-cookies'
(function(symbolName){})("clear-cookies");
//Edge symbol end:'clear-cookies'

//=========================================================

//Edge symbol: 'nation'
(function(symbolName){})("nation");
//Edge symbol end:'nation'

//=========================================================

//Edge symbol: 'bg'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.play(0);});
//Edge binding end
})("bg");
//Edge symbol end:'bg'

//=========================================================

//Edge symbol: 'zepelin'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9000,function(sym,e){sym.play(0);});
//Edge binding end
})("zepelin");
//Edge symbol end:'zepelin'
})(jQuery,AdobeEdge,"edge-animate");