// Models are created from a LAYERS object of the following format:
// layers = [
//   [[0, 0, 2, 0, 0],
//    [0, 3, 2, 2, 0],
//    [0, 0, 2, 0, 0]],
//
//   [[0, 0, 0, 0, 0],
//    [0, 0, 3, 0, 0],
//    [0, 0, 0, 0, 0]]
// ];

/** Creates the model from LAYERS at given position POSX, POSY, POSZ. */
game.Model = function(layers, posX, posY, posZ) {
    this.width = layers[0][0].length;
    this.height = layers[0].length;
    this.depth = layers.length;
    this.posX = posX;
    this.posY = posY;
    this.posZ = posZ;
    this.voxels = [];
    for (var row = 0; row < this.height; row++) {
        var rowBuf = [];
        for (var col = 0; col < this.width; col++) {
            var colBuf = [];
            for (var layer = 0; layer < this.depth; layer++) {
                colBuf.push(layers[layer][row][col]);
            }
            rowBuf.push(colBuf);
        }
        this.voxels.push(rowBuf);
    }
};

game.Model.prototype.get = function(localX, localY, localZ) {
    return this.voxels[localY][localX][localZ];
};

/** Returns the voxel at the world position WORLDX, WORLDY, WORLDZ. */
game.Model.prototype.worldGet = function(worldX, worldY, worldZ) {
    var localX = worldX - this.posX;
    var localY = worldY - this.posY;
    var localZ = worldZ - this.posZ;
    if (localX < 0 || localX >= this.width
            || localY < 0 || localY >= this.height
            || localZ < 0 || localZ >= this.depth) {
        return 0;
    }
    return this.get(localX, localY, localZ);
};

/** Returns whether this model is in view of a 32x32x8 view positioned at
 * VIEWPOSX, VIEWPOSY, VIEWPOSZ. */
game.Model.prototype.inView = function(viewPosX, viewPosY, viewPosZ) {
    if (this.posX + this.width <= viewPosX) return false;
    if (this.posY + this.height <= viewPosY) return false;
    if (this.posZ + this.depth <= viewPosZ) return false;
    if (this.posX >= viewPosX + 32) return false;
    if (this.posY >= viewPosY + 32) return false;
    if (this.posZ >= viewPosZ + 8) return false;
    
    return true;
};

/** Draws this model in the given VoxBuffer, given that the buffer is positioned
 * at BUFPOSX, BUFPOSY, BUFPOSZ. */
game.Model.prototype.drawInto = function(voxBuffer, bufPosX, bufPosY, bufPosZ) {
    if (!this.inView(bufPosX, bufPosY, bufPosZ)) return;
    for (var x = 0; x < this.width; x++) {
        var xWorld = x + this.posX - bufPosX;
        if (xWorld < 0 || xWorld > 31) continue;
        for (var y = 0; y < this.height; y++) {
            var yWorld = y + this.posY - bufPosY;
            if (yWorld < 0 || yWorld > 31) continue;
            for (var z = 0; z < this.depth; z++) {
                var zWorld = z + this.posZ - bufPosZ;
                if (zWorld < 0 || zWorld > 7) continue;
                var vox = this.get(x, y, z);
                if (vox != 0) {
                    voxBuffer.set(xWorld, yWorld, zWorld, vox);
                }
            }
        }
    }
};
