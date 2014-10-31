
var nikeFirebase;var dataSnap;if(typeof userID=='undefined'){userID='download_user_id_'+Math.floor((Math.random()*10)+1);}
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){if(jQuery.cookie('FA15-test')=='true'&&dataSnap.val()!='stop'){sym.play();}
else if(dataSnap.val()=='stop'){sym.play();}
else{sym.play('no-access');}
if(document.URL.indexOf('augmentedart')==-1){msgPt1='local';msgPt2='messages';msgPt3='here';}
if(sym.getSymbol('Message')){if(typeof(msgPt1)!==undefined){sym.getSymbol('Message').getSymbol('msgPt1').$('Text').html(msgPt1);}
if(typeof(msgPt2)!==undefined){sym.getSymbol('Message').getSymbol('msgPt2').$('Text').html(msgPt2);}
if(typeof(msgPt3)!==undefined){sym.getSymbol('Message').getSymbol('msgPt3').$('Text').html(msgPt3);}}
if(typeof(pageText)!==undefined){}
if(typeof(appName)!==undefined){}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){nikeFirebase=new Firebase("https://nike-fa15-murals.firebaseio.com");nikeFirebase.child(userID).set('play');nikeFirebase.child(userID).on("value",function(snapshot){datasnap=snapshot;if(snapshot.val()=='play'){if(jQuery.cookie('FA15-test')=='true'){sym.play();}};if(snapshot.val()=='stop'){if(jQuery.cookie('FA15-test')=='true'){sym.stop();}};if(snapshot.val()=='reset'){if(jQuery.cookie('FA15-test')=='true'){sym.play('reset');}};});if(typeof wrapped!==undefined){sym.$('Button').wrap('<a href="http://www.augmentedart.com/nike-fa15-gtm/page-content/download/" style="width:50%; height:200px; float:right;" ></a>');}
else{wrapped=true;}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",36500,function(sym,e){nikeFirebase.child(userID).set('stop');sym.stop(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Girl_trigger_area}","click",function(sym,e){if(jQuery.cookie('FA15-test')=='true'){nikeFirebase.child(userID).set('play');sym.getSymbol('Girl').getSymbol('girl_puppet_symbol_1').play(0);}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",33000,function(sym,e){});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'girl-resized_400400_symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",35000,function(sym,e){sym.play(0);});
//Edge binding end
})("Girl");
//Edge symbol end:'Girl'

//=========================================================

//Edge symbol: 'no-access-message'
(function(symbolName){})("no-access-message");
//Edge symbol end:'no-access-message'

//=========================================================

//Edge symbol: 'girl_puppet_symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2750,function(sym,e){sym.stop(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_girl_puppet}","click",function(sym,e){sym.play(0);});
//Edge binding end
})("girl_puppet_symbol_1");
//Edge symbol end:'girl_puppet_symbol_1'

//=========================================================

//Edge symbol: 'download_button_200x200px_symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",12000,function(sym,e){sym.play('loop');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_download_SEEMORE_button_200x200px}","click",function(sym,e){sym.play('loop');});
//Edge binding end
})("download_button_200x200px_symbol_1");
//Edge symbol end:'download_button_200x200px_symbol_1'

//=========================================================

//Edge symbol: 'girl-trigger-area'
(function(symbolName){})("girl-trigger-area");
//Edge symbol end:'girl-trigger-area'

//=========================================================

//Edge symbol: 'download_SEEMORE_button_200x200px_symbol_1'
(function(symbolName){})("download_SEEMORE_button_200x200px_symbol_1");
//Edge symbol end:'download_SEEMORE_button_200x200px_symbol_1'

//=========================================================

//Edge symbol: 'quote'
(function(symbolName){})("quote");
//Edge symbol end:'quote'

//=========================================================

//Edge symbol: 'Quote'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",12000,function(sym,e){sym.stop();sym.getComposition().getStage().getSymbol("Button").play(0);});
//Edge binding end
})("Quote");
//Edge symbol end:'Quote'
})(jQuery,AdobeEdge,"EDGE-116472068");