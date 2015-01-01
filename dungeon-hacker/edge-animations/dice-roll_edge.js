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
                id: 'diceroll_spritesheet_symbol_1',
                type: 'rect',
                rect: ['219', '248','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'diceroll_spritesheet_symbol_1',
                symbolName: 'diceroll_spritesheet_symbol_1',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ],
            "${_diceroll_spritesheet_symbol_1}": [
                ["style", "left", '80px'],
                ["style", "top", '37px']
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
                { id: "eid13", tween: [ "style", "${_diceroll_spritesheet_symbol_1}", "left", '80px', { fromValue: '80px'}], position: 0, duration: 0 },
                { id: "eid14", tween: [ "style", "${_diceroll_spritesheet_symbol_1}", "top", '37px', { fromValue: '37px'}], position: 0, duration: 0 },
                { id: "eid16", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_diceroll_spritesheet_symbol_1}', [] ], ""], position: 0 }            ]
        }
    }
},
"diceroll_spritesheet_symbol_1": {
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
                    id: 'diceroll_spritesheet',
                    type: 'image',
                    rect: ['0px', '0px', '1230px', '1476px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/diceroll_spritesheet.png', '0px', '0px', '1230px', '1476px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_diceroll_spritesheet}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '738px'],
                ["style", "background-size", [1230,1476], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "width", '615px']
            ],
            "${symbolSelector}": [
                ["style", "height", '738px'],
                ["style", "width", '615px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: true,
            timeline: [
                { id: "eid4", tween: [ "style", "${_diceroll_spritesheet}", "width", '615px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid3", tween: [ "style", "${_diceroll_spritesheet}", "height", '738px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_diceroll_spritesheet}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1", tween: [ "style", "${_diceroll_spritesheet}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid5", tween: [ "style", "${_diceroll_spritesheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_diceroll_spritesheet}", "background-position", [-615,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 83, duration: 0 },
                { id: "eid7", tween: [ "style", "${_diceroll_spritesheet}", "background-position", [0,-738], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-615,0]}], position: 166, duration: 0 },
                { id: "eid8", tween: [ "style", "${_diceroll_spritesheet}", "background-position", [-615,-738], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-738]}], position: 250, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-112942984");
