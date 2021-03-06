Preload = function() {};

Preload.prototype = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scaleRatio = window.devicePixelRatio / 3;
    },

    preload: function() {
        game.load.image('black', 'assets/images/black.png');
        game.load.image('logo', 'assets/images/logo.png');
        game.load.image('kdg', 'assets/images/kdg.png');
        game.load.image('ivan', 'assets/images/ivan.png');
        game.load.image('pieter', 'assets/images/pieter.png');
        game.load.image('karel', 'assets/images/karel.png');
    },

    create: function() {
        game.state.start('splash');
    }
};
