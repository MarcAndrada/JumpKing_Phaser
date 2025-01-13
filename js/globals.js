import preloader from '/js/Scenes/preloader.js';
import menu from '/js/Scenes/menu.js';
import level from '/js/Scenes/level.js'

export var gamePrefs=
{
    gameWidth:960,
    gameHeight:540,
    levelWidth:1280, //40*32
    levelHeight:800, //25*32
    GRAVITY:1000,
    MOVEMENT_SPEED:100,
    MIN_Y_JUMP_FORCE:-150,
    MAX_Y_JUMP_FORCE:-575,
    MIN_X_JUMP_FORCE: 150,
    MAX_X_JUMP_FORCE: 225,
    BOUNCE_Y_MAX_SPEED: -100,
    JUMP_CHARGE_SPEED: 1.2
}

export var config = 
{
    type: Phaser.AUTO,
    width: gamePrefs.gameWidth,
    height: gamePrefs.gameHeight,
    scene:[preloader, menu, level], //array con las escenas
    render:
    {
        pixelArt:true
    },
    physics:
    {
        default:'arcade',
        arcade:
        {
            gravity:{y:gamePrefs.GRAVITY},
            debug:true
        }
    },
    scale:
    {
        mode: Phaser.Scale.FIT,
        width:gamePrefs.gameWidth/1.5,
        height:gamePrefs.gameHeight/1.5,
        autoCenter:Phaser.Scale.CENTER_BOTH
    }
}