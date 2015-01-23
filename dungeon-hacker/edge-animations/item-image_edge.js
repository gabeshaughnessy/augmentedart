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
                id: 'item-image',
                type: 'rect',
                rect: ['15', '-381','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'item-image',
                symbolName: 'item-image',
                autoPlay: {

                }
            }
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
            "${_item-image}": [
                ["style", "top", '50px'],
                ["transform", "scaleX", '1.25'],
                ["style", "left", '50px'],
                ["transform", "scaleY", '1.25']
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
                { id: "eid62", tween: [ "style", "${_item-image}", "left", '50px', { fromValue: '50px'}], position: 0, duration: 0 },
                { id: "eid57", tween: [ "transform", "${_item-image}", "scaleX", '1.25', { fromValue: '1.25'}], position: 0, duration: 0 },
                { id: "eid61", tween: [ "style", "${_item-image}", "top", '50px', { fromValue: '50px'}], position: 0, duration: 0 },
                { id: "eid58", tween: [ "transform", "${_item-image}", "scaleY", '1.25', { fromValue: '1.25'}], position: 0, duration: 0 }            ]
        }
    }
},
"item-image": {
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
                    rect: ['0px', '0px', '400px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/default-item.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_image}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '400px'],
                ["style", "width", '400px']
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
})(jQuery, AdobeEdge, "item");
