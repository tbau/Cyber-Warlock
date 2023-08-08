function drawPlayer() {
	if (displayMenu) { }
	else {
		//ctx_game.clearRect(p.x, p.y, 50, 50);
		
		ctx_game.clearRect(0,0, 1137,640);
	}
	for(var key in game["possibleEntities"]){
		if(key!="player") {
			game["possibleEntities"][key].draw(ctx_game);
		    game["possibleEntities"][key].update();
		}
	}
	game["possibleEntities"]["player"].draw(ctx_game);
	
	if (center) {
		p.x = (1137 / 2) - 20;
		p.y = (640 / 2) - 50;
	}
	/*
	if (p.attackFrameCount == 0) {
		if (p.image == "standRight") {
			ctx_game.scale(-1, 1);
			if (this.equip) {
				if (center) {
					ctx_game.drawImage(wizard, 50, 0, 50, 50, -p.x - 50, p.y, 50, 50);
				} else {
					ctx_game.drawImage(wizard, 50, 0, 50, 50, -p.x - 50, p.y, 50, 50);
				}
			} else {
				if (center) {
					ctx_game.drawImage(wizard, 65, 0, 30, 50, -p.x - 35, p.y, 30, 50);
					ctx_game.drawImage(fist, -p.x - 40, p.y + 28);
				} else {
					ctx_game.drawImage(wizard, 65, 0, 30, 50, -p.x - 35, p.y, 30, 50);
					ctx_game.drawImage(fist, -p.x - 40, p.y + 28);
				}
			}
			ctx_game.scale(-1, 1);
		}
		if (p.image == "standLeft") {
			if (this.equip) {
				if (center) {
					ctx_game.drawImage(wizard, 50, 0, 50, 50, p.x, p.y, 50, 50);
				} else {
					ctx_game.drawImage(wizard, 50, 0, 50, 50, p.x, p.y, 50, 50);
				}
			} else {
				if (center) {
					ctx_game.drawImage(wizard, 65, 0, 30, 50, p.x + 15, p.y, 30, 50);
					ctx_game.save()
					ctx_game.translate(p.x + 9, p.y + 14)
					ctx_game.rotate(30 * Math.PI / 180)
					ctx_game.drawImage(icons, 0, 170, 32, 32, -16, -16, 32, 32);
					ctx_game.restore();
					ctx_game.drawImage(fist, p.x + 10, p.y + 28);
				} else {
					ctx_game.drawImage(wizard, 65, 0, 30, 50, p.x + 15, p.y, 30, 50);
					ctx_game.drawImage(fist, p.x + 10, p.y + 28);
				}
			}
		}
		if (p.image == "runRight") {
			ctx_game.scale(-1, 1);
			if (center) {
				ctx_game.drawImage(wizard, 40, 775, 50, 50, -p.x - 50, p.y, 50, 50);
			} else {
				ctx_game.drawImage(wizard, 40, 775, 50, 50, -p.x - 50, p.y, 50, 50);
			}
			ctx_game.scale(-1, 1);
		}
		if (p.image == "runLeft") {
			if (center) {
				ctx_game.drawImage(wizard, 40, 775, 50, 50, p.x, p.y, 50, 50);
			} else {
				ctx_game.drawImage(wizard, 40, 775, 50, 50, p.x, p.y, 50, 50);
			}
		}
		if (p.image == "defendLeft") {
			if (center) {
				ctx_game.drawImage(wizard, 250, 100, 40, 50, p.x + 8, p.y + 4, 40, 50);
			} else {
				ctx_game.drawImage(wizard, 250, 100, 40, 50, p.x + 8, p.y + 4, 40, 50);
			}
		}
		if (p.image == "defendRight") {
			ctx_game.scale(-1, 1);
			if (center) {
				ctx_game.drawImage(wizard, 250, 100, 40, 50, -p.x - 42, p.y + 4, 40, 50);
			} else {
				ctx_game.drawImage(wizard, 250, 100, 40, 50, -p.x - 42, p.y + 4, 40, 50);
			}
			ctx_game.scale(-1, 1);
		}
	}
	if (p.image == "attackLeft1") {
		if (center) {
			ctx_game.drawImage(wizard, 50, 385, 50, 50, p.x - 3, p.y, 50, 50);
		} else {
			ctx_game.drawImage(wizard, 50, 385, 50, 50, p.x - 3, p.y, 50, 50);
		}
		if (!displayMenu)
			p.attackFrameCount++;
	}
	if (p.image == "attackLeft2") {
		if (center) {
			ctx_game.drawImage(wizard, 133, 385, 59, 50, p.x - 16, p.y, 59, 50);
		} else {
			ctx_game.drawImage(wizard, 133, 385, 59, 50, p.x - 16, p.y, 59, 50);
		}
		if (!displayMenu)
			p.attackFrameCount++;
	}
	if (p.image == "attackLeft3") {
		if (center) {
			ctx_game.drawImage(wizard, 230, 390, 60, 45, p.x - 15, p.y + 5, 60, 45);
		} else {
			ctx_game.drawImage(wizard, 230, 390, 60, 45, p.x - 15, p.y + 5, 60, 45);
		}
		if (!displayMenu)
			p.attackFrameCount++;
	}
	if (p.image == "attackRight1") {
		ctx_game.scale(-1, 1);
		if (center) {
			ctx_game.drawImage(wizard, 50, 385, 50, 50, -p.x - 53, p.y, 50, 50);
		} else {
			ctx_game.drawImage(wizard, 50, 385, 50, 50, -p.x - 53, p.y, 50, 50);
		}
		ctx_game.scale(-1, 1);
		if (!displayMenu)
			p.attackFrameCount++;
	}
	if (p.image == "attackRight2") {
		ctx_game.scale(-1, 1);
		if (center) {
			ctx_game.drawImage(wizard, 133, 385, 59, 50, -p.x - 66, p.y, 59, 50);
		} else {
			ctx_game.drawImage(wizard, 133, 385, 59, 50, -p.x - 66, p.y, 59, 50);
		}
		ctx_game.scale(-1, 1);
		if (!displayMenu)
			p.attackFrameCount++;
	}
	if (p.image == "attackRight3") {
		ctx_game.scale(-1, 1);
		if (center) {
			ctx_game.drawImage(wizard, 230, 390, 60, 45, -p.x - 65, p.y + 5, 60, 45);
		} else {
			ctx_game.drawImage(wizard, 230, 390, 60, 45, -p.x - 65, p.y + 5, 60, 45);
		}
		ctx_game.scale(-1, 1);
		if (!displayMenu)
			p.attackFrameCount++;
	}
	if (p.attackFrameCount == 10) {
		if (p.image == "attackLeft1") {
			p.image = "attackLeft2";
		}
		if (p.image == "attackRight1") {
			p.image = "attackRight2";
		}
	} else if (p.attackFrameCount == 15) {
		if (p.image == "attackLeft2") {
			p.image = "attackLeft3";
		}
		if (p.image == "attackRight2") {
			p.image = "attackRight3";
		}
	} else if (p.attackFrameCount == 20) {
		if (p.dir == "Right") {
			p.image = "standRight"
		} else {
			p.image = "standLeft"
		}
		p.attackFrameCount = 0;
	}*/
	fireCopy = [];
	fires.forEach(function (i) {
		ctx_game.drawImage(icons, 35, 681, 31, 31, i.x, i.y, 31, 31);
		if (!displayMenu)
			i.time--;
		if (i.time > 0) {
			fireCopy.push(i);
		} else {
			ctx_game.clearRect(i.x - 2, i.y - 2, 41, 41);
		}
	});
	fires = fireCopy;
	setTimeout(drawPlayer, 20);
}

function drawBackground() {
	ctx_background.clearRect(0, 0, width, height);
	ctx_background.drawImage(background_layer_pre, -p.offsetX, -p.offsetY);
	//ctx_background.drawImage(background_layer_pre, 0,0);
}
function loadBackground() {
	//ctx_background_pre.drawImage(grass2, 0, 0);
	ctx_background_pre.drawImage(currentMap,0,0);
	//ctx_background_pre.drawImage(tree1,2200,4600,400,400);		
	console.log("loadBackground")

	//ctx_background_pre.drawImage(tree1, 2500, 2500, 100, 120);
}

function defendStaminaDown() {
	if (!displayMenu && !pauseMenu) {
		if (p.defend) {
			p.stamina--
		}
		if (p.stamina <= 0) {
			p.stamina = 0;
			p.defend = false;
			switch(game["possibleEntities"]["player"]["dir"] ){
				case "Right":
					game["possibleEntities"]["player"]["animation"]="standRight";
					break; 
				case "Left":
					game["possibleEntities"]["player"]["animation"]="standLeft";
					break;
				case "Up":
					game["possibleEntities"]["player"]["animation"]="standUp";
					break;
				case "Down":
					game["possibleEntities"]["player"]["animation"]="standDown";
					break;
			}			
		}
	}
	setTimeout(defendStaminaDown, 1000);
}
function staminaReg() {
	if (p.stamina < p.maxStamina && !p.defend && !displayMenu && !pauseMenu) {
		p.stamina++;
	}
	setTimeout(staminaReg, 2000);
}
function loadGameLoops() {
	if (imageCount == 0) {
		drawUiLayer(true);
		drawPlayer();
		checkKeys();
		defendStaminaDown();
		staminaReg();
		loadBackground();
		drawBackground();
		for(var key in game["possibleEntities"]){
			if(key!="player") 
				game["possibleEntities"][key].draw(ctx_game);
		}
	} else {
		setTimeout(loadGameLoops, 50);
	}
}
setTimeout(loadGameLoops, 10);
