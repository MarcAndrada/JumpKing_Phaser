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
        this.jumpProcess = 0;
    }

    setColliders()
    {
        this.scene.physics.add.collider( this, this.scene.floorTest);
    }

    movementBehaviour()
    {
        this.body.setVelocityX(gamePrefs.MOVEMENT_SPEED * this.movementDirection);
    }

    jump()
    {
        console.log("SALTA");

        var jumpForce = gamePrefs.MAX_JUMP_FORCE * this.jumpProcess;

        if(jumpForce > gamePrefs.MIN_JUMP_FORCE)
            jumpForce = gamePrefs.MIN_JUMP_FORCE;

        this.body.setVelocityX(-jumpForce * this.movementDirection);
        this.body.setVelocityY(jumpForce);

        this.jumpProcess = 0;

    }

    jumpBehaviour(delta)
    {
        this.jumpProcess += (delta / 1000) * gamePrefs.JUMP_CHARGE_SPEED; //Dividimos por 1000 porque el delta esta en ms

        if(this.jumpProcess >= 1)
            this.jump();
        else
        {
            console.log("CARGA SALTO");
            this.body.setVelocityX(0);
        }

        
    }
    preUpdate(time,delta)
    {
        this.movementDirection = this.cursors.left.isDown? -1 : 0;
        this.movementDirection += this.cursors.right.isDown? 1 : 0;

        
        if(this.body.onFloor() && !this.cursors.up.isDown && this.jumpProcess != 0)
            this.jump();
        else if(this.body.onFloor() && !this.cursors.up.isDown)
            this.movementBehaviour();
        else if (this.body.onFloor() && this.cursors.up.isDown)
            this.jumpBehaviour(delta);


        super.preUpdate(time,delta);
    }
}
