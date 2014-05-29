game = {};

game.update = function() {};
// TODO REMOVE
counter = 0;

game.draw = function() {
    counter++;

    //game.screen.pixel(Math.floor(Math.random() * 31.99), Math.floor(Math.random() * 31.99), [0, 255, 0]);
    //game.vox.set(Math.floor(Math.random() * 31.99), Math.floor(Math.random() * 31.99),
    //    Math.floor(Math.random() * 7.99), 3);
    game.vox.clear(0);
    for (var row = 0; row < 32; row++) {
        for (var col = 0; col < 32; col++) {
            var dist = Math.sqrt((row - 16)*(row - 16) + (col - 16)*(col - 16));
            var layer = Math.floor(4 + 3.98 * Math.sin(dist / 10 + counter / 30));
            game.vox.set(col, row, layer, 4);
        }
    }

    game.screen.clear([0, 0, 0]);
    game.vox.draw(game.screen);
    game.screen.render();
};

game.start = function() {
    game.screen = new Framebuffer({
        width: 32,
        height: 32,
        canvasId: "gameScreen"
    });
    game.vox = new game.VoxBuffer();
    setInterval(game.loop, 16);
};

game.loop = function() {
    game.update();
    game.draw();
};
