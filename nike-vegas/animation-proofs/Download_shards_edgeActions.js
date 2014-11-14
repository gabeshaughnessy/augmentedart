
var nikeFirebase;var dataSnap;if(typeof userID=='undefined'){userID='download_user_id_'+Math.floor((Math.random()*10)+1);}
else{userID='download_user_id_'+userID;}
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){if(jQuery.cookie('FA15-test')=='true'){if(typeof dataSnap=='undefined'){nikeFirebase.child(userID).set('play');}
else{if(dataSnap.val()!='stop'){nikeFirebase.child(userID).set('stop');sym.play();}
else if(dataSnap.val()=='stop'){sym.stop();}}}
else{sym.play('no-access');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){nikeFirebase=new Firebase("https://nike-fa15-murals.firebaseio.com");nikeFirebase.child(userID).set('play');nikeFirebase.child(userID).on("value",function(snapshot){dataSnap=snapshot;if(snapshot.val()=='play'){if(jQuery.cookie('FA15-test')=='true'){sym.getSymbol('Button').play();sym.getSymbol('Shards').play('reset');nikeFirebase.child(userID).set('stop');}};if(snapshot.val()=='stop'){if(jQuery.cookie('FA15-test')=='true'){sym.stop();}};if(snapshot.val()=='reset'){if(jQuery.cookie('FA15-test')=='true'){sym.getSymbol('Button').play('reset');sym.getSymbol('Shards').play('reset');}};});if(typeof wrapped!==undefined){sym.$('Button').wrap('<a href="http://www.augmentedart.com/nike-fa15-gtm/page-content/download/" style="width:200px; height:200px; position:relative; top:5px; right:0px; float:right;" ></a>');}
else{wrapped=true;}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",39000,function(sym,e){sym.play('loop');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Athlete_Trigger}","click",function(sym,e){if(jQuery.cookie('FA15-test')=='true'){if(dataSnap.val()=='stop'){nikeFirebase.child(userID).set('reset');}
else{nikeFirebase.child(userID).set('play');}}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'background-sprite_symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2300,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4800,function(sym,e){sym.stop(0);});
//Edge binding end
})("background-sprite_symbol_1");
//Edge symbol end:'background-sprite_symbol_1'

//=========================================================

//Edge symbol: 'foreground_symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3050,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4457,function(sym,e){sym.stop(0);});
//Edge binding end
})("foreground_symbol_1");
//Edge symbol end:'foreground_symbol_1'

//=========================================================

//Edge symbol: 'get-more-btn_symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8683,function(sym,e){sym.stop(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7900,function(sym,e){sym.play('loop');});
//Edge binding end
})("get-more-btn_symbol_1");
//Edge symbol end:'get-more-btn_symbol_1'

//=========================================================

//Edge symbol: 'shards_symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3042,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4442,function(sym,e){sym.stop(0);});
//Edge binding end
})("shards_symbol_1");
//Edge symbol end:'shards_symbol_1'

//=========================================================

//Edge symbol: 'girl-no-shards_symbol_1'
(function(symbolName){})("girl-no-shards_symbol_1");
//Edge symbol end:'girl-no-shards_symbol_1'
})(jQuery,AdobeEdge,"EDGE-116472068");