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
                rect: ['28px', '15px','437px','auto','auto', 'auto'],
                text: "Title",
                font: ['Lucida Console, Monaco, monospace', 24, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Attributes',
                type: 'rect',
                rect: ['30px', '417px','437px','68px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'AttributesLabel',
                type: 'text',
                rect: ['28px', '392px','437px','auto','auto', 'auto'],
                text: "Attributes",
                font: ['Lucida Console, Monaco, monospace', 15, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Description',
                type: 'text',
                rect: ['28px', '51px','437px','84px','auto', 'auto'],
                text: "This is the default player Description.",
                align: "left",
                font: ['Lucida Console, Monaco, monospace', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'PlayerImage',
                type: 'rect',
                rect: ['28', '135','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'PlayerImage',
                symbolName: 'PlayerImage'
            }
            ]
        },
    states: {
        "Base State": {
            "${_Title}": [
                ["style", "top", '15px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Lucida Console, Monaco, monospace'],
                ["style", "left", '28px'],
                ["style", "width", '437px']
            ],
            "${_AttributesLabel}": [
                ["style", "top", '392px'],
                ["style", "width", '437px'],
                ["style", "font-weight", 'bold'],
                ["style", "font-family", '\'Lucida Console\', Monaco, monospace'],
                ["style", "left", '28px'],
                ["style", "font-size", '15px']
            ],
            "${_Description}": [
                ["style", "top", '51px'],
                ["style", "font-size", '16px'],
                ["style", "height", '84px'],
                ["style", "font-family", 'Lucida Console, Monaco, monospace'],
                ["style", "left", '28px'],
                ["style", "width", '437px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '500px'],
                ["style", "height", '500px'],
                ["style", "overflow", 'hidden']
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
                    rect: ['0px', '0px', '437px', '233px', 'auto', 'auto'],
                    id: 'PlayerImage',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                },
                {
                    id: 'image',
                    type: 'image',
                    rect: ['90px', '2px', '52.8%', '99%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/project-manager.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_PlayerImage}": [
                ["style", "top", '0px'],
                ["style", "height", '233px'],
                ["style", "left", '0px'],
                ["style", "width", '437px']
            ],
            "${_image}": [
                ["style", "height", '98.98%'],
                ["style", "top", '2px'],
                ["style", "left", '90px'],
                ["style", "width", '52.78%']
            ],
            "${symbolSelector}": [
                ["style", "height", '233px'],
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
