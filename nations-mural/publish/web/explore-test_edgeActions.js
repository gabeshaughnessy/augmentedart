
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_clear-cookies}","click",function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){yepnope({nope:['jquery.cookie.js'],complete:init});function init(){}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_clear-cookies}","mousedown",function(sym,e){jQuery.cookie('explore_cookie','false',{expires:3,path:'/'});});
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
})(jQuery,AdobeEdge,"edge-animate");