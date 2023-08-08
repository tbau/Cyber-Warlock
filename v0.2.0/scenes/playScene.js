import AnimationManager from '../managers/animationManager';

class playScene extends Phaser.Scene {
    constructor() {
        super('Play');
    }

    init = function (args) {
        this.uiManager = args.uiManager;
        this.gameManager = args.uiManager.gameManager;
        this.game = { config: { width: args.width, height: args.height } };
        this.uiManager.init(this);
    }

    preload = function () {
        this.load.image("map00", "images/Maps/map00.png");

        this.load.image("hudBar", "images/Buch/hudBar.png");
        this.load.image("hudBarHealth", "images/Buch/hudBarHealth.png");
        this.load.image("hudBarStamina", "images/Buch/hudBarStamina.png");
        this.load.image("hudBarMana", "images/Buch/hudBarMana.png");


        this.load.image("hudMap", "images/Buch/hudMap.png");
        this.load.image("hudMenu", "images/Buch/hudMenu.png");

        this.load.spritesheet("dude", "images/dude.png", { frameWidth: 32, frameHeight: 48 });
        this.load.spritesheet("wizard", "images/FiveAsOne/wizard-copy.png", { frameWidth: 100, frameHeight: 100 });
        this.load.spritesheet("spells", "images/FiveAsOne/animations.png", { frameWidth: 100, frameHeight: 100 });

    };

    create = function () {
        new AnimationManager(this);

        //let bounds = this.matter.world.setBounds(0, 0, game.config.width, game.config.height);

        this.cameras.main.setBounds(0, 0, 5000, 5000);
        this.matter.world.setBounds(0, 0, 5000, 5000);
        let background = this.add.sprite(2500, 2500, 'map00');
        this.uiManager.player.render();
        this.uiManager.ui.render();


        //cursors = this.input.keyboard.createCursorKeys();

        this.keys = {};
        this.keyOnce = ['flipAlternate', 'changeColor', 'changeSpell', 'toggleInventory', 'togglePauseMenu', 'moveInventoryLeft', 'moveInventoryRight']

        for (var i = 0; i < this.gameManager.contexts.length; i++) {
            for (var j in this.gameManager.callMap[this.gameManager.contexts[i]]) {
                for (var k in this.gameManager.callMap[this.gameManager.contexts[i]][j]) {
                    this.keys[k] = this.input.keyboard.addKey(k);
                }
            }
        }
        /*keys['space'] = this.input.keyboard.addKey('Space');
        keys['up'] = this.input.keyboard.addKey('Up');
        keys['down'] = this.input.keyboard.addKey("Down");
        keys['left'] = this.input.keyboard.addKey('Left');
        keys['right'] = this.input.keyboard.addKey("Right");
        */

        // document.addEventListener('keydown', (e) => {
        //     //console.log('down: ' + e.key)
        //     if (this.keys.hasOwnProperty(e.key)) {
        //         this.keys[e.key].isDown = true
        //         if(this.keys[e.key].timeout!==undefined){
        //             clearTimeout(this.keys[e.key].timeout)
        //             this.keys[e.key].timeout = setTimeout(()=>{
        //                 this.keys[e.key].isDown = false
        //             },10)
        //         }
        //         else{
        //             this.keys[e.key].timeout = setTimeout(()=>{
        //                 this.keys[e.key].isDown = false
        //             },10)
        //         }
        //     }
        // });

        this.input.on("pointermove", function (e) {

            /*if (this.scene.firePowerDown) {
                if (e.y < 9)
                this.scene.ui.firePowerLine.y = 9
                else if (e.y > 119)
                this.scene.ui.firePowerLine.y = 119
                else
                     this.scene.ui.firePowerLine.y = e.y
     
                 var key = gameManager.turn;
                 this.scene.tanks[key].firepower = Math.floor(100 - (this.scene.ui.firePowerLine.y - 9)*100/110)
                 this.scene.ui.firePowerText.text = this.scene.tanks[key].firepower;
                 this.scene.ui.firePowerText.x = 266 - this.scene.ui.firePowerText.width / 2;
             }
             if (this.scene.angleDown) {
                 if (e.x < 346)
                     this.scene.ui.angleLine.x = 346
                 else if (e.x > 546)
                     this.scene.ui.angleLine.x = 546
                 else
                     this.scene.ui.angleLine.x = e.x
     
                 var key = "P" + gameManager.turn;
                 this.scene.tanks[key].tankCannon.angle = -(546 - this.scene.ui.angleLine.x) * 180 / 200
                 this.scene.ui.angleText.text = -Math.floor(this.scene.tanks[key].tankCannon.angle);
                 this.scene.ui.angleText.x = 448 - this.scene.ui.angleText.width / 2;
             }
     */
        })
        this.input.on("pointerup", function (e) {
            /*      this.scene.firePowerDown = false;
                  this.scene.leftDown = false;
                  this.scene.rightDown = false;
                  this.scene.upDown = false;
                  this.scene.downDown = false;
                  this.scene.fireDown = false;
          
                  this.scene.jumpDown = false;
          
                  this.scene.firePowerUpDown = false;
                  this.firePowerDownDown = false;
          
                  this.scene.firePowerDown = false;
                  this.scene.angleDown = false;
          
                  this.scene.leftWeaponDown = false;
                  this.scene.rightWeaponDown = false;
              */
        });
        /*
            this.attack = [];
        
            this.matter.world.on("collisionstart", (event) => {
        
                for (var i = 0; i < event.pairs.length; i++) {
                    var bodyA = event.pairs[i].bodyA;
                    var bodyB = event.pairs[i].bodyB;
        
                    for (var j = 0; j < this.attack.length; j++) {
                        if (bodyA == this.attack[j].attackBody.body) {
                            for (var k = 0; k < this.tanks.length; k++) {
                                if (this.tanks[k].tank.body == bodyB) {
                                    this.tanks[k].health -= this.attack[j].damage;
                                    if(this.tanks[k].health<=0){
                                        gameManager.players[this.tanks[k].index].money = this.tanks[k].money;
                                        this.tanks[gameManager.turn].money+=5000;
                                        gameManager.players[this.tanks[gameManager.turn].index].money =  this.tanks[gameManager.turn].money;
                                        this.tanks[k].tank.destroy();
                                        this.tanks.splice(k,1);
                                        gameManager.numPlayers--;
                                        if(gameManager.turn>gameManager.numPlayers-1){
                                            gameManager.turn=0;
                                        }                                
                                        if(gameManager.numPlayers==1){
                                            alert("Player "+this.tanks[0].playerName+" wins!!!");
                                            game.scene.start("Play");
                                            return;
                                        }
                                    }
                                }
                            }
                            this.attack[j].attackBody.destroy();
                            this.attack.splice(j, 1)
                            j--;
                        }
                        else if (bodyB == this.attack[j].attackBody.body) {
                            for (var k = 0; k < this.tanks.length; k++) {
                                if (this.tanks[k].tank.body == bodyA) {
                                    this.tanks[k].health -= this.attack[j].damage;
                                    if(this.tanks[k].health<=0){
                                        gameManager.players[this.tanks[k].index].money = this.tanks[k].money;
                                        this.tanks[gameManager.turn].money+=5000;
                                        gameManager.players[this.tanks[gameManager.turn].index].money =  this.tanks[gameManager.turn].money;
                                        this.tanks[k].tank.destroy();
                                        this.tanks.splice(k,1);
                                        gameManager.numPlayers--;
                                        if(gameManager.turn>gameManager.numPlayers-1){
                                            gameManager.turn=0;
                                        }
                                        if(gameManager.numPlayers==1){
                                            alert("Player "+this.tanks[0].playerName+" wins!!!");
                                            game.scene.start("Play");
                                            return;
                                        }
                                    }
                                }
                            }
                            this.attack[j].attackBody.destroy();
                            this.attack.splice(j, 1)
                            j--;
                        }
                    }
                }
            })*/
        this.cameras.main.startFollow(this.uiManager.player.sprite, false, 0.5, 0.5);
        this.cameras.main.zoom = 1;
        //this.pad = Phaser.Input.Gamepad.Gamepad;
        //var gamepad=null;

        this.start = []
        this.start[0] = Date.now();
    }

    update = function () {
        this.now = Date.now();
        this.uiManager.player.spell.visible = false;
        this.changed = false;
        this.moved = false;

        this.pad = Phaser.Input.Gamepad.Gamepad;

        if (this.input.gamepad.total) {
            this.pad = this.input.gamepad.getPad(0);
            /*
                    if (this.pad.leftStick.y < -0.2) {
                        player.moveUp(this.pad.leftStick.y);
                        changed = true;
                        moved = true;
                    }
                    if (this.pad.leftStick.y > 0.2) {
                        player.moveDown(this.pad.leftStick.y);
                        changed = true;
                        moved = true;
                    }
            
                    if (this.pad.leftStick.x < -0.2) {
                        if (Math.abs(this.pad.leftStick.x) < Math.abs(this.pad.leftStick.y))
                            player.moveLeft(this.pad.leftStick.x, false);
                        else
                            player.moveLeft(this.pad.leftStick.x);
                        changed = true;
                        moved = true;
                    }
                    if (this.pad.leftStick.x > 0.2) {
                        if (Math.abs(this.pad.leftStick.x) < Math.abs(this.pad.leftStick.y))
                            player.moveRight(this.pad.leftStick.x, false);
                        else
                            player.moveRight(this.pad.leftStick.x);
                        changed = true;
                        moved = true;
                    }
                    if (now - start > 200) {
                        if (this.pad.right) {
                            start = Date.now();
                            player.changeColor(1);
                            this.pad.right = false;
                        }
                        else if (this.pad.left) {
                            start = Date.now();
                            player.changeColor(-1);
                            this.pad.left = false;
                        }
                    }
                    if (!changed) {
                        if (this.pad.X) {
                            player.strike();
                            changed = true;
                            moved = true;
                        }
                        else if (this.pad.Y) {
                            player.defend();
                            changed = true;
                            moved = true;
                        }
                        else if (this.pad.B) {
                            ui.toggleInventory();
                            changed = true;
                            moved = true;
                        }
                    }*/

            for (var j in this.gameManager.gamepadCallMap[this.gameManager.context]) {
                for (var k in this.gameManager.gamepadCallMap[this.gameManager.context][j]) {
                    if (k == "leftStick") {
                        if (this.pad.leftStick.x != 0 || this.pad.leftStick.y != 0) {
                            player['move'](this.pad.leftStick.x, this.pad.leftStick.y);
                            this.changed = true;
                            this.moved = true;
                        }
                    }
                    else if (this.pad[k]) {
                        var f = this.gameManager.gamepadCallMap[this.gameManager.context]['player'][k]
                        if (typeof player[f] === "function") {
                            player[f]();
                            this.moved = true
                            this.changed = true;
                        }
                        var f = this.gameManager.gamepadCallMap[this.gameManager.context]['ui'][k]
                        if (typeof ui[f] === "function") {
                            if (keyOnce.indexOf(f) != -1) {
                                if (now - start[0] > 200) {
                                    this.start[0] = Date.now();
                                    ui[f]();
                                }
                            }
                            else {
                                ui[f]();
                            }
                            this.moved = true
                            this.changed = true;
                        }
                    }
                }
            }
        }
        if (this.keys['l'].isDown) {
            this.keys['l'].isDown = false;
            document.getElementById("upload_input").click();
        }
        else if (this.keys['k'].isDown) {
            this.keys['k'].isDown = false;
            let output = {};
            output.x = player.sprite.x;
            output.y = player.sprite.y;

            output.health = this.gameManager.health;
            output.stamina = this.gameManager.stamina;
            output.mana = this.gameManager.mana;

            output.maxHealth = this.gameManager.maxHealth;
            output.maxStamina = this.gameManager.maxStamina;
            output.maxMana = this.gameManager.maxMana;

            var textToSave = JSON.stringify(output, null, 2);
            var textToSaveAsBlob = new Blob([textToSave], { type: "text/json" });
            var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
            var fileNameToSaveAs = "save2.json";

            var downloadLink = document.createElement("a");
            downloadLink.download = fileNameToSaveAs;
            downloadLink.innerHTML = "Download File";
            downloadLink.id = "save1";
            downloadLink.href = textToSaveAsURL;
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);

            downloadLink.click();
            document.body.removeChild(downloadLink)
        }


        for (var k in this.keys) {
            if (this.keys.hasOwnProperty(k)) {
                if (this.keys[k].isDown) {
                    var f = this.gameManager.callMap[this.gameManager.context]['player'][k]
                    if (typeof this.uiManager.player[f] === "function") {
                        this.moved = true
                        if (this.changed == false && this.keyOnce.indexOf(f) == -1) {
                            this.uiManager.player[f]()
                            this.changed = true;
                        }
                        else if (this.keyOnce.indexOf(f) != -1) {
                            this.keys[k].isDown = false;
                            this.uiManager.player[f]();
                        }
                    }
                    var f = this.gameManager.callMap[this.gameManager.context]['ui'][k]
                    if (typeof this.uiManager.ui[f] === "function") {
                        this.moved = true
                        if (this.changed == false && this.keyOnce.indexOf(f) == -1) {
                            this.uiManager.ui[f]()
                            this.changed = true;
                        }
                        else if (this.keyOnce.indexOf(f) != -1) {
                            this.keys[k].isDown = false;
                            this.uiManager.ui[f]();
                        }
                    }
                    var f = this.gameManager.callMap[this.gameManager.context]['uiManager'][k]
                    if (typeof this.uiManager[f] === "function") {
                        this.moved = true
                        if (this.changed == false && this.keyOnce.indexOf(f) == -1) {
                            this.uiManager[f]()
                            this.changed = true;
                        }
                        else if (this.keyOnce.indexOf(f) != -1) {
                            this.keys[k].isDown = false;
                            this.uiManager[f]();
                        }
                    }
                }
            }
        }
        if (!this.moved) {
            if (this.uiManager.player.alternate)
                this.uiManager.player.sprite.anims.play('leftAlt', true);
            else
                this.uiManager.player.sprite.anims.play('left', true);
            this.uiManager.player.summonTween.restart();
            this.uiManager.player.summonTween.pause();
        }
    }
    /*
        if (keyZ.isDown || this.firePowerDownDown) {
            this.tanks[key].firepower--;
            if (this.tanks[key].firepower < 0)
                this.tanks[key].firepower = 0;
            this.ui.firePowerText.text = this.tanks[key].firepower;
            this.ui.firePowerText.x = 266 - this.ui.firePowerText.width / 2;
            this.ui.firePowerLine.y = 129 - (120 / 100 * this.tanks[key].firepower)
        }
    
        if (keyX.isDown || this.firePowerUpDown) {
            this.tanks[key].firepower++;
            if (this.tanks[key].firepower > 100)
                this.tanks[key].firepower = 100;
            this.ui.firePowerText.text = this.tanks[key].firepower;
            this.ui.firePowerText.x = 266 - this.ui.firePowerText.width / 2;
            this.ui.firePowerLine.y = 129 - (120 / 100 * this.tanks[key].firepower)
        }
        if (keyE.isDown || this.leftWeaponDown) {
            this.tanks[key].changeWeaponDown();
            this.ui.weaponText.text = this.tanks[key].weapons[this.tanks[key].equippedWeapon].weapon.name;
            this.ui.weaponText.x = 448 - this.ui.weaponText.width / 2;
            keyE.isDown=false;
            this.leftWeaponDown = false;
            this.ui.weaponCount.text = this.tanks[key].weapons[this.tanks[key].equippedWeapon].count;
            this.ui.weaponCount.x = 539 - this.ui.weaponCount.width/2;
        }
        if (keyR.isDown || this.rightWeaponDown) {
            this.tanks[key].changeWeaponUp()
            this.ui.weaponText.text = this.tanks[key].weapons[this.tanks[key].equippedWeapon].weapon.name;
            this.ui.weaponText.x = 448 - this.ui.weaponText.width / 2;
            keyR.isDown=false;
            this.rightWeaponDown = false;
            this.ui.weaponCount.text = this.tanks[key].weapons[this.tanks[key].equippedWeapon].count;
            this.ui.weaponCount.x = 539 - this.ui.weaponCount.width/2;
        }
        if (keyF.isDown || this.fireDown) {
            // this.matter.add.force(player.body, new Phaser.Math.Vector2(player.x, player.y), new Phaser.Math.Vector2(.01, -.01))
            keyF.isDown = false;
            // p.rotate(p.x, p.y, this.tanks[key].tankCannon.rotation, false, 34);
    
            if (!this.fired) {
                switch (this.tanks[key].weapons[this.tanks[key].equippedWeapon].weapon.name) {
                    case "Torpedo":
                        this.attack.push(new Torpedo(
                            this,
                            "torpedo",
                            this.tanks[key].tank.x + this.tanks[key].tankCannon.x + Math.cos(this.tanks[key].tankCannon.rotation) * 40,
                            this.tanks[key].tank.y + this.tanks[key].tankCannon.y + Math.sin(this.tanks[key].tankCannon.rotation) * 40,
                            this.tanks[key].tankCannon.rotation + this.tanks[key].tank.rotation,
                            this.tanks[key].firepower / 4,
                            0x00FF00,
                            true
                        ))
                        break;
                    case "Bomb":
                        this.attack.push(new Bomb(
                            this,
                            "bomb",
                            this.tanks[key].tank.x + this.tanks[key].tankCannon.x + Math.cos(this.tanks[key].tankCannon.rotation) * 40,
                            this.tanks[key].tank.y + this.tanks[key].tankCannon.y + Math.sin(this.tanks[key].tankCannon.rotation) * 40,
                            this.tanks[key].tankCannon.rotation + this.tanks[key].tank.rotation,
                            this.tanks[key].firepower / 4,
                            0x00FF00,
                            true
                        ))
                        break;
    
                }
                this.fired = true;
                if(this.tanks[key].weapons[this.tanks[key].equippedWeapon].weapon.name!="Torpedo"){
                    this.tanks[key].weapons[this.tanks[key].equippedWeapon].count--;
                    this.ui.weaponCount.text = this.tanks[key].weapons[this.tanks[key].equippedWeapon].count;
                    this.ui.weaponCount.x = 539 - this.ui.weaponCount.width/2;
                }           
                if(this.tanks[key].weapons[this.tanks[key].equippedWeapon].count==0){
                    this.tanks[key].weapons.splice(this.tanks[key].equippedWeapon,1);
                    if(this.tanks[key].equippedWeapon>=this.tanks[key].weapons.length)
                      this.tanks[key].equippedWeapon=this.tanks[key].weapons.length-1;
                }
            }
        }
        if (keySpace.isDown || this.jumpDown) {
            if(!jumping){
              this.tanks[key].tank.setVelocityY(-15);
              this.tanks[key].fuel-=50;
              if(this.tanks[key].fuel<0)
                this.tanks[key].fuel=0;
            this.ui.fuelText.text = Math.floor(this.tanks[key].fuel);
            this.ui.fuelText.x =  100 - this.ui.fuelText.width / 2; 
            jumping=true;
            setTimeout(function(){
                jumping=false;
            },3000);
            }
        }
        if (keyQ.isDown) {
            // this.matter.add.force(player.body, new Phaser.Math.Vector2(player.x, player.y), new Phaser.Math.Vector2(.01, -.01))
            this.scene.start(startScene);
        }
    
        for (var j = 0; j < this.attack.length; j++) {
            if(this.attack[j].rotates){
            var xVel = this.attack[j].attackBody.body.velocity.x
            var yVel = this.attack[j].attackBody.body.velocity.y
    
            var ratio = 0;
            if (xVel < 0) {
                ratio = Math.atan2(yVel, xVel);
            }
            else {
                ratio = Math.atan2(yVel, xVel);
            }
            this.attack[j].attackBody.rotation = ratio
        }
        this.matter.add.force(this.attack[j].attackBody.body, new Phaser.Math.Vector2(this.attack[j].attackBody.x, this.attack[j].attackBody.y), new Phaser.Math.Vector2(gameManager.wind/1000000, 0))
      
    }
        if (this.attack.length == 0) {
            if (this.fired) {
                this.fired = false;
    
                gameManager.nextTurn();
    
                this.ui.turnText.text = "Player: " + this.tanks[gameManager.turn].playerName;
    
                key = gameManager.turn;
                this.ui.angleText.text = -Math.floor(this.tanks[key].tankCannon.angle);
                this.ui.fuelText.text = Math.floor(this.tanks[key].fuel);
                this.ui.fuelText.x = 100 - this.ui.fuelText.width / 2;
                this.ui.angleText.x = 448 - this.ui.angleText.width / 2;
                this.ui.firePowerText.text = this.tanks[key].firepower;
                this.ui.firePowerText.x = 266 - this.ui.firePowerText.width / 2;
                this.ui.firePowerLine.y = 129 - (120 / 100 * this.tanks[key].firepower)
                this.ui.angleLine.x = 546 + this.tanks[key].tankCannon.angle * 200 / 180;
                
                this.ui.weaponText.text = this.tanks[key].weapons[this.tanks[key].equippedWeapon].weapon.name;
                this.ui.weaponText.x = 448 - this.ui.weaponText.width / 2;
                this.ui.weaponCount.text = this.tanks[key].weapons[this.tanks[key].equippedWeapon].count;            
                this.ui.weaponCount.x = 539 - this.ui.weaponCount.width/2;
    
                this.ui.moneyText.text = "$"+this.tanks[key].money;
                this.ui.moneyText.x = 660-this.ui.moneyText.width/2
              
                gameManager.wind = Math.floor(Math.random()*200)-100;
                this.ui.windText.text = gameManager.wind;
                this.ui.windText.x = 665 - this.ui.windText.width/2;
            }
        }
        for (var k in this.tanks) {
            this.tanks[k].tank.rotation = 0;
        }
        this.ui.healthText.text = this.tanks[key].health.toString();
        this.ui.healthText.x = 100-this.ui.healthText.width/2
    */
}

export default playScene;