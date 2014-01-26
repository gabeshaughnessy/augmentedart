
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){yepnope({nope:['jquery.cookie.js'],complete:init});function init(){}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){jQuery.cookie('explore_cookie','true',{expires:3,path:'/'});});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5500,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){sym.$('Congratulations').append('<p>'+jQuery.cookie('explore_cookie')+'</p>');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'abmassador'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2750,function(sym,e){sym.play(0);});
//Edge binding end
})("abmassador");
//Edge symbol end:'abmassador'

//=========================================================

//Edge symbol: 'key'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2874,function(sym,e){sym.play(0);});
//Edge binding end
})("key");
//Edge symbol end:'key'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
//Edge symbol end:'Preloader'
})(jQuery,AdobeEdge,"edge-animation");