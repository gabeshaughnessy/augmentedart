/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['metamorphous, serif']='<script src=\"http://use.edgefonts.net/metamorphous:n4:all.js\"></script>';


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
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'key',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto'],
            clip:['rect(0px 2400pxpx 420pxpx 0px)']
         },
         {
            id:'Congratulations',
            type:'text',
            rect:['23px','22px','393px','92px','auto','auto'],
            opacity:0,
            text:"CONGRATULATIONS!",
            font:['metamorphous, serif',32,"rgba(250,245,193,1.00)","700","none",""],
            textShadow:["rgba(0,0,0,0.65)",-1,2,3]
         },
         {
            id:'Unlocked_my_nation',
            type:'text',
            rect:['22px','543px','393px','92px','auto','auto'],
            opacity:0,
            text:"You unlocked my Nation!",
            font:['metamorphous, serif',25,"rgba(250,245,193,1.00)","700","none",""],
            textShadow:["rgba(254,253,253,0.99)",0,-1,0],
            transform:[]
         }],
         symbolInstances: [
         {
            id:'key',
            symbolName:'key'
         },
         {
            id:'ambassador',
            symbolName:'abmassador'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Unlocked_my_nation}": [
            ["subproperty", "textShadow.blur", '0px'],
            ["subproperty", "textShadow.offsetH", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["color", "color", 'rgba(250,245,193,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '22px'],
            ["style", "font-size", '25px'],
            ["style", "top", '543px'],
            ["style", "opacity", '0'],
            ["style", "font-family", 'metamorphous, serif'],
            ["subproperty", "textShadow.offsetV", '-1px'],
            ["subproperty", "textShadow.color", 'rgba(254,253,253,0.99)']
         ],
         "${_ambassador}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px']
         ],
         "${_Congratulations}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '-1px'],
            ["color", "color", 'rgba(250,245,193,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '23px'],
            ["style", "font-size", '32px'],
            ["style", "top", '22px'],
            ["style", "opacity", '0'],
            ["style", "font-family", 'metamorphous, serif'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
            ["subproperty", "textShadow.offsetV", '2px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '420px'],
            ["style", "height", '601px'],
            ["style", "overflow", 'hidden']
         ],
         "${_key}": [
            ["style", "top", '148px'],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "-webkit-transform-origin", [2,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [2,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [2,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [2,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [2,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "clip", [0,200,420,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '120px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5500,
         autoPlay: true,
         timeline: [
            { id: "eid67", tween: [ "transform", "${_key}", "scaleY", '1', { fromValue: '0'}], position: 2000, duration: 1000, easing: "easeOutBack" },
            { id: "eid76", tween: [ "style", "${_Unlocked_my_nation}", "opacity", '0', { fromValue: '0'}], position: 3000, duration: 0, easing: "easeOutBack" },
            { id: "eid81", tween: [ "style", "${_Unlocked_my_nation}", "opacity", '1', { fromValue: '0.000000'}], position: 5000, duration: 500, easing: "easeOutBack" },
            { id: "eid66", tween: [ "transform", "${_key}", "scaleX", '1', { fromValue: '0'}], position: 2000, duration: 1000, easing: "easeOutBack" },
            { id: "eid77", tween: [ "style", "${_Congratulations}", "opacity", '0', { fromValue: '0'}], position: 3000, duration: 0, easing: "easeOutBack" },
            { id: "eid79", tween: [ "style", "${_Congratulations}", "opacity", '1', { fromValue: '0.000000'}], position: 3500, duration: 500, easing: "easeOutBack" },
            { id: "eid73", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_key}', [] ], ""], position: 0 },
            { id: "eid74", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_key}', [0] ], ""], position: 2000 }         ]
      }
   }
},
"abmassador": {
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
      rect: ['0px','0px','5040px','601px','auto','auto'],
      id: 'ambassador-sprite',
      type: 'image',
      clip: ['rect(0px 420px 601px 0px)'],
      fill: ['rgba(0,0,0,0)','images/ambassador-sprite.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '601px'],
            ["style", "width", '5040px']
         ],
         "${_ambassador-sprite}": [
            ["style", "top", '0px'],
            ["transform", "scaleX", '0.99762'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "clip", [0,420,601,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '-5px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2750,
         autoPlay: true,
         timeline: [
            { id: "eid15", tween: [ "style", "${_ambassador-sprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid16", tween: [ "style", "${_ambassador-sprite}", "background-position", [-420,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 125, duration: 0 },
            { id: "eid17", tween: [ "style", "${_ambassador-sprite}", "background-position", [-840,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-420,0]}], position: 250, duration: 0 },
            { id: "eid18", tween: [ "style", "${_ambassador-sprite}", "background-position", [-1260,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-840,0]}], position: 376, duration: 0 },
            { id: "eid19", tween: [ "style", "${_ambassador-sprite}", "background-position", [-1680,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1260,0]}], position: 500, duration: 0 },
            { id: "eid20", tween: [ "style", "${_ambassador-sprite}", "background-position", [-2100,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1680,0]}], position: 635, duration: 0 },
            { id: "eid21", tween: [ "style", "${_ambassador-sprite}", "background-position", [-2520,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2100,0]}], position: 750, duration: 0 },
            { id: "eid22", tween: [ "style", "${_ambassador-sprite}", "background-position", [-2940,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2520,0]}], position: 872, duration: 0 },
            { id: "eid23", tween: [ "style", "${_ambassador-sprite}", "background-position", [-3360,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2940,0]}], position: 1000, duration: 0 },
            { id: "eid24", tween: [ "style", "${_ambassador-sprite}", "background-position", [-3780,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3360,0]}], position: 1112, duration: 0 },
            { id: "eid25", tween: [ "style", "${_ambassador-sprite}", "background-position", [-4200,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3780,0]}], position: 1250, duration: 0 },
            { id: "eid26", tween: [ "style", "${_ambassador-sprite}", "background-position", [-4620,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-4200,0]}], position: 1396, duration: 0 },
            { id: "eid27", tween: [ "style", "${_ambassador-sprite}", "background-position", [-4200,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-4620,0]}], position: 1500, duration: 0 },
            { id: "eid28", tween: [ "style", "${_ambassador-sprite}", "background-position", [-3780,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-4200,0]}], position: 1630, duration: 0 },
            { id: "eid29", tween: [ "style", "${_ambassador-sprite}", "background-position", [-3360,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3780,0]}], position: 1750, duration: 0 },
            { id: "eid30", tween: [ "style", "${_ambassador-sprite}", "background-position", [-2940,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3360,0]}], position: 1885, duration: 0 },
            { id: "eid31", tween: [ "style", "${_ambassador-sprite}", "background-position", [-2520,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2940,0]}], position: 2000, duration: 0 },
            { id: "eid32", tween: [ "style", "${_ambassador-sprite}", "background-position", [-2100,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2520,0]}], position: 2129, duration: 0 },
            { id: "eid33", tween: [ "style", "${_ambassador-sprite}", "background-position", [-1680,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2100,0]}], position: 2250, duration: 0 },
            { id: "eid34", tween: [ "style", "${_ambassador-sprite}", "background-position", [-1260,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1680,0]}], position: 2373, duration: 0 },
            { id: "eid35", tween: [ "style", "${_ambassador-sprite}", "background-position", [-840,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1260,0]}], position: 2500, duration: 0 },
            { id: "eid36", tween: [ "style", "${_ambassador-sprite}", "background-position", [-420,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-840,0]}], position: 2624, duration: 0 }         ]
      }
   }
},
"key": {
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
      rect: ['0px','0px','2400px','420px','auto','auto'],
      id: 'key-sprite',
      type: 'image',
      clip: ['rect(0px 200px 420px 0px)'],
      fill: ['rgba(0,0,0,0)','images/key-sprite.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_key-sprite}": [
            ["style", "top", '0px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "clip", [0,200,420,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '420px'],
            ["style", "width", '2400px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2874,
         autoPlay: true,
         timeline: [
            { id: "eid38", tween: [ "style", "${_key-sprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid39", tween: [ "style", "${_key-sprite}", "background-position", [-200,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 115, duration: 0 },
            { id: "eid40", tween: [ "style", "${_key-sprite}", "background-position", [-400,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-200,0]}], position: 250, duration: 0 },
            { id: "eid41", tween: [ "style", "${_key-sprite}", "background-position", [-600,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-400,0]}], position: 382, duration: 0 },
            { id: "eid42", tween: [ "style", "${_key-sprite}", "background-position", [-800,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-600,0]}], position: 500, duration: 0 },
            { id: "eid43", tween: [ "style", "${_key-sprite}", "background-position", [-1000,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-800,0]}], position: 629, duration: 0 },
            { id: "eid44", tween: [ "style", "${_key-sprite}", "background-position", [-1000,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1000,0]}], position: 750, duration: 0 },
            { id: "eid45", tween: [ "style", "${_key-sprite}", "background-position", [-1200,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1000,0]}], position: 883, duration: 0 },
            { id: "eid46", tween: [ "style", "${_key-sprite}", "background-position", [-1400,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1200,0]}], position: 1000, duration: 0 },
            { id: "eid47", tween: [ "style", "${_key-sprite}", "background-position", [-1600,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1400,0]}], position: 1127, duration: 0 },
            { id: "eid48", tween: [ "style", "${_key-sprite}", "background-position", [-1800,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1600,0]}], position: 1250, duration: 0 },
            { id: "eid49", tween: [ "style", "${_key-sprite}", "background-position", [-2000,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1800,0]}], position: 1379, duration: 0 },
            { id: "eid50", tween: [ "style", "${_key-sprite}", "background-position", [-2200,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2000,0]}], position: 1500, duration: 0 },
            { id: "eid51", tween: [ "style", "${_key-sprite}", "background-position", [-200,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2200,0]}], position: 1630, duration: 0 },
            { id: "eid52", tween: [ "style", "${_key-sprite}", "background-position", [-1800,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2400,0]}], position: 1750, duration: 0 },
            { id: "eid53", tween: [ "style", "${_key-sprite}", "background-position", [-1600,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1800,0]}], position: 1881, duration: 0 },
            { id: "eid54", tween: [ "style", "${_key-sprite}", "background-position", [-1400,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1600,0]}], position: 2000, duration: 0 },
            { id: "eid55", tween: [ "style", "${_key-sprite}", "background-position", [-1200,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1400,0]}], position: 2130, duration: 0 },
            { id: "eid56", tween: [ "style", "${_key-sprite}", "background-position", [-1000,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1200,0]}], position: 2250, duration: 0 },
            { id: "eid57", tween: [ "style", "${_key-sprite}", "background-position", [-800,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1000,0]}], position: 2381, duration: 0 },
            { id: "eid58", tween: [ "style", "${_key-sprite}", "background-position", [-600,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-800,0]}], position: 2500, duration: 0 },
            { id: "eid59", tween: [ "style", "${_key-sprite}", "background-position", [-400,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-600,0]}], position: 2634, duration: 0 },
            { id: "eid60", tween: [ "style", "${_key-sprite}", "background-position", [-200,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-400,0]}], position: 2750, duration: 0 }         ]
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
