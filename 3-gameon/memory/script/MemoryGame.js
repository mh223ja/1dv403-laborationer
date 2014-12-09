"use strict";
/*global RandomGenerator, window*/

var MemoryGame = {

        cardArray: [],

        init: function() {

            var rows = 4;
            var cols = 4;
        


            MemoryGame.cardArray = RandomGenerator.getPictureArray(rows, cols); // creates array of cards using random
            console.log(MemoryGame.cardArray); //write out array to show is working
            MemoryGame.renderGame(MemoryGame.cardArray); //runs renderGame
        },

        renderGame: function (newBoard) {


            var newDiv = document.createElement("div"); //creates new div to add to board
            var location = document.getElementById("gameboard"); //sets where table will be located
            var i;
            var j;
            var card = document.createElement("div"); //create new div for image
            var row = null;
            var column = null;
            var link = null;
            var backImage = null;
            var boardArray = [];
            
           

            location.appendChild(newDiv); //insert div at location

            var table = document.createElement("table"); //create table
            newDiv.appendChild(table); //add table to new div

            for (i = 0; i < 4; i++) {
                row = document.createElement("tr"); //based on number of rows
                table.appendChild(row); //adds a row until max number of rows
                console.log(row); //check if rows are added

                for (j = 0; j < 4; j++) {
                    column = document.createElement("td"); //create cell
                    backImage = document.createElement("img");//create image
                    backImage.className = MemoryGame.cardArray[i*4+j]; //link image to array number
                    backImage.setAttribute("src", "pics/0.png"); //add image
                    console.log(boardArray);
              
                    link = document.createElement("a"); //adds link and a tag
                    link.setAttribute("href", "#");
                    //link.onclick = function() {
                      //  MemoryGame.turnOver(backImage.className);
                    //};
                    
                    link.appendChild(document.createTextNode(MemoryGame.cardArray[i*4+j]));
                    card.appendChild(link); //creates a div and adds a link
                    link.appendChild(backImage); //adds a image
                    column.appendChild(link); //adds card to cell
                    row.appendChild(column); //adds cell to row


                    //var cardCounter = 0;
                    //cardCounter++; //g
                    //console.log(cardCounter);

                }

            }
            
           

    },


/*    turnOver: function(cardCounter, backImage, link) {
        
        var gameArray;
        
        link.onclick = function () {
            if(backImage.getAttribute("src") === "pics/0.png") {
                gameArray.push(link);
                
                
            }
        };

    }

/*   matchMaker: function (link, backImage) {

    if (MemoryGame.cardArray[0].getElementsByTagName("img")[0].getAttribute("src") === MemoryGame.cardArray[1].getElementsByTagName("img")[0].getAttribute("src")) {

        var pairCounter = 0;
        pairCounter++;

        MemoryGame.cardArray = [];
    
        //separates two cards selected out*/







};



window.onload = MemoryGame.init;

//note to self end of evening - Now have one picture that shows up, on one Tr, need to make it so that you can see it on multiple
