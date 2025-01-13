import {gamePrefs} from '../globals.js';
import {config} from '../globals.js';

import jumpKingPrefab from '/js/Prefabs/jumpKingPrefab.js'
import counterPrefab from '/js/Prefabs/counterPrefab.js'

export default class level1 extends Phaser.Scene
{
    constructor()
    {
        super({key:'level'});
    }

    preload()
    { //Carga assets en memoria
        this.cameras.main.setBackgroundColor("000");   
    }

    create()
    { 
        //Pinta assets en pantalla
        //Pinto las CAPAS/LAYERS

        this.createFirstLevel();
        this.createSecondLevel();
        this.createThirdLevel();
        this.createFourthLevel();
        this.createFifthLevel();
        this.createSixthLevel();

        this.jumpKing = new jumpKingPrefab(this, config.width / 2, config.height / 2 + 200,);
        this.jumpKing.setFrame(0);

        this.cameras.main.scrollX = config.width / 2 - this.cameras.main.width / 2;
        this.cameras.main.scrollY = config.height / 1.435 - this.cameras.main.height / 2;

        this.counterUI = new counterPrefab(this, gamePrefs.gameWidth / 2 + 70, 30, 12, 'gameFont');
        
        this.loadAnimations();
        this.music = this.sound.add('nature_bg');
        this.music.loop = true;
        this.music.play();
    }


    loadAnimations()
    {
       
        this.anims.create(
        {
            key: 'king_run',
            frames:this.anims.generateFrameNumbers('jumpKing', 
                {start:1, end: 3}),
            frameRate: 7,
            repeat: -1,
            yoyo: true
        });

        this.anims.create(
        {
            key: 'king_jump_fall',
            frames:this.anims.generateFrameNumbers('jumpKing', 
                {start:9, end: 11}),
            frameRate: 10
        });
    }
    update()
    {
        const screenHeight = this.cameras.main.height;
        const upperBoundary = this.cameras.main.scrollY;
        const lowerBoundary = upperBoundary + screenHeight;
    
        if (this.jumpKing.y < upperBoundary) {
            this.cameras.main.scrollY -= config.height / 1.5;
        }
    
        if (this.jumpKing.y > lowerBoundary) {
            this.cameras.main.scrollY += config.height / 1.5;
        }
    }
    
    createFirstLevel()
    {
        this.background = this.createMapLayer('lvl1Background', config.width / 2, config.height / 1.43, 0);
        this.lvl1floor = this.createMapLayer('lvl1Floor', 
            config.width / 2, 
            config.height, 0,
            true, true, false
        );
        this.lvl1boxRight = this.createMapLayer('lvl1BottomRightBox', 
            (config.width / 2) + (224 / 2) + (128 / 2), 
            config.height - (176 / 2) + (32 / 2), 0,
            true, true, false
        );
        this.lvl1boxLeft = this.createMapLayer('lvl1BottomLeftBox', 
            (config.width / 2) - (224 / 2) - (128 / 2), 
            config.height - (176 / 2) + (32 / 2), 0,
            true, true, false
        );
        this.lvl1sideRight = this.createMapLayer('lvl1TopRightSide', 
            (config.width / 2) - (224 / 2) - 128 + (8 / 2), 
            config.height - 176 - (184 / 2) + (32 / 2), 0,
            true, true, false
        );
        this.lvl1sideLeft = this.createMapLayer('lvl1TopLeftSide', 
            (config.width / 2) + (224 / 2) + 128 - (8 / 2), 
            config.height - 176 - (184 / 2) + (32 / 2), 0,
            true, true, false
        );
        this.lvl1platform = this.createMapLayer('lvl1CentralPlatformBox', 
            config.width / 2, 
            (config.height / 2.07), 0,
            true, true, false
        );
    }

    createSecondLevel()
    {
        this.background = this.createMapLayer('lvl2Background', config.width / 2, config.height / 1.43, 360);
        this.lvl2BotPltf = this.createMapLayer('lvl2BottomPlatform', 
            (config.width / 2) + 105, 
            (config.height - 32), 360,
            true, true, false
        );
        this.lvl2MidPltf1 = this.createMapLayer('lvl2MiddlePlatform1', 
            (config.width / 2) + 200, 
            (config.height - 128), 360,
            true, true, false
        );
        this.lvl2MidPltf2 = this.createMapLayer('lvl2MiddlePlatform2', 
            (config.width / 2) + 53, 
            (config.height - 128), 360,
            true, true, false
        );
        this.lvl2TopPltf1 = this.createMapLayer('lvl2TopPlatform1', 
            (config.width / 2) - 84, 
            (config.height / 1.63), 360,
            true, true, false
        );
        this.lvl2TopPltf2 = this.createMapLayer('lvl2TopPlatform2', 
            (config.width / 2) - 200, 
            (config.height / 1.68), 360,
            true, true, false
        );
        this.lvl2RightWall = this.createMapLayer('lvl2RightWall', 
            (config.width / 2) + 236, 
            (config.height / 1.43), 360,
            true, true, false
        );
        this.lvl2LeftWall2 = this.createMapLayer('lvl2LeftWall2', 
            (config.width / 2) - 236, 
            (config.height / 1.43) - 141, 360,
            true, true, false
        );
        this.lvl2LeftWall1 = this.createMapLayer('lvl2LeftWall1', 
            (config.width / 2) - 236, 
            (config.height - 191 / 2.43), 360,
            true, true, false
        );
    }
    createThirdLevel()
    {
        this.background = this.createMapLayer('lvl3Background', config.width / 2, config.height / 1.43, 360 * 2);
        this.lvl3A = this.createMapLayer('lvl3A', 
            (config.width / 2) - 236, 
            (config.height / 1.435), 360 * 2,
            true, true, false
        );
        this.lvl3B = this.createMapLayer('lvl3B', 
            (config.width / 2) + 236, 
            (config.height / 1.435), 360 * 2,
            true, true, false
        );
        this.lvl3C = this.createMapLayer('lvl3C', 
            (config.width / 2) - 204, 
            (config.height - 240), 360 * 2,
            true, true, false
        );
        this.lvl3D = this.createMapLayer('lvl3D', 
            (config.width / 2) + 208, 
            (config.height - 80), 360 * 2,
            true, true, false
        );
        this.lvl3E = this.createMapLayer('lvl3E', 
            (config.width / 2) - 8, 
            (config.height) - 32, 360 * 2,
            true, true, false
        );
        this.lvl3F = this.createMapLayer('lvl3F', 
            (config.width / 2) + 108, 
            (config.height) - 32, 360 * 2,
            true, true, false
        );
        this.lvl3G = this.createMapLayer('lvl3G', 
            (config.width / 2) + 24, 
            (config.height) - 104, 360 * 2,
            true, true, false
        );
        this.lvl3H = this.createMapLayer('lvl3H', 
            (config.width / 2) + 72, 
            (config.height) - 128, 360 * 2,
            true, true, false
        );
        this.lvl3I = this.createMapLayer('lvl3I', 
            (config.width / 2) - 51, 
            (config.height) - 201, 360 * 2,
            true, true, false
        );
        this.lvl3J = this.createMapLayer('lvl3J', 
            (config.width / 2) - 67, 
            (config.height) - 335, 360 * 2,
            true, true, false
        );
    }
    createFourthLevel()
    {
        this.background = this.createMapLayer('lvl4Background', config.width / 2, config.height / 1.43, 360 * 3);
        this.lvl4A = this.createMapLayer('lvl4A', 
            (config.width / 2) - 236, 
            (config.height / 1.435), 360 * 3,
            true, true, false
        );
        this.lvl4B = this.createMapLayer('lvl4B', 
            (config.width / 2) + 236, 
            (config.height / 1.435), 360 * 3,
            true, true, false
        );
        this.lvl4C = this.createMapLayer('lvl4C', 
            (config.width / 2) - 204, 
            (config.height - 120), 360 * 3,
            true, true, false
        );
        this.lvl4D = this.createMapLayer('lvl4D', 
            (config.width / 2) + 212, 
            (config.height - 207), 360 * 3,
            true, true, false
        );
        this.lvl4E = this.createMapLayer('lvl4E', 
            (config.width / 2) - 68, 
            (config.height) - 3, 360 * 3,
            true, true, false
        );
        this.lvl4F = this.createMapLayer('lvl4F', 
            (config.width / 2) - 68, 
            (config.height) - 120, 360 * 3,
            true, true, false
        );
        this.lvl4G = this.createMapLayer('lvl4G', 
            (config.width / 2) - 85, 
            (config.height) - 214, 360 * 3,
            true, true, false
        );
        this.lvl4H = this.createMapLayer('lvl4H', 
            (config.width / 2) - 97, 
            (config.height) - 298, 360 * 3,
            true, true, false
        );
        this.lvl4I = this.createMapLayer('lvl4I', 
            (config.width / 2) + 80, 
            (config.height) - 147, 360 * 3,
            true, true, false
        );
        this.lvl4J = this.createMapLayer('lvl4J', 
            (config.width / 2) + 97, 
            (config.height) - 227, 360 * 3,
            true, true, false
        );
        this.lvl4K = this.createMapLayer('lvl4K', 
            (config.width / 2) + 133, 
            (config.height) - 263, 360 * 3,
            true, true, false
        );
        this.lvl4L = this.createMapLayer('lvl4L', 
            (config.width / 2) + 97, 
            (config.height) - 335, 360 * 3,
            true, true, false
        );
    }
    createFifthLevel()
    {
        this.background = this.createMapLayer('lvl5Background', config.width / 2, config.height / 1.43, 360 * 4);
        this.lvl5A = this.createMapLayer('lvl5A', 
            (config.width / 2) - 236, 
            (config.height / 1.435), 360 * 4,
            true, true, false
        );
        this.lvl5B = this.createMapLayer('lvl5B', 
            (config.width / 2) + 236, 
            (config.height / 1.435), 360 * 4,
            true, true, false
        );
        this.lvl5C = this.createMapLayer('lvl5C', 
            (config.width / 2) - 216, 
            (config.height - 95), 360 * 4,
            true, true, false
        );
        this.lvl5D = this.createMapLayer('lvl5D', 
            (config.width / 2) + 216, 
            (config.height - 175), 360 * 4,
            true, true, false
        );
        this.lvl5E = this.createMapLayer('lvl5E', 
            (config.width / 2) - 108, 
            (config.height) - 23, 360 * 4,
            true, true, false
        );
        this.lvl5F = this.createMapLayer('lvl5F', 
            (config.width / 2) - 96, 
            (config.height) + 1, 360 * 4,
            true, true, false
        );
        this.lvl5G = this.createMapLayer('lvl5G', 
            (config.width / 2) + 109, 
            (config.height) - 23, 360 * 4,
            true, true, false
        );
        this.lvl5H = this.createMapLayer('lvl5H', 
            (config.width / 2) + 97, 
            (config.height) + 1, 360 * 4,
            true, true, false
        );
        this.lvl5I = this.createMapLayer('lvl5I', 
            (config.width / 2) + 108, 
            (config.height) - 95, 360 * 4,
            true, true, false
        );
        this.lvl5J = this.createMapLayer('lvl5J', 
            (config.width / 2) + 65, 
            (config.height) - 248, 360 * 4,
            true, true, false
        );
        this.lvl5K = this.createMapLayer('lvl5K', 
            (config.width / 2), 
            (config.height) - 263, 360 * 4,
            true, true, false
        );
        this.lvl5L = this.createMapLayer('lvl5L', 
            (config.width / 2) - 63, 
            (config.height) - 280, 360 * 4,
            true, true, false
        );
        this.lvl5M = this.createMapLayer('lvl5M', 
            (config.width / 2) - 184, 
            (config.height) - 247, 360 * 4,
            true, true, false
        );
        this.lvl5N = this.createMapLayer('lvl5N', 
            (config.width / 2), 
            (config.height) - 335, 360 * 4,
            true, true, false
        );
    }
    createSixthLevel()
    {
        this.background = this.createMapLayer('lvl6Background', config.width / 2, config.height / 1.43, 360 * 5);
        this.lvl6A = this.createMapLayer('lvl6A', 
            (config.width / 2), 
            (config.height), 360 * 5,
            true, true, false
        );
        this.lvl6B = this.createMapLayer('lvl6B', 
            (config.width / 2) + 236, 
            (config.height - 35), 360 * 5,
            true, true, false
        );
        this.lvl6C = this.createMapLayer('lvl6C', 
            (config.width / 2) - 236, 
            (config.height - 35), 360 * 5,
            true, true, false
        );
    }
    
    createMapLayer(imageKey, x, y, extraHeight, physics = false, immovable = false, allowGravity = false) {
        let layer;
        if (physics) {
            layer = this.physics.add.image(x, y - extraHeight, imageKey);
            layer.body.immovable = immovable;
            layer.body.allowGravity = allowGravity;
        } else {
            layer = this.add.image(x, y - extraHeight, imageKey);
        }
        return layer;
    }
}    