var imageCount = 26;

var hud = new Image()
hud.src = "images/Buch/hud.png";
hud.onload = imageCount--;

var hudBarBlock = new Image();
hudBarBlock.src = "images/Buch/hudBarBlock.png";
hudBarBlock.onload = imageCount--;

var hudBarEndHealth = new Image();
hudBarEndHealth.src = "images/Buch/hudBarEndHealth.png";
hudBarEndHealth.onload = imageCount--;

var hudBarEndMana = new Image();
hudBarEndMana.src = "images/Buch/hudBarEndMana.png";
hudBarEndMana.onload = imageCount--;

var hudBarEndStamina = new Image();
hudBarEndStamina.src = "images/Buch/hudBarEndStamina.png";
hudBarEndStamina.onload = imageCount--;

var hudBarHealthStart = new Image();
hudBarHealthStart.src = "images/Buch/hudBarHealthStart.png";
hudBarHealthStart.onload = imageCount--;

var hudBarHealth = new Image();
hudBarHealth.src = "images/Buch/hudBarHealth.png";
hudBarHealth.onload = imageCount--;

var hudBarManaStart = new Image();
hudBarManaStart.src = "images/Buch/hudBarManaStart.png";
hudBarManaStart.onload = imageCount--;

var hudBarMana = new Image();
hudBarMana.src = "images/Buch/hudBarMana.png";
hudBarMana.onload = imageCount--;

var hudBarStaminaStart = new Image();
hudBarStaminaStart.src = "images/Buch/hudBarStaminaStart.png";
hudBarStaminaStart.onload = imageCount--;

var hudBarStamina = new Image();
hudBarStamina.src = "images/Buch/hudBarStamina.png";
hudBarStamina.onload = imageCount--;

var wizard = new Image();
wizard.src = "images/FiveAsOne/wizard.png";
wizard.onload = imageCount--;

var tree1 = new Image();
tree1.src = "tree1.png";
tree1.onload = imageCount--;

var grass1 = new Image();
var grass2 = new Image();

grass1.src = "images/Hyptosis/grass1.png";
grass1.onload = function () {
	imageCount--;
	/*for (var i = 0; i * 32 < 1137; i++) {
		for (var j = 0; j * 50 < 640; j++) {
			ctx_background_pre.drawImage(grass1, 0, 0, 32, 32, 0 + i * 32, 0 + j * 50, 32, 50);
		}
	}*/
	/*for (var i = 0; i * 32 < 5000; i++) {
		for (var j = 0; j * 50 <5000; j++) {
			//actx_background_pre.drawImage(grass1, 0, 0, 32, 32, 0 + i * 32, 0 + j * 50, 32, 50);
		}
	}*/
	grass2.src = background_layer_pre.toDataURL();
	grass2.onload = function () {
		imageCount--;
		resizeGame();
	}
}
var fist = new Image();
fist.src = "images/FiveAsOne/fist.png";
fist.onload = imageCount--;

var icons = new Image();
icons.src = "images/7Soul1/420_RPG_icons.png";
icons.onload = imageCount--

var hudMap = new Image()
hudMap.src = "images/Buch/hudMap.png";
hudMap.onload = imageCount--;

var hudMenu = new Image();
hudMenu.src = "images/Buch/hudMenu.png";
hudMenu.onload = imageCount--;

var hudBarHealthEndRound = new Image();
hudBarHealthEndRound.src = "images/Buch/hudBarHealthEndRound.png";
hudBarHealthEndRound.onload = imageCount--;

var gold = new Image();
gold.src = "images/Buch/gold.png";
gold.onload = imageCount--;

var currentMap = new Image();
currentMap.src = "images/Maps/map"+game["maps"]["y"]+game["maps"]["x"]+".png";
currentMap.onload = function(){imageCount--;
}

var currentMapBackground = new Image();
currentMapBackground.crossOrigin= 'Anonymous';
currentMapBackground.src = "images/Maps/map"+game["maps"]["y"]+game["maps"]["x"]+"background.png";
currentMapBackground.onload = function(){
	imageCount--;
	ctx_background_collision.drawImage(currentMapBackground,0,0);
	data = ctx_background_collision.getImageData(0,0,5000,5000).data;
}
var wizardUp=new Image();
wizardUp.src = "images/FiveAsOne/wizardUp.png";
wizardUp.onload=imageCount--;

var wizardDown=new Image();
wizardDown.src = "images/FiveAsOne/wizardDown.png";
wizardDown.onload=imageCount--;

var undead = new Image();
undead.src = "images/dg_undead32.png";
undead.onload = imageCount--;
/*
var hudBar = new Image();
hudBar.src = "/Images/Buch/hudBar.png";
hudBar.onload = imageCount--;
 */

$("#ui-layer").css("cursor", "url(images/Buch/mouseCursor1.png), auto");