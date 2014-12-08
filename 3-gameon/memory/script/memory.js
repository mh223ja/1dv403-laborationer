"use strict"
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

    renderGame: function(newBoard) {


        var newDiv = document.createElement("div"); //creates new div to add to board
        var location = document.getElementById("gameboard"); //sets where table will be located
        var i;
        var j;
        var card = document.createElement("div"); //create new div for image
        var row = null;
        var column = null;
        var cardNumber = 0;
        var link = null;
        var backImage = null;


        location.appendChild(newDiv); //insert div at location

        var table = document.createElement("table"); //create table
        newDiv.appendChild(table); //add table to new div

        for (i = 0; i < 4; i++) {
            row = document.createElement("tr"); //based on number of rows
            table.appendChild(row); //adds a row until max number of rows
            console.log(row); //check if rows are added

            for (j = 0; j < 4; j++) {
                column = document.createElement("td"); //create cell
                backImage = document.createElement("img"); //create image
                backImage.setAttribute("src", "pics/0.png"); //add image
                link = document.createElement("a"); //adds link and a tag
                link.setAttribute("href", "#");
                link.setAttribute("id", cardNumber);

                card.appendChild(link); //creates a div and adds a link
                link.appendChild(backImage); //adds a image
                column.appendChild(link); //adds card to cell
                row.appendChild(column); //adds cell to row


                MemoryGame.turnOver(link, backImage, cardCounter);

                var cardCounter = 0;
                cardCounter++; //gets rid of 0 card and aligns numbers

            }

        }

    },


    turnOver: function(link, backImage, cardCounter) {


            link.onclick = function() {

                if (backImage.getAttribute("src") === "pics/0.png") {

                    MemoryGame.cardArray.push(link);


                    console.log(MemoryGame.newArray);

                    if (MemoryGame.cardArray.length == 1 || MemoryGame.cardArray.length == 2) {
                        link.getElementsByTagName("img")[0].setAttribute("src", "pics/" + MemoryGame.cardArray[cardCounter] + ".png");
                        console.log(link);

                        if (MemoryGame.cardArray.length === 2) {
                            MemoryGame.matchMaker(MemoryGame.cardArray, link, backImage);
                        }

                    }

                }


            };

        },
   matchMaker: function (link, backImage) {

    if (MemoryGame.cardArray[0].getElementsByTagName("img")[0].getAttribute("src") === MemoryGame.cardArray[1].getElementsByTagName("img")[0].getAttribute("src")) {

        var pairCounter = 0;
        pairCounter++;

        MemoryGame.cardArray = [];
    
        //separates two cards selected out*/
}




}

};



window.onload = MemoryGame.init;

//note to self end of evening - Now have one picture that shows up, on one Tr, need to make it so that you can see it on multiple
