
var nikeFirebase;var dataSnap;if(typeof userID=='undefined'){userID='assort_user_id_'+Math.floor((Math.random()*10)+1);}
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){if(jQuery.cookie('FA15-test')=='true'){if(typeof dataSnap=='undefined'){nikeFirebase.child(userID).set('play');}
else{if(dataSnap.val()!='stop'){nikeFirebase.child(userID).set('stop');sym.play();}
else if(dataSnap.val()=='stop'){sym.stop();}}}
else{sym.play('no-access');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){nikeFirebase=new Firebase("https://nike-fa15-murals.firebaseio.com");nikeFirebase.child(userID).set('play');nikeFirebase.child(userID).on("value",function(snapshot){dataSnap=snapshot;if(snapshot.val()=='play'){if(jQuery.cookie('FA15-test')=='true'){sym.getSymbol('Athlete').play();sym.getSymbol('BG').play();sym.getSymbol('Button').play('loop');nikeFirebase.child(userID).set('stop');}};if(snapshot.val()=='stop'){if(jQuery.cookie('FA15-test')=='true'){sym.stop();}};if(snapshot.val()=='reset'){if(jQuery.cookie('FA15-test')=='true'){sym.play('reset');}};});if(typeof wrapped!==undefined){sym.$('Button').wrap('<a href="http://www.augmentedart.com/nike-fa15-gtm/page-content/download/" style="left:5px; top:10px; width:150px; height:150px; position:relative; float:left;" ></a>');}
else{wrapped=true;}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",39000,function(sym,e){sym.play('loop');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Athlete_Trigger}","click",function(sym,e){if(jQuery.cookie('FA15-test')=='true'){if(dataSnap.val()=='play'){nikeFirebase.child(userID).set('stop');}
else{nikeFirebase.child(userID).set('play');}}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",697,function(sym,e){sym.stop();nikeFirebase.child(userID).set('stop');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1357,function(sym,e){sym.stop(0);nikeFirebase.child(userID).set('stop');});
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
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",12000,function(sym,e){sym.play('loop');});
//Edge binding end
})("download_button_200x200px_symbol_1");
//Edge symbol end:'download_button_200x200px_symbol_1'

//=========================================================

//Edge symbol: 'assort_background_400400_symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",666,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1277,function(sym,e){sym.play(0);});
//Edge binding end
})("assort_background_400400_symbol_1");
//Edge symbol end:'assort_background_400400_symbol_1'

//=========================================================

//Edge symbol: 'assort_foreground_400400_symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",666,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1277,function(sym,e){sym.play(0);});
//Edge binding end
})("assort_foreground_400400_symbol_1");
//Edge symbol end:'assort_foreground_400400_symbol_1'

//=========================================================

//Edge symbol: 'assort_button_200x146px_symbol_1'
(function(symbolName){})("assort_button_200x146px_symbol_1");
//Edge symbol end:'assort_button_200x146px_symbol_1'
})(jQuery,AdobeEdge,"EDGE-116472068");