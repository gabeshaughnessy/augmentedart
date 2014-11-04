
var nikeFirebase;(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){if(jQuery.cookie('FA15-test')=='true'){sym.play();}
else{sym.play('no-access');}
if(document.URL.indexOf('augmentedart')==-1){msgPt1='local';msgPt2='messages';msgPt3='here';}
if(sym.getSymbol('Message')){if(typeof(msgPt1)!==undefined){sym.getSymbol('Message').getSymbol('msgPt1').$('Text').html(msgPt1);}
if(typeof(msgPt2)!==undefined){sym.getSymbol('Message').getSymbol('msgPt2').$('Text').html(msgPt2);}
if(typeof(msgPt3)!==undefined){sym.getSymbol('Message').getSymbol('msgPt3').$('Text').html(msgPt3);}}
if(typeof(pageText)!==undefined){}
if(typeof(appName)!==undefined){}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){nikeFirebase=new Firebase("https://nike-fa15-murals.firebaseio.com");nikeFirebase.child("reset").on("value",function(snapshot){if(snapshot.val()==true){sym.play('reset');};});if(typeof wrapped!==undefined){sym.$('Button').wrap('<a href="http://www.augmentedart.com/nike-fa15-gtm/page-content/present/" style="width:50%; height:200px; float:right;" ></a>');}
else{wrapped=true;}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",39000,function(sym,e){sym.play('loop');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Athlete_Trigger}","click",function(sym,e){if(jQuery.cookie('FA15-test')=='true'){sym.getSymbol('Athlete').play(0);}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'no-access-message'
(function(symbolName){})("no-access-message");
//Edge symbol end:'no-access-message'

//=========================================================

//Edge symbol: 'ladder_athlete_sprite_symbol_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_foreground_400px_400400}","click",function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3976,function(sym,e){sym.play('loop');});
//Edge binding end
})("ladder_athlete_sprite_symbol_1");
//Edge symbol end:'ladder_athlete_sprite_symbol_1'

//=========================================================

//Edge symbol: 'present_button_99x97px_symbol_1'
(function(symbolName){})("present_button_99x97px_symbol_1");
//Edge symbol end:'present_button_99x97px_symbol_1'

//=========================================================

//=========================================================

//Edge symbol: 'download_button_200x200px_symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",12000,function(sym,e){sym.play('loop');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_present_button_99x97pxCopy}","click",function(sym,e){sym.play('loop');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5500,function(sym,e){sym.play('loop');});
//Edge binding end
})("download_button_200x200px_symbol_1");
//Edge symbol end:'download_button_200x200px_symbol_1'

//=========================================================

//Edge symbol: 'foreground_400px_400400_symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3976,function(sym,e){sym.lay('loop');});
//Edge binding end
})("foreground_400px_400400_symbol_1");
//Edge symbol end:'foreground_400px_400400_symbol_1'
})(jQuery,AdobeEdge,"EDGE-116472068");