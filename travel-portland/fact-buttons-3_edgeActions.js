/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         fact1URL = 'http://augmentedart.com/travel-portland/fact-1/';
         sym.$('button1').append('<a class="trigger" id="button1trigger" href="'+fact1URL+'" style="display:none;" ></a>');
         
         fact2URL = 'http://augmentedart.com/travel-portland/fact-2/';
         sym.$('button2').append('<a class="trigger" id="button2trigger" href="'+fact2URL+'" style="display:none;" ></a>');
         
         tpURL = 'http://www.travelportland.com/';
         sym.$('button3').append('<a class="trigger" id="button3trigger" href="'+tpURL+'" style="display:none; " ></a>');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_logo}", "click", function(sym, e) {
         document.getElementById('button3trigger').click();
         //alert('logo');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_factButton1}", "click", function(sym, e) {
         document.getElementById('button1trigger').click();
         //alert('button1');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_factButton2}", "click", function(sym, e) {
         document.getElementById('button2trigger').click();
         //alert('button2');
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'factButton'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         sym.play('loop');

      });
      //Edge binding end

   })("factButton");
   //Edge symbol end:'factButton'

   //=========================================================
   
   //Edge symbol: 'logo'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_TP_logo}", "click", function(sym, e) {
         

      });
      //Edge binding end

   })("logo");
   //Edge symbol end:'logo'

   //=========================================================
   
   //Edge symbol: 'button1'
   (function(symbolName) {   
   
   })("button1");
   //Edge symbol end:'button1'

   //=========================================================
   
   //Edge symbol: 'button2'
   (function(symbolName) {   
   
   })("button2");
   //Edge symbol end:'button2'

   //=========================================================
   
   //Edge symbol: 'button3'
   (function(symbolName) {   
   
   })("button3");
   //Edge symbol end:'button3'

   //=========================================================
   
   //Edge symbol: 'factButton_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         sym.play('loop');

      });
         //Edge binding end

      })("factButton2");
   //Edge symbol end:'factButton2'

})(jQuery, AdobeEdge, "fact-buttons");