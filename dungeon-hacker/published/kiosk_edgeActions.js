
$.urlParam=function(name){var results=new RegExp('[\?&]'+name+'=([^&#]*)').exec(window.location.href);if(results==null){return null;}
else{return results[1]||0;}}
var firebaseRef=new Firebase('https://dungeon-hacker.firebaseio.com/');var messages=["Enter the Fray","Crawl the Dungeon","Play the Game","Roll the Dice","Find Enchanted Items","Bring your Friends","Grok the Source"];var messageDate=" on Feb. 5th, 2015 from 6 - 9PM";var message="";firebaseRef.child('kiosk').child('messages').on('value',function(snapshot){messages=snapshot.val();});firebaseRef.child('kiosk').child('messageDate').on('value',function(snapshot){messageDate=snapshot.val();});(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",14118,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){someRandomNumber=Math.floor(Math.random()*messages.length);message=messages[someRandomNumber]+messageDate;sym.$('Message').html(message);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){if($.urlParam('mirrored')!=null){sym.$('body').css('transform','rotateY(180deg)');}
sym.$('body, html').css('background-color','#000');sym.$('head').append('<meta name="apple-mobile-web-app-capable" content="yes" /><meta name="viewport" content="width=device-width" /><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//=========================================================

//Edge symbol: 'dice-roll-sprite_symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",927,function(sym,e){diceValue=Math.floor(Math.random()*20)+1;sym.stop("frame-"+diceValue);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
})("dice-roll-sprite_symbol_1");
//Edge symbol end:'dice-roll-sprite_symbol_1'
})(jQuery,AdobeEdge,"kiosk");