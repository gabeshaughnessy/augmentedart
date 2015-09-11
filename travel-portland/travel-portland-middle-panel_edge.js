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
                rect: ['0', '0px','auto','auto','auto', 'auto']
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
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "clip", [500,0,500,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 43120,
            autoPlay: true,
            timeline: [
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
                    id: 'Sky',
                    type: 'image',
                    rect: ['0', '0', '500px', '184px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Sky.png', '0px', '0px']
                },
                {
                    id: 'cloud',
                    type: 'image',
                    rect: ['-129px', '127px', '242px', '140px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud.png', '0px', '0px']
                },
                {
                    id: 'cloud2',
                    type: 'image',
                    rect: ['56px', '155px', '168px', '111px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud2.png', '0px', '0px']
                },
                {
                    id: 'cloud3',
                    type: 'image',
                    rect: ['260px', '56px', '97px', '92px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud3.png', '0px', '0px']
                },
                {
                    id: 'Panel-2_01',
                    type: 'image',
                    rect: ['0', '0', '500px', '173px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/images/Panel-2_01.png', '0px', '0px']
                },
                {
                    id: 'Panel-2_022',
                    type: 'image',
                    rect: ['0', '173', '500px', '364px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/images/Panel-2_02.jpg', '0px', '0px']
                },
                {
                    id: 'bridge3',
                    type: 'image',
                    rect: ['215px', '159px', '38px', '55px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bridge.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '537px'],
                ["style", "width", '500px']
            ],
            "${_cloud2}": [
                ["style", "top", '155px'],
                ["style", "opacity", '1'],
                ["style", "left", '56px']
            ],
            "${_cloud3}": [
                ["style", "top", '167px'],
                ["style", "opacity", '1'],
                ["style", "left", '201px']
            ],
            "${_cloud}": [
                ["style", "top", '127px'],
                ["style", "opacity", '1'],
                ["style", "left", '-242px']
            ],
            "${_bridge3}": [
                ["style", "left", '217px'],
                ["style", "top", '160px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 37266,
            autoPlay: true,
            timeline: [
                { id: "eid24", tween: [ "style", "${_cloud2}", "opacity", '0', { fromValue: '1'}], position: 21387, duration: 3145 },
                { id: "eid16", tween: [ "style", "${_bridge3}", "left", '217px', { fromValue: '217px'}], position: 0, duration: 3000 },
                { id: "eid32", tween: [ "style", "${_bridge3}", "left", '217px', { fromValue: '217px'}], position: 10120, duration: 3000 },
                { id: "eid34", tween: [ "style", "${_bridge3}", "left", '217px', { fromValue: '217px'}], position: 25500, duration: 3000 },
                { id: "eid35", tween: [ "style", "${_bridge3}", "left", '217px', { fromValue: '217px'}], position: 32913, duration: 3000 },
                { id: "eid17", tween: [ "style", "${_bridge3}", "top", '127px', { fromValue: '160px'}], position: 0, duration: 3000 },
                { id: "eid33", tween: [ "style", "${_bridge3}", "top", '161px', { fromValue: '127px'}], position: 10120, duration: 3000 },
                { id: "eid36", tween: [ "style", "${_bridge3}", "top", '127px', { fromValue: '161px'}], position: 25500, duration: 3000 },
                { id: "eid37", tween: [ "style", "${_bridge3}", "top", '160px', { fromValue: '127px'}], position: 32913, duration: 3000 },
                { id: "eid21", tween: [ "style", "${_cloud2}", "top", '-120px', { fromValue: '155px'}], position: 9266, duration: 19000 },
                { id: "eid26", tween: [ "style", "${_cloud3}", "opacity", '0', { fromValue: '1'}], position: 25266, duration: 3145 },
                { id: "eid19", tween: [ "style", "${_cloud}", "top", '-140px', { fromValue: '127px'}], position: 500, duration: 36766 },
                { id: "eid22", tween: [ "style", "${_cloud2}", "left", '379px', { fromValue: '56px'}], position: 9266, duration: 19000 },
                { id: "eid20", tween: [ "style", "${_cloud}", "opacity", '0', { fromValue: '1'}], position: 26266, duration: 3413 },
                { id: "eid18", tween: [ "style", "${_cloud}", "left", '258px', { fromValue: '-242px'}], position: 500, duration: 36766 },
                { id: "eid25", tween: [ "style", "${_cloud3}", "top", '-101px', { fromValue: '167px'}], position: 14266, duration: 15500 },
                { id: "eid27", tween: [ "style", "${_cloud3}", "left", '469px', { fromValue: '201px'}], position: 14266, duration: 15500 }            ]
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
