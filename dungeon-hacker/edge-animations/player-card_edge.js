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
                rect: ['7px', '706px','382px','265px','auto', 'auto'],
                fill: ["rgba(192,192,192,0)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
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
                id: 'Title',
                type: 'text',
                rect: ['0px', '15px','400px','auto','auto', 'auto'],
                text: "Title",
                font: ['Lucida Console, Monaco, monospace', 24, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'page_label',
                type: 'text',
                rect: ['1px', '56px','400px','32px','auto', 'auto'],
                text: "Player Card",
                align: "center",
                font: ['\'Lucida Console\', Monaco, monospace', 13, "rgba(60,60,60,1.00)", "bold", "none", "normal"]
            },
            {
                id: 'logo',
                type: 'image',
                rect: ['0', '0','400px','57px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dungeon-hacker-logo.png",'0px','0px']
            }],
            symbolInstances: [
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
            "${_Title}": [
                ["color", "color", 'rgba(62,61,61,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '5px'],
                ["style", "width", '390px'],
                ["style", "top", '89px'],
                ["transform", "scaleY", '1'],
                ["style", "font-family", 'Lucida Console, Monaco, monospace'],
                ["style", "word-spacing", '0px'],
                ["transform", "scaleX", '1']
            ],
            "${_PlayerImage}": [
                ["style", "top", '143px'],
                ["transform", "scaleY", '0.91394'],
                ["transform", "scaleX", '0.91394'],
                ["style", "opacity", '1'],
                ["style", "left", '-18px']
            ],
            "${_Monsters}": [
                ["style", "height", '265px'],
                ["style", "top", '1092px']
            ],
            "${_AttributesLabel}": [
                ["style", "top", '554px'],
                ["style", "width", '390px'],
                ["style", "font-family", '\'Lucida Console\', Monaco, monospace'],
                ["color", "color", 'rgba(62,61,61,1.00)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '5px'],
                ["style", "font-size", '15px']
            ],
            "${_Inventory}": [
                ["style", "height", '265px'],
                ["style", "top", '785px']
            ],
            "${_Description}": [
                ["style", "top", '125px'],
                ["color", "color", 'rgba(62,61,61,1.00)'],
                ["style", "width", '395px'],
                ["style", "height", '84px'],
                ["style", "font-family", 'Lucida Console, Monaco, monospace'],
                ["style", "left", '5px'],
                ["style", "font-size", '16px']
            ],
            "${_logo}": [
                ["style", "height", '57px'],
                ["style", "width", '400px']
            ],
            "${_CryptoCredits}": [
                ["style", "top", '675px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '5px'],
                ["style", "width", '390px']
            ],
            "${_page_label}": [
                ["color", "color", 'rgba(60,60,60,1.00)'],
                ["style", "top", '56px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '13px']
            ],
            "${_Attributes}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '582px'],
                ["style", "left", '5px'],
                ["style", "width", '390px']
            ],
            "${_MonstersLabel}": [
                ["style", "top", '1050px'],
                ["style", "font-size", '15px'],
                ["style", "font-weight", 'bold'],
                ["color", "color", 'rgba(62,61,61,1)'],
                ["style", "font-family", '\'Lucida Console\', Monaco, monospace'],
                ["style", "left", '5px'],
                ["style", "width", '390px']
            ],
            "${_SharingLabel}": [
                ["style", "top", '1357px'],
                ["style", "width", '390px'],
                ["style", "font-family", '\'Lucida Console\', Monaco, monospace'],
                ["color", "color", 'rgba(62,61,61,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '5px'],
                ["style", "font-size", '15px']
            ],
            "${_InventoryLabel}": [
                ["style", "top", '743px'],
                ["style", "width", '390px'],
                ["style", "font-family", '\'Lucida Console\', Monaco, monospace'],
                ["color", "color", 'rgba(62,61,61,1.00)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '5px'],
                ["style", "font-size", '15px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1590px'],
                ["style", "width", '400px']
            ],
            "${_CryptoCreditsLabel}": [
                ["style", "top", '650px'],
                ["style", "font-weight", 'bold'],
                ["style", "font-size", '15px'],
                ["color", "color", 'rgba(62,61,61,1.00)'],
                ["style", "font-family", '\'Lucida Console\', Monaco, monospace'],
                ["style", "left", '5px'],
                ["style", "width", '390px']
            ],
            "${_Sharing}": [
                ["style", "height", '84px'],
                ["style", "top", '1399px']
            ],
            "${_paper-bg}": [
                ["style", "top", '-8px'],
                ["style", "height", '1600px'],
                ["style", "left", '-80px'],
                ["style", "width", '600px']
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
                { id: "eid71", tween: [ "style", "${_Inventory}", "top", '785px', { fromValue: '785px'}], position: 0, duration: 0 },
                { id: "eid62", tween: [ "style", "${_Description}", "width", '395px', { fromValue: '395px'}], position: 0, duration: 0 },
                { id: "eid54", tween: [ "color", "${_CryptoCreditsLabel}", "color", 'rgba(62,61,61,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(62,61,61,1.00)'}], position: 0, duration: 0 },
                { id: "eid65", tween: [ "style", "${_CryptoCredits}", "left", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
                { id: "eid56", tween: [ "style", "${_Title}", "word-spacing", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid69", tween: [ "style", "${_InventoryLabel}", "left", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
                { id: "eid66", tween: [ "style", "${_CryptoCredits}", "width", '390px', { fromValue: '390px'}], position: 0, duration: 0 },
                { id: "eid64", tween: [ "style", "${_CryptoCreditsLabel}", "width", '390px', { fromValue: '390px'}], position: 0, duration: 0 },
                { id: "eid73", tween: [ "color", "${_AttributesLabel}", "color", 'rgba(62,61,61,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(62,61,61,1.00)'}], position: 0, duration: 0 },
                { id: "eid67", tween: [ "style", "${_InventoryLabel}", "top", '743px', { fromValue: '743px'}], position: 0, duration: 0 },
                { id: "eid70", tween: [ "style", "${_InventoryLabel}", "width", '390px', { fromValue: '390px'}], position: 0, duration: 0 },
                { id: "eid59", tween: [ "style", "${_Title}", "width", '390px', { fromValue: '390px'}], position: 0, duration: 0 },
                { id: "eid51", tween: [ "style", "${_Title}", "top", '89px', { fromValue: '89px'}], position: 0, duration: 0 },
                { id: "eid68", tween: [ "color", "${_InventoryLabel}", "color", 'rgba(62,61,61,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(62,61,61,1.00)'}], position: 0, duration: 0 },
                { id: "eid55", tween: [ "color", "${_Title}", "color", 'rgba(62,61,61,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(62,61,61,1.00)'}], position: 0, duration: 0 },
                { id: "eid53", tween: [ "color", "${_Description}", "color", 'rgba(62,61,61,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(62,61,61,1.00)'}], position: 0, duration: 0 },
                { id: "eid52", tween: [ "style", "${_CryptoCredits}", "top", '675px', { fromValue: '675px'}], position: 0, duration: 0 },
                { id: "eid61", tween: [ "style", "${_Description}", "left", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
                { id: "eid74", tween: [ "style", "${_AttributesLabel}", "left", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
                { id: "eid63", tween: [ "style", "${_CryptoCreditsLabel}", "left", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
                { id: "eid48", tween: [ "style", "${_Description}", "top", '125px', { fromValue: '125px'}], position: 0, duration: 0 },
                { id: "eid72", tween: [ "style", "${_AttributesLabel}", "top", '554px', { fromValue: '554px'}], position: 0, duration: 0 },
                { id: "eid50", tween: [ "style", "${_CryptoCreditsLabel}", "top", '650px', { fromValue: '650px'}], position: 0, duration: 0 },
                { id: "eid60", tween: [ "style", "${_Title}", "left", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
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
                ["style", "top", '0px'],
                ["style", "height", '88.51%'],
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
                    type: 'text',
                    rect: ['32px', '10px', '240px', '37px', 'auto', 'auto'],
                    id: 'Text',
                    text: 'Select This Character',
                    align: 'center',
                    font: ['Lucida Console, Monaco, monospace', 24, 'rgba(0,0,0,1)', '400', 'none', 'normal']
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
                        type: 'text',
                        rect: ['62px', '12px', 'auto', 'auto', 'auto', 'auto'],
                        id: 'Text4',
                        text: 'View Player Card',
                        align: 'center',
                        font: ['\'Lucida Console\', Monaco, monospace', 40, 'rgba(0,0,0,1)', '400', 'none', 'normal']
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
            "${_Text4}": [
                ["style", "top", '12px'],
                ["style", "left", '62px'],
                ["style", "font-size", '16px']
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
            duration: 0,
            autoPlay: false,
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
