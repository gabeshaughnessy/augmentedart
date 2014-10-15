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
         
         sym.$.append('<style type="text/css">	@font-face {	    font-family: "TradeGothicBoldCond";	    font-style: normal;	    src: url("/fonts/TradeGothicforNike365-BdCn.eot");	    src: url("fonts/TradeGothicforNike365-BdCn.eot?#iefix") format("eot"), url("/fonts/TradeGothicforNike365-BdCn.woff") format("woff"), url("/fonts/TradeGothicforNike365-BdCn.ttf") format("truetype"), url("/fonts/TradeGothicforNike365-BdCn.svg") format("svg");	}	body{	font-family: "TradeGothicBoldCond";	}		</style>');
         
         if(typeof(pageText) != undefined){
         sym.getSymbol('Page-text').$('Text').html(pageText);
         }
         else{
         console.log(pageText);
         }
         // insert code here

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Page-text'
   (function(symbolName) {   
   
   })("Page-text");
   //Edge symbol end:'Page-text'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-16134551");