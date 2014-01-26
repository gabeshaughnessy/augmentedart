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
            id:'Boat',
            type:'rect',
            rect:['451','32','auto','auto','auto','auto']
         },
         {
            id:'Zepellin',
            type:'rect',
            rect:['44','53','auto','auto','auto','auto']
         },
         {
            id:'clear-cookies',
            type:'rect',
            rect:['511','348','auto','auto','auto','auto'],
            cursor:['pointer'],
            boxShadow:["",3,3,3,0,"rgba(0,0,0,0.65)"]
         }],
         symbolInstances: [
         {
            id:'clear-cookies',
            symbolName:'clear-cookies'
         },
         {
            id:'Zepellin',
            symbolName:'Zepellin'
         },
         {
            id:'Boat',
            symbolName:'Boat'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '600px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ],
         "${_clear-cookies}": [
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "cursor", 'pointer'],
            ["subproperty", "boxShadow.offsetV", '0px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_bg}": [
            ["style", "left", '13px'],
            ["style", "top", '38px']
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
            { id: "eid30", tween: [ "subproperty", "${_clear-cookies}", "boxShadow.offsetH", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid24", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 0, duration: 0 },
            { id: "eid32", tween: [ "subproperty", "${_clear-cookies}", "boxShadow.offsetV", '0px', { fromValue: '0px'}], position: 0, duration: 0 }         ]
      }
   }
},
"Boat": {
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
      id: 'boats',
      type: 'image',
      rect: ['0px','0px','86px','37px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/boats.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_boats}": [
            ["motion", "location", '43px 18.5px'],
            ["style", "opacity", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '37px'],
            ["style", "width", '86px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: true,
         timeline: [
            { id: "eid1", tween: [ "motion", "${_boats}", [[43,18.5,0,0],[106,18.5,0,0]]], position: 0, duration: 1000 },
            { id: "eid5", tween: [ "motion", "${_boats}", [[106,17.5,0,0],[-56.99,17.5,0,0]]], position: 1250, duration: 0 },
            { id: "eid10", tween: [ "motion", "${_boats}", [[-56.99,17.5,0,0],[44.35,18.5,0,0]]], position: 1387, duration: 2613 },
            { id: "eid2", tween: [ "style", "${_boats}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid8", tween: [ "style", "${_boats}", "opacity", '1', { fromValue: '0'}], position: 1387, duration: 363 }         ]
      }
   }
},
"Zepellin": {
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
      id: 'zepellin',
      type: 'image',
      rect: ['0px','0px','44px','29px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/zepellin.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_zepellin}": [
            ["motion", "location", '22px 14.5px'],
            ["style", "opacity", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '29px'],
            ["style", "width", '44px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 9000,
         autoPlay: true,
         timeline: [
            { id: "eid13", tween: [ "motion", "${_zepellin}", [[22,14.5,0,0],[-13.52,-10.57,0,0]]], position: 0, duration: 1000 },
            { id: "eid22", tween: [ "motion", "${_zepellin}", [[223.19,246.24,-129.57,-148.67],[22.1,15.5,0,0]]], position: 1250, duration: 7750, easing: "easeInQuad" },
            { id: "eid14", tween: [ "style", "${_zepellin}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid19", tween: [ "style", "${_zepellin}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 250 }         ]
      }
   }
},
"clear-cookies": {
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
      rect: ['0px','0px','33px','33px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['0px','1px','33px','29px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
      id: 'Text',
      text: '<br>clear cookie',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '33px']
         ],
         "${_Text}": [
            ["style", "top", '1px'],
            ["style", "text-align", 'center'],
            ["style", "line-height", '8px'],
            ["style", "left", '0px'],
            ["style", "font-size", '9px']
         ],
         "${symbolSelector}": [
            ["style", "height", '33px'],
            ["style", "width", '33px']
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
