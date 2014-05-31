game = {};

game.update = function() {
    game.vox.updateColors();
    game.hud.update();
    if (!game.paused) {
        game.currentWorld.update();
    }
};

game.draw = function() {
    game.vox.clear(0);
    /* // Keeping this for history's sake of course.
    for (var row = 0; row < 32; row++) {
        for (var col = 0; col < 32; col++) {
            var dist = Math.sqrt((row - 16)*(row - 16) + (col - 16)*(col - 16));
            var layer = Math.floor(4 + 3.98 * Math.sin(dist / 10 + counter / 30));
            game.vox.set(col, row, layer, 4);
        }
    }
    */

    game.currentWorld.draw(game.vox);

    game.screen.clear([0, 0, 0]);
    game.vox.draw(game.screen);
    game.hud.draw(game.screen);
    game.screen.render();
};

game.start = function() {
    game.screen = new Framebuffer({
        width: 32,
        height: 32,
        canvasId: "gameScreen"
    });

    game.paused = false;
    game.state = {
        // game.state.beans maps coffee bean names with whether they
        // have been acquired yet.
        beans: {}, 
        // If needTutorial is true, the HUD will pause the game and show the
        // tutorial.
        needTutorial: true
    };
    game.player = null;

    game.input.start();
    game.resources.loadAll();
    game.vox = new game.VoxBuffer();
    game.hud = new game.HUD();
    game.currentWorld = game.resources.worlds["main"];
    game.currentWorld.regenerateEntities();

    setInterval(game.loop, 16);
};

game.loop = function() {
    game.update();
    game.draw();
};
