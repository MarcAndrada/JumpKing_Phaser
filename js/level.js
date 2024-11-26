class level1 extends Phaser.Scene
{
    constructor()
    {
        super({key:'level1'});
    }

    preload()
    { //Carga assets en memoria
        this.cameras.main.setBackgroundColor("000");

        this.load.setPath('assets/sprites/map1');
        this.load.image('lvl1BottomLeftBox','BottomLeftBox.png');
        this.load.image('lvl1BottomRightBox','BottomRightBox.png');
        this.load.image('lvl1CentralPlatformBox','CentralPlatform.png');
        this.load.image('lvl1Floor','Floor.png');
        this.load.image('lvl1TopLeftSide','TopLeftSide.png');
        this.load.image('lvl1TopRightSide','TopRightSide.png');
        this.load.image('lvl1Background','level1Background.png');

        this.load.setPath('assets/sprites');
        this.load.spritesheet('jumpKing','hero.png',
        {
            frameWidth:32,frameHeight:32
        });
    }

    create()
    { 
        //Pinta assets en pantalla
        //Pinto las CAPAS/LAYERS
        this.background = this.createMapLayer('lvl1Background', config.width / 2, config.height / 1.4);
        this.floor = this.createMapLayer('lvl1Floor', config.width / 2, config.height, true, true, false);
        this.boxRight = this.createMapLayer('lvl1BottomRightBox', 
            (config.width / 2) + (224 / 2) + (128 / 2), 
            config.height - (176 / 2) + (32 / 2), 
            true, true, false
        );
        this.boxLeft = this.createMapLayer('lvl1BottomLeftBox', 
            (config.width / 2) - (224 / 2) - (128 / 2), 
            config.height - (176 / 2) + (32 / 2), 
            true, true, false
        );
        this.sideRight = this.createMapLayer('lvl1TopRightSide', 
            (config.width / 2) - (224 / 2) - 128 + (8 / 2), 
            config.height - 176 - (184 / 2) + (32 / 2), 
            true, true, false
        );
        this.sideLeft = this.createMapLayer('lvl1TopLeftSide', 
            (config.width / 2) + (224 / 2) + 128 - (8 / 2), 
            config.height - 176 - (184 / 2) + (32 / 2), 
            true, true, false
        );
        this.platform = this.createMapLayer('lvl1CentralPlatformBox', 
            config.width / 2, 
            (config.height / 2), 
            true, true, false
        );

        this.jumpKing = new jumpKingPrefab(this, config.width / 2, config.height / 2 - 20,);
        this.jumpKing.setFrame(0);

        this.cameras.main.scrollX = config.width / 2 - this.cameras.main.width / 2;
        this.cameras.main.scrollY = config.height / 1.435 - this.cameras.main.height / 2;
    }

    update()
    {        
        
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