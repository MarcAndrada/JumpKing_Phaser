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
    { //Pinta assets en pantalla

        //Pinto las CAPAS/LAYERS
        this.background = this.add.image((config.width / 2), config.height / 1.4, 'lvl1Background');
        this.floor = this.physics.add.image(config.width / 2, config.height, 'lvl1Floor');
        this.boxRight = this.physics.add.image((config.width / 2) + (224 / 2) + (128 / 2), config.height - (176 / 2) + (32 / 2), 'lvl1BottomRightBox');
        this.boxLeft = this.physics.add.image((config.width / 2) - (224 / 2) - (128 / 2), config.height - (176 / 2) + (32 / 2), 'lvl1BottomLeftBox');
        this.sideRight = this.physics.add.image((config.width / 2) - (224 / 2) - 128 + (8 / 2), config.height -  176 - (184 / 2) + (32 / 2), 'lvl1TopRightSide');
        this.sideLeft = this.physics.add.image((config.width / 2) + (224 / 2) + 128 - (8 / 2), config.height - 176 - (184 / 2) + (32 / 2), 'lvl1TopLeftSide');
        this.platform = this.physics.add.image((config.width / 2), (config.height / 2), 'lvl1CentralPlatformBox');

        this.floor.body.immovable = true;
        this.floor.body.allowGravity = false;

        this.boxRight.body.immovable = true;
        this.boxRight.body.allowGravity = false;

        this.boxLeft.body.immovable = true;
        this.boxLeft.body.allowGravity = false;

        this.sideRight.body.immovable = true;
        this.sideRight.body.allowGravity = false;

        this.sideLeft.body.immovable = true;
        this.sideLeft.body.allowGravity = false;

        this.platform.body.immovable = true;
        this.platform.body.allowGravity = false;

        this.jumpKing = new jumpKingPrefab(this, config.width / 2, config.height / 2,);
        this.jumpKing.setFrame(0);
        
        this.cameras.main.scrollX = config.width / 2 - this.cameras.main.width / 2;
        this.cameras.main.scrollY = config.height / 1.435 - this.cameras.main.height / 2;

    }

    
    update()
    {        
        
    }
}

    