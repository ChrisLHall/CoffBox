// Resource loader. More just a global place to reference resources from.

game.resources = {
    models: {},
    worlds: {}
};

game.resources.loadAll = function() {
    for (var i = 0; i < game.rawdata.RAW_MODEL_DATA.length; i++) {
        this.loadModel(game.rawdata.RAW_MODEL_DATA[i]);
    }
    for (var i = 0; i < game.rawdata.RAW_WORLD_DATA.length; i++) {
        this.loadWorld(game.rawdata.RAW_WORLD_DATA[i]);
    }
};

game.resources.loadModel = function(modelArgs) {
    this.models[modelArgs.name] = modelArgs.layers;
};

game.resources.loadWorld = function(worldArgs) {
    this.worlds[worldArgs.name] = new game.World(worldArgs);
};
