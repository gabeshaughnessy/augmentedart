
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){if(typeof msgPt1!='undefined'){sym.$('Text').html(msgPt1);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){jQuery.cookie('FA15-test','true',{expires:4,path:'/'});if(typeof msgPt1=='undefined'){msgPt1='You can now access the interactive content in the murals, using this device.';}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Reset_device2}","click",function(sym,e){$.removeCookie('FA15-test',{path:'/'});alert('removed cookie');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-116472068");