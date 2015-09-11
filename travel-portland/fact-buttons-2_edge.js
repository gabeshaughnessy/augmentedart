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
                id: 'factButton2',
                type: 'rect',
                rect: ['0', '262px','auto','auto','auto', 'auto']
            },
            {
                id: 'factButton1',
                type: 'rect',
                rect: ['0px', '382px','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'factButton1',
                symbolName: 'factButton',
                autoPlay: {

                }
            },
            {
                id: 'factButton2',
                symbolName: 'factButton_1'
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
            "${_factButton2}": [
                ["style", "top", '262px']
            ],
            "${_factButton1}": [
                ["style", "top", '382px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 14507,
            autoPlay: true,
            timeline: [
                { id: "eid4", tween: [ "transform", "${_factButton1}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid3", tween: [ "transform", "${_factButton1}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid49", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_factButton1}', [] ], ""], position: 1000 },
                { id: "eid73", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_factButton2}', [] ], ""], position: 1500 }            ]
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
                    rect: ['196px', '0', '120px', '105px', 'auto', 'auto'],
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
                ["transform", "scaleY", '0'],
                ["style", "left", '196px']
            ],
            "${symbolSelector}": [
                ["style", "height", '105px'],
                ["style", "width", '500px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 13007,
            autoPlay: false,
            labels: {
                "loop": 500
            },
            timeline: [
                { id: "eid51", tween: [ "transform", "${_button}", "scaleX", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid57", tween: [ "transform", "${_button}", "scaleX", '0', { fromValue: '1'}], position: 2500, duration: 500, easing: "easeInBack" },
                { id: "eid58", tween: [ "transform", "${_button}", "scaleX", '1', { fromValue: '0'}], position: 3000, duration: 500, easing: "easeOutBack" },
                { id: "eid61", tween: [ "transform", "${_button}", "scaleX", '0', { fromValue: '1'}], position: 9000, duration: 500, easing: "easeInBack" },
                { id: "eid62", tween: [ "transform", "${_button}", "scaleX", '1', { fromValue: '0'}], position: 9500, duration: 500, easing: "easeOutBack" },
                { id: "eid70", tween: [ "transform", "${_button}", "scaleX", '0', { fromValue: '1'}], position: 12710, duration: 297, easing: "easeInBack" },
                { id: "eid52", tween: [ "transform", "${_button}", "scaleY", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid59", tween: [ "transform", "${_button}", "scaleY", '0', { fromValue: '1'}], position: 2500, duration: 500, easing: "easeInBack" },
                { id: "eid60", tween: [ "transform", "${_button}", "scaleY", '1', { fromValue: '0'}], position: 3000, duration: 500, easing: "easeOutBack" },
                { id: "eid63", tween: [ "transform", "${_button}", "scaleY", '0', { fromValue: '1'}], position: 9000, duration: 500, easing: "easeInBack" },
                { id: "eid64", tween: [ "transform", "${_button}", "scaleY", '1', { fromValue: '0'}], position: 9500, duration: 500, easing: "easeOutBack" },
                { id: "eid72", tween: [ "transform", "${_button}", "scaleY", '0', { fromValue: '1'}], position: 12710, duration: 297, easing: "easeInBack" }            ]
        }
    }
},
"factButton_1": {
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
                    rect: ['255px', '0', '120px', '105px', 'auto', 'auto'],
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
                ["transform", "scaleY", '0'],
                ["style", "left", '255px']
            ],
            "${symbolSelector}": [
                ["style", "height", '105px'],
                ["style", "width", '500px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 13007,
            autoPlay: false,
            labels: {
                "loop": 500
            },
            timeline: [
                { id: "eid51", tween: [ "transform", "${_button}", "scaleX", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid57", tween: [ "transform", "${_button}", "scaleX", '0', { fromValue: '1'}], position: 2500, duration: 500, easing: "easeInBack" },
                { id: "eid58", tween: [ "transform", "${_button}", "scaleX", '1', { fromValue: '0'}], position: 3000, duration: 500, easing: "easeOutBack" },
                { id: "eid61", tween: [ "transform", "${_button}", "scaleX", '0', { fromValue: '1'}], position: 9000, duration: 500, easing: "easeInBack" },
                { id: "eid62", tween: [ "transform", "${_button}", "scaleX", '1', { fromValue: '0'}], position: 9500, duration: 500, easing: "easeOutBack" },
                { id: "eid70", tween: [ "transform", "${_button}", "scaleX", '0', { fromValue: '1'}], position: 12710, duration: 297, easing: "easeInBack" },
                { id: "eid52", tween: [ "transform", "${_button}", "scaleY", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid59", tween: [ "transform", "${_button}", "scaleY", '0', { fromValue: '1'}], position: 2500, duration: 500, easing: "easeInBack" },
                { id: "eid60", tween: [ "transform", "${_button}", "scaleY", '1', { fromValue: '0'}], position: 3000, duration: 500, easing: "easeOutBack" },
                { id: "eid63", tween: [ "transform", "${_button}", "scaleY", '0', { fromValue: '1'}], position: 9000, duration: 500, easing: "easeInBack" },
                { id: "eid64", tween: [ "transform", "${_button}", "scaleY", '1', { fromValue: '0'}], position: 9500, duration: 500, easing: "easeOutBack" },
                { id: "eid72", tween: [ "transform", "${_button}", "scaleY", '0', { fromValue: '1'}], position: 12710, duration: 297, easing: "easeInBack" }            ]
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
