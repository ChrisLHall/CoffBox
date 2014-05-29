// VoxBuffer.js
// VoxBuffer is a 32x32x8 
game.VoxBuffer = function() {
    this.colorTable = {
        0: [0, 0, 0], // transparent
        1: [255, 255, 255], // white, avoid using this please
        2: [255, 0, 0], // red
        3: [0, 255, 0], // green
        4: [0, 0, 255], // blue
        5: [0, 255, 255], // cyan
        6: [255, 0, 255], // purple
        7: [255, 255, 0], // yellow
    };
    this.voxels = [];
    for (var row = 0; row < 32; row++) {
        var rowBuf = [];
        for (var col = 0; col < 32; col++) {
            var colBuf = [0, 0, 0, 0, 0, 0, 0, 0];
            rowBuf.push(colBuf);
        }
        this.voxels.push(rowBuf);
    }
};

game.VoxBuffer.prototype.clear = function(colorInd) {
    for (var row = 0; row < 32; row++) {
        for (var col = 0; col < 32; col++) {
            for (var layer = 0; layer < 8; layer++) {
                this.voxels[row][col][layer] = colorInd;
            }
        }
    }
};

game.VoxBuffer.prototype.set = function(x, y, z, colorInd) {
    this.voxels[y][x][z] = colorInd;
}

game.VoxBuffer.prototype.get = function(x, y, z, colorInd) {
    return this.voxels[y][x][z];
}

game.VoxBuffer.prototype.draw = function(framebuffer) {
    for (var row = 0; row < 32; row++) {
        for (var col = 0; col < 32; col++) {
            var color = [0, 0, 0];
            if (this.voxels[row][col][0] != 0 && this.voxels[row][col][1] != 0) {
                color = [255, 255, 255];
            } else if (this.voxels[row][col][1] != 0) {
                var px = this.colorTable[this.voxels[row][col][1]];
                color[0] = Math.floor(255 * 0.5 + px[0] * 0.5);
                color[1] = Math.floor(255 * 0.5 + px[1] * 0.5);
                color[2] = Math.floor(255 * 0.5 + px[2] * 0.5);
            } else {
                for (var layer = 2; layer < 8; layer++) {
                    if (this.voxels[row][col][layer] != 0) {
                        var px = this.colorTable[this.voxels[row][col][layer]];
                        color[0] = Math.floor((6 - layer + 2) / 6 * px[0]);
                        color[1] = Math.floor((6 - layer + 2) / 6 * px[1]);
                        color[2] = Math.floor((6 - layer + 2) / 6 * px[2]);
                        break;
                    }
                }
            }
            framebuffer.pixel(col, row, color);
        }
    }
};


