
/* Get URL PARAMS */
$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}
// usage: console.log($.urlParam('playerId'));


/* --- Globals --- */

/* Sets up connection to Firebase */
var firebaseRef = new Firebase('https://dungeon-hacker.firebaseio.com/');

if(typeof playerId == 'undefined'){//first check if playerId is set globally elsewhere
   if( $.urlParam('playerId') != null ){//then check if playerId is passed as a url parameter
      var playerId = $.urlParam('playerId');
   }
   else{
     var playerId = 'test-id';
   }
 
};


var player = new Player(playerId);


if(typeof itemId == 'undefined'){
 if( $.urlParam('itemId') != null){
   var itemId = $.urlParam('itemId');
  }
  else{
    var itemId = 'default-item';
  }
}
var item = new Item(itemId);
/* - end Globals - */






/* defines classes for player, monster, item and attribute and assigns them properties and methods */

function Player(playerID){ //pass unique player ID to the constructor.
	
	this.id = playerID;
	this.title = "Default Player Title";
	this.description = "The default player description.";
	this.playerImg = 'images/project-manager.png';
	this.playerClass = 'Default Player Class';
	this.cryptoCredits = 0;
	this.attributes = {};
	this.inventory = {};
	
	this.getPlayerClass = function(){ //setup player data based on url parameter for playerClasses.
		if($.urlParam('playerClass') == null){
			this.playerClass = 'Default Character Class';
		}
		else{
			this.playerClass = $.urlParam('playerClass');

		}
		if(this.playerClass == 'project-manager'){
			 this.title = 'Project Manager';
			 this.attributes = { charisma : 1, creativity : 1, knowledge : 1};
			 this.description = 'A Project Manager is the all-around balanced character';
			 this.playerImg = 'images/project-manager.png';
		}
		else if(this.playerClass == 'designer'){
			 this.title = 'Designer';
			 this.attributes = { charisma : 0, creativity : 2, knowledge : 1};
			 this.description = 'A Designer is creative and knowledgeable';
			 this.playerImg = 'images/designer.png';
		}
		else if(this.playerClass == 'developer'){
			 this.title = 'Developer';
			 this.attributes = { charisma : 0, creativity : 1, knowledge : 2};
			 this.description = 'The Developer builds the things';
			 this.playerImg = 'images/project-manager.png';
		}
		else if(this.playerClass == 'executive'){
			 this.title = 'Executive';
			 this.attributes = { charisma : 2, creativity : 0, knowledge : 1};
			 this.description = 'The Executive runs the ship and stuff...';
			 this.playerImg = 'images/designer.png';
		}
		else{
			 this.title = 'Default Character Class';
			 this.attributes = { charisma : 1, creativity : 1, knowledge : 1};
			 this.description = 'This is the default character class';
			 this.playerImg = 'images/project-manager.png';
		}
	}

	this.getPlayerData = function(){
		var _this = this; //retain a reference to the player object.
		firebaseRef.child('players').child(this.id).on('value', function(snapshot){
			playerData = snapshot.val();
			_this.cryptoCredits = playerData['cryptoCredits'];
			_this.attributes = playerData['attributes'];
			_this.inventory = playerData['inventory'];
		});
		
	}



	this.loadData = function(sym){
		//initial composition setup - populates data based on character class, but does not interact with firebase yet.
		sym.$('Title').html( player.title );//update the title symbol
		sym.$('Description').html( player.description ); //update the description symbol
		sym.getSymbol('PlayerImage').$('image').css('backgroundImage', 'url('+player.playerImg+')');
		sym.$('Attributes').html('');
		for(var attributeKey in player.attributes){ 
			
			for(var i = 0; i < player.attributes[attributeKey]; i++){
				sym.$('Attributes').append('<img class="'+attributeKey+'" src="images/'+attributeKey+'.png" />' );
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
				'inventory' : this.inventory


		});
	}
	this.update = function(att, value){//update existing firebase player entry with new data.
		var attributeObj = {};
		attributeObj[att] = value;
		firebaseRef.child('players').child(this.id).update(attributeObj);

	}
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

	//Player DATA SYNC with Firebase - events that fire when the firebase database is updated. returns an object like this:
	// {class: "default-class", description: "The default player description.", title: "Default Player Title"}	
	this.syncData = function(){ //bind to data changes to stay synced with the firebase data.
		var _this = this;
	  firebaseRef.child('players').child(this.id).on("value", function(snapshot) {
	  	//The 'value' event fires once on load and whenever a value changes. 
	  var dataSet = snapshot.val(); //js object with the complete data set for the player.
	  
	  if(typeof AdobeEdge.getComposition('player') != 'undefined'){
		  var sym = AdobeEdge.getComposition('player').getStage(); //get a reference to the edge animation stage
		}
		else if(typeof AdobeEdge.getComposition('item') != 'undefined'){
				var sym = AdobeEdge.getComposition('item').getStage();
			}
		else {
			console.log('No symbol to sync data with. You must define a stage in this.syncData first.');
			var sym = false;
	
		}

		/* Clean things up first */
		if(sym && typeof sym.$('Inventory') != 'undefined'){ 
					sym.$('Inventory').html(''); //clear the inventory first
				}

	  for(var key in dataSet){
		if (dataSet.hasOwnProperty(key)) {
			
			
			if( key == 'title' ){
				if(sym && typeof sym.$('Title') != 'undefined'){
					sym.$('Title').html( dataSet[key]);//update the title symbol
				}
				_this.title = dataSet[key];
				
			}
			
			if(key == 'description'){
				if(sym && typeof sym.$('Description') != 'undefined'){
					sym.$('Description').html( dataSet[key]); //update the description symbol
				}
				_this.description = dataSet[key];
			}
			
			if(key == 'playerImg'){ //update the playerImg 
				if(sym && typeof sym.getSymbol('PlayerImage') != 'undefined' && sym.getSymbol('PlayerImage').$('image').length > 0){
				sym.getSymbol('PlayerImage').$('image').css('backgroundImage', 'url('+dataSet[key]+')');
				}
				_this.playerImg = dataSet[key];
			}
			
			if(key == 'attributes'){ //loop through the attributes and display the correct number for each.
				if(sym && typeof sym.$('Attributes') != 'undefined' ){
					sym.$('Attributes').html('');
					for(var attributeKey in dataSet[key]){ 
						
						for(var i = 0; i < dataSet[key][attributeKey]; i++){
							sym.$('Attributes').append('<img class="'+attributeKey+'" src="images/'+attributeKey+'.png" />' );
						}
					}
				}
				_this.attributes = dataSet[key];
				
			}

			 if(key == 'cryptoCredits'){ //show crypto credits on some pages
				if(sym && typeof sym.$('CryptoCredits') != 'undefined'){
					sym.$('CryptoCredits').html('');
					for(var credits = 0; credits < 	dataSet[key]; credits++){
						sym.$('CryptoCredits').append( '<img class="crypto-credit" src="images/crypto-credit.png" />');//add another crypto credit
					}
				}
				_this.cryptoCredits = dataSet[key];
			}

			if(key == 'inventory'){
				


				for(var inventoryItem in dataSet[key]){
					
					if(_this.hasItem(inventoryItem)){
	
						if(sym.$('Equip-Button-text').length > 0) {

							sym.$('Equip-Button-text').html('Item Carried');
						}

					}
					
					else{

					}

					if(sym && typeof sym.$('Inventory') != 'undefined'){

						var itemSymbol = sym.createChildSymbol('inventory-item', 'Inventory');

						itemSymbol.$('title').html(dataSet[key][inventoryItem].title);
						itemSymbol.$('description').html(dataSet[key][inventoryItem].description);

						itemSymbol.getSymbol('item-image-container').$('item-image').css('backgroundImage', 'url('+dataSet[key][inventoryItem].img+')');
	
						}


				}


				_this.inventory = dataSet[key];
			}

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
	this.img = 'images/default-item.png';
	this.price = 1;

	this.getItemData = function(){//intial data for the item
		if($.urlParam('itemId') == null){
			this.itemId = 'Default Item Class';
		}
		else{
			this.itemId = $.urlParam('itemId');

		}
		if(this.itemId == 'glove-of-power'){
			this.title = 'Glove of Power';
			this.description = 'The glove of power increases your charisma '
			this.attributes = {'charisma' : 1};
			this.img = 'images/glove-of-power.png';
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
				//	console.log('No symbol to sync data with. You must define a stage in this.syncData first.');
			}

	  for(var key in dataSet){
		if (dataSet.hasOwnProperty(key)) {
			
			if(key == 'title'){
				if(typeof sym.$('Item-Title') != 'undefined'){
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
				if(typeof sym.getSymbol('item-image') != 'undefined' && sym.getSymbol('item-image').$('image').length > 0){
				sym.getSymbol('item-image').$('image').css('backgroundImage', 'url('+dataSet[key]+')');
				}
				this.playerImg = dataSet[key];
			}
			
			if(key == 'attributes'){ //loop through the attributes and display the correct number for each.
				if(typeof sym.$('Item-Attributes') != 'undefined' ){
					sym.$('Item-Attributes').html('');
					for(var attributeKey in dataSet[key]){ 
						
						for(var i = 0; i < dataSet[key][attributeKey]; i++){
							sym.$('Item-Attributes').append('<img class="'+attributeKey+'" src="images/'+attributeKey+'.png" />' );
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



