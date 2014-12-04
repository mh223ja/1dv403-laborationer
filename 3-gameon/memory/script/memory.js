"use strict";
/*global RandomGenerator, window*/

var memoryGame = {
    
    
    init: function(){
        
        var gridSize = {x: 6,y: 6};
        var cellSize = {x: 150, y: 200};
        var i;
        var j;
        
      for ( i=0; i< gridSize.x; i++){
          for (j=0; j< gridSize.y; j++)
          {
              this.createCard(i, j);
          }
      }
       
        
        this.load = function()
        {
            
        };
        
        this.createCard = function(i, j){
            var x = (i - gridSize.x/2 + 0.5) * cellSize.x;
            var y = (j - gridSize.y/2 + 0.5) * cellSize.y;
            var cardBack = new CardBack("pics/0.png");
            
        };
        
    },
    
   
   boardSetup: function(){
   
       var randomGenerator= new RandomGenerator(7, 4);
       alert(randomGenerator);
       
       
       
   },
        
    

};
window.onload=memoryGame.init;