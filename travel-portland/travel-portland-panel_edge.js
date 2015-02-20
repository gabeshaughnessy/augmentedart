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
                id: 'background',
                type: 'rect',
                rect: ['0', '3','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'background',
                symbolName: 'background'
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '500px'],
                ["style", "height", '500px'],
                ["style", "overflow", 'hidden']
            ],
            "${_background}": [
                ["style", "clip", [500,0,500,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: true,
            timeline: [
                { id: "eid14", tween: [ "style", "${_background}", "clip", [0,500,500,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [500,0,500,0]}], position: 0, duration: 500 },
                { id: "eid15", tween: [ "style", "${_background}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 }            ]
        }
    }
},
"background": {
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
                    id: 'Panel-1_02',
                    type: 'image',
                    rect: ['0px', '72px', '500px', '425px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/images/Panel-1_02.jpg', '0px', '0px']
                },
                {
                    id: 'Panel-1_01',
                    type: 'image',
                    rect: ['0px', '-3px', '500px', '75px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/images/Panel-1_01.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Panel-1_01}": [
                ["style", "height", '75px'],
                ["style", "top", '-3px'],
                ["style", "left", '0px'],
                ["style", "width", '500px']
            ],
            "${symbolSelector}": [
                ["style", "height", '497px'],
                ["style", "width", '500px']
            ],
            "${_Panel-1_02}": [
                ["style", "top", '72px'],
                ["style", "height", '425px'],
                ["style", "left", '0px'],
                ["style", "width", '500px']
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
})(jQuery, AdobeEdge, "EDGE-221343168");
