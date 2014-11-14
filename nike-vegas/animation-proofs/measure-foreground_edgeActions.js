
var nikeFirebase;if(typeof userID=='undefined'){userID='local_user_id_'+Math.floor((Math.random()*100)+1);}
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){if(jQuery.cookie('FA15-test')=='true'){if(typeof dataSnap=='undefined'){nikeFirebase.child(userID).set('play');}
else{if(dataSnap.val()!='stop'){nikeFirebase.child(userID).set('stop');sym.play();}
else if(dataSnap.val()=='stop'){sym.stop();}}}
else{sym.play('no-access');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){nikeFirebase=new Firebase("https://nike-fa15-murals.firebaseio.com");nikeFirebase.child(userID).set('play');nikeFirebase.child(userID).on("value",function(snapshot){dataSnap=snapshot;if(snapshot.val()=='play'){if(jQuery.cookie('FA15-test')=='true'){sym.getSymbol('Athlete').play();nikeFirebase.child(userID).set('stop');}};if(snapshot.val()=='stop'){if(jQuery.cookie('FA15-test')=='true'){sym.stop();}};if(snapshot.val()=='reset'){if(jQuery.cookie('FA15-test')=='true'){sym.getSymbol('Athlete').play('reset');}};});});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",39000,function(sym,e){sym.play('loop');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Athlete_Trigger}","click",function(sym,e){if(jQuery.cookie('FA15-test')=='true'){if(dataSnap.val()=='stop'){nikeFirebase.child(userID).set('reset');}
else{nikeFirebase.child(userID).set('play');}}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'no-access-message'
(function(symbolName){})("no-access-message");
//Edge symbol end:'no-access-message'

//=========================================================

//Edge symbol: 'fore-left_symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.stop();});
//Edge binding end
})("fore-left_symbol_1");
//Edge symbol end:'fore-left_symbol_1'

//=========================================================

//Edge symbol: 'fore-right_symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2050,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3050,function(sym,e){sym.stop(0);});
//Edge binding end
})("fore-right_symbol_1");
//Edge symbol end:'fore-right_symbol_1'
})(jQuery,AdobeEdge,"EDGE-116472068");