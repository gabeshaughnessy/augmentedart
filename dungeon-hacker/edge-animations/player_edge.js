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
                rect: ['0px', '15px','400px','auto','auto', 'auto'],
                text: "Title",
                font: ['Lucida Console, Monaco, monospace', 24, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Attributes',
                type: 'rect',
                rect: ['3px', '506px','437px','68px','auto', 'auto'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'AttributesLabel',
                type: 'text',
                rect: ['1px', '481px','437px','auto','auto', 'auto'],
                text: "Attributes",
                font: ['Lucida Console, Monaco, monospace', 15, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Description',
                type: 'text',
                rect: ['0px', '51px','400px','84px','auto', 'auto'],
                text: "This is the default player Description.",
                align: "left",
                font: ['Lucida Console, Monaco, monospace', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'SelectButton',
                type: 'rect',
                rect: ['81', '77','auto','auto','auto', 'auto']
            },
            {
                id: 'PlayerImage',
                type: 'rect',
                rect: ['28', '135','auto','auto','auto', 'auto']
            },
            {
                id: 'PlayerCardButton',
                type: 'rect',
                rect: ['40', '258','auto','auto','auto', 'auto']
            },
            {
                id: 'Selected_Text',
                type: 'text',
                rect: ['19px', '190px','329px','68px','auto', 'auto'],
                text: "Selected",
                align: "center",
                font: ['\'Lucida Console\', Monaco, monospace', 40, "rgba(0,0,0,1)", "400", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'PlayerImage',
                symbolName: 'PlayerImage',
                autoPlay: {

                }
            },
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
            "${_Title}": [
                ["style", "top", '15px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Lucida Console, Monaco, monospace'],
                ["style", "left", '0px'],
                ["style", "width", '400px']
            ],
            "${_PlayerCardButton}": [
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0.000000'],
                ["transform", "scaleY", '0']
            ],
            "${_Selected_Text}": [
                ["style", "top", '190px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "height", '68px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '19px'],
                ["style", "font-size", '40px']
            ],
            "${_Attributes}": [
                ["style", "top", '506px'],
                ["style", "left", '3px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)']
            ],
            "${_SelectButton}": [
                ["style", "top", '579px'],
                ["style", "left", '47px']
            ],
            "${_AttributesLabel}": [
                ["style", "top", '481px'],
                ["style", "width", '437px'],
                ["style", "font-weight", 'bold'],
                ["style", "font-family", '\'Lucida Console\', Monaco, monospace'],
                ["style", "left", '1px'],
                ["style", "font-size", '15px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '400px'],
                ["style", "height", '640px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Description}": [
                ["style", "top", '51px'],
                ["style", "font-size", '16px'],
                ["style", "height", '84px'],
                ["style", "font-family", 'Lucida Console, Monaco, monospace'],
                ["style", "left", '0px'],
                ["style", "width", '400px']
            ],
            "${_PlayerImage}": [
                ["style", "top", '69px'],
                ["transform", "scaleY", '0.91394'],
                ["transform", "scaleX", '0.91394'],
                ["style", "opacity", '1'],
                ["style", "left", '-18px']
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
                { id: "eid40", tween: [ "transform", "${_PlayerCardButton}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid18", tween: [ "transform", "${_PlayerImage}", "scaleX", '0.91394', { fromValue: '0.91394'}], position: 0, duration: 0 },
                { id: "eid41", tween: [ "transform", "${_Selected_Text}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid42", tween: [ "transform", "${_Selected_Text}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid39", tween: [ "transform", "${_PlayerCardButton}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid19", tween: [ "transform", "${_PlayerImage}", "scaleY", '0.91394', { fromValue: '0.91394'}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "style", "${_PlayerImage}", "opacity", '0.15837824901914', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid20", tween: [ "style", "${_PlayerImage}", "left", '-18px', { fromValue: '-18px'}], position: 0, duration: 0 },
                { id: "eid22", tween: [ "style", "${_SelectButton}", "top", '579px', { fromValue: '579px'}], position: 0, duration: 0 },
                { id: "eid21", tween: [ "style", "${_PlayerImage}", "top", '69px', { fromValue: '69px'}], position: 0, duration: 0 },
                { id: "eid35", tween: [ "style", "${_PlayerCardButton}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 500 },
                { id: "eid36", tween: [ "style", "${_Selected_Text}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 500 },
                { id: "eid23", tween: [ "style", "${_SelectButton}", "left", '47px', { fromValue: '47px'}], position: 0, duration: 0 },
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
                    type: 'text',
                    rect: ['32px', '10px', '240px', '37px', 'auto', 'auto'],
                    id: 'Text',
                    text: 'Select This Character',
                    align: 'center',
                    font: ['Lucida Console, Monaco, monospace', 24, 'rgba(0,0,0,1)', '400', 'none', 'normal']
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
                { id: "eid2", tween: [ "color", "${_Button}", "background-color", 'rgba(136,136,136,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,210,210,1.00)'}], position: 0, duration: 250 },
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
                        rect: ['62px', '12px', 'auto', 'auto', 'auto', 'auto'],
                        id: 'Text4',
                        text: 'View Player Card',
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
                ["style", "top", '12px'],
                ["style", "left", '62px'],
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
