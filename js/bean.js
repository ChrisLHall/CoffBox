// Coffee beans are uniquely named! How cute.

game.Bean = function(x, y, z, args) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.name = args.name;
    this.model = new game.Model(game.resources.models[args.model], x, y, z);
    this.visible = false;
    if (game.state.beans.hasOwnProperty(this.name)) {
        this.visible = !game.state.beans[this.name];
    } else {
        game.state.beans[this.name] = false;
        this.visible = true;
    }
};

game.Bean.prototype.update = function() {
    if (this.visible && game.player != null
            && game.player.x >= this.x && game.player.x < this.x + this.model.width
            && game.player.y >= this.y && game.player.y < this.y + this.model.height
            && game.player.z >= this.z && game.player.z < this.z + this.model.depth) {
        game.state.beans[this.name] = true;
        this.visible = false;
    }
};

game.Bean.prototype.drawInto = function(voxBuffer, viewX, viewY, viewZ) {
    if (this.visible) {
        this.model.drawInto(voxBuffer, viewX, viewY, viewZ);
    }
};

game.Bean.prototype.isSolid = function(worldX, worldY, worldZ) {
    return false;
};