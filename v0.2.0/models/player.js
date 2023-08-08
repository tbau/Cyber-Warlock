class Player {
    constructor(config, gameManager) {
        this.scene = config;
        this.gameManager = gameManager;
        this.x = 2300;
        this.y = 2600;
        this.alternate = false;
        this.color = 0;
        this.health =  this.gameManager.health;
        this.money =  this.gameManager.money;
        this.spellNum = 0;
    }
    render(){
        var shapes = {
            "rect": [
                [{ "x": 10, "y": 0 }, { "x": 40, "y": 0 }, { "x": 40, "y": 50 }, { "x": 10, "y": 50 }]
            ]
        };

        this.sprite = this.scene.matter.add.sprite(this.x, this.y, 'wizard', null, {
            shape: { type: 'fromVerts', verts: shapes.rect },
            render: { sprite: { xOffset: 0, yOffset: 0 } }
        });
        this.sprite.body.collisionFilter.group = -1;

        var shapes = {
            "rect": [
                [{ "x": 10, "y": 0 }, { "x": 40, "y": 0 }, { "x": 40, "y": 20 }, { "x": 10, "y": 20 }]
            ]
        };
        this.spell = this.scene.matter.add.sprite(2300, 2600, 'fire', null, {
            shape: { type: 'fromVerts', verts: shapes.rect }
        });
        this.spell.body.collisionFilter.group = -1;

        this.spell.setIgnoreGravity(true)
        this.spell.visible = false;

        this.spell.x = this.sprite.x - 8;
        this.spell.y = this.sprite.y - 20;
        /*var r = this.scene.matter.bodies.rectangle(this.sprite.x, this.sprite.y, 40, 100)
        console.log(r.displayOriginY)
        this.sprite.setExistingBody(r)
        */
        this.sprite.setBounce(0.1)
        this.sprite.worldBounds = true;

        this.sprite.setInteractive()

        this.sprite.setIgnoreGravity(true)
        this.sprite.scaleY = .9


        this.summonTween = this.scene.tweens.add({
            targets: this.spell,
            rotation: Math.PI,
            loop: -1,
            ease: 'Linear',
            duration: 500,
            paused: true
        });

        //= this.scene.tweens.createTimeline();
        /*this.timeline.add({
            targets: this.spell,
            rotation: Math.PI,
            loop:-1,
            ease:  'Linear',
            duration: 1000
        });*/

        /*
         var g = this.scene.add.graphics();
         g.fillStyle(config.color, 1);
         g.fillRect(10, 0, 30, 10);
         g.fillRect(5, 10, 40, 10);
         
         g.beginPath()
         g.lineStyle(2, 0x000000, 1.0);
         g.moveTo(5, 20);
         g.lineTo(45, 20);
         g.closePath();
         g.strokePath();
         
         g.beginPath()
         g.moveTo(5, 30);
         g.lineTo(45, 30);
         g.closePath();
         g.strokePath();
         
         g.beginPath()
         g.arc(7, 25, 5, Math.PI * .5, Math.PI * 1.5);
         g.strokePath();
         
         g.beginPath()
         g.arc(43, 25, 5, Math.PI * 1.5, Math.PI * .5);
         g.strokePath();
         
         g.fillStyle(0x000000, 1);
         g.fillCircle(10, 25, 4)
         g.fillCircle(20, 25, 4)
         g.fillCircle(30, 25, 4)
         g.fillCircle(40, 25, 4)
 
         g.generateTexture(config.key, 100, 100);
 
         g.destroy();
 
         this.tank = this.scene.add.container(config.x,config.y);
        
         this.tankBody =  this.scene.add.sprite(0, 0, config.key).setOrigin(0.25,0.15)//.setSize(50, 33).setRectangle(50, 33);
         this.tank.add(this.tankBody);
 
         g = this.scene.add.graphics();
         g.fillStyle(0x000000, 1);
         g.fillRect(0, 2, 30, 4);        
         g.fillRect(22, 1, 8, 6);
         g.generateTexture(config.key+"cannon", 100, 100);
         
         //this.tankCannon.displayOriginY=4;
         //var cat1 = this.scene.matter.world.nextCategory();
         // this.tankBody.setOrigin(0,0);
         // this.tankCannon.setOrigin(0,0)
         
         this.scene.matter.add.gameObject(this.tank).setSize(50, 33).setTrapezoid(50,33,.5)//.setRectangle(50, 33)
         this.tankCannon =  this.scene.add.sprite(0, 0, config.key+"cannon").setOrigin(0,0)//.body.collisionFilter.group = -1
         this.tank.add(this.tankCannon);
 
         this.tankCannon.y=-8;
         this.tankCannon.displayOriginY=4;
         
         //this.tankCannon.setCollisionCategory(cat1);
         //this.tankCannon.setIgnoreGravity(true)
         //this.tankCannon.setCollidesWith([cat1]);
 
         g.destroy();
     */

    }
    move(x, y) {
        if (Math.abs(x) > Math.abs(y)) {
            if (x < 0) {
                if (this.alternate)
                    this.sprite.anims.play('runningLeftAlt', true);
                else
                    this.sprite.anims.play('runningLeft', true);
                this.sprite.flipX = false;
            }
            else if (x > 0) {
                if (this.alternate)
                    this.sprite.anims.play('runningLeftAlt', true);
                else
                    this.sprite.anims.play('runningLeft', true);
                this.sprite.flipX = true;
            }
        }
        else {
            if (y < 0) {
                this.sprite.play('runningUp', true)
            }
            else if (y > 0) {

                this.sprite.play('runningDown', true)
            }
        }
        this.sprite.x += x * 5;
        this.sprite.y += y * 5
    }
    moveLeft() {
        this.sprite.x -= 5        
        this.spell.x=this.sprite.x-10
        if (this.alternate)
            this.sprite.anims.play('runningLeftAlt', true);
        else
            this.sprite.anims.play('runningLeft', true);

        this.sprite.flipX=false;
    }
    moveRight() {
        this.sprite.x += 5;
        this.spell.x=this.sprite.x+10
        if (this.alternate)
            this.sprite.anims.play('runningLeftAlt', true);
        else
            this.sprite.anims.play('runningLeft', true);

        this.sprite.flipX = true;
    }
    moveUp() {
        this.sprite.y -= 5;
        this.spell.y = this.sprite.y - 20;
        this.sprite.play('runningUp', true)
    }
    moveDown() {
        this.sprite.y += 5;
        this.spell.y = this.sprite.y - 20;
        this.sprite.play('runningDown', true)
    }
    flipAlternate() {
        this.alternate = !this.alternate;
    }
    changeColor(i) {
        this.color = i == null ? (this.color + 1) : this.color + i;
        if (this.color < 0)
            this.color = 3;
        else if (this.color > 3)
            this.color = 0;
    }
    light() {
        //this.sprite.originY = .53
        if (this.alternate)
            this.sprite.anims.play("lightAlt", true);
        else
            this.sprite.anims.play("light", true);
    }
    damage() {
        if (this.alternate)
            this.sprite.anims.play("damageAlt", true);
        else
            this.sprite.anims.play("damage", true);
    }
    jump() {
        if (this.alternate)
            this.sprite.anims.play('jumpAlt', true);
        else
            this.sprite.anims.play('jump', true);
    }
    charge() {
        if (this.alternate)
            this.sprite.anims.play('chargeAlt', true);
        else
            this.sprite.anims.play('charge', true);
    }
    summon() {
        if (this.alternate)
            this.sprite.anims.play("summonAlt");
        else
            this.sprite.anims.play("summon");

        switch (this.spellNum) {
            case 0:
                this.spell.play('fire', true);
                break;
            case 1:
                this.spell.play('water', true);
                break;
            case 2:
                this.spell.play('heal', true);
                break;
            case 3:
                this.spell.play('lightning', true);
                break;
        }

        this.spell.visible = true;
        this.summonTween.play()
    }
    changeSpell() {
        this.spellNum = (this.spellNum + 1) % 4
    }
    defend() {        
        //gameManager.setStamina(gameManager.stamina-1);
        if (this.alternate) {
            switch (this.color) {
                case 0:
                    this.sprite.anims.play('defendGreenAlt', true);
                    break;
                case 1:
                    this.sprite.anims.play('defendPinkAlt', true);
                    break;
                case 2:
                    this.sprite.anims.play('defendBlueAlt', true);
                    break;
                case 3:
                    this.sprite.anims.play('defendRedAlt', true);
                    break
            }
        }
        else {
            switch (this.color) {
                case 0:
                    this.sprite.anims.play('defendGreen', true);
                    break;
                case 1:
                    this.sprite.anims.play('defendPink', true);
                    break;
                case 2:
                    this.sprite.anims.play('defendBlue', true);
                    break;
                case 3:
                    this.sprite.anims.play('defendRed', true);
                    break
            }
        }
    }
    die() {
        this.sprite.anims.play('die', true);
    }
    strike() {
        if (this.alternate) {
            this.sprite.play('strikeAlt', true)
            /*this.sprite.setFrame(100); 
            this.sprite.setFrame(101); 
            this.sprite.setFrame(102); 
            this.sprite.setFrame(103); 
            */
        }
        else
            this.sprite.anims.play('strike', true);
    }
}

export default Player;
