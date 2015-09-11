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
                id: 'Item-Title',
                type: 'text',
                rect: ['4px', '402px','500px','68px','auto', 'auto'],
                text: "Item Title",
                align: "left",
                font: ['\'Lucida Console\', Monaco, monospace', 24, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Item-Description',
                type: 'text',
                rect: ['37px', '447px','440px','101px','auto', 'auto'],
                text: "Item Description goes here.",
                align: "left",
                font: ['\'Lucida Console\', Monaco, monospace', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
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
                rect: ['53px', '611px','133px','57px','auto', 'auto'],
                text: "Improves your:",
                align: "left",
                font: ['Lucida Console, Monaco, monospace', 15, "rgba(0,0,0,1)", "700", "none", ""]
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
                    id: 'Rectangle',
                    type: 'rect',
                    rect: ['47px', '168px','396px','76px','auto', 'auto'],
                    fill: ["rgba(230,226,226,0.29)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Equip-Button-text',
                    type: 'text',
                    rect: ['51px', '180px','387px','56px','auto', 'auto'],
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
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(230,226,226,0.29)'],
                ["style", "left", '47px'],
                ["style", "top", '168px']
            ],
            "${_Item-Description}": [
                ["style", "top", '517px'],
                ["style", "text-align", 'left'],
                ["style", "height", '84px'],
                ["style", "width", '387px'],
                ["style", "left", '53px'],
                ["style", "font-size", '16px']
            ],
            "${_Equip-Item-Button}": [
                ["style", "top", '483px'],
                ["style", "height", '312px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '5px'],
                ["style", "width", '495px']
            ],
            "${_AttributesLabel}": [
                ["style", "top", '612px'],
                ["style", "font-size", '14px'],
                ["style", "text-align", 'left'],
                ["style", "font-family", '\'Lucida Console\', Monaco, monospace'],
                ["style", "height", '15px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '53px'],
                ["style", "width", '254px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '800px'],
                ["style", "width", '500px']
            ],
            "${_Item-Attributes}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "height", '29px'],
                ["style", "top", '602px'],
                ["style", "left", '257px'],
                ["style", "width", '26px']
            ],
            "${_Equip-Button-text}": [
                ["style", "top", '180px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '18px'],
                ["style", "height", '56px'],
                ["style", "font-family", 'Lucida Console, Monaco, monospace'],
                ["style", "left", '51px'],
                ["style", "width", '387px']
            ],
            "${_Item-Title}": [
                ["style", "top", '483px'],
                ["style", "text-align", 'left'],
                ["style", "font-size", '20px'],
                ["style", "font-weight", '900'],
                ["style", "left", '53px'],
                ["style", "width", '395px']
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
                { id: "eid116", tween: [ "style", "${_Item-Title}", "width", '395px', { fromValue: '395px'}], position: 0, duration: 0 },
                { id: "eid163", tween: [ "style", "${_Item-Description}", "top", '517px', { fromValue: '517px'}], position: 0, duration: 0 },
                { id: "eid157", tween: [ "style", "${_Equip-Item-Button}", "left", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
                { id: "eid170", tween: [ "style", "${_AttributesLabel}", "height", '15px', { fromValue: '15px'}], position: 0, duration: 0 },
                { id: "eid154", tween: [ "style", "${_Equip-Item-Button}", "width", '495px', { fromValue: '495px'}], position: 0, duration: 0 },
                { id: "eid123", tween: [ "style", "${_Item-Description}", "left", '53px', { fromValue: '53px'}], position: 0, duration: 0 },
                { id: "eid172", tween: [ "style", "${_Item-Attributes}", "width", '26px', { fromValue: '26px'}], position: 0, duration: 0 },
                { id: "eid153", tween: [ "style", "${_Item-Description}", "width", '387px', { fromValue: '387px'}], position: 0, duration: 0 },
                { id: "eid171", tween: [ "style", "${_Item-Attributes}", "height", '29px', { fromValue: '29px'}], position: 0, duration: 0 },
                { id: "eid161", tween: [ "style", "${_Item-Title}", "top", '483px', { fromValue: '483px'}], position: 0, duration: 0 },
                { id: "eid169", tween: [ "style", "${_AttributesLabel}", "top", '612px', { fromValue: '612px'}], position: 0, duration: 0 },
                { id: "eid90", tween: [ "color", "${_Equip-Item-Button}", "background-color", 'rgba(192,192,192,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,0.00)'}], position: 0, duration: 0 },
                { id: "eid177", tween: [ "style", "${_Item-Attributes}", "top", '602px', { fromValue: '602px'}], position: 0, duration: 0 },
                { id: "eid159", tween: [ "style", "${_Equip-Item-Button}", "height", '312px', { fromValue: '312px'}], position: 0, duration: 0 },
                { id: "eid166", tween: [ "style", "${_AttributesLabel}", "left", '53px', { fromValue: '53px'}], position: 0, duration: 0 },
                { id: "eid89", tween: [ "style", "${_Item-Description}", "height", '84px', { fromValue: '84px'}], position: 0, duration: 0 },
                { id: "eid114", tween: [ "style", "${_Item-Description}", "font-size", '16px', { fromValue: '16px'}], position: 0, duration: 0 },
                { id: "eid175", tween: [ "style", "${_Item-Attributes}", "left", '257px', { fromValue: '257px'}], position: 0, duration: 0 },
                { id: "eid115", tween: [ "style", "${_Item-Title}", "left", '53px', { fromValue: '53px'}], position: 0, duration: 0 },
                { id: "eid158", tween: [ "style", "${_Equip-Item-Button}", "top", '483px', { fromValue: '483px'}], position: 0, duration: 0 },
                { id: "eid162", tween: [ "style", "${_Item-Title}", "font-size", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
                { id: "eid144", tween: [ "style", "${_AttributesLabel}", "width", '254px', { fromValue: '254px'}], position: 0, duration: 0 }            ]
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
