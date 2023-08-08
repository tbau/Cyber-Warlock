class GameManager {
    constructor() {
        this.health = 10;
        this.stamina = 10;
        this.mana = 10;
        this.maxHealth = 10;
        this.maxStamina = 10;
        this.maxMana = 10;
        this.contextMap = {
            'PLAYING': 0,
            'INVENTORY': 1,
            'PAUSED': 2,
            'OPTIONS': 3,
            'TALKING': 4,
            'TRADING': 5,
            'BUYING': 6,
            'SELLING': 7,
            'CINEMATIC': 8
        };

        this.contexts = ['playing', 'inventory', 'paused', 'options', 'talking', 'trading', 'buying', 'selling', 'cinematic']
        this.context = this.contexts[0];

        this.contextStack= ['playing'];
        this.money = 100;
        this.gamepadCallMap = {
            'playing': {
                'player': {
                    'X': 'strike', 'Y': 'defend', 'leftStick': 'move'
                },
                'ui': {
                    'B': 'toggleInventory'
                },
                'game': {}
            },
            'inventory': {
                'player': {},
                'ui': {
                    'B': 'toggleInventory', 'right': 'moveInventoryRight', 'left': 'moveInventoryLeft'
                }
            }
        }
        this.callMap = {
            'playing': {
                'player': {
                    'left': 'moveLeft', 'right': 'moveRight', 'up': 'moveUp', 'down': 'moveDown',
                    'a': 'moveLeft', 'd': 'moveRight', 'w': 'moveUp', 's': 'moveDown',
                    'e': 'flipAlternate', 'r': 'changeColor', 'o': 'light',
                    'q': 'jump', 'f': 'charge', 'j': 'summon', "g": 'defend', 'h': '', 'space': 'strike',
                    'z': 'changeSpell'
                },
                'ui': {
                },
                'uiManager': {
                    'i': 'toggleInventory', 'p': 'togglePauseMenu'
                },
                'game':
                {
                    'l': '', 'k': ''
                }
            },
            'inventory': {
                'player': {},
                'ui': {
                    'a': 'moveInventoryLeft', 'd': 'moveInventoryRight','left': 'moveInventoryLeft', 'right': 'moveInventoryRight'
                },
                'uiManager': {
                    'i': 'toggleInventory', 'p': 'togglePauseMenu'
                }
            },
            'paused': {
                'player': {},
                'ui': {},
                'uiManager':{'p': 'togglePauseMenu'}
            }
        }
    }
    setHealth(v) {
        this.health = v;
        let event = new CustomEvent("healthChange", {
            detail: {
                value: this.health
            }
        });
        document.dispatchEvent(event);
    }

    setStamina(v) {
        this.stamina = v;
        let event = new CustomEvent("staminaChange", {
            detail: {
                value: this.stamina
            }
        });
        document.dispatchEvent(event);
    }

    setMana(v) {
        this.mana = v;
        let event = new CustomEvent("manaChange", {
            detail: {
                value: this.mana
            }
        });
        document.dispatchEvent(event);
    }

    setMaxHealth(v) {
        this.maxHealth = v;
        let event = new CustomEvent("maxHealthChange", {
            detail: {
                value: this.maxHealth
            }
        });
        document.dispatchEvent(event);
    }

    setMaxStamina(v) {
        this.maxStamina = v;
        let event = new CustomEvent("maxStaminaChange", {
            detail: {
                value: this.maxStaminaChange
            }
        });
        document.dispatchEvent(event);
    }

    setMaxMana(v) {
        this.maxMana = v;
        let event = new CustomEvent("maxManaChange", {
            detail: {
                value: this.maxMana
            }
        });
        document.dispatchEvent(event);
    }
}

export default GameManager;