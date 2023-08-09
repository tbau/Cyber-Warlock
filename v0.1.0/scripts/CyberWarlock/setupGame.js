var ui_layer = $("#ui-layer")[0];
var ctx_ui = ui_layer.getContext("2d", { willReadFrequently: true });

var game_layer = $("#game-layer")[0];
var ctx_game = game_layer.getContext("2d", { willReadFrequently: true });

var background_layer = $("#background-layer")[0];
var ctx_background = background_layer.getContext("2d", { willReadFrequently: true });

var background_layer_pre = document.createElement("canvas");
background_layer_pre.width = 5000;
background_layer_pre.height = 5000;

var ctx_background_pre = background_layer_pre.getContext("2d", { willReadFrequently: true });

var background_layer_collision = document.createElement("canvas");
background_layer_collision.width = 5000;
background_layer_collision.height = 5000;
var ctx_background_collision = background_layer_collision.getContext("2d", { willReadFrequently: true });


var width = ui_layer.clientWidth;
var height = ui_layer.clientHeight;

var initialWidth = ui_layer.clientWidth;
var initialHeight = ui_layer.clientHeight;

var keysDown = [];
var fires = [];
var fireCopy = [];
var displayMenu = false;
var pauseMenu = false;
var displayInventorySubMenu = [-1, -1, -1, -1, -1, -1];
var menuSelected = ["Weapons", "Armor", "Items", "Spells", "Summons", "Skills"];
var menuIndexHorizontal = 0;
var menuIndexVertical = [0, 0, 0, 0, 0, 0, 0];
var subMenuIndexHorizontal = [2, 2, 2, 2, 2, 2];
var subMenuIndexVertical = 1;
var center = false;
var mapZoomLevel = 1;
var data;
var tempData;

var game = {};
game["maps"] = {}
game["maps"] = {
	'-1': { '0': false },
	'0': { '-1': false, '0': true, '1': false },
	'1': { '-1': false, '0': true, '1': false },
	'x': 0,
	'y': 0
}
game["possibleEntities"] = {};
game["possibleEntities"]["player"] = {
	'x': 1137 / 2 - 20,
	'y': 640 / 2 - 50,
	'offsetX': 2500,
	'offsetY': 2500,
	'dir': "Right",
	'animation': "standRight",
	'attackFrameCount': 0,
	'standRight': { 'flip': true, 'sx': 50, 'sy': 0, 'dx': 50, 'dy': 50, 'xOffset': -50, 'yOffset': 0, 'width': 50, 'height': 50 },
	'standLeft': { 'flip': false, 'sx': 50, 'sy': 0, 'dx': 50, 'dy': 50, 'xOffset': 0, 'yOffset': 0, 'width': 50, 'height': 50 },
	'standUp': { 'sx': 60, 'sy': 0, 'dx': 30, 'dy': 46, 'xOffset': 8, 'yOffset': 3, 'width': 30, 'height': 46 },
	'standDown': { 'sx': 60, 'sy': 0, 'dx': 30, 'dy': 45, 'xOffset': 8, 'yOffset': 5, 'width': 30, 'height': 45 },
	'runRight': { 'flip': true, 'sx': 40, 'sy': 775, 'dx': 50, 'dy': 50, 'xOffset': -50, 'yOffset': 0, 'width': 50, 'height': 50 },
	'runLeft': { 'flip': false, 'sx': 40, 'sy': 775, 'dx': 50, 'dy': 50, 'xOffset': 0, 'yOffset': 0, 'width': 50, 'height': 50 },
	'runUp': {
		0: { 'sx': 0, 'sy': 0, 'dx': 30, 'dy': 46, 'xOffset': 8, 'yOffset': 3, 'width': 30, 'height': 46 },
		1: { 'sx': 30, 'sy': 0, 'dx': 30, 'dy': 46, 'xOffset': 8, 'yOffset': 3, 'width': 30, 'height': 46 },
		'frame': 0
	},
	'runDown': {
		0: { 'sx': 0, 'sy': 0, 'dx': 30, 'dy': 45, 'xOffset': 8, 'yOffset': 5, 'width': 30, 'height': 45 },
		1: { 'sx': 30, 'sy': 0, 'dx': 30, 'dy': 45, 'xOffset': 8, 'yOffset': 5, 'width': 30, 'height': 45 },
		'frame': 0
	},
	'defendLeft': { 'flip': false, 'sx': 250, 'sy': 100, 'dx': 40, 'dy': 50, 'xOffset': 8, 'yOffset': 4, 'width': 40, 'height': 50 },
	'defendRight': { 'flip': true, 'sx': 250, 'sy': 100, 'dx': 40, 'dy': 50, 'xOffset': -42, 'yOffset': 4, 'width': 40, 'height': 50 },
	'defendLeft': { 'flip': false, 'sx': 250, 'sy': 100, 'dx': 40, 'dy': 50, 'xOffset': 8, 'yOffset': 4, 'width': 40, 'height': 50 },
	'attack': {
		'Left':
		{
			0: { 'sx': 50, 'sy': 385, 'dx': 50, 'dy': 50, 'xOffset': -3, 'yOffset': 0, 'width': 50, 'height': 50 },
			1: { 'sx': 133, 'sy': 385, 'dx': 59, 'dy': 50, 'xOffset': -16, 'yOffset': 0, 'width': 59, 'height': 50 },
			2: { 'sx': 230, 'sy': 390, 'dx': 60, 'dy': 45, 'xOffset': -15, 'yOffset': 5, 'width': 60, 'height': 45 }
		},
		'Right':
		{
			0: { 'sx': 50, 'sy': 385, 'dx': 50, 'dy': 50, 'xOffset': -53, 'yOffset': 0, 'width': 50, 'height': 50 },
			1: { 'sx': 133, 'sy': 385, 'dx': 59, 'dy': 50, 'xOffset': -66, 'yOffset': 0, 'width': 59, 'height': 50 },
			2: { 'sx': 230, 'sy': 390, 'dx': 60, 'dy': 45, 'xOffset': -65, 'yOffset': 5, 'width': 60, 'height': 45 }
		}
	},
	'activate': { 'flip': false, 'sx': 50, 'sy': 0, 'dx': 50, 'dy': 50, 'xOffset': -50, 'yOffset': 0, 'width': 50, 'height': 50 },

	'weapon': {
		0: { 'sx': 2 * 34, 'sy': 12 * 34, 'dx': 34, 'dy': 34, 'xOffset': 35, 'yOffset': 30, 'width': 34, 'height': 34, 'rotate': 0 },
		1: { 'sx': 7 * 34, 'sy': 11 * 34, 'dx': 34, 'dy': 34, 'xOffset': 30, 'yOffset': 30, 'width': 28, 'height': 28, 'rotate': 135 },
		2: { 'sx': 8 * 34, 'sy': 7 * 34, 'dx': 34, 'dy': 34, 'xOffset': 20, 'yOffset': 13, 'width': 34, 'height': 34, 'rotate': 225 },
		3: { 'sx': 11 * 34, 'sy': 17 * 34, 'dx': 34, 'dy': 34, 'xOffset': 30, 'yOffset': 13, 'width': 28, 'height': 26, 'rotate': 0 },

		'index': -1
	},

	'draw': function (ctx) {
		var temp = this[this.animation];

		ctx.clearRect(p.x + 40, p.y, 50, 50)

		if (this.animation == "attack") {
			var index = Math.floor(this.attackFrameCount / 15);
			switch (this.dir) {
				case "Left":
					ctx.drawImage(wizard, temp["Left"][index]['sx'],
						temp["Left"][index]['sy'], temp["Left"][index]['dx'],
						temp["Left"][index]['dy'],
						p.x + temp["Left"][index]['xOffset'],
						p.y + temp["Left"][index]['yOffset'],
						temp["Left"][index]['width'],
						temp["Left"][index]['height']);
					if (!displayMenu) {
						p.attackFrameCount++;
						this.attackFrameCount++;
					}
					if (this.attackFrameCount >= 45) {
						this.attackFrameCount = 0;
						p.attackFrameCount = 0;

						if (this.dir == "Right") {
							this.animation = "standRight";
						}
						else {
							this.animation = "standLeft"
						}
					}
					return;
				case "Right":
					ctx.scale(-1, 1);
					ctx.drawImage(wizard, temp["Right"][index]['sx'],
						temp["Right"][index]['sy'], temp["Right"][index]['dx'],
						temp["Right"][index]['dy'],
						-p.x + temp["Right"][index]['xOffset'],
						p.y + temp["Right"][index]['yOffset'],
						temp["Right"][index]['width'],
						temp["Right"][index]['height']);
					if (!displayMenu) {
						p.attackFrameCount++;
						this.attackFrameCount++;
					}
					if (this.attackFrameCount >= 45) {
						this.attackFrameCount = 0;
						p.attackFrameCount = 0;
						if (this.dir == "Right") {
							this.animation = "standRight";
						}
						else {
							this.animation = "standLeft"
						}
					}
					ctx.scale(-1, 1);
					return;
				default:
					break;
			}
		}
		if (this.animation == "runUp") {
			var index = Math.floor(temp["frame"] / 5);
			ctx.drawImage(wizardUp, temp[index]['sx'], temp[index]['sy'],
				temp[index]['dx'], temp[index]['dy'],
				p.x + temp[index]['xOffset'], p.y + temp[index]['yOffset'],
				temp[index]['width'], temp[index]['height']);
			temp["frame"]++;
			if (temp["frame"] >= 10) {
				temp["frame"] = 0;
			}
		}
		else if (this.animation == "runDown") {
			var index = Math.floor(temp["frame"] / 5);
			ctx.drawImage(wizardDown, temp[index]['sx'], temp[index]['sy'],
				temp[index]['dx'], temp[index]['dy'],
				p.x + temp[index]['xOffset'], p.y + temp[index]['yOffset'],
				temp[index]['width'], temp[index]['height']);
			temp["frame"]++;
			if (temp["frame"] >= 10) {
				temp["frame"] = 0;
			}
		}
		else if (this.animation == "standUp") {
			ctx.drawImage(wizardUp, temp['sx'], temp['sy'], temp['dx'], temp['dy']
				, p.x + temp['xOffset'], p.y + temp['yOffset'], temp['width'], temp['height']);
		}
		else if (this.animation == "standDown") {
			ctx.drawImage(wizardDown, temp['sx'], temp['sy'], temp['dx'], temp['dy']
				, p.x + temp['xOffset'], p.y + temp['yOffset'], temp['width'], temp['height']);
		}
		else if (this[this.animation]['flip']) {

			if (this['weapon']['index'] != -1) {
				ctx.scale(-1, 1)
				ctx.drawImage(wizard, temp['sx'] + 15, temp['sy'], temp['dx'], temp['dy']
					, -p.x + temp['xOffset'] + 15, p.y + temp['yOffset'], temp['width'], temp['height']);
				ctx.drawImage(fist, -p.x - 40, p.y + 28);
				ctx.scale(-1, 1);
				temp = this["weapon"][this["weapon"]["index"]];
				ctx.save();
				ctx.translate(p.x + temp['xOffset'], p.y + temp['yOffset'])
				ctx.rotate(Math.PI / 180 * temp["rotate"])

				ctx.drawImage(icons, temp['sx'], temp['sy'], temp['dx'], temp['dy']
					, -17, -17, temp['width'], temp['height']);
				ctx.restore();
			}
			else {
				ctx.scale(-1, 1)
				ctx.drawImage(wizard, temp['sx'], temp['sy'], temp['dx'], temp['dy']
					, -p.x + temp['xOffset'], p.y + temp['yOffset'], temp['width'], temp['height']);
				ctx.scale(-1, 1);
			}
		}
		else {

			if (this['weapon']['index'] != -1) {
				ctx.drawImage(wizard, temp['sx'] + 15, temp['sy'], temp['dx'], temp['dy']
					, p.x + temp['xOffset'] + 15, p.y + temp['yOffset'], temp['width'], temp['height']);

				ctx.drawImage(fist, p.x + 10, p.y + 28);
				temp = this["weapon"][this["weapon"]["index"]];
				ctx.save();
				ctx.translate(p.x + temp["xOffset"] / 2, p.y + temp['yOffset'])
				ctx.scale(-1, 1);
				ctx.rotate(Math.PI / 180 * temp["rotate"])
				ctx.drawImage(icons, temp['sx'], temp['sy'], temp['dx'], temp['dy']
					, -17, -17, temp['width'], temp['height']);

				ctx.restore();
			}
			else {
				ctx.drawImage(wizard, temp['sx'], temp['sy'], temp['dx'], temp['dy']
					, p.x + temp['xOffset'], p.y + temp['yOffset'], temp['width'], temp['height']);
			}
		}
	}
}
game["possibleEntities"]["undead"] = {
	'x':2700,
	'y':2600,
	'draw': function(ctx){
		//ctx.clearRect(this['x']-p.offsetX-1,this['y']-p.offsetY-6,65,70);

		ctx.drawImage(undead,0*32,4*32+1,32,29,this['x']-p.offsetX,this['y']-p.offsetY,60,60);
		//console.log((this['x']-p.offsetX)+"   "+(this['y']-p.offsetY))
	},
	'update':function(){
		//his['x']=this['x']+ Math.floor(Math.random()*3)-1;
		//this['y']=this['y']+ Math.floor(Math.random()*3)-1;
		
		
		var move =  Math.floor(Math.random()*3)-1;
		var steps = Math.floor(Math.random()*3);
		if(move==1){		
		if(this['x']-p.offsetX<p.x){			
			this['x']+=steps;
		}
		else if(this['x']-p.offsetX>p.x){
			this['x']-=steps;
		}
		if(this['y']-p.offsetY<p.y){
			this['y']+=steps;
		}
		else if(this['y']-p.offsetY>p.y){
			this['y']-=steps;
		}}
	}
}
for(var i=0;i<10;i++){
	game["possibleEntities"]["undead"+i]=Object.assign({}, game["possibleEntities"]["undead"]);
	var x = Math.floor(Math.random()*1000)-500;
	var y = Math.floor(Math.random()*1000)-500;
	game["possibleEntities"]["undead"+i]['x']=game["possibleEntities"]["undead"]['x']+x;
	game["possibleEntities"]["undead"+i]['y']=game["possibleEntities"]["undead"]['y']+y;
}
game["playerStats"] = {
	'health': 5, 'maxHealth': 5, 'mana': 5, 'maxMana': 5,
	'stamina': 5, 'maxStamina': 5, 'staminaRegenRate': 2,
	'equip': true, 'defend': false, 'head': null, 'body': null,
	'gloves': null, 'belt': null, 'boots': null, 'ring1': null,
	'ring2': null, 'amulet': null, 'weapon': null, 'spell': null,
	'skills': null, 'str': 3, 'int': 3, 'spd': 3, 'mag': 3, 'def': 3,
	'atk': 3, 'per': 3, 'spr': 3, 'fire': 1, 'ice': 1, 'earth': 1,
	'wind': 1, 'water': 1, 'lightning': 1, 'poison': 1, 'holy': 1,
	'dark': 1, 'psychic': 1, 'tech': 1, 'swdLvl': 1, 'stfLvl': 1,
	'bwLvl': 1, 'splLvl': 1, 'sumLvl': 1, 'level': 1, 'gold': 1000,
	'statuses': [], 'spells': [], 'summons': [], 'weapons': [],
	'equipment': [], 'skills': [], 'items': []
}
class Player {
	constructor() {
		this.x = 1137 / 2 - 20;
		this.y = 640 / 2 - 50;
		this.offsetX = 2500;
		this.offsetY = 2500;
		this.dir = "Right";
		this.image = "standRight";

		this.health = 5;
		this.maxHealth = 5;

		this.mana = 5;
		this.maxMana = 5;

		this.stamina = 5;
		this.maxStamina = 5;
		this.staminaRegenRate = 2;

		this.equip = true;
		this.defend = false;

		this.attackFrameCount = 0;

		//Equipped armor
		this.head = null;
		this.body = null;
		this.gloves = null;
		this.belt = null;
		this.boots = null;
		this.ring1 = null;
		this.ring2 = null;
		this.amulet = null;

		//Equipped weapon
		this.weapon = null;

		//Equipped spell
		this.spell = null;

		//Equipped skill
		this.skills = null;

		//Basic attributes
		this.str = 3;
		this.int = 3;
		this.spd = 3;
		this.mag = 3;
		this.def = 3;
		this.atk = 3;
		this.per = 3;
		this.spr = 3;

		//Magic Levels
		this.fire = 1;
		this.ice = 1;
		this.earth = 1;
		this.wind = 1;
		this.water = 1;
		this.lightning = 1;
		this.poison = 1;
		this.holy = 1;
		this.dark = 1;
		this.psychic = 1;
		this.tech = 1;

		//Skill levels
		this.swdLvl = 1;
		this.stfLvl = 1;
		this.bwLvl = 1;
		this.splLvl = 1;
		this.sumLvl = 1;
		this.level = 1;

		//List of spells, summons, weapons, equipment, and items available
		//to use
		this.gold = 1000;
		this.statuses = [];
		this.spells = [];
		this.summons = [];
		this.weapons = [];
		this.equipment = [];
		this.skills = [];
		this.items = [];
	}
}
class Status {
	constructor(name, effect, timeLeft) {
		this.name = name;
		this.effect = effect;
		this.timeLeft = timeLeft;
	}
}
class Weapon {
	constructor(name, damage, type, effect, cost, weight) {
		this.name = name;
		this.damage = damage;
		this.type = type;
		this.effect = effect;
		this.cost = cost;
		this.weight = weight;
	}
}
class Equipment {
	constructor(name, defense, type, effect, cost, weight) {
		this.name = name;
		this.defense = defense;
		this.type = type;
		this.effect = effect;
		this.cost = cost;
		this.weight = weight;
	}
}
class Item {
	constructor(num, name, type, effect, cost, weight) {
		this.num = num
		this.name = name;
		this.type = type;
		this.effect = effect;
		this.cost = cost;
		this.weight = weight;
	}
	static simplifyItemList() {
		var stack = [];
		for (var i = 0; i < p.items.length; i++) {
			var found = false;
			for (var j = 0; j < stack.length; j++) {
				if (p.items[i].name == stack[j].name &&
					p.items[i].type == stack[j].type &&
					p.items[i].effect == stack[j].effect &&
					p.items[i].cost == stack[j].cost &&
					p.items[i].weight == stack[j].weight
				) {
					stack[j].num = stack[j].num + p.items[i].num;
					p.items.splice(i, 1);
					found = true;
					i--;
					break;
				}

			}
			if (!found) {
				stack.push(p.items[i]);
			}
		}
		p.items = stack;
	}
}

var p = new Player();
p.weapons.push(new Weapon("Basic Staff", 10, "Staff", "None", 100, 1));
p.weapons.push(new Weapon("Armageddon", 1000, "Bow", "Lightning", 12000, 12));
p.weapons.push(new Weapon("Basic Bow", 5, "Bow", "Fire", 300, 2));
p.weapons.push(new Weapon("Sword", 10, "Sword", "None", 150, 3));
p.weapons.push(new Weapon("Spear", 20, "Spear", "Bleed", 500, 2));
p.weapons.push(new Weapon("Axe", 50, "Axe", "Poison", 150, 10));
p.weapons.push(new Weapon("Trident", 10, "Spear", "Water", 300, 4));
p.weapons.push(new Weapon("Mace", 10, "Mace", "Def Down", 600, 10));
p.weapons.push(new Weapon("Dragon Bow", 400, "Bow", "Fire/Ice", 4000, 6));
p.weapons.push(new Weapon("Lance", 8, "Spear", "None", 120, 3));
p.weapons.push(new Weapon("Magic Staff", 30, "Staff", "Magic Up", 500, 3));
p.weapons.push(new Weapon("Magic Sword", 30, "Sword", "Magic Up", 500, 3));
p.weapons.push(new Weapon("Sniper bow", 50, "Bow", "Accuracy Up", 500, 3));
p.weapons.push(new Weapon("Knife", 10, "Knife", "Stealth up", 100, 1));
p.weapons.push(new Weapon("Knife", 10, "Knife", "Stealth up", 100, 1));
p.weapons.push(new Weapon("Knife", 10, "Knife", "Stealth up", 100, 1));
p.weapons.push(new Weapon("Knife", 10, "Knife", "Stealth up", 100, 1));
p.weapons.push(new Weapon("Knife", 10, "Knife", "Stealth up", 100, 1));
p.weapons.push(new Weapon("Knife", 10, "Knife", "Stealth up", 100, 1));
p.weapon = p.weapons[14];

p.equipment.push(new Equipment("Helmet", 1, "Helm", "None", 10, 1))
p.equipment.push(new Equipment("Boots", 2, "Boots", "None", 15, 1))
p.equipment.push(new Equipment("Robe", 1, "Robe", "Fire Def Up", 50, 2))
p.equipment.push(new Equipment("Armband", 3, "Bracelet", "Magic Up", 30, 1))
p.equipment.push(new Equipment("Ring", 1, "Ring", "Str +1", 10, 0.1))
p.equipment.push(new Equipment("Necklace", 1, "Necklace", "Fire +1", 40, 0.1))
p.equipment.push(new Equipment("Hood", 2, "Helm", "Stealth Up", 30, 2))
p.equipment.push(new Equipment("Dragon Vest", 1, "Chest", "None", 1000, 10))
p.equipment.push(new Equipment("Ring", 1, "Ring", "Str +1", 10, 0.1))
p.equipment.push(new Equipment("Ring", 1, "Ring", "Str +1", 10, 0.1))
p.equipment.push(new Equipment("Armband", 3, "Bracelet", "Magic Up", 30, 1))
p.equipment.push(new Equipment("Necklace", 1, "Necklace", "Fire +1", 40, 0.1))

p.items.push(new Item(1, "Potion", "Healing", "HP +10", 5, 0.1))
p.items.push(new Item(1, "Potion", "Healing", "HP +10", 5, 0.1))
p.items.push(new Item(1, "Potion", "Healing", "HP +10", 5, 0.1))
p.items.push(new Item(1, "Potion", "Healing", "HP +10", 5, 0.1))
p.items.push(new Item(1, "Potion", "Healing", "HP +10", 5, 0.1))
p.items.push(new Item(100, "Phoenix Down", "Healing", "Revive +1", 5, 0.1))
p.items.push(new Item(10, "Potion", "Healing", "HP +10", 5, 0.1))

Item.simplifyItemList();

function resizeGame() {
	var gameCanvas1 = document.getElementById('ui-layer');
	var gameCanvas2 = document.getElementById('game-layer');
	var gameCanvas3 = document.getElementById('background-layer');
	var stage = document.getElementById('stage');

	//var widthToHeight = 16 / 9;
	var newWidth = window.outerWidth;
	var newHeight = window.outerHeight - 150;
	//var newWidthToHeight = newWidth / newHeight;

	/*if (newWidthToHeight > widthToHeight) {
	newWidth = newHeight * widthToHeight;
	gameCanvas1.style.height = newHeight + 'px';
	gameCanvas1.style.width = newWidth + 'px';

	gameCanvas2.style.height = newHeight + 'px';
	gameCanvas2.style.height = newHeight + 'px';

	gameCanvas3.style.width = newWidth + 'px';
	gameCanvas3.style.width = newWidth + 'px';

	stage.style.width = newWidth + 'px';
	stage.style.width = newWidth + 'px';
	} else {
	newHeight = newWidth / widthToHeight;
	gameCanvas1.style.width = newWidth + 'px';
	gameCanvas1.style.height = newHeight + 'px';

	gameCanvas2.style.width = newWidth + 'px';
	gameCanvas2.style.height = newHeight + 'px';

	gameCanvas3.style.width = newWidth + 'px';
	gameCanvas3.style.height = newHeight + 'px';

	stage.style.width = newWidth + 'px';
	stage.style.height = newHeight + 'px';
	}*/
	//gameCanvas1.style.marginTop = (-newHeight / 2) + 'px';
	//gameCanvas1.style.marginLeft = (-newWidth / 2) + 'px';

	gameCanvas1.width = newWidth;
	gameCanvas1.height = newHeight;

	gameCanvas2.width = newWidth;
	gameCanvas2.height = newHeight;

	gameCanvas3.width = newWidth;
	gameCanvas3.height = newHeight;

	stage.width = newWidth;
	stage.height = newHeight;

	width = gameCanvas1.width;
	height = gameCanvas1.height;

	ctx_ui.scale(width / 1137, height / 640)
	ctx_game.scale(width / 1137, height / 640)
	ctx_background.scale(width / 1137, height / 640)

	ctx_ui.clearRect(0, 0, width, height);
	ctx_game.clearRect(0, 0, width, height);
	ctx_background.clearRect(0, 0, width, height);

	drawBackground();
	//ctx.scale(width / initialWidth, height / initialHeight)
}