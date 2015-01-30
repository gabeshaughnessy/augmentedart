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
    scaleToFit: "both",
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'kiosk-bg2',
                type: 'image',
                rect: ['0px', '-5px','700px','609px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"kiosk-bg.jpg",'0px','0px']
            },
            {
                id: 'dice-roll-sprite_symbol_1',
                type: 'rect',
                rect: ['264px', '201px','auto','auto','auto', 'auto']
            },
            {
                id: 'logo',
                type: 'image',
                rect: ['98px', '252px','504px','72px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logo.png",'0px','0px']
            },
            {
                id: 'Coming_Soon',
                type: 'text',
                rect: ['98px', '216px','auto','auto','auto', 'auto'],
                text: "Coming soon to Diode Gallery...",
                font: ['Lucida Console, Monaco, monospace', 14, "rgba(96,153,132,0.99)", "normal", "none", ""]
            },
            {
                id: 'Message',
                type: 'text',
                rect: ['98px', '314px','453px','auto','auto', 'auto'],
                text: "See the show on the date message",
                align: "right",
                font: ['Lucida Console, Monaco, monospace', 14, "rgba(230,90,11,0.99)", "normal", "none", ""]
            }],
            symbolInstances: [
            {
                id: 'dice-roll-sprite_symbol_1',
                symbolName: 'dice-roll-sprite_symbol_1',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_kiosk-bg2}": [
                ["style", "top", '-5px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_Message}": [
                ["style", "top", '314px'],
                ["style", "font-size", '14px'],
                ["style", "text-align", 'right'],
                ["style", "font-family", 'Lucida Console, Monaco, monospace'],
                ["color", "color", 'rgba(230,90,11,0.99)'],
                ["style", "opacity", '0'],
                ["style", "left", '98px'],
                ["style", "width", '453px']
            ],
            "${_Coming_Soon}": [
                ["style", "top", '216px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(96,153,132,0.99)'],
                ["style", "font-family", 'Lucida Console, Monaco, monospace'],
                ["style", "left", '98px'],
                ["style", "font-size", '14px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "width", '700px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_dice-roll-sprite_symbol_1}": [
                ["style", "top", '201px'],
                ["style", "opacity", '0'],
                ["style", "left", '264px']
            ],
            "${_logo}": [
                ["style", "top", '252px'],
                ["style", "height", '43px'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '98px'],
                ["style", "width", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 16118,
            autoPlay: true,
            timeline: [
                { id: "eid17", tween: [ "style", "${_logo}", "width", '453px', { fromValue: '0px'}], position: 1500, duration: 618, easing: "easeOutBack" },
                { id: "eid21", tween: [ "style", "${_Coming_Soon}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid23", tween: [ "style", "${_Coming_Soon}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 500 },
                { id: "eid25", tween: [ "style", "${_Message}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 500 },
                { id: "eid26", tween: [ "style", "${_Message}", "opacity", '0', { fromValue: '1'}], position: 5618, duration: 500 },
                { id: "eid19", tween: [ "style", "${_logo}", "height", '43px', { fromValue: '43px'}], position: 2118, duration: 0, easing: "easeOutBack" },
                { id: "eid27", tween: [ "style", "${_kiosk-bg2}", "opacity", '1', { fromValue: '0'}], position: 5618, duration: 500 },
                { id: "eid28", tween: [ "style", "${_kiosk-bg2}", "opacity", '0', { fromValue: '1'}], position: 11000, duration: 500 },
                { id: "eid4", tween: [ "style", "${_dice-roll-sprite_symbol_1}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 500 },
                { id: "eid6", tween: [ "style", "${_dice-roll-sprite_symbol_1}", "opacity", '0', { fromValue: '1'}], position: 15618, duration: 500 },
                { id: "eid10", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 238, easing: "easeOutBack" },
                { id: "eid24", tween: [ "style", "${_logo}", "opacity", '0', { fromValue: '1'}], position: 5342, duration: 500 },
                { id: "eid9", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_dice-roll-sprite_symbol_1}', ['roll'] ], ""], position: 11500 }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/dice-roll-sprite2.png', '0px', '0px', '935px', '990px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_dice-roll-sprite}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '198px'],
                ["style", "background-size", [935,990], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "background-position", [-561,-594], {valueTemplate:'@@0@@px @@1@@px'} ],
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
                { id: "eid51", tween: [ "style", "${_dice-roll-sprite}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid52", tween: [ "style", "${_dice-roll-sprite}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
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
                { id: "eid53", tween: [ "style", "${_dice-roll-sprite}", "height", '198px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "kiosk");
