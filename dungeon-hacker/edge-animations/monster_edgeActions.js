/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
       monster.getMonsterData();
       player.syncData();
       monster.syncData();
       
       
       dice.symbol = sym.getSymbol('diceRoll');
       if(checkIfItemExists('monsters', monster.id)){
       
       }
       else{
       monster.addMonster();
       }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2458, function(sym, e) {
         player.setFrame('block');
         
         player.blockScore = 20 - (player.attributes[monster.attributes.primary] * 5);
         monster.status.html('Roll to block the attack.<br/>You need to roll a ' + player.blockScore + ' or higher. <br />Tap to continue.');
         sym.stop();
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6931, function(sym, e) {
         player.setFrame('battle-results');
         battleResults(monster, player, sym);
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13292, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         monster.status = sym.$('Status');
         if(monster.boss === true){
         monster.status.html('<strong>Boss Mode!!!</strong><br />'+monster.title+' attacks twice and needs an to roll an 5 or higher to hit. Tap to continue.');
         }
         else{
         monster.status.html(monster.title + ' attacks first.<br/>It needs to roll a 10 or higher to hit. <br />Tap to continue.');
         }
         sym.stop();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Status}", "click", function(sym, e) {
         
         sym.play();
         // insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12792, function(sym, e) {
         
         if(monster.blocks == true){
         monster.status.html(monster.title + 'blocked your attack<br /> and defeated you!');
         
         if(typeof monster.tiebreaker != 'undefined'){
         		monster.status.html(monster.title+' rolls a '+monster.tiebreaker+' and wins the tiebreaker, <br /> You have been defeated!');
         		player.reset();
         
         }
         
         }
         else{
         monster.status.html(monster.title + ' defeated you!');
         if(typeof monster.tiebreaker != 'undefined'){
         		monster.status.html(monster.title+' rolls a '+monster.tiebreaker+' and wins the tiebreaker, <br /> You have been defeated!');
         		player.reset();
         
         }
         }
         
         player.reset();
         sym.stop('dead');
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13106, function(sym, e) {
         var facedMonster = false;
         for(var thisMonster in player.monsters){
         			if(monster.title == thisMonster){
         			facedMonster = true;
         			}
         			else{
         			facedMonster = false;
         			}
         		}
         		if(!facedMonster){
         monster.status.html('You Defeated '+monster.title+' and found 1 Crypto-credit!<br />Tap to face '+monster.title+' again.');
         		}
         		else{
         		monster.status.html('You Defeated '+monster.title+'!<br /> You already looted the room, but <br /> you can tap to face '+monster.title+' again.');
         
         		}
         player.addMonster(monster);
         sym.stop();// insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8882, function(sym, e) {
         if(monster.blocks == true){
         monster.status.html(monster.title + ' blocked your attack to tie the match!<br/>Roll to break the tie, highest roll wins. <br />Tap to continue.');
         
         }
         monster.status.html('Tie Game!<br/>Roll to break the tie, highest roll wins. <br />Tap to continue.');
         
         
         
         player.setFrame('tie-game-start');// insert code here
         
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12969, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_diceRoll}", "click", function(sym, e) {
         sym.play();// insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10787, function(sym, e) {
         if(player.tiebreaker == 20){
         				alert('Damn, nat 20?! That\'s certainly one way to break a tie...');
         			}
         monster.status.html('You rolled a '+ player.tiebreaker+'. </br /> Tap to roll for '+monster.title+'.');
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6100, function(sym, e) {
         player.setFrame('attack-results');
         console.log('playerhits : '+player.hits);
                 console.log('monsterblocks : '+monster.blocks);
         if(player.hits == true && monster.blocks == false){
           monster.status.html('Your attack hits! <br />Tap to continue.');
          }
          else if(player.hits == true && monster.blocks == true){
           monster.status.html('The Monster Blocked your attack! <br />Tap to continue.');
          }
         else{
           monster.status.html('Your attack misses! <br />Tap to continue.');
          }
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 143, function(sym, e) {
         monster.attack(player, dice.roll(20, dice.symbol));
         monster.status.html(monster.title + ' is rolling...');
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2601, function(sym, e) {
         player.blockAttack(monster, dice.roll(20, dice.symbol));
         
         monster.status.html('Rolling...');// insert code here

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5084, function(sym, e) {
        player.setFrame('player-attacks');
        player.attackScore = 20-(player.attributes[monster.attributes.secondary]*5);
        monster.status.html('Roll to attack '+monster.title+'.<br/>You need a '+ player.attackScore + ' or higher to hit. <br />Tap to continue.');
        
        sym.stop();// insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1066, function(sym, e) {
         if(monster.hits == true){
           monster.status.html(monster.title + ' rolls a '+ dice.value + ' and hits! <br />Tap to continue.');
          }
         else{
           monster.status.html(monster.title + ' rolls a '+ dice.value +' and misses! <br />Tap to continue.');
          }// insert code here
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4876, function(sym, e) {
         sym.stop();// insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5227, function(sym, e) {
         player.attack(monster, dice.roll(20, dice.symbol));
         monster.status.html('Rolling...');// insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6780, function(sym, e) {
         sym.stop();// insert code here

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9025, function(sym, e) {
         
         player.tiebreaker = dice.roll(20, dice.symbol);
         
         monster.status.html('Rolling...');// insert code here
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12250, function(sym, e) {
         sym.stop();// insert code here		
         if(player.tiebreaker == 20){
         				alert('Well shiii-ot, a nat 20?! I ain\'t saying the dice are loaded, but it sure does look that way');
         			}
         if(monster.tiebreaker == 20){
         alert('What kind of monster rolls a nat 20?! Somebody must have rigged the dice...');
         }			
         if(monster.tiebreaker > player.tiebreaker){
         		monster.status.html(monster.title+' rolls a '+monster.tiebreaker+' and wins the tiebreaker. <br />Tap to continue.');
         		sym.stop('monster-wins');
         		}
         
         	else if(monster.tiebreaker == player.tiebreaker){
         	monster.status.html(monster.title + 'also rolled '+monster.tiebreaker+'<br />so you must roll again! <br />Tap to continue.');
         		console.log('tied again! roll once more');
         		sym.stop();
         
         	}
         	else{
         		monster.status.html(monster.title+' rolled a '+monster.tiebreaker+' </br/> so you win the tiebreaker. <br />Tap to continue.');
         		sym.stop('player-wins');
         
         		}
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.stop();
         
         	
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3662, function(sym, e) {
         player.setFrame('block-results');
         if(player.blocks == true){
         monster.status.html('You block the attack! <br />Tap to continue.');// insert code here
         }
         else{
         monster.status.html('Your block fails. <br />Tap to continue.');
         monster.hitCount++;
         }// insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10920, function(sym, e) {
         monster.tiebreaker = dice.roll(20, dice.symbol);
         monster.status.html(monster.title + ' is rolling...');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12285, function(sym, e) {
         if(monster.tiebreaker == player.tiebreaker){
         sym.play('tie-game');
         }

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_Monster-Title}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Dead_Player}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13514, function(sym, e) {
         monster.status.html('Your Player has been vanquished!<br />Tap to view your player card.');
         
         var linkUrl = playerCardURL+'?playerId='+player.id;
         sym.$('Dead_Player').wrap('<a href="'+linkUrl+'">');

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2305, function(sym, e) {
         if(monster.hits != true){
         		sym.stop('player-attacks');
         	}

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20086, function(sym, e) {
         monster.attack(player, dice.roll(20, dice.symbol));
         
         monster.status.html(monster.title + ' is rolling...');
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21250, function(sym, e) {
         if(monster.hits == true){
           monster.status.html(monster.title + ' rolls a '+ dice.value + ' and hits! <br />Tap to continue.');
          }
         else{
           monster.status.html(monster.title + ' rolls a '+ dice.value +' and misses! <br />Tap to continue.');
          }// insert code here
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22250, function(sym, e) {
         sym.stop();// insert code here
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22366, function(sym, e) {
         if(monster.hits != true){
               monster.secondAttack = true;
         		sym.stop('boss-attack-two');
         	}// insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22500, function(sym, e) {
         player.setFrame('boss-block-1');
         player.blockScore = 20 - (player.attributes[monster.attributes.primary] * 5);
         monster.status.html('Roll to block the attack.<br/>You need to roll a ' + player.blockScore + ' or higher. <br />Tap to continue.');
         sym.stop();// insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27750, function(sym, e) {
         player.setFrame('boss-block-2');
         player.blockScore = 20 - (player.attributes[monster.attributes.tertiary] * 5);
         monster.status.html('Roll to block the attack.<br/>You need to roll a ' + player.blockScore + ' or higher. <br />Tap to continue.');
         sym.stop();// insert code here// insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22638, function(sym, e) {
         player.blockAttack(monster, dice.roll(20, dice.symbol));
         
         monster.status.html('Rolling...');// insert code here
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27860, function(sym, e) {
         player.blockAttack(monster, dice.roll(20, dice.symbol));
         
         monster.status.html('Rolling...');// insert code here
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         sym.stop();// insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24847, function(sym, e) {
         sym.stop();// insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23750, function(sym, e) {
         player.setFrame('boss-block-1-results');
         if(player.blocks == true){
         monster.status.html('You block the attack! <br />Tap to continue.');// insert code here
         }
         else{
         monster.status.html('Your block fails. <br />Tap to continue.');
         monster.hitCount++;
         }// insert code here
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28872, function(sym, e) {
         player.setFrame('boss-block-2-results');
         if(player.blocks == true){
         monster.status.html('You block the attack! <br />Tap to continue.');// insert code here
         }
         else{
         monster.status.html('Your block fails. <br />Tap to continue.');
         monster.hitCount++;
         }// insert code here
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30152, function(sym, e) {
         player.setFrame('player-attacks-boss');
         player.attackScore = 20-(player.attributes[monster.attributes.secondary]*5);
         monster.status.html('Roll to attack '+monster.title+'.<br/>You need a '+ player.attackScore + ' or higher to hit. <br />Tap to continue.');
         
         sym.stop();// insert code here
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25000, function(sym, e) {
         player.blocks = false;
         monster.hits = false;
         monster.attack(player, dice.roll(20, dice.symbol));
         monster.status.html(monster.title + ' is rolling...');
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25750, function(sym, e) {
         if(monster.hits == true){
           monster.status.html(monster.title + ' rolls a '+ dice.value + ' and hits! <br />Tap to continue.');
          }
         else{
           monster.status.html(monster.title + ' rolls a '+ dice.value +' and misses! <br />Tap to continue.');
          }// insert code here
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26600, function(sym, e) {
         sym.stop();// insert code here
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27629, function(sym, e) {
         if(monster.hits != true){
         		sym.stop('player-attacks-boss');
         	}// insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30285, function(sym, e) {
         player.attack(monster, dice.roll(20, dice.symbol));
         monster.status.html('Rolling...');// insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 31000, function(sym, e) {
         player.setFrame('attack-results-boss');
         console.log('playerhits : '+player.hits);
                 console.log('monsterblocks : '+monster.blocks);
         if(player.hits == true && monster.blocks == false){
           monster.status.html('Your attack hits! <br />Tap to continue.');
          }
          else if(player.hits == true && monster.blocks == true){
           monster.status.html('The Monster Blocked your attack! <br />Tap to continue.');
          }
         else{
           monster.status.html('Your attack misses! <br />Tap to continue.');
          }
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 31680, function(sym, e) {
         sym.stop();// insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 31831, function(sym, e) {
         player.setFrame('boss-battle-results');
         battleResults(monster, player, sym);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23, function(sym, e) {
         if(monster.boss == true){
         sym.play('boss-start');
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 36000, function(sym, e) {
         alert('boss wins!');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 36405, function(sym, e) {
         alert('player wins');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32077, function(sym, e) {
         if(monster.blocks == true){
         monster.status.html(monster.title + ' blocked your attack to tie the match!<br/>Roll to break the tie, highest roll wins. <br />Tap to continue.');
         
         }
         monster.status.html('Tie Game!<br/>Roll to break the tie, highest roll wins. <br />Tap to continue.');
         
         
         
         player.setFrame('boss-tie');// insert code here
         
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32250, function(sym, e) {
         
         player.tiebreaker = dice.roll(20, dice.symbol);
         
         monster.status.html('Rolling...');// insert code here
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 34083, function(sym, e) {
         if(player.tiebreaker == 20){
         				alert('Damn, nat 20?! That\'s certainly one way to break a tie...');
         			}
         monster.status.html('You rolled a '+ player.tiebreaker+'. </br /> Tap to roll for '+monster.title+'.');
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 34216, function(sym, e) {
         monster.tiebreaker = dice.roll(20, dice.symbol);
         monster.status.html(monster.title + ' is rolling...');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35546, function(sym, e) {
         sym.stop();// insert code here		
         if(player.tiebreaker == 20){
         				alert('Well shiii-ot, a nat 20?! I ain\'t saying the dice are loaded, but it sure does look that way');
         			}
         if(monster.tiebreaker > player.tiebreaker){
         		monster.status.html(monster.title+' rolls a '+monster.tiebreaker+' and wins the tiebreaker. <br />Tap to continue.');
         		sym.stop('boss-wins');
         		}
         
         	else if(monster.tiebreaker == player.tiebreaker){
         	monster.status.html(monster.title + 'also rolled '+monster.tiebreaker+'<br />so you must roll again! <br />Tap to continue.');
         		console.log('tied again! roll once more');
         		sym.stop();
         
         	}
         	else{
         		monster.status.html(monster.title+' rolled a '+monster.tiebreaker+' </br/> so you win the tiebreaker. <br />Tap to continue.');
         		sym.stop('player-beats-boss');
         
         		}
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35581, function(sym, e) {
         if(monster.tiebreaker == player.tiebreaker){
         sym.play('boss-tie');
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'dice-roll-sprite_symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 927, function(sym, e) {         
         sym.stop("frame-"+dice.value);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         

      });
      //Edge binding end

   })("dice-roll-sprite_symbol_1");
   //Edge symbol end:'dice-roll-sprite_symbol_1'

   //=========================================================
   
   //Edge symbol: 'monster-image'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_image}", "click", function(sym, e) {
         
         sym.play();

      });
         //Edge binding end

   })("monster-image");
   //Edge symbol end:'monster-image'

   //=========================================================
   
   //Edge symbol: 'PlayerAttributes'
   (function(symbolName) {   
   
   })("PlayerAttributes");
   //Edge symbol end:'PlayerAttributes'

})(jQuery, AdobeEdge, "monster");