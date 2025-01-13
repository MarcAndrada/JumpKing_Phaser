export default class menu extends Phaser.Scene
{
    constructor()
    {
        super({key:'menu'});
    }

    init()
    {
        this.bar = this.add.rectangle(150,200,200,20).setOrigin(0,.5);
        this.bar.setStrokeStyle(2,0xFFFFFF);

        this.fill = this.add.rectangle(154,200,0,12,0xFFFFFF).setOrigin(0,.5);

        this.cursores = this.input.keyboard.createCursorKeys();
        
        this.perText = this.add.bitmapText(
            164,
            180,
            'gameFont',
            "Loading... 0%",
            12)
            .setCenterAlign()
            .setOrigin(0,.5);

        this.perText.valor = 0;
    }

    finalizaCarga()
    {

        this.titleText = this.add.bitmapText(
        gamePrefs.gameWidth/2/2,
        40,
        'gameFont',
        "ENTI-UB's adventure\nin a far old planet",
        24)
        .setCenterAlign()
        .setOrigin(.5);

        this.cursores = this.input.keyboard.createCursorKeys();

        this.buttonText = this.add.bitmapText(
            gamePrefs.gameWidth/2/2,
            240,
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

    iniciaJuego()
    {
        this.scene.start('level1');    
    }

    update()
    {
        //actualizar assets
        if(this.cursores.space.isDown)
        {
            this.iniciaJuego()
        }

        if (this.cursores.right.isDown)
        {
            this.fill.setSize(this.fill.width+1,this.fill.height);
            this.perText.text = "Loading... "+this.perText.valor++ +" %";
        }
    }

}