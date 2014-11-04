
var nikeFirebase;var dataSnap;if(typeof userID=='undefined'){userID='download_user_id_'+Math.floor((Math.random()*10)+1);}
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){if(jQuery.cookie('FA15-test')=='true'&&dataSnap.val()!='stop'){sym.play();}
else if(dataSnap.val()=='stop'){sym.stop();}
else{sym.play('no-access');}
if(document.URL.indexOf('augmentedart')==-1){msgPt1='local';msgPt2='messages';msgPt3='here';}
if(sym.getSymbol('Message')){if(typeof(msgPt1)!==undefined){sym.getSymbol('Message').getSymbol('msgPt1').$('Text').html(msgPt1);}
if(typeof(msgPt2)!==undefined){sym.getSymbol('Message').getSymbol('msgPt2').$('Text').html(msgPt2);}
if(typeof(msgPt3)!==undefined){sym.getSymbol('Message').getSymbol('msgPt3').$('Text').html(msgPt3);}}
if(typeof(pageText)!==undefined){}
if(typeof(appName)!==undefined){}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){nikeFirebase=new Firebase("https://nike-fa15-murals.firebaseio.com");nikeFirebase.child(userID).set('play');nikeFirebase.child(userID).on("value",function(snapshot){datasnap=snapshot;if(snapshot.val()=='play'){if(jQuery.cookie('FA15-test')=='true'){sym.play();}};if(snapshot.val()=='stop'){if(jQuery.cookie('FA15-test')=='true'){sym.stop();}};if(snapshot.val()=='reset'){if(jQuery.cookie('FA15-test')=='true'){sym.play('reset');}};});if(typeof wrapped!==undefined){sym.$('Button').wrap('<a href="http://www.augmentedart.com/nike-fa15-gtm/page-content/manage/" style=" top:0px; left:5px; width:160px; height:160px; float:left; position:relative; " ></a>');}
else{wrapped=true;}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",39000,function(sym,e){sym.play('loop');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Athlete_Trigger}","click",function(sym,e){if(jQuery.cookie('FA15-test')=='true'){nikeFirebase.child(userID).set('play');}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3951,function(sym,e){nikeFirebase.child(userID).set('stop');sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4973,function(sym,e){sym.play('loop');});
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

//Edge symbol: 'bg-loop_400400_symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2889,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_bg-loop_400400}","click",function(sym,e){sym.play();});
//Edge binding end
})("bg-loop_400400_symbol_1");
//Edge symbol end:'bg-loop_400400_symbol_1'

//=========================================================

//Edge symbol: 'foreground_260400_symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1277,function(sym,e){sym.play(0);});
//Edge binding end
})("foreground_260400_symbol_1");
//Edge symbol end:'foreground_260400_symbol_1'

//=========================================================

//Edge symbol: 'manage_button_160x140px_symbol_1'
(function(symbolName){})("manage_button_160x140px_symbol_1");
//Edge symbol end:'manage_button_160x140px_symbol_1'
})(jQuery,AdobeEdge,"EDGE-116472068");