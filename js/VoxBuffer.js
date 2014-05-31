// VoxBuffer.js
// VoxBuffer is a 32x32x8 
game.VoxBuffer = function() {
    this.colorCounter = 0;
    this.colorTable = {
        0: [0, 0, 0], // transparent
        1: [255, 255, 255], // white, avoid using this please
        2: [255, 0, 0], // red
        3: [0, 255, 0], // green
        4: [0, 0, 255], // blue
        5: [0, 255, 255], // cyan
        6: [255, 0, 255], // purple
        7: [255, 255, 0], // yellow
        100: [220, 220, 220], // changing shades of gray
        101: [0, 255, 255], // changes from cyan to green
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

/** Updates changing gradient colors. */
game.VoxBuffer.prototype.updateColors = function() {
    this.colorCounter++;
    var grayWave = 0.5 + 0.5 * Math.sin(this.colorCounter / 10);
    var blueWave = 0.5 + 0.5 * Math.sin(this.colorCounter / 25);
    this.colorTable[100] = this.lerpColors([230, 230, 230], [150, 150, 150],
        grayWave);
    this.colorTable[101] = this.lerpColors([0, 220, 220], [0, 255, 0],
        blueWave);
};

/** Returns the linear interpolation between COLOR1 and COLOR2 by AMOUNT. */
game.VoxBuffer.prototype.lerpColors = function(color1, color2, amount) {
    return [
        Math.floor(color2[0] * amount + color1[0] * (1 - amount)),
        Math.floor(color2[1] * amount + color1[1] * (1 - amount)),
        Math.floor(color2[2] * amount + color1[2] * (1 - amount)),
    ];
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
};

game.VoxBuffer.prototype.get = function(x, y, z, colorInd) {
    return this.voxels[y][x][z];
};

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


