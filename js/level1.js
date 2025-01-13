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
        this.loadAssetsThirdLevel();
        this.loadAssetsFourthLevel();
        this.loadAssetsFifthLevel();
        this.loadAssetsSixthLevel();

        this.load.setPath('assets/sprites');
        this.load.spritesheet('jumpKing','hero.png',
        {
            frameWidth:32,frameHeight:32
        });

        this.load.setPath('assets/fonts');
        this.load.bitmapFont('CounterFont','PixelFont.png','PixelFont.fnt');
    }

    create()
    { 
        //Pinta assets en pantalla
        //Pinto las CAPAS/LAYERS

        //this.createFirstLevel();
        //this.createSecondLevel();
        //this.createThirdLevel();
        //this.createFourthLevel();
        //this.createFifthLevel();
        this.createSixthLevel();

        this.jumpKing = new jumpKingPrefab(this, config.width / 2 + 100, config.height / 2 + 120,);
        this.jumpKing.setFrame(0);

        this.cameras.main.scrollX = config.width / 2 - this.cameras.main.width / 2;
        this.cameras.main.scrollY = config.height / 1.435 - this.cameras.main.height / 2;

        this.counterUI = new counterPrefab(this, gamePrefs.gameWidth / 2 + 70, 30, 12, 'CounterFont');
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
    loadAssetsThirdLevel()
    {
        this.load.setPath('assets/sprites/map3');
        this.load.image('lvl3A','A 8x360.png');
        this.load.image('lvl3B','B 8x360.png');
        this.load.image('lvl3C','C 56x16.png');
        this.load.image('lvl3D','D 48x16.png');
        this.load.image('lvl3E','E 48x16.png');
        this.load.image('lvl3F','F 57x16.png');
        this.load.image('lvl3G','G 144x32.png');
        this.load.image('lvl3H','H 48x16.png');
        this.load.image('lvl3I','I 58x46.png');
        this.load.image('lvl3J','J 72x16.png');
        this.load.image('lvl3Background','Mapa 3.png');
    }
    createThirdLevel()
    {
        this.background = this.createMapLayer('lvl3Background', config.width / 2, config.height / 1.43);
        this.lvl3A = this.createMapLayer('lvl3A', 
            (config.width / 2) - 236, 
            (config.height / 1.435), 
            true, true, false
        );
        this.lvl3B = this.createMapLayer('lvl3B', 
            (config.width / 2) + 236, 
            (config.height / 1.435), 
            true, true, false
        );
        this.lvl3C = this.createMapLayer('lvl3C', 
            (config.width / 2) - 204, 
            (config.height - 240), 
            true, true, false
        );
        this.lvl3D = this.createMapLayer('lvl3D', 
            (config.width / 2) + 208, 
            (config.height - 80), 
            true, true, false
        );
        this.lvl3E = this.createMapLayer('lvl3E', 
            (config.width / 2) - 8, 
            (config.height) - 32, 
            true, true, false
        );
        this.lvl3F = this.createMapLayer('lvl3F', 
            (config.width / 2) + 108, 
            (config.height) - 32, 
            true, true, false
        );
        this.lvl3G = this.createMapLayer('lvl3G', 
            (config.width / 2) + 24, 
            (config.height) - 104, 
            true, true, false
        );
        this.lvl3H = this.createMapLayer('lvl3H', 
            (config.width / 2) + 72, 
            (config.height) - 128, 
            true, true, false
        );
        this.lvl3I = this.createMapLayer('lvl3I', 
            (config.width / 2) - 51, 
            (config.height) - 201, 
            true, true, false
        );
        this.lvl3J = this.createMapLayer('lvl3J', 
            (config.width / 2) - 67, 
            (config.height) - 335, 
            true, true, false
        );
    }
    loadAssetsFourthLevel()
    {
        this.load.setPath('assets/sprites/map4');
        this.load.image('lvl4A','A 8x360.png');
        this.load.image('lvl4B','B 8x360.png');
        this.load.image('lvl4C','C 56x16.png');
        this.load.image('lvl4D','D 40x16.png');
        this.load.image('lvl4E','E 72x40.png');
        this.load.image('lvl4F','F 72x16.png');
        this.load.image('lvl4G','G 40x80.png');
        this.load.image('lvl4H','H 88x16.png');
        this.load.image('lvl4I','I 48x72.png');
        this.load.image('lvl4J','J 16x88.png');
        this.load.image('lvl4K','K 56x16.png');
        this.load.image('lvl4L','L 18x16.png');
        this.load.image('lvl4Background','Mapa 4.png');
    }
    createFourthLevel()
    {
        this.background = this.createMapLayer('lvl4Background', config.width / 2, config.height / 1.43);
        this.lvl4A = this.createMapLayer('lvl4A', 
            (config.width / 2) - 236, 
            (config.height / 1.435), 
            true, true, false
        );
        this.lvl4B = this.createMapLayer('lvl4B', 
            (config.width / 2) + 236, 
            (config.height / 1.435), 
            true, true, false
        );
        this.lvl4C = this.createMapLayer('lvl4C', 
            (config.width / 2) - 204, 
            (config.height - 120), 
            true, true, false
        );
        this.lvl4D = this.createMapLayer('lvl4D', 
            (config.width / 2) + 212, 
            (config.height - 207), 
            true, true, false
        );
        this.lvl4E = this.createMapLayer('lvl4E', 
            (config.width / 2) - 68, 
            (config.height) - 3, 
            true, true, false
        );
        this.lvl4F = this.createMapLayer('lvl4F', 
            (config.width / 2) - 68, 
            (config.height) - 120, 
            true, true, false
        );
        this.lvl4G = this.createMapLayer('lvl4G', 
            (config.width / 2) - 85, 
            (config.height) - 214, 
            true, true, false
        );
        this.lvl4H = this.createMapLayer('lvl4H', 
            (config.width / 2) - 97, 
            (config.height) - 298, 
            true, true, false
        );
        this.lvl4I = this.createMapLayer('lvl4I', 
            (config.width / 2) + 80, 
            (config.height) - 147, 
            true, true, false
        );
        this.lvl4J = this.createMapLayer('lvl4J', 
            (config.width / 2) + 97, 
            (config.height) - 227, 
            true, true, false
        );
        this.lvl4K = this.createMapLayer('lvl4K', 
            (config.width / 2) + 133, 
            (config.height) - 263, 
            true, true, false
        );
        this.lvl4L = this.createMapLayer('lvl4L', 
            (config.width / 2) + 97, 
            (config.height) - 335, 
            true, true, false
        );
    }
    loadAssetsFifthLevel()
    {
        this.load.setPath('assets/sprites/map5');
        this.load.image('lvl5A','A 8x360.png');
        this.load.image('lvl5B','B 8x360.png');
        this.load.image('lvl5C','C 32x16.png');
        this.load.image('lvl5D','D 32x16.png');
        this.load.image('lvl5E','E 40x16.png');
        this.load.image('lvl5F','F 16x32.png');
        this.load.image('lvl5G','G 40x16.png');
        this.load.image('lvl5H','H 16x32.png');
        this.load.image('lvl5I','I 40x16.png');
        this.load.image('lvl5J','J 32x16.png');
        this.load.image('lvl5K','K 32x16.png');
        this.load.image('lvl5L','L 32x16.png');
        this.load.image('lvl5M','M 32x16.png');
        this.load.image('lvl5N','N 176x16.png');
        this.load.image('lvl5Background','Mapa 5.png');
    }
    createFifthLevel()
    {
        this.background = this.createMapLayer('lvl5Background', config.width / 2, config.height / 1.43);
        this.lvl5A = this.createMapLayer('lvl5A', 
            (config.width / 2) - 236, 
            (config.height / 1.435), 
            true, true, false
        );
        this.lvl5B = this.createMapLayer('lvl5B', 
            (config.width / 2) + 236, 
            (config.height / 1.435), 
            true, true, false
        );
        this.lvl5C = this.createMapLayer('lvl5C', 
            (config.width / 2) - 216, 
            (config.height - 95), 
            true, true, false
        );
        this.lvl5D = this.createMapLayer('lvl5D', 
            (config.width / 2) + 216, 
            (config.height - 175), 
            true, true, false
        );
        this.lvl5E = this.createMapLayer('lvl5E', 
            (config.width / 2) - 108, 
            (config.height) - 23, 
            true, true, false
        );
        this.lvl5F = this.createMapLayer('lvl5F', 
            (config.width / 2) - 96, 
            (config.height) + 1, 
            true, true, false
        );
        this.lvl5G = this.createMapLayer('lvl5G', 
            (config.width / 2) + 109, 
            (config.height) - 23, 
            true, true, false
        );
        this.lvl5H = this.createMapLayer('lvl5H', 
            (config.width / 2) + 97, 
            (config.height) + 1, 
            true, true, false
        );
        this.lvl5I = this.createMapLayer('lvl5I', 
            (config.width / 2) + 108, 
            (config.height) - 95, 
            true, true, false
        );
        this.lvl5J = this.createMapLayer('lvl5J', 
            (config.width / 2) + 65, 
            (config.height) - 248, 
            true, true, false
        );
        this.lvl5K = this.createMapLayer('lvl5K', 
            (config.width / 2), 
            (config.height) - 263, 
            true, true, false
        );
        this.lvl5L = this.createMapLayer('lvl5L', 
            (config.width / 2) - 63, 
            (config.height) - 280, 
            true, true, false
        );
        this.lvl5M = this.createMapLayer('lvl5M', 
            (config.width / 2) - 184, 
            (config.height) - 247, 
            true, true, false
        );
        this.lvl5N = this.createMapLayer('lvl5N', 
            (config.width / 2), 
            (config.height) - 335, 
            true, true, false
        );
    }
    loadAssetsSixthLevel()
    {
        this.load.setPath('assets/sprites/map6');
        this.load.image('lvl6A','A 176x32.png');
        this.load.image('lvl6B','B 8x104.png');
        this.load.image('lvl6C','C 8x104.png');

        this.load.image('lvl6Background','Mapa 6.png');
    }
    createSixthLevel()
    {
        this.background = this.createMapLayer('lvl6Background', config.width / 2, config.height / 1.43);
        this.lvl6A = this.createMapLayer('lvl6A', 
            (config.width / 2), 
            (config.height), 
            true, true, false
        );
        this.lvl6B = this.createMapLayer('lvl6B', 
            (config.width / 2) + 236, 
            (config.height - 35), 
            true, true, false
        );
        this.lvl6C = this.createMapLayer('lvl6C', 
            (config.width / 2) - 236, 
            (config.height - 35), 
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