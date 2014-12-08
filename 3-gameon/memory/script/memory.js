"use strict"
/*global RandomGenerator, window*/

var MemoryGame = {
    
    

    cardArray: [],

    init: function () {
        
        var rows = 4;
        var cols = 4;


      
        MemoryGame.cardArray = RandomGenerator.getPictureArray(rows, cols); // creates array of cards using random
        console.log(MemoryGame.cardArray); //write out array to show is working
        MemoryGame.renderGame(MemoryGame.cardArray); //runs renderGame
    },

    renderGame: function (newBoard) {
       
        
        var newDiv = document.createElement("div");
        var location = document.getElementById("gameboard"); //sets where table will be located
        var i;
        var j;
        var card = document.createElement("div");
        var row = null;
        var column = null;
      
        
        location.appendChild(newDiv);
      
        var table = document.createElement("table");
        newDiv.appendChild(table);
        
        for (i = 0; i < 4; i++) { 
            row = document.createElement("tr");//based on number of rows
            table.appendChild(row); //adds a row until max number of rows
            console.log(row);

            for (j = 0; j < 4; j++) {
             column = document.createElement("td");
             var backImage = document.createElement("img");
             backImage.setAttribute("src", "pics/0.png");
             var link = document.createElement("a");
             link.setAttribute("href", "#");
             
                card.appendChild(link);
                link.appendChild(backImage);
                column.appendChild(link);
                row.appendChild(column);
                
            }
            
        }
        
        
    },

};

window.onload = MemoryGame.init; 

//note to self end of evening - Now have one picture that shows up, on one Tr, need to make it so that you can see it on multiple

