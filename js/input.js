// input

game.input = {};

game.input.start = function() {
    var listener = new window.keypress.Listener();
    game.input.leftKeyDown = false;
    game.input.rightKeyDown = false;
    game.input.upKeyDown = false;
    game.input.downKeyDown = false;
    game.input.actionKeyDown = false;
    game.input.helpKeyDown = false;

    listener.register_combo({
        keys: "a",
        on_keydown: function() {game.input.leftKeyDown = true;},
        on_keyup: function() {game.input.leftKeyDown = false;}
    });
    listener.register_combo({
        keys: "left",
        on_keydown: function() {game.input.leftKeyDown = true;},
        on_keyup: function() {game.input.leftKeyDown = false;}
    });

    listener.register_combo({
        keys: "d",
        on_keydown: function() {game.input.rightKeyDown = true;},
        on_keyup: function() {game.input.rightKeyDown = false;}
    });
    listener.register_combo({
        keys: "right",
        on_keydown: function() {game.input.rightKeyDown = true;},
        on_keyup: function() {game.input.rightKeyDown = false;}
    });

    listener.register_combo({
        keys: "w",
        on_keydown: function() {game.input.upKeyDown = true;},
        on_keyup: function() {game.input.upKeyDown = false;}
    });
    listener.register_combo({
        keys: "up",
        on_keydown: function() {game.input.upKeyDown = true;},
        on_keyup: function() {game.input.upKeyDown = false;}
    });

    listener.register_combo({
        keys: "s",
        on_keydown: function() {game.input.downKeyDown = true;},
        on_keyup: function() {game.input.downKeyDown = false;}
    });
    listener.register_combo({
        keys: "down",
        on_keydown: function() {game.input.downKeyDown = true;},
        on_keyup: function() {game.input.downKeyDown = false;}
    });

    listener.register_combo({
        keys: "space",
        on_keydown: function() {game.input.actionKeyDown = true;},
        on_keyup: function() {game.input.actionKeyDown = false;}
    });

    listener.register_combo({
        keys: "h",
        on_keydown: function() {game.input.helpKeyDown = true;},
        on_keyup: function() {game.input.helpKeyDown = false;}
    });
};
