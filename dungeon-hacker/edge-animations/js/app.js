
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
	
	this.id = 'player-' + playerID;
	this.title = "Default Player Title";
	this.description = "The default player description.";
	this.playerImg = 'images/project-manager.png';
	this.playerClass = 'Default Player Class';
	
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
		else{
			 this.title = 'Default Character Class';
			 this.attributes = { charisma : 1, creativity : 1, knowledge : 1};
			 this.description = 'This is the default character class';
			 this.playerImg = 'images/project-manager.png';
		}
	}

	this.getPlayerData = function(){
		firebaseRef.child('players').child(this.id).once('value', function(snapshot){
			playerData = snapshot.val();
			this.cryptoCredits = playerData['cryptoCredits'];
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
				'attributes' : this.attributes


		});
	}
	this.update = function(att, value){//update existing firebase player entry with new data.
		var attributeObj = {};
		attributeObj[att] = value;
		firebaseRef.child('players').child(this.player).update(attributeObj);

	}

	this.syncData = function(){ //bind to data changes to stay synced with the firebase data.
	  firebaseRef.child('players').child(this.id).on("value", function(snapshot) {
	  	//The 'value' event fires once on load and whenever a value changes. 
	  var dataSet = snapshot.val(); //js object with the complete dataset for the player.
	  var sym = AdobeEdge.getComposition('player').getStage(); //get a reference to the edge animation stage
	  for(var key in dataSet){
		if (dataSet.hasOwnProperty(key)) {
			
			if(key == 'title'){
				sym.$('Title').html( dataSet[key]);//update the title symbol
			}
			
			if(key == 'description'){
				sym.$('Description').html( dataSet[key]); //update the description symbol
			}
			
			if(key == 'playerImg'){ //update the playerImg 
				sym.getSymbol('PlayerImage').$('image').css('backgroundImage', 'url('+dataSet[key]+')');
			}
			
			if(key == 'attributes'){ //loop through the attributes and display the correct number for each.
				sym.$('Attributes').html('');
				for(var attributeKey in dataSet[key]){ 
					
					for(var i = 0; i < dataSet[key][attributeKey]; i++){
						sym.$('Attributes').append('<img class="'+attributeKey+'" src="images/'+attributeKey+'.png" />' );
					}
				}
				
			}

			 if(key == 'cryptoCredits'){ //show crypto credits on some pages
				if(sym.$('CryptoCredits').length > 0){
					sym.$('CryptoCredits').html('');
					for(var credits = 0; credits < 	dataSet[key]; credits++){
						sym.$('CryptoCredits').append( '<img class="crypto-credit" src="images/crypto-credit.png" />');//add another crypto credit
					}
				}
			}
		  }
	  	 
	  }
	 
	}, function (errorObject) {//fires when firebase fails to read data.
	  console.log("The firebase read failed: " + errorObject.code);
	});
	}
	//DATA SYNC with Firebase - events that fire when the firebase database is updated. returns an object like this:
	// {class: "default-class", description: "The default player description.", title: "Default Player Title"}	
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
	this.pickUpItem = function(player){
		
		var itemObject = {};
	    itemObject[this.title] = 'carried';
        firebaseRef.child('players').child(player.id).child('inventory').update(itemObject);

	}

}



