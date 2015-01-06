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
                rect: ['242px', '581px','457px','68px','auto', 'auto'],
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
                rect: ['242px', '550px','173px','auto','auto', 'auto'],
                text: "Secondary Attribute",
                font: ['Lucida Console, Monaco, monospace', 15, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Description',
                type: 'text',
                rect: ['23px', '472px','422px','78px','auto', 'auto'],
                text: "Description goes right here and takes up a couple of lines.",
                font: ['Lucida Console, Monaco, monospace', 15, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Title',
                type: 'text',
                rect: ['37px', '430px','422px','auto','auto', 'auto'],
                text: "Monster Title",
                align: "center",
                font: ['Lucida Console, Monaco, monospace', 24, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Monster-Image',
                type: 'image',
                rect: ['67px', '39px','349px','367px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"monster.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '800px'],
                ["style", "width", '500px']
            ],
            "${_Title}": [
                ["style", "top", '430px'],
                ["style", "width", '422px'],
                ["style", "text-align", 'center'],
                ["style", "font-weight", 'bold'],
                ["style", "height", '31px'],
                ["style", "font-family", '\'Lucida Console\', Monaco, monospace'],
                ["style", "left", '37px'],
                ["style", "font-size", '24px']
            ],
            "${_Secondary-Attribute}": [
                ["style", "top", '581px'],
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "left", '242px'],
                ["style", "width", '173px']
            ],
            "${_Monster-Image}": [
                ["style", "height", '367px'],
                ["style", "top", '39px'],
                ["style", "left", '67px'],
                ["style", "width", '349px']
            ],
            "${_SecondaryAttLabel}": [
                ["style", "top", '550px'],
                ["style", "width", '173px'],
                ["style", "font-weight", 'bold'],
                ["style", "height", '31px'],
                ["style", "font-family", '\'Lucida Console\', Monaco, monospace'],
                ["style", "left", '242px'],
                ["style", "font-size", '14px']
            ],
            "${_Description}": [
                ["style", "top", '472px'],
                ["style", "width", '422px'],
                ["style", "font-weight", 'bold'],
                ["style", "height", '78px'],
                ["style", "font-family", '\'Lucida Console\', Monaco, monospace'],
                ["style", "left", '37px'],
                ["style", "font-size", '14px']
            ],
            "${_PrimaryAttLabel}": [
                ["style", "top", '550px'],
                ["style", "font-size", '14px'],
                ["style", "font-family", '\'Lucida Console\', Monaco, monospace'],
                ["style", "height", '31px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '37px'],
                ["style", "width", '161px']
            ],
            "${_Primary-Attribute}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '581px'],
                ["style", "left", '37px'],
                ["style", "width", '173px']
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
                { id: "eid14", tween: [ "style", "${_Primary-Attribute}", "width", '173px', { fromValue: '173px'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_PrimaryAttLabel}", "left", '37px', { fromValue: '37px'}], position: 0, duration: 0 },
                { id: "eid5", tween: [ "style", "${_PrimaryAttLabel}", "font-size", '14px', { fromValue: '14px'}], position: 0, duration: 0 },
                { id: "eid11", tween: [ "style", "${_PrimaryAttLabel}", "width", '161px', { fromValue: '161px'}], position: 0, duration: 0 },
                { id: "eid15", tween: [ "style", "${_PrimaryAttLabel}", "top", '550px', { fromValue: '550px'}], position: 0, duration: 0 },
                { id: "eid16", tween: [ "style", "${_Primary-Attribute}", "top", '581px', { fromValue: '581px'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${_Primary-Attribute}", "left", '37px', { fromValue: '37px'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_PrimaryAttLabel}", "height", '31px', { fromValue: '31px'}], position: 0, duration: 0 }            ]
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
