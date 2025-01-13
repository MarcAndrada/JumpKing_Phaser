import {gamePrefs} from '../globals.js';

export default class jumpKingPrefab extends Phaser.GameObjects.Sprite
{
    constructor(_scene,_posX,_posY,_spriteTag='jumpKing')    
    {//instanciar el objeto
        super(_scene,_posX,_posY,_spriteTag);
        
        _scene.add.existing(this);
        _scene.physics.world.enable(this);

        this.setColliders();
        this.scene = _scene;
        this.cursors = this.scene.input.keyboard.createCursorKeys();
        this.movementDirection = 0;
        this.jumpProcess = 0;
        this.currentJumpXSpeed = 0;
    }

    setColliders()
    {
        // Level 1
        this.scene.physics.add.collider( this, this.scene.lvl1floor);
        this.scene.physics.add.collider( this, this.scene.lvl1boxRight);
        this.scene.physics.add.collider( this, this.scene.lvl1boxLeft);
        this.scene.physics.add.collider( this, this.scene.lvl1sideRight);
        this.scene.physics.add.collider( this, this.scene.lvl1sideLeft);
        this.scene.physics.add.collider( this, this.scene.lvl1platform);

        // Level 2
        this.scene.physics.add.collider( this, this.scene.lvl2BotPltf);
        this.scene.physics.add.collider( this, this.scene.lvl2MidPltf1);
        this.scene.physics.add.collider( this, this.scene.lvl2MidPltf2);
        this.scene.physics.add.collider( this, this.scene.lvl2TopPltf1);
        this.scene.physics.add.collider( this, this.scene.lvl2TopPltf2);
        this.scene.physics.add.collider( this, this.scene.lvl2RightWall);
        this.scene.physics.add.collider( this, this.scene.lvl2LeftWall2);
        this.scene.physics.add.collider( this, this.scene.lvl2LeftWall2);
        // Level 3
        this.scene.physics.add.collider( this, this.scene.lvl3A);
        this.scene.physics.add.collider( this, this.scene.lvl3B);
        this.scene.physics.add.collider( this, this.scene.lvl3C);
        this.scene.physics.add.collider( this, this.scene.lvl3D);
        this.scene.physics.add.collider( this, this.scene.lvl3E);
        this.scene.physics.add.collider( this, this.scene.lvl3F);
        this.scene.physics.add.collider( this, this.scene.lvl3G);
        this.scene.physics.add.collider( this, this.scene.lvl3H);
        this.scene.physics.add.collider( this, this.scene.lvl3I);
        this.scene.physics.add.collider( this, this.scene.lvl3J);
        // Level 4
        this.scene.physics.add.collider( this, this.scene.lvl4A);
        this.scene.physics.add.collider( this, this.scene.lvl4B);
        this.scene.physics.add.collider( this, this.scene.lvl4C);
        this.scene.physics.add.collider( this, this.scene.lvl4D);
        this.scene.physics.add.collider( this, this.scene.lvl4E);
        this.scene.physics.add.collider( this, this.scene.lvl4F);
        this.scene.physics.add.collider( this, this.scene.lvl4G);
        this.scene.physics.add.collider( this, this.scene.lvl4H);
        this.scene.physics.add.collider( this, this.scene.lvl4I);
        this.scene.physics.add.collider( this, this.scene.lvl4J);
        this.scene.physics.add.collider( this, this.scene.lvl4K);
        this.scene.physics.add.collider( this, this.scene.lvl4L);
        // Level 5
        this.scene.physics.add.collider( this, this.scene.lvl5A);
        this.scene.physics.add.collider( this, this.scene.lvl5B);
        this.scene.physics.add.collider( this, this.scene.lvl5C);
        this.scene.physics.add.collider( this, this.scene.lvl5D);
        this.scene.physics.add.collider( this, this.scene.lvl5E);
        this.scene.physics.add.collider( this, this.scene.lvl5F);
        this.scene.physics.add.collider( this, this.scene.lvl5G);
        this.scene.physics.add.collider( this, this.scene.lvl5H);
        this.scene.physics.add.collider( this, this.scene.lvl5I);
        this.scene.physics.add.collider( this, this.scene.lvl5J);
        this.scene.physics.add.collider( this, this.scene.lvl5K);
        this.scene.physics.add.collider( this, this.scene.lvl5L);
        this.scene.physics.add.collider( this, this.scene.lvl5N);
        this.scene.physics.add.collider( this, this.scene.lvl5M);

        // Level 6
        this.scene.physics.add.collider( this, this.scene.lvl6A);
        this.scene.physics.add.collider( this, this.scene.lvl6B);
        this.scene.physics.add.collider( this, this.scene.lvl6C);
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
    }

    preUpdate(time,delta)
    {
        this.movementDirection = this.cursors.left.isDown? -1 : 0;
        this.movementDirection += this.cursors.right.isDown? 1 : 0;

        if(this.body.onFloor() && 
        (!this.cursors.up.isDown && !this.cursors.space.isDown) && 
        this.jumpProcess != 0)
            this.jump();
        else if(this.body.onFloor() && !this.cursors.up.isDown)
            this.movementBehaviour();
        else if (this.body.onFloor() && (this.cursors.up.isDown || this.cursors.space.isDown))
            this.jumpBehaviour(delta);
        else if (!this.body.onFloor() && this.currentJumpXSpeed != 0 &&
        (this.body.touching.right || this.body.touching.left))
            this.collisionOnWall();

        if(this.body.velocity.x != 0)
            this.currentJumpXSpeed = this.body.velocity.x;

        super.preUpdate(time,delta);
    }
}
