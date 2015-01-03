/* Sets up connection to Firebase */
var firebaseRef = new Firebase('https://dungeon-hacker.firebaseio.com/');



/* defines classes for player, monster, item and attribute and assigns them properties and methods */

function Player(playerID){ //pass unique player ID to the constructor.
	
	this.player = 'player-' + playerID;
	this.title = "Default Player Title";
	this.description = "The default player description.";
	this.playerImg = 'images/project-manager.png';
	this.playerClass = 'Default Player Class';
	this.getPlayerClass = function(){
		if($.urlParam('playerClass') == null){
			player.playerClass = 'Default Character Class';
		}
		else{
			player.playerClass = $.urlParam('playerClass');

		}
		if(player.playerClass == 'project-manager'){
			 player.title = 'Project Manager';
			 player.attributes = { charisma : 1, creativity : 1, knowledge : 1};
			 player.description = 'A Project Manager is the all-around balanced character';
			 player.playerImg = 'images/project-manager.png';
		}
		else if(player.playerClass == 'designer'){
			 player.title = 'Designer';
			 player.attributes = { charisma : 0, creativity : 2, knowledge : 1};
			 player.description = 'A Designer is creative and knowledgeable';
			 player.playerImg = 'images/designer.png';
		}
		else{
			 player.title = 'Default Character Class';
			 player.attributes = { charisma : 1, creativity : 1, knowledge : 1};
			 player.description = 'This is the default character class';
			 player.playerImg = 'images/project-manager.png';
		}
	}
	this.addPlayer = function(){ //create a new player entry in the db or replace existing player entry
		firebaseRef.child('players').child(this.player).set({

				'title' : this.title,
				'description' : this.description,
				'playerImg' : this.playerImg,


		});
	}
	this.update = function(att, value){
		//update existing player entry with new data.
		var attributeObj = {};
		attributeObj[att] = value;
		firebaseRef.child('players').child(this.player).update(attributeObj);

	}

	//when the composition initially loads, check for a player id. If none exists, create a new one. Then check for a l
	this.loadData = function(sym){
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

	this.syncData = function(){
	  firebaseRef.child('players').child(this.player).on("value", function(snapshot) {
	  
	  var dataSet = snapshot.val();
	  var sym = AdobeEdge.getComposition('player').getStage(); //get a reference to the edge animation stage
	  for(var key in dataSet){
		if (dataSet.hasOwnProperty(key)) {
			
			if(key = 'title'){
				sym.$('Title').html( dataSet[key]);//update the title symbol
			}
			
			if(key = 'description'){
				sym.$('Description').html( dataSet[key]); //update the description symbol
			}
			
			if(key = 'playerImg'){ //update the playerImg 
				sym.getSymbol('PlayerImage').$('image').css('backgroundImage', 'url('+dataSet[key]+')');
			}
			
			if(key = 'attributes'){ //loop through the attributes and display the correct number for each.
				sym.$('Attributes').html('');
				for(var attributeKey in dataSet[key]){ 
					
					for(var i = 0; i < dataSet[key][attributeKey]; i++){
						sym.$('Attributes').append('<img class="'+attributeKey+'" src="images/'+attributeKey+'.png" />' );
					}
				}
				
			}

		  }
	  	 
	  }
	 
	}, function (errorObject) {
	  console.log("The firebase read failed: " + errorObject.code);
	});
	}
	
	//DATA SYNC with Firebase - events that fire when the firebase database is updated. returns an object like this:
	// {class: "default-class", description: "The default player description.", title: "Default Player Title"}

	
}




