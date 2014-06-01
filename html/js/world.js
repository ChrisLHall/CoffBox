// Worlds are initiated with objects with two lists: modelInstances, and entities.
// Each object in modelInstances is of the form {name: ,x: ,y: ,z: }.
// Each object in entities is of the form {type: ,x: ,y: ,z: ,entityArgs: }.
// The object also has three properties playerStartX, playerStartY, and playerStartZ.
// The object also has a "name" property.
// Worlds (not the initializer objects) have viewX, viewY, and viewZ properties.

game.World = function(args) {
    this.name = args.name;
    this.args = args; // Keep the original data around, it may be useful.
    this.viewX = 0;
    this.viewY = 0
    this.viewZ = 0;
    this.playerStartX = args.playerStartX;
    this.playerStartY = args.playerStartY;
    this.playerStartZ = args.playerStartZ;
    this.bottomZ = args.bottomZ;

    this.models = [];
    for (var i = 0; i < args.modelInstances.length; i++) {
        var inst = args.modelInstances[i];
        this.models.push(new game.Model(game.resources.models[inst.name],
                                        inst.x, inst.y, inst.z));
    }

    this.entityArgs = args.entities;
    this.entities = [];
    this.regenerateEntities();
};

game.World.prototype.regenerateEntities = function() {
    this.entities = [];
    for (var i = 0; i < this.entityArgs.length; i++) {
        this.entities.push(this.makeEntity(this.entityArgs[i]));
    }
};

/** Create an entity from the argument object of the form
 * {type: ,x: ,y: ,z: , entityArgs: }. */
game.World.prototype.makeEntity = function(argObj) {
    if (argObj.type == "player") {
        return new game.Player(this.playerStartX, this.playerStartY,
            this.playerStartZ, argObj.args);
    } else if (argObj.type == "portal") {
        return new game.Portal(argObj.x, argObj.y, argObj.z, argObj.args);
    } else if (argObj.type == "bean") {
        return new game.Bean(argObj.x, argObj.y, argObj.z, argObj.args);
    }
    return null;
};

/** Reset the player position to the original position, and regenerate
 * entities. */
game.World.prototype.reset = function() {
    this.playerStartX = this.args.playerStartX;
    this.playerStartY = this.args.playerStartY;
    this.playerStartZ = this.args.playerStartZ;
    this.regenerateEntities();
};

game.World.prototype.update = function() {
    for (var i = 0; i < this.entities.length; i++) {
        this.entities[i].update();
    }
}

/** Draw the world into VOXBUFFER. */
game.World.prototype.draw = function(voxBuffer) {
    for (var i = 0; i < this.models.length; i++) {
        this.models[i].drawInto(voxBuffer, this.viewX, this.viewY, this.viewZ);
    }
    for (var i = 0; i < this.entities.length; i++) {
        this.entities[i].drawInto(voxBuffer, this.viewX, this.viewY, this.viewZ);
    }
};

/** Returns whether the world position WORLDX, WORLDY, WORLDZ is solid. */
game.World.prototype.isSolid = function(worldX, worldY, worldZ) {
    for (var i = 0; i < this.models.length; i++) {
        if (this.models[i].worldGet(worldX, worldY, worldZ) != 0) {
            return true;
        }
    }
    for (var i = 0; i < this.entities.length; i++) {
        if (this.entities[i].isSolid(worldX, worldY, worldZ)) {
            return true;
        }
    }
    return false;
};
