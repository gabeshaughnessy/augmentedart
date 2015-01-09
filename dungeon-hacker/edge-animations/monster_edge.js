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
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Primary-Attribute',
                type: 'rect',
                rect: ['25px', '307px','457px','68px','auto', 'auto'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Secondary-Attribute',
                type: 'rect',
                rect: ['242px', '671px','457px','68px','auto', 'auto'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'PrimaryAttLabel',
                type: 'text',
                rect: ['23px', '282px','457px','auto','auto', 'auto'],
                text: "Primary Attribute",
                font: ['Lucida Console, Monaco, monospace', 15, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'SecondaryAttLabel',
                type: 'text',
                rect: ['242px', '640px','173px','auto','auto', 'auto'],
                text: "Secondary Attribute",
                font: ['Lucida Console, Monaco, monospace', 15, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Monster-Description',
                type: 'text',
                rect: ['23px', '562px','422px','78px','auto', 'auto'],
                text: "Description goes right here and takes up a couple of lines.",
                font: ['Lucida Console, Monaco, monospace', 15, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Monster-Title',
                type: 'text',
                rect: ['37px', '520px','422px','auto','auto', 'auto'],
                text: "Monster Title",
                align: "center",
                font: ['Lucida Console, Monaco, monospace', 24, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Monster-Image',
                type: 'image',
                rect: ['67px', '39px','349px','367px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"monster.png",'0px','0px']
            },
            {
                id: 'Status',
                type: 'text',
                rect: ['27px', '21px','445px','87px','auto', 'auto'],
                text: "Status Message",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'diceRoll',
                type: 'rect',
                rect: ['198', '241','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'diceRoll',
                symbolName: 'dice-roll-sprite_symbol_1',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Monster-Title}": [
                ["style", "top", '520px'],
                ["style", "font-size", '24px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", '\'Lucida Console\', Monaco, monospace'],
                ["style", "height", '31px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '37px'],
                ["style", "width", '422px']
            ],
            "${_Secondary-Attribute}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '671px'],
                ["style", "left", '242px'],
                ["style", "width", '173px']
            ],
            "${_Primary-Attribute}": [
                ["style", "top", '671px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '37px'],
                ["style", "width", '173px']
            ],
            "${_Status}": [
                ["style", "top", '21px'],
                ["style", "text-align", 'center'],
                ["style", "height", '87px'],
                ["style", "left", '27px'],
                ["style", "width", '445px']
            ],
            "${_Monster-Description}": [
                ["style", "top", '562px'],
                ["style", "font-size", '14px'],
                ["style", "font-family", '\'Lucida Console\', Monaco, monospace'],
                ["style", "height", '78px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '37px'],
                ["style", "width", '422px']
            ],
            "${_Monster-Image}": [
                ["style", "top", '111px'],
                ["style", "height", '367px'],
                ["style", "left", '67px'],
                ["style", "width", '349px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '500px'],
                ["style", "height", '800px'],
                ["style", "overflow", 'hidden']
            ],
            "${_SecondaryAttLabel}": [
                ["style", "top", '640px'],
                ["style", "font-size", '14px'],
                ["style", "font-family", '\'Lucida Console\', Monaco, monospace'],
                ["style", "height", '31px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '242px'],
                ["style", "width", '173px']
            ],
            "${_PrimaryAttLabel}": [
                ["style", "top", '640px'],
                ["style", "width", '161px'],
                ["style", "font-weight", 'bold'],
                ["style", "height", '31px'],
                ["style", "font-family", '\'Lucida Console\', Monaco, monospace'],
                ["style", "left", '37px'],
                ["style", "font-size", '14px']
            ],
            "${_diceRoll}": [
                ["style", "top", '191px'],
                ["style", "opacity", '0'],
                ["style", "left", '156px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 13292,
            autoPlay: true,
            labels: {
                "monster-attacks": 1066,
                "block": 2458,
                "player-attacks": 5084,
                "battle-results": 6931,
                "tie-game": 8883,
                "tiebreaker": 12542,
                "monster-wins": 12792,
                "player-wins": 13106,
                "loop": 13292
            },
            timeline: [
                { id: "eid5", tween: [ "style", "${_PrimaryAttLabel}", "font-size", '14px', { fromValue: '14px'}], position: 0, duration: 0 },
                { id: "eid18", tween: [ "style", "${_Primary-Attribute}", "top", '671px', { fromValue: '671px'}], position: 0, duration: 0 },
                { id: "eid100", tween: [ "style", "${_diceRoll}", "left", '156px', { fromValue: '156px'}], position: 11260, duration: 0 },
                { id: "eid14", tween: [ "style", "${_Primary-Attribute}", "width", '173px', { fromValue: '173px'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_PrimaryAttLabel}", "height", '31px', { fromValue: '31px'}], position: 0, duration: 0 },
                { id: "eid131", tween: [ "style", "${_Monster-Image}", "top", '111px', { fromValue: '111px'}], position: 2458, duration: 0 },
                { id: "eid11", tween: [ "style", "${_PrimaryAttLabel}", "width", '161px', { fromValue: '161px'}], position: 0, duration: 0 },
                { id: "eid102", tween: [ "style", "${_diceRoll}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 143 },
                { id: "eid103", tween: [ "style", "${_diceRoll}", "opacity", '0', { fromValue: '1'}], position: 2250, duration: 143 },
                { id: "eid104", tween: [ "style", "${_diceRoll}", "opacity", '1', { fromValue: '0'}], position: 2458, duration: 143 },
                { id: "eid133", tween: [ "style", "${_diceRoll}", "opacity", '0', { fromValue: '1'}], position: 4876, duration: 143 },
                { id: "eid134", tween: [ "style", "${_diceRoll}", "opacity", '1', { fromValue: '0'}], position: 5084, duration: 143 },
                { id: "eid105", tween: [ "style", "${_diceRoll}", "opacity", '0', { fromValue: '1'}], position: 6780, duration: 151 },
                { id: "eid121", tween: [ "style", "${_diceRoll}", "opacity", '1', { fromValue: '0'}], position: 8882, duration: 143 },
                { id: "eid122", tween: [ "style", "${_diceRoll}", "opacity", '0', { fromValue: '1'}], position: 10658, duration: 130 },
                { id: "eid119", tween: [ "style", "${_diceRoll}", "opacity", '1', { fromValue: '0'}], position: 10787, duration: 68 },
                { id: "eid120", tween: [ "style", "${_diceRoll}", "opacity", '0', { fromValue: '1'}], position: 12393, duration: 149 },
                { id: "eid4", tween: [ "style", "${_PrimaryAttLabel}", "left", '37px', { fromValue: '37px'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "style", "${_PrimaryAttLabel}", "top", '640px', { fromValue: '640px'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${_Primary-Attribute}", "left", '37px', { fromValue: '37px'}], position: 0, duration: 0 }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/dice-roll-sprite.png', '0px', '0px', '935px', '990px']
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
                { id: "eid52", tween: [ "style", "${_dice-roll-sprite}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid53", tween: [ "style", "${_dice-roll-sprite}", "height", '198px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid51", tween: [ "style", "${_dice-roll-sprite}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "monster");
