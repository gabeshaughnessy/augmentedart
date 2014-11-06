
var nikeFirebase;(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){if(jQuery.cookie('FA15-test')=='true'){sym.play();}
else{sym.play('no-access');}
nikeFirebase.set({reset:false});if(document.URL.indexOf('augmentedart')==-1){msgPt1='local';msgPt2='messages';msgPt3='here';}
if(sym.getSymbol('Message')){if(typeof(msgPt1)!==undefined){sym.getSymbol('Message').getSymbol('msgPt1').$('Text').html(msgPt1);}
if(typeof(msgPt2)!==undefined){sym.getSymbol('Message').getSymbol('msgPt2').$('Text').html(msgPt2);}
if(typeof(msgPt3)!==undefined){sym.getSymbol('Message').getSymbol('msgPt3').$('Text').html(msgPt3);}}
if(typeof(pageText)!==undefined){}
if(typeof(appName)!==undefined){}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){nikeFirebase=new Firebase("https://nike-fa15-murals.firebaseio.com");nikeFirebase.child("reset").on("value",function(snapshot){if(snapshot.val()==true){sym.play('reset');};});if(typeof wrapped!==undefined){sym.$('Button').wrap('<a href="http://www.augmentedart.com/nike-fa15-gtm/page-content/download/" style="width:50%; height:200px; float:right;" ></a>');}
else{wrapped=true;}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",39000,function(sym,e){sym.play('loop');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Loop_Trigger}","click",function(sym,e){sym.getSymbol('Athlete').play('reset');sym.getSymbol('BG').play();sym.getSymbol('orb1').play('reset');sym.getSymbol('orb2').play('reset');sym.getSymbol('orb3').play('reset');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'no-access-message'
(function(symbolName){})("no-access-message");
//Edge symbol end:'no-access-message'

//=========================================================

//Edge symbol: 'intro1-bg_400400_symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2333,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){sym.stop(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
})("intro1-bg_400400_symbol_1");
//Edge symbol end:'intro1-bg_400400_symbol_1'

//=========================================================

//Edge symbol: 'athlete250400_symbol_1'
(function(symbolName){var loopCount=0;var hasReset=false;Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5000,function(sym,e){console.log('loopcount',loopCount);if(loopCount<4){loopCount++;sym.play('pause');}
else{loopCount=0;sym.play('loop');}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){sym.stop(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5500,function(sym,e){if(hasReset!=true){hasReset=true;sym.play();}
else{hasReset=false;sym.play(0);}});
//Edge binding end
})("athlete250400_symbol_1");
//Edge symbol end:'athlete250400_symbol_1'

//=========================================================

//Edge symbol: 'orb-sprite_180180_symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.play('loop');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2583,function(sym,e){sym.play('loop');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_orb-sprite_180180}","click",function(sym,e){sym.play('spin');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){sym.play(0);});
//Edge binding end
})("orb-sprite_180180_symbol_1");
//Edge symbol end:'orb-sprite_180180_symbol_1'
})(jQuery,AdobeEdge,"EDGE-116472068");