import React, { useEffect } from "react";
import '../libs/phaser.min';
import UIManager from "../managers/uiManager";
import GameManager from '../managers/gameManager'
import playScene from '../scenes/playScene';
import menuScene from '../scenes/menuScene';
import { RecoilRoot } from "recoil";

const App = () => {
    let uploadRef = React.useRef();
    let gamepad;
    function cleanString(input) {
        var output = "";
        output = JSON.parse(input);
        player.sprite.x = output.x;
        player.sprite.y = output.y;
        gameManager.setHealth(output.health);
        gameManager.setStamina(output.stamina);
        gameManager.setMana(output.mana);
        gameManager.setMaxHealth(output.maxHealth);
        gameManager.setMaxStamina(output.maxStamina);
        gameManager.setMaxMana(output.maxMana);
        return output;
    }

    useEffect(() => {
        uploadRef.current.addEventListener("change", function () {
            if (this.files && this.files[0]) {
                var myFile = this.files[0];
                var reader = new FileReader();

                reader.addEventListener('load', function (e) {
                    cleanString(e.target.result);
                });

                reader.readAsBinaryString(myFile);
            }
        });
    })


    let width = 1536;
    let height = 860;
    width = window.innerWidth * window.devicePixelRatio;
    height = window.innerHeight * window.devicePixelRatio

    let gameManager = new GameManager()
    let uiManager = new UIManager(gameManager);
    //let scene = new playScene(1600,800, uiManager);

    const DEFAULT_HEIGHT = 720
    // adjust the width dynamically based on the device screen ratio
    const DEFAULT_WIDTH = (window.innerWidth / window.innerHeight) * DEFAULT_HEIGHT

    let config = {
        type: Phaser.CANVAS,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: 'phaser-app',
        width: 1600,
        height: 800,
        input: {
            activePointers: 3,
            gamepad: true
        },
        physics: {
            default: 'matter',
            matter: {
                gravity: { y: 1 },
                debug: false
            }
        },
        scene: [playScene, menuScene]
    };

    let game = new Phaser.Game(config);
    game.scene.start('Play', { width: 1600, height: 800, uiManager });
    return (
        <RecoilRoot>
            <input id="upload_input"
                name="upload"
                style={{ 'display': 'none', 'fontSize': '50px', 'width': '120px', 'opacity': 0, 'filter': 'alpha(opacity=0)' }}
                type="file"
                ref={uploadRef} />
        </RecoilRoot>
    )
};

export default App;