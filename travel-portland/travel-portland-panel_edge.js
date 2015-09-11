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
                ["style", "height", '500px'],
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
            duration: 12000,
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
                    id: 'left_sky_01',
                    type: 'image',
                    rect: ['0', '0', '500px', '88px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/images/images/left_sky_01.png', '0px', '0px']
                },
                {
                    id: 'Panel-1_01',
                    type: 'image',
                    rect: ['0', '0px', '500px', '88px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/images/Panel-1_01.png', '0px', '0px']
                },
                {
                    id: 'Panel-1_02',
                    type: 'image',
                    rect: ['0', '88', '500px', '412px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/images/Panel-1_02.jpg', '0px', '0px']
                },
                {
                    id: 'Gondola',
                    type: 'image',
                    rect: ['92px', '116px', '33px', '30px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Gondola.png', '0px', '0px']
                },
                {
                    id: 'GondolaCopy',
                    type: 'image',
                    rect: ['92px', '116px', '33px', '30px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Gondola.png', '0px', '0px']
                },
                {
                    id: 'hawthorne',
                    type: 'image',
                    rect: ['362px', '120px', '85px', '88px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/hawthorne.png', '0px', '0px']
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
            ],
            "${_Gondola}": [
                ["style", "top", '116px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '92px']
            ],
            "${_GondolaCopy}": [
                ["style", "top", '75px'],
                ["transform", "scaleY", '0.55'],
                ["transform", "scaleX", '0.55'],
                ["style", "opacity", '0'],
                ["style", "left", '132px']
            ],
            "${_hawthorne}": [
                ["style", "height", '88px'],
                ["style", "top", '121px'],
                ["style", "left", '363px'],
                ["style", "width", '85px']
            ],
            "${_Panel-1_01}": [
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 12000,
            autoPlay: true,
            timeline: [
                { id: "eid19", tween: [ "style", "${_hawthorne}", "width", '75px', { fromValue: '85px'}], position: 0, duration: 3000 },
                { id: "eid27", tween: [ "style", "${_hawthorne}", "width", '85px', { fromValue: '75px'}], position: 4000, duration: 3000 },
                { id: "eid52", tween: [ "style", "${_GondolaCopy}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 432 },
                { id: "eid51", tween: [ "style", "${_GondolaCopy}", "opacity", '0', { fromValue: '1'}], position: 11500, duration: 500 },
                { id: "eid31", tween: [ "transform", "${_Gondola}", "scaleY", '0.55', { fromValue: '1'}], position: 0, duration: 8000 },
                { id: "eid53", tween: [ "style", "${_GondolaCopy}", "left", '92px', { fromValue: '132px'}], position: 4000, duration: 8000 },
                { id: "eid28", tween: [ "style", "${_Gondola}", "top", '71px', { fromValue: '116px'}], position: 0, duration: 8000 },
                { id: "eid30", tween: [ "transform", "${_Gondola}", "scaleX", '0.55', { fromValue: '1'}], position: 0, duration: 8000 },
                { id: "eid29", tween: [ "style", "${_Gondola}", "left", '125px', { fromValue: '92px'}], position: 0, duration: 8000 },
                { id: "eid17", tween: [ "style", "${_hawthorne}", "left", '366px', { fromValue: '363px'}], position: 0, duration: 3000 },
                { id: "eid26", tween: [ "style", "${_hawthorne}", "left", '363px', { fromValue: '366px'}], position: 4000, duration: 3000 },
                { id: "eid48", tween: [ "style", "${_GondolaCopy}", "top", '116px', { fromValue: '75px'}], position: 4000, duration: 8000 },
                { id: "eid16", tween: [ "style", "${_hawthorne}", "top", '72px', { fromValue: '121px'}], position: 0, duration: 3000 },
                { id: "eid24", tween: [ "style", "${_hawthorne}", "top", '121px', { fromValue: '72px'}], position: 4000, duration: 3000 },
                { id: "eid18", tween: [ "style", "${_hawthorne}", "height", '78px', { fromValue: '88px'}], position: 0, duration: 3000 },
                { id: "eid25", tween: [ "style", "${_hawthorne}", "height", '88px', { fromValue: '78px'}], position: 4000, duration: 3000 },
                { id: "eid50", tween: [ "transform", "${_GondolaCopy}", "scaleX", '1', { fromValue: '0.55'}], position: 4000, duration: 8000 },
                { id: "eid49", tween: [ "transform", "${_GondolaCopy}", "scaleY", '1', { fromValue: '0.55'}], position: 4000, duration: 8000 },
                { id: "eid34", tween: [ "style", "${_Gondola}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid35", tween: [ "style", "${_Gondola}", "opacity", '0', { fromValue: '1'}], position: 7568, duration: 432 }            ]
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
