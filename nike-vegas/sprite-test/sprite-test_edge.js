/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'TradeGothicBoldCond, \'Trade Gothic LT Std-Condensed18\'': '		<style type=\"text/css\">	@font-face {	    font-family: \"TradeGothicBoldCond\";	    font-style: normal;	    src: url(\"fonts/TradeGothicforNike365-BdCn.eot\");	    src: url(\"fonts/TradeGothicforNike365-BdCn.eot?#iefix\") format(\"eot\"), url(\"fonts/TradeGothicforNike365-BdCn.woff\") format(\"woff\"), url(\"fonts/TradeGothicforNike365-BdCn.ttf\") format(\"truetype\"), url(\"fonts/TradeGothicforNike365-BdCn.svg\") format(\"svg\");	}	body{	font-family: \"TradeGothicBoldCond\";	}		</style>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'explosion_small_symbol_1Copy11',
                            symbolName: 'explosion_small_symbol_1',
                            type: 'rect',
                            rect: ['0px', '200px', '300px', '200px', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'explosion_small_symbol_1Copy14',
                            symbolName: 'explosion_small_symbol_1',
                            type: 'rect',
                            rect: ['286px', '200px', '300px', '200px', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'explosion_small_symbol_1Copy13',
                            symbolName: 'explosion_small_symbol_1',
                            type: 'rect',
                            rect: ['-25px', '0px', '300px', '200px', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'explosion_small_symbol_1Copy12',
                            symbolName: 'explosion_small_symbol_1',
                            type: 'rect',
                            rect: ['312px', '0px', '300px', '200px', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'Page-text',
                            symbolName: 'Page-text',
                            type: 'rect',
                            rect: ['116', '158', '316', '68', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid104",
                            "top",
                            0,
                            0,
                            "linear",
                            "${explosion_small_symbol_1Copy12}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid114",
                            "top",
                            0,
                            0,
                            "linear",
                            "${explosion_small_symbol_1Copy14}",
                            '200px',
                            '200px'
                        ],
                        [
                            "eid107",
                            "top",
                            0,
                            0,
                            "linear",
                            "${explosion_small_symbol_1Copy11}",
                            '200px',
                            '200px'
                        ],
                        [
                            "eid105",
                            "left",
                            0,
                            0,
                            "linear",
                            "${explosion_small_symbol_1Copy12}",
                            '312px',
                            '312px'
                        ],
                        [
                            "eid113",
                            "left",
                            0,
                            0,
                            "linear",
                            "${explosion_small_symbol_1Copy14}",
                            '286px',
                            '286px'
                        ],
                        [
                            "eid108",
                            "left",
                            0,
                            0,
                            "linear",
                            "${explosion_small_symbol_1Copy11}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid103",
                            "top",
                            0,
                            0,
                            "linear",
                            "${explosion_small_symbol_1Copy13}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid106",
                            "left",
                            0,
                            0,
                            "linear",
                            "${explosion_small_symbol_1Copy13}",
                            '-25px',
                            '-25px'
                        ]
                    ]
                }
            },
            "explosion_small_symbol_1": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            overflow: 'hidden',
                            id: 'explosion_small',
                            rect: ['0px', '0px', '1800px', '1600px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/explosion_small.png', '0px', '0px', '1800px', '1600px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '300px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 979,
                    autoPlay: false,
                    data: [
                        [
                            "eid2",
                            "width",
                            0,
                            0,
                            "linear",
                            "${explosion_small}",
                            '0px',
                            '300px'
                        ],
                        [
                            "eid1",
                            "height",
                            0,
                            0,
                            "linear",
                            "${explosion_small}",
                            '0px',
                            '200px'
                        ],
                        [
                            "eid3",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${explosion_small}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid4",
                            "background-position",
                            20,
                            0,
                            "linear",
                            "${explosion_small}",
                            [0,0],
                            [-300,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid5",
                            "background-position",
                            41,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-300,0],
                            [-600,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid6",
                            "background-position",
                            62,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-600,0],
                            [-900,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid7",
                            "background-position",
                            83,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-900,0],
                            [-1200,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid8",
                            "background-position",
                            104,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-1200,0],
                            [-1500,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid9",
                            "background-position",
                            125,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-1500,0],
                            [0,-200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid10",
                            "background-position",
                            145,
                            0,
                            "linear",
                            "${explosion_small}",
                            [0,-200],
                            [-300,-200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid11",
                            "background-position",
                            166,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-300,-200],
                            [-600,-200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12",
                            "background-position",
                            187,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-600,-200],
                            [-900,-200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid13",
                            "background-position",
                            208,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-900,-200],
                            [-1200,-200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid14",
                            "background-position",
                            229,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-1200,-200],
                            [-1500,-200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid15",
                            "background-position",
                            250,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-1500,-200],
                            [0,-400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid16",
                            "background-position",
                            270,
                            0,
                            "linear",
                            "${explosion_small}",
                            [0,-400],
                            [-300,-400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid17",
                            "background-position",
                            291,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-300,-400],
                            [-600,-400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid18",
                            "background-position",
                            312,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-600,-400],
                            [-900,-400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid19",
                            "background-position",
                            333,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-900,-400],
                            [-1200,-400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid20",
                            "background-position",
                            354,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-1200,-400],
                            [-1500,-400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid21",
                            "background-position",
                            375,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-1500,-400],
                            [0,-600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid22",
                            "background-position",
                            395,
                            0,
                            "linear",
                            "${explosion_small}",
                            [0,-600],
                            [-300,-600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid23",
                            "background-position",
                            416,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-300,-600],
                            [-600,-600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid24",
                            "background-position",
                            437,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-600,-600],
                            [-900,-600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid25",
                            "background-position",
                            458,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-900,-600],
                            [-1200,-600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid26",
                            "background-position",
                            479,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-1200,-600],
                            [-1500,-600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid27",
                            "background-position",
                            500,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-1500,-600],
                            [0,-800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid28",
                            "background-position",
                            520,
                            0,
                            "linear",
                            "${explosion_small}",
                            [0,-800],
                            [-300,-800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid29",
                            "background-position",
                            541,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-300,-800],
                            [-600,-800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid30",
                            "background-position",
                            562,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-600,-800],
                            [-900,-800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid31",
                            "background-position",
                            583,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-900,-800],
                            [-1200,-800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid32",
                            "background-position",
                            604,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-1200,-800],
                            [-1500,-800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid33",
                            "background-position",
                            625,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-1500,-800],
                            [0,-1000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid34",
                            "background-position",
                            645,
                            0,
                            "linear",
                            "${explosion_small}",
                            [0,-1000],
                            [-300,-1000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid35",
                            "background-position",
                            666,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-300,-1000],
                            [-600,-1000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid36",
                            "background-position",
                            687,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-600,-1000],
                            [-900,-1000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid37",
                            "background-position",
                            708,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-900,-1000],
                            [-1200,-1000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid38",
                            "background-position",
                            729,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-1200,-1000],
                            [-1500,-1000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid39",
                            "background-position",
                            750,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-1500,-1000],
                            [0,-1200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid40",
                            "background-position",
                            770,
                            0,
                            "linear",
                            "${explosion_small}",
                            [0,-1200],
                            [-300,-1200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid41",
                            "background-position",
                            791,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-300,-1200],
                            [-600,-1200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid42",
                            "background-position",
                            812,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-600,-1200],
                            [-900,-1200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid43",
                            "background-position",
                            833,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-900,-1200],
                            [-1200,-1200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid44",
                            "background-position",
                            854,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-1200,-1200],
                            [-1500,-1200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid45",
                            "background-position",
                            875,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-1500,-1200],
                            [0,-1400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid46",
                            "background-position",
                            895,
                            0,
                            "linear",
                            "${explosion_small}",
                            [0,-1400],
                            [-300,-1400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid47",
                            "background-position",
                            916,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-300,-1400],
                            [-600,-1400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid48",
                            "background-position",
                            937,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-600,-1400],
                            [-900,-1400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid49",
                            "background-position",
                            958,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-900,-1400],
                            [-1200,-1400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid50",
                            "background-position",
                            979,
                            0,
                            "linear",
                            "${explosion_small}",
                            [-1200,-1400],
                            [-1500,-1400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            },
            "Page-text": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '316px', '68px', 'auto', 'auto'],
                            font: ['TradeGothicBoldCond, Trade Gothic LT Std-Condensed18', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'Text',
                            text: 'Demo Text',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '316px', '68px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("sprite-test_edgeActions.js");
})("EDGE-10349505");
