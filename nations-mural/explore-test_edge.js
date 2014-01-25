/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'bg',
            type:'image',
            rect:['13px','38px','550px','357px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bg.png",'0px','0px']
         },
         {
            id:'banner',
            type:'image',
            rect:['3px','-40px','344px','99px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"banner.png",'0px','0px']
         },
         {
            id:'boats',
            type:'image',
            rect:['451px','32px','86px','37px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"boats.png",'0px','0px']
         },
         {
            id:'bubble1',
            type:'image',
            rect:['13px','297px','118px','103px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bubble1.png",'0px','0px']
         },
         {
            id:'bubble2',
            type:'image',
            rect:['352px','-45px','235px','110px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bubble2.png",'0px','0px']
         },
         {
            id:'zepellin',
            type:'image',
            rect:['44px','53px','44px','29px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"zepellin.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_bg}": [
            ["style", "left", '13px'],
            ["style", "top", '38px']
         ],
         "${_zepellin}": [
            ["style", "top", '53px'],
            ["style", "left", '44px']
         ],
         "${_bubble1}": [
            ["style", "left", '13px'],
            ["style", "top", '297px']
         ],
         "${_bubble2}": [
            ["style", "left", '352px'],
            ["style", "top", '-45px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '600px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ],
         "${_boats}": [
            ["style", "left", '451px'],
            ["style", "top", '32px']
         ],
         "${_banner}": [
            ["style", "top", '-40px'],
            ["style", "left", '3px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "edge-animate");
