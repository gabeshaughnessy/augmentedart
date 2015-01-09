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
       player.syncData();
       monster.syncData();
       dice.symbol = sym.getSymbol('diceRoll');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2458, function(sym, e) {
         
         player.blockScore = 20 - (player.attributes[monster.attributes.primary] * 5);
         monster.status.html('Roll to block the attack.<br/>You need to roll a ' + player.blockScore + ' or higher.');
         sym.stop();
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6931, function(sym, e) {
         battleResults(monster, player, sym);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Monster-Image}", "click", function(sym, e) {
         
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13292, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         monster.status = sym.$('Status');
         monster.status.html(monster.title + ' rolls first.<br/>It needs a 10 or higher to hit.');
         
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
         
         }
         
         }
         else{
         monster.status.html(monster.title + ' defeated you!');
         if(typeof monster.tiebreaker != 'undefined'){
         		monster.status.html(monster.title+' rolls a '+monster.tiebreaker+' and wins the tiebreaker, <br /> You have been defeated!');
         
         }
         }
         
         player.reset();
           sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13106, function(sym, e) {
         monster.status.html('You Defeated the Monster!');
         player.addMonster(monster);
         sym.stop();// insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8882, function(sym, e) {
         if(monster.blocks == true){
         monster.status.html(monster.title+' blocked your attack to tie the match!<br/>Roll to break the tie, highest roll wins.');
         
         }
         monster.status.html('Tie Game!<br/>Roll to break the tie, highest roll wins.');
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12969, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12542, function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_diceRoll}", "click", function(sym, e) {
         sym.play();// insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10787, function(sym, e) {
         
         monster.status.html('You rolled a '+ player.tiebreaker+'. </br /> Click to roll for '+monster.title+'.');
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6100, function(sym, e) {
                 console.log('playerhits : '+player.hits);
                 console.log('monsterblocks : '+monster.blocks);
         if(player.hits == true && monster.blocks == false){
           monster.status.html('Your attack hits!');
          }
          else if(player.hits == true && monster.blocks == true){
           monster.status.html('The Monster Blocked your attack!');
          }
         else{
           monster.status.html('Your attack misses!');
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
        player.attackScore = 20-(player.attributes[monster.attributes.secondary]*5);
        monster.status.html('Roll to attack '+monster.title+'.<br/>You need a '+ player.attackScore + ' or higher to hit.');
        
         sym.stop();// insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1066, function(sym, e) {
         if(monster.hits == true){
           monster.status.html(monster.title + ' rolls a '+ dice.value + ' and hits!');
          }
         else{
           monster.status.html(monster.title + ' rolls a '+ dice.value +' and misses!');
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
         if(monster.tiebreaker > player.tiebreaker){
         		monster.status.html(monster.title+' rolls a '+monster.tiebreaker+' and wins the tiebreaker');
         		sym.stop('monster-wins');
         		}
         
         	else if(monster.tiebreaker == player.tiebreaker){
         	monster.status.html(monster.title + 'also rolled '+monster.tiebreaker+'<br />so you must roll again!');
         		console.log('tied again! roll once more');
         		sym.stop();
         		
         	}
         	else{
         		monster.status.html(monster.title+' rolled a '+monster.tiebreaker+' </br/> so you win the tiebreaker');
         		sym.stop('player-wins');
         
         		}
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         if(monster.hits != true){
         		sym.stop('player-attacks');
         	}
         	sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3662, function(sym, e) {
         if(player.blocks == true){
         monster.status.html('You block the attack!');// insert code here
         }
         else{
         monster.status.html('Your block fails');
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

})(jQuery, AdobeEdge, "monster");