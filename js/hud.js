// The HUD draws directly to the framebuffer.

game.HUD = function() {
    this.tutorialActive = false;
    this.tutorialPage = 0;
    this.pauseActive = false;

    this.playerWin = false;
    this.waveCounter = 0; // purely for visual effects

    this.nextPgKey = false;
    this.pauseKey = false;
    this.restartKey = false;
};

game.HUD.prototype.update = function() {
    if (game.state.needTutorial) {
        game.state.needTutorial = false;
        game.paused = true;
        this.tutorialActive = true;
        this.tutorialPage = 0;
    }

    if (game.input.helpKeyDown && !this.tutorialActive && !this.pauseActive) {
        game.state.needTutorial = true;
    }

    if (game.input.restartKeyDown) {
        if (!this.restartKey) {
            this.restartKey = true;
            game.currentWorld.reset();
        }
    } else {
        this.restartKey = false;
    }

    if (game.input.actionKeyDown) {
        if (!this.nextPgKey) {
            this.nextPgKey = true;
            if (this.tutorialActive) {
                this.tutorialPage++;
            }
        }
    } else {
        this.nextPgKey = false;
    }

    if (!this.tutorialActive) {
        if (game.input.pauseKeyDown) {
            if (!this.pauseKey) {
                this.pauseKey = true;
                if (this.pauseActive) {
                    this.pauseActive = false;
                    game.paused = false;
                } else {
                    this.pauseActive = true;
                    game.paused = true;
                }
            }
        } else {
            this.pauseKey = false;
        }
    }

    if (this.tutorialPage > 3) {
        this.tutorialActive = false;
        this.tutorialPage = 0;
        game.paused = false;
    }

    // The player wins as soon as all the beans are collected.
    if (!this.pauseActive && !this.tutorialActive && !this.playerWin) {
        var points = 0;
        var beanKeys = Object.keys(game.state.beans);
        for (var i = 0; i < beanKeys.length; i++) {
            if (game.state.beans.hasOwnProperty(beanKeys[i])) {
                if (game.state.beans[beanKeys[i]] == true) {
                    points++;
                }
            }
        }
        if (points == beanKeys.length) {
            this.playerWin = true;
            game.paused = true;
        }
    }
    this.waveCounter++;
};

game.HUD.prototype.draw = function(frame) {
    if (this.tutorialActive) {
        frame.clear([0, 0, 0]);
        //frame.text(4, 1, "page " + this.tutorialPage.toString(), [255, 255, 255]);
        if (this.tutorialPage == 0) {
            frame.text(3, 1, "coffee", [150, 120, 0]);
            frame.text(18, 6, "box", [200, 190, 50]);
            frame.text(6, 20, "press", [100, 200, 255]);
            frame.text(2, 25, "<space>", [100, 200, 255]);
        } else if (this.tutorialPage == 1) {
            frame.text(1, 1, "move:", [255, 255, 255]);
            frame.text(3, 6, "arrows", [255, 0, 0]);
            frame.text(1, 11, "jump:", [255, 255, 255]);
            frame.text(3, 16, "space", [255, 0, 0]);
            frame.text(2, 25, "<space>", [100, 200, 255]);
        } else if (this.tutorialPage == 2) {
            frame.text(1, 1, "pause:", [255, 255, 255]);
            frame.text(25, 1, "p", [255, 0, 0]);
            frame.text(1, 6, "help:", [255, 255, 255]);
            frame.text(19, 6, "h", [255, 0, 0]);
            frame.text(1, 11, "restart:", [255, 255, 255]);
            frame.text(27, 16, "r", [255, 0, 0]);
            frame.text(2, 25, "<space>", [100, 200, 255]);
        } else if (this.tutorialPage == 3) {
            frame.text(6, 5, "find", [255, 255, 255]);
            frame.text(1, 11, "coffee", [200, 190, 50]);
            frame.text(8, 16, "beans!", [200, 190, 50]);
            var coffeeColor = game.vox.colorTable[102];
            frame.pixel(10, 25, coffeeColor);
            frame.pixel(10, 26, coffeeColor);
            frame.pixel(11, 25, coffeeColor);
            frame.pixel(11, 26, coffeeColor);
            this.drawBean(frame, 14, 24);
            frame.pixel(20, 26, coffeeColor);
        }
    }

    if (this.pauseActive) {
        frame.fillrect(0, 11, 32, 1, [255, 255, 255]);
        frame.fillrect(0, 12, 32, 8, [0, 0, 0]);
        frame.fillrect(0, 20, 32, 1, [255, 255, 255]);
        this.drawBean(frame, 1, 14);

        var points = 0;
        var beanKeys = Object.keys(game.state.beans);
        for (var i = 0; i < beanKeys.length; i++) {
            if (game.state.beans.hasOwnProperty(beanKeys[i])) {
                if (game.state.beans[beanKeys[i]] == true) {
                    points++;
                }
            }
        }

        frame.text(6, 14, points.toString()
                + "/" + beanKeys.length.toString(), [255, 255, 255]);
    }

    if (this.playerWin) {
        frame.clear([0,0,0]);

        for (var row = 0; row < 32; row++) {
            for (var col = 0; col < 32; col++) {
                var dist = Math.sqrt((row - 16)*(row - 16) + (col - 16)*(col - 16));
                var colorR = Math.floor(128 + 127 * Math.sin(dist / 20
                        + this.waveCounter / 20));
                var colorG = Math.floor(128 + 127 * Math.sin(dist / 10
                        + this.waveCounter / 30));
                var colorB = Math.floor(128 + 127 * Math.sin(dist / 50
                        + this.waveCounter / 60));
                frame.pixel(col, row, [colorR, colorG, colorB]);
            }
        }

        frame.fillrect(0, 9, 32, 1, [255, 255, 255]);
        frame.fillrect(0, 10, 32, 12, [0, 0, 0]);
        frame.fillrect(0, 22, 32, 1, [255, 255, 255]);
        frame.text(2, 11, "you win!", [255, 170, 0]);
        this.drawBean(frame, 1, 17);
        var beans = Object.keys(game.state.beans).length;
        frame.text(6, 17, beans.toString()
                + "/" + beans.toString(), [255, 255, 255]);
    }
};

/** Utility function to draw a bean on the screen. */
game.HUD.prototype.drawBean = function(frame, x, y) {
    var light = game.vox.colorTable[102];
    var dark = game.vox.colorTable[10];
    frame.pixel(x + 1, y, light);
    frame.pixel(x + 2, y, light);

    frame.pixel(x, y + 1, light);
    frame.pixel(x + 1, y + 1, light);
    frame.pixel(x + 2, y + 1, dark);
    frame.pixel(x + 3, y + 1, light);

    frame.pixel(x, y + 2, light);
    frame.pixel(x + 1, y + 2, dark);
    frame.pixel(x + 2, y + 2, light);
    frame.pixel(x + 3, y + 2, light);

    frame.pixel(x + 1, y + 3, light);
    frame.pixel(x + 2, y + 3, light);
}
