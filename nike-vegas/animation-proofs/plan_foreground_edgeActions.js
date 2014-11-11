
var nikeFirebase;var dataSnap;if(typeof userID=='undefined'){userID='plan_user_id_'+Math.floor((Math.random()*10)+1);}
else{userID='plan_user_id_'+userID;}
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){if(jQuery.cookie('FA15-test')=='true'){if(typeof dataSnap=='undefined'){nikeFirebase.child(userID).set('play');}
else{if(dataSnap.val()!='stop'){nikeFirebase.child(userID).set('stop');sym.play();}
else if(dataSnap.val()=='stop'){sym.stop();}}}
else{sym.play('no-access');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){nikeFirebase=new Firebase("https://nike-fa15-murals.firebaseio.com");nikeFirebase.child(userID).set('play');nikeFirebase.child(userID).on("value",function(snapshot){dataSnap=snapshot;if(snapshot.val()=='play'){if(jQuery.cookie('FA15-test')=='true'){sym.getSymbol('Athlete').play();sym.getSymbol('Button').play();nikeFirebase.child(userID).set('stop');}};if(snapshot.val()=='stop'){if(jQuery.cookie('FA15-test')=='true'){sym.stop();}};if(snapshot.val()=='reset'){if(jQuery.cookie('FA15-test')=='true'){sym.getSymbol('Athlete').play('reset');sym.getSymbol('Button').play('reset');}};});if(typeof wrapped!==undefined){sym.$('Button').wrap('<a href="http://www.augmentedart.com/nike-fa15-gtm/page-content/plan/" style="width:180px; height:150px; margin-top: 266px; float:right;" ></a>');}
else{wrapped=true;}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",39000,function(sym,e){sym.play('loop');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Athlete_Trigger}","click",function(sym,e){if(jQuery.cookie('FA15-test')=='true'){if(dataSnap.val()=='stop'){nikeFirebase.child(userID).set('reset');}
else{nikeFirebase.child(userID).set('play');}}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7000,function(sym,e){sym.play('loop');});
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
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",14250,function(sym,e){sym.play('loop');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9900,function(sym,e){sym.play('loop');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",13000,function(sym,e){sym.stop(0);});
//Edge binding end
})("download_button_200x200px_symbol_1");
//Edge symbol end:'download_button_200x200px_symbol_1'

//=========================================================

//Edge symbol: 'dribble-sprite_symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2850,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){sym.stop(0);});
//Edge binding end
})("dribble-sprite_symbol_1");
//Edge symbol end:'dribble-sprite_symbol_1'

//=========================================================

//Edge symbol: 'bg_sprite_symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1100,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1929,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5250,function(sym,e){sym.stop(0);});
//Edge binding end
})("bg_sprite_symbol_1");
//Edge symbol end:'bg_sprite_symbol_1'

//=========================================================

//Edge symbol: 'athlete_sprite_400400_symbol_1'
(function(symbolName){})("athlete_sprite_400400_symbol_1");
//Edge symbol end:'athlete_sprite_400400_symbol_1'

//=========================================================

//Edge symbol: 'bg-sprite_symbol_2'
(function(symbolName){})("bg-sprite_symbol_2");
//Edge symbol end:'bg-sprite_symbol_2'

//=========================================================

//Edge symbol: 'butt_sprite_symbol_1'
(function(symbolName){})("butt_sprite_symbol_1");
//Edge symbol end:'butt_sprite_symbol_1'
})(jQuery,AdobeEdge,"EDGE-116472068");