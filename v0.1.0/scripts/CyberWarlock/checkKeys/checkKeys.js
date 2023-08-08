
function checkKeys() {
    if (!displayMenu) {
        if (keysDown["i"]) {
            if (!pauseMenu) {
                displayMenu = !displayMenu;
                ctx_ui.clearRect(1137 / 2 - 344, 640 / 2 - 320, 760, 632)
                drawUiLayer(false);
            }
            keysDown["i"] = false;
        }
        else if (keysDown["p"]) {
            pauseMenu = !pauseMenu;
            if (!pauseMenu) {
                ctx_ui.globalAlpha = 1
                ctx_ui.fillStyle = "black";
                ctx_ui.clearRect(0, 0, 1137, 640);
                drawUiLayer(false);
            }
            keysDown["p"] = false;
        }
        checkMainGameKeys();
    }
    else if (keysDown["i"]
        && displayInventorySubMenu[0] == -1
        && displayInventorySubMenu[1] == -1
        && displayInventorySubMenu[2] == -1
        && displayInventorySubMenu[3] == -1
        && displayInventorySubMenu[4] == -1
        && displayInventorySubMenu[5] == -1
    ) {
        if (!pauseMenu) {
            displayMenu = !displayMenu;
            ctx_ui.clearRect(1137 / 2 - 344, 640 / 2 - 320, 760, 632)
            drawUiLayer(false);
        }
        keysDown["i"] = false;
    }
    else if (keysDown["p"]) {
        if (!displayMenu) {
            pauseMenu = !pauseMenu;
            if (!pauseMenu) {
                ctx_ui.globalAlpha = 1
                ctx_ui.fillStyle = "black";
                ctx_ui.clearRect(0, 0, 1137, 640);
                drawUiLayer(false);
            }
        }
        keysDown["p"] = false;
    }
    else if (displayInventorySubMenu[0] != -1) {
        checkWeaponSubMenuKeys();
    }
    else if (displayInventorySubMenu[1] != -1) {
        checkArmorSubMenuKeys();
    }
    else if (displayInventorySubMenu[2] != -1) {
        checkItemSubMenuKeys();
    }

    else {
        checkInventoryMenuKeys();
    }
    setTimeout(checkKeys, 1);
}

function checkPlayerDirection() {
    /*if (p.dir == "Right") {
        //p.image = "standRight"
        game["possibleEntities"]["player"]["animation"]="standRight";
    } else {
        //p.image = "standLeft"
        game["possibleEntities"]["player"]["animation"]="standLeft";
    }
    if(keysDown["w"]){
        game["possibleEntities"]["player"]["animation"]="runUp";
    }
    if(keysDown["s"]){
        game["possibleEntities"]["player"]["animation"]="runDown";
    }*/
}
function setPlayerRunRight() {
   
    
    game["possibleEntities"]["player"]["dir"] = "Right";
    game["possibleEntities"]["player"]["animation"] = "runRight";
    tempData = Math.floor(((p.x + p.offsetX+50) + (p.y + p.offsetY) * 5000) * 4);
    if (data[tempData] == 0) {
        p.offsetX--;
    }
    else{
        tempData = Math.floor(((p.x + p.offsetX+50) + (p.y + p.offsetY + 50) * 5000) * 4);
        if (data[tempData] == 0) {
            p.offsetX--;
        } 
    }
}
function setPlayerRunLeft() {
  
    
    game["possibleEntities"]["player"]["dir"] = "Left";
    game["possibleEntities"]["player"]["animation"] = "runLeft";

    tempData = Math.floor(((p.x + p.offsetX) + (p.y + p.offsetY) * 5000) * 4);
    if (data[tempData] == 0) {
        p.offsetX++;
    }
    else{
    tempData = Math.floor(((p.x + p.offsetX) + (p.y + p.offsetY + 50) * 5000) * 4);
    if (data[tempData] == 0) {
        p.offsetX++;
    }
}
}
function setPlayerRunUp() {
    
    
    game["possibleEntities"]["player"]["dir"] = "Up";
    game["possibleEntities"]["player"]["animation"] = "runUp";
    if (p.y <= 1) {
        if (game["maps"][game["maps"]["y"] - 1][game["maps"]["x"]]) {
            game["maps"]["y"] = game["maps"]["y"] - 1;
            //p.y=1;
            //p.offsetY=0;
            currentMap.src = "images/Maps/" + "map" + game["maps"]["y"] + game["maps"]["x"] + ".png";
            currentMap.onload = function () {
                ctx_game.clearRect(p.x - 10, p.y - 10, 60, 60);
                p.y = 640 - 50;
                p.offsetY = currentMap.height - 640
                loadBackground();
                drawBackground();
            }
        }
    }
    else {
        tempData = Math.floor(((p.x + p.offsetX) + (p.y + p.offsetY - 1) * 5000) * 4);
        if (data[tempData] == 0) {
            p.offsetY++;
        }
        else{
            tempData = Math.floor(((p.x + p.offsetX + 50) + (p.y + p.offsetY - 1) * 5000) * 4);
            if (data[tempData] == 0) {
                p.offsetY++;
            }   
        }
    }

}
function setPlayerRunDown() {
   

    game["possibleEntities"]["player"]["dir"] = "Down";
    game["possibleEntities"]["player"]["animation"] = "runDown";
    if (p.y >= 640 - 50) {
        if (game["maps"][game["maps"]["y"] + 1][game["maps"]["x"]]) {
            game["maps"]["y"] = game["maps"]["y"] + 1;
            ctx_game.clearRect(p.x - 10, p.y - 10, 60, 60);
            p.y = 1;
            p.offsetY = 0;
            currentMap.src = "images/Maps/" + "map" + game["maps"]["y"] + game["maps"]["x"] + ".png";
            currentMap.onload = function () {
                currentMapBackground.src="images/Maps/" + "map" + game["maps"]["y"] + game["maps"]["x"] + "background.png";  
                
                currentMapBackground.onload=function(){                    
	            ctx_background_collision.drawImage(currentMapBackground,0,0);
	            data = ctx_background_collision.getImageData(0,0,5000,5000).data;
                loadBackground();
                drawBackground();
             }
            }
        
        }
    }
    else {
        tempData = Math.floor(((p.x + p.offsetX) + (p.y + p.offsetY +51) * 5000) * 4);
        if (data[tempData] == 0) {
            p.offsetY--;
        }
        else{           
        tempData = Math.floor(((p.x + p.offsetX + 50) + (p.y + p.offsetY +51) * 5000) * 4);
        if (data[tempData] == 0) {
            p.offsetY--;
        } 
        }
    }
}
function checkMainGameKeys() {
    if (game["possibleEntities"]["player"]["attackFrameCount"] == 0) {
        var onCorner = false;
        //Top Left
        if (p.offsetX < 0 && p.offsetY < 1) {
            onCorner = true;
            if (keysDown["d"]) {
                p.x += 1;
                if (p.x > 1137 / 2 - 20) {
                    p.offsetX += 1;
                    p.x = 1137 / 2 - 20;
                }
                setPlayerRunRight()
                p.defend = false;
                drawBackground();
            } else if (keysDown["a"]) {
                p.x -= 1;
                if (p.x < 0)
                    p.x = 0;
                setPlayerRunLeft()
                p.defend = false;
                drawBackground();
            }
            else if (keysDown["w"]) {
                p.y -= 1;
                if (p.y < 0)
                    p.y = 0;
                p.defend = false;
                //checkPlayerDirection()
                setPlayerRunUp()
                drawBackground();
            } else if (keysDown["s"]) {
                p.y += 1;
                if (p.y > 640 / 2 - 50) {
                    p.offsetY += 1;
                    p.y = 640 / 2 - 50;
                }
                p.defend = false;
                //checkPlayerDirection()
                setPlayerRunDown()
                drawBackground();
            }
        }
        //Top Right
        else if (p.offsetX > currentMap.width - 1137/*3863*/ && p.offsetY < 1) {
            onCorner = true;
            if (keysDown["d"]) {
                p.x += 1;
                if (p.x > 1137 - 50)
                    p.x = 1137 - 50;
                setPlayerRunRight()
                p.defend = false;
                drawBackground();
            } else if (keysDown["a"]) {
                p.x -= 1;
                if (p.x < 1137 / 2 - 20) {
                    p.offsetX -= 1;
                    p.x = 1137 / 2 - 20;
                }
                setPlayerRunLeft()
                p.defend = false;
                drawBackground();
            }
            else if (keysDown["w"]) {
                p.y -= 1;
                if (p.y < 0)
                    p.y = 0;
                p.defend = false;
                //checkPlayerDirection()
                setPlayerRunUp()
                drawBackground();
            } else if (keysDown["s"]) {
                p.y += 1;
                if (p.y > 640 / 2 - 50) {
                    p.offsetY += 1;
                    p.y = 640 / 2 - 50;
                }
                p.defend = false;
                //checkPlayerDirection()
                setPlayerRunDown()
                drawBackground();
            }
        }
        //Bottom Right 
        else if (p.offsetX > currentMap.width - 1137/*3863*/ && p.offsetY > currentMap.height - 641/*4359*/) {
            onCorner = true;
            if (keysDown["d"]) {
                p.x += 1;
                if (p.x > 1137 - 50)
                    p.x = 1137 - 50;
                setPlayerRunRight()
                p.defend = false;
                drawBackground();
            } else if (keysDown["a"]) {
                p.x -= 1;
                if (p.x < 1137 / 2 - 20) {
                    p.offsetX -= 1;
                    p.x = 1137 / 2 - 20;
                }
                setPlayerRunLeft()
                p.defend = false;
                drawBackground();
            }
            else if (keysDown["w"]) {
                p.y -= 1;
                if (p.y < 640 / 2 - 50) {
                    p.offsetY -= 1;
                    p.y = 640 / 2 - 50;
                }
                p.defend = false;
                checkPlayerDirection()
                drawBackground();
            } else if (keysDown["s"]) {
                p.y += 1;
                if (p.y > 640 - 50)
                    p.y = 640 - 50;

                p.defend = false;
                checkPlayerDirection()
                drawBackground();
            }
        }
        //Bottom left 
        else if (p.offsetX < 0 && p.offsetY > currentMap.height - 641/*4359*/) {
            onCorner = true;
            if (keysDown["d"]) {
                p.x += 1;
                if (p.x > 1137 / 2 - 20) {
                    p.offsetX += 1;
                    p.x = 1137 / 2 - 20;
                }
                setPlayerRunRight()
                p.defend = false;
                drawBackground();
            } else if (keysDown["a"]) {
                p.x -= 1;
                if (p.x < 0)
                    p.x = 0;
                setPlayerRunLeft()
                p.defend = false;
                drawBackground();
            }
            else if (keysDown["w"]) {
                p.y -= 1;
                if (p.y < 640 / 2 - 50) {
                    p.offsetY -= 1;
                    p.y = 640 / 2 - 50;
                }
                p.defend = false;
                checkPlayerDirection()
                drawBackground();
            } else if (keysDown["s"]) {
                p.y += 1;
                if (p.y > 640 - 50)
                    p.y = 640 - 50;

                p.defend = false;
                checkPlayerDirection()
                drawBackground();
            }
        }
        //Top
        else if (p.offsetY < 1) {
            onCorner = true;
            if (keysDown["d"]) {
                p.offsetX += 1;
                setPlayerRunRight()
                p.defend = false;
                drawBackground();
            } else if (keysDown["a"]) {
                p.offsetX -= 1;
                if (p.x < 1137 / 2 - 20) {
                    p.offsetX -= 1;
                    p.x = 1137 / 2 - 20;
                }
                setPlayerRunLeft()
                p.defend = false;
                drawBackground();
            }
            else if (keysDown["w"]) {
                p.y -= 1;
                if (p.y < 0)
                    p.y = 0;
                p.defend = false;
                checkPlayerDirection()
                setPlayerRunUp();
                drawBackground();
            } else if (keysDown["s"]) {
                p.y += 1;
                if (p.y > 640 / 2 - 50) {
                    p.offsetY += 1;
                    p.y = 640 / 2 - 50;
                }
                p.defend = false;
                checkPlayerDirection()
                setPlayerRunDown();
                drawBackground();
            }
        }
        //Bottom
        else if (p.offsetY > currentMap.height - 641/*4359*/) {
            onCorner = true;
            if (keysDown["d"]) {
                p.offsetX += 1;
                setPlayerRunRight()
                p.defend = false;
                drawBackground();
            } else if (keysDown["a"]) {
                p.offsetX -= 1;
                if (p.x < 1137 / 2 - 20) {
                    p.offsetX -= 1;
                    p.x = 1137 / 2 - 20;
                }
                setPlayerRunLeft()
                p.defend = false;
                drawBackground();
            }
            else if (keysDown["w"]) {
                p.y -= 1;
                if (p.y < 640 / 2 - 50) {
                    p.offsetY -= 1;
                    p.y = 640 / 2 - 50;
                }
                p.defend = false;
                //checkPlayerDirection()
                setPlayerRunUp()
                drawBackground();
            } else if (keysDown["s"]) {
                p.y += 1;
                if (p.y > 640 - 50)
                    p.y = 640 - 50;

                p.defend = false;
                //checkPlayerDirection()
                setPlayerRunDown()
                drawBackground();
            }
        }
        //Left
        else if (p.offsetX <= 0) {
            onCorner = true;
            if (keysDown["d"]) {
                p.x += 1;
                if (p.x > 1137 / 2 - 20) {
                    p.offsetX += 1;
                    p.x = 1137 / 2 - 20;
                }
                setPlayerRunRight()
                p.defend = false;
                drawBackground();
            } else if (keysDown["a"]) {
                p.x -= 1;
                if (p.x < 0)
                    p.x = 0;
                setPlayerRunLeft()
                p.defend = false;
                drawBackground();
            }
            else if (keysDown["w"]) {
                p.offsetY -= 1;
                p.defend = false;
                //checkPlayerDirection()
                setPlayerRunUp()
                drawBackground();
            } else if (keysDown["s"]) {
                p.offsetY += 1;
                p.defend = false;
                //checkPlayerDirection()
                setPlayerRunDown()
                drawBackground();
            }
        }
        //Right
        else if (p.offsetX > currentMap.width - 1137/*3863*/) {
            onCorner = true;
            if (keysDown["d"]) {
                p.x += 1;
                if (p.x > 1137 - 50)
                    p.x = 1137 - 50;
                setPlayerRunRight()
                p.defend = false;
                drawBackground();
            } else if (keysDown["a"]) {
                p.x -= 1;
                if (p.x < 1137 / 2 - 20) {
                    p.offsetX -= 1;
                    p.x = 1137 / 2 - 20;
                }
                setPlayerRunLeft()
                p.defend = false;
                drawBackground();
            }
            else if (keysDown["w"]) {
                p.offsetY -= 1;
                p.defend = false;
                //checkPlayerDirection()
                setPlayerRunUp()
                drawBackground();
            } else if (keysDown["s"]) {
                p.offsetY += 1;
                p.defend = false;
                //checkPlayerDirection()
                setPlayerRunDown()
                drawBackground();
            }
        }
        if (!onCorner) {
            if (keysDown["d"]) {
                p.offsetX += 1;
                p.defend = false;
                drawBackground();
                setPlayerRunRight()
            } else if (keysDown["a"]) {
                p.offsetX -= 1;
                p.defend = false;
                setPlayerRunLeft()
                drawBackground();
            } else if (keysDown["w"]) {
                p.offsetY -= 1;
                p.defend = false;
                //checkPlayerDirection()
                setPlayerRunUp()
                drawBackground();
            } else if (keysDown["s"]) {
                p.offsetY += 1;
                p.defend = false;
                //checkPlayerDirection()
                setPlayerRunDown()
                drawBackground();
            }
        }
        if (keysDown["e"]) {
            this.equip = !this.equip
            keysDown["e"] = false;
            p.defend = false;
        }
        if (keysDown["r"]) {
            p.defend = !p.defend;
            if (p.defend) {
                if (game["possibleEntities"]["player"]["dir"] == "Left") {
                    p.image = "defendLeft";
                    game["possibleEntities"]["player"]["animation"] = "defendLeft";
                }
                else {
                    p.image = "defendRight";
                    game["possibleEntities"]["player"]["animation"] = "defendRight";
                }
            } else {
                switch (game["possibleEntities"]["player"]["dir"]) {
                    case "Right":
                        game["possibleEntities"]["player"]["animation"] = "standRight";
                        break;
                    case "Left":
                        game["possibleEntities"]["player"]["animation"] = "standLeft";
                        break;
                    case "Up":
                        game["possibleEntities"]["player"]["animation"] = "standUp";
                        break;
                    case "Down":
                        game["possibleEntities"]["player"]["animation"] = "standDown";
                        break;
                }
            }
            keysDown["r"] = false;
        }
        if (keysDown["c"]) {
            p.x = (1137 / 2) - 20;
            p.y = (640 / 2) - 50;
            center = !center;
            keysDown["c"] = false;
        }
        if (keysDown[" "]) {
            p.defend = false;
            game["possibleEntities"]["player"]["animation"] = "attack";
            if (p.dir == "Right") {
                p.image = "attackRight1";
            } else {
                p.image = "attackLeft1";
            }
            keysDown[" "] = false;
        }
        if (keysDown["t"]) {
            game["possibleEntities"]["player"]["weapon"]["index"]++;
            if (game["possibleEntities"]["player"]["weapon"]["index"] == 4) {
                game["possibleEntities"]["player"]["weapon"]["index"] = -1
            }
            keysDown["t"] = false;
        }
        if (keysDown["Shift"]) {
            // game["possibleEntities"]["player"]["animation"]="activate";
            console.log(pixelData);
        }
    }
}

function checkWeaponSubMenuKeys() {
    checkNavigateInventoryMenuKeys(0);
    if (keysDown[" "]) {
        //ctx_ui.clearRect(1137 / 2 + 75 + 245, 640 / 2 - 58 + displayInventorySubMenu[0] * 23, 162, 28);
        ctx_ui.clearRect(1137 / 2 + 75 + 245, 640 / 2 - 60 + displayInventorySubMenu[0] * 23, 162, 60);
        switch (subMenuIndexHorizontal[0]) {
            case 0:
                if (p.weapon === p.weapons[menuIndexVertical[0]]) {
                    p.weapon = null;
                } else {
                    p.weapon = p.weapons[menuIndexVertical[0]];
                }
                displayInventorySubMenu[0] = -1;
                break;
            case 1:
                if (p.weapon == p.weapons[menuIndexVertical[0]])
                    p.weapon = null;
                p.weapons.splice(menuIndexVertical[0], 1);
                displayInventorySubMenu[0] = -1;
                break;
            case 2:
                displayInventorySubMenu[0] = -1;
                break;
        }
        subMenuIndexHorizontal[0] = 2;
        keysDown[" "] = false;
        drawUiLayer(false);
    }
}

function checkArmorSubMenuKeys() {
    checkNavigateInventoryMenuKeys(1);
    if (keysDown[" "]) {
        ctx_ui.clearRect(1137 / 2 + 75 + 245, 640 / 2 - 58 + displayInventorySubMenu[1] * 23, 162, 28);

        switch (subMenuIndexHorizontal[1]) {
            case 0:
                if (p.head === p.equipment[menuIndexVertical[1]]) {
                    p.head = null;
                } else if (p.body === p.equipment[menuIndexVertical[1]]) {
                    p.body = null;
                } else if (p.glove === p.equipment[menuIndexVertical[1]]) {
                    p.gloves = null;
                } else if (p.belt === p.equipment[menuIndexVertical[1]]) {
                    p.belt = null;
                } else if (p.boots === p.equipment[menuIndexVertical[1]]) {
                    p.boots = null;
                } else if (p.ring1 === p.equipment[menuIndexVertical[1]]) {
                    p.ring1 = null;
                } else if (p.ring2 === p.equipment[menuIndexVertical[1]]) {
                    p.ring2 = null;
                } else if (p.amulet === p.equipment[menuIndexVertical[1]]) {
                    p.amulet = null;
                } else {
                    if (p.equipment[menuIndexVertical[1]].type == "Hood" || p.equipment[menuIndexVertical[1]].type == "Helm")
                        p.head = p.equipment[menuIndexVertical[1]];
                    else if (p.equipment[menuIndexVertical[1]].type == "Chest" || p.equipment[menuIndexVertical[1]].type == "Robe")
                        p.body = p.equipment[menuIndexVertical[1]];
                    else if (p.equipment[menuIndexVertical[1]].type == "Bracelet" || p.equipment[menuIndexVertical[1]].type == "Gloves")
                        p.gloves = p.equipment[menuIndexVertical[1]];
                    else if (p.equipment[menuIndexVertical[1]].type == "Belt")
                        p.belt = p.equipment[menuIndexVertical[1]];
                    else if (p.equipment[menuIndexVertical[1]].type == "Boots")
                        p.boots = p.equipment[menuIndexVertical[1]];
                    else if (p.equipment[menuIndexVertical[1]].type == "Amulet" || p.equipment[menuIndexVertical[1]].type == "Necklace")
                        p.amulet = p.equipment[menuIndexVertical[1]];
                    else if (p.equipment[menuIndexVertical[1]].type == "Ring") {
                        if (p.ring1 == null) {
                            p.ring1 = p.equipment[menuIndexVertical[1]];
                        } else if (p.ring2 == null) {
                            p.ring2 = p.equipment[menuIndexVertical[1]];
                        } else {
                            p.ring1 = p.ring2;
                            p.ring2 = p.equipment[menuIndexVertical[1]];
                        }
                    }
                }
                displayInventorySubMenu[1] = -1;
                break;
            case 1:
                if (p.head === p.equipment[menuIndexVertical[1]]) {
                    p.head = null;
                } else if (p.body === p.equipment[menuIndexVertical[1]]) {
                    p.body = null;
                } else if (p.glove === p.equipment[menuIndexVertical[1]]) {
                    p.gloves = null;
                } else if (p.belt === p.equipment[menuIndexVertical[1]]) {
                    p.belt = null;
                } else if (p.boots === p.equipment[menuIndexVertical[1]]) {
                    p.boots = null;
                } else if (p.ring1 === p.equipment[menuIndexVertical[1]]) {
                    p.ring1 = null;
                } else if (p.ring2 === p.equipment[menuIndexVertical[1]]) {
                    p.ring2 = null;
                } else if (p.amulet === p.equipment[menuIndexVertical[1]]) {
                    p.amulet = null;
                }
                p.equipment.splice(menuIndexVertical[1], 1);
                displayInventorySubMenu[1] = -1;
                break;
            case 2:
                displayInventorySubMenu[1] = -1;
                break;

        }
        subMenuIndexHorizontal[1] = 2;
        keysDown[" "] = false;
        drawUiLayer(false);
    }
}

function checkItemSubMenuKeys() {
    if (keysDown["a"] || keysDown["d"]) {
        ctx_ui.clearRect(1137 / 2 + 75 + 245, 640 / 2 - 60 + displayInventorySubMenu[2] * 23, 162, 60);
    }
    checkNavigateInventoryMenuKeys(2);
    if (keysDown[" "]) {
        ctx_ui.clearRect(1137 / 2 + 75 + 245, 640 / 2 - 60 + displayInventorySubMenu[2] * 23, 162, 60);
        switch (subMenuIndexHorizontal[2]) {
            case 0:
                displayInventorySubMenu[2] = -1;
                break;
            case 1:
                if (p.items[displayInventorySubMenu[2]].num > subMenuIndexVertical) {
                    p.items[displayInventorySubMenu[2]].num = p.items[displayInventorySubMenu[2]].num - subMenuIndexVertical;
                }
                else {
                    p.items.splice(displayInventorySubMenu[2], 1);
                }
                displayInventorySubMenu[2] = -1;
                break;
            case 2:
                displayInventorySubMenu[2] = -1;
                break;
        }

        subMenuIndexHorizontal[2] = 2;
        keysDown[" "] = false;
    }
    drawUiLayer(false);
}

function checkInventoryMenuKeys() {
    if (keysDown["a"]) {
        menuIndexHorizontal--;
        if (menuIndexHorizontal < 0) {
            menuIndexHorizontal = 5;
        }
        keysDown["a"] = false;
    } else if (keysDown["d"]) {
        menuIndexHorizontal++;
        if (menuIndexHorizontal > 5) {
            menuIndexHorizontal = 0;
        }
        keysDown["d"] = false;
    } else if (keysDown["w"]) {
        menuIndexVertical[menuIndexHorizontal]--;
        if (menuIndexVertical[menuIndexHorizontal] < 0) {
            menuIndexVertical[menuIndexHorizontal] = 0;
        }
        keysDown["w"] = false;
    } else if (keysDown["s"]) {
        menuIndexVertical[menuIndexHorizontal]++;
        if (menuSelected[menuIndexHorizontal] == "Weapons") {
            if (menuIndexVertical[0] >= p.weapons.length - 1) {
                menuIndexVertical[0] = p.weapons.length - 1;
            }
        } else if (menuSelected[menuIndexHorizontal] == "Armor") {
            if (menuIndexVertical[1] >= p.equipment.length - 1) {
                menuIndexVertical[1] = p.equipment.length - 1;
            }
        } else if (menuSelected[menuIndexHorizontal] == "Items") {
            if (menuIndexVertical[2] >= p.items.length - 1) {
                menuIndexVertical[2] = p.items.length - 1;
            }
        } else if (menuSelected[menuIndexHorizontal] == "Spells") {
            if (menuIndexVertical[3] >= p.spells.length - 1) {
                menuIndexVertical[3] = p.weapons.length - 1;
            }
        } else if (menuSelected[menuIndexHorizontal] == "Summons") {
            if (menuIndexVertical[4] >= p.summons.length - 1) {
                menuIndexVertical[4] = p.summons.length - 1;
            }
        }
        keysDown["s"] = false;
    } else if (keysDown[" "]) {
        if (displayInventorySubMenu[menuIndexHorizontal] == -1) {
            displayInventorySubMenu[menuIndexHorizontal] = menuIndexVertical[menuIndexHorizontal];
        }
        else {
            displayInventorySubMenu[menuIndexHorizontal] = -1;
        }
        keysDown[" "] = false;
    }
}

function checkNavigateInventoryMenuKeys(menuIndex) {
    if (keysDown["a"]) {
        subMenuIndexHorizontal[menuIndex]--;
        if (subMenuIndexHorizontal[menuIndex] < 0) {
            subMenuIndexHorizontal[menuIndex] = 2;
        }
        keysDown["a"] = false;
        subMenuIndexVertical = 1;
    }
    else if (keysDown["d"]) {
        subMenuIndexHorizontal[menuIndex]++;
        if (subMenuIndexHorizontal[menuIndex] > 2) {
            subMenuIndexHorizontal[menuIndex] = 0;
        }
        keysDown["d"] = false;
        subMenuIndexVertical = 1;
    }
    if (menuIndex == 2) {
        if (keysDown["w"]) {
            if (subMenuIndexVertical < p.items[menuIndexVertical[2]].num) {
                subMenuIndexVertical++;
            }
            keysDown["w"] = false;
        }
        else if (keysDown["s"]) {
            if (subMenuIndexVertical > 1) {
                subMenuIndexVertical--;
            }
            keysDown["s"] = false;
        }
    }
}