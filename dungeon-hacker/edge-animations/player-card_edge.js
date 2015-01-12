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
                rect: ['-80px', '-8px','600px','1600px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"paper-bg.jpg",'0px','0px']
            },
            {
                id: 'Monsters',
                type: 'rect',
                rect: ['7px', '1092px','382px','265px','auto', 'auto'],
                fill: ["rgba(192,192,192,0)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'MonstersLabel',
                type: 'text',
                rect: ['1px', '1050px','437px','auto','auto', 'auto'],
                text: "Monsters Defeated",
                font: ['Lucida Console, Monaco, monospace', 15, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Sharing',
                type: 'rect',
                rect: ['7px', '1399px','382px','84px','auto', 'auto'],
                fill: ["rgba(192,192,192,0)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'SharingLabel',
                type: 'text',
                rect: ['1px', '1357px','437px','auto','auto', 'auto'],
                text: "Share This Player Card",
                font: ['Lucida Console, Monaco, monospace', 15, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Inventory',
                type: 'rect',
                rect: ['7', '785','auto','auto','auto', 'auto']
            },
            {
                id: 'InventoryLabel',
                type: 'text',
                rect: ['1px', '481px','437px','auto','auto', 'auto'],
                text: "Inventory",
                font: ['Lucida Console, Monaco, monospace', 15, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'CryptoCredits',
                type: 'rect',
                rect: ['3px', '506px','437px','68px','auto', 'auto'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'CryptoCreditsLabel',
                type: 'text',
                rect: ['1px', '481px','437px','auto','auto', 'auto'],
                text: "Crypto-Credits",
                font: ['Lucida Console, Monaco, monospace', 15, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Attributes',
                type: 'rect',
                rect: ['3px', '582px','437px','68px','auto', 'auto'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'AttributesLabel',
                type: 'text',
                rect: ['1px', '481px','437px','auto','auto', 'auto'],
                text: "Attributes (Including Items Carried)",
                font: ['Lucida Console, Monaco, monospace', 15, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Description',
                type: 'text',
                rect: ['0px', '51px','400px','84px','auto', 'auto'],
                text: "This is the default player Description.",
                align: "left",
                font: ['Lucida Console, Monaco, monospace', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'PlayerImage',
                type: 'rect',
                rect: ['28', '135','auto','auto','auto', 'auto']
            },
            {
                id: 'Player-Title',
                type: 'text',
                rect: ['0px', '15px','100%','2%','auto', 'auto'],
                text: "Title",
                font: ['Lucida Console, Monaco, monospace', 24, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'page_label',
                type: 'text',
                rect: ['1px', '56px','100%','2%','auto', 'auto'],
                text: "Player Card",
                align: "center",
                font: ['\'Lucida Console\', Monaco, monospace', 13, "rgba(60,60,60,1.00)", "bold", "none", "normal"]
            },
            {
                id: 'logo',
                type: 'image',
                rect: ['0', '0','100%','3.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dungeon-hacker-logo.png",'0px','0px']
            }],
            symbolInstances: [
            {
                id: 'Inventory',
                symbolName: 'Inventory',
                autoPlay: {

                }
            },
            {
                id: 'PlayerImage',
                symbolName: 'PlayerImage',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Player-Title}": [
                ["color", "color", 'rgba(62,61,61,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '5px'],
                ["style", "width", '97.5%'],
                ["style", "top", '89px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '2.01%'],
                ["style", "font-family", 'Lucida Console, Monaco, monospace'],
                ["style", "word-spacing", '0px'],
                ["transform", "scaleX", '1']
            ],
            "${_CryptoCreditsLabel}": [
                ["style", "top", '650px'],
                ["style", "width", '390px'],
                ["style", "font-family", '\'Lucida Console\', Monaco, monospace'],
                ["color", "color", 'rgba(62,61,61,1.00)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '5px'],
                ["style", "font-size", '15px']
            ],
            "${_paper-bg}": [
                ["style", "height", '1600px'],
                ["style", "top", '-8px'],
                ["style", "left", '-80px'],
                ["style", "width", '600px']
            ],
            "${_SharingLabel}": [
                ["style", "top", '1357px'],
                ["style", "font-size", '15px'],
                ["style", "font-weight", 'bold'],
                ["color", "color", 'rgba(62,61,61,1)'],
                ["style", "font-family", '\'Lucida Console\', Monaco, monospace'],
                ["style", "left", '5px'],
                ["style", "width", '390px']
            ],
            "${_page_label}": [
                ["style", "top", '56px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(60,60,60,1.00)'],
                ["style", "font-size", '13px'],
                ["style", "height", '2.01%'],
                ["style", "width", '100%']
            ],
            "${_Attributes}": [
                ["style", "top", '582px'],
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "left", '5px'],
                ["style", "width", '390px']
            ],
            "${_logo}": [
                ["style", "height", '3.59%'],
                ["style", "width", '100%']
            ],
            "${_MonstersLabel}": [
                ["style", "top", '1050px'],
                ["style", "width", '390px'],
                ["style", "font-family", '\'Lucida Console\', Monaco, monospace'],
                ["color", "color", 'rgba(62,61,61,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '5px'],
                ["style", "font-size", '15px']
            ],
            "${_Sharing}": [
                ["style", "height", '84px'],
                ["style", "top", '1399px']
            ],
            "${_CryptoCredits}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '675px'],
                ["style", "left", '5px'],
                ["style", "width", '390px']
            ],
            "${_PlayerImage}": [
                ["style", "top", '143px'],
                ["transform", "scaleY", '0.91394'],
                ["transform", "scaleX", '0.91394'],
                ["style", "opacity", '1'],
                ["style", "left", '-18px']
            ],
            "${_AttributesLabel}": [
                ["style", "top", '554px'],
                ["style", "font-size", '15px'],
                ["style", "font-weight", 'bold'],
                ["color", "color", 'rgba(62,61,61,1.00)'],
                ["style", "font-family", '\'Lucida Console\', Monaco, monospace'],
                ["style", "left", '5px'],
                ["style", "width", '390px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '400px'],
                ["style", "height", '1590px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Monsters}": [
                ["style", "height", '265px'],
                ["style", "top", '1092px']
            ],
            "${_Description}": [
                ["style", "top", '125px'],
                ["style", "font-size", '16px'],
                ["color", "color", 'rgba(62,61,61,1.00)'],
                ["style", "height", '84px'],
                ["style", "font-family", 'Lucida Console, Monaco, monospace'],
                ["style", "left", '5px'],
                ["style", "width", '395px']
            ],
            "${_InventoryLabel}": [
                ["style", "top", '743px'],
                ["style", "font-size", '15px'],
                ["style", "font-weight", 'bold'],
                ["color", "color", 'rgba(62,61,61,1.00)'],
                ["style", "font-family", '\'Lucida Console\', Monaco, monospace'],
                ["style", "left", '5px'],
                ["style", "width", '390px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            labels: {
                "default": 0
            },
            timeline: [
                { id: "eid54", tween: [ "color", "${_CryptoCreditsLabel}", "color", 'rgba(62,61,61,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(62,61,61,1.00)'}], position: 0, duration: 0 },
                { id: "eid60", tween: [ "style", "${_Player-Title}", "left", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
                { id: "eid69", tween: [ "style", "${_InventoryLabel}", "left", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
                { id: "eid66", tween: [ "style", "${_CryptoCredits}", "width", '390px', { fromValue: '390px'}], position: 0, duration: 0 },
                { id: "eid64", tween: [ "style", "${_CryptoCreditsLabel}", "width", '390px', { fromValue: '390px'}], position: 0, duration: 0 },
                { id: "eid73", tween: [ "color", "${_AttributesLabel}", "color", 'rgba(62,61,61,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(62,61,61,1.00)'}], position: 0, duration: 0 },
                { id: "eid56", tween: [ "style", "${_Player-Title}", "word-spacing", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid51", tween: [ "style", "${_Player-Title}", "top", '89px', { fromValue: '89px'}], position: 0, duration: 0 },
                { id: "eid59", tween: [ "style", "${_Player-Title}", "width", '97.5%', { fromValue: '97.5%'}], position: 0, duration: 0 },
                { id: "eid70", tween: [ "style", "${_InventoryLabel}", "width", '390px', { fromValue: '390px'}], position: 0, duration: 0 },
                { id: "eid67", tween: [ "style", "${_InventoryLabel}", "top", '743px', { fromValue: '743px'}], position: 0, duration: 0 },
                { id: "eid72", tween: [ "style", "${_AttributesLabel}", "top", '554px', { fromValue: '554px'}], position: 0, duration: 0 },
                { id: "eid50", tween: [ "style", "${_CryptoCreditsLabel}", "top", '650px', { fromValue: '650px'}], position: 0, duration: 0 },
                { id: "eid68", tween: [ "color", "${_InventoryLabel}", "color", 'rgba(62,61,61,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(62,61,61,1.00)'}], position: 0, duration: 0 },
                { id: "eid53", tween: [ "color", "${_Description}", "color", 'rgba(62,61,61,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(62,61,61,1.00)'}], position: 0, duration: 0 },
                { id: "eid52", tween: [ "style", "${_CryptoCredits}", "top", '675px', { fromValue: '675px'}], position: 0, duration: 0 },
                { id: "eid74", tween: [ "style", "${_AttributesLabel}", "left", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
                { id: "eid63", tween: [ "style", "${_CryptoCreditsLabel}", "left", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
                { id: "eid55", tween: [ "color", "${_Player-Title}", "color", 'rgba(62,61,61,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(62,61,61,1.00)'}], position: 0, duration: 0 },
                { id: "eid48", tween: [ "style", "${_Description}", "top", '125px', { fromValue: '125px'}], position: 0, duration: 0 },
                { id: "eid61", tween: [ "style", "${_Description}", "left", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
                { id: "eid65", tween: [ "style", "${_CryptoCredits}", "left", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
                { id: "eid62", tween: [ "style", "${_Description}", "width", '395px', { fromValue: '395px'}], position: 0, duration: 0 },
                { id: "eid75", tween: [ "style", "${_AttributesLabel}", "width", '390px', { fromValue: '390px'}], position: 0, duration: 0 }            ]
        }
    }
},
"PlayerImage": {
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
                    rect: ['0px', '0px', '90.8%', '88.5%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/project-manager.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_image}": [
                ["style", "height", '88.51%'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '90.84%']
            ],
            "${symbolSelector}": [
                ["style", "height", '429px'],
                ["style", "width", '437px']
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
},
"SelectButton": {
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
                    rect: ['0px', '0px', '308px', '47px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'Button',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                },
                {
                    font: ['Lucida Console, Monaco, monospace', 24, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text',
                    text: 'Select This Character',
                    align: 'center',
                    rect: ['32px', '10px', '240px', '37px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Button}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(210,210,210,1.00)']
            ],
            "${_Text}": [
                ["style", "top", '10px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-family", 'Lucida Console, Monaco, monospace'],
                ["style", "left", '32px'],
                ["style", "font-size", '18px']
            ],
            "${symbolSelector}": [
                ["style", "height", '47px'],
                ["style", "width", '308px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            timeline: [
                { id: "eid2", tween: [ "color", "${_Button}", "background-color", 'rgba(136,136,136,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,210,210,1.00)'}], position: 0, duration: 250 },
                { id: "eid4", tween: [ "color", "${_Text}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 250 }            ]
        }
    }
},
"PlayerCardButton": {
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
                    rect: ['0px', '0px', '308px', '47px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'Button',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)'],
                    c: [
                    {
                        font: ['\'Lucida Console\', Monaco, monospace', 40, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                        type: 'text',
                        id: 'Text4',
                        text: 'View Player Card',
                        align: 'center',
                        rect: ['62px', '12px', 'auto', 'auto', 'auto', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Button}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(210,210,210,1.00)']
            ],
            "${symbolSelector}": [
                ["style", "height", '47px'],
                ["style", "width", '308px']
            ],
            "${_Text4}": [
                ["style", "top", '12px'],
                ["style", "left", '62px'],
                ["style", "font-size", '16px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"Inventory": {
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
                    type: 'rect',
                    id: 'background',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '-79px', '382px', '265px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_background}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '265px']
            ],
            "${symbolSelector}": [
                ["style", "height", '265px'],
                ["style", "width", '382px']
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
                { id: "eid71", tween: [ "style", "${_background}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
        }
    }
},
"inventory-item": {
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
                    id: 'title',
                    text: 'Item Title',
                    rect: ['92px', '0px', '274px', '33px', 'auto', 'auto'],
                    font: ['Lucida Console, Monaco, monospace', 14, 'rgba(41,41,41,1.00)', 'normal', 'none', '']
                },
                {
                    type: 'text',
                    id: 'description',
                    text: 'Item Description goes here<br>',
                    rect: ['92px', '32px', '274px', '33px', 'auto', 'auto'],
                    font: ['Lucida Console, Monaco, monospace', 14, 'rgba(41,41,41,1.00)', 'normal', 'none', '']
                },
                {
                    id: 'item-image-container',
                    type: 'rect',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'item-image-container',
                symbolName: 'item-image-container'
            }            ]
        },
    states: {
        "Base State": {
            "${_title}": [
                ["style", "top", '0px'],
                ["style", "width", '274px'],
                ["color", "color", 'rgba(41,41,41,1.00)'],
                ["style", "height", '33px'],
                ["style", "font-family", 'Lucida Console, Monaco, monospace'],
                ["style", "left", '92px'],
                ["style", "font-size", '14px']
            ],
            "${symbolSelector}": [
                ["style", "height", '83px'],
                ["style", "width", '366px']
            ],
            "${_description}": [
                ["style", "top", '32px'],
                ["style", "font-size", '14px'],
                ["style", "height", '33px'],
                ["color", "color", 'rgba(41,41,41,1)'],
                ["style", "font-family", '\'Lucida Console\', Monaco, monospace'],
                ["style", "left", '92px'],
                ["style", "width", '274px']
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
},
"item-image-container": {
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
                    type: 'rect',
                    id: 'image',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '85px', '64px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0)'],
                    c: [
                    {
                        id: 'monster-image',
                        type: 'image',
                        rect: ['0px', '0px', '100%', '129.5%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/default-item.png', '0%', '0%', '100%', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_monster-image}": [
                ["style", "top", '0px'],
                ["style", "height", '129.48%'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_image}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '83px'],
                ["style", "width", '85px']
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
},
"monster": {
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
                    font: ['Lucida Console, Monaco, monospace', 14, 'rgba(41,41,41,1.00)', 'normal', 'none', ''],
                    id: 'title',
                    text: 'Monster Title',
                    type: 'text',
                    rect: ['92px', '0px', '274px', '33px', 'auto', 'auto']
                },
                {
                    font: ['Lucida Console, Monaco, monospace', 14, 'rgba(41,41,41,1.00)', 'normal', 'none', ''],
                    id: 'description',
                    text: 'Monster Description goes here<br>',
                    type: 'text',
                    rect: ['92px', '32px', '274px', '33px', 'auto', 'auto']
                },
                {
                    id: 'monster-image-container',
                    type: 'rect',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'monster-image-container',
                symbolName: 'item-image-container',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_description}": [
                ["style", "top", '32px'],
                ["style", "width", '274px'],
                ["color", "color", 'rgba(41,41,41,1)'],
                ["style", "height", '33px'],
                ["style", "font-family", '\'Lucida Console\', Monaco, monospace'],
                ["style", "left", '92px'],
                ["style", "font-size", '14px']
            ],
            "${symbolSelector}": [
                ["style", "height", '83px'],
                ["style", "width", '366px']
            ],
            "${_title}": [
                ["style", "top", '0px'],
                ["style", "font-size", '14px'],
                ["style", "height", '33px'],
                ["color", "color", 'rgba(41,41,41,1.00)'],
                ["style", "font-family", 'Lucida Console, Monaco, monospace'],
                ["style", "left", '92px'],
                ["style", "width", '274px']
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
})(jQuery, AdobeEdge, "player");
