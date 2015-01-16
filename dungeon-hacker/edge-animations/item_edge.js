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
                id: 'Equip-Item-Button',
                type: 'rect',
                rect: ['35px', '386px','445px','101px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                c: [
                {
                    id: 'item-image',
                    type: 'rect',
                    rect: ['15', '-381','auto','auto','auto', 'auto']
                },
                {
                    id: 'Equip-Button-text',
                    type: 'text',
                    rect: ['0px', '27px','445px','69px','auto', 'auto'],
                    text: "Equip this Item?",
                    align: "center",
                    font: ['Lucida Console, Monaco, monospace', 32, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
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
            }],
            symbolInstances: [
            {
                id: 'item-image',
                symbolName: 'item-image',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Equip-Button-text}": [
                ["style", "top", '27px'],
                ["style", "text-align", 'center'],
                ["style", "height", '69px'],
                ["style", "font-family", 'Lucida Console, Monaco, monospace'],
                ["style", "left", '0px'],
                ["style", "font-size", '32px']
            ],
            "${_Item-Description}": [
                ["style", "top", '447px'],
                ["style", "height", '101px'],
                ["style", "width", '440px'],
                ["style", "left", '37px'],
                ["style", "font-size", '18px']
            ],
            "${_Equip-Item-Button}": [
                ["style", "top", '635px'],
                ["style", "left", '32px']
            ],
            "${_AttributesLabel}": [
                ["style", "top", '566px'],
                ["style", "font-size", '14px'],
                ["style", "font-family", '\'Lucida Console\', Monaco, monospace'],
                ["style", "height", '31px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '37px'],
                ["style", "width", '121px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '800px'],
                ["style", "width", '500px']
            ],
            "${_Item-Attributes}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '548px'],
                ["style", "left", '166px'],
                ["style", "width", '298px']
            ],
            "${_Item-Title}": [
                ["style", "font-weight", '900'],
                ["style", "font-size", '24px']
            ],
            "${_item-image}": [
                ["transform", "scaleX", '0.9282'],
                ["transform", "scaleY", '0.9282'],
                ["style", "left", '18px'],
                ["style", "top", '-629px']
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
                { id: "eid14", tween: [ "transform", "${_item-image}", "scaleX", '0.9282', { fromValue: '0.9282'}], position: 0, duration: 0 },
                { id: "eid41", tween: [ "style", "${_Item-Attributes}", "top", '548px', { fromValue: '548px'}], position: 0, duration: 0 },
                { id: "eid42", tween: [ "style", "${_Equip-Item-Button}", "top", '635px', { fromValue: '635px'}], position: 0, duration: 0 },
                { id: "eid44", tween: [ "style", "${_item-image}", "top", '-629px', { fromValue: '-629px'}], position: 0, duration: 0 },
                { id: "eid38", tween: [ "style", "${_AttributesLabel}", "font-size", '14px', { fromValue: '14px'}], position: 0, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Equip-Item-Button}", "left", '32px', { fromValue: '32px'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "style", "${_Item-Attributes}", "left", '166px', { fromValue: '166px'}], position: 0, duration: 0 },
                { id: "eid32", tween: [ "style", "${_AttributesLabel}", "left", '37px', { fromValue: '37px'}], position: 0, duration: 0 },
                { id: "eid23", tween: [ "style", "${_AttributesLabel}", "height", '31px', { fromValue: '31px'}], position: 0, duration: 0 },
                { id: "eid43", tween: [ "style", "${_AttributesLabel}", "top", '566px', { fromValue: '566px'}], position: 0, duration: 0 },
                { id: "eid18", tween: [ "style", "${_item-image}", "left", '18px', { fromValue: '18px'}], position: 0, duration: 0 },
                { id: "eid15", tween: [ "transform", "${_item-image}", "scaleY", '0.9282', { fromValue: '0.9282'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_AttributesLabel}", "width", '121px', { fromValue: '121px'}], position: 0, duration: 0 },
                { id: "eid40", tween: [ "style", "${_Item-Attributes}", "width", '298px', { fromValue: '298px'}], position: 0, duration: 0 }            ]
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
