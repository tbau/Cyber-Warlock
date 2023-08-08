class Ui {
    constructor(scene, uiManager, gameManager) {
        this.scene = scene;
        this.uiManager = uiManager;
        this.gameManager = gameManager;
        this.inventoryHorizonalIndex = 0;
        // this.background = this.scene.add.graphics();
        // this.background.fillStyle(0x33AAEE, 1);
        // this.background.fillRect(0, 0, this.scene.game.config.width, this.scene.game.config.height);
    }
    render() {
        this.inventoryTitleBox1 = this.scene.add.graphics();

        this.inventoryTitleBox1.lineStyle(3, 0xFDCC20, 1);
        this.inventoryTitleBox1.strokeRect(10, 10, 110, 30);
        this.inventoryTitleBox1.generateTexture('inventoryTitleBox');

        this.inventoryTitleBoxes = []

        this.inventoryTitleBoxes.push(this.scene.add.image(825, 201, 'inventoryTitleBox').setOrigin(0, 0))
        this.inventoryTitleBoxes.push(this.scene.add.image(956.5, 201, 'inventoryTitleBox').setOrigin(0, 0));
        this.inventoryTitleBoxes.push(this.scene.add.image(1050, 201, 'inventoryTitleBox').setOrigin(0, 0));
        this.inventoryTitleBoxes.push(this.scene.add.image(828, 230, 'inventoryTitleBox').setOrigin(0, 0));
        this.inventoryTitleBoxes.push(this.scene.add.image(914, 230, 'inventoryTitleBox').setOrigin(0, 0));
        this.inventoryTitleBoxes.push(this.scene.add.image(1050, 230, 'inventoryTitleBox').setOrigin(0, 0));

        this.inventoryTitleBoxes[1].scaleX = 0.7
        this.inventoryTitleBoxes[2].scaleX = 0.6
        this.inventoryTitleBoxes[3].scaleX = 0.69
        this.inventoryTitleBoxes[4].scaleX = 1.05;
        this.inventoryTitleBoxes[5].scaleX = 0.6;

        for (var i = 0; i < this.inventoryTitleBoxes.length; i++) {
            this.inventoryTitleBoxes[i].depth = 1;
            this.inventoryTitleBoxes[i].setScrollFactor(0);
            this.inventoryTitleBoxes[i].visible = false;
        }

        this.inventoryTitleBox1.destroy();

        this.hudBar = this.scene.add.image(10, 10, 'hudBar').setOrigin(0, 0)
        this.hudBar.scaleX = .7
        this.hudBar.scaleY = .6
        this.hudBar.setScrollFactor(0)

        this.hudBarHealth = this.scene.add.image(142, 18, 'hudBarHealth').setOrigin(0, 0);
        this.hudBarHealth.scaleY = 1.4
        this.hudBarHealth.scaleX = 30.8 * this.gameManager.health / this.gameManager.maxHealth;
        this.hudBarHealth.setScrollFactor(0)

        this.hudBarMana = this.scene.add.image(142, 44, 'hudBarMana').setOrigin(0, 0);
        this.hudBarMana.scaleY = 1.4
        this.hudBarMana.scaleX = 30.8 * this.gameManager.mana / this.gameManager.maxMana;
        this.hudBarMana.setScrollFactor(0)

        this.hudBarStamina = this.scene.add.image(142, 72, 'hudBarStamina').setOrigin(0, 0);
        this.hudBarStamina.scaleY = 1.4;
        this.hudBarStamina.scaleX = 30.8 * this.gameManager.stamina / this.gameManager.maxStamina;
        this.hudBarStamina.setScrollFactor(0)

        this.hudMap = this.scene.add.image(1440, 10, 'hudMap').setOrigin(0, 0);
        this.hudMap.scaleX = 1.1
        this.hudMap.setScrollFactor(0);
        this.hudMap.setInteractive();

        this.hudMap.on("pointerdown", function (e) {
            if (this.uiManager.gameManager.context
                == this.uiManager.gameManager.contexts[
                this.uiManager.gameManager.contextMap['PLAYING']
                ]) {
                if (e.x > 1543 && e.x < 1584 && e.y > 140 && e.y < 177) {
                    this.uiManager.toggleInventory();
                }
            }
        }, this);

        this.hudMenu = this.scene.add.image(390, 10, 'hudMenu').setOrigin(0, 0)
        this.hudMenu.scale = 0.6;
        this.hudMenu.scaleX = 0.7
        this.hudMenu.setScrollFactor(0);
        this.hudMenu.visible = false;

        this.hudMenu.setInteractive();

        this.healthText = this.scene.add.text(520, 219, this.gameManager.health + '/' + this.gameManager.maxHealth, { fill: '#FFFFFF', fontFamily: 'Arial', fontSize: 26 });
        this.healthText.visible = false;
        this.healthText.setScrollFactor(0);

        this.staminaText = this.scene.add.text(520, 259, this.gameManager.stamina + '/' + this.gameManager.maxStamina, { fill: '#FFFFFF', fontFamily: 'Arial', fontSize: 26 });
        this.staminaText.visible = false;
        this.staminaText.setScrollFactor(0);

        this.manaText = this.scene.add.text(520, 300.5, this.gameManager.mana + '/' + this.gameManager.maxMana, { fill: '#FFFFFF', fontFamily: 'Arial', fontSize: 26 });
        this.manaText.visible = false;
        this.manaText.setScrollFactor(0);

        this.inventoryTitles = [];
        this.pauseTitles = [];

        this.inventoryTitles.push(this.scene.add.text(840, 212, 'Weapons', { fill: '#FDCC20', fontFamily: 'Arial', fontSize: 24 }));
        this.inventoryTitles.push(this.scene.add.text(970, 212, 'Armor', { fill: '#FFFFFF', fontFamily: 'Arial', fontSize: 24 }));
        this.inventoryTitles.push(this.scene.add.text(1060, 212, 'Items', { fill: '#FFFFFF', fontFamily: 'Arial', fontSize: 24 }));
        this.inventoryTitles.push(this.scene.add.text(840, 242, 'Spells', { fill: '#FFFFFF', fontFamily: 'Arial', fontSize: 24 }));
        this.inventoryTitles.push(this.scene.add.text(928, 242, 'Summons', { fill: '#FFFFFF', fontFamily: 'Arial', fontSize: 24 }));
        this.inventoryTitles.push(this.scene.add.text(1060, 242, 'Skills', { fill: '#FFFFFF', fontFamily: 'Arial', fontSize: 24 }));

        this.pauseTitles.push(this.scene.add.text(1137 / 2, 320 - 142, "Main Menu", { fill: '#FFFFFF', fontFamily: 'Arial', fontSize: 24 }));
        this.pauseTitles.push(this.scene.add.text(1137 / 2, 320 - 80, "Resume", { fill: '#FFFFFF', fontFamily: 'Arial', fontSize: 24 }));
        this.pauseTitles.push(this.scene.add.text(1137 / 2, 320 - 42, "New Game", { fill: '#FFFFFF', fontFamily: 'Arial', fontSize: 24 }));
        this.pauseTitles.push(this.scene.add.text(1137 / 2, 320, "Load Game", { fill: '#FFFFFF', fontFamily: 'Arial', fontSize: 24 }));
        this.pauseTitles.push(this.scene.add.text(1137 / 2, 320 + 40, "Settings", { fill: '#FFFFFF', fontFamily: 'Arial', fontSize: 24 }));
        this.pauseTitles.push(this.scene.add.text(1137 / 2, 320 + 80, "Credits", { fill: '#FFFFFF', fontFamily: 'Arial', fontSize: 24 }));

        this.toggleInventory(this.uiManager);

        for (var i = 0; i < this.inventoryTitles.length; i++) {
            this.inventoryTitles[i].visible = this.uiManager.hudMenuVisible;
            this.inventoryTitles[i].setScrollFactor(0);
        }

        for (var i = 0; i < this.pauseTitles.length; i++) {
            this.pauseTitles[i].visible = this.uiManager.pauseMenuVisible;
            this.pauseTitles[i].setScrollFactor(0);
        }

        this.hudMenu.on("pointerdown", function (e) {
            // alert(e.x + " " + e.y)
            if (e.x > 1199 && e.x < 1308 && e.y > 32 && e.y < 138) {
                this.uiManager.toggleInventory();
            }
        }, this);


        document.addEventListener("healthChange", function (e) {
            ui.hudBarHealth.scaleX = 30.8 * this.gameManager.health / this.gameManager.maxHealth;
            ui.healthText.text = this.gameManager.health + '/' + this.gameManager.maxHealth;
        })
        document.addEventListener("staminaChange", function (e) {
            //console.log(e.detail.value);
            ui.hudBarStamina.scaleX = 30.8 * this.gameManager.stamina / this.gameManager.maxstamina;
            ui.staminaText.text = this.gameManager.stamina + '/' + this.gameManager.maxStamina;
            ui.drawUi();
        })
        document.addEventListener("manaChange", function (e) {
            ui.hudBarMana.scaleX = 30.8 * this.gameManager.mana / this.gameManager.maxMana;
            ui.manaText.text = this.gameManager.mana + '/' + this.gameManager.maxMana;
        })
        document.addEventListener("maxHealthChange", function (e) {
            ui.hudBarHealth.scaleX = 30.8 * this.gameManager.health / this.gameManager.maxHealth;
            ui.healthText.text = this.gameManager.health + '/' + this.gameManager.maxHealth;
        })

        document.addEventListener("maxStaminaChange", function (e) {
            ui.hudBarStamina.scaleX = 30.8 * this.gameManager.stamina / this.gameManager.maxStamina;
            ui.staminaText.text = this.gameManager.stamina + '/' + this.gameManager.maxStamina;
        })
        document.addEventListener("maxManaChange", function (e) {
            ui.hudBarMana.scaleX = 30.8 * this.gameManager.mana / this.gameManager.maxMana;
            ui.manaText.text = this.gameManager.mana + '/' + this.gameManager.maxMana;
        })

    }
    hideUi() {
        this.hudBar.alpha = 0.5;
        this.hudBarHealth.alpha = 0.5;
        this.hudBarStamina.alpha = 0.5;
        this.hudBarMana.alpha = 0.5;
        this.hudMap.alpha = 0.5;
    }
    showUi() {
        this.hudBar.alpha = 1;
        this.hudBarHealth.alpha = 1;
        this.hudBarStamina.alpha = 1;
        this.hudBarMana.alpha = 1;
        this.hudMap.alpha = 1;
    }
    toggleInventory(uiManager) {
        this.hudMenu.visible = uiManager.hudMenuVisible;
        if (uiManager.hudMenuVisible) {
            this.hideUi()
            this.healthText.visible = true;
            this.staminaText.visible = true;
            this.manaText.visible = true;


            for (var i = 0; i < this.inventoryTitles.length; i++) {
                this.inventoryTitles[i].visible = true;
            }

            this.inventoryTitleBoxes[this.inventoryHorizonalIndex].visible = true;
        }
        else {
            this.showUi();
            this.healthText.visible = false;
            this.staminaText.visible = false;
            this.manaText.visible = false;

            for (var i = 0; i < this.inventoryTitles.length; i++) {
                this.inventoryTitles[i].visible = false;
            }
            this.inventoryTitleBoxes[this.inventoryHorizonalIndex].visible = false;
            //this.gameManager.context = this.gameManager.contexts[0];
        }
    }
    moveInventoryLeft() {
        this.inventoryTitles[this.inventoryHorizonalIndex].setColor('#FFFFFF');
        this.inventoryTitleBoxes[this.inventoryHorizonalIndex].visible = false;
        this.inventoryHorizonalIndex--
        if (this.inventoryHorizonalIndex < 0)
            this.inventoryHorizonalIndex = 5;
        this.inventoryTitles[this.inventoryHorizonalIndex].setColor('#FDCC20');
        this.inventoryTitleBoxes[this.inventoryHorizonalIndex].visible = true;
    }
    moveInventoryRight() {
        this.inventoryTitleBoxes[this.inventoryHorizonalIndex].visible = false;
        this.inventoryTitles[this.inventoryHorizonalIndex].setColor('#FFFFFF');
        this.inventoryHorizonalIndex++
        if (this.inventoryHorizonalIndex > 5)
            this.inventoryHorizonalIndex = 0;
        this.inventoryTitles[this.inventoryHorizonalIndex].setColor('#FDCC20');
        this.inventoryTitleBoxes[this.inventoryHorizonalIndex].visible = true;
    }
    togglePauseMenu(uiManager) {
        // this.scene.globalAlpha = 0.8;
        // this.scene.fillStyle = "black";
        // this.scene.fillRect(0, 0, 1137, 640);
        // this.scene.strokeStyle = "#fdcc20";
        // this.scene.beginPath();
        // this.scene.lineWidth = 2;
        //this.scene.rect(1137 / 2 - 150, 640 / 2 - 200, 300, 320);
        this.hideUi();
        if (uiManager.pauseMenuVisible) {
            for (var i = 0; i < this.pauseTitles.length; i++) {
                this.pauseTitles[i].visible = true;
            }
        }
        else {
            for (var i = 0; i < this.pauseTitles.length; i++) {
                this.pauseTitles[i].visible = false;
            }
        }
    }
}

export default Ui;
