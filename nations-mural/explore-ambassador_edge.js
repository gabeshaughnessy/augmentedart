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
            id:'ambassador',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto'],
            clip:['rect(0px 4800pxpx 1080pxpx 0px)']
         }],
         symbolInstances: [
         {
            id:'ambassador',
            symbolName:'ambassador'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '400px'],
            ["style", "height", '540px'],
            ["style", "overflow", 'hidden']
         ],
         "${_ambassador}": [
            ["style", "clip", [0,400,540,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
            { id: "eid67", tween: [ "style", "${_ambassador}", "clip", [0,400,540,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,400,540,0]}], position: 0, duration: 0 }         ]
      }
   }
},
"ambassador": {
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
      rect: ['0px','0px','4800px','1080px','auto','auto'],
      id: 'ambassador-sprite',
      type: 'image',
      clip: ['rect(0px 400px 540px 0px)'],
      fill: ['rgba(0,0,0,0)','images/ambassador-sprite.png','0px','0px']
   },
   {
      rect: ['0','0','4800px','1080px','auto','auto'],
      id: 'ambassador-sprite22',
      type: 'image',
      clip: ['rect(0px 400px 540px 0px)'],
      fill: ['rgba(0,0,0,0)','images/ambassador-sprite2.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_ambassador-sprite22}": [
            ["style", "clip", [0,400,540,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '1080px'],
            ["style", "width", '4800px']
         ],
         "${_ambassador-sprite}": [
            ["style", "top", '0px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "clip", [0,400,540,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: true,
         labels: {
            "loop point": 1381
         },
         timeline: [
            { id: "eid29", tween: [ "style", "${_ambassador-sprite22}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid30", tween: [ "style", "${_ambassador-sprite22}", "background-position", [-400,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 126, duration: 0 },
            { id: "eid31", tween: [ "style", "${_ambassador-sprite22}", "background-position", [-800,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-400,0]}], position: 250, duration: 0 },
            { id: "eid32", tween: [ "style", "${_ambassador-sprite22}", "background-position", [-1200,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-800,0]}], position: 388, duration: 0 },
            { id: "eid33", tween: [ "style", "${_ambassador-sprite22}", "background-position", [-1600,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1200,0]}], position: 500, duration: 0 },
            { id: "eid34", tween: [ "style", "${_ambassador-sprite22}", "background-position", [-2000,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1600,0]}], position: 655, duration: 0 },
            { id: "eid35", tween: [ "style", "${_ambassador-sprite22}", "background-position", [-2400,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2000,0]}], position: 750, duration: 0 },
            { id: "eid36", tween: [ "style", "${_ambassador-sprite22}", "background-position", [-2800,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2400,0]}], position: 890, duration: 0 },
            { id: "eid37", tween: [ "style", "${_ambassador-sprite22}", "background-position", [-3200,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2800,0]}], position: 1000, duration: 0 },
            { id: "eid38", tween: [ "style", "${_ambassador-sprite22}", "background-position", [-3600,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3200,0]}], position: 1142, duration: 0 },
            { id: "eid39", tween: [ "style", "${_ambassador-sprite22}", "background-position", [-4000,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3600,0]}], position: 1250, duration: 0 },
            { id: "eid40", tween: [ "style", "${_ambassador-sprite22}", "background-position", [-4400,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-4000,0]}], position: 1381, duration: 0 },
            { id: "eid41", tween: [ "style", "${_ambassador-sprite22}", "background-position", [0,-540], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-4400,0]}], position: 1500, duration: 0 },
            { id: "eid42", tween: [ "style", "${_ambassador-sprite22}", "background-position", [-400,-540], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-540]}], position: 1624, duration: 0 },
            { id: "eid43", tween: [ "style", "${_ambassador-sprite22}", "background-position", [-800,-540], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-400,-540]}], position: 1750, duration: 0 },
            { id: "eid44", tween: [ "style", "${_ambassador-sprite22}", "background-position", [-1200,-540], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-800,-540]}], position: 1875, duration: 0 },
            { id: "eid45", tween: [ "style", "${_ambassador-sprite22}", "background-position", [-1600,-540], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1200,-540]}], position: 2000, duration: 0 },
            { id: "eid46", tween: [ "style", "${_ambassador-sprite22}", "background-position", [-2000,-540], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1600,-540]}], position: 2147, duration: 0 },
            { id: "eid47", tween: [ "style", "${_ambassador-sprite22}", "background-position", [-2400,-540], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2000,-540]}], position: 2250, duration: 0 },
            { id: "eid48", tween: [ "style", "${_ambassador-sprite22}", "background-position", [-2800,-540], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2400,-540]}], position: 2375, duration: 0 },
            { id: "eid49", tween: [ "style", "${_ambassador-sprite22}", "background-position", [-3200,-540], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2800,-540]}], position: 2500, duration: 0 },
            { id: "eid50", tween: [ "style", "${_ambassador-sprite22}", "background-position", [-3600,-540], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3200,-540]}], position: 2650, duration: 0 },
            { id: "eid51", tween: [ "style", "${_ambassador-sprite22}", "background-position", [-4000,-540], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3600,-540]}], position: 2750, duration: 0 },
            { id: "eid52", tween: [ "style", "${_ambassador-sprite22}", "background-position", [-4400,-540], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-4000,-540]}], position: 2874, duration: 0 },
            { id: "eid53", tween: [ "style", "${_ambassador-sprite22}", "background-position", [-4400,-540], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-4400,-540]}], position: 3000, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-294667248");
