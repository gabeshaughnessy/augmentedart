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
         //initialise your variables and Edge comp here
         }// insert code to be run when the composition is fully loaded here
         // insert code to be run when the composition is fully loaded here
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         jQuery.cookie('explore_cookie', 'true', { expires: 3, path: '/' });
         // insert code here

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'abmassador'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);
         // insert code here

      });
      //Edge binding end

   })("abmassador");
   //Edge symbol end:'abmassador'

   //=========================================================
   
   //Edge symbol: 'key'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2874, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);
         // insert code here

      });
      //Edge binding end

   })("key");
   //Edge symbol end:'key'

})(jQuery, AdobeEdge, "edge-animation");