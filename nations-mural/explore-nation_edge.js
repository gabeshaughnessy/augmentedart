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
            id:'greybg_06',
            type:'image',
            rect:['13px','28px','555px','373px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"greybg_06.png",'0px','0px']
         },
         {
            id:'nation-animation',
            type:'rect',
            rect:['-23px','22px','auto','auto','auto','auto'],
            clip:['rect(0px 562.66998291016px 375px 0px)'],
            transform:[[],[],[],['0.9894','0.9894']]
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
         }],
         symbolInstances: [
         {
            id:'nation-animation',
            symbolName:'bg'
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
         "${_Boat}": [
            ["style", "opacity", '0.010662141393443']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '600px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ],
         "${_nation-animation}": [
            ["style", "top", '22px'],
            ["transform", "scaleY", '0.9894'],
            ["transform", "scaleX", '0.9894'],
            ["style", "opacity", '0.010662141393443'],
            ["style", "clip", [0,562.66998291016,375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '-23px']
         ],
         "${_greybg_06}": [
            ["style", "top", '28px'],
            ["style", "height", '373px'],
            ["style", "opacity", '1'],
            ["style", "left", '13px'],
            ["style", "width", '555px']
         ],
         "${_Zepellin}": [
            ["style", "opacity", '0.010662141393443']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         labels: {
            "cookie-check": 104,
            "has-cookie": 1000
         },
         timeline: [
            { id: "eid126", tween: [ "style", "${_nation-animation}", "opacity", '1', { fromValue: '0'}], position: 104, duration: 646 },
            { id: "eid137", tween: [ "style", "${_greybg_06}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid138", tween: [ "style", "${_greybg_06}", "opacity", '0', { fromValue: '1'}], position: 104, duration: 646 },
            { id: "eid129", tween: [ "style", "${_Boat}", "opacity", '1', { fromValue: '0.010661999695003033'}], position: 104, duration: 646 },
            { id: "eid24", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 0, duration: 0 },
            { id: "eid127", tween: [ "style", "${_Zepellin}", "opacity", '1', { fromValue: '0.010661999695003033'}], position: 104, duration: 646 },
            { id: "eid36", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Zepellin}', [0] ], ""], position: 0 },
            { id: "eid130", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_nation-animation}', [] ], ""], position: 0 },
            { id: "eid37", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Boat}', [0] ], ""], position: 0 },
            { id: "eid39", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Boat}', [0] ], ""], position: 750 },
            { id: "eid38", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Zepellin}', [0] ], ""], position: 750 },
            { id: "eid131", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_nation-animation}', [0] ], ""], position: 750 }         ]
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
},
"nation": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '14400px']
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
},
"bg": {
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
      rect: ['-225px','-22px','7200px','800px','auto','auto'],
      transform: [[],[],[],['0.93773','0.93773']],
      id: 'nation-sprite3',
      type: 'image',
      clip: ['rect(0px 600px 400px 0px)'],
      fill: ['rgba(0,0,0,0)','images/nation-sprite3.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '750px'],
            ["style", "width", '6752px']
         ],
         "${_nation-sprite3}": [
            ["style", "top", '-22px'],
            ["transform", "scaleY", '0.93773'],
            ["transform", "scaleX", '0.93773'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "clip", [0,600,400,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '-225px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: true,
         timeline: [
            { id: "eid89", tween: [ "style", "${_nation-sprite3}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid90", tween: [ "style", "${_nation-sprite3}", "background-position", [-600,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 127, duration: 0 },
            { id: "eid91", tween: [ "style", "${_nation-sprite3}", "background-position", [-1200,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-600,0]}], position: 250, duration: 0 },
            { id: "eid92", tween: [ "style", "${_nation-sprite3}", "background-position", [-1800,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1200,0]}], position: 372, duration: 0 },
            { id: "eid93", tween: [ "style", "${_nation-sprite3}", "background-position", [-2400,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1800,0]}], position: 500, duration: 0 },
            { id: "eid94", tween: [ "style", "${_nation-sprite3}", "background-position", [-3000,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2400,0]}], position: 616, duration: 0 },
            { id: "eid95", tween: [ "style", "${_nation-sprite3}", "background-position", [-3600,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3000,0]}], position: 750, duration: 0 },
            { id: "eid96", tween: [ "style", "${_nation-sprite3}", "background-position", [-4200,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3600,0]}], position: 874, duration: 0 },
            { id: "eid97", tween: [ "style", "${_nation-sprite3}", "background-position", [-4800,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-4200,0]}], position: 1000, duration: 0 },
            { id: "eid98", tween: [ "style", "${_nation-sprite3}", "background-position", [-5400,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-4800,0]}], position: 1139, duration: 0 },
            { id: "eid99", tween: [ "style", "${_nation-sprite3}", "background-position", [-6000,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-5400,0]}], position: 1250, duration: 0 },
            { id: "eid100", tween: [ "style", "${_nation-sprite3}", "background-position", [-6600,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-6000,0]}], position: 1379, duration: 0 },
            { id: "eid101", tween: [ "style", "${_nation-sprite3}", "background-position", [0,-400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-6600,0]}], position: 1500, duration: 0 },
            { id: "eid102", tween: [ "style", "${_nation-sprite3}", "background-position", [-600,-400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-7200,0]}], position: 1621, duration: 0 },
            { id: "eid103", tween: [ "style", "${_nation-sprite3}", "background-position", [-1200,-400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-7800,0]}], position: 1750, duration: 0 },
            { id: "eid104", tween: [ "style", "${_nation-sprite3}", "background-position", [-1800,-400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-8400,0]}], position: 1869, duration: 0 },
            { id: "eid105", tween: [ "style", "${_nation-sprite3}", "background-position", [-2400,-400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-9000,0]}], position: 2000, duration: 0 },
            { id: "eid106", tween: [ "style", "${_nation-sprite3}", "background-position", [-3000,-400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-9600,0]}], position: 2135, duration: 0 },
            { id: "eid107", tween: [ "style", "${_nation-sprite3}", "background-position", [-3600,-400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3000,-400]}], position: 2250, duration: 0 },
            { id: "eid108", tween: [ "style", "${_nation-sprite3}", "background-position", [-4200,-400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3600,-400]}], position: 2368, duration: 0 },
            { id: "eid109", tween: [ "style", "${_nation-sprite3}", "background-position", [-4800,-400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-4200,-400]}], position: 2500, duration: 0 },
            { id: "eid110", tween: [ "style", "${_nation-sprite3}", "background-position", [-5400,-400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-4800,-400]}], position: 2629, duration: 0 },
            { id: "eid111", tween: [ "style", "${_nation-sprite3}", "background-position", [-6000,-400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-5400,-400]}], position: 2750, duration: 0 },
            { id: "eid112", tween: [ "style", "${_nation-sprite3}", "background-position", [-6600,-400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-6000,-400]}], position: 2876, duration: 0 }         ]
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
