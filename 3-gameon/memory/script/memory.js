"use strict";
/*global RandomGenerator, window*/

var MemoryGame = {
    
    cardArray: [], 
    
       init: function(){
    //var rows;
    //var cols;
        
        MemoryGame.cardArray = RandomGenerator.getPictureArray(6,6); // creates array of cards using random
        console.log(MemoryGame.cardArray);
},

     renderGame: function(newBoard){
         
         var location = document.getElementById("gameBoard");
         var newDiv = document.createElement("div");
         location.appendChild(newDiv);
         
         
         //create table
      var table = document.createElement("table"); //build a table
      for (var i = 0; i< 6; i++){ //based on number of rows
        var row = document.createElement("tr");
        table.appendChild(row);
        
      for (var j = 0; j<6; j++){
        var column = document.createElement("td");
        table.appendChild(column);
      }
      
     var backImage = document.createElement("img");
         backImage.setAttribute("src", "pics/0.png");
        
      }
       
     },

};

window.onload = MemoryGame.init;

