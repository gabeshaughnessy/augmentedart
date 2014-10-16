/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['\'Trade Gothic LT Std-Condensed18\', TradeGothicBoldCond, Helvetica']='<link rel=\"stylesheet\" type=\"text/css\" href=\"http://augmentedart.com/nike-vegas/style.css\" />';

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
                id: 'Page-text',
                type: 'rect',
                rect: ['149', '114','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'Page-text',
                symbolName: 'Page-text',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '550px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3975,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"explosion_small_symbol_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: true,
    resizeInstances: false,
    content: {
        },
    states: {
        "Base State": {

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
"explosion_tiny_symbol_1": {
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
                    id: 'explosion_tiny',
                    type: 'image',
                    rect: ['0px', '0px', '900px', '800px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/explosion_tiny.png', '0px', '0px', '900px', '800px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_explosion_tiny}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '100px'],
                ["style", "background-size", [900,800], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "width", '150px']
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "width", '150px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1958,
            autoPlay: true,
            timeline: [
                { id: "eid4", tween: [ "style", "${_explosion_tiny}", "width", '150px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid5", tween: [ "style", "${_explosion_tiny}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_explosion_tiny}", "background-position", [-150,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 41, duration: 0 },
                { id: "eid7", tween: [ "style", "${_explosion_tiny}", "background-position", [-300,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-150,0]}], position: 83, duration: 0 },
                { id: "eid8", tween: [ "style", "${_explosion_tiny}", "background-position", [-450,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-300,0]}], position: 125, duration: 0 },
                { id: "eid9", tween: [ "style", "${_explosion_tiny}", "background-position", [-600,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-450,0]}], position: 166, duration: 0 },
                { id: "eid10", tween: [ "style", "${_explosion_tiny}", "background-position", [-750,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-600,0]}], position: 208, duration: 0 },
                { id: "eid11", tween: [ "style", "${_explosion_tiny}", "background-position", [0,-100], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-750,0]}], position: 250, duration: 0 },
                { id: "eid12", tween: [ "style", "${_explosion_tiny}", "background-position", [-150,-100], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-100]}], position: 291, duration: 0 },
                { id: "eid13", tween: [ "style", "${_explosion_tiny}", "background-position", [-300,-100], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-150,-100]}], position: 333, duration: 0 },
                { id: "eid14", tween: [ "style", "${_explosion_tiny}", "background-position", [-450,-100], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-300,-100]}], position: 375, duration: 0 },
                { id: "eid15", tween: [ "style", "${_explosion_tiny}", "background-position", [-600,-100], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-450,-100]}], position: 416, duration: 0 },
                { id: "eid16", tween: [ "style", "${_explosion_tiny}", "background-position", [-750,-100], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-600,-100]}], position: 458, duration: 0 },
                { id: "eid17", tween: [ "style", "${_explosion_tiny}", "background-position", [0,-200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-750,-100]}], position: 500, duration: 0 },
                { id: "eid18", tween: [ "style", "${_explosion_tiny}", "background-position", [-150,-200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-200]}], position: 541, duration: 0 },
                { id: "eid19", tween: [ "style", "${_explosion_tiny}", "background-position", [-300,-200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-150,-200]}], position: 583, duration: 0 },
                { id: "eid20", tween: [ "style", "${_explosion_tiny}", "background-position", [-450,-200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-300,-200]}], position: 625, duration: 0 },
                { id: "eid21", tween: [ "style", "${_explosion_tiny}", "background-position", [-600,-200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-450,-200]}], position: 666, duration: 0 },
                { id: "eid22", tween: [ "style", "${_explosion_tiny}", "background-position", [-750,-200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-600,-200]}], position: 708, duration: 0 },
                { id: "eid23", tween: [ "style", "${_explosion_tiny}", "background-position", [0,-300], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-750,-200]}], position: 750, duration: 0 },
                { id: "eid24", tween: [ "style", "${_explosion_tiny}", "background-position", [-150,-300], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-300]}], position: 791, duration: 0 },
                { id: "eid25", tween: [ "style", "${_explosion_tiny}", "background-position", [-300,-300], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-150,-300]}], position: 833, duration: 0 },
                { id: "eid26", tween: [ "style", "${_explosion_tiny}", "background-position", [-450,-300], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-300,-300]}], position: 875, duration: 0 },
                { id: "eid27", tween: [ "style", "${_explosion_tiny}", "background-position", [-600,-300], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-450,-300]}], position: 916, duration: 0 },
                { id: "eid28", tween: [ "style", "${_explosion_tiny}", "background-position", [-750,-300], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-600,-300]}], position: 958, duration: 0 },
                { id: "eid29", tween: [ "style", "${_explosion_tiny}", "background-position", [0,-400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-750,-300]}], position: 1000, duration: 0 },
                { id: "eid30", tween: [ "style", "${_explosion_tiny}", "background-position", [-150,-400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-400]}], position: 1041, duration: 0 },
                { id: "eid31", tween: [ "style", "${_explosion_tiny}", "background-position", [-300,-400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-150,-400]}], position: 1083, duration: 0 },
                { id: "eid32", tween: [ "style", "${_explosion_tiny}", "background-position", [-450,-400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-300,-400]}], position: 1125, duration: 0 },
                { id: "eid33", tween: [ "style", "${_explosion_tiny}", "background-position", [-600,-400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-450,-400]}], position: 1166, duration: 0 },
                { id: "eid34", tween: [ "style", "${_explosion_tiny}", "background-position", [-750,-400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-600,-400]}], position: 1208, duration: 0 },
                { id: "eid35", tween: [ "style", "${_explosion_tiny}", "background-position", [0,-500], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-750,-400]}], position: 1250, duration: 0 },
                { id: "eid36", tween: [ "style", "${_explosion_tiny}", "background-position", [-150,-500], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-500]}], position: 1291, duration: 0 },
                { id: "eid37", tween: [ "style", "${_explosion_tiny}", "background-position", [-300,-500], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-150,-500]}], position: 1333, duration: 0 },
                { id: "eid38", tween: [ "style", "${_explosion_tiny}", "background-position", [-450,-500], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-300,-500]}], position: 1375, duration: 0 },
                { id: "eid39", tween: [ "style", "${_explosion_tiny}", "background-position", [-600,-500], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-450,-500]}], position: 1416, duration: 0 },
                { id: "eid40", tween: [ "style", "${_explosion_tiny}", "background-position", [-750,-500], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-600,-500]}], position: 1458, duration: 0 },
                { id: "eid41", tween: [ "style", "${_explosion_tiny}", "background-position", [0,-600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-750,-500]}], position: 1500, duration: 0 },
                { id: "eid42", tween: [ "style", "${_explosion_tiny}", "background-position", [-150,-600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-600]}], position: 1541, duration: 0 },
                { id: "eid43", tween: [ "style", "${_explosion_tiny}", "background-position", [-300,-600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-150,-600]}], position: 1583, duration: 0 },
                { id: "eid44", tween: [ "style", "${_explosion_tiny}", "background-position", [-450,-600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-300,-600]}], position: 1625, duration: 0 },
                { id: "eid45", tween: [ "style", "${_explosion_tiny}", "background-position", [-600,-600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-450,-600]}], position: 1666, duration: 0 },
                { id: "eid46", tween: [ "style", "${_explosion_tiny}", "background-position", [-750,-600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-600,-600]}], position: 1708, duration: 0 },
                { id: "eid47", tween: [ "style", "${_explosion_tiny}", "background-position", [0,-700], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-750,-600]}], position: 1750, duration: 0 },
                { id: "eid48", tween: [ "style", "${_explosion_tiny}", "background-position", [-150,-700], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-700]}], position: 1791, duration: 0 },
                { id: "eid49", tween: [ "style", "${_explosion_tiny}", "background-position", [-300,-700], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-150,-700]}], position: 1833, duration: 0 },
                { id: "eid50", tween: [ "style", "${_explosion_tiny}", "background-position", [-450,-700], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-300,-700]}], position: 1875, duration: 0 },
                { id: "eid51", tween: [ "style", "${_explosion_tiny}", "background-position", [-600,-700], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-450,-700]}], position: 1916, duration: 0 },
                { id: "eid52", tween: [ "style", "${_explosion_tiny}", "background-position", [-750,-700], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-600,-700]}], position: 1958, duration: 0 },
                { id: "eid2", tween: [ "style", "${_explosion_tiny}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1", tween: [ "style", "${_explosion_tiny}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid3", tween: [ "style", "${_explosion_tiny}", "height", '100px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
        }
    }
},
"Page-text": {
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
                    type: 'text',
                    id: 'Text',
                    text: 'Some Text',
                    font: ['\'Trade Gothic LT Std-Condensed18\', TradeGothicBoldCond, Helvetica', 38, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    transform: [[], ['9'], ['17', '21']],
                    textShadow: ['rgba(67,66,66,0.65)', -3, 2, 0],
                    rect: ['0px', '0px', '243px', '115px', 'auto', 'auto'],
                    clip: ['rect(0px 243px 41px 0px)'],
                    align: 'left'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "color", 'rgba(165,185,188,1.00)'],
                ["subproperty", "textShadow.offsetV", '1px'],
                ["style", "left", '-277px'],
                ["transform", "skewY", '18deg'],
                ["style", "clip", [0,243,42,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["subproperty", "textShadow.blur", '0px'],
                ["subproperty", "textShadow.offsetH", '-1px'],
                ["transform", "rotateZ", '10deg'],
                ["transform", "scaleX", '1.65'],
                ["style", "width", '243px'],
                ["style", "top", '-85px'],
                ["style", "font-family", 'Trade Gothic LT Std-Condensed18, TradeGothicBoldCond, Helvetica'],
                ["transform", "skewX", '14deg'],
                ["style", "height", '41px'],
                ["subproperty", "textShadow.color", 'rgba(0,38,63,1.00)'],
                ["transform", "scaleY", '1.65'],
                ["style", "font-size", '38px']
            ],
            "${symbolSelector}": [
                ["style", "height", '115px'],
                ["style", "width", '243px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3975,
            autoPlay: true,
            timeline: [
                { id: "eid78", tween: [ "transform", "${_Text}", "skewY", '0deg', { fromValue: '18deg'}], position: 0, duration: 2000, easing: "easeOutBack" },
                { id: "eid63", tween: [ "style", "${_Text}", "left", '19px', { fromValue: '-277px'}], position: 0, duration: 961, easing: "easeOutBack" },
                { id: "eid92", tween: [ "style", "${_Text}", "left", '20px', { fromValue: '19px'}], position: 961, duration: 830, easing: "easeOutBack" },
                { id: "eid93", tween: [ "style", "${_Text}", "left", '19px', { fromValue: '20px'}], position: 1791, duration: 209, easing: "easeOutBack" },
                { id: "eid125", tween: [ "style", "${_Text}", "left", '-113px', { fromValue: '19px'}], position: 3250, duration: 111, easing: "easeInQuad" },
                { id: "eid108", tween: [ "style", "${_Text}", "height", '41px', { fromValue: '41px'}], position: 2000, duration: 0, easing: "easeOutBack" },
                { id: "eid61", tween: [ "transform", "${_Text}", "scaleX", '1', { fromValue: '1.65'}], position: 0, duration: 961, easing: "easeOutBack" },
                { id: "eid106", tween: [ "transform", "${_Text}", "scaleX", '1', { fromValue: '1'}], position: 2000, duration: 0, easing: "easeOutBack" },
                { id: "eid70", tween: [ "subproperty", "${_Text}", "textShadow.offsetH", '-1px', { fromValue: '-1px'}], position: 0, duration: 0, easing: "easeOutBack" },
                { id: "eid71", tween: [ "subproperty", "${_Text}", "textShadow.offsetH", '-1px', { fromValue: '-1px'}], position: 2000, duration: 0, easing: "easeOutBack" },
                { id: "eid62", tween: [ "transform", "${_Text}", "scaleY", '1', { fromValue: '1.65'}], position: 0, duration: 961, easing: "easeOutBack" },
                { id: "eid107", tween: [ "transform", "${_Text}", "scaleY", '1', { fromValue: '1'}], position: 2000, duration: 0, easing: "easeOutBack" },
                { id: "eid80", tween: [ "subproperty", "${_Text}", "textShadow.blur", '1px', { fromValue: '0px'}], position: 0, duration: 2000, easing: "easeOutBack" },
                { id: "eid77", tween: [ "transform", "${_Text}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 0, duration: 2000, easing: "easeOutBack" },
                { id: "eid79", tween: [ "transform", "${_Text}", "skewX", '0deg', { fromValue: '14deg'}], position: 0, duration: 2000, easing: "easeOutBack" },
                { id: "eid56", tween: [ "subproperty", "${_Text}", "textShadow.color", 'rgba(0,38,63,1.00)', { fromValue: 'rgba(0,38,63,1.00)'}], position: 0, duration: 0 },
                { id: "eid86", tween: [ "subproperty", "${_Text}", "textShadow.color", 'rgba(0,38,63,1.00)', { fromValue: 'rgba(0,38,63,1.00)'}], position: 2000, duration: 0, easing: "easeOutBack" },
                { id: "eid72", tween: [ "subproperty", "${_Text}", "textShadow.offsetV", '1px', { fromValue: '1px'}], position: 0, duration: 0, easing: "easeOutBack" },
                { id: "eid73", tween: [ "subproperty", "${_Text}", "textShadow.offsetV", '1px', { fromValue: '1px'}], position: 2000, duration: 0, easing: "easeOutBack" },
                { id: "eid120", tween: [ "style", "${_Text}", "clip", [0,243,0,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,243,42,0]}], position: 3000, duration: 250, easing: "easeInQuad" },
                { id: "eid128", tween: [ "style", "${_Text}", "clip", [0,243,40,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,243,0,0]}], position: 3750, duration: 225, easing: "easeInQuad" },
                { id: "eid64", tween: [ "style", "${_Text}", "top", '49px', { fromValue: '-85px'}], position: 0, duration: 961, easing: "easeOutBack" },
                { id: "eid121", tween: [ "style", "${_Text}", "top", '101px', { fromValue: '49px'}], position: 3000, duration: 250, easing: "easeInQuad" },
                { id: "eid126", tween: [ "style", "${_Text}", "top", '200px', { fromValue: '101px'}], position: 3250, duration: 111, easing: "easeInQuad" },
                { id: "eid129", tween: [ "style", "${_Text}", "top", '160px', { fromValue: '200px'}], position: 3750, duration: 225, easing: "easeInQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-16444553");
