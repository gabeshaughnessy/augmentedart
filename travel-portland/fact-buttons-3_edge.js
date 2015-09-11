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
                id: 'button1',
                type: 'rect',
                rect: ['278px', '464px','auto','auto','auto', 'auto'],
                opacity: 0,
                transform: [[],[],[],['5.25','5.25']]
            },
            {
                id: 'button2',
                type: 'rect',
                rect: ['459px', '469px','auto','auto','auto', 'auto'],
                opacity: 0,
                transform: [[],[],[],['5.25','5.25']]
            },
            {
                id: 'button3',
                type: 'rect',
                rect: ['380px', '469px','auto','auto','auto', 'auto'],
                opacity: 0,
                transform: [[],[],[],['5.25','5.25']]
            },
            {
                id: 'logo',
                type: 'rect',
                rect: ['6px', '379px','auto','auto','auto', 'auto']
            },
            {
                id: 'factButton1',
                type: 'rect',
                rect: ['0px', '0px','auto','auto','auto', 'auto']
            },
            {
                id: 'factButton2',
                type: 'rect',
                rect: ['0px', '120px','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'button2',
                symbolName: 'button2'
            },
            {
                id: 'factButton2',
                symbolName: 'factButton2'
            },
            {
                id: 'button1',
                symbolName: 'button1'
            },
            {
                id: 'logo',
                symbolName: 'logo',
                autoPlay: {

                }
            },
            {
                id: 'factButton1',
                symbolName: 'factButton',
                autoPlay: {

                }
            },
            {
                id: 'button3',
                symbolName: 'button3'
            }
            ]
        },
    states: {
        "Base State": {
            "${_button3}": [
                ["style", "top", '469px'],
                ["transform", "scaleY", '5.25'],
                ["transform", "scaleX", '5.25'],
                ["style", "opacity", '0'],
                ["style", "left", '380px']
            ],
            "${_logo}": [
                ["style", "top", '379px'],
                ["style", "left", '8px']
            ],
            "${_factButton1}": [
                ["transform", "scaleX", '1'],
                ["style", "left", '0px'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '500px'],
                ["style", "height", '500px'],
                ["style", "overflow", 'hidden']
            ],
            "${_button2}": [
                ["style", "top", '469px'],
                ["transform", "scaleY", '5.25'],
                ["transform", "scaleX", '5.25'],
                ["style", "opacity", '0'],
                ["style", "left", '459px']
            ],
            "${_factButton2}": [
                ["style", "left", '0px'],
                ["style", "top", '120px']
            ],
            "${_button1}": [
                ["style", "top", '464px'],
                ["transform", "scaleY", '5.25'],
                ["transform", "scaleX", '5.25'],
                ["style", "opacity", '0'],
                ["style", "left", '278px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15000,
            autoPlay: true,
            timeline: [
                { id: "eid58", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_logo}', [] ], ""], position: 1000 },
                { id: "eid49", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_factButton1}', [] ], ""], position: 1000 },
                { id: "eid153", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_factButton2}', [] ], ""], position: 2000 }            ]
        }
    }
},
"factButton": {
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
                    id: 'button',
                    type: 'image',
                    rect: ['6px', '7px', '120px', '105px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/button-2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_button}": [
                ["style", "top", '7px'],
                ["style", "left", '6px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '120px'],
                ["style", "width", '500px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 13000,
            autoPlay: false,
            labels: {
                "loop": 500
            },
            timeline: [
                { id: "eid110", tween: [ "transform", "${_button}", "scaleX", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid129", tween: [ "transform", "${_button}", "scaleX", '0.5', { fromValue: '1'}], position: 4000, duration: 598, easing: "easeOutBack" },
                { id: "eid130", tween: [ "transform", "${_button}", "scaleX", '1', { fromValue: '0.5'}], position: 4598, duration: 834, easing: "easeOutBack" },
                { id: "eid135", tween: [ "transform", "${_button}", "scaleX", '0.5', { fromValue: '1'}], position: 8502, duration: 598, easing: "easeOutBack" },
                { id: "eid136", tween: [ "transform", "${_button}", "scaleX", '1', { fromValue: '0.5'}], position: 9100, duration: 834, easing: "easeOutBack" },
                { id: "eid133", tween: [ "transform", "${_button}", "scaleX", '1', { fromValue: '1'}], position: 12000, duration: 0, easing: "easeOutBack" },
                { id: "eid123", tween: [ "transform", "${_button}", "scaleX", '0', { fromValue: '1'}], position: 12000, duration: 1000, easing: "easeOutBack" },
                { id: "eid112", tween: [ "transform", "${_button}", "scaleY", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid131", tween: [ "transform", "${_button}", "scaleY", '0.5', { fromValue: '1'}], position: 4000, duration: 598, easing: "easeOutBack" },
                { id: "eid132", tween: [ "transform", "${_button}", "scaleY", '1', { fromValue: '0.5'}], position: 4598, duration: 834, easing: "easeOutBack" },
                { id: "eid137", tween: [ "transform", "${_button}", "scaleY", '0.5', { fromValue: '1'}], position: 8502, duration: 598, easing: "easeOutBack" },
                { id: "eid138", tween: [ "transform", "${_button}", "scaleY", '1', { fromValue: '0.5'}], position: 9100, duration: 834, easing: "easeOutBack" },
                { id: "eid134", tween: [ "transform", "${_button}", "scaleY", '1', { fromValue: '1'}], position: 12000, duration: 0, easing: "easeOutBack" },
                { id: "eid124", tween: [ "transform", "${_button}", "scaleY", '0', { fromValue: '1'}], position: 12000, duration: 1000, easing: "easeOutBack" }            ]
        }
    }
},
"logo": {
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
                    id: 'TP_logo',
                    type: 'image',
                    rect: ['0px', '0px', '200px', '42px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TP_logo.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_TP_logo}": [
                ["style", "top", '0px'],
                ["transform", "scaleX", '0'],
                ["transform", "scaleY", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '42px'],
                ["style", "width", '200px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid56", tween: [ "transform", "${_TP_logo}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutBack" },
                { id: "eid57", tween: [ "transform", "${_TP_logo}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutBack" }            ]
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
                    rect: ['0px', '0px', '13px', '8px', 'auto', 'auto'],
                    id: 'button1',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '8px'],
                ["style", "width", '13px']
            ],
            "${_button1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
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
"button2": {
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
                    rect: ['0px', '0px', '13px', '8px', 'auto', 'auto'],
                    id: 'button2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '8px'],
                ["style", "width", '13px']
            ],
            "${_button2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
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
"button3": {
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
                    rect: ['0px', '0px', '13px', '8px', 'auto', 'auto'],
                    id: 'button3',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_button3}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '8px'],
                ["style", "width", '13px']
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
"factButton2": {
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
                    id: 'button',
                    type: 'image',
                    rect: ['67px', '7px', '120px', '105px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/button-2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_button}": [
                ["style", "top", '7px'],
                ["transform", "scaleX", '0'],
                ["style", "left", '67px'],
                ["transform", "scaleY", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '120px'],
                ["style", "width", '500px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 13000,
            autoPlay: false,
            labels: {
                "loop": 500
            },
            timeline: [
                { id: "eid139", tween: [ "transform", "${_button}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutBack" },
                { id: "eid140", tween: [ "transform", "${_button}", "scaleX", '0.5', { fromValue: '1'}], position: 3500, duration: 598, easing: "easeOutBack" },
                { id: "eid141", tween: [ "transform", "${_button}", "scaleX", '1', { fromValue: '0.5'}], position: 4098, duration: 834, easing: "easeOutBack" },
                { id: "eid142", tween: [ "transform", "${_button}", "scaleX", '0.5', { fromValue: '1'}], position: 8002, duration: 598, easing: "easeOutBack" },
                { id: "eid143", tween: [ "transform", "${_button}", "scaleX", '1', { fromValue: '0.5'}], position: 8600, duration: 834, easing: "easeOutBack" },
                { id: "eid145", tween: [ "transform", "${_button}", "scaleX", '0', { fromValue: '1'}], position: 11500, duration: 1000, easing: "easeOutBack" },
                { id: "eid146", tween: [ "transform", "${_button}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutBack" },
                { id: "eid147", tween: [ "transform", "${_button}", "scaleY", '0.5', { fromValue: '1'}], position: 3500, duration: 598, easing: "easeOutBack" },
                { id: "eid148", tween: [ "transform", "${_button}", "scaleY", '1', { fromValue: '0.5'}], position: 4098, duration: 834, easing: "easeOutBack" },
                { id: "eid149", tween: [ "transform", "${_button}", "scaleY", '0.5', { fromValue: '1'}], position: 8002, duration: 598, easing: "easeOutBack" },
                { id: "eid150", tween: [ "transform", "${_button}", "scaleY", '1', { fromValue: '0.5'}], position: 8600, duration: 834, easing: "easeOutBack" },
                { id: "eid152", tween: [ "transform", "${_button}", "scaleY", '0', { fromValue: '1'}], position: 11500, duration: 1000, easing: "easeOutBack" }            ]
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
})(jQuery, AdobeEdge, "fact-buttons");
