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
                id: 'Equip-Item-Button',
                type: 'rect',
                rect: ['35px', '381px','445px','101px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                c: [
                {
                    id: 'Button-text',
                    type: 'text',
                    rect: ['0px', '27px','445px','69px','auto', 'auto'],
                    text: "Equip this Item?",
                    align: "center",
                    font: ['Lucida Console, Monaco, monospace', 40, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '500px'],
                ["style", "width", '500px']
            ],
            "${_Button-text}": [
                ["style", "top", '27px'],
                ["style", "text-align", 'center'],
                ["style", "height", '69px'],
                ["style", "font-family", 'Lucida Console, Monaco, monospace'],
                ["style", "left", '0px'],
                ["style", "font-size", '40px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: true,
            labels: {
                "selected": 250
            },
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
})(jQuery, AdobeEdge, "EDGE-257681527");
