/* Get URL PARAMS */
jQuery.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}
// usage: console.log(jQuery.urlParam('playerId'));

/* Check if data exists in Firebase */
function itemExistsCallback(itemId, exists) {
        if (exists) {
          console.log('item ' + itemId + ' exists!');
          return true;
        } else {
          console.log('item ' + itemId + ' does not exist!');
          return false;
        }
      }
       
      // Tests to see if /users/<userId> has any data. 
      function checkIfItemExists(parentId, itemId) {
        firebaseRef.child(parentId).child(itemId).once('value', function(snapshot) {
          var exists = (snapshot.val() !== null);
          itemExistsCallback(itemId, exists);
        });
      }
/* Check for an empty JS Object */

function isEmpty(obj) {

    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
}

/* --- Globals --- */


var isLocal = false;
var isProduction = window.location.host.indexOf('.com');
var isEdgeAnimate = window.location.host.indexOf('127.0.0.1');

if(isProduction == -1){
	isLocal = true;
	isProduction = false;
	if(isEdgeAnimate != -1){
		isEdgeAnimate = true;
	}
	else{
		isEdgeAnimate = false;
	}
}
else{
	isProduction = true;
}
console.log('isLocal? :' + isLocal);
console.log('isProduction? :' + isProduction);
console.log('isEdgeAnimate? :' + isEdgeAnimate);


if(isLocal){
	var imgPath = 'images/';
	if(!isEdgeAnimate){
		imgPath = '/dungeon-hacker/edge-animations/images/';
	}
}
else{
	var imgPath = '/dungeon-hacker/edge-animations/images/';
}

/* Sets up connection to Firebase */
var firebaseRef = new Firebase('https://dungeon-hacker.firebaseio.com/');

/* Player Card URL */
if(isProduction){
var playerCardURL = 'http://www.augmentedart.com/hack-the-dungeon/player-card/';

}
else{
	var playerCardURL = 'http://augmentedart/dungeon-hacker-player-card/';

}
if( jQuery.urlParam('playerId') != null ){//first check if playerId is passed as a url parameter
      var playerId = jQuery.urlParam('playerId');
   }
   else{
	if(typeof playerId != 'undefined'){//then if playerId is set globally elsewhere, like from the layar client, for example, then leave it be.
	   }
	   else{
	     var playerId = 'test-id';
	   }
	}

var player = new Player(playerId);


if(typeof itemId == 'undefined'){
 if( jQuery.urlParam('itemId') != null){
   var itemId = jQuery.urlParam('itemId');
  }
  else{
    var itemId = 'default-item';
  }
}
var item = new Item(itemId);

if(typeof monsterId == 'undefined'){
	if(jQuery.urlParam('monsterId') != null){
		var monsterId = jQuery.urlParam('monsterId');
	}
	else{
		var monsterId = 'default-monster';
	}
}
var monster = new Monster(monsterId);
/* - end Globals - */

/* DICE */
var dice = new Dice();

function Dice(){
	this.roll = function(diceSides, sym){
		this.value = Math.floor(Math.random() * diceSides) + 1;
		sym.play('roll');
		console.log('dice roll value:'+this.value);
		return this.value;

	}
}
function rollTheDice(diceSides){
	var diceValue = Math.floor(Math.random() * diceSides) + 1;
		return diceValue;
}






/* defines classes for player, monster, item and attribute and assigns them properties and methods */

function Player(playerID){ //pass unique player ID to the constructor.
	
	this.id = playerID;
	this.title = "Default Player Title";
	this.description = "The default player description.";
	this.playerImg = imgPath+'project-manager.png';
	this.playerClass = 'Default Player Class';
	this.cryptoCredits = 0;
	this.gameState = {};
	this.attributes = {};
	this.inventory = {};
	this.monsters = {};
	this.hits = false;
	this.hitCount = 0;
	this.secondBlock = false;
	this.blocks = false;

	

	this.getPlayerClass = function(){ //setup player data based on url parameter for playerClasses.
		if(jQuery.urlParam('playerClass') == null){
			this.playerClass = 'Default Character Class';
		}
		else{
			this.playerClass = jQuery.urlParam('playerClass');

		}
		if(this.playerClass == 'project-manager'){
			 this.title = 'Project Manager';
			 this.attributes = { charisma : 1, creativity : 1, knowledge : 1};
			 this.description = 'A shapeshifting gypsy that wears many hats. Can they really see the future?';
			 this.playerImg = imgPath+'project-manager.png';
		}
		else if(this.playerClass == 'designer'){
			 this.title = 'Designer';
			 this.attributes = { charisma : 0, creativity : 2, knowledge : 1};
			 this.description = 'A Designer is creative and knowledgeable';
			 this.playerImg = imgPath+'designer.png';
		}
		else if(this.playerClass == 'developer'){
			 this.title = 'Developer';
			 this.attributes = { charisma : 0, creativity : 1, knowledge : 2};
			 this.description = 'Feed them coffee and they will build the things.';
			 this.playerImg = imgPath+'developer.png';
		}
		else if(this.playerClass == 'executive'){
			 this.title = 'Executive';
			 this.attributes = { charisma : 2, creativity : 0, knowledge : 1};
			 this.description = 'They make turtlenecks cool. Kind of. They can fire you, so turtlenecks are cool.';
			 this.playerImg = imgPath+'executive.png';
		}
		else if(this.playerClass == 'angel-investor'){
			 this.title = 'Angel Investor';
			 this.attributes = { charisma : 2, creativity : 0, knowledge : 1};
			 this.description = 'These mysterious benefactors could be anyone. Who knows, maybe even your grandma?';
			 this.playerImg = imgPath+'angel-investor.png';
		}
		else if(this.playerClass == 'consultant'){
			 this.title = 'Consultant';
			 this.attributes = { charisma : 2, creativity : 0, knowledge : 1};
			 this.description = 'He\'s got some really good advice for you.';
			 this.playerImg = imgPath+'consultant.png';
		}
		else if(this.playerClass == 'courier'){
			 this.title = 'Courier';
			 this.attributes = { charisma : 2, creativity : 0, knowledge : 1};
			 this.description = 'These mercurial sprites move exceptionally fast, just be sure to stay out of their path.';
			 this.playerImg = imgPath+'courier.png';
		}
		else if(this.playerClass == 'copywriter'){
			 this.title = 'Copywriter';
			 this.attributes = { charisma : 2, creativity : 0, knowledge : 1};
			 this.description = 'Plenty of ninja skills are involved in turning that chicken scratch into something people will actually read.';
			 this.playerImg = imgPath+'copywriter.png';
		}
		else if(this.playerClass == 'creative-director'){
			 this.title = 'Creative Director';
			 this.attributes = { charisma : 0, creativity : 3, knowledge : 0};
			 this.description = 'Pure, raw, creative energy is a fearsome force. A creative director struggles with this beast every day.';
			 this.playerImg = imgPath+'creative-director.png';
		}
		else if(this.playerClass == 'freelancer'){
			 this.title = 'Freelancer';
			 this.attributes = { charisma : 1, creativity : 1, knowledge : 1};
			 this.description = 'The rouges of the office, they can really help you out in a pinch, for a price, of course.';
			 this.playerImg = imgPath+'freelancer.png';
		}
		else if(this.playerClass == 'security-guard'){
			 this.title = 'Security Guard';
			 this.attributes = { charisma : 2, creativity : 0, knowledge : 1};
			 this.description = 'Holding down the fort. On a Segway.';
			 this.playerImg = imgPath+'security-guard.png';
		}
		else if(this.playerClass == 'systems-engineer'){
			 this.title = 'Systems Engineer';
			 this.attributes = { charisma : 0, creativity : 0, knowledge : 3};
			 this.description = 'What they lack in social skills they make up for in knowledge and CAT-5 cable.';
			 this.playerImg = imgPath+'systems-engineer.png';
		}
		else{
			 this.title = 'Default Character Class';
			 this.attributes = { charisma : 1, creativity : 1, knowledge : 1};
			 this.description = 'This is the default character class';
			 this.playerImg = imgPath+'project-manager.png';
		}
	}

	this.getPlayerData = function(){
		var _this = this; //retain a reference to the player object.
		firebaseRef.child('players').child(this.id).on('value', function(snapshot){
			playerData = snapshot.val();
			_this.gameState = playerData['gameState'];
			_this.cryptoCredits = playerData['cryptoCredits'];
			_this.attributes = playerData['attributes'];
			_this.inventory = playerData['inventory'];
			_this.monsters = playerData['monsters'];
		});
		
	}



	this.loadData = function(sym){
		//initial composition setup - populates data based on character classes, but does not interact with firebase yet.
		if(sym && sym.$('Player-Title').length > 0){
			sym.$('Player-Title').html( player.title );//update the title symbol
		}
		else if(jQuery('#player-title').length > 0){
			jQuery('#player-title').html( player.title );//update the title symbol
		}

		if(sym && sym.$('Description').length > 0){
			sym.$('Description').html( player.description ); //update the description symbol
		}
		else if(jQuery('#description').length > 0){
			jQuery('#description').html( player.description );//update the title symbol
		}

		if(sym && sym.$('PlayerImage').length > 0){
			sym.getSymbol('PlayerImage').$('image').css('backgroundImage', 'url('+player.playerImg+')');
		}
		else if(jQuery('#player-image').length > 0){
			jQuery('#player-image').find('img').attr( 'src',  player.playerImg );//update the title symbol
		}

		if(sym && sym.$('Attributes').length > 0){
			sym.$('Attributes').html('');
			for(var attributeKey in player.attributes){ 
				
				for(var i = 0; i < player.attributes[attributeKey]; i++){
					sym.$('Attributes').append('<img class="'+attributeKey+'" src="'+imgPath+attributeKey+'.png" />' );
				}
			}
		}
		else if(jQuery('#player-attributes').length > 0){
			jQuery('#player-attributes').html('');
			for(var attributeKey in player.attributes){ 
				
				for(var i = 0; i < player.attributes[attributeKey]; i++){
					jQuery('#player-attributes').append('<img class="'+attributeKey+'" src="'+imgPath+attributeKey+'.png" />' );
				}
			}
		}

	}
	
	this.addPlayer = function(){ //create a new player entry in the db or replace existing player entry - this triggers when you select the player.
		firebaseRef.child('players').child(this.id).set({

				'title' : this.title,
				'playerClass' : this.playerClass,
				'description' : this.description,
				'playerImg' : this.playerImg,
				'cryptoCredits' : 1,
				'attributes' : this.attributes,
				'inventory' : this.inventory,
				'monsters' : this.monsters,
				'gameState' : {}


		});
	}

	this.update = function(att, value){//update existing firebase player entry with new data.
		var attributeObj = {};
		attributeObj[att] = value;
		firebaseRef.child('players').child(this.id).update(attributeObj);

	}
	this.addMonster = function(monster){
		var monsterObj = {};
		for(var thisMonster in player.monsters){
			if(monster.title != thisMonster){
				return false;
			}
			else{

			}
		}

		this.update('cryptoCredits', this.cryptoCredits+1);
		
		monsterObj[monster.title] = {
			'title' : monster.title,
			'img' : monster.img,
			'description' : monster.description
		}
		firebaseRef.child('players').child(this.id).child('monsters').update(monsterObj);
		firebaseRef.child('players').child(this.id).child('gameState').child(monster.title).update({currentFrame : 'player-wins'});
	};

	this.addItem = function(item, itemTitle, itemAttribute, attAmount){ //pass an item title and an attribute amount
	
	//first we need an array of all the item's children, like item.title, item.description.
	//then we loop through it and build a key value pair, matching it to item obj.
		
		var itemObj = {};
		itemObj[itemTitle] = {
			'title' : item.title,
			'img' : item.img,
			'description' : item.description,
			'attributes' : item.attributes,
		};

		var attObject = {};
		if(typeof this.attributes[itemAttribute] != 'undefined'){
			attObject[itemAttribute] = this.attributes[itemAttribute] + attAmount;
		}
		else{
			attObject[itemAttribute] = attAmount;
		}

		
		
		firebaseRef.child('players').child(this.id).child('inventory').update(itemObj);

		firebaseRef.child('players').child(this.id).child('attributes').update(attObject);
	}

	this.hasItem = function(item){
		var hasItem = false;
		for(var key in player.inventory){
			if(key == item){
				hasItem = true;
			}
		}
		return hasItem;
	}

	this.reset = function(){
		this.update('attributes', {});
        this.update('inventory', {});
        this.update('monsters', {});
        this.update('gameState', {});
        this.update('cryptoCredits', {});
	}
	
	this.setFrame = function(frame){	
		
		monsterObj = {};
		monsterObj['currentFrame'] = frame;
		monsterObj.hits = monster.hits;
		monsterObj.boss = monster.boss;
		monsterObj.blocks = monster.blocks;
		monsterObj.playerHits = this.hits;
		monsterObj.playerBlocks = this.blocks;
		monsterObj.hitCount = monster.hitCount;
		monsterObj.playerHitCount = this.hitCount;
		monsterObj.secondAttack = monster.secondAttack;

		firebaseRef.child('players').child(this.id).child('gameState').child(monster.title).update(monsterObj);
		
		



		
		//console.log(monster);
		
		
		

	}

	//Player DATA SYNC with Firebase - events that fire when the firebase database is updated. returns an object like this:
	// {class: "default-class", description: "The default player description.", title: "Default Player Title"}	
	this.syncData = function(){ //bind to data changes to stay synced with the firebase data.
		var _this = this;
		var isDead = true;

		firebaseRef.child('players').child(this.id).once("value", function(snapshot){
			var dataSet = snapshot.val();
		    
		    if(typeof AdobeEdge != 'undefined'){
			    if(typeof AdobeEdge.getComposition('player') != 'undefined'){
					var sym = AdobeEdge.getComposition('player').getStage(); //get a reference to the edge animation stage
				}
				else if(typeof AdobeEdge.getComposition('item') != 'undefined'){
					var sym = AdobeEdge.getComposition('item').getStage();
				}
				else if(typeof AdobeEdge.getComposition('monster') != 'undefined'){
					var sym = AdobeEdge.getComposition('monster').getStage();
				}
				else {
					console.log('No symbol to sync data with. You must define a stage in this.syncData first.');
					var sym = false;
			
				}
			}
			else{
				sym = false;
			}

			for(var key in dataSet){
				if (dataSet.hasOwnProperty(key)) {
					if(key == 'gameState'){
						_this.gameState = dataSet[key];


						if(!_this.hasOwnProperty('gameState')){
							console.log('no game state yet');
							}
						
						else{
							 if(_this.gameState.hasOwnProperty(monster.title)){
							 	var currentFrame = _this.gameState[monster.title]['currentFrame'];
							 	
							 	monster.boss = _this.gameState[monster.title]['boss'];
							 	monster.hits = _this.gameState[monster.title]['hits'];
							 	monster.blocks = _this.gameState[monster.title]['blocks'];
							 	monster.secondAttack = _this.gameState[monster.title]['secondAttack'];
							 	monster.hitCount = _this.gameState[monster.title]['hitCount'];
							 	player.hits = _this.gameState[monster.title]['playerHits'];
							 	player.blocks = _this.gameState[monster.title]['playerBlocks'];
							 	player.secondBlock = _this.gameState[monster.title]['playerSecondBlock'];
							 	player.hitCount = _this.gameState[monster.title]['playerHitCount'];

							 	monster.goToFrame(sym, currentFrame);
							 }	 	 
						}	
					}
				}
				}
			
		});
		
	  firebaseRef.child('players').child(this.id).on("value", function(snapshot) {
	  	console.log('syncing player data');
	  	//The 'value' event fires once on load and whenever a value changes. 
	  var dataSet = snapshot.val(); //js object with the complete data set for the player.
	 
	  if(typeof AdobeEdge != 'undefined'){
		  if(typeof AdobeEdge.getComposition('player') != 'undefined'){
			  var sym = AdobeEdge.getComposition('player').getStage(); //get a reference to the edge animation stage
			}
			else if(typeof AdobeEdge.getComposition('item') != 'undefined'){
					var sym = AdobeEdge.getComposition('item').getStage();
				}
			else if(typeof AdobeEdge.getComposition('monster') != 'undefined'){
					var sym = AdobeEdge.getComposition('monster').getStage();
				}
			else {
				console.log('No symbol to sync data with. You must define a stage in this.syncData first.');
				var sym = false;
		
			}
		}
		else{
			sym = false;
		}

		/* Clean things up first */

	  for(var key in dataSet){
		if (dataSet.hasOwnProperty(key)) {
					
				if( key == 'title' ){
					if(sym && typeof sym.$('Player-Title') != 'undefined'){
						sym.$('Player-Title').html( dataSet[key]);//update the title symbol
					}
					else if(jQuery('#player-title').length > 0){
						jQuery('#player-title').html(dataSet[key]);
					}
					_this.title = dataSet[key];
					
				}
				
				if(key == 'description'){
					if(sym && typeof sym.$('Description') != 'undefined'){
						sym.$('Description').html( dataSet[key]); //update the description symbol
					}
					else if(jQuery('#description').length > 0){
						jQuery('#description').html(dataSet[key]);
					}
					_this.description = dataSet[key];
				}
				
				if(key == 'playerImg'){ //update the playerImg 
					if(sym && typeof sym.getSymbol('PlayerImage') != 'undefined' && sym.getSymbol('PlayerImage').$('image').length > 0){
					sym.getSymbol('PlayerImage').$('image').css('backgroundImage', 'url('+dataSet[key]+')');
					}
					else if(jQuery('#player-image').length > 0){
						jQuery('#player-image').find('img').attr('src', dataSet[key]);
					}
					_this.playerImg = dataSet[key];
				}
				
				if(key == 'attributes'){ //loop through the attributes and display the correct number for each.
					
					if(sym && typeof sym.$('Attributes') != 'undefined' ){
						sym.$('Attributes').html('');
						for(var attributeKey in dataSet[key]){ 
							
							for(var i = 0; i < dataSet[key][attributeKey]; i++){
								sym.$('Attributes').append('<img class="'+attributeKey+'" src="'+imgPath+attributeKey+'.png" />' );
								
							}
						}
					}
					else if(jQuery('#player-attributes').length > 0){
						jQuery('#player-attributes').html('');
						for(var attributeKey in dataSet[key]){ 
							
							for(var i = 0; i < dataSet[key][attributeKey]; i++){
								jQuery('#player-attributes').append('<img class="'+attributeKey+'" src="'+imgPath+attributeKey+'.png" />' );
								
							}
						}
					}
					isDead = false;
					_this.attributes = dataSet[key];


					
				}

				 if(key == 'cryptoCredits'){ //show crypto credits on some pages
					if(sym && typeof sym.$('CryptoCredits') != 'undefined'){
						sym.$('CryptoCredits').html('');
						for(var credits = 0; credits < 	dataSet[key]; credits++){
							sym.$('CryptoCredits').append( '<img class="crypto-credit" src="'+imgPath+'crypto-credit.png" />');//add another crypto credit
						}
					}
					else if(jQuery('#crypto-credits').length > 0){
						jQuery('#crypto-credits').html('');
						for(var credits = 0; credits < 	dataSet[key]; credits++){
							jQuery('#crypto-credits').append( '<img class="crypto-credit" src="'+imgPath+'crypto-credit.png" />');//add another crypto credit
						}
					}
					_this.cryptoCredits = dataSet[key];
				}

				if(key == 'inventory'){
					
					if(sym && typeof sym.$('Inventory') != 'undefined'){ 
						sym.$('Inventory').html(''); //clear the inventory first
					}

					for(var inventoryItem in dataSet[key]){
						
						if(_this.hasItem(inventoryItem)){
		
							if(sym && typeof sym.$('Equip-Button-text') != 'undefined' ) {

								sym.$('Equip-Button-text').html('Item Carried. <a href="">View Player.</a>');
							}

						}
						
						else{

						}

						if(sym && sym.$('Inventory').length > 0 ){
							var itemSymbol = sym.createChildSymbol('inventory-item', 'Inventory');

							itemSymbol.$('title').html(dataSet[key][inventoryItem].title);
							itemSymbol.$('description').html(dataSet[key][inventoryItem].description);
							itemSymbol.getSymbol('item-image-container').$('image').css('backgroundImage', 'url('+dataSet[key][inventoryItem].img+')');
							console.log(itemSymbol.getSymbol('item-image-container').$('image').css('backgroundImage'));
		
							}
						else if(jQuery('#inventory').length > 0 ){
							
							jQuery('#inventory').append('<div class="inventory-item"><img class="item-image" width="20%" height="auto" src="'+dataSet[key][inventoryItem].img+'" /><div class="item-info"><h5 class="item-title">'+dataSet[key][inventoryItem].title+'</h5><p class="item-description">'+dataSet[key][inventoryItem].description+'</p></div></div>');

	
						}


					}


					_this.inventory = dataSet[key];
				}	

				if( key == 'monsters' ){
					if(sym && typeof sym.$('Monsters') != 'undefined'){
						//clear the monster wall element first

						sym.$('Monsters').html( '');//add to the monster wall
					}
					for(var monsterItem in dataSet[key]){

						if(monster.title == monsterItem.title){//is this monster the same as one already in the player data?
							//monster already defeated code goes here.
						}
						
						if(sym && sym.$('Monsters').length > 0 ){

							var monsterSymbol = sym.createChildSymbol('monster', 'Monsters');

							monsterSymbol.$('title').html(dataSet[key][monsterItem].title);
							monsterSymbol.$('description').html(dataSet[key][monsterItem].description);

							monsterSymbol.getSymbol('monster-image-container').$('monster-image').css('backgroundImage', 'url('+dataSet[key][monsterItem].img+')');
		
						}

						else if(jQuery('#monsters-defeated').length > 0){
							jQuery('#monsters-defeated').html('');
							jQuery('#monsters-defeated').append('<div class="monster"><img class="monster-image" width="20%" height="auto" src="'+dataSet[key][monsterItem].img+'" /><div class="monster-info"><h5 class="monster-title">'+dataSet[key][monsterItem].title+'</h5><p class="monster-description">'+dataSet[key][monsterItem].description+'</p></div></div>');

						}


					}
					_this.monsters = dataSet[key];
					
				}

				

		 }
	  	 
	  }
	  /* check if player has attributes - otherwise they are dead*/
		if(isDead){
			_this.setFrame('dead');
			if(sym){
				sym.stop('dead');
			}
			else{
				jQuery('#player-image').find('img').attr('src', imgPath+'zombie.png');
			}
		}
	
	}, function (errorObject) {//fires when firebase fails to read data.
	  console.log("The firebase read failed: " + errorObject.code);
	});
	

	}


}/* END PLAYER CLASS */

//ITEM CLASS CONSTRUCTOR
function Item(){
	this.title = 'Default Item Title';
	this.description = 'This is the default item description';
	this.attributes = {'creativity' : 1};
	this.img = imgPath+'default-item.png';
	this.price = 1;

	this.getItemData = function(){//intial data for the item
		if(jQuery.urlParam('itemId') == null){
			this.itemId = 'Default Item Class';
		}
		else{
			this.itemId = jQuery.urlParam('itemId');

		}
		//ANDY's ITEMS
		if(this.itemId == 'bluetooth-axe'){
			this.title = 'Blue Tooth Battle Axe';
			this.description = 'Comes with a speaker so you can listen to Slayer while you slay. Also has a bottle opener for breaktime. '
			this.attributes = {'creativity' : 1};
			this.img = imgPath+'battle-axe.png';
		}
		else if(this.itemId == 'mouse-of-nine-heads'){
			this.title = 'Mouse of Nine Heads';
			this.description = 'Cat of Nine Tails, look the F out, there is no esc from this. '
			this.attributes = {'charisma' : 1};
			this.img = imgPath+'mouse-of-9.png';
		}
		else if(this.itemId == 'wifi-shield'){
			this.title = 'Shield of WiFi';
			this.description = 'Blocks excess data charges, but leaves you a bit exposed. '
			this.attributes = {'knowledge' : 1};
			this.img = imgPath+'wifi-shield.png';
		}
		else if(this.itemId == 'sword'){
			this.title = 'Sword of Calculating';
			this.description = 'Just add this sword, subtract your enemy\'s limbs, divide their skull, and multiply the carnage.'
			this.attributes = {'creativity' : 1};
			this.img = imgPath+'sword.png';
		}
		else if(this.itemId == 'blue-ribbon-potion'){
			this.title = 'Blue Ribbon Potion';
			this.description = 'Do you need a frosty sippy-poo of courage? Thish wool totally do-er bud.'
			this.attributes = {'charisma' : 1};
			this.img = imgPath+'blue-ribbon-potion.png';
		}
		else if(this.itemId == 'lamp'){
			this.title = 'Lamp of Synergenie';
			this.description = 'Grants yours bloody wishes, but you’ll have to work together.'
			this.attributes = {'creativity' : 1};
			this.img = imgPath+'lamp.png';
		}
		else if(this.itemId == 'floppies'){
			this.title = 'Razor-Sharp Throwing Floppies';
			this.description = '13,107 of these equals one Gigabyte.'
			this.attributes = {'knowledge' : 1};
			this.img = imgPath+'floppies.png';
		}
		else if(this.itemId == 'mace'){
			this.title = 'Mace of Gore Competencies';
			this.description = 'Take what you’re best at and bash your way into new Monsters/Markets'
			this.attributes = {'charisma' : 1};
			this.img = imgPath+'mace.png';
		}

		//RYAN's ITEMS
		else if(this.itemId == 'chrome-pendant'){
			this.title = 'Chrome Pendant of Finding';
			this.description = 'You are pretty much lost without one.';
			this.attributes = {'knowledge' : 1};
			this.img = imgPath+'chrome-pendant.png';
		}
		else if(this.itemId == 'crystalline-usb'){
			this.title = 'Crystalline Universal Spell Book';
			this.description = 'It\'s always a good idea to back your spell book up on one of these, just in case.'
			this.attributes = {'knowledge' : 1};
			this.img = imgPath+'crystalline-usb.png';
		}
		else if(this.itemId == 'fedora'){
			this.title = 'White Knight\'s Fedora';
			this.description = 'Step up your game a notch with this stylish head-piece';
			this.attributes = {'charisma' : 1};
			this.img = imgPath+'fedora.png';
		}
		else if(this.itemId == 'phishing-rod'){
			this.title = 'Phishing Rod';
			this.description = 'Many fish bite if you got good bait.';
			this.attributes = {'creativity' : 1};
			this.img = imgPath+'phishing-rod.png';
		}
		else if(this.itemId == 'troll-hammer'){
			this.title = 'Troll Hammer';
			this.description = 'If you troll, you will be downvoted.';
			this.attributes = {'charisma' : 1};
			this.img = imgPath+'troll-hammer.png';
		}

	}
	this.addItem = function(){
		firebaseRef.child('items').child(this.title).set({

				'title' : this.title,
				'description' : this.description,
				'attributes' : this.attributes,
				'img' : this.img,
				'price' : this.price,


		});	
	}
	this.equipped = function(player){
		var isEquipped = false;
		
		if(typeof player.inventory != 'undefined'){
				for(var equippedItem in player.inventory){
					if(player.inventory.hasOwnProperty(equippedItem)) {
						if(item.title == equippedItem){
							isEquipped = true;
						}
				}
			}
		}
		return  isEquipped;
		//if its in the player's inventory, return true, else return false.
	}
	this.syncData = function(){
		firebaseRef.child('items').child(item.title).on('value', function(snapshot){
			var dataSet = snapshot.val();
			if(typeof AdobeEdge.getComposition('item') != 'undefined'){
				var sym = AdobeEdge.getComposition('item').getStage();
			}
			else {
				var sym = false;
				console.log('No symbol to sync data with. You must define a stage in this.syncData first.');
			}

	  for(var key in dataSet){
		if (dataSet.hasOwnProperty(key)) {
				if(key == 'title'){
					if(sym && typeof sym.$('Item-Title') != 'undefined'){
						sym.$('Item-Title').html( dataSet[key]);//update the title symbol
					}
					this.title = dataSet[key];
				}
				if(key == 'description'){
					if(typeof sym.$('Item-Description') != 'undefined'){
						sym.$('Item-Description').html( dataSet[key]); //update the description symbol
					}
					this.description = dataSet[key];
				}
				
				if(key == 'img'){ //update the item image 
					if(sym && typeof sym.getSymbol('item-image') != 'undefined' && sym.getSymbol('item-image').$('image').length > 0){
					sym.getSymbol('item-image').$('image').css('backgroundImage', 'url('+dataSet[key]+')');
					}
					this.img = dataSet[key];
				}
				
				if(key == 'attributes'){ //loop through the attributes and display the correct number for each.
					if(sym && typeof sym.$('Item-Attributes') != 'undefined' ){
						sym.$('Item-Attributes').html('');
						for(var attributeKey in dataSet[key]){ 
							
							for(var i = 0; i < dataSet[key][attributeKey]; i++){
								sym.$('Item-Attributes').append('<img class="'+attributeKey+'" src="'+imgPath+attributeKey+'.png" />' );
							}
						}
					}
					this.attributes = dataSet[key];
					
				}

				 if(key == 'price'){ //show crypto credits on some pages
					
					this.price = dataSet[key];
				}
			}
		  
	  	 
	  }
	 
	}, function (errorObject) {//fires when firebase fails to read data.
	  console.log("The firebase read failed: " + errorObject.code);
	});
	}

}

function Monster(monsterId){
	this.id = monsterId;
	this.title = 'This Monster';
	this.description = 'This is the Monster Description';
	this.img = imgPath+'monster.png';
	this.boss=false;
	this.attributes = {
		primary : 'charisma',
		secondary : 'creativity'
	};
	this.attacks = 1;
	this.hits = false;
	this.hitCount = 0;
	this.blocks = false;
	this.secondAttack = false;

	this.getMonsterData = function(){//intial data for the item
		if(jQuery.urlParam('monsterId') == null){
			this.monsterId = 'This Monster';
		}
		else{
			this.monsterId = jQuery.urlParam('monsterId');

		}
		if(this.monsterId == 'the-gibson'){
			this.id = monsterId;
			this.title = 'The Gibson';
			this.description = 'The most powerful (and evil) super-computer in all the land.';
			this.img = imgPath+'the-gibson.png';
			this.boss = true;
			this.attributes = {
				primary : 'knowledge',
				secondary : 'creativity',
				tertiary : 'charisma'
			};
		}
		if(this.monsterId == 'social-media'){
			this.id = monsterId;
			this.title = 'The Social Media Monster';
			this.description = 'You really don\'t want to like these things. It will only them stronger.';
			this.img = imgPath+'social-media-monster.png';
			this.boss = false;
			this.attributes = {
				primary : 'charisma',
				secondary : 'creativity'
			};
		}
		if(this.monsterId == 'viral-swarm'){
			this.id = monsterId;
			this.title = 'The Virus Swarm';
			this.description = 'Once defeated by these nasty bugs, you become a part of their botnet.';
			this.img = imgPath+'viral-swarm.png';
			this.boss = false;
			this.attributes = {
				primary : 'creativity',
				secondary : 'knowledge'
			};
		}
		if(this.monsterId == 'brogrammer'){
			this.id = monsterId;
			this.title = 'The Raging Brogrammer';
			this.description = 'His brute-force attack is sure to overwhelm your system.';
			this.img = imgPath+'brogrammer.png';
			this.boss = false;
			this.attributes = {
				primary : 'knowledge',
				secondary : 'charisma'
			};
		}
	}

	this.addMonster = function(){
		//sets the database record with the monster data

		firebaseRef.child('monsters').child(this.id).set({
			title : this.title,
			description : this.description,
			img : this.img,
			attributes : this.attributes,
			boss: this.boss
		});
	}
	this.syncData = function(){
		
		firebaseRef.child('monsters').child(this.id).on('value', function(snapshot){
			console.log('syncing monster data');
			var dataSet = snapshot.val();
			if(typeof AdobeEdge.getComposition('monster') != 'undefined'){
				var sym = AdobeEdge.getComposition('monster').getStage();
			}
			else {
				var sym = false;
				console.log('No symbol to sync data with. You must define a stage in this.syncData first.');
			}

			
		    for(var key in dataSet){
				if (dataSet.hasOwnProperty(key)) {


					if(key == 'title'){
						if(sym && typeof sym.$('Monster-Title') != 'undefined'){
							sym.$('Monster-Title').html( dataSet[key]);//update the title symbol
						}
						this.title = dataSet[key];
					}
					if(key == 'description'){
						if(typeof sym.$('Monster-Description') != 'undefined'){
							sym.$('Monster-Description').html( dataSet[key]); //update the description symbol
						}
						this.description = dataSet[key];
					}
					if(key == 'boss'){
						this.boss = dataSet[key];	
					}
					
					if(key == 'img'){ //update the item image
						if(sym && typeof sym.getSymbol('monster-image') != 'undefined' && sym.getSymbol('monster-image').$('image').length > 0){
						sym.getSymbol('monster-image').$('image').css('backgroundImage', 'url('+dataSet[key]+')');
						}
						this.img = dataSet[key];
					}
					
					if(key == 'attributes'){ //loop through the attributes and display the correct number for each.
						
						for(var attributeKey in dataSet[key]){ 

							if(attributeKey == 'primary'){		

								if(sym && sym.$('AttackAttribute').length > 0 ){
									
									sym.$('AttackAttribute').html('');
									//update primary attribute element
									sym.$('AttackAttribute').append('<img class="'+dataSet[key][attributeKey]+'" src="'+imgPath+dataSet[key][attributeKey]+'.png" />' );
								}
							}
							else if(attributeKey == 'secondary'){
								if(sym && sym.$('DefenseAttribute').length > 0 ){
									sym.$('DefenseAttribute').html('');
									//update secondary attribute element
									sym.$('DefenseAttribute').append('<img class="'+dataSet[key][attributeKey]+'" src="'+imgPath+dataSet[key][attributeKey]+'.png" />' );
								}
							}			
						}
						this.attributes = dataSet[key];	
					}
				}	  
			} 
		}, function (errorObject) {//fires when firebase fails to read data.
		  console.log("The firebase read failed: " + errorObject.code);
		});
	}
	this.goToFrame = function(sym, frameLabel){
		if(sym && typeof sym != 'undefined'){

			sym.play(frameLabel);
		}
	}

	this.attack = function(player, diceRoll){

	//attack the player with the monster's primary attribute. Rolls 20-attribute for a hit.
			if(diceRoll == 20){
					alert('What kind of monster rolls a nat 20?! Somebody must have rigged the dice...');
				}
			var attackScore = 10; //20 - primary attribute X 2;
			var winner = false;

			if(!this.boss){ 
				this.hitCount = 0;
			
				if(diceRoll >= attackScore){
					this.hits = true;
				}
				else{
					this.hits = false;
				}
				this.attacks = this.attacks - 1;
				
				player.setFrame('monster-attack-start');
			} //bosses get multiple attacks
			
			else if(this.boss == true){				
				
				attackScore = 5;
				if(this.secondAttack === true){
					if(diceRoll >= attackScore){
						this.hits = true;
					}
					else{
						this.hits = false;
					}
					player.setFrame('boss-attack-2-start');
				}
				else{
					if(diceRoll >= attackScore){
						this.hits = true;
					}
					else{
						this.hits = false;
					}
	                player.setFrame('boss-attack-start');
				}

			}

		

		

	//player attacks back

		

	//Battle Results:
		
	}//end monster Attack
}//end monster class def.


/* -------  Player Attack and Defend -------- */
Player.prototype.blockAttack = function(monster, diceRoll){

		var attributeId = monster.attributes.primary;
		var defendScore = 20 - (this.attributes[attributeId] * 5);
		console.log('block: ' + diceRoll+ ' : ' + defendScore);
		if(diceRoll == 20){
			alert('Whoa Dog! You rolled a nat 20! Y\'all got skills for sure.');
		}
		if(diceRoll >= defendScore){
			this.blocks = true;
		}
		else{
			this.blocks = false;
		}
		console.log('player blocks attack: '+this.blocks);

	}
Player.prototype.attack = function(monster, diceRoll){

		player.hitCount = 0;
		var attributeId = monster.attributes.secondary;
		var attackScore = 20 - (this.attributes[attributeId] * 5);
		console.log('attack: '+ diceRoll + ' : ' +  attackScore);
		monster.blocks == false;

		if(diceRoll == 20){
			alert('Whoa Dog! You rolled a nat 20! Y\'all got skills for sure.');
		}
		if(diceRoll >= attackScore){
			
			this.hits = true;
			console.log('player hits on attack: '+ this.hits);

			//monster rolls to block
			var defendScore = 15; //Monsters defense score - same as their secondary attribute;		
				if(rollTheDice(20) >= defendScore){
					monster.blocks = true;
				}

				else{
					monster.blocks = false;	

				}

				console.log('monster defends your attack: ' + monster.blocks);

		}
		else{
			this.hits = false;
		}
		

		if(this.hits == true && monster.blocks != true){
			console.log('Your attack hits!');
			this.hitCount++;
		}
		else{
			console.log('your attack missed!');
		}
	}


function battleResults(monster, player, sym){
	player.wins = false;

	if(monster.hitCount > player.hitCount){
		console.log(monster.title + ' Wins!');
		//monster defeats you and you lose all your stuff.
		if(monster.boss != true){
		 sym.play('monster-wins');
		}
		else{
			sym.play('boss-wins');
		}

	}
	else if(monster.hitCount == player.hitCount){
		console.log('Tie Game');
		monster.status.html('Tie Game!');
		
		if(monster.boss != true){
		sym.play();
		}
		else{
			sym.play('boss-tie');
		}

		
	}
	else if(player.hitCount > monster.hitCount){
		player.wins = true;
		if(monster.boss != true){
			console.log('You Defeated the Monster!');
			sym.play('player-wins');
			}
		else{
			sym.play('player-beats-boss');
		}
			
	}
}




