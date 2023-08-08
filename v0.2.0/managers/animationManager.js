class AnimationManager{
    constructor(scene){
        scene.anims.create({
            key: 'left',
            frames: scene.anims.generateFrameNumbers('wizard', { start: 0, end: 0 }),
            frameRate: 10,
            repeat: -1
        });
    
        scene.anims.create({
            key: 'leftAlt',
            frames: scene.anims.generateFrameNumbers('wizard', { start: 1, end: 1 }),
            frameRate: 10,
            repeat: -1
        });
    
        scene.anims.create({
            key: 'runningLeft',
            frames: scene.anims.generateFrameNumbers('wizard', { start: 2, end: 2 }),
            frameRate: 10,
            repeat: -1
        });
    
        scene.anims.create({
            key: 'runningLeftAlt',
            frames: scene.anims.generateFrameNumbers('wizard', { start: 3, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        scene.anims.create({
            key: 'runningUp',
            frames: scene.anims.generateFrameNumbers('wizard', { start: 40, end: 42 }),
            frameRate: 10,
            repeat: -1
        });

        scene.anims.create({
            key: 'runningDown',
            frames: scene.anims.generateFrameNumbers('wizard', { start: 43, end: 45 }),
            frameRate: 10,
            repeat: -1
        });

        scene.anims.create({
            key: 'jump',
            frames: scene.anims.generateFrameNumbers('wizard', { start: 4, end: 4 }),
            frameRate: 10,
            repeat: 0
        });
    
        scene.anims.create({
            key: 'jumpAlt',
            frames: scene.anims.generateFrameNumbers('wizard', { start: 5, end: 5 }),
            frameRate: 10,
            repeat: 0
        });
    
        scene.anims.create({
            key: 'charge',
            frames: scene.anims.generateFrameNumbers('wizard', { start: 6, end: 6 }),
            frameRate: 10,
            repeat: 0
        });
    
        scene.anims.create({
            key: 'chargeAlt',
            frames: scene.anims.generateFrameNumbers('wizard', { start: 7, end: 7 }),
            frameRate: 10,
            repeat: 0
        });
    
        scene.anims.create({
            key: 'defendPink',
            frames: scene.anims.generateFrameNumbers('wizard', { start: 8, end: 8 }),
            frameRate: 10,
            repeat: 0
        });
    
        scene.anims.create({
            key: 'defendPinkAlt',
            frames: scene.anims.generateFrameNumbers('wizard', { start: 10, end: 10 }),
            frameRate: 10,
            repeat: 0
        });
    
        scene.anims.create({
            key: 'defendGreen',
            frames: scene.anims.generateFrameNumbers('wizard', { start: 12, end: 12 }),
            frameRate: 10,
            repeat: 0
        });
    
        scene.anims.create({
            key: 'defendGreenAlt',
            frames: scene.anims.generateFrameNumbers('wizard', { start: 14, end: 14 }),
            frameRate: 10,
            repeat: 0
        });
    
        scene.anims.create({
            key: 'defendBlue',
            frames: scene.anims.generateFrameNumbers('wizard', { start: 16, end: 16 }),
            frameRate: 10,
            repeat: 0
        });
    
        scene.anims.create({
            key: 'defendBlueAlt',
            frames: scene.anims.generateFrameNumbers('wizard', { start: 18, end: 18 }),
            frameRate: 10,
            repeat: 0
        });
    
        scene.anims.create({
            key: 'defendRed',
            frames: scene.anims.generateFrameNumbers('wizard', { start: 20, end: 20 }),
            frameRate: 10,
            repeat: 0
        });
    
        scene.anims.create({
            key: 'defendRedAlt',
            frames: scene.anims.generateFrameNumbers('wizard', { start: 22, end: 22 }),
            frameRate: 10,
            repeat: 0
        });
    
      
    
        scene.anims.create({
            key: 'damage',
            frames: scene.anims.generateFrameNumbers('wizard', { start: 24, end: 24 }),
            frameRate: 10,
            repeat: 0
        });
    
    
        scene.anims.create({
            key: 'damageAlt',
            frames: scene.anims.generateFrameNumbers('wizard', { start: 25, end: 25 }),
            frameRate: 10,
            repeat: 0
        });
        scene.anims.create({
            key: 'light',
            frames: scene.anims.generateFrameNumbers('wizard', { start: 26, end: 26 }),
            frameRate: 10,
            repeat: 0
        });
    
    
        scene.anims.create({
            key: 'lightAlt',
            frames: scene.anims.generateFrameNumbers('wizard', { start: 27, end: 27 }),
            frameRate: 10,
            repeat: 0
        });
        scene.anims.create({
            key: 'summon',
            frames: scene.anims.generateFrameNumbers('wizard', { start: 28, end: 28 }),
            frameRate: 10,
            repeat: 0
        });
        scene.anims.create({
            key: 'summonAlt',
            frames: scene.anims.generateFrameNumbers('wizard', { start: 29, end: 29 }),
            frameRate: 10,
            repeat: 0
        });
        scene.anims.create({
            key: 'die',
            frames: scene.anims.generateFrameNumbers('wizard', { start: 30, end: 30 }),
            frameRate: 10,
            repeat: 0
        });
          
        scene.anims.create({
            key:'strike',
            frames: scene.anims.generateFrameNumbers('wizard', { start: 32, end: 35 }),
            frameRate: 10,
            repeat: -1
        })
        
        scene.anims.create({
            key:'strikeAlt',
            frames: scene.anims.generateFrameNumbers('wizard', { start: 36, end: 39 }),
            frameRate: 10,
            repeat: 0
        })

        scene.anims.create({
            key:'fire',
            frames: scene.anims.generateFrameNumbers('spells', { start: 0, end: 0 }),
            frameRate: 10,
            repeat:-1
        })
        scene.anims.create({
            key:'water',
            frames: scene.anims.generateFrameNumbers('spells', { start: 1, end: 1 }),
            frameRate: 10,
            repeat:-1
        })
        scene.anims.create({
            key:'heal',
            frames: scene.anims.generateFrameNumbers('spells', { start: 2, end: 2 }),
            frameRate: 10,
            repeat:-1
        })
        scene.anims.create({
            key:'lightning',
            frames: scene.anims.generateFrameNumbers('spells', { start: 3, end: 3 }),
            frameRate: 10,
            repeat:-1
        })
    }
}

export default AnimationManager;
