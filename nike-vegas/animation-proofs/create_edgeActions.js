
var nikeFirebase;var dataSnap;if(typeof userID=='undefined'){userID='create_user_id_'+Math.floor((Math.random()*10)+1);}
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){if(jQuery.cookie('FA15-test')=='true'){if(typeof dataSnap=='undefined'){nikeFirebase.child(userID).set('play');}
else{if(dataSnap.val()!='stop'){nikeFirebase.child(userID).set('stop');sym.play();}
else if(dataSnap.val()=='stop'){sym.stop();}}}
else{sym.play('no-access');}
if(document.URL.indexOf('augmentedart')==-1){msgPt1='local';msgPt2='messages';msgPt3='here';}
if(sym.getSymbol('Message')){if(typeof(msgPt1)!==undefined){sym.getSymbol('Message').getSymbol('msgPt1').$('Text').html(msgPt1);}
if(typeof(msgPt2)!==undefined){sym.getSymbol('Message').getSymbol('msgPt2').$('Text').html(msgPt2);}
if(typeof(msgPt3)!==undefined){sym.getSymbol('Message').getSymbol('msgPt3').$('Text').html(msgPt3);}}
if(typeof(pageText)!==undefined){}
if(typeof(appName)!==undefined){}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){nikeFirebase=new Firebase("https://nike-fa15-murals.firebaseio.com");nikeFirebase.child(userID).set('play');nikeFirebase.child(userID).on("value",function(snapshot){dataSnap=snapshot;if(snapshot.val()=='play'){if(jQuery.cookie('FA15-test')=='true'){sym.getSymbol('athlete').play();sym.getSymbol('bg').play();sym.getSymbol('shards').play();sym.getSymbol('Button').play('loop');nikeFirebase.child(userID).set('stop');}};if(snapshot.val()=='stop'){if(jQuery.cookie('FA15-test')=='true'){sym.stop();}};if(snapshot.val()=='reset'){if(jQuery.cookie('FA15-test')=='true'){sym.play('reset');}};});if(typeof wrapped!==undefined){sym.$('Button').wrap('<a href="http://www.augmentedart.com/nike-fa15-gtm/page-content/create/" style=" left: 0px; top: 0px; width:160px; height:160px; float:left; position:relative;" ></a>');}
else{wrapped=true;}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",39000,function(sym,e){sym.play('loop');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Athlete_Trigger}","click",function(sym,e){if(jQuery.cookie('FA15-test')=='true'){if(dataSnap.val()=='play'){nikeFirebase.child(userID).set('stop');}
else{nikeFirebase.child(userID).set('play');}}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'no-access-message'
(function(symbolName){})("no-access-message");
//Edge symbol end:'no-access-message'

//=========================================================

//=========================================================

//Edge symbol: 'download_button_200x200px_symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",11165,function(sym,e){sym.play('loop');});
//Edge binding end
})("download_button_200x200px_symbol_1");
//Edge symbol end:'download_button_200x200px_symbol_1'

//=========================================================

//Edge symbol: 'create_bg_400400_symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1166,function(sym,e){sym.play(0);});
//Edge binding end
})("create_bg_400400_symbol_1");
//Edge symbol end:'create_bg_400400_symbol_1'

//=========================================================

//Edge symbol: 'create_athlete_400400_symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",166,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1166,function(sym,e){sym.play(0);});
//Edge binding end
})("create_athlete_400400_symbol_1");
//Edge symbol end:'create_athlete_400400_symbol_1'

//=========================================================

//Edge symbol: 'create_shards400400_symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",166,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1166,function(sym,e){sym.play(0);});
//Edge binding end
})("create_shards400400_symbol_1");
//Edge symbol end:'create_shards400400_symbol_1'

//=========================================================

//Edge symbol: 'create_button_160x121px_symbol_1'
(function(symbolName){})("create_button_160x121px_symbol_1");
//Edge symbol end:'create_button_160x121px_symbol_1'
})(jQuery,AdobeEdge,"EDGE-116472068");