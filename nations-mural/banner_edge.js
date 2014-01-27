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
            id:'grey-banner_062',
            type:'image',
            rect:['0','0','320px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"grey-banner_062.png",'0px','0px']
         },
         {
            id:'banner-wave',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto'],
            clip:['rect(0px 7680pxpx 100pxpx 0px)']
         }],
         symbolInstances: [
         {
            id:'banner-wave',
            symbolName:'banner-wave'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '320px'],
            ["style", "height", '100px'],
            ["style", "overflow", 'hidden']
         ],
         "${_banner-wave}": [
            ["style", "clip", [0,320,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "opacity", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: true,
         labels: {
            "has-cookie": 1000
         },
         timeline: [
            { id: "eid1", tween: [ "style", "${_banner-wave}", "clip", [0,320,100,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,320,100,0]}], position: 0, duration: 0 },
            { id: "eid33", tween: [ "style", "${_banner-wave}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250 },
            { id: "eid34", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_banner-wave}', [] ], ""], position: 0 },
            { id: "eid35", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_banner-wave}', [] ], ""], position: 750 }         ]
      }
   }
},
"banner-wave": {
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
      rect: ['0px','0px','7680px','100px','auto','auto'],
      id: 'banner-sprite2',
      type: 'image',
      clip: ['rect(0px 320px 100px 0px)'],
      fill: ['rgba(0,0,0,0)','images/banner-sprite2.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_banner-sprite2}": [
            ["style", "top", '0px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "clip", [0,320,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '100px'],
            ["style", "width", '7680px']
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
            { id: "eid2", tween: [ "style", "${_banner-sprite2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid8", tween: [ "style", "${_banner-sprite2}", "background-position", [-320,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 127, duration: 0 },
            { id: "eid9", tween: [ "style", "${_banner-sprite2}", "background-position", [-640,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-320,0]}], position: 250, duration: 0 },
            { id: "eid10", tween: [ "style", "${_banner-sprite2}", "background-position", [-960,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-640,0]}], position: 373, duration: 0 },
            { id: "eid11", tween: [ "style", "${_banner-sprite2}", "background-position", [-1280,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-960,0]}], position: 500, duration: 0 },
            { id: "eid12", tween: [ "style", "${_banner-sprite2}", "background-position", [-1600,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1280,0]}], position: 634, duration: 0 },
            { id: "eid13", tween: [ "style", "${_banner-sprite2}", "background-position", [-1920,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1600,0]}], position: 750, duration: 0 },
            { id: "eid14", tween: [ "style", "${_banner-sprite2}", "background-position", [-2240,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1920,0]}], position: 855, duration: 0 },
            { id: "eid15", tween: [ "style", "${_banner-sprite2}", "background-position", [-2560,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2240,0]}], position: 1000, duration: 0 },
            { id: "eid16", tween: [ "style", "${_banner-sprite2}", "background-position", [-2880,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2560,0]}], position: 1128, duration: 0 },
            { id: "eid17", tween: [ "style", "${_banner-sprite2}", "background-position", [-3200,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2880,0]}], position: 1250, duration: 0 },
            { id: "eid18", tween: [ "style", "${_banner-sprite2}", "background-position", [-3520,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3200,0]}], position: 1374, duration: 0 },
            { id: "eid19", tween: [ "style", "${_banner-sprite2}", "background-position", [-3840,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3520,0]}], position: 1500, duration: 0 },
            { id: "eid20", tween: [ "style", "${_banner-sprite2}", "background-position", [-4160,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3840,0]}], position: 1627, duration: 0 },
            { id: "eid21", tween: [ "style", "${_banner-sprite2}", "background-position", [-4480,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-4160,0]}], position: 1750, duration: 0 },
            { id: "eid22", tween: [ "style", "${_banner-sprite2}", "background-position", [-4800,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-4480,0]}], position: 1882, duration: 0 },
            { id: "eid23", tween: [ "style", "${_banner-sprite2}", "background-position", [-5120,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-4800,0]}], position: 2000, duration: 0 },
            { id: "eid24", tween: [ "style", "${_banner-sprite2}", "background-position", [-5440,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-5120,0]}], position: 2124, duration: 0 },
            { id: "eid25", tween: [ "style", "${_banner-sprite2}", "background-position", [-5760,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-5440,0]}], position: 2250, duration: 0 },
            { id: "eid26", tween: [ "style", "${_banner-sprite2}", "background-position", [-6080,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-5760,0]}], position: 2382, duration: 0 },
            { id: "eid27", tween: [ "style", "${_banner-sprite2}", "background-position", [-6400,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-6080,0]}], position: 2500, duration: 0 },
            { id: "eid28", tween: [ "style", "${_banner-sprite2}", "background-position", [-6720,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-6400,0]}], position: 2636, duration: 0 },
            { id: "eid29", tween: [ "style", "${_banner-sprite2}", "background-position", [-7040,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-6720,0]}], position: 2750, duration: 0 },
            { id: "eid30", tween: [ "style", "${_banner-sprite2}", "background-position", [-7360,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-7040,0]}], position: 2887, duration: 0 }         ]
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
