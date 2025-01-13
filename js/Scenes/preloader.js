export default class preloader extends Phaser.Scene
{
    constructor()
    {
        super({key:'preloader'});
    }

    preload()
    { //Carga assets en memoria
        this.loadAssetFirstLevel();
        this.loadAssetSecondLevel();
        this.loadAssetsThirdLevel();
        this.loadAssetsFourthLevel();
        this.loadAssetsFifthLevel();
        this.loadAssetsSixthLevel();
        this.loadAssetsJumpKing()
        this.loadAssetsAudio();


        this.load.image('cursor','cursor.png');
        this.input.setDefaultCursor('url(assets/sprites/cursor.png), pointer');
                
        this.load.setPath('/assets/sprites');
        this.load.spritesheet('jumpKing','king.png',
        {
            frameWidth:32,frameHeight:38
        });

        this.load.setPath('/assets/fonts');
        this.load.bitmapFont('gameFont','PixelFont.png','PixelFont.fnt');


        this.load.on('complete',function()
        {
            this.scene.start('menu');
            const opening = this.sound.add('opening_theme'); 
            opening.play();

        },this);
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
    loadAssetsSixthLevel()
    {
        this.load.setPath('assets/sprites/map6');
        this.load.image('lvl6A','A 176x32.png');
        this.load.image('lvl6B','B 8x104.png');
        this.load.image('lvl6C','C 8x104.png');

        this.load.image('lvl6Background','Mapa 6.png');
    }

    loadAssetsJumpKing()
    {
        this.load.setPath('assets/audio/king');
        this.load.audio('bump','king_bump.wav');
        this.load.audio('jump','king_jump.wav');
        this.load.audio('land','king_land.wav');
        this.load.audio('splat','king_splat.wav');

        this.load.setPath('assets/sprites');
        this.load.spritesheet('jumpParticle','jumpParticle.png',
            {
                frameWidth:32,frameHeight:32
            });
    }

    loadAssetsAudio()
    {
        this.load.setPath('assets/audio/background');
        this.load.audio('nature_bg','nature_bg.wav');
        this.load.audio('new_location','new_location.wav');
        this.load.audio('opening_theme','opening_theme.wav');
        this.load.audio('red_tree_bg','red_tree_bg.wav');
    }

}