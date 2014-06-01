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
            [[21,21],
             [21,21]]
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
        name: "roomstairs",
        layers: [
            [[ 0, 0, 0,14]],
            [[ 0, 0,14, 0]],
            [[ 0,14, 0, 0]],
            [[14, 0, 0, 0]],
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
            { name: "smallwallUD", x: -3, y: -2, z: 0},
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
                destWorld: "jumpquest",
                destX: 16,
                destY: 16,
                destZ: 3
            } },
            { type: "bean", x: 1, y: 0, z: 1, args: {
                name: "Jeffrey",
                model: "smallbean"
            } },
            { type: "bean", x: 8, y: 1, z: 10, args: {
                name: "Sven",
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
                destX: 31,
                destY: 0,
                destZ: 7
            } },
            { type: "bean", x: 0, y: 15, z: 10, args: {
                name: "Steven",
                model: "giantbean"
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