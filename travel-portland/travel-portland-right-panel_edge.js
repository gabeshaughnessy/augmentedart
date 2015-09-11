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
                ["style", "width", '500px'],
                ["style", "height", '537px'],
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
            duration: 36500,
            autoPlay: true,
            timeline: [
                { id: "eid26", tween: [ "style", "${_Stage}", "height", '537px', { fromValue: '537px'}], position: 500, duration: 0 },
                { id: "eid15", tween: [ "style", "${_background}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid14", tween: [ "style", "${_background}", "clip", [0,500,537,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [500,0,500,0]}], position: 0, duration: 500 }            ]
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
                    id: 'sky_01',
                    type: 'image',
                    rect: ['0', '0', '500px', '156px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/images/sky_01.png', '0px', '0px']
                },
                {
                    id: 'Moon2',
                    type: 'image',
                    rect: ['257px', '125px', '80px', '81px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Moon.png', '0px', '0px']
                },
                {
                    id: 'Panel-3_01',
                    type: 'image',
                    rect: ['0px', '0px', '500px', '156px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/images/Panel-3_01.png', '0px', '0px']
                },
                {
                    id: 'Panel-3_02',
                    type: 'image',
                    rect: ['0', '156', '500px', '381px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/images/Panel-3_02.jpg', '0px', '0px']
                },
                {
                    id: 'Red-lightCopy2',
                    type: 'rect',
                    rect: ['374', '56', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'Red-light',
                    type: 'rect',
                    rect: ['374', '56', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'Red-lightCopy',
                    type: 'rect',
                    rect: ['374', '56', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'Red-lightCopy3',
                    type: 'rect',
                    rect: ['374', '56', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'Red-lightCopy4',
                    type: 'rect',
                    rect: ['374', '56', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'Red-lightCopy5',
                    type: 'rect',
                    rect: ['374', '56', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'Red-lightCopy8',
                    type: 'rect',
                    rect: ['374', '56', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'Red-lightCopy7',
                    type: 'rect',
                    rect: ['374', '56', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'Red-lightCopy6',
                    type: 'rect',
                    rect: ['374', '56', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'Red-lightCopy10',
                    type: 'rect',
                    transform: [[], [], [], ['0.63709', '0.57999']],
                    rect: ['63px', '112px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'Red-lightCopy9',
                    type: 'rect',
                    transform: [[], [], [], ['0.63709', '0.57999']],
                    rect: ['95px', '106px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'Red-lightCopy2',
                symbolName: 'Red-light',
                autoPlay: {

               }
            },
            {
                id: 'Red-lightCopy6',
                symbolName: 'Red-light',
                autoPlay: {

               }
            },
            {
                id: 'Red-lightCopy',
                symbolName: 'Red-light',
                autoPlay: {

               }
            },
            {
                id: 'Red-lightCopy5',
                symbolName: 'Red-light',
                autoPlay: {

               }
            },
            {
                id: 'Red-lightCopy3',
                symbolName: 'Red-light',
                autoPlay: {

               }
            },
            {
                id: 'Red-lightCopy8',
                symbolName: 'Red-light',
                autoPlay: {

               }
            },
            {
                id: 'Red-lightCopy4',
                symbolName: 'Red-light',
                autoPlay: {

               }
            },
            {
                id: 'Red-light',
                symbolName: 'Red-light',
                autoPlay: {

               }
            },
            {
                id: 'Red-lightCopy9',
                symbolName: 'Red-light',
                autoPlay: {

               }
            },
            {
                id: 'Red-lightCopy7',
                symbolName: 'Red-light',
                autoPlay: {

               }
            },
            {
                id: 'Red-lightCopy10',
                symbolName: 'Red-light',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Red-lightCopy7}": [
                ["style", "top", '89px'],
                ["transform", "scaleX", '0.4'],
                ["style", "left", '317px'],
                ["transform", "scaleY", '0.36415']
            ],
            "${_Red-lightCopy3}": [
                ["transform", "scaleX", '0.4'],
                ["style", "top", '83px'],
                ["transform", "scaleY", '0.36415'],
                ["style", "left", '302px']
            ],
            "${_Red-lightCopy9}": [
                ["transform", "scaleX", '0.63709'],
                ["style", "top", '106px'],
                ["transform", "scaleY", '0.57999'],
                ["style", "left", '95px']
            ],
            "${_Red-lightCopy8}": [
                ["style", "top", '79px'],
                ["style", "left", '317px'],
                ["transform", "scaleY", '0.36415'],
                ["transform", "scaleX", '0.4']
            ],
            "${_Red-light}": [
                ["transform", "scaleX", '1'],
                ["style", "left", '383px'],
                ["style", "top", '63px']
            ],
            "${_Red-lightCopy5}": [
                ["style", "top", '96px'],
                ["transform", "scaleX", '0.4'],
                ["style", "left", '302px'],
                ["transform", "scaleY", '0.36415']
            ],
            "${_Red-lightCopy6}": [
                ["transform", "scaleX", '0.4'],
                ["transform", "scaleY", '0.36415'],
                ["style", "left", '317px'],
                ["style", "top", '96px']
            ],
            "${_Moon2}": [
                ["style", "top", '125px'],
                ["style", "opacity", '1'],
                ["style", "left", '257px']
            ],
            "${symbolSelector}": [
                ["style", "height", '537px'],
                ["style", "width", '500px']
            ],
            "${_Red-lightCopy4}": [
                ["style", "top", '89px'],
                ["style", "left", '302px'],
                ["transform", "scaleY", '0.36415'],
                ["transform", "scaleX", '0.4']
            ],
            "${_Red-lightCopy2}": [
                ["transform", "scaleX", '1.05'],
                ["transform", "scaleY", '1.05'],
                ["style", "left", '456px'],
                ["style", "top", '50px']
            ],
            "${_Red-lightCopy}": [
                ["transform", "scaleX", '0.9'],
                ["transform", "scaleY", '0.9'],
                ["style", "left", '416px'],
                ["style", "top", '62px']
            ],
            "${_Red-lightCopy10}": [
                ["transform", "scaleX", '0.63709'],
                ["transform", "scaleY", '0.57999'],
                ["style", "left", '63px'],
                ["style", "top", '112px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 36500,
            autoPlay: true,
            labels: {
                "loop": 0,
                "Label 2": 30000
            },
            timeline: [
                { id: "eid31", tween: [ "style", "${_Moon2}", "left", '428px', { fromValue: '257px'}], position: 0, duration: 30000 },
                { id: "eid32", tween: [ "style", "${_Moon2}", "top", '-81px', { fromValue: '125px'}], position: 0, duration: 30000 },
                { id: "eid33", tween: [ "style", "${_Moon2}", "opacity", '0', { fromValue: '1'}], position: 15000, duration: 3000 },
                { id: "eid154", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Red-light}', ['loop'] ], ""], position: 0 },
                { id: "eid155", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Red-lightCopy}', ['loop'] ], ""], position: 0 },
                { id: "eid156", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Red-lightCopy2}', ['loop'] ], ""], position: 1000 },
                { id: "eid172", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Red-lightCopy10}', ['loop'] ], ""], position: 1895 },
                { id: "eid157", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Red-lightCopy8}', ['loop'] ], ""], position: 2000 },
                { id: "eid158", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Red-lightCopy7}', ['loop'] ], ""], position: 3000 },
                { id: "eid159", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Red-lightCopy3}', ['loop'] ], ""], position: 4000 },
                { id: "eid161", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Red-lightCopy4}', ['loop'] ], ""], position: 4488.1257971808 },
                { id: "eid173", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Red-lightCopy9}', ['loop'] ], ""], position: 4488.1257971808 },
                { id: "eid160", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Red-lightCopy6}', ['loop'] ], ""], position: 4488.1257971808 },
                { id: "eid162", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Red-lightCopy5}', ['loop'] ], ""], position: 5500 }            ]
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
                ["style", "top", '-34px'],
                ["style", "height", '211px'],
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
},
"Red-light": {
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
                    transform: [[], [], [], ['0.1', '0.1']],
                    rect: ['-44px', '-43px', '97px', '95px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    filter: [0, 0, 1, 1, 0, 0, 0, 21, 'rgba(0,0,0,0)', 0, 0, 0],
                    id: 'Ellipse',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,0,0,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(255,0,0,1.00)'],
                ["transform", "scaleY", '0.06'],
                ["transform", "scaleX", '0.06'],
                ["subproperty", "filter.blur", '21px'],
                ["style", "left", '-44px'],
                ["style", "top", '-43px']
            ],
            "${symbolSelector}": [
                ["style", "height", '29px'],
                ["style", "width", '29px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 31000,
            autoPlay: false,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid40", tween: [ "subproperty", "${_Ellipse}", "filter.blur", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
                { id: "eid49", tween: [ "subproperty", "${_Ellipse}", "filter.blur", '21px', { fromValue: '21px'}], position: 5000, duration: 0 },
                { id: "eid54", tween: [ "subproperty", "${_Ellipse}", "filter.blur", '21px', { fromValue: '21px'}], position: 11000, duration: 0 },
                { id: "eid59", tween: [ "subproperty", "${_Ellipse}", "filter.blur", '21px', { fromValue: '21px'}], position: 18000, duration: 0 },
                { id: "eid64", tween: [ "subproperty", "${_Ellipse}", "filter.blur", '21px', { fromValue: '21px'}], position: 22000, duration: 0 },
                { id: "eid69", tween: [ "subproperty", "${_Ellipse}", "filter.blur", '21px', { fromValue: '21px'}], position: 29000, duration: 0 },
                { id: "eid43", tween: [ "transform", "${_Ellipse}", "scaleX", '0', { fromValue: '0.06'}], position: 0, duration: 1000, easing: "easeOutQuad" },
                { id: "eid45", tween: [ "transform", "${_Ellipse}", "scaleX", '0.06', { fromValue: '0'}], position: 1000, duration: 1000, easing: "easeInQuad" },
                { id: "eid47", tween: [ "transform", "${_Ellipse}", "scaleX", '0.03', { fromValue: '0.06'}], position: 5000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid48", tween: [ "transform", "${_Ellipse}", "scaleX", '0.06', { fromValue: '0.03'}], position: 6000, duration: 1000, easing: "easeInQuad" },
                { id: "eid52", tween: [ "transform", "${_Ellipse}", "scaleX", '0.03', { fromValue: '0.06'}], position: 11000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid53", tween: [ "transform", "${_Ellipse}", "scaleX", '0.06', { fromValue: '0.03'}], position: 12000, duration: 1000, easing: "easeInQuad" },
                { id: "eid57", tween: [ "transform", "${_Ellipse}", "scaleX", '0', { fromValue: '0.06'}], position: 18000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid58", tween: [ "transform", "${_Ellipse}", "scaleX", '0.06', { fromValue: '0'}], position: 19000, duration: 1000, easing: "easeInQuad" },
                { id: "eid62", tween: [ "transform", "${_Ellipse}", "scaleX", '0.03', { fromValue: '0.06'}], position: 22000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid63", tween: [ "transform", "${_Ellipse}", "scaleX", '0.06', { fromValue: '0.03'}], position: 23000, duration: 1000, easing: "easeInQuad" },
                { id: "eid67", tween: [ "transform", "${_Ellipse}", "scaleX", '0.03', { fromValue: '0.06'}], position: 29000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid68", tween: [ "transform", "${_Ellipse}", "scaleX", '0.06', { fromValue: '0.03'}], position: 30000, duration: 1000, easing: "easeInQuad" },
                { id: "eid44", tween: [ "transform", "${_Ellipse}", "scaleY", '0', { fromValue: '0.06'}], position: 0, duration: 1000, easing: "easeOutQuad" },
                { id: "eid46", tween: [ "transform", "${_Ellipse}", "scaleY", '0.06', { fromValue: '0'}], position: 1000, duration: 1000, easing: "easeInQuad" },
                { id: "eid50", tween: [ "transform", "${_Ellipse}", "scaleY", '0.03', { fromValue: '0.06'}], position: 5000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid51", tween: [ "transform", "${_Ellipse}", "scaleY", '0.06', { fromValue: '0.03'}], position: 6000, duration: 1000, easing: "easeInQuad" },
                { id: "eid55", tween: [ "transform", "${_Ellipse}", "scaleY", '0.03', { fromValue: '0.06'}], position: 11000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid56", tween: [ "transform", "${_Ellipse}", "scaleY", '0.06', { fromValue: '0.03'}], position: 12000, duration: 1000, easing: "easeInQuad" },
                { id: "eid60", tween: [ "transform", "${_Ellipse}", "scaleY", '0', { fromValue: '0.06'}], position: 18000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid61", tween: [ "transform", "${_Ellipse}", "scaleY", '0.06', { fromValue: '0'}], position: 19000, duration: 1000, easing: "easeInQuad" },
                { id: "eid65", tween: [ "transform", "${_Ellipse}", "scaleY", '0.03', { fromValue: '0.06'}], position: 22000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid66", tween: [ "transform", "${_Ellipse}", "scaleY", '0.06', { fromValue: '0.03'}], position: 23000, duration: 1000, easing: "easeInQuad" },
                { id: "eid70", tween: [ "transform", "${_Ellipse}", "scaleY", '0.03', { fromValue: '0.06'}], position: 29000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid71", tween: [ "transform", "${_Ellipse}", "scaleY", '0.06', { fromValue: '0.03'}], position: 30000, duration: 1000, easing: "easeInQuad" }            ]
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
