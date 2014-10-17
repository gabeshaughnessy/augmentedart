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
         //global variables hold content form WordPress
         //pageText = the_content
         //appName = app name field
         //msgPt1, msgPt2 are the message text
         //introMessages is an array of objects, each one has a pt1, pt2 and pt3 key
         
         if(typeof(pageText) !== undefined){
         sym.getSymbol('Page-text').$('Text').html(pageText);
         }
         if(typeof(appName) !== undefined){
         sym.getSymbol('appName').$('Text').html(appName);
         }
         if(typeof(msgPt1) !== undefined){
         sym.getSymbol('msgPt1').$('Text').html(msgPt1);
         }
         if(typeof(msgPt2) !== undefined){
         sym.getSymbol('msgPt2').$('Text').html(msgPt2);
         }
         
         // insert code here
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'explosion_small_symbol_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${explosion_small}", "click", function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("explosion_small_symbol_1");
   //Edge symbol end:'explosion_small_symbol_1'

   //=========================================================
   
   //Edge symbol: 'explosion_tiny_symbol_1'
   (function(symbolName) {   
   
   })("explosion_tiny_symbol_1");
   //Edge symbol end:'explosion_tiny_symbol_1'

   //=========================================================
   
   //Edge symbol: 'Page-text'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3975, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("Page-text");
   //Edge symbol end:'Page-text'

   //=========================================================
   
   //Edge symbol: 'Page-text_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3975, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      })("msgPt1");
   //Edge symbol end:'msgPt1'

   //=========================================================
   
   //Edge symbol: 'msgPt1_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3975, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      })("msgPt2");
   //Edge symbol end:'msgPt2'

   //=========================================================
   
   //Edge symbol: 'msgPt2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3975, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      })("appName");
   //Edge symbol end:'appName'

})(jQuery, AdobeEdge, "EDGE-16444553");