// Resource loader. More just a global place to reference resources from.

game.resources = {
    models: {},
    worlds: {},
    sounds: {}
};

game.resources.loadAll = function() {
    for (var i = 0; i < game.rawdata.RAW_MODEL_DATA.length; i++) {
        this.loadModel(game.rawdata.RAW_MODEL_DATA[i]);
    }
    for (var i = 0; i < game.rawdata.RAW_WORLD_DATA.length; i++) {
        this.loadWorld(game.rawdata.RAW_WORLD_DATA[i]);
    }
    for (var i = 0; i < game.rawdata.RAW_SOUND_NAMES.length; i++) {
        this.loadSound(game.rawdata.RAW_SOUND_NAMES[i]);
    }
};

game.resources.loadModel = function(modelArgs) {
    this.models[modelArgs.name] = modelArgs.layers;
};

game.resources.loadWorld = function(worldArgs) {
    this.worlds[worldArgs.name] = new game.World(worldArgs);
};

game.resources.loadSound = function(soundArgs) {
    var mp3 = "res/" + soundArgs.name + ".mp3";
    var ogg = "res/" + soundArgs.name + ".ogg";
    var sound = new Howl({
        urls: [mp3, ogg],
        loop: soundArgs.loop
    });
    this.sounds[soundArgs.name] = sound;
};
