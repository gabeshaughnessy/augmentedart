/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'diceRoll',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'diceRoll',
                symbolName: 'dice-roll-sprite_symbol_1'
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '200px'],
                ["style", "height", '200px'],
                ["style", "overflow", 'hidden']
            ],
            "${_diceRoll}": [
                ["style", "left", '6px'],
                ["style", "top", '2px']
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
                { id: "eid3", tween: [ "style", "${_diceRoll}", "left", '6px', { fromValue: '6px'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_diceRoll}", "top", '2px', { fromValue: '2px'}], position: 0, duration: 0 }            ]
        }
    }
},
"dice-roll-sprite_symbol_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'dice-roll-sprite',
                    type: 'image',
                    rect: ['0px', '0px', '935px', '990px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/dice-roll-sprite3.png', '0px', '0px', '935px', '990px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_dice-roll-sprite}": [
                ["style", "top", '0px'],
                ["style", "background-position", [-561,-594], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '198px'],
                ["style", "background-size", [935,990], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "width", '187px']
            ],
            "${symbolSelector}": [
                ["style", "height", '198px'],
                ["style", "width", '187px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2583,
            autoPlay: false,
            labels: {
                "roll": 83,
                "loop": 927,
                "frame-1": 1000,
                "frame-2": 1083,
                "frame-3": 1166,
                "frame-4": 1250,
                "frame-5": 1333,
                "frame-6": 1416,
                "frame-7": 1500,
                "frame-8": 1583,
                "frame-9": 1666,
                "frame-10": 1750,
                "frame-11": 1833,
                "frame-12": 1916,
                "frame-13": 2000,
                "frame-14": 2083,
                "frame-15": 2166,
                "frame-16": 2250,
                "frame-17": 2333,
                "frame-18": 2416,
                "frame-19": 2500,
                "frame-20": 2583
            },
            timeline: [
                { id: "eid54", tween: [ "style", "${_dice-roll-sprite}", "width", '187px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid53", tween: [ "style", "${_dice-roll-sprite}", "height", '198px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid51", tween: [ "style", "${_dice-roll-sprite}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid74", tween: [ "style", "${_dice-roll-sprite}", "background-position", [-748,-594], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-561,-594]}], position: 0, duration: 0 },
                { id: "eid75", tween: [ "style", "${_dice-roll-sprite}", "background-position", [0,-792], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-748,-594]}], position: 83, duration: 0 },
                { id: "eid76", tween: [ "style", "${_dice-roll-sprite}", "background-position", [-187,-792], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-792]}], position: 167, duration: 0 },
                { id: "eid77", tween: [ "style", "${_dice-roll-sprite}", "background-position", [-374,-792], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-187,-792]}], position: 250, duration: 0 },
                { id: "eid78", tween: [ "style", "${_dice-roll-sprite}", "background-position", [-561,-792], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-374,-792]}], position: 333, duration: 0 },
                { id: "eid79", tween: [ "style", "${_dice-roll-sprite}", "background-position", [-748,-792], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-561,-792]}], position: 417, duration: 0 },
                { id: "eid106", tween: [ "style", "${_dice-roll-sprite}", "background-position", [0,-792], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-748,-792]}], position: 500, duration: 0 },
                { id: "eid108", tween: [ "style", "${_dice-roll-sprite}", "background-position", [-374,-792], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-187,-792]}], position: 594, duration: 0 },
                { id: "eid114", tween: [ "style", "${_dice-roll-sprite}", "background-position", [-187,-792], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-374,-792]}], position: 675, duration: 0 },
                { id: "eid109", tween: [ "style", "${_dice-roll-sprite}", "background-position", [-561,-792], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-187,-792]}], position: 750, duration: 0 },
                { id: "eid110", tween: [ "style", "${_dice-roll-sprite}", "background-position", [-748,-792], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-561,-792]}], position: 834, duration: 0 },
                { id: "eid113", tween: [ "style", "${_dice-roll-sprite}", "background-position", [-561,-792], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-748,-792]}], position: 927, duration: 0 },
                { id: "eid80", tween: [ "style", "${_dice-roll-sprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-561,-792]}], position: 1000, duration: 0 },
                { id: "eid81", tween: [ "style", "${_dice-roll-sprite}", "background-position", [-187,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1083, duration: 0 },
                { id: "eid82", tween: [ "style", "${_dice-roll-sprite}", "background-position", [-374,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-187,0]}], position: 1166, duration: 0 },
                { id: "eid83", tween: [ "style", "${_dice-roll-sprite}", "background-position", [-561,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-374,0]}], position: 1250, duration: 0 },
                { id: "eid84", tween: [ "style", "${_dice-roll-sprite}", "background-position", [-748,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-561,0]}], position: 1333, duration: 0 },
                { id: "eid85", tween: [ "style", "${_dice-roll-sprite}", "background-position", [0,-198], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-748,0]}], position: 1416, duration: 0 },
                { id: "eid86", tween: [ "style", "${_dice-roll-sprite}", "background-position", [-187,-198], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-198]}], position: 1500, duration: 0 },
                { id: "eid87", tween: [ "style", "${_dice-roll-sprite}", "background-position", [-374,-198], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-187,-198]}], position: 1583, duration: 0 },
                { id: "eid88", tween: [ "style", "${_dice-roll-sprite}", "background-position", [-561,-198], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-374,-198]}], position: 1666, duration: 0 },
                { id: "eid89", tween: [ "style", "${_dice-roll-sprite}", "background-position", [-748,-198], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-561,-198]}], position: 1750, duration: 0 },
                { id: "eid90", tween: [ "style", "${_dice-roll-sprite}", "background-position", [0,-396], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-748,-198]}], position: 1833, duration: 0 },
                { id: "eid91", tween: [ "style", "${_dice-roll-sprite}", "background-position", [-187,-396], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-396]}], position: 1916, duration: 0 },
                { id: "eid92", tween: [ "style", "${_dice-roll-sprite}", "background-position", [-374,-396], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-187,-396]}], position: 2000, duration: 0 },
                { id: "eid93", tween: [ "style", "${_dice-roll-sprite}", "background-position", [-561,-396], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-374,-396]}], position: 2083, duration: 0 },
                { id: "eid94", tween: [ "style", "${_dice-roll-sprite}", "background-position", [-748,-396], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-561,-396]}], position: 2166, duration: 0 },
                { id: "eid95", tween: [ "style", "${_dice-roll-sprite}", "background-position", [0,-594], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-748,-396]}], position: 2250, duration: 0 },
                { id: "eid96", tween: [ "style", "${_dice-roll-sprite}", "background-position", [-187,-594], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-594]}], position: 2333, duration: 0 },
                { id: "eid97", tween: [ "style", "${_dice-roll-sprite}", "background-position", [-374,-594], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-187,-594]}], position: 2416, duration: 0 },
                { id: "eid98", tween: [ "style", "${_dice-roll-sprite}", "background-position", [-561,-594], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-374,-594]}], position: 2500, duration: 0 },
                { id: "eid99", tween: [ "style", "${_dice-roll-sprite}", "background-position", [-748,-594], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-561,-594]}], position: 2583, duration: 0 },
                { id: "eid52", tween: [ "style", "${_dice-roll-sprite}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-87176573");
