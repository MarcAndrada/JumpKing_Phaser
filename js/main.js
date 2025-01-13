<reference path="../def/phaser.d.ts" />

import level from '/js/Scenes/level1.js'

import { gamePrefs } from 'js/globals.js';

var config = 
{
    type: Phaser.AUTO,
    width: gamePrefs.gameWidth,
    height: gamePrefs.gameHeight,
    scene:[level], //array con las escenas
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

var juego = new Phaser.Game(config);