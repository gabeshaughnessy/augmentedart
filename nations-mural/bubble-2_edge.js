/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['architects-daughter, sans-serif']='<script src=\"http://use.edgefonts.net/architects-daughter:n4:all.js\"></script>';


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
            id:'bubble2',
            type:'image',
            rect:['0','0px','235px','110px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bubble2.png",'0px','0px']
         },
         {
            id:'tweet',
            type:'image',
            rect:['14px','32px','208px','35px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"tweet.png",'0px','0px'],
            transform:[[],['-4'],[],[],['0%']]
         },
         {
            id:'Text',
            type:'text',
            rect:['15px','35px','208px','35px','auto','auto'],
            opacity:0,
            text:"Tweets with the #explore hashtag show up here",
            font:['architects-daughter, sans-serif',13,"rgba(51,51,51,1.00)","normal","none",""],
            transform:[[],['-6'],[],[],['0%']]
         },
         {
            id:'tweet23',
            type:'image',
            rect:['13px','29px','202px','38px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"tweet2.png",'0px','0px'],
            transform:[[],['-4'],[],[],['0%']]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "opacity", '0'],
            ["style", "top", '35px'],
            ["transform", "rotateZ", '-6deg'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-family", 'architects-daughter, sans-serif'],
            ["style", "left", '15px'],
            ["style", "font-size", '13px']
         ],
         "${_bubble2}": [
            ["style", "top", '0px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '235px'],
            ["style", "height", '110px'],
            ["style", "overflow", 'hidden']
         ],
         "${_tweet}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '32px'],
            ["transform", "rotateZ", '-4deg'],
            ["style", "height", '35px'],
            ["style", "opacity", '0'],
            ["style", "left", '14px'],
            ["style", "width", '208px']
         ],
         "${_tweet23}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '29px'],
            ["transform", "rotateZ", '-4deg'],
            ["style", "height", '38px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '13px'],
            ["style", "width", '202px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 12500,
         autoPlay: true,
         labels: {
            "begin": 2000
         },
         timeline: [
            { id: "eid2", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0.000000'}], position: 2000, duration: 500 },
            { id: "eid4", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 500 },
            { id: "eid9", tween: [ "style", "${_tweet23}", "opacity", '1', { fromValue: '0.000000'}], position: 9000, duration: 500 },
            { id: "eid7", tween: [ "style", "${_tweet23}", "opacity", '0', { fromValue: '1'}], position: 12000, duration: 500 },
            { id: "eid6", tween: [ "style", "${_tweet}", "opacity", '1', { fromValue: '0.000000'}], position: 6000, duration: 500 },
            { id: "eid8", tween: [ "style", "${_tweet}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 500 }         ]
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
})(jQuery, AdobeEdge, "EDGE-210503108");
