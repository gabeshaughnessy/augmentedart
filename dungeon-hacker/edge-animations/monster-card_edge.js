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
                id: 'monster-card-bg',
                type: 'image',
                rect: ['0px', '0','500px','800px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"monster-card-bg.png",'0px','0px']
            },
            {
                id: 'Monster-Description',
                type: 'text',
                rect: ['49px', '564px','404px','95px','auto', 'auto'],
                text: "Description goes right here and takes up a couple of lines. Here it is going to three lines",
                font: ['Lucida Console, Monaco, monospace', 15, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Monster-Title',
                type: 'text',
                rect: ['49px', '519px','404px','45px','auto', 'auto'],
                text: "Monster Title",
                align: "left",
                font: ['Lucida Console, Monaco, monospace', 18, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Status',
                type: 'text',
                rect: ['48px', '437px','404px','65px','auto', 'auto'],
                text: "Status Message",
                align: "left",
                font: ['Lucida Console, Monaco, monospace', 14, "rgba(0,0,0,1)", "900", "none", ""]
            },
            {
                id: 'Attributes',
                type: 'rect',
                rect: ['144px', '666px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.8']]
            },
            {
                id: 'Attributes_Label',
                type: 'text',
                rect: ['49px', '678px','117px','37px','auto', 'auto'],
                text: "Your Attributes:",
                align: "left",
                font: ['\'Lucida Console\', Monaco, monospace', 12, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'diceRoll',
                type: 'rect',
                rect: ['198', '241','auto','auto','auto', 'auto']
            },
            {
                id: 'AttributeLabel_Attack',
                type: 'text',
                rect: ['49px', '635px','auto','19px','auto', 'auto'],
                text: "Attacks with:",
                align: "left",
                font: ['\'Lucida Console\', Monaco, monospace', 14, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'DefenseAttributeLabel',
                type: 'text',
                rect: ['250px', '635px','auto','auto','auto', 'auto'],
                text: "Defends with:",
                align: "left",
                font: ['\'Lucida Console\', Monaco, monospace', 14, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'AttackAttribute',
                type: 'rect',
                rect: ['166px', '620px','80px','47px','auto', 'auto'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'DefenseAttribute',
                type: 'rect',
                rect: ['373px', '623px','80px','47px','auto', 'auto'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                transform: [[],[],[],['0.8','0.8']]
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
                id: 'Attributes',
                symbolName: 'PlayerAttributes',
                autoPlay: {

                }
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
            "${_Monster-Title}": [
                ["style", "top", '519px'],
                ["style", "font-size", '18px'],
                ["style", "text-align", 'left'],
                ["style", "font-family", '\'Lucida Console\', Monaco, monospace'],
                ["style", "height", '45px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '49px'],
                ["style", "width", '404px']
            ],
            "${_Attributes}": [
                ["transform", "scaleX", '0.8'],
                ["style", "top", '666px'],
                ["style", "left", '144px'],
                ["transform", "scaleY", '0.8']
            ],
            "${_AttackAttribute}": [
                ["style", "top", '620px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '166px'],
                ["style", "width", '80px']
            ],
            "${_DefenseAttribute}": [
                ["style", "top", '623px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '373px'],
                ["style", "width", '80px']
            ],
            "${_Status}": [
                ["style", "line-height", '16px'],
                ["style", "font-weight", '900'],
                ["style", "left", '48px'],
                ["style", "width", '404px'],
                ["style", "top", '437px'],
                ["style", "text-align", 'left'],
                ["style", "height", '65px'],
                ["style", "font-family", 'Lucida Console, Monaco, monospace'],
                ["style", "font-size", '14px']
            ],
            "${_Monster-Description}": [
                ["style", "top", '564px'],
                ["style", "font-size", '14px'],
                ["style", "font-family", '\'Lucida Console\', Monaco, monospace'],
                ["style", "height", '95px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '49px'],
                ["style", "width", '404px']
            ],
            "${_AttributeLabel_Attack}": [
                ["style", "top", '635px'],
                ["style", "left", '49px'],
                ["style", "height", '19px']
            ],
            "${_diceRoll}": [
                ["style", "top", '149px'],
                ["style", "opacity", '0'],
                ["style", "left", '156px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '500px'],
                ["style", "height", '800px'],
                ["style", "overflow", 'hidden']
            ],
            "${_DefenseAttributeLabel}": [
                ["style", "top", '635px'],
                ["style", "left", '250px']
            ],
            "${_Attributes_Label}": [
                ["style", "top", '678px'],
                ["style", "height", '37px'],
                ["style", "width", '117px'],
                ["style", "left", '49px'],
                ["style", "font-size", '12px']
            ],
            "${_Dead_Player}": [
                ["style", "height", '0%'],
                ["style", "left", '31px'],
                ["style", "width", '0%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 40215,
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
                "dead": 13514,
                "boss-attack-start": 20086,
                "boss-start": 20086,
                "boss-block-1": 23900,
                "boss-block-1-results": 25725,
                "boss-attack-two": 27650,
                "boss-attack-2-start": 28250,
                "boss-block-2": 30750,
                "boss-block-2-results": 31941,
                "player-attacks-boss": 33152,
                "attack-results-boss": 34000,
                "boss-battle-results": 34831,
                "boss-tie": 35010,
                "boss-wins": 39000,
                "player-beats-boss": 39405
            },
            timeline: [
                { id: "eid173", tween: [ "style", "${_Dead_Player}", "width", '0%', { fromValue: '0%'}], position: 0, duration: 0 },
                { id: "eid219", tween: [ "style", "${_Dead_Player}", "width", '0%', { fromValue: '100%'}], position: 13106, duration: 112 },
                { id: "eid194", tween: [ "style", "${_Dead_Player}", "width", '0%', { fromValue: '100%'}], position: 13514, duration: 112 },
                { id: "eid223", tween: [ "style", "${_Dead_Player}", "width", '0%', { fromValue: '100%'}], position: 39606, duration: 100 },
                { id: "eid183", tween: [ "style", "${_diceRoll}", "top", '149px', { fromValue: '149px'}], position: 13106, duration: 0 },
                { id: "eid100", tween: [ "style", "${_diceRoll}", "left", '156px', { fromValue: '156px'}], position: 11260, duration: 0 },
                { id: "eid174", tween: [ "style", "${_Dead_Player}", "height", '0%', { fromValue: '0%'}], position: 0, duration: 0 },
                { id: "eid218", tween: [ "style", "${_Dead_Player}", "height", '0%', { fromValue: '100%'}], position: 13106, duration: 112 },
                { id: "eid195", tween: [ "style", "${_Dead_Player}", "height", '0%', { fromValue: '100%'}], position: 13514, duration: 112 },
                { id: "eid222", tween: [ "style", "${_Dead_Player}", "height", '0%', { fromValue: '100%'}], position: 39606, duration: 100 },
                { id: "eid184", tween: [ "style", "${_Dead_Player}", "left", '31px', { fromValue: '31px'}], position: 13106, duration: 0 },
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
                { id: "eid248", tween: [ "style", "${_diceRoll}", "opacity", '1', { fromValue: '0'}], position: 20086, duration: 159 },
                { id: "eid228", tween: [ "style", "${_diceRoll}", "opacity", '0', { fromValue: '1'}], position: 23420, duration: 115 },
                { id: "eid231", tween: [ "style", "${_diceRoll}", "opacity", '1', { fromValue: '0'}], position: 24150, duration: 143 },
                { id: "eid232", tween: [ "style", "${_diceRoll}", "opacity", '0', { fromValue: '1'}], position: 27000, duration: 143 },
                { id: "eid233", tween: [ "style", "${_diceRoll}", "opacity", '1', { fromValue: '0'}], position: 27650, duration: 143 },
                { id: "eid234", tween: [ "style", "${_diceRoll}", "opacity", '0', { fromValue: '1'}], position: 29600, duration: 143 },
                { id: "eid236", tween: [ "style", "${_diceRoll}", "opacity", '1', { fromValue: '0'}], position: 30795, duration: 123 },
                { id: "eid238", tween: [ "style", "${_diceRoll}", "opacity", '0', { fromValue: '1'}], position: 33000, duration: 133 },
                { id: "eid241", tween: [ "style", "${_diceRoll}", "opacity", '1', { fromValue: '0'}], position: 33285, duration: 121 },
                { id: "eid243", tween: [ "style", "${_diceRoll}", "opacity", '0', { fromValue: '1'}], position: 34595, duration: 108 },
                { id: "eid245", tween: [ "style", "${_diceRoll}", "opacity", '1', { fromValue: '0'}], position: 35077, duration: 173 },
                { id: "eid246", tween: [ "style", "${_diceRoll}", "opacity", '0', { fromValue: '1'}], position: 39000, duration: 0 },
                { id: "eid247", tween: [ "style", "${_diceRoll}", "opacity", '0', { fromValue: '0'}], position: 39405, duration: 0 }            ]
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
            "${_image}": [
                ["style", "height", '435px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '367px']
            ],
            "${symbolSelector}": [
                ["style", "height", '367px'],
                ["style", "width", '367px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 36000,
            autoPlay: true,
            timeline: [
                { id: "eid202", tween: [ "style", "${_image}", "height", '435px', { fromValue: '435px'}], position: 36000, duration: 0 },
                { id: "eid131", tween: [ "style", "${_image}", "top", '0px', { fromValue: '0px'}], position: 2458, duration: 0 },
                { id: "eid201", tween: [ "style", "${_image}", "width", '435px', { fromValue: '367px'}], position: 13106, duration: 22894 }            ]
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
                    rect: ['78px', '-15px', '213px', '70px', 'auto', 'auto'],
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
                ["style", "top", '-15px'],
                ["style", "height", '70px'],
                ["style", "left", '78px'],
                ["style", "width", '213px']
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
