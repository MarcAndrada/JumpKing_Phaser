class level1 extends Phaser.Scene
{
    constructor()
    {
        super({key:'level1'});
    }

    preload()
    { //Carga assets en memoria
        this.cameras.main.setBackgroundColor("000");

        this.loadAssetFirstLevel();
        this.loadAssetSecondLevel();

        this.load.setPath('assets/sprites');
        this.load.spritesheet('jumpKing','hero.png',
        {
            frameWidth:32,frameHeight:32
        });

        this.load.setPath('assets/fonts');
        this.load.bitmapFont('CounterFont','Jacquard.png','Jacquard.fnt');
    }

    create()
    { 
        //Pinta assets en pantalla
        //Pinto las CAPAS/LAYERS

        //this.createFirstLevel();
        this.createSecondLevel();

        this.jumpKing = new jumpKingPrefab(this, config.width / 2 + 100, config.height / 2 + 120,);
        this.jumpKing.setFrame(0);

        this.cameras.main.scrollX = config.width / 2 - this.cameras.main.width / 2;
        this.cameras.main.scrollY = config.height / 1.435 - this.cameras.main.height / 2;

        this.counterUI = new counterPrefab(this, gamePrefs.gameWidth/2 , 30, 15, 'CounterFont');
    }

    update()
    {        
        
    }

    loadAssetFirstLevel()
    {
        this.load.setPath('assets/sprites/map1');
        this.load.image('lvl1BottomLeftBox','BottomLeftBox.png');
        this.load.image('lvl1BottomRightBox','BottomRightBox.png');
        this.load.image('lvl1CentralPlatformBox','CentralPlatform.png');
        this.load.image('lvl1Floor','Floor.png');
        this.load.image('lvl1TopLeftSide','TopLeftSide.png');
        this.load.image('lvl1TopRightSide','TopRightSide.png');
        this.load.image('lvl1Background','level1Background.png');
    }
    createFirstLevel()
    {
        this.background = this.createMapLayer('lvl1Background', config.width / 2, config.height / 1.43);
        this.lvl1floor = this.createMapLayer('lvl1Floor', config.width / 2, config.height, true, true, false);
        this.lvl1boxRight = this.createMapLayer('lvl1BottomRightBox', 
            (config.width / 2) + (224 / 2) + (128 / 2), 
            config.height - (176 / 2) + (32 / 2), 
            true, true, false
        );
        this.lvl1boxLeft = this.createMapLayer('lvl1BottomLeftBox', 
            (config.width / 2) - (224 / 2) - (128 / 2), 
            config.height - (176 / 2) + (32 / 2), 
            true, true, false
        );
        this.lvl1sideRight = this.createMapLayer('lvl1TopRightSide', 
            (config.width / 2) - (224 / 2) - 128 + (8 / 2), 
            config.height - 176 - (184 / 2) + (32 / 2), 
            true, true, false
        );
        this.lvl1sideLeft = this.createMapLayer('lvl1TopLeftSide', 
            (config.width / 2) + (224 / 2) + 128 - (8 / 2), 
            config.height - 176 - (184 / 2) + (32 / 2), 
            true, true, false
        );
        this.lvl1platform = this.createMapLayer('lvl1CentralPlatformBox', 
            config.width / 2, 
            (config.height / 2.07), 
            true, true, false
        );
    }
    loadAssetSecondLevel()
    {
        this.load.setPath('assets/sprites/map2');
        this.load.image('lvl2Background','Background.png');
        this.load.image('lvl2TopPlatform2','A81x90.png');
        this.load.image('lvl2TopPlatform1','B74x64.png');
        this.load.image('lvl2MiddlePlatform2','C74x32.png');
        this.load.image('lvl2MiddlePlatform1','E64x32.png');
        this.load.image('lvl2BottomPlatform','D98x32.png');
        this.load.image('lvl2RightWall','LD8x360.png');
        this.load.image('lvl2LeftWall2','LI18x79.png');
        this.load.image('lvl2LeftWall1','LI28x191.png');
    }
    createSecondLevel()
    {
        this.background = this.createMapLayer('lvl2Background', config.width / 2, config.height / 1.43);
        this.lvl2BotPltf = this.createMapLayer('lvl2BottomPlatform', 
            (config.width / 2) + 105, 
            (config.height - 32), 
            true, true, false
        );
        this.lvl2MidPltf1 = this.createMapLayer('lvl2MiddlePlatform1', 
            (config.width / 2) + 200, 
            (config.height - 128), 
            true, true, false
        );
        this.lvl2MidPltf2 = this.createMapLayer('lvl2MiddlePlatform2', 
            (config.width / 2) + 53, 
            (config.height - 128), 
            true, true, false
        );
        this.lvl2TopPltf1 = this.createMapLayer('lvl2TopPlatform1', 
            (config.width / 2) - 84, 
            (config.height / 1.63), 
            true, true, false
        );
        this.lvl2TopPltf2 = this.createMapLayer('lvl2TopPlatform2', 
            (config.width / 2) - 200, 
            (config.height / 1.68), 
            true, true, false
        );
        this.lvl2RightWall = this.createMapLayer('lvl2RightWall', 
            (config.width / 2) + 236, 
            (config.height / 1.43), 
            true, true, false
        );
        this.lvl2LeftWall2 = this.createMapLayer('lvl2LeftWall2', 
            (config.width / 2) - 236, 
            (config.height / 1.43) - 141, 
            true, true, false
        );
        this.lvl2LeftWall1 = this.createMapLayer('lvl2LeftWall1', 
            (config.width / 2) - 236, 
            (config.height - 191 / 2.43), 
            true, true, false
        );
    }
    createMapLayer(imageKey, x, y, physics = false, immovable = false, allowGravity = false) {
        let layer;
        if (physics) {
            layer = this.physics.add.image(x, y, imageKey);
            layer.body.immovable = immovable;
            layer.body.allowGravity = allowGravity;
        } else {
            layer = this.add.image(x, y, imageKey);
        }
        return layer;
    }
}    