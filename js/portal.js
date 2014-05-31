// Portals have a destination world and position.

game.Portal = function(x, y, z, args) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.model = new game.Model(game.resources.models["portal"], x, y, z);
    this.destWorld = args.destWorld;
    this.destX = args.destX;
    this.destY = args.destY;
    this.destZ = args.destZ;
};

game.Portal.prototype.update = function() {
    if (game.player != null
            && game.player.x >= this.x && game.player.x < this.x + 2
            && game.player.y >= this.y && game.player.y < this.y + 2
            && game.player.z >= this.z && game.player.z < this.z + 2) {
        var targWorld = game.resources.worlds[this.destWorld];
        targWorld.playerStartX = this.destX;
        targWorld.playerStartY = this.destY;
        targWorld.playerStartZ = this.destZ;
        game.currentWorld = targWorld;
        targWorld.regenerateEntities();
    }
};

game.Portal.prototype.drawInto = function(voxBuffer, viewX, viewY, viewZ) {
    this.model.drawInto(voxBuffer, viewX, viewY, viewZ);
};

game.Portal.prototype.isSolid = function(worldX, worldY, worldZ) {
    return false;
};