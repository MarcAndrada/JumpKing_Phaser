class jumpKingPrefab extends Phaser.GameObjects.Sprite
{
    constructor(_scene,_posX,_posY,_spriteTag='jumpKing')    
    {//instanciar el objeto
        super(_scene,_posX,_posY,_spriteTag);
        
        _scene.add.existing(this);
        _scene.physics.world.enable(this);

        this.setColliders();
        this.health = gamePrefs.HERO_MAX_LIVES
        this.scene = _scene;
        this.cursors = this.scene.input.keyboard.createCursorKeys();
        this.movementDirection = 0;
    }

    setColliders()
    {
        this.scene.physics.add.collider( this, this.scene.floorTest);
    }

    movementBehaviour()
    {
        this.body.setVelocityX(gamePrefs.MOVEMENT_SPEED * this.movementDirection);
    }

    preUpdate(time,delta)
    {
        this.movementDirection = this.cursors.left.isDown? -1 : 0;
        this.movementDirection += this.cursors.right.isDown? 1 : 0;

        
        
        if(this.body.onFloor())
        {
            this.movementBehaviour();
        }
    
        if(!this.body.onFloor())
        {
            //Salta
            //this.anims.setFrame(6);
        }

        super.preUpdate(time,delta);
    }
}
