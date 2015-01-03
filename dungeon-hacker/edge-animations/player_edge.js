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
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Title',
                type: 'text',
                rect: ['28px', '15px','437px','auto','auto', 'auto'],
                text: "Title",
                font: ['Lucida Console, Monaco, monospace', 24, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Description',
                type: 'text',
                rect: ['28px', '51px','437px','84px','auto', 'auto'],
                text: "This is the default player Description.",
                align: "left",
                font: ['Lucida Console, Monaco, monospace', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'PlayerImage',
                type: 'rect',
                rect: ['28px', '135px','437px','321px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '500px'],
                ["style", "width", '500px']
            ],
            "${_Title}": [
                ["style", "top", '15px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Lucida Console, Monaco, monospace'],
                ["style", "left", '28px'],
                ["style", "width", '437px']
            ],
            "${_Description}": [
                ["style", "top", '51px'],
                ["style", "width", '437px'],
                ["style", "height", '84px'],
                ["style", "font-family", 'Lucida Console, Monaco, monospace'],
                ["style", "left", '28px'],
                ["style", "font-size", '16px']
            ],
            "${_PlayerImage}": [
                ["style", "top", '135px'],
                ["style", "height", '321px'],
                ["style", "left", '28px'],
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
