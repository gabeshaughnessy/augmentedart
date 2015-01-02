/* Sets up connection to Firebase */
var firebaseRef = new Firebase('https://dungeon-hacker.firebaseio.com/');

/* defines classes for player, monster, item and attribute and assigns them properties and methods */

function Player(playerID){ //pass unique player ID to the constructor.
	
	this.player = 'player-' + playerID;
	this.playerClass = 'default-class';
	this.title="Default Player Title";
	this.description = "The default player description.";
	
	this.addPlayer = function(){ //create a new player entry in the db or replace existing player entry
		firebaseRef.child('players').child(this.player).set({

				'title' : this.title,
				'class' : this.playerClass,
				'description' : this.description,


		});
	}
	this.update = function(att, value){
		//update existing player entry with new data.
		
		firebaseRef.child('players').child(this.player).update({

			att : value
			//not working attribute is note resolving


		});
	}
}


