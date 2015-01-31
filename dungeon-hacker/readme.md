#Dungeon Hacker
Dungeon Hacker is an Augmented Reality Dungeon Crawler. You play The game by Scanning a character card, then finding items and monsters and scanning them. [Check out the PDF Overview here](https://github.com/gabeshaughnessy/augmentedart/blob/dungeon-hacker/dungeon-hacker/pdfs/Game-Outline_small.pdf)
<img src="http://www.augmentedart.com/wp-content/uploads/2015/01/dh-poster.jpg" width="100%"/>
##Overview
Dungeon Hacker is a gallery installation at the [Diode gallery](http://www.jetsoncreative.com/diode) for electronic art that is both an illustration show and an game that visitors play on their smartphones by scanning the illustrations.

The illustrations that are activated with the [Layar augmented reality app](http://get.layar.com/). Visitors play the Dungeon Hacker game by loading layar, and scanning the illustrations to view the augmented reality content.

###Gameplay 
This is a brief summary of the gameplay and mechanics

####Select a Character
First you scan a character and touch the image to select that character. Each character has a unique set of attributes for fighting the monsters. 

Visit this URL to select a new character: 
[http://augmentedart.com/dungeon-hacker/edge-animations/player.html](http://augmentedart.com/dungeon-hacker/edge-animations/player.html)
add a `playerId` paramerter like this or your will just be the default player:
`http://augmentedart.com/dungeon-hacker/edge-animations/player.html?playerId=your-name`

####Your Player Card
After you select a character, you can view your player card, which is a one-page stat sheet for your player. It contains your character class, attributes, items in your inventory, and your trophy wall with the monsters you have defeated. Each player card has a unique url and at the bottom there are links to share it on social networks. Player cards are activated by clicking the player card button or in the Layar menu under recent content > player card. Once you share your player card, it is accessible from the unique url in a web browser.

Vist this URL to view your character card after you have selected a character:
[http://augmentedart.com/dungeon-hacker/edge-animations/player-card.html](http://augmentedart.com/dungeon-hacker/edge-animations/player-card.html)
you need to add your playerId to the end again, like `http://augmentedart.com/dungeon-hacker/edge-animations/player-card.html?playerId=your-name`

####Get Some Items
When you select a new player, you are given one crypto-credit, which is enough to buy a single item. Items are a series of small illustrations, done by several artists. Each Item has a unique attribute that it provides. You can get more items by defeating monsters. 
Monsters appear when you scan the door illustrations with Layar. When you scan the door, a monster appears. The monster has attack(primary) and defense(secondary) attributes, and you have the option of running away or fighting the monster. If you run away, you roll a 20 sided die and a 10 or better gets away, otherwise you fight the monster anyway.
You can Pickup an item at this URL:
[http://augmentedart.com/dungeon-hacker/edge-animations/item.html](http://augmentedart.com/dungeon-hacker/edge-animations/item.html). Just like before, you need to add your playerId parameter to the url like this:
`http://augmentedart.com/dungeon-hacker/edge-animations/item.html?playerId=your-name`

####Fighting Monsters
If you fight the monster, the monster attacks first. First the monster rolls for its attack attribute. It needs a 10 or higher on a 20 sided die to hit. You take your matching attribute and total it to get your attribute score, then roll a 20 minus your attribute score to block the attack. The monster either misses, or it hits. If it hits and you block it is a miss. Then you roll for your attack. You total your attribute that matches the monster’s defence attribute and roll a 20 minus your attribute score. If you hit, the monster rolls its defence attribute and either blocks or you hit. If both you and the monster scored a hit, then you roll for a tie, highest roll wins. 

If you defeat the monster, you are awarded a few crypto-credits, which you can use to get more items. The monster is added to the trophy wall on your player card.

####Boss Mode
After you face all the monsters, you face the big boss. The big boss is just a monster with better attributes and two attacks. However, if you defeat the big boss, your player card is completed and you are awarded a prize. You can boast on social media about your accomplishments and share the url to your player card. 

##Technical Overview
The site uses Adobe Edge Animate to generate the html views.
Each view loads the app.js file, which defines classes, properties and methods for the Javascript Objects `Player`, `Monster`, `Item`, `Attribute` and `DiceRoll`. 

###Firebase Settings
The site uses a [Firebase Database](https://dungeon-hacker.firebaseio.com/) to store data and Sync data between views. Request access to the database by contacting gabeshaughnessy@gmail.com. 

##TODO
- [x] Define classes:
	- [x] Player
	- [x] Monster
	- [x] Item
	- [x] DiceRoll
- [x] Player View
	- [x] Player Selected
- [x] Item View
	- [x] Item Already Carried
	- [x] Equip Item
	- [ ] Sell Item
- [x] Player Card View
	- [x] Player Data
	- [x] Credits
	- [x] Inventory
	- [ ] Monsters Defeated
- [x] Monster View
	- [x] Add Monster
	- [x] Sync Monster Data with View - not necessary...
	- [x] Basic Attack Sequence
		- [x] Attack Sequence Stages with Views
- [ ] Boss View
- [x] Dice Roll
	- [x] 20-sided sprite for the dice, much smaller and without the shadow.
	- [x] text fields for your roll score, monster's roll score on the monster view.
<img src="https://raw.githubusercontent.com/gabeshaughnessy/augmentedart/dungeon-hacker/dungeon-hacker/images/poster-sketch.jpg" width="100%"/>