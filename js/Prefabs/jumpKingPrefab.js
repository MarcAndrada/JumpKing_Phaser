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
        this.currentJumpXSpeed = 0;
    }

    setColliders()
    {
        this.scene.physics.add.collider( this, this.scene.floor);
        this.scene.physics.add.collider( this, this.scene.boxRight);
        this.scene.physics.add.collider( this, this.scene.boxLeft);
        this.scene.physics.add.collider( this, this.scene.sideRight);
        this.scene.physics.add.collider( this, this.scene.sideLeft);
        this.scene.physics.add.collider( this, this.scene.platform);
    }

    movementBehaviour()
    {
        this.body.setVelocityX(gamePrefs.MOVEMENT_SPEED * this.movementDirection);
    }

    jump()
    {
        var jumpYForce = gamePrefs.MAX_Y_JUMP_FORCE * this.jumpProcess;
        var jumpXForce = gamePrefs.MAX_X_JUMP_FORCE * this.jumpProcess;

        if(jumpYForce > gamePrefs.MIN_Y_JUMP_FORCE)
            jumpYForce = gamePrefs.MIN_Y_JUMP_FORCE;

        if(jumpXForce < gamePrefs.MIN_X_JUMP_FORCE)
            jumpXForce = gamePrefs.MIN_X_JUMP_FORCE;

        this.body.setVelocityX(jumpXForce * this.movementDirection);
        this.body.setVelocityY(jumpYForce);

        this.jumpProcess = 0;
    }

    jumpBehaviour(delta)
    {
        this.jumpProcess += (delta / 1000) * gamePrefs.JUMP_CHARGE_SPEED; //Dividimos por 1000 porque el delta esta en ms

        if(this.jumpProcess >= 1)
            this.jump();
        else
            this.body.setVelocityX(0);
    }

    collisionOnWall()
    {
        //var velocityY = this.body.velocity.y;
        //if(velocityY < gamePrefs.BOUNCE_Y_MAX_SPEED) //Esta yendo para arriba
          //  velocityY = gamePrefs.BOUNCE_Y_MAX_SPEED;

        //this.body.setVelocityY(velocityY);
        this.body.setVelocityX(-this.currentJumpXSpeed / 2);

        console.log("Choca");
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
        else if (!this.body.onFloor() && this.currentJumpXSpeed != 0 &&
        (this.body.touching.right || this.body.touching.left))
            this.collisionOnWall();

        if(this.body.velocity.x != 0)
            this.currentJumpXSpeed = this.body.velocity.x;

        super.preUpdate(time,delta);
    }
}
