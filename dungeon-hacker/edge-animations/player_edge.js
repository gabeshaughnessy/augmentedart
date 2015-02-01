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
                id: 'player-card-bg',
                type: 'image',
                rect: ['0', '0','399px','639px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"player-card-bg.jpg",'0px','0px']
            },
            {
                id: 'Description',
                type: 'text',
                rect: ['46px', '393px','303px','73px','auto', 'auto'],
                text: "This is the default player Description.",
                align: "left",
                font: ['Lucida Console, Monaco, monospace', 12, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Player-Title',
                type: 'text',
                rect: ['47px', '363px','302px','30px','auto', 'auto'],
                text: "Title",
                font: ['Lucida Console, Monaco, monospace', 17, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Attributes',
                type: 'rect',
                rect: ['155px', '446px','194px','68px','auto', 'auto'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'AttributesLabel',
                type: 'text',
                rect: ['49px', '460px','302px','auto','auto', 'auto'],
                text: "Attributes",
                font: ['Lucida Console, Monaco, monospace', 12, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'SelectButton',
                type: 'rect',
                rect: ['81', '77','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.9262','0.9262']]
            },
            {
                id: 'PlayerCardButton',
                type: 'rect',
                rect: ['43px', '516px','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'PlayerCardButton',
                symbolName: 'PlayerCardButton',
                autoPlay: {

                }
            },
            {
                id: 'SelectButton',
                symbolName: 'SelectButton',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_SelectButton}": [
                ["transform", "scaleX", '0.9262'],
                ["style", "left", '45px'],
                ["transform", "scaleY", '0.9262'],
                ["style", "top", '515px']
            ],
            "${_player-card-bg}": [
                ["style", "height", '639px'],
                ["style", "width", '399px']
            ],
            "${_PlayerCardButton}": [
                ["style", "top", '516px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '43px']
            ],
            "${_AttributesLabel}": [
                ["style", "top", '460px'],
                ["style", "width", '302px'],
                ["style", "font-weight", 'bold'],
                ["style", "font-family", '\'Lucida Console\', Monaco, monospace'],
                ["style", "left", '49px'],
                ["style", "font-size", '12px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '400px'],
                ["style", "height", '640px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Attributes}": [
                ["style", "top", '446px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '155px'],
                ["style", "width", '194px']
            ],
            "${_Description}": [
                ["style", "top", '393px'],
                ["style", "font-size", '12px'],
                ["style", "height", '73px'],
                ["style", "font-family", 'Lucida Console, Monaco, monospace'],
                ["style", "left", '46px'],
                ["style", "width", '303px']
            ],
            "${_Player-Title}": [
                ["style", "top", '363px'],
                ["style", "font-size", '17px'],
                ["style", "font-weight", '700'],
                ["style", "height", '30px'],
                ["style", "font-family", 'Lucida Console, Monaco, monospace'],
                ["style", "left", '47px'],
                ["style", "width", '302px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: true,
            labels: {
                "default": 0,
                "selected": 500
            },
            timeline: [
                { id: "eid40", tween: [ "transform", "${_PlayerCardButton}", "scaleY", '0.98052', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid39", tween: [ "transform", "${_PlayerCardButton}", "scaleX", '0.98052', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid35", tween: [ "style", "${_PlayerCardButton}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 500 },
                { id: "eid23", tween: [ "style", "${_SelectButton}", "left", '45px', { fromValue: '45px'}], position: 0, duration: 0 },
                { id: "eid22", tween: [ "style", "${_SelectButton}", "top", '515px', { fromValue: '515px'}], position: 0, duration: 0 },
                { id: "eid9", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_SelectButton}', [] ], ""], position: 500 }            ]
        }
    }
},
"PlayerImage": {
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
                    id: 'image',
                    type: 'image',
                    rect: ['0px', '0px', '90.8%', '88.5%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/project-manager.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_image}": [
                ["style", "height", '88.51%'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '90.84%']
            ],
            "${symbolSelector}": [
                ["style", "height", '429px'],
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
},
"SelectButton": {
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
                    rect: ['0px', '0px', '308px', '47px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'Button',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                },
                {
                    font: ['Lucida Console, Monaco, monospace', 24, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text',
                    text: 'Select This Character',
                    align: 'center',
                    rect: ['32px', '10px', '240px', '37px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Button}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(210,210,210,0.25)']
            ],
            "${_Text}": [
                ["style", "top", '10px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-family", 'Lucida Console, Monaco, monospace'],
                ["style", "left", '32px'],
                ["style", "font-size", '18px']
            ],
            "${symbolSelector}": [
                ["style", "height", '47px'],
                ["style", "width", '308px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            timeline: [
                { id: "eid2", tween: [ "color", "${_Button}", "background-color", 'rgba(136,136,136,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,210,210,0.25)'}], position: 0, duration: 250 },
                { id: "eid4", tween: [ "color", "${_Text}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 250 }            ]
        }
    }
},
"PlayerCardButton": {
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
                    rect: ['0px', '0px', '308px', '47px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'Button',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)'],
                    c: [
                    {
                        type: 'text',
                        rect: ['14px', '13px', 'auto', 'auto', 'auto', 'auto'],
                        id: 'Text4',
                        text: 'Selected! - View Player Card',
                        align: 'center',
                        font: ['\'Lucida Console\', Monaco, monospace', 40, 'rgba(0,0,0,1)', '400', 'none', 'normal']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Button}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(210,210,210,1.00)']
            ],
            "${symbolSelector}": [
                ["style", "height", '47px'],
                ["style", "width", '308px']
            ],
            "${_Text4}": [
                ["style", "top", '13px'],
                ["style", "left", '14px'],
                ["style", "font-size", '16px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
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
