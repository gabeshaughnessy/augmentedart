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
                rect: ['1', '102','auto','auto','auto', 'auto'],
                opacity: 0
            },
            {
                id: 'button2',
                type: 'rect',
                rect: ['241px', '96px','auto','auto','auto', 'auto'],
                opacity: 0
            },
            {
                id: 'button3',
                type: 'rect',
                rect: ['126px', '100px','auto','auto','auto', 'auto'],
                opacity: 0
            },
            {
                id: 'factButton1',
                type: 'rect',
                rect: ['241px', '10px','auto','auto','auto', 'auto']
            },
            {
                id: 'factButton2',
                type: 'rect',
                rect: ['345px', '-24px','auto','auto','auto', 'auto']
            },
            {
                id: 'logo',
                type: 'rect',
                rect: ['6px', '34px','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'button2',
                symbolName: 'button2'
            },
            {
                id: 'factButton2',
                symbolName: 'factButton'
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
                ["style", "top", '100px'],
                ["style", "opacity", '0'],
                ["style", "left", '126px']
            ],
            "${_logo}": [
                ["style", "top", '34px'],
                ["style", "left", '6px']
            ],
            "${_factButton1}": [
                ["transform", "scaleX", '1'],
                ["style", "left", '241px'],
                ["style", "top", '10px'],
                ["transform", "scaleY", '1']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '470px'],
                ["style", "height", '110px'],
                ["style", "overflow", 'hidden']
            ],
            "${_button2}": [
                ["style", "top", '96px'],
                ["style", "opacity", '0'],
                ["style", "left", '241px']
            ],
            "${_factButton2}": [
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '345px'],
                ["style", "top", '-24px']
            ],
            "${_button1}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 17250,
            autoPlay: true,
            timeline: [
                { id: "eid51", tween: [ "style", "${_Stage}", "width", '470px', { fromValue: '470px'}], position: 0, duration: 0 },
                { id: "eid58", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_logo}', [] ], ""], position: 1000 },
                { id: "eid49", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_factButton1}', [] ], ""], position: 1000 },
                { id: "eid93", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_factButton2}', [] ], ""], position: 1500 }            ]
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
                    rect: ['2px', '7px', '120px', '105px', 'auto', 'auto'],
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
                ["style", "left", '2px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '120px'],
                ["style", "width", '250px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15750,
            autoPlay: false,
            labels: {
                "loop": 500
            },
            timeline: [
                { id: "eid83", tween: [ "transform", "${_button}", "scaleY", '0.5', { fromValue: '0'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid85", tween: [ "transform", "${_button}", "scaleY", '0.6', { fromValue: '0.5'}], position: 7250, duration: 500, easing: "easeInOutBack" },
                { id: "eid100", tween: [ "transform", "${_button}", "scaleY", '0.5', { fromValue: '0.6'}], position: 9000, duration: 500, easing: "easeInOutBack" },
                { id: "eid86", tween: [ "transform", "${_button}", "scaleY", '0.2', { fromValue: '0.5'}], position: 14750, duration: 500, easing: "easeInBack" },
                { id: "eid87", tween: [ "transform", "${_button}", "scaleY", '0.5', { fromValue: '0.2'}], position: 15250, duration: 500, easing: "easeInOutBack" },
                { id: "eid88", tween: [ "transform", "${_button}", "scaleX", '0.5', { fromValue: '0'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid90", tween: [ "transform", "${_button}", "scaleX", '0.6', { fromValue: '0.5'}], position: 7250, duration: 500, easing: "easeInOutBack" },
                { id: "eid101", tween: [ "transform", "${_button}", "scaleX", '0.5', { fromValue: '0.6'}], position: 9000, duration: 500, easing: "easeInOutBack" },
                { id: "eid91", tween: [ "transform", "${_button}", "scaleX", '0.2', { fromValue: '0.5'}], position: 14750, duration: 500, easing: "easeInBack" },
                { id: "eid92", tween: [ "transform", "${_button}", "scaleX", '0.5', { fromValue: '0.2'}], position: 15250, duration: 500, easing: "easeInOutBack" }            ]
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
