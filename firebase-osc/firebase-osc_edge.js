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
    scaleToFit: "both",
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'cool_metal_texture_by_skipgo',
                type: 'image',
                rect: ['0', '0','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cool_metal_texture_by_skipgo.jpg",'0px','0px']
            },
            {
                id: 'button1',
                type: 'rect',
                rect: ['1', '1','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'button1',
                symbolName: 'button1'
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '400px'],
                ["style", "width", '400px']
            ],
            "${_button1}": [
                ["transform", "scaleX", '4'],
                ["style", "top", '151px'],
                ["style", "left", '151px'],
                ["transform", "scaleY", '4']
            ],
            "${_cool_metal_texture_by_skipgo}": [
                ["style", "height", '100%'],
                ["style", "width", '100%']
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
                { id: "eid3", tween: [ "transform", "${_button1}", "scaleY", '4', { fromValue: '4'}], position: 0, duration: 0 },
                { id: "eid1", tween: [ "transform", "${_button1}", "scaleX", '4', { fromValue: '4'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_button1}", "left", '151px', { fromValue: '151px'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_button1}", "top", '151px', { fromValue: '151px'}], position: 0, duration: 0 }            ]
        }
    }
},
"button1": {
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
                    rect: ['0px', '0px', '100px', '100px', 'auto', 'auto'],
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    id: 'Rectangle',
                    opacity: 0.49879319105691,
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                },
                {
                    rect: ['5px', '35px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text',
                    text: 'Button 1<br>',
                    font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.49879319105691'],
                ["style", "left", '0px']
            ],
            "${_Text}": [
                ["style", "left", '5px'],
                ["style", "top", '35px']
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "width", '100px']
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
})(jQuery, AdobeEdge, "EDGE-77361997");
