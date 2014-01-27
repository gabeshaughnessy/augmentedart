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
            id:'tweet-bubble2',
            type:'image',
            rect:['0','0','235px','109px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"tweet-bubble2.svg",'0px','0px']
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
            id:'TextCopy',
            type:'text',
            rect:['15px','35px','208px','35px','auto','auto'],
            text:"Look for a portrait of our Ambassador and scan it with the layar app. Then come back and scan this mural again!",
            font:['architects-daughter, sans-serif',13,"rgba(51,51,51,1.00)","normal","none",""],
            transform:[[],['-6']]
         },
         {
            id:'Text4',
            type:'text',
            rect:['10px','27px','195px','25px','auto','auto'],
            opacity:0,
            text:"Interact with the Ambassador to unlock this nation. ",
            align:"left",
            font:['architects-daughter, sans-serif',11,"rgba(51,51,51,1)","700","none","normal"],
            transform:[[],['-7'],[],[],['0%']]
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
         "${_Text4}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-7deg'],
            ["style", "font-weight", '700'],
            ["style", "left", '10px'],
            ["style", "width", '195px'],
            ["style", "top", '27px'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "height", '25px'],
            ["style", "font-size", '11px']
         ],
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
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '235px'],
            ["style", "height", '110px'],
            ["style", "overflow", 'hidden']
         ],
         "${_TextCopy}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-6deg'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '15px'],
            ["style", "font-size", '8px'],
            ["style", "top", '57px'],
            ["style", "height", '35px'],
            ["style", "font-family", 'architects-daughter, sans-serif'],
            ["style", "width", '212px']
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
         duration: 17750,
         autoPlay: true,
         labels: {
            "cookie-check": 1000,
            "begin": 2000,
            "no-cookie": 13007
         },
         timeline: [
            { id: "eid14", tween: [ "style", "${_TextCopy}", "left", '15px', { fromValue: '15px'}], position: 13507, duration: 0 },
            { id: "eid6", tween: [ "style", "${_tweet}", "opacity", '1', { fromValue: '0.000000'}], position: 6000, duration: 500 },
            { id: "eid8", tween: [ "style", "${_tweet}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 500 },
            { id: "eid9", tween: [ "style", "${_tweet23}", "opacity", '1', { fromValue: '0.000000'}], position: 9000, duration: 500 },
            { id: "eid7", tween: [ "style", "${_tweet23}", "opacity", '0', { fromValue: '1'}], position: 12000, duration: 500 },
            { id: "eid24", tween: [ "style", "${_TextCopy}", "width", '212px', { fromValue: '212px'}], position: 13507, duration: 0 },
            { id: "eid15", tween: [ "style", "${_TextCopy}", "top", '57px', { fromValue: '57px'}], position: 13507, duration: 0 },
            { id: "eid36", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0'}], position: 13007, duration: 500 },
            { id: "eid35", tween: [ "style", "${_Text4}", "opacity", '0', { fromValue: '1'}], position: 17250, duration: 500 },
            { id: "eid16", tween: [ "style", "${_TextCopy}", "height", '35px', { fromValue: '35px'}], position: 13507, duration: 0 },
            { id: "eid12", tween: [ "style", "${_TextCopy}", "opacity", '1', { fromValue: '0.000000'}], position: 13007, duration: 500 },
            { id: "eid13", tween: [ "style", "${_TextCopy}", "opacity", '0', { fromValue: '1'}], position: 17007, duration: 500 },
            { id: "eid2", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0.000000'}], position: 2000, duration: 500 },
            { id: "eid4", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 500 },
            { id: "eid11", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 0, duration: 0 },
            { id: "eid10", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 12500, duration: 0 },
            { id: "eid17", tween: [ "style", "${_TextCopy}", "font-size", '8px', { fromValue: '8px'}], position: 13507, duration: 0 }         ]
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
