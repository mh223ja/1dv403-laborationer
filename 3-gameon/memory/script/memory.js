"use strict";
/*global RandomGenerator, window*/

var memoryGame = {
    
    cardArray: [],
    
    init: function(){
        var newGame = memoryGame.boardSetup();
        console.log(newGame);
    },
    
   
   boardSetup: function(){
   
       var randomGenerator= new RandomGenerator(7, 4);
       alert(randomGenerator);
       
       
       
   },
        
    

};
window.onload=memoryGame.init;