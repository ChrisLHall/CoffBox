// Players are special because they move the view around. Also because they are
// the player!!!

game.Player = function(x, y, z, args) {
    this.physicsCounter = 2;
    this.vspeed = 0;
    this.noGravCounter = 0;
    this.arrowCounter = 3;
    this.x = x;
    this.y = y;
    this.z = z;
    this.model = new game.Model(game.resources.models["player"], x, y, z);
};

game.Player.prototype.update = function() {
    this.physicsCounter--;
    if (this.physicsCounter == 0) {
        this.physicsCounter = 4;
        // The following line attempts to move the character
        if (!this.moveIfFree(this.x, this.y, this.z + this.vspeed)) {
            this.vspeed = 0;
        }
        if (this.vspeed < 0) {
            this.vspeed++;
        } else if (this.vspeed == 0
                && !game.currentWorld.isSolid(this.x, this.y, this.z + 1)
                && this.noGravCounter <= 0) {
            this.vspeed = 1;
        }
        this.noGravCounter--;
    }

    this.arrowCounter--;
    if (this.arrowCounter == 0) {
        this.arrowCounter = 3;
        if (game.input.actionKeyDown) {
            if (game.currentWorld.isSolid(this.x, this.y, this.z + 1)) {
                this.vspeed = -1;
                this.noGravCounter = 5;
            }
        }
        if (game.input.leftKeyDown) {
            if (!this.moveIfFree(this.x - 1, this.y, this.z)) {
                this.moveIfFree(this.x - 1, this.y, this.z - 1)
            }
        }
        if (game.input.rightKeyDown) {
            if (!this.moveIfFree(this.x + 1, this.y, this.z)) {
                this.moveIfFree(this.x + 1, this.y, this.z - 1);
            }
        }
        if (game.input.upKeyDown) {
            if (!this.moveIfFree(this.x, this.y - 1, this.z)) {
                this.moveIfFree(this.x, this.y - 1, this.z - 1);
            }
        }
        if (game.input.downKeyDown) {
            if (!this.moveIfFree(this.x, this.y + 1, this.z)) {
                this.moveIfFree(this.x, this.y + 1, this.z - 1);
            }
        }
    }

    if (this.z > game.currentWorld.bottomZ) {
            this.x = game.currentWorld.playerStartX;
            this.y = game.currentWorld.playerStartY;
            this.z = game.currentWorld.playerStartZ;
    }

    this.model.posX = this.x;
    this.model.posY = this.y;
    this.model.posZ = this.z;

    game.currentWorld.viewX = this.x - 16;
    game.currentWorld.viewY = this.y - 16;
    game.currentWorld.viewZ = this.z - 2;
};

/** Move to NEWX, NEWY, NEWZ if it is free. */
game.Player.prototype.moveIfFree = function(newX, newY, newZ) {
    if (!game.currentWorld.isSolid(newX, newY, newZ)) {
        this.x = newX;
        this.y = newY;
        this.z = newZ;
        return true;
    }
    return false;
};

game.Player.prototype.drawInto = function(voxBuffer, viewX, viewY, viewZ) {
    this.model.drawInto(voxBuffer, viewX, viewY, viewZ);
};

game.Player.prototype.isSolid = function(worldX, worldY, worldZ) {
    return false;
};