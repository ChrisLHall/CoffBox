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
        name: "plus",
        layers: [
            [[0,0,0],
             [0,101,0],
             [0,0,0]],
            [[0,3,0],
             [3,3,3],
             [0,3,0]],
            [[0,0,0],
             [0,3,0],
             [0,0,0]]
        ]
    },
];

game.rawdata.RAW_WORLD_DATA = [
    {
        name: "main",
        playerStartX: 16,
        playerStartY: 16,
        playerStartZ: 3,
        bottomZ: 20,
        modelInstances: [
            { name: "plus", x: 5, y: 5, z: 3},
            { name: "plus", x: 20, y: 7, z: 2},
            { name: "plus", x: 9, y: 14, z: 5},
            { name: "plus", x: 2, y: 19, z: 4},
            { name: "plus", x: 25, y: 25, z: 1},
            { name: "plus", x: 15, y: 15, z: 7},
        ],
        entities: [
            { type: "player", x: 0, y: 0, z: 0, args: {} }
        ]
    },
];