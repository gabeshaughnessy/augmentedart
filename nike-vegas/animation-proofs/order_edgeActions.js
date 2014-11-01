
var nikeFirebase;var dataSnap;if(typeof userID=='undefined'){userID='order_user_id_'+Math.floor((Math.random()*10)+1);}
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){if(jQuery.cookie('FA15-test')=='true'){if(typeof dataSnap=='undefined'){nikeFirebase.child(userID).set('play');}
else{if(dataSnap.val()!='stop'){nikeFirebase.child(userID).set('stop');sym.play();}
else if(dataSnap.val()=='stop'){sym.stop();}}}
else{sym.play('no-access');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){nikeFirebase=new Firebase("https://nike-fa15-murals.firebaseio.com");nikeFirebase.child(userID).set('play');nikeFirebase.child(userID).on("value",function(snapshot){dataSnap=snapshot;if(snapshot.val()=='play'){if(jQuery.cookie('FA15-test')=='true'){sym.play();sym.getSymbol('Athlete').play();sym.getSymbol('bg').play(0);sym.getSymbol('Button').play('reset');}};if(snapshot.val()=='stop'){if(jQuery.cookie('FA15-test')=='true'){sym.stop();}};if(snapshot.val()=='reset'){if(jQuery.cookie('FA15-test')=='true'){sym.play('reset');}};});if(typeof wrapped!==undefined){sym.$('Button').wrap('<a href="http://www.augmentedart.com/nike-fa15-gtm/page-content/download/" style="width:99px; height:97px; top:260px; left:34px; position:relative; float:left;" ></a>');}
else{wrapped=true;}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",39000,function(sym,e){sym.play('loop');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Athlete_Trigger}","click",function(sym,e){if(jQuery.cookie('FA15-test')=='true'){nikeFirebase.child(userID).set('play');}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){nikeFirebase.child(userID).set('stop');sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1167,function(sym,e){nikeFirebase.child(userID).set('stop');sym.stop(0);});
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

//Edge symbol: 'Order_foreground_400400_symbol_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Order_foreground_400400}","click",function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",715,function(sym,e){sym.stop();});
//Edge binding end
})("Order_foreground_400400_symbol_1");
//Edge symbol end:'Order_foreground_400400_symbol_1'

//=========================================================

//Edge symbol: 'order_button_99x97px_symbol_1'
(function(symbolName){})("order_button_99x97px_symbol_1");
//Edge symbol end:'order_button_99x97px_symbol_1'

//=========================================================

//Edge symbol: 'order_bg_400400_symbol_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_order_bg_400400}","click",function(sym,e){sym.play('loop');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2437,function(sym,e){sym.play('loop');});
//Edge binding end
})("order_bg_400400_symbol_1");
//Edge symbol end:'order_bg_400400_symbol_1'
})(jQuery,AdobeEdge,"EDGE-116472068");