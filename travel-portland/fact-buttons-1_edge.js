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
                id: 'factButton1',
                type: 'rect',
                rect: ['347px', '8px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.6','0.6']]
            },
            {
                id: 'factButton2',
                type: 'rect',
                rect: ['284px', '-29px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.6','0.6']]
            },
            {
                id: 'logo',
                type: 'rect',
                rect: ['7', '0px','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'factButton2',
                symbolName: 'factButton',
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
                id: 'logo',
                symbolName: 'logo'
            }
            ]
        },
    states: {
        "Base State": {
            "${_logo}": [
                ["style", "top", '0px']
            ],
            "${_factButton1}": [
                ["style", "top", '8px'],
                ["transform", "scaleX", '0.6'],
                ["transform", "scaleY", '0.6'],
                ["style", "left", '347px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '110px'],
                ["style", "width", '470px']
            ],
            "${_factButton2}": [
                ["transform", "scaleX", '0.6'],
                ["style", "left", '284px'],
                ["transform", "scaleY", '0.6'],
                ["style", "top", '-29px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15500,
            autoPlay: true,
            timeline: [
                { id: "eid51", tween: [ "style", "${_Stage}", "width", '470px', { fromValue: '470px'}], position: 0, duration: 0 },
                { id: "eid58", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_logo}', [] ], ""], position: 1000 },
                { id: "eid49", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_factButton1}', [] ], ""], position: 2000 },
                { id: "eid50", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_factButton2}', [] ], ""], position: 2500 }            ]
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
                    rect: ['0', '0', '120px', '105px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/button-2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_button}": [
                ["transform", "scaleX", '0'],
                ["transform", "scaleY", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '175px'],
                ["style", "width", '200px']
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
                { id: "eid78", tween: [ "transform", "${_button}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutBack" },
                { id: "eid79", tween: [ "transform", "${_button}", "scaleY", '0.5', { fromValue: '1'}], position: 4000, duration: 500, easing: "easeInBack" },
                { id: "eid80", tween: [ "transform", "${_button}", "scaleY", '1', { fromValue: '0.5'}], position: 4500, duration: 500, easing: "easeInOutBack" },
                { id: "eid81", tween: [ "transform", "${_button}", "scaleY", '0.2', { fromValue: '1'}], position: 12000, duration: 500, easing: "easeInBack" },
                { id: "eid82", tween: [ "transform", "${_button}", "scaleY", '1', { fromValue: '0.2'}], position: 12500, duration: 500, easing: "easeInOutBack" },
                { id: "eid73", tween: [ "transform", "${_button}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutBack" },
                { id: "eid74", tween: [ "transform", "${_button}", "scaleX", '0.5', { fromValue: '1'}], position: 4000, duration: 500, easing: "easeInBack" },
                { id: "eid75", tween: [ "transform", "${_button}", "scaleX", '1', { fromValue: '0.5'}], position: 4500, duration: 500, easing: "easeInOutBack" },
                { id: "eid76", tween: [ "transform", "${_button}", "scaleX", '0.2', { fromValue: '1'}], position: 12000, duration: 500, easing: "easeInBack" },
                { id: "eid77", tween: [ "transform", "${_button}", "scaleX", '1', { fromValue: '0.2'}], position: 12500, duration: 500, easing: "easeInOutBack" }            ]
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
                    rect: ['5px', '28px', '200px', '42px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TP_logo.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_TP_logo}": [
                ["style", "top", '28px'],
                ["transform", "scaleY", '0'],
                ["style", "left", '5px'],
                ["transform", "scaleX", '0']
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
