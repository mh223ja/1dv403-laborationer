"use strict";
/*global RandomGenerator, window*/

var MemoryGame = {

    cardArray: [],

    init: function() {
        var rows = 4;
        var cols = 4;

        MemoryGame.cardArray = RandomGenerator.getPictureArray(rows, cols); // creates array of cards using random
        console.log(MemoryGame.cardArray); //write out array to show is working
        MemoryGame.renderGame(); //runs renderGame
    },

    renderGame: function() {

        var location = document.getElementById("gameboard"); //sets where table will be located
        //var newDiv = document.createElement("div");
        var table = document.createElement("table");
        var i;
        var row = document.createElement("tr");
        var j;
        var column = document.createElement("td");
        var backImage = document.createElement("img");
        backImage.setAttribute("src", "pics/0.png");
        var link = document.createElement("a");
        link.setAttribute("href", "#");
        
        console.log(row);



        location.appendChild(table); //insert new div in HTML
        
     //build a table in new div
        
        for (i=0; i<4;i++) { //based on number of rows
            table.appendChild(row); //adds a row until max number of rows
            console.log(row);

            for (j=0;j<4;++j) {
                table.appendChild(column); //adds a column until max number of cols
                console.log(column);
                
                column.appendChild(backImage); //adds image to each cell
                
                backImage.appendChild(link); //adds link to image

            }

        }

    },

};

window.onload = MemoryGame.init;
