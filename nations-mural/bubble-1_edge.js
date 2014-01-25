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
            id:'bubble1',
            type:'image',
            rect:['0','0','118px','103px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bubble1.png",'0px','0px']
         },
         {
            id:'Text',
            type:'text',
            rect:['10px','49px','auto','auto','auto','auto'],
            text:"Instagrams with the #explore hashtag show up here.",
            font:['architects-daughter, sans-serif',11,"rgba(51,51,51,1.00)","normal","none",""]
         },
         {
            id:'instagramslide',
            type:'rect',
            rect:['27px','42px','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'instagramslide',
            symbolName:'instagramslide'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '118px'],
            ["style", "height", '103px'],
            ["style", "overflow", 'hidden']
         ],
         "${_instagramslide}": [
            ["style", "left", '27px'],
            ["style", "top", '42px']
         ],
         "${_Text}": [
            ["style", "top", '44px'],
            ["style", "line-height", '12px'],
            ["style", "font-family", 'architects-daughter, sans-serif'],
            ["style", "width", '94px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '13px'],
            ["style", "font-size", '11px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: true,
         timeline: [
            { id: "eid13", tween: [ "style", "${_Text}", "width", '111px', { fromValue: '94px'}], position: 4156, duration: 844 },
            { id: "eid15", tween: [ "style", "${_Text}", "line-height", '13px', { fromValue: '12px'}], position: 4156, duration: 844 },
            { id: "eid10", tween: [ "style", "${_Text}", "left", '12px', { fromValue: '13px'}], position: 4000, duration: 156 },
            { id: "eid11", tween: [ "style", "${_Text}", "left", '13px', { fromValue: '12px'}], position: 4156, duration: 844 },
            { id: "eid1", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0.000000'}], position: 500, duration: 500 },
            { id: "eid7", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 4000, duration: 500 },
            { id: "eid9", tween: [ "style", "${_Text}", "top", '49px', { fromValue: '44px'}], position: 4156, duration: 844 },
            { id: "eid95", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_instagramslide}', [] ], ""], position: 0 },
            { id: "eid96", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_instagramslide}', [0] ], ""], position: 5000 }         ]
      }
   }
},
"instagramslide": {
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
      rect: ['14px','45px','46px','47px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      id: 'instagram9',
      type: 'image',
      rect: ['0px','-1px','50px','50px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/instagram9.jpg','0px','0px']
   },
   {
      id: 'instagram8',
      type: 'image',
      rect: ['0px','-1px','50px','51px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/instagram8.jpg','0px','0px']
   },
   {
      id: 'instagram7',
      type: 'image',
      rect: ['0px','-1px','52px','52px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/instagram7.jpg','0px','0px']
   },
   {
      id: 'instagram6',
      type: 'image',
      rect: ['0px','-1px','50px','50px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/instagram6.jpg','0px','0px']
   },
   {
      id: 'instagram5',
      type: 'image',
      rect: ['0px','-1px','50px','49px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/instagram5.jpg','0px','0px']
   },
   {
      id: 'instagram4',
      type: 'image',
      rect: ['0px','-1px','50px','50px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/instagram4.jpg','0px','0px']
   },
   {
      id: 'instagram3',
      type: 'image',
      rect: ['0px','-1px','52px','51px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/instagram3.jpg','0px','0px']
   },
   {
      id: 'instagram2',
      type: 'image',
      rect: ['0px','-1px','51px','50px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/instagram2.jpg','0px','0px']
   },
   {
      id: 'instagram1',
      type: 'image',
      rect: ['0px','-1px','52px','50px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/instagram1.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_instagram4}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_instagram7}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_instagram8}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_instagram6}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '52px'],
            ["style", "width", '52px']
         ],
         "${_instagram2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_instagram3}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_instagram9}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_Rectangle}": [
            ["style", "top", '3px'],
            ["style", "opacity", '0'],
            ["style", "left", '1px']
         ],
         "${_instagram1}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_instagram5}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 36000,
         autoPlay: true,
         timeline: [
            { id: "eid48", tween: [ "style", "${_instagram8}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid58", tween: [ "style", "${_instagram8}", "opacity", '0', { fromValue: '0'}], position: 500, duration: 0 },
            { id: "eid90", tween: [ "style", "${_instagram8}", "opacity", '1', { fromValue: '0'}], position: 28000, duration: 500 },
            { id: "eid93", tween: [ "style", "${_instagram8}", "opacity", '0', { fromValue: '1'}], position: 32000, duration: 500 },
            { id: "eid44", tween: [ "style", "${_instagram4}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid54", tween: [ "style", "${_instagram4}", "opacity", '0', { fromValue: '0'}], position: 500, duration: 0 },
            { id: "eid72", tween: [ "style", "${_instagram4}", "opacity", '1', { fromValue: '0'}], position: 12000, duration: 500 },
            { id: "eid75", tween: [ "style", "${_instagram4}", "opacity", '0', { fromValue: '1'}], position: 16000, duration: 500 },
            { id: "eid43", tween: [ "style", "${_instagram3}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid53", tween: [ "style", "${_instagram3}", "opacity", '0', { fromValue: '0'}], position: 500, duration: 0 },
            { id: "eid68", tween: [ "style", "${_instagram3}", "opacity", '1', { fromValue: '0.000000'}], position: 8000, duration: 500 },
            { id: "eid71", tween: [ "style", "${_instagram3}", "opacity", '0', { fromValue: '1'}], position: 12000, duration: 500 },
            { id: "eid42", tween: [ "style", "${_instagram2}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid52", tween: [ "style", "${_instagram2}", "opacity", '0', { fromValue: '0'}], position: 500, duration: 0 },
            { id: "eid64", tween: [ "style", "${_instagram2}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 500 },
            { id: "eid66", tween: [ "style", "${_instagram2}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 500 },
            { id: "eid51", tween: [ "style", "${_instagram1}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 500 },
            { id: "eid62", tween: [ "style", "${_instagram1}", "opacity", '0', { fromValue: '1'}], position: 4000, duration: 500 },
            { id: "eid47", tween: [ "style", "${_instagram7}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid57", tween: [ "style", "${_instagram7}", "opacity", '0', { fromValue: '0'}], position: 500, duration: 0 },
            { id: "eid84", tween: [ "style", "${_instagram7}", "opacity", '1', { fromValue: '0'}], position: 24000, duration: 500 },
            { id: "eid89", tween: [ "style", "${_instagram7}", "opacity", '0', { fromValue: '1'}], position: 28000, duration: 500 },
            { id: "eid50", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid60", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '0'}], position: 500, duration: 0 },
            { id: "eid49", tween: [ "style", "${_instagram9}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid59", tween: [ "style", "${_instagram9}", "opacity", '0', { fromValue: '0'}], position: 500, duration: 0 },
            { id: "eid94", tween: [ "style", "${_instagram9}", "opacity", '1', { fromValue: '0'}], position: 32000, duration: 500 },
            { id: "eid46", tween: [ "style", "${_instagram6}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid56", tween: [ "style", "${_instagram6}", "opacity", '0', { fromValue: '0'}], position: 500, duration: 0 },
            { id: "eid80", tween: [ "style", "${_instagram6}", "opacity", '1', { fromValue: '0'}], position: 20000, duration: 500 },
            { id: "eid83", tween: [ "style", "${_instagram6}", "opacity", '0', { fromValue: '1'}], position: 24000, duration: 500 },
            { id: "eid45", tween: [ "style", "${_instagram5}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid55", tween: [ "style", "${_instagram5}", "opacity", '0', { fromValue: '0'}], position: 500, duration: 0 },
            { id: "eid76", tween: [ "style", "${_instagram5}", "opacity", '1', { fromValue: '0'}], position: 16000, duration: 500 },
            { id: "eid79", tween: [ "style", "${_instagram5}", "opacity", '0', { fromValue: '1'}], position: 20000, duration: 500 }         ]
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
})(jQuery, AdobeEdge, "edge-animation");
