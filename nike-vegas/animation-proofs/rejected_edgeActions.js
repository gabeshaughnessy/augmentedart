
var nikeFirebase;var dataSnap;if(typeof userID=='undefined'){userID='rejected_user_id_'+Math.floor((Math.random()*10)+1);}
else{userID='rejected_user_id_'+userID;}
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){if(jQuery.cookie('FA15-test')=='true'){if(typeof dataSnap=='undefined'){nikeFirebase.child(userID).set('play');}
else{if(dataSnap.val()!='stop'){nikeFirebase.child(userID).set('stop');sym.play();}
else if(dataSnap.val()=='stop'){sym.stop();}}}
else{sym.play('no-access');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){nikeFirebase=new Firebase("https://nike-fa15-murals.firebaseio.com");nikeFirebase.child(userID).set('play');nikeFirebase.child(userID).on("value",function(snapshot){dataSnap=snapshot;if(snapshot.val()=='play'){if(jQuery.cookie('FA15-test')=='true'){sym.play();}};if(snapshot.val()=='stop'){if(jQuery.cookie('FA15-test')=='true'){sym.stop();}};});});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",39000,function(sym,e){sym.play('loop');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7000,function(sym,e){sym.play('loop');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-116472068");