let fullScreen = {
	a: false
};
$("#fullScreen").on("click",
	function () {
	var el = document.getElementById('stage');

	document.body.style.zoom = 1;

	if (el.webkitRequestFullScreen) {
		el.webkitRequestFullScreen();
	} else {
		el.mozRequestFullScreen();
	}
	resizeGame();
	fullScreen.a = true;
});

$(window).on("resize", resizeGame)

$("#ui-layer").on("keydown", function (e) {
	e.preventDefault();
	var key = e.key;
	keysDown[key] = true;
	console.log(e.key)
	if (e.key == "a") {
		keysDown["d"] = false;
		keysDown["w"] = false;
		keysDown["s"] = false;
	} else if (e.key == "w") {
		keysDown["d"] = false;
		keysDown["a"] = false;
		keysDown["s"] = false;
	} else if (e.key == "s") {
		keysDown["d"] = false;
		keysDown["w"] = false;
		keysDown["a"] = false;
	} else if (e.key == "d") {
		keysDown["a"] = false;
		keysDown["w"] = false;
		keysDown["s"] = false;
	}
})
$("#ui-layer").on("keyup", function (e) {
	e.preventDefault();
	var key = e.key;
	keysDown[key] = false;
	if (!keysDown["a"] && !keysDown["d"] && !keysDown["w"] && !keysDown["s"] && !p.defend && p.attackFrameCount == 0) {
		console.log("hi");
		switch( game["possibleEntities"]["player"]["dir"]){
			case "Right": 
				p.image = "standRight"			
				game["possibleEntities"]["player"]["animation"]="standRight";
				break;
			case "Left":
				//p.image = "standLeft"			
				game["possibleEntities"]["player"]["animation"]="standLeft";
				break;
			case "Up":
				//p.image = "standUp"			
				game["possibleEntities"]["player"]["animation"]="standUp";
				break;	
			case "Down":
				game["possibleEntities"]["player"]["animation"]="standDown";
				break;
			}
	}
})
var mouse = false;
var mouseX = 0;
var mouseY = 0;
var prevMouseX = 0;
var prevMouseY = 0;

$("#ui-layer").mousedown(function (e) {

	var rect = ui_layer.getBoundingClientRect();
	var x = (e.clientX - rect.left) / (rect.right - rect.left) * ui_layer.width;
	var y = (e.clientY - rect.top) / (rect.bottom - rect.top) * ui_layer.height

	switch (e.which) {
	case 1:
		if (!pauseMenu)
			mouse = true;
		mouseX = (x / (width / 1137) - 12),
		mouseY = (y / (height / 640) - 12);

		console.log(mouseX + " " + mouseY);

		//Inventory Close Button
		if (displayMenu && mouseX > 854 && mouseX < 946 && mouseY > 12 && mouseY < 107) {
			displayMenu = false;
			mouse = false;
			for(var i=0;i<6;i++)
				displayInventorySubMenu[i]=-1;
			//ctx_ui.clearRect(1137 / 2 - 344, 640 / 2 - 320, 760, 632)
			ctx_ui.clearRect(0,0,1137,640);			
			drawUiLayer()
		}
		//Inventory Button
		else if (mouseX > 1064 && mouseX < 1107 && mouseY > 120 && mouseY < 159) {
			displayMenu = !displayMenu;
			mouse = false;
			if (!displayMenu) {
				ctx_ui.clearRect(0,0,1137,640);
				drawUiLayer()
			}
		}
		//Save Game in Pause Menu
		else if (pauseMenu && mouseX > 494 && mouseX < 617 && mouseY > 289 && mouseY < 309) {
			$("#file").trigger('click');
			mouse = false;
		}
		//Resume Button in Pause Menu
		else if (pauseMenu && mouseX > 515 && mouseX < 598 && mouseY > 208 && mouseY < 226) {
			pauseMenu = false;
			mouse = false;
			ctx_ui.clearRect(0, 0, 1137, 640)
			drawHud();
		} else if (!pauseMenu && !displayMenu && mouseX > 1064 && mouseX < 1109 && mouseY > 251 && mouseY < 295) {
			pauseMenu = !pauseMenu;
			mouse = false;
		}

		break;
	case 2:
		alert('Middle Mouse button pressed.');
		break;
	case 3:
		//alert('Right Mouse button pressed.');
		break;
	default:
		alert('You have a strange Mouse!');
	}
})
$("#ui-layer").mouseup(function (e) {
	switch (e.which) {
	case 1:
		if (!displayMenu && !pauseMenu && mouse && (mouseX > 1064 || mouseX < 1106) && (mouseY > 189 || mouseY < 161)) {
			fires.push({
				x: mouseX,
				y: mouseY,
				time: 200
			});
		}
		mouse = false;
		break;
	case 2:
		alert('Middle Mouse button pressed.');
		break;
	case 3:
		//alert('Right Mouse button pressed.');
		break;
	default:
		alert('You have a strange Mouse!');
	}

})

$("#ui-layer").mousemove(function (e) {
	var rect = ui_layer.getBoundingClientRect();
	var x = (e.clientX - rect.left) / (rect.right - rect.left) * ui_layer.width;
	var y = (e.clientY - rect.top) / (rect.bottom - rect.top) * ui_layer.height

	prevMouseX = mouseX;
	prevMouseY = mouseY;
	mouseX = (x / (width / 1137) - 12),
	mouseY = (y / (height / 640) - 12);
	if (mouse && !displayMenu && !pauseMenu) {
		ctx_game.clearRect(prevMouseX, prevMouseY, 38, 35);
		//ctx_game.clearRect(mouseX, mouseY, 41, 41);
		ctx_game.drawImage(icons, 35, 681, 31, 31, mouseX, mouseY, 31, 31);
	}
})
$("#file").on("change", function (e) {
	var files = e.target.files; // FileList object

	mouse = false;
	pauseMenu = false;

	// files is a FileList of File objects. List some properties.
	var output = [];
	for (var i = 0, f; f = files[i]; i++) {

		var reader = new FileReader();

		// Closure to capture the file information.
		reader.onload = (function (theFile) {
			return function (e) {
				// Render thumbnail.
				var data = e.target.result.split("\n");
				p.health = data[0];
				p.maxHealth = data[1];
				p.mana = data[2];
				p.maxMana = data[3];
				p.stamina = data[4];
				p.maxStamina = data[5];
				p.gold = data[6];
			}
		})(f);
		// Read in the image file as a data URL.
		reader.readAsText(f);
	}

	ctx_ui.clearRect(0, 0, 1137, 640)
	drawHud();
});
/*$('#ui-layer').bind('contextmenu', function (e) {
return false;
}); */