function drawUiLayer(callItself) {
	drawHud();
	if (displayMenu) {
		//if(displayInventorySubMenu[2]!=-1)
		//	ctx_ui.clearRect(1137 / 2 + 75 + 245, 640 / 2 - 58 + displayInventorySubMenu[2] * 23, 162,55);
		
		displayUiMenu();
	}
	if (pauseMenu) {
		displayPauseMenu();
	}
	if (callItself) {
		if (displayMenu) {
			setTimeout(drawUiLayer, 20,true);
		} else if (pauseMenu) {
			setTimeout(drawUiLayer, 20,true);
		} else {
			setTimeout(drawUiLayer, 300,true);
		}
	}
}

function drawHud() {
	ctx_ui.globalAlpha = 1;
	ctx_ui.fillStyle="blue";
	ctx_ui.beginPath();
	ctx_ui.arc(1050, 60, 55, 0, 2 * Math.PI);
	ctx_ui.fill(); 
	var x=5000;
	var y=5000;
	//ctx_ui.drawImage(map1,Math.max(p.offsetX-(0.5*x)/mapZoomLevel+250*(mapZoomLevel/2),0),Math.max(p.offsetY-(0.5*y)/mapZoomLevel,0),x/mapZoomLevel,y/mapZoomLevel,1022,30,70,70);
	ctx_ui.drawImage(background_layer_pre,Math.max(5000-1.75*x/mapZoomLevel,0),Math.max(5000-1.75*y/mapZoomLevel,0),x/mapZoomLevel,y/mapZoomLevel,1022,30,70,70);

	ctx_ui.fillStyle="red";
	ctx_ui.beginPath();
	ctx_ui.arc(1030+35*((p.offsetX-(1137/2-20 - p.x)) /2500), 35+35*((p.offsetY-320-50+p.y)/2500), 2, 0, 2 * Math.PI);
	ctx_ui.fill(); 

	ctx_ui.drawImage(hudMap, 985, 0);
	ctx_ui.drawImage(hudBarBlock, 0, 0, 32, 32, hud.width - 25, 5, 530, 32);
	ctx_ui.drawImage(hudBarBlock, 0, 0, 32, 32, hud.width - 25, 25, 530, 32);
	ctx_ui.drawImage(hudBarBlock, 0, 0, 32, 32, hud.width - 25, 45, 530, 32);
	if (p.health > 0)
		ctx_ui.drawImage(hudBarHealth, hud.width - 3, 7, 135 * p.health / p.maxHealth, 12);
	if (p.mana > 0)
		ctx_ui.drawImage(hudBarMana, hud.width - 3, 27, 135 * p.mana / p.maxMana, 12);
	if (p.stamina > 0)
		ctx_ui.drawImage(hudBarStamina, hud.width - 3, 47, 135 * p.stamina / p.maxStamina, 12);
	ctx_ui.drawImage(hud, 0, 0);
	ctx_ui.drawImage(hudBarEndHealth, hud.width - 4 + 15 * 8, 3);
	ctx_ui.drawImage(hudBarEndMana, hud.width - 4 + 15 * 8, 23);
	ctx_ui.drawImage(hudBarEndStamina, hud.width - 4 + 15 * 8, 43);
}

function displayPauseMenu() {
	ctx_ui.globalAlpha = 0.8;
	ctx_ui.fillStyle = "black";
	ctx_ui.fillRect(0, 0, 1137, 640);
	ctx_ui.strokeStyle = "#fdcc20";
	ctx_ui.beginPath();
	ctx_ui.lineWidth = 2;
	ctx_ui.rect(1137 / 2 - 150, 640 / 2 - 200, 300, 320);
	ctx_ui.stroke();
	ctx_ui.fillStyle = "white";
	ctx_ui.font = "bold 32px Times";
	ctx_ui.globalAlpha = 1;
	ctx_ui.fillText("Main Menu", 1137 / 2 - ctx_ui.measureText("Main Menu").width / 2, 640 / 2 - 142);
	ctx_ui.font = "bold 24px Times";
	ctx_ui.fillText("Resume", 1137 / 2 - ctx_ui.measureText("Resume").width / 2, 640 / 2 - 80);
	ctx_ui.fillText("New Game", 1137 / 2 - ctx_ui.measureText("New Game").width / 2, 640 / 2 - 42);
	ctx_ui.fillText("Load Game", 1137 / 2 - ctx_ui.measureText("Load Game").width / 2, 640 / 2);
	ctx_ui.fillText("Settings", 1137 / 2 - ctx_ui.measureText("Settings").width / 2, 640 / 2 + 40);
	ctx_ui.fillText("Credits", 1137 / 2 - ctx_ui.measureText("Credits").width / 2, 640 / 2 + 80);
}

function displayUiMenu() {
	displayUiMenuAttributes();
	ctx_ui.font = "bold 20px Times";
	if (menuSelected[menuIndexHorizontal] == "Weapons") {
		displayWeaponCategory();
	} else if (menuSelected[menuIndexHorizontal] == "Armor") {
		displayArmorCategory();
	} else if (menuSelected[menuIndexHorizontal] == "Items") {
		displayItemCategory();
	} else if (menuSelected[menuIndexHorizontal] == "Spells") {
		ctx_ui.beginPath();
		ctx_ui.fillText("Weapons", 1137 / 2 + 10, 640 / 2 - 130);
		ctx_ui.fillText("Summons", 1137 / 2 + 80, 640 / 2 - 105);
		ctx_ui.fillText("Armor", 1137 / 2 + 105, 640 / 2 - 130);
		ctx_ui.fillText("Items", 1137 / 2 + 180, 640 / 2 - 130);
		ctx_ui.fillText("Skills", 1137 / 2 + 181, 640 / 2 - 105);
		ctx_ui.fillStyle = "#fdcc20";
		ctx_ui.strokeStyle = "#fdcc20";
		ctx_ui.fillText("Spells", 1137 / 2 + 10, 640 / 2 - 105);
		ctx_ui.lineWidth = 2;
		ctx_ui.rect(1137 / 2 + 5, 640 / 2 - 123, 60, 25);
		ctx_ui.stroke()
	} else if (menuSelected[menuIndexHorizontal] == "Summons") {
		ctx_ui.beginPath();
		ctx_ui.fillText("Weapons", 1137 / 2 + 10, 640 / 2 - 130);
		ctx_ui.fillText("Armor", 1137 / 2 + 105, 640 / 2 - 130);
		ctx_ui.fillText("Items", 1137 / 2 + 180, 640 / 2 - 130);
		ctx_ui.fillText("Spells", 1137 / 2 + 10, 640 / 2 - 105);
		ctx_ui.fillText("Skills", 1137 / 2 + 181, 640 / 2 - 105);
		ctx_ui.fillStyle = "#fdcc20";
		ctx_ui.strokeStyle = "#fdcc20";
		ctx_ui.fillText("Summons", 1137 / 2 + 80, 640 / 2 - 105);
		ctx_ui.lineWidth = 2;
		ctx_ui.rect(1137 / 2 + 75, 640 / 2 - 123, 94, 25);
		ctx_ui.stroke()
	} else if (menuSelected[menuIndexHorizontal] == "Skills") {
		ctx_ui.beginPath();
		ctx_ui.fillText("Weapons", 1137 / 2 + 10, 640 / 2 - 130);
		ctx_ui.fillText("Armor", 1137 / 2 + 105, 640 / 2 - 130);
		ctx_ui.fillText("Items", 1137 / 2 + 180, 640 / 2 - 130);
		ctx_ui.fillText("Spells", 1137 / 2 + 10, 640 / 2 - 105);
		ctx_ui.fillText("Summons", 1137 / 2 + 80, 640 / 2 - 105);
		ctx_ui.fillStyle = "#fdcc20";
		ctx_ui.strokeStyle = "#fdcc20";
		ctx_ui.fillText("Skills", 1137 / 2 + 181, 640 / 2 - 105);
		ctx_ui.lineWidth = 2;
		ctx_ui.rect(1137 / 2 + 176, 640 / 2 - 123, 57, 25);
		ctx_ui.stroke()
	} else {
		ctx_ui.fillText("Weapons", 1137 / 2 + 10, 640 / 2 - 130);
		ctx_ui.fillText("Armor", 1137 / 2 + 105, 640 / 2 - 130);
		ctx_ui.fillText("Items", 1137 / 2 + 180, 640 / 2 - 130);
		ctx_ui.fillText("Spells", 1137 / 2 + 10, 640 / 2 - 105);
		ctx_ui.fillText("Summons", 1137 / 2 + 80, 640 / 2 - 105);
	}
}

function displayUiMenuAttributes() {
	ctx_ui.drawImage(hudMenu, 0, 0, 1352, 1280, 1137 / 2 - 342, 640 / 2 - 310, 750, 620);
	ctx_ui.fillStyle = "#d0d0cf";
	ctx_ui.font = "bold 24px Times"
	ctx_ui.fillText(p.health + "/" + p.maxHealth, 1137 / 2 - 167, 640 / 2 - 122);
	ctx_ui.fillText(p.mana + "/" + p.maxMana, 1137 / 2 - 167, 640 / 2 - 89);
	ctx_ui.fillText(p.stamina + "/" + p.maxStamina, 1137 / 2 - 167, 640 / 2 - 56);
	ctx_ui.fillText(p.level, 1137 / 2 - 161, 640 / 2 + 10);
	ctx_ui.font = "bold 20px Times"
	ctx_ui.fillText(p.str, 1137 / 2 - 222, 640 / 2 + 69);
	ctx_ui.fillText(p.int, 1137 / 2 - 222, 640 / 2 + 84);
	ctx_ui.fillText(p.spd, 1137 / 2 - 222, 640 / 2 + 98);
	ctx_ui.fillText(p.mag, 1137 / 2 - 222, 640 / 2 + 113);
	ctx_ui.fillText(p.atk, 1137 / 2 - 222, 640 / 2 + 128);
	ctx_ui.fillText(p.def, 1137 / 2 - 222, 640 / 2 + 142);
	ctx_ui.fillText(p.per, 1137 / 2 - 222, 640 / 2 + 156);
	ctx_ui.fillText(p.spr, 1137 / 2 - 222, 640 / 2 + 170);
	ctx_ui.fillText(p.swdLvl, 1137 / 2 - 202, 640 / 2 + 219);
	ctx_ui.fillText(p.stfLvl, 1137 / 2 - 202, 640 / 2 + 234);
	ctx_ui.fillText(p.bwLvl, 1137 / 2 - 202, 640 / 2 + 249);
	ctx_ui.fillText(p.splLvl, 1137 / 2 - 202, 640 / 2 + 263);
	ctx_ui.fillText(p.sumLvl, 1137 / 2 - 202, 640 / 2 + 278);
	ctx_ui.fillText(p.fire, 1137 / 2 - 43, 640 / 2 + 66);
	ctx_ui.fillText(p.ice, 1137 / 2 - 43, 640 / 2 + 81);
	ctx_ui.fillText(p.earth, 1137 / 2 - 43, 640 / 2 + 96);
	ctx_ui.fillText(p.wind, 1137 / 2 - 43, 640 / 2 + 111);
	ctx_ui.fillText(p.water, 1137 / 2 - 43, 640 / 2 + 125);
	ctx_ui.fillText(p.lightning, 1137 / 2 - 43, 640 / 2 + 140);
	ctx_ui.fillText(p.poison, 1137 / 2 - 43, 640 / 2 + 154);
	ctx_ui.fillText(p.holy, 1137 / 2 - 43, 640 / 2 + 169);
	ctx_ui.fillText(p.dark, 1137 / 2 - 43, 640 / 2 + 183);
	ctx_ui.fillText(p.psychic, 1137 / 2 - 43, 640 / 2 + 198);
	ctx_ui.fillText(p.tech, 1137 / 2 - 43, 640 / 2 + 213);
	ctx_ui.font = "bold 14px Times"
	ctx_ui.fillStyle = "white";
	ctx_ui.fillText(p.gold, 1137 / 2 + 282 - ctx_ui.measureText(p.gold.toString()).width, 640 / 2 + 283);
	ctx_ui.drawImage(gold, 1137 / 2 + 284, 640 / 2 + 272, 12, 12);
}

function displayWeaponCategory() {
	ctx_ui.beginPath();
	ctx_ui.fillText("Armor", 1137 / 2 + 105, 640 / 2 - 130);
	ctx_ui.fillText("Items", 1137 / 2 + 180, 640 / 2 - 130);
	ctx_ui.fillText("Spells", 1137 / 2 + 10, 640 / 2 - 105);
	ctx_ui.fillText("Summons", 1137 / 2 + 80, 640 / 2 - 105);
	ctx_ui.fillText("Skills", 1137 / 2 + 181, 640 / 2 - 105);
	ctx_ui.fillStyle = "#fdcc20";
	ctx_ui.strokeStyle = "#fdcc20";
	ctx_ui.fillText("Weapons", 1137 / 2 + 10, 640 / 2 - 130);
	ctx_ui.lineWidth = 2;
	ctx_ui.rect(1137 / 2 + 5, 640 / 2 - 148, 89, 25);
	ctx_ui.stroke()
	ctx_ui.fillStyle = "white";
	ctx_ui.font = "bold 16px Times";
	ctx_ui.fillText("Name", 1137 / 2 + 35, 640 / 2 - 68);
	ctx_ui.fillText("Dam", 1137 / 2 + 94, 640 / 2 - 68);
	ctx_ui.fillText("Typ", 1137 / 2 + 131, 640 / 2 - 68);
	ctx_ui.fillText("Eff", 1137 / 2 + 192, 640 / 2 - 68);
	ctx_ui.fillText("Cost", 1137 / 2 + 240, 640 / 2 - 68);
	ctx_ui.fillText("Kg", 1137 / 2 + 280, 640 / 2 - 68);
	ctx_ui.font = "bold 14px Times";
	if (menuIndexVertical[0] > 13) {
		for (var i = menuIndexVertical[0] - 13; i <= menuIndexVertical[0] && i < p.weapons.length; i++) {
			if (i == menuIndexVertical[0]) {
				ctx_ui.fillStyle = "#fdcc20";
			} else {
				ctx_ui.fillStyle = "white";
			}
			if (p.weapon === p.weapons[i])
				ctx_ui.fillText("E", 1137 / 2 + 8 - ctx_ui.measureText("E").width / 2, 640 / 2 - 40 + (i - menuIndexVertical[0] + 13) * 23);
			ctx_ui.fillText(p.weapons[i].name, 1137 / 2 + 56 - ctx_ui.measureText(p.weapons[i].name).width / 2, 640 / 2 - 40 + (i - menuIndexVertical[0] + 13) * 23);
			ctx_ui.fillText(p.weapons[i].damage, 1137 / 2 + 110 - ctx_ui.measureText(p.weapons[i].damage).width / 2, 640 / 2 - 40 + (i - menuIndexVertical[0] + 13) * 23);
			ctx_ui.fillText(p.weapons[i].type, 1137 / 2 + 144 - ctx_ui.measureText(p.weapons[i].type).width / 2, 640 / 2 - 40 + (i - menuIndexVertical[0] + 13) * 23);
			ctx_ui.fillText(p.weapons[i].effect, 1137 / 2 + 203 - ctx_ui.measureText(p.weapons[i].effect).width / 2, 640 / 2 - 40 + (i - menuIndexVertical[0] + 13) * 23);
			ctx_ui.fillText(p.weapons[i].cost, 1137 / 2 + 256 - ctx_ui.measureText(p.weapons[i].cost).width / 2, 640 / 2 - 40 + (i - menuIndexVertical[0] + 13) * 23);
			ctx_ui.fillText(p.weapons[i].weight, 1137 / 2 + 290 - ctx_ui.measureText(p.weapons[i].weight).width / 2, 640 / 2 - 40 + (i - menuIndexVertical[0] + 13) * 23);
		}
	} else {
		for (var i = 0; i < 14 && i < p.weapons.length; i++) {
			if (i == menuIndexVertical[0]) {
				ctx_ui.fillStyle = "#fdcc20";
			} else {
				ctx_ui.fillStyle = "white";
			}
			if (p.weapon === p.weapons[i])
				ctx_ui.fillText("E", 1137 / 2 + 8 - ctx_ui.measureText("E").width / 2, 640 / 2 - 40 + i * 23);
			ctx_ui.fillText(p.weapons[i].name, 1137 / 2 + 56 - ctx_ui.measureText(p.weapons[i].name).width / 2, 640 / 2 - 40 + i * 23);
			ctx_ui.fillText(p.weapons[i].damage, 1137 / 2 + 110 - ctx_ui.measureText(p.weapons[i].damage).width / 2, 640 / 2 - 40 + i * 23);
			ctx_ui.fillText(p.weapons[i].type, 1137 / 2 + 144 - ctx_ui.measureText(p.weapons[i].type).width / 2, 640 / 2 - 40 + i * 23);
			ctx_ui.fillText(p.weapons[i].effect, 1137 / 2 + 203 - ctx_ui.measureText(p.weapons[i].effect).width / 2, 640 / 2 - 40 + i * 23);
			ctx_ui.fillText(p.weapons[i].cost, 1137 / 2 + 256 - ctx_ui.measureText(p.weapons[i].cost).width / 2, 640 / 2 - 40 + i * 23);
			ctx_ui.fillText(p.weapons[i].weight, 1137 / 2 + 290 - ctx_ui.measureText(p.weapons[i].weight).width / 2, 640 / 2 - 40 + i * 23);
		}
	}
	if (displayInventorySubMenu[0] != -1) {
		var o = -245;
		ctx_ui.fillStyle = "#595652";
		ctx_ui.fillRect(1137 / 2 + 75 - o, 640 / 2 - 57 + displayInventorySubMenu[0] * 23, 160, 26);

		ctx_ui.strokeStyle = "#fdcc20";
		ctx_ui.beginPath();
		ctx_ui.rect(1137 / 2 + 75 - o, 640 / 2 - 57 + displayInventorySubMenu[0] * 23, 160, 26);
		ctx_ui.stroke();

		ctx_ui.fillStyle = "#fdcc20";
		switch (subMenuIndexHorizontal[0]) {
			case 0:
				if (p.weapon === p.weapons[displayInventorySubMenu[0]])
					ctx_ui.fillText("Unquip", 1137 / 2 + 85 - o, 640 / 2 - 40 + displayInventorySubMenu[0] * 23);
				else
					ctx_ui.fillText("Equip", 1137 / 2 + 85 - o, 640 / 2 - 40 + displayInventorySubMenu[0] * 23);

				ctx_ui.fillStyle = "white";
				ctx_ui.fillText("Drop", 1137 / 2 + 135 - o, 640 / 2 - 40 + displayInventorySubMenu[0] * 23);
				ctx_ui.fillText("Cancel", 1137 / 2 + 185 - o, 640 / 2 - 40 + displayInventorySubMenu[0] * 23);
				break;
			case 1:
				ctx_ui.fillText("Drop", 1137 / 2 + 135 - o, 640 / 2 - 40 + displayInventorySubMenu[0] * 23);
				ctx_ui.fillStyle = "white";
				if (p.weapon === p.weapons[displayInventorySubMenu[0]])
					ctx_ui.fillText("Unquip", 1137 / 2 + 85 - o, 640 / 2 - 40 + displayInventorySubMenu[0] * 23);
				else
					ctx_ui.fillText("Equip", 1137 / 2 + 85 - o, 640 / 2 - 40 + displayInventorySubMenu[0] * 23);
				ctx_ui.fillText("Cancel", 1137 / 2 + 185 - o, 640 / 2 - 40 + displayInventorySubMenu[0] * 23);
				break;
			case 2:
				ctx_ui.fillText("Cancel", 1137 / 2 + 185 - o, 640 / 2 - 40 + displayInventorySubMenu[0] * 23);
				ctx_ui.fillStyle = "white";
				if (p.weapon === p.weapons[displayInventorySubMenu[0]])
					ctx_ui.fillText("Unquip", 1137 / 2 + 85 - o, 640 / 2 - 40 + displayInventorySubMenu[0] * 23);
				else
					ctx_ui.fillText("Equip", 1137 / 2 + 85 - o, 640 / 2 - 40 + displayInventorySubMenu[0] * 23);
				ctx_ui.fillText("Drop", 1137 / 2 + 135 - o, 640 / 2 - 40 + displayInventorySubMenu[0] * 23);
				break;
		}

	}
}

function displayArmorCategory() {
	ctx_ui.beginPath();
	ctx_ui.fillText("Weapons", 1137 / 2 + 10, 640 / 2 - 130);
	ctx_ui.fillText("Items", 1137 / 2 + 180, 640 / 2 - 130);
	ctx_ui.fillText("Spells", 1137 / 2 + 10, 640 / 2 - 105);
	ctx_ui.fillText("Summons", 1137 / 2 + 80, 640 / 2 - 105);
	ctx_ui.fillText("Skills", 1137 / 2 + 181, 640 / 2 - 105);
	ctx_ui.fillStyle = "#fdcc20";
	ctx_ui.strokeStyle = "#fdcc20";
	ctx_ui.fillText("Armor", 1137 / 2 + 105, 640 / 2 - 130);
	ctx_ui.lineWidth = 2;
	ctx_ui.rect(1137 / 2 + 100, 640 / 2 - 148, 70, 25);
	ctx_ui.stroke();
	ctx_ui.fillStyle = "white";
	ctx_ui.font = "bold 16px Times";
	ctx_ui.fillText("Name", 1137 / 2 + 35, 640 / 2 - 68);
	ctx_ui.fillText("Def", 1137 / 2 + 93, 640 / 2 - 68);
	ctx_ui.fillText("Typ", 1137 / 2 + 131, 640 / 2 - 68);
	ctx_ui.fillText("Eff", 1137 / 2 + 195, 640 / 2 - 68);
	ctx_ui.fillText("Cost", 1137 / 2 + 240, 640 / 2 - 68);
	ctx_ui.fillText("Kg", 1137 / 2 + 280, 640 / 2 - 68);
	ctx_ui.font = "bold 14px Times";
	if (menuIndexVertical[1] > 13) {
		for (var i = menuIndexVertical[1] - 13; i <= menuIndexVertical[1] && i < p.equipment.length; i++) {
			if (i == menuIndexVertical[1]) {
				ctx_ui.fillStyle = "#fdcc20";
			} else {
				ctx_ui.fillStyle = "white";
			}
			if (p.head === p.equipment[i] || p.body === p.equipment[i] || p.gloves === p.equipment[i] || p.belt === p.equipment[i] || p.boots === p.equipment[i] || p.ring1 === p.equipment[i] || p.ring2 === p.equipment[i] || p.amulet === p.equipment[i])
				ctx_ui.fillText("E", 1137 / 2 + 8 - ctx_ui.measureText("E").width / 2, 640 / 2 - 40 + (i - menuIndexVertical[1] + 13) * 23);
			ctx_ui.fillText(p.equipment[i].name, 1137 / 2 + 56 - ctx_ui.measureText(p.equipment[i].name).width / 2, 640 / 2 - 40 + (i - menuIndexVertical[1] + 13) * 23);
			ctx_ui.fillText(p.equipment[i].defense, 1137 / 2 + 106 - ctx_ui.measureText(p.equipment[i].defense).width / 2, 640 / 2 - 40 + (i - menuIndexVertical[1] + 13) * 23);
			ctx_ui.fillText(p.equipment[i].type, 1137 / 2 + 144 - ctx_ui.measureText(p.equipment[i].type).width / 2, 640 / 2 - 40 + (i - menuIndexVertical[1] + 13) * 23);
			ctx_ui.fillText(p.equipment[i].effect, 1137 / 2 + 206 - ctx_ui.measureText(p.equipment[i].effect).width / 2, 640 / 2 - 40 + (i - menuIndexVertical[1] + 13) * 23);
			ctx_ui.fillText(p.equipment[i].cost, 1137 / 2 + 256 - ctx_ui.measureText(p.equipment[i].cost).width / 2, 640 / 2 - 40 + (i - menuIndexVertical[1] + 13) * 23);
			ctx_ui.fillText(p.equipment[i].weight, 1137 / 2 + 290 - ctx_ui.measureText(p.equipment[i].weight).width / 2, 640 / 2 - 40 + (i - menuIndexVertical[1] + 13) * 23);
		}
	} else {
		for (var i = 0; i < 14 && i < p.equipment.length; i++) {
			if (i == menuIndexVertical[1]) {
				ctx_ui.fillStyle = "#fdcc20";
			} else {
				ctx_ui.fillStyle = "white";
			}
			if (p.head === p.equipment[i] || p.body === p.equipment[i] || p.gloves === p.equipment[i] || p.belt === p.equipment[i] || p.boots === p.equipment[i] || p.ring1 === p.equipment[i] || p.ring2 === p.equipment[i] || p.amulet === p.equipment[i])
				ctx_ui.fillText("E", 1137 / 2 + 8 - ctx_ui.measureText("E").width / 2, 640 / 2 - 40 + i * 23);
			ctx_ui.fillText(p.equipment[i].name, 1137 / 2 + 56 - ctx_ui.measureText(p.equipment[i].name).width / 2, 640 / 2 - 40 + i * 23);
			ctx_ui.fillText(p.equipment[i].defense, 1137 / 2 + 106 - ctx_ui.measureText(p.equipment[i].defense).width / 2, 640 / 2 - 40 + i * 23);
			ctx_ui.fillText(p.equipment[i].type, 1137 / 2 + 144 - ctx_ui.measureText(p.equipment[i].type).width / 2, 640 / 2 - 40 + i * 23);
			ctx_ui.fillText(p.equipment[i].effect, 1137 / 2 + 206 - ctx_ui.measureText(p.equipment[i].effect).width / 2, 640 / 2 - 40 + i * 23);
			ctx_ui.fillText(p.equipment[i].cost, 1137 / 2 + 256 - ctx_ui.measureText(p.equipment[i].cost).width / 2, 640 / 2 - 40 + i * 23);
			ctx_ui.fillText(p.equipment[i].weight, 1137 / 2 + 290 - ctx_ui.measureText(p.equipment[i].weight).width / 2, 640 / 2 - 40 + i * 23);
		}
	}
	if (displayInventorySubMenu[1] != -1) {
		var o = -245;
		ctx_ui.fillStyle = "#595652";
		ctx_ui.fillRect(1137 / 2 + 75 - o, 640 / 2 - 57 + displayInventorySubMenu[1] * 23, 160, 26);

		ctx_ui.strokeStyle = "#fdcc20";
		ctx_ui.beginPath();
		ctx_ui.rect(1137 / 2 + 75 - o, 640 / 2 - 57 + displayInventorySubMenu[1] * 23, 160, 26);
		ctx_ui.stroke();

		ctx_ui.fillStyle = "#fdcc20";
		switch (subMenuIndexHorizontal[1]) {
			case 0:
				if (p.head === p.equipment[displayInventorySubMenu[1]] ||
					p.body === p.equipment[displayInventorySubMenu[1]] ||
					p.gloves === p.equipment[displayInventorySubMenu[1]] ||
					p.belt === p.equipment[displayInventorySubMenu[1]] ||
					p.boots === p.equipment[displayInventorySubMenu[1]] ||
					p.ring1 === p.equipment[displayInventorySubMenu[1]] ||
					p.ring2 === p.equipment[displayInventorySubMenu[1]] ||
					p.amulet === p.equipment[displayInventorySubMenu[1]])
					ctx_ui.fillText("Unquip", 1137 / 2 + 85 - o, 640 / 2 - 40 + displayInventorySubMenu[1] * 23);
				else
					ctx_ui.fillText("Equip", 1137 / 2 + 85 - o, 640 / 2 - 40 + displayInventorySubMenu[1] * 23);

				ctx_ui.fillStyle = "white";
				ctx_ui.fillText("Drop", 1137 / 2 + 135 - o, 640 / 2 - 40 + displayInventorySubMenu[1] * 23);
				ctx_ui.fillText("Cancel", 1137 / 2 + 185 - o, 640 / 2 - 40 + displayInventorySubMenu[1] * 23);
				break;
			case 1:
				ctx_ui.fillText("Drop", 1137 / 2 + 135 - o, 640 / 2 - 40 + displayInventorySubMenu[1] * 23);
				ctx_ui.fillStyle = "white";
				if (p.head === p.equipment[displayInventorySubMenu[1]] ||
					p.body === p.equipment[displayInventorySubMenu[1]] ||
					p.gloves === p.equipment[displayInventorySubMenu[1]] ||
					p.belt === p.equipment[displayInventorySubMenu[1]] ||
					p.boots === p.equipment[displayInventorySubMenu[1]] ||
					p.ring1 === p.equipment[displayInventorySubMenu[1]] ||
					p.ring2 === p.equipment[displayInventorySubMenu[1]] ||
					p.amulet === p.equipment[displayInventorySubMenu[1]])
					ctx_ui.fillText("Unquip", 1137 / 2 + 85 - o, 640 / 2 - 40 + displayInventorySubMenu[1] * 23);
				else
					ctx_ui.fillText("Equip", 1137 / 2 + 85 - o, 640 / 2 - 40 + displayInventorySubMenu[1] * 23);
				ctx_ui.fillText("Cancel", 1137 / 2 + 185 - o, 640 / 2 - 40 + displayInventorySubMenu[1] * 23);
				break;
			case 2:
				ctx_ui.fillText("Cancel", 1137 / 2 + 185 - o, 640 / 2 - 40 + displayInventorySubMenu[1] * 23);
				ctx_ui.fillStyle = "white";
				if (p.head === p.equipment[displayInventorySubMenu[1]] ||
					p.body === p.equipment[displayInventorySubMenu[1]] ||
					p.gloves === p.equipment[displayInventorySubMenu[1]] ||
					p.belt === p.equipment[displayInventorySubMenu[1]] ||
					p.boots === p.equipment[displayInventorySubMenu[1]] ||
					p.ring1 === p.equipment[displayInventorySubMenu[1]] ||
					p.ring2 === p.equipment[displayInventorySubMenu[1]] ||
					p.amulet === p.equipment[displayInventorySubMenu[1]])
					ctx_ui.fillText("Unquip", 1137 / 2 + 85 - o, 640 / 2 - 40 + displayInventorySubMenu[1] * 23);
				else
					ctx_ui.fillText("Equip", 1137 / 2 + 85 - o, 640 / 2 - 40 + displayInventorySubMenu[1] * 23);
				ctx_ui.fillText("Drop", 1137 / 2 + 135 - o, 640 / 2 - 40 + displayInventorySubMenu[1] * 23);
				break;
		}

	}
}

function displayItemCategory() {
	ctx_ui.beginPath();
	ctx_ui.fillText("Weapons", 1137 / 2 + 10, 640 / 2 - 130);
	ctx_ui.fillText("Spells", 1137 / 2 + 10, 640 / 2 - 105);
	ctx_ui.fillText("Summons", 1137 / 2 + 80, 640 / 2 - 105);
	ctx_ui.fillText("Armor", 1137 / 2 + 105, 640 / 2 - 130);
	ctx_ui.fillText("Skills", 1137 / 2 + 181, 640 / 2 - 105);
	ctx_ui.fillStyle = "#fdcc20";
	ctx_ui.strokeStyle = "#fdcc20";
	ctx_ui.fillText("Items", 1137 / 2 + 180, 640 / 2 - 130);
	ctx_ui.lineWidth = 2;
	ctx_ui.rect(1137 / 2 + 175, 640 / 2 - 148, 58, 25);
	ctx_ui.stroke();

	ctx_ui.fillStyle = "white";
	ctx_ui.font = "bold 16px Times";
	ctx_ui.fillText("Num", 1137 / 2 + 15, 640 / 2 - 68);
	ctx_ui.fillText("Name", 1137 / 2 + 70, 640 / 2 - 68);
	ctx_ui.fillText("Typ", 1137 / 2 + 146, 640 / 2 - 68);
	ctx_ui.fillText("Eff", 1137 / 2 + 209, 640 / 2 - 68);
	ctx_ui.fillText("Cost", 1137 / 2 + 245, 640 / 2 - 68);
	ctx_ui.fillText("Kg", 1137 / 2 + 280, 640 / 2 - 68);
	ctx_ui.font = "bold 14px Times";
	if (menuIndexVertical[2] > 13) {
		for (var i = menuIndexVertical[2] - 13; i <= menuIndexVertical[2] && i < p.items.length; i++) {
			if (i == menuIndexVertical[2]) {
				ctx_ui.fillStyle = "#fdcc20";
			} else {
				ctx_ui.fillStyle = "white";
			}
			//if (p.head === p.equipment[i] || p.body === p.equipment[i] || p.gloves === p.equipment[i] || p.belt === p.equipment[i] || p.boots === p.equipment[i] || p.ring1 === p.equipment[i] || p.ring2 === p.equipment[i] || p.amulet === p.equipment[i])
			//ctx_ui.fillText("E", 1137 / 2 + 8 - ctx_ui.measureText("E").width / 2, 640 / 2 - 40 + (i - menuIndexVertical[1] + 13) * 23);
			if (displayItemBox == i) {
				ctx_ui.fillText(displayItemBox, 1137 / 2 + 30 - ctx_ui.measureText(p.items[i].num).width / 2, 640 / 2 - 40 + (i - menuIndexVertical[2] + 13) * 23);

			}
			ctx_ui.fillText(p.items[i].num, 1137 / 2 + 30 - ctx_ui.measureText(p.items[i].num).width / 2, 640 / 2 - 40 + (i - menuIndexVertical[2] + 13) * 23);
			ctx_ui.fillText(p.items[i].name, 1137 / 2 + 90 - ctx_ui.measureText(p.items[i].name).width / 2, 640 / 2 - 40 + (i - menuIndexVertical[2] + 13) * 23);
			ctx_ui.fillText(p.items[i].type, 1137 / 2 + 164 - ctx_ui.measureText(p.items[i].type).width / 2, 640 / 2 - 40 + (i - menuIndexVertical[2] + 13) * 23);
			ctx_ui.fillText(p.items[i].effect, 1137 / 2 + 220 - ctx_ui.measureText(p.items[i].effect).width / 2, 640 / 2 - 40 + (i - menuIndexVertical[2] + 13) * 23);
			ctx_ui.fillText(p.items[i].cost, 1137 / 2 + 261 - ctx_ui.measureText(p.items[i].cost).width / 2, 640 / 2 - 40 + (i - menuIndexVertical[2] + 13) * 23);
			ctx_ui.fillText(p.items[i].weight, 1137 / 2 + 290 - ctx_ui.measureText(p.items[i].weight).width / 2, 640 / 2 - 40 + (i - menuIndexVertical[2] + 13) * 23);
		}
	} else {
		for (var i = 0; i < 14 && i < p.items.length; i++) {
			if (i == menuIndexVertical[2]) {
				ctx_ui.fillStyle = "#fdcc20";
			} else {
				ctx_ui.fillStyle = "white";
			}
			//if (p.head === p.equipment[i] || p.body === p.equipment[i] || p.gloves === p.equipment[i] || p.belt === p.equipment[i] || p.boots === p.equipment[i] || p.ring1 === p.equipment[i] || p.ring2 === p.equipment[i] || p.amulet === p.equipment[i])
			//	ctx_ui.fillText("E", 1137 / 2 + 8 - ctx_ui.measureText("E").width / 2, 640 / 2 - 40 + i * 23);

			ctx_ui.fillText(p.items[i].num, 1137 / 2 + 30 - ctx_ui.measureText(p.items[i].num).width / 2, 640 / 2 - 40 + i * 23);
			ctx_ui.fillText(p.items[i].name, 1137 / 2 + 90 - ctx_ui.measureText(p.items[i].name).width / 2, 640 / 2 - 40 + i * 23);
			ctx_ui.fillText(p.items[i].type, 1137 / 2 + 164 - ctx_ui.measureText(p.items[i].type).width / 2, 640 / 2 - 40 + i * 23);
			ctx_ui.fillText(p.items[i].effect, 1137 / 2 + 220 - ctx_ui.measureText(p.items[i].effect).width / 2, 640 / 2 - 40 + i * 23);
			ctx_ui.fillText(p.items[i].cost, 1137 / 2 + 261 - ctx_ui.measureText(p.items[i].cost).width / 2, 640 / 2 - 40 + i * 23);
			ctx_ui.fillText(p.items[i].weight, 1137 / 2 + 290 - ctx_ui.measureText(p.items[i].weight).width / 2, 640 / 2 - 40 + i * 23);

		}

		if (displayInventorySubMenu[2] != -1) {			
			var o = -245;
			ctx_ui.fillStyle = "#595652";
			ctx_ui.fillRect(1137 / 2 + 75 - o, 640 / 2 - 57 + displayInventorySubMenu[2] * 23, 160, 26);

			ctx_ui.strokeStyle = "#fdcc20";
			ctx_ui.beginPath();
			ctx_ui.rect(1137 / 2 + 75 - o, 640 / 2 - 57 + displayInventorySubMenu[2] * 23, 160, 26);
			ctx_ui.stroke();

			ctx_ui.fillStyle = "#fdcc20";
			switch (subMenuIndexHorizontal[2]) {
				case 0:
					ctx_ui.fillText("Use", 1137 / 2 + 85 - o, 640 / 2 - 40 + displayInventorySubMenu[2] * 23);
					ctx_ui.fillStyle = "white";
					ctx_ui.fillText("Drop", 1137 / 2 + 135 - o, 640 / 2 - 40 + displayInventorySubMenu[2] * 23);
					ctx_ui.fillText("Cancel", 1137 / 2 + 185 - o, 640 / 2 - 40 + displayInventorySubMenu[2] * 23);
					break;
				case 1:
					ctx_ui.fillText("Drop", 1137 / 2 + 135 - o, 640 / 2 - 40 + displayInventorySubMenu[2] * 23);
					ctx_ui.fillStyle = "white";
					ctx_ui.fillText("Use", 1137 / 2 + 85 - o, 640 / 2 - 40 + displayInventorySubMenu[2] * 23);
					ctx_ui.fillText("Cancel", 1137 / 2 + 185 - o, 640 / 2 - 40 + displayInventorySubMenu[2] * 23);

					ctx_ui.fillStyle = "#595652";
					ctx_ui.fillRect(1137 / 2 + 75 - o, 640 / 2 - 30 + displayInventorySubMenu[2] * 23, 160, 26);

					ctx_ui.strokeStyle = "#fdcc20";
					ctx_ui.beginPath();
					ctx_ui.rect(1137 / 2 + 75 - o, 640 / 2 - 30 + displayInventorySubMenu[2] * 23, 160, 26);
					ctx_ui.stroke();

					ctx_ui.fillStyle = "white";
					ctx_ui.fillText(subMenuIndexVertical, 1137 / 2 + 152 - o - ctx_ui.measureText(subMenuIndexVertical).width / 2, 640 / 2 - 13 + displayInventorySubMenu[2] * 23);
					ctx_ui.beginPath();
					ctx_ui.moveTo(1137 / 2 + 149 - o, 640 / 2 - 25 + displayInventorySubMenu[2] * 23);
					ctx_ui.lineTo(1137 / 2 + 152 - o, 640 / 2 - 27 + displayInventorySubMenu[2] * 23);
					ctx_ui.lineTo(1137 / 2 + 155 - o, 640 / 2 - 25 + displayInventorySubMenu[2] * 23);
					ctx_ui.stroke();

					ctx_ui.beginPath();
					ctx_ui.moveTo(1137 / 2 + 149 - o, 640 / 2 - 10 + displayInventorySubMenu[2] * 23);
					ctx_ui.lineTo(1137 / 2 + 152 - o, 640 / 2 - 8 + displayInventorySubMenu[2] * 23);
					ctx_ui.lineTo(1137 / 2 + 155 - o, 640 / 2 - 10 + displayInventorySubMenu[2] * 23);
					ctx_ui.stroke();
					break;
				case 2:
					ctx_ui.fillText("Cancel", 1137 / 2 + 185 - o, 640 / 2 - 40 + displayInventorySubMenu[2] * 23);
					ctx_ui.fillStyle = "white";
					ctx_ui.fillText("Use", 1137 / 2 + 85 - o, 640 / 2 - 40 + displayInventorySubMenu[2] * 23);
					ctx_ui.fillText("Drop", 1137 / 2 + 135 - o, 640 / 2 - 40 + displayInventorySubMenu[2] * 23);
					break;
			}
		}
	}
}