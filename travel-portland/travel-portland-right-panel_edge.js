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
                symbolName: 'background',
                autoPlay: {

                }
            }
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
                { id: "eid15", tween: [ "style", "${_background}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid14", tween: [ "style", "${_background}", "clip", [0,500,500,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [500,0,500,0]}], position: 0, duration: 500 }            ]
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
                    id: 'Panel-3_01',
                    type: 'image',
                    rect: ['0', '0', '500px', '119px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/images/Panel-3_01.png', '0px', '0px']
                },
                {
                    id: 'Panel-3_022',
                    type: 'image',
                    rect: ['0', '119', '500px', '379px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/images/Panel-3_02.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '497px'],
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
},
"instructions": {
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
                    id: 'instructions-bg',
                    type: 'image',
                    rect: ['-16px', '-34px', '467px', '211px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/instructions-bg.png', '0px', '0px']
                },
                {
                    id: 'Instructions_06',
                    type: 'image',
                    rect: ['0px', '107px', '432px', '57px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/images/Instructions_06.jpg', '0px', '0px']
                },
                {
                    id: 'Instructions_05',
                    type: 'image',
                    rect: ['0px', '44px', '432px', '63px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/images/Instructions_05.jpg', '0px', '0px']
                },
                {
                    id: 'Instructions_03',
                    type: 'image',
                    rect: ['0px', '1px', '432px', '43px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/images/Instructions_03.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Instructions_03}": [
                ["style", "top", '1px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '166px'],
                ["style", "width", '432px']
            ],
            "${_Instructions_05}": [
                ["style", "top", '44px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_Instructions_06}": [
                ["style", "top", '107px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_instructions-bg}": [
                ["style", "height", '211px'],
                ["style", "top", '-34px'],
                ["style", "left", '-16px'],
                ["style", "width", '467px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5500,
            autoPlay: false,
            timeline: [
                { id: "eid17", tween: [ "style", "${_Instructions_03}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
                { id: "eid19", tween: [ "style", "${_Instructions_05}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 500 },
                { id: "eid21", tween: [ "style", "${_Instructions_06}", "opacity", '1', { fromValue: '0'}], position: 5000, duration: 500 }            ]
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
