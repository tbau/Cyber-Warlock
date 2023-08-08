import Player from '../models/player';
import Ui from '../models/ui';

class UIManager {
    constructor(gameManager) {
        this.hudMenuVisible = false;
        this.pauseMenuVisible = false;
        this.gameManager = gameManager;
    }
    init(scene) {
        this.scene = scene;
        if (this.player == null) {
            this.player = new Player(scene, this.gameManager);
        }
        else{
            this.player.scene = scene;
        }
        if (this.ui == null) {
            this.ui = new Ui(scene, this, this.gameManager);
        }        
        else{
            this.ui.scene = scene;
        }       
    }
    toggleInventory() {
        this.hudMenuVisible = !this.hudMenuVisible;
        if (this.hudMenuVisible) {
            this.gameManager.contextStack.push(this.gameManager.contexts[this.gameManager.contextMap['INVENTORY']]);
            this.gameManager.context = this.gameManager.contexts[this.gameManager.contextMap['INVENTORY']];
        }
        else {
            this.gameManager.contextStack.pop();
            this.gameManager.context = this.gameManager.contextStack[this.gameManager.contextStack.length - 1];
        }
        this.ui.toggleInventory(this);
        if (this.hudMenuVisible) {
            this.player.sprite.alpha = 0.5;
        }
        else {
            this.player.sprite.alpha = 1;
        }
    }

    togglePauseMenu() {
        this.pauseMenuVisible = !this.pauseMenuVisible;
    
        if (this.pauseMenuVisible) {
            this.gameManager.contextStack.push(this.gameManager.contexts[this.gameManager.contextMap['PAUSED']]);
            this.gameManager.context = this.gameManager.contexts[this.gameManager.contextMap['PAUSED']];
            this.player.x = this.player.sprite.x;
            this.player.y = this.player.sprite.y;
            this.scene.scene.pause('Play')
            this.scene.scene.launch('Menu', { width: 1600, height: 800, uiManager: this, gameManager: this.gameManager});
        }
        else {
            this.gameManager.contextStack.pop();
            this.gameManager.context = this.gameManager.contextStack[this.gameManager.contextStack.length - 1];
            this.scene.scene.stop('Menu');
            this.scene.scene.start('Play');            
        }

        this.ui.togglePauseMenu(this);

    }
}
function generateHexColor() {
    return '#' + ((0.5 + 0.5 * Math.random()) * 0xFFFFFF << 0).toString(16);
}

export default UIManager;
