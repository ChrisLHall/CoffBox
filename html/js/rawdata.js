// rawdata.js
// Raw level and model data. Ideally this is loaded from the server
// but...oh well. No time to waste!
// Models are stored in objects of this form:
// {
//   name: ,
//   layers:
// }
// Worlds are stored in objects of this form:
// {
//   name: ,
//   playerStartX: ,
//   playerStartY: ,
//   playerStartZ: ,
//   modelInstances: [{name: ,x: ,y: ,z: }],
//   entities: [{type: ,x: ,y: ,z: ,entityArgs: }]
// }

game.rawdata = {};

game.rawdata.RAW_MODEL_DATA = [
    {
        name: "player",
        layers: [
            [[100]]
        ]
    },
    {
        name: "x",
        layers: [
            [[2,0,2],
             [0,2,0],
             [2,0,2]]
        ]
    },
    {
        name: "smallportal",
        layers: [
            [[101]],
            [[101]]
        ]
    },
    {
        name: "largeportal",
        layers: [
            [[101,101],
             [101,101]],
            [[101,101],
             [101,101]]
        ]
    },
        {
        name: "hugeportal",
        layers: [
            [[101,101,101],
             [101,101,101],
             [101,101,101]],
            [[101,101,101],
             [101,101,101],
             [101,101,101]]
        ]
    },
    {
        name: "smallbean",
        layers: [
            [[102]]
        ]
    },
    {
        name: "largebean",
        layers: [
            [[102,102],
             [102,102]],
            [[102,102],
             [102,102]]
        ]
    },
    {
        name: "giantbean",
        layers: [
            [[  0,102,102,  0],
             [102,102, 10,102],
             [102, 10,102,102],
             [  0,102,102,  0]],
            [[  0,102,102,  0],
             [102,102, 10,102],
             [102, 10,102,102],
             [  0,102,102,  0]],
        ]
    },
    {
        name: "plus",
        layers: [
            [[0,0,0,0],
             [0,3,3,0],
             [0,3,3,0],
             [0,0,0,0]],
            [[0,3,3,0],
             [3,3,3,3],
             [3,3,3,3],
             [0,3,3,0]],
            [[0,3,3,0],
             [3,3,3,3],
             [3,3,3,3],
             [0,3,3,0]],
            [[0,0,0,0],
             [0,3,3,0],
             [0,3,3,0],
             [0,0,0,0]],
        ]
    },
    {
        name: "lilypad",
        layers: [
            [[ 0,22,22,22,22, 0],
             [22, 0, 0, 0, 0,22],
             [22, 0, 0, 0, 0,22],
             [22, 0, 0, 0, 0,22],
             [22, 0, 0, 0, 0,22],
             [ 0,22,22,22,22, 0]],
            [[ 0,20,20,20,20, 0],
             [20,20,20,20,20,20],
             [20,20,20,20,20,20],
             [20,20,20,20,20,20],
             [20,20,20,20,20,20],
             [ 0,20,20,20,20, 0]]
        ]
    },
    {
        name: "smallwallLR",
        layers: [
            [[4,4,4,4,4]],
            [[4,4,4,4,4]],
            [[4,4,4,4,4]],
        ]
    },
    {
        name: "smallwallUD",
        layers: [
            [[4],
             [4],
             [4],
             [4],
             [4]],
            [[4],
             [4],
             [4],
             [4],
             [4]],
            [[4],
             [4],
             [4],
             [4],
             [4]],
        ]
    },
    {
        name: "loopLR",
        layers: [
            [[4],
             [0],
             [0],
             [0],
             [4]],
            [[4],
             [0],
             [0],
             [0],
             [4]],
            [[4],
             [4],
             [4],
             [4],
             [4]],
        ]
    },
        {
        name: "loopUD",
        layers: [
            [[4,0,0,0,4]],
            [[4,0,0,0,4]],
            [[4,4,4,4,4]],
        ]
    },
    {
        name: "hallwayLR",
        layers: [
            [[4,4,4,4,4],
             [0,0,0,0,0],
             [0,0,0,0,0],
             [0,0,0,0,0],
             [4,4,4,4,4]],
            [[4,4,4,4,4],
             [0,0,0,0,0],
             [0,0,0,0,0],
             [0,0,0,0,0],
             [4,4,4,4,4]],
            [[4,4,4,4,4],
             [4,4,4,4,4],
             [4,4,4,4,4],
             [4,4,4,4,4],
             [4,4,4,4,4]],
        ]
    },
    {
        name: "hallwayUD",
        layers: [
            [[4,0,0,0,4],
             [4,0,0,0,4],
             [4,0,0,0,4],
             [4,0,0,0,4],
             [4,0,0,0,4]],
            [[4,0,0,0,4],
             [4,0,0,0,4],
             [4,0,0,0,4],
             [4,0,0,0,4],
             [4,0,0,0,4]],
            [[4,4,4,4,4],
             [4,4,4,4,4],
             [4,4,4,4,4],
             [4,4,4,4,4],
             [4,4,4,4,4]],
        ]
    },
    {
        name: "hallwayplat",
        layers: [
            [[4,4,4,4,4],
             [4,4,4,4,4],
             [4,4,4,4,4],
             [4,4,4,4,4],
             [4,4,4,4,4]],
        ]
    },
    {
        name: "blueplat",
        layers: [
            [[14,14],
             [14,14]]
        ]
    },
    {
        name: "roomfloor",
        layers: [
            [[11,11,11,11,11,11],
             [11,11,11,11,11,11],
             [11,11,11,11,11,11],
             [11,11,11,11,11,11],
             [11,11,11,11,11,11],
             [11,11,11,11,11,11],]
        ]
    },
    {
        name: "roomfloorhole",
        layers: [
            [[11,11,11,11,11,11],
             [11,11,11,11,11,11],
             [11,11,11,11,11,11],
             [11,11,11,11,11,11],
             [11, 0, 0, 0, 0,11],
             [11,11,11,11,11,11],]
        ]
    },
    {
        name: "roomwalls",
        layers: [
            [[13,13,13,13,13,13],
             [13, 0, 0, 0, 0,13],
             [13, 0, 0, 0, 0,13],
             [13, 0, 0, 0, 0,13],
             [13, 0, 0, 0, 0,13],
             [13,13,13,13,13,13]],
            [[13,13, 0,13,13,13],
             [13, 0, 0, 0, 0,13],
             [ 0, 0, 0, 0, 0, 0],
             [13, 0, 0, 0, 0,13],
             [13, 0, 0, 0, 0,13],
             [13,13, 0,13,13,13]],
            [[13,13, 0,13,13,13],
             [13, 0, 0, 0, 0,13],
             [ 0, 0, 0, 0, 0, 0],
             [13, 0, 0, 0, 0,13],
             [13, 0, 0, 0, 0,13],
             [13,13, 0,13,13,13]]
        ]
    },
    {
        name: "bigisland",
        layers: [
            [[ 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0,20,20,20, 0, 0],
             [20,20, 0,20,20,20,20, 0],
             [ 0,20, 0, 0, 0, 0,20, 0],
             [ 0, 0, 0, 0,20,20,20, 0],
             [ 0, 0, 0, 0, 0,20, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0],],
            [[ 0, 0, 0,21,21,21, 0, 0],
             [ 0,21,21,21,21,21,21, 0],
             [21,21,21,21,21,21,21, 0],
             [21,21,21,21,21,21,21,21],
             [ 0, 0,21,21,21,21,21,21],
             [ 0, 0, 0,21,21,21,21, 0],
             [ 0, 0, 0, 0,21,21, 0, 0],],
            [[ 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0,21, 0, 0, 0],
             [ 0, 0, 0,21,21,21, 0, 0],
             [ 0,21,21,21,21,21, 0, 0],
             [ 0, 0,21,21,21,21, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0],],
        ]
    },
    {
        name: "smallisland",
        layers: [
            [[ 0,20,20,20,20, 0],
             [20,20,20,20,20,20],
             [20,20,20,20,20,20],
             [ 0,20,20,20,20, 0],],
            [[ 0,21,21,21,21, 0],
             [21,21,21,21,21,21],
             [21,21,21,21,21,21],
             [ 0,21,21,21,21, 0],],
            [[ 0, 0, 0, 0, 0, 0],
             [ 0,21,21,21,21, 0],
             [ 0,21,21,21,21,21],
             [ 0, 0, 0, 0, 0, 0],],
        ]
    },
    {
        name: "tree",
        layers: [
            [[ 0, 0, 0, 0, 0],
             [ 0,23,23,23, 0],
             [ 0,23,23,23, 0],
             [ 0,23,23,23, 0],
             [ 0, 0, 0, 0, 0],],
            [[ 0,23,23,23, 0],
             [23,23,23,23,23],
             [23,23,23,23,23],
             [23,23,23,23,23],
             [ 0,23,23,23, 0],],
            [[ 0,23,23,23, 0],
             [23,23,23,23,23],
             [23,23,14,23,23],
             [23,23,23,23,23],
             [ 0,23,23,23, 0],],
            [[ 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0],
             [ 0, 0,14, 0, 0],
             [ 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0],],
            [[ 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0],
             [ 0, 0,14, 0, 0],
             [ 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0],]
        ]
    },
    {
        name: "roomstairs",
        layers: [
            [[ 0, 0, 0,14]],
            [[ 0, 0,14,14]],
            [[ 0,14,14, 0]],
            [[14,14, 0, 0]],
        ]
    },
];

game.rawdata.RAW_WORLD_DATA = [
    {
        name: "main",
        playerStartX: -1,
        playerStartY: 0,
        playerStartZ: 1,
        bottomZ: 15,
        modelInstances: [
            // Main hallway
            { name: "hallwayLR", x: -2, y: -2, z: 0},
            { name: "hallwayLR", x: 3, y: -2, z: 0},
            { name: "hallwayLR", x: 8, y: -2, z: 0},
            { name: "hallwayLR", x: 13, y: -2, z: 0},
            { name: "loopLR", x: 18, y: -2, z: 1},
            { name: "loopLR", x: 19, y: -2, z: 2},
            { name: "loopLR", x: 20, y: -2, z: 3},
            { name: "loopLR", x: 21, y: -2, z: 4},
            { name: "loopLR", x: 22, y: -2, z: 5},
            { name: "loopLR", x: 23, y: -2, z: 6},
            { name: "hallwayLR", x: 24, y: -2, z: 6},
            { name: "hallwayLR", x: 29, y: -2, z: 6},
            { name: "hallwayplat", x: 34, y: -2, z: 8},
            { name: "smallwallUD", x: 34, y: -6, z: 6},
            { name: "smallwallUD", x: 38, y: -2, z: 6},
            // Up hallway
            { name: "hallwayUD", x: 34, y: -7, z: 6},
            { name: "hallwayUD", x: 34, y: -12, z: 6},
            { name: "loopUD", x: 34, y: -13, z: 5},
            { name: "loopUD", x: 34, y: -14, z: 4},
            { name: "loopUD", x: 34, y: -15, z: 3},
            { name: "loopUD", x: 34, y: -16, z: 2},
            { name: "loopUD", x: 34, y: -17, z: 1},
            { name: "loopUD", x: 34, y: -18, z: 0},
            { name: "loopUD", x: 34, y: -19, z: -1},
            { name: "loopUD", x: 34, y: -20, z: -2},
            { name: "loopUD", x: 34, y: -21, z: -3},
            { name: "loopUD", x: 34, y: -22, z: -4},
            { name: "loopUD", x: 34, y: -23, z: -5},
            { name: "loopUD", x: 34, y: -24, z: -6},
            { name: "loopUD", x: 34, y: -25, z: -7},
            { name: "hallwayUD", x: 34, y: -30, z: -8},
            // The Village
            { name: "roomfloor", x: 33, y: -36, z: -6},
            { name: "roomwalls", x: 33, y: -36, z: -9},
            { name: "roomfloor", x: 33, y: -36, z: -10},
            { name: "roomfloor", x: 33, y: -42, z: -6},
            { name: "roomwalls", x: 33, y: -42, z: -9},
            { name: "roomfloor", x: 33, y: -42, z: -10},
            { name: "roomfloor", x: 33, y: -48, z: -6},
            { name: "roomwalls", x: 33, y: -48, z: -9},
            { name: "roomfloor", x: 33, y: -48, z: -10},
            { name: "roomfloor", x: 33, y: -54, z: -6},
            { name: "roomwalls", x: 33, y: -54, z: -9},
            { name: "roomfloor", x: 33, y: -54, z: -10},
            { name: "roomfloor", x: 39, y: -36, z: -6},
            { name: "roomwalls", x: 39, y: -36, z: -9},
            { name: "roomfloor", x: 39, y: -36, z: -10},
            // The High-Rise
            { name: "roomfloor", x: 45, y: -36, z: -6},
            { name: "roomwalls", x: 45, y: -36, z: -9},
            { name: "roomfloorhole", x: 45, y: -36, z: -10},
            { name: "roomstairs", x: 46, y: -32, z: -10},
            { name: "roomwalls", x: 45, y: -36, z: -13},
            { name: "roomfloorhole", x: 45, y: -36, z: -14},
            { name: "roomstairs", x: 46, y: -32, z: -14},
            { name: "roomwalls", x: 45, y: -36, z: -17},
            { name: "roomfloorhole", x: 45, y: -36, z: -18},
            { name: "roomstairs", x: 46, y: -32, z: -18},
            { name: "roomwalls", x: 45, y: -36, z: -21},
            { name: "roomfloorhole", x: 45, y: -36, z: -22},
            { name: "roomstairs", x: 46, y: -32, z: -22},
            { name: "roomwalls", x: 45, y: -36, z: -25},
            { name: "roomfloorhole", x: 45, y: -36, z: -26},
            { name: "roomstairs", x: 46, y: -32, z: -26},
            { name: "roomfloor", x: 51, y: -36, z: -26},
            { name: "roomfloor", x: 57, y: -36, z: -26},
            // Far left hallway
            { name: "loopLR", x: -3, y: -2, z: -1},
            { name: "loopLR", x: -4, y: -2, z: -2},
            { name: "loopLR", x: -5, y: -2, z: -3},
            { name: "loopLR", x: -6, y: -2, z: -4},
            { name: "loopLR", x: -7, y: -2, z: -5},
            { name: "loopLR", x: -8, y: -2, z: -6},
            { name: "hallwayLR", x: -13, y: -2, z: -7},
            { name: "smallwallUD", x: -14, y: -2, z: -7},
            // Secret stairwell
            { name: "blueplat", x: 1, y: 3, z: 2},
            { name: "blueplat", x: -1, y: 3, z: 3},
            { name: "blueplat", x: -3, y: 3, z: 4},
            { name: "blueplat", x: -5, y: 3, z: 5},
            { name: "blueplat", x: -5, y: 1, z: 6},
            { name: "blueplat", x: -3, y: 1, z: 7},
            { name: "blueplat", x: -1, y: 1, z: 8},
            { name: "blueplat", x: 1, y: 1, z: 9},
            { name: "blueplat", x: 3, y: 1, z: 10},
            { name: "blueplat", x: 5, y: 1, z: 11},
            // Secret bottom platform
            { name: "blueplat", x: 7, y: 0, z: 12},
            { name: "blueplat", x: 7, y: 2, z: 12},
            { name: "blueplat", x: 9, y: 0, z: 12},
            { name: "blueplat", x: 9, y: 2, z: 12},
        ],
        entities: [
            { type: "player", x: -1, y: 0, z: 1, args: {} },
            { type: "portal", x: 35, y: 0, z: 6, args: {
                model: "smallportal",
                destWorld: "trustfall",
                destX: 1,
                destY: 1,
                destZ: -100
            } },
            { type: "bean", x: 1, y: 0, z: 1, args: {
                name: "Jeffrey",
                model: "smallbean"
            } },
            { type: "bean", x: 8, y: 1, z: 10, args: {
                name: "Sven",
                model: "largebean"
            } },
            { type: "bean", x: 58, y: -35, z: -28, args: {
                name: "Bigass Coffee Bean aka Jude",
                model: "giantbean"
            } },
            { type: "bean", x: 35, y: -52, z: -7, args: {
                name: "Cecilia",
                model: "largebean"
            } },
            { type: "bean", x: 35, y: -52, z: -11, args: {
                name: "Stacy",
                model: "largebean"
            } }
        ]
    },
    {
        name: "jumpquest",
        playerStartX: 16,
        playerStartY: 16,
        playerStartZ: 3,
        bottomZ: 15,
        modelInstances: [
            { name: "plus", x: 10, y: 5, z: 3},
            { name: "plus", x: 20, y: 7, z: 2},
            { name: "plus", x: 9, y: 14, z: 5},
            { name: "plus", x: 5, y: 23, z: 4},
            { name: "plus", x: 17, y: 30, z: 3},
            { name: "plus", x: 25, y: 25, z: 1},
            { name: "plus", x: 15, y: 15, z: 7},
            { name: "plus", x: 5, y: 7, z: 9},
            { name: "lilypad", x: 33, y: 23, z: -1},
            { name: "lilypad", x: -1, y: 14, z: 12},
        ],
        entities: [
            { type: "player", x: 0, y: 0, z: 0, args: {} },
            { type: "portal", x: 35, y: 25, z: -2, args: {
                model: "largeportal",
                destWorld: "main",
                destX: 30,
                destY: 0,
                destZ: 7
            } },
            { type: "portal", x: 21, y: 16, z: 7, args: {
                model: "largeportal",
                destWorld: "main",
                destX: 30,
                destY: 0,
                destZ: 7
            } },
            { type: "bean", x: 0, y: 15, z: 10, args: {
                name: "Steven",
                model: "giantbean"
            } },
            { type: "bean", x: 21, y: 8, z: 1, args: {
                name: "Poindexter",
                model: "smallbean"
            } },
            { type: "bean", x: 26, y: 26, z: 0, args: {
                name: "Arnold Schwarzenegger",
                model: "largebean"
            } },
        ]
    },
    {
        name: "trustfall",
        playerStartX: 1,
        playerStartY: 1,
        playerStartZ: -100,
        bottomZ: 15,
        modelInstances: [
            { name: "hallwayLR", x: 0, y: 0, z: -100},
            { name: "smallwallUD", x: 4, y: 0, z: -100},
            { name: "hallwayUD", x: -2, y: 0, z: 13},
            { name: "hallwayUD", x: -2, y: -5, z: 13},
            { name: "hallwayUD", x: -2, y: -10, z: 13},
            { name: "roomstairs", x: -2, y: 5, z: -93},
            { name: "roomstairs", x: -2, y: 5, z: -89},
            { name: "roomstairs", x: -2, y: 5, z: -85},
            { name: "roomstairs", x: -2, y: 5, z: -81},
            { name: "roomstairs", x: -2, y: 5, z: -77},
            { name: "roomstairs", x: -2, y: 5, z: -73},
            { name: "roomstairs", x: -2, y: 5, z: -69}, //hehehehehehehe
            { name: "roomstairs", x: -2, y: 5, z: -65},
            { name: "roomstairs", x: -2, y: 5, z: -61},
            { name: "roomstairs", x: -2, y: 5, z: -57},
            { name: "roomstairs", x: -2, y: 5, z: -53},
            { name: "roomstairs", x: -2, y: 5, z: -49},
            { name: "roomstairs", x: -2, y: 5, z: -45},
            { name: "roomstairs", x: -2, y: 5, z: -41},
            { name: "roomstairs", x: -2, y: 5, z: -37},
            { name: "roomstairs", x: -2, y: 5, z: -33},
            { name: "roomstairs", x: -2, y: 5, z: -29},
            { name: "roomstairs", x: -2, y: 5, z: -25},
            { name: "roomstairs", x: -2, y: 5, z: -21},
            { name: "roomstairs", x: -2, y: 5, z: -17},
            { name: "roomstairs", x: -2, y: 5, z: -13},
            { name: "roomstairs", x: -2, y: 5, z: -9},
            { name: "roomstairs", x: -2, y: 5, z: -5},
            { name: "roomstairs", x: -2, y: 5, z: -1},
            { name: "roomstairs", x: -2, y: 5, z: 3},
            { name: "roomstairs", x: -2, y: 5, z: 7},
            { name: "roomstairs", x: -1, y: -7, z: 11},
            { name: "roomstairs", x: 103, y: -7, z: -93},
            { name: "roomstairs", x: 99, y: -7, z: -89},
            { name: "roomstairs", x: 95, y: -7, z: -85},
            { name: "roomstairs", x: 91, y: -7, z: -81},
            { name: "roomstairs", x: 87, y: -7, z: -77},
            { name: "roomstairs", x: 83, y: -7, z: -73},
            { name: "roomstairs", x: 79, y: -7, z: -69}, //hehehehehehehe
            { name: "roomstairs", x: 75, y: -7, z: -65},
            { name: "roomstairs", x: 71, y: -7, z: -61},
            { name: "roomstairs", x: 67, y: -7, z: -57},
            { name: "roomstairs", x: 63, y: -7, z: -53},
            { name: "roomstairs", x: 59, y: -7, z: -49},
            { name: "roomstairs", x: 55, y: -7, z: -45},
            { name: "roomstairs", x: 51, y: -7, z: -41},
            { name: "roomstairs", x: 47, y: -7, z: -37},
            { name: "roomstairs", x: 43, y: -7, z: -33},
            { name: "roomstairs", x: 39, y: -7, z: -29},
            { name: "roomstairs", x: 35, y: -7, z: -25},
            { name: "roomstairs", x: 31, y: -7, z: -21},
            { name: "roomstairs", x: 27, y: -7, z: -17},
            { name: "roomstairs", x: 23, y: -7, z: -13},
            { name: "roomstairs", x: 19, y: -7, z: -9},
            { name: "roomstairs", x: 15, y: -7, z: -5},
            { name: "roomstairs", x: 11, y: -7, z: -1},
            { name: "roomstairs", x: 7, y: -7, z: 3},
            { name: "roomstairs", x: 3, y: -7, z: 7},
        ],
        entities: [
            { type: "player", x: 0, y: 0, z: 0, args: {} },
            { type: "portal", x: 107, y: -7, z: -2, args: {
                model: "smallportal",
                destWorld: "main",
                destX: 31,
                destY: 0,
                destZ: 7
            } },
            { type: "bean", x: 0, y: -7, z: 10, args: {
                name: "Joe",
                model: "largebean"
            } }
        ]
    },
];

game.rawdata.RAW_SOUND_NAMES = [
    {name: "ambience", loop: true},
    {name: "coffeeget", loop: false},
    {name: "die", loop: false},
    {name: "jump", loop: false},
    {name: "win", loop: false}
];