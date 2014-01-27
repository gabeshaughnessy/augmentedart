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
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         yepnope(
         {
         nope:[
         'jquery.cookie.js'
         ],
         complete: init
         }
         );
         //when yepnope has loaded everything execute init();
         function init (){
         if(jQuery.cookie('explore_cookie') == 'true'){
         // play the timeline from the given position (ms or label)
          sym.play();
         }
         else{
          sym.stop();
         }// insert code here
         
         //initialise your variables and Edge comp here
         }// insert code to be run when the composition is fully loaded here
         // insert code to be run when the composition is fully loaded here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 104, function(sym, e) {
         sym.stop();
         if(jQuery.cookie('explore_cookie') == 'true'){
         // play the timeline from the given position (ms or label)
          sym.play();
         }
         else{
         }// insert code here
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Boat'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("Boat");
   //Edge symbol end:'Boat'

   //=========================================================
   
   //Edge symbol: 'Zepellin'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("Zepellin");
   //Edge symbol end:'Zepellin'

   //=========================================================
   
   //Edge symbol: 'clear-cookies'
   (function(symbolName) {   
   
   })("clear-cookies");
   //Edge symbol end:'clear-cookies'

   //=========================================================
   
   //Edge symbol: 'nation'
   (function(symbolName) {   
   
   })("nation");
   //Edge symbol end:'nation'

   //=========================================================
   
   //Edge symbol: 'bg'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);
         // insert code here

      });
      //Edge binding end

   })("bg");
   //Edge symbol end:'bg'

   //=========================================================
   
   //Edge symbol: 'zepelin'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);
         // insert code here

      });
      //Edge binding end

   })("zepelin");
   //Edge symbol end:'zepelin'

})(jQuery, AdobeEdge, "edge-animate");