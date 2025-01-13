export default class counterPrefab extends Phaser.GameObjects.BitmapText
{
    constructor(_scene, _x, _y, _size, _font = 'gameFont')    
    {//instanciar el objeto
        super(_scene, _x, _y, _font, "00:00:00", _size);
        
        _scene.add.existing(this);

        this.setOrigin(1,0)
        .setScrollFactor(0);
        this.scene = _scene;
    }


    preUpdate(time,delta)
    {

        //time esta en ms, primero hay que pasarlo a segundos
        var timeSeconds = Math.floor(time / 1000);
        var timeMinutes = Math.floor(time / 60000) ;
        var timeHours = Math.floor(time / 3.6e+6);

        var timeSecondsToDisplay = timeSeconds - timeMinutes * 60;
        var timeMinutesToDisplay = timeMinutes - timeHours * 60;
        
        this.text = `${String(timeHours).padStart(2, '0')}:${String(timeMinutesToDisplay).padStart(2, '0')}:${String(timeSecondsToDisplay).padStart(2, '0')}`;
    }
    
}