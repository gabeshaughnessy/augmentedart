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
                id: 'paper-bg',
                type: 'image',
                rect: ['-63px', '-428px','600px','1633px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"paper-bg.jpg",'0px','0px']
            },
            {
                id: 'monster-image',
                type: 'rect',
                rect: ['67', '111','auto','auto','auto', 'auto']
            },
            {
                id: 'Monster-Description',
                type: 'text',
                rect: ['31px', '618px','445px','55px','auto', 'auto'],
                text: "Description goes right here and takes up a couple of lines.",
                font: ['Lucida Console, Monaco, monospace', 15, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Monster-Title',
                type: 'text',
                rect: ['31px', '581px','445px','auto','auto', 'auto'],
                text: "Monster Title",
                align: "left",
                font: ['Lucida Console, Monaco, monospace', 24, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Status',
                type: 'text',
                rect: ['31px', '21px','445px','87px','auto', 'auto'],
                text: "Status Message",
                align: "left",
                font: ['Lucida Console, Monaco, monospace', 16, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Attributes',
                type: 'rect',
                rect: ['3', '742','auto','auto','auto', 'auto']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['31px', '750px','121px','45px','auto', 'auto'],
                text: "Your Current Attributes:",
                align: "left",
                font: ['\'Lucida Console\', Monaco, monospace', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'diceRoll',
                type: 'rect',
                rect: ['198', '241','auto','auto','auto', 'auto']
            },
            {
                id: 'MonsterAttributes',
                type: 'rect',
                rect: ['31px', '643px','422px','116px','auto', 'auto'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'AttributeLabel_Attack',
                type: 'text',
                rect: ['31px', '693px','auto','auto','auto', 'auto'],
                text: "Attacks with:",
                align: "left",
                font: ['\'Lucida Console\', Monaco, monospace', 14, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'DefenseAttributeLabel',
                type: 'text',
                rect: ['256px', '693px','auto','auto','auto', 'auto'],
                text: "Defends with:",
                align: "left",
                font: ['\'Lucida Console\', Monaco, monospace', 14, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'AttackAttribute',
                type: 'rect',
                rect: ['162px', '679px','80px','47px','auto', 'auto'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'DefenseAttribute',
                type: 'rect',
                rect: ['382px', '679px','80px','47px','auto', 'auto'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Dead_Player',
                type: 'rect',
                rect: ['23px', '22px','100%','100%','auto', 'auto'],
                fill: ["rgba(192,192,192,0)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            }],
            symbolInstances: [
            {
                id: 'monster-image',
                symbolName: 'monster-image'
            },
            {
                id: 'Attributes',
                symbolName: 'PlayerAttributes'
            },
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
            "${_Text}": [
                ["style", "top", '750px'],
                ["style", "height", '45px'],
                ["style", "font-size", '14px'],
                ["style", "left", '31px'],
                ["style", "width", '121px']
            ],
            "${_Monster-Title}": [
                ["style", "top", '581px'],
                ["style", "width", '445px'],
                ["style", "text-align", 'left'],
                ["style", "font-weight", 'bold'],
                ["style", "height", '31px'],
                ["style", "font-family", '\'Lucida Console\', Monaco, monospace'],
                ["style", "left", '31px'],
                ["style", "font-size", '24px']
            ],
            "${_diceRoll}": [
                ["style", "top", '222px'],
                ["style", "opacity", '0'],
                ["style", "left", '156px']
            ],
            "${_Dead_Player}": [
                ["style", "height", '0%'],
                ["style", "left", '31px'],
                ["style", "width", '0%']
            ],
            "${_monster-image}": [
                ["transform", "scaleX", '1.21253'],
                ["style", "top", '148px'],
                ["style", "left", '70px'],
                ["transform", "scaleY", '1.21253']
            ],
            "${_Attributes}": [
                ["style", "top", '740px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '176px'],
                ["transform", "scaleX", '1']
            ],
            "${_AttackAttribute}": [
                ["style", "top", '679px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '162px'],
                ["style", "width", '80px']
            ],
            "${_DefenseAttribute}": [
                ["style", "top", '679px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '382px'],
                ["style", "width", '80px']
            ],
            "${_Status}": [
                ["style", "top", '21px'],
                ["style", "text-align", 'left'],
                ["style", "width", '445px'],
                ["style", "height", '87px'],
                ["style", "font-family", 'Lucida Console, Monaco, monospace'],
                ["style", "left", '31px'],
                ["style", "font-size", '16px']
            ],
            "${_Monster-Description}": [
                ["style", "top", '618px'],
                ["style", "width", '445px'],
                ["style", "font-weight", 'bold'],
                ["style", "height", '55px'],
                ["style", "font-family", '\'Lucida Console\', Monaco, monospace'],
                ["style", "left", '31px'],
                ["style", "font-size", '14px']
            ],
            "${_AttributeLabel_Attack}": [
                ["style", "top", '693px'],
                ["style", "left", '31px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '800px'],
                ["style", "width", '500px']
            ],
            "${_DefenseAttributeLabel}": [
                ["style", "top", '693px'],
                ["style", "left", '256px']
            ],
            "${_MonsterAttributes}": [
                ["style", "top", '643px'],
                ["style", "left", '31px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)']
            ],
            "${_paper-bg}": [
                ["style", "top", '-428px'],
                ["style", "left", '-63px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 13514,
            autoPlay: true,
            labels: {
                "monster-attack-start": 61,
                "monster-attacks": 1066,
                "block": 2458,
                "block-results": 3662,
                "player-attacks": 5084,
                "attack-results": 6100,
                "battle-results": 6931,
                "tie-game-start": 8806,
                "tie-game": 8883,
                "tiebreaker": 12542,
                "monster-wins": 12792,
                "player-wins": 13106,
                "loop": 13292,
                "dead": 13514
            },
            timeline: [
                { id: "eid185", tween: [ "style", "${_Attributes}", "left", '176px', { fromValue: '176px'}], position: 13106, duration: 0 },
                { id: "eid187", tween: [ "transform", "${_Attributes}", "scaleX", '1', { fromValue: '1'}], position: 13106, duration: 0 },
                { id: "eid173", tween: [ "style", "${_Dead_Player}", "width", '0%', { fromValue: '0%'}], position: 0, duration: 0 },
                { id: "eid171", tween: [ "style", "${_Dead_Player}", "width", '100%', { fromValue: '0%'}], position: 13514, duration: 0 },
                { id: "eid181", tween: [ "transform", "${_monster-image}", "scaleY", '1.21253', { fromValue: '1.21253'}], position: 13106, duration: 0 },
                { id: "eid100", tween: [ "style", "${_diceRoll}", "left", '156px', { fromValue: '156px'}], position: 11260, duration: 0 },
                { id: "eid186", tween: [ "style", "${_Attributes}", "top", '740px', { fromValue: '740px'}], position: 13106, duration: 0 },
                { id: "eid183", tween: [ "style", "${_diceRoll}", "top", '222px', { fromValue: '222px'}], position: 13106, duration: 0 },
                { id: "eid180", tween: [ "transform", "${_monster-image}", "scaleX", '1.21253', { fromValue: '1.21253'}], position: 13106, duration: 0 },
                { id: "eid175", tween: [ "style", "${_monster-image}", "left", '70px', { fromValue: '70px'}], position: 13106, duration: 0 },
                { id: "eid182", tween: [ "style", "${_monster-image}", "top", '148px', { fromValue: '148px'}], position: 13106, duration: 0 },
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
                { id: "eid174", tween: [ "style", "${_Dead_Player}", "height", '0%', { fromValue: '0%'}], position: 0, duration: 0 },
                { id: "eid172", tween: [ "style", "${_Dead_Player}", "height", '100%', { fromValue: '0%'}], position: 13514, duration: 0 },
                { id: "eid188", tween: [ "transform", "${_Attributes}", "scaleY", '1', { fromValue: '1'}], position: 13106, duration: 0 },
                { id: "eid184", tween: [ "style", "${_Dead_Player}", "left", '31px', { fromValue: '31px'}], position: 13106, duration: 0 }            ]
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
},
"monster-image": {
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
                    id: 'image',
                    type: 'image',
                    rect: ['0px', '-72px', '349px', '367px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/monster.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '367px'],
                ["style", "width", '367px']
            ],
            "${_image}": [
                ["style", "top", '0px'],
                ["style", "height", '367px'],
                ["style", "left", '0px'],
                ["style", "width", '367px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 13106,
            autoPlay: true,
            timeline: [
                { id: "eid131", tween: [ "style", "${_image}", "top", '0px', { fromValue: '0px'}], position: 2458, duration: 0 },
                { id: "eid176", tween: [ "style", "${_image}", "width", '367px', { fromValue: '367px'}], position: 13106, duration: 0 }            ]
        }
    }
},
"PlayerAttributes": {
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
                    rect: ['0px', '0px', '500px', '55px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '55px'],
                ["style", "width", '300px']
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


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "monster");
