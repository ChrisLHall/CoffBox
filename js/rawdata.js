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
];

game.rawdata.RAW_WORLD_DATA = [
    {
        name: "main",
        playerStartX: -1,
        playerStartY: 0,
        playerStartZ: 1,
        bottomZ: 15,
        modelInstances: [
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
            { name: "hallwayLR", x: 34, y: -2, z: 6},
            { name: "smallwallUD", x: 39, y: -2, z: 6},
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
            { name: "plus", x: 5, y: 26, z: 4},
            { name: "plus", x: 17, y: 30, z: 3},
            { name: "plus", x: 25, y: 25, z: 1},
            { name: "plus", x: 15, y: 15, z: 7},
        ],
        entities: [
            { type: "player", x: 0, y: 0, z: 0, args: {} },
            { type: "portal", x: 26, y: 22, z: -1, args: {
                model: "largeportal",
                destWorld: "main",
                destX: 34,
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