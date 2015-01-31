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
                id: 'item-card',
                type: 'image',
                rect: ['0', '0','500px','800px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"item-card.jpg",'0px','0px']
            },
            {
                id: 'Item-Attributes',
                type: 'rect',
                rect: ['25px', '307px','457px','68px','auto', 'auto'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'AttributesLabel',
                type: 'text',
                rect: ['23px', '282px','457px','auto','auto', 'auto'],
                text: "Attribute: ",
                font: ['Lucida Console, Monaco, monospace', 15, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Item-Title',
                type: 'text',
                rect: ['4px', '402px','500px','68px','auto', 'auto'],
                text: "Item Title",
                align: "center",
                font: ['\'Lucida Console\', Monaco, monospace', 24, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Item-Description',
                type: 'text',
                rect: ['37px', '447px','440px','101px','auto', 'auto'],
                text: "Item Description goes here.",
                align: "center",
                font: ['\'Lucida Console\', Monaco, monospace', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Equip-Item-Button',
                type: 'rect',
                rect: ['35px', '386px','445px','101px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                c: [
                {
                    id: 'Equip-Button-text',
                    type: 'text',
                    rect: ['15px', '134px','395px','68px','auto', 'auto'],
                    text: "Tap to buy this Item",
                    align: "center",
                    font: ['Lucida Console, Monaco, monospace', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Item-Description}": [
                ["style", "top", '585px'],
                ["style", "height", '84px'],
                ["style", "font-size", '18px'],
                ["style", "left", '38px'],
                ["style", "width", '440px']
            ],
            "${_Item-Title}": [
                ["style", "top", '540px'],
                ["style", "font-weight", '900'],
                ["style", "left", '5px'],
                ["style", "font-size", '24px']
            ],
            "${_Equip-Item-Button}": [
                ["style", "top", '535px'],
                ["style", "height", '203px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '38px'],
                ["style", "width", '427px']
            ],
            "${_AttributesLabel}": [
                ["style", "top", '490px'],
                ["style", "width", '121px'],
                ["style", "font-weight", 'bold'],
                ["style", "height", '31px'],
                ["style", "font-family", '\'Lucida Console\', Monaco, monospace'],
                ["style", "left", '38px'],
                ["style", "font-size", '14px']
            ],
            "${_Item-Attributes}": [
                ["style", "top", '472px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '167px'],
                ["style", "width", '298px']
            ],
            "${_Equip-Button-text}": [
                ["style", "top", '134px'],
                ["style", "text-align", 'center'],
                ["style", "width", '395px'],
                ["style", "height", '68px'],
                ["style", "font-family", 'Lucida Console, Monaco, monospace'],
                ["style", "left", '15px'],
                ["style", "font-size", '18px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '500px'],
                ["style", "height", '800px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: true,
            labels: {
                "selected": 250
            },
            timeline: [
                { id: "eid80", tween: [ "style", "${_Item-Description}", "top", '585px', { fromValue: '585px'}], position: 0, duration: 0 },
                { id: "eid84", tween: [ "style", "${_Equip-Item-Button}", "left", '38px', { fromValue: '38px'}], position: 0, duration: 0 },
                { id: "eid23", tween: [ "style", "${_AttributesLabel}", "height", '31px', { fromValue: '31px'}], position: 0, duration: 0 },
                { id: "eid86", tween: [ "style", "${_Equip-Item-Button}", "width", '427px', { fromValue: '427px'}], position: 0, duration: 0 },
                { id: "eid70", tween: [ "style", "${_Item-Description}", "left", '38px', { fromValue: '38px'}], position: 0, duration: 0 },
                { id: "eid40", tween: [ "style", "${_Item-Attributes}", "width", '298px', { fromValue: '298px'}], position: 0, duration: 0 },
                { id: "eid79", tween: [ "style", "${_Item-Title}", "top", '540px', { fromValue: '540px'}], position: 0, duration: 0 },
                { id: "eid83", tween: [ "style", "${_Equip-Item-Button}", "top", '535px', { fromValue: '535px'}], position: 0, duration: 0 },
                { id: "eid78", tween: [ "style", "${_Item-Attributes}", "top", '472px', { fromValue: '472px'}], position: 0, duration: 0 },
                { id: "eid90", tween: [ "color", "${_Equip-Item-Button}", "background-color", 'rgba(192,192,192,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,0.00)'}], position: 0, duration: 0 },
                { id: "eid77", tween: [ "style", "${_Item-Attributes}", "left", '167px', { fromValue: '167px'}], position: 0, duration: 0 },
                { id: "eid89", tween: [ "style", "${_Item-Description}", "height", '84px', { fromValue: '84px'}], position: 0, duration: 0 },
                { id: "eid38", tween: [ "style", "${_AttributesLabel}", "font-size", '14px', { fromValue: '14px'}], position: 0, duration: 0 },
                { id: "eid87", tween: [ "style", "${_Equip-Item-Button}", "height", '203px', { fromValue: '203px'}], position: 0, duration: 0 },
                { id: "eid72", tween: [ "style", "${_Item-Title}", "left", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
                { id: "eid75", tween: [ "style", "${_AttributesLabel}", "left", '38px', { fromValue: '38px'}], position: 0, duration: 0 },
                { id: "eid76", tween: [ "style", "${_AttributesLabel}", "top", '490px', { fromValue: '490px'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_AttributesLabel}", "width", '121px', { fromValue: '121px'}], position: 0, duration: 0 }            ]
        }
    }
},
"item-image": {
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
                    rect: ['0px', '0px', '400px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/default-item.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_image}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '400px'],
                ["style", "width", '400px']
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
})(jQuery, AdobeEdge, "item");
