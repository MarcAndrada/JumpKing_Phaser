class level1 extends Phaser.Scene
{
    constructor()
    {
        super({key:'level1'});
    }

    preload()
    { //Carga assets en memoria
        this.cameras.main.setBackgroundColor("666");

        this.load.setPath('assets/sprites');
        this.load.image('testFloor','spr_green_floor_1.png');

        this.load.spritesheet('jumpKing','hero.png',
        {frameWidth:32,frameHeight:32});
    }

    create()
    { //Pinta assets en pantalla

        //Pinto las CAPAS/LAYERS
        this.floorTest = this.physics.add.image(config.width/2,config.height/2,'testFloor')
        .setScale(30, 1);
        this.floorTest.body.immovable = true;
        this.floorTest.body.allowGravity = false;

        this.hero = new jumpKingPrefab(this, 65,100);
        this.hero.setFrame(0);
        
    }

    
    update()
    {        
        
    }
}

    