import {gamePrefs} from '../globals.js';

export default class menu extends Phaser.Scene
{
    constructor()
    {
        super({key:'menu'});
    }

    
    init()
    {
        this.bar = this.add.rectangle(gamePrefs.levelWidth/3,60,200,20).setOrigin(.5,.5);
        this.bar.setStrokeStyle(2,0xFFFFFF);

        this.fill = this.add.rectangle(gamePrefs.levelWidth/3,60,0,12,0xFFFFFF).setOrigin(.5,.5);

        this.add.image(650, 360, 'title_bg').setOrigin(1).setScale(1.1).setDepth(-1)
        
        this.cursores = this.input.keyboard.createCursorKeys();
        
        this.perText = this.add.bitmapText(
            gamePrefs.levelWidth/3,
            40,
            'gameFont',
            "Loading... 0%",
            12)
            .setCenterAlign()
            .setOrigin(.5,.5);

        this.perText.valor = 0;
    }
    
    endLoad()
    {

        //this.titleText = this.add.bitmapText(
        //gamePrefs.levelWidth/4,
        //40,
        //'gameFont',
        //"JUMP KING\n\nThere Is \nA Smoking Hot Babe At The Top!",
        //18)
        //.setCenterAlign()
        //.setOrigin(.5);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.buttonText = this.add.bitmapText(
            gamePrefs.levelWidth/3,
            100,
            'gameFont',
            "Press SPACE\nto start!",
            12)
            .setCenterAlign()
            .setOrigin(.5);

        this.add.tween
        ({
            targets:this.buttonText,
            ease:'Power2',
            duration:1000,
            alpha:0,
            //x:this.buttonText.x+5,
            yoyo:true,
            repeat:-1
        });

    }

    startGame()
    {
        this.scene.start('level');    
    }

    update()
    {
        //actualizar assets
        if(this.cursors.space.isDown)
        {
            this.startGame()
        }

        if(this.perText.valor < 192)
        {
            let augment = 2
            this.fill.setSize(this.fill.width+augment,this.fill.height);
            this.perText.valor += augment;
            this.perText.text = "Loading... "+ Math.floor(this.perText.valor / 1.92).toString() +" %";
        }
        else
        {
            this.endLoad();
        }
    }

}