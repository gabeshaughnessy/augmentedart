/* Sets up connection to Firebase */
var firebaseRef = new Firebase('https://dungeon-hacker.firebaseio.com/');



/* defines classes for player, monster, item and attribute and assigns them properties and methods */

function Player(playerID){ //pass unique player ID to the constructor.
	
	this.player = 'player-' + playerID;
	this.playerClass = 'default-class';
	this.title = "Default Player Title";
	this.description = "The default player description.";
	this.playerImg = 'images/project-manager.png';
	this.addPlayer = function(){ //create a new player entry in the db or replace existing player entry
		firebaseRef.child('players').child(this.player).set({

				'title' : this.title,
				'class' : this.playerClass,
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
	
	//data sync - events that fire when the firebase database is updated. returns an object like this:
	// {class: "default-class", description: "The default player description.", title: "Default Player Title"}

	firebaseRef.child('players').child(this.player).on("value", function(snapshot) {
	  console.log(snapshot.val());
	  var dataSet = snapshot.val();
	  var sym = AdobeEdge.getComposition('player').getStage(); //get a reference to the edge animation stage
	  for(var key in dataSet){
		if (dataSet.hasOwnProperty(key)) {
			if(key = 'title'){
				sym.$('Title').html( dataSet[key]);
			}
			if(key = 'description'){
				sym.$('Description').html( dataSet[key]);
			}
			if(key = 'playerImg'){
				//console.log(sym.getSymbol('PlayerImage').$('image').css('backgroundImage'));
				sym.getSymbol('PlayerImage').$('image').css('backgroundImage', 'url('+dataSet[key]+')');
				//sym.getSymbol('PlayerImage').$('image').html('<img src="'+dataSet[key]+'" />"');
			}
			if(key = 'attributes'){
				sym.$('Attributes').html('');
				for(var attributeKey in dataSet[key]){
					console.log(dataSet[key][attributeKey]);
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


