
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){yepnope({nope:['jquery.cookie.js','geturlparams.js'],complete:init});function init(){console.log(jQuery(document).getUrlParam('reset_cookie'));if(jQuery(document).getUrlParam('explore_cookie')!=null){jQuery.cookie('explore_cookie',jQuery(document).getUrlParam('explore_cookie'),{expires:3,path:'/'});}}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){if(jQuery.cookie('explore_cookie')=='true'){sym.play();}
else{sym.stop();}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){sym.play('has-cookie');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'banner-wave'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.play(0);});
//Edge binding end
})("banner-wave");
//Edge symbol end:'banner-wave'
})(jQuery,AdobeEdge,"edge-animation");