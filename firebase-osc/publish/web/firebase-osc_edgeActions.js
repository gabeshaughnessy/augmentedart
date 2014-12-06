
var oscFirebase;var dataSnap;var testing=true;if(testing==true){userID='test_user';}
if(typeof userID=='undefined'){userID='user_'+Math.floor((Math.random()*10)+1);}
else{userID='user_'+userID;}
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){oscFirebase=new Firebase("https://osc-controller.firebaseio.com/");oscFirebase.child(userID).child('control1').on("value",function(snapshot){dataSnap=snapshot;});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button1}","click",function(sym,e){if(dataSnap.child('args').val()==1){oscFirebase.child(userID).child('control1').child('args').set(0);}
else{oscFirebase.child(userID).child('control1').child('args').set(1);}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'button1'
(function(symbolName){})("button1");
//Edge symbol end:'button1'
})(jQuery,AdobeEdge,"EDGE-77361997");