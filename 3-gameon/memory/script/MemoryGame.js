"use strict";
/*global RandomGenerator, window*/

//var backImage;



var MemoryGame = {



    cardArray: [],
    cardCount: [],

    init: function() {

        //var backImage;
        var rows = 4;
        var cols = 4;


        MemoryGame.cardArray = RandomGenerator.getPictureArray(rows, cols); // creates array of cards using random
        console.log(MemoryGame.cardArray); //write out array to show is working
        MemoryGame.renderGame(MemoryGame.cardArray);
        //MemoryGame.turnOver(backImage);
    },

    renderGame: function(boardArray) {


        var newDiv = document.createElement("div"); //creates new div to add to board
        var location = document.getElementById("gameboard"); //sets where table will be located
        var i;
        var j;
        // var card = document.createElement("div"); //create new div for image
        var row = null;
        var column = null;
        var link = null;
        // var frontImage;
        var backImage = null;
        //var cardNumber = 0;




        location.appendChild(newDiv); //insert div at location

        var table = document.createElement("table"); //create table
        //newDiv.appendChild(table); //add table to new div

        for (i = 0; i < 4; i++) {
            row = document.createElement("tr"); //based on number of rows
            //table.appendChild(row); //adds a row until max number of rows
            //console.log(row); //check if rows are added

            for (j = 0; j < 4; j++) {
                column = document.createElement("td"); //create cell
                backImage = document.createElement("img"); //create image
                backImage.className = boardArray[i * 4 + j]; //link image to array number
                backImage.setAttribute("src", "pics/0.png"); //add image

                // backImage.addEventListener('click', turnover: function ();
                //console.log(backImage.className);
                //frontImage = document.createElement("img");
                //frontImage.setAttribute("src", "pics/" + boardArray[i * 4 + j] + ".png");
                //console.log(frontImage);



                link = document.createElement("a"); //adds link and a tag
                link.setAttribute("href", "#");
                link.setAttribute("id", "link");
                // console.log(link);
                //link.addEventListener("click", MemoryGame.turnOver);


                //console.log(link);

                link.onclick = (function(l, className, counter) { // l -individual link
                    return function() {
                        console.log("click2");
                        counter++;
                        MemoryGame.turnOver(l, className, counter); //info being passed on 
                    };
                })(backImage, backImage.className); //the parameter






                link.appendChild(document.createTextNode(boardArray[i * 4 + j]));
                //  card.appendChild(link); //creates a div and adds a link
                link.appendChild(backImage); //adds a image
                column.appendChild(link); //adds card to cell
                row.appendChild(column); //adds cell to row
                table.appendChild(row);



                //var cardCounter = 0;
                //cardCounter++; //g
                //console.log(cardCounter);

            }

            newDiv.appendChild(table);
        } //close for loops

    },



    turnOver: function(backImage, flippedCard, counter) {

        //var flippedCards = [];
        var cardClicked;
        var firstCard;
        var secondCard;
        var count = 0;
        var z = 0;
        //var flippedCard;
        
        if (MemoryGame.cardCount.length <2){
            
            // for (var m = 0; m < MemoryGame.cardArray.length; m++) {
            if (MemoryGame.cardCount.length === 0) {


            if (backImage.src == "https://1dv403-laborationer-c9-mh223ja.c9.io/3-gameon/memory/pics/0.png") {
                //if (flippedCards.length < 2) {
                //if (backImage.src == "https://1dv403-laborationer-c9-mh223ja.c9.io/3-gameon/memory/pics/0.png") {
                console.log("urhere");

                //console.log(count);


                //if (flippedCards === 0);

                backImage.setAttribute("src", "pics/" + backImage.className + ".png");

                MemoryGame.cardCount.push(backImage);

                console.log(backImage);
                console.log(MemoryGame.cardCount.length);
                console.log(MemoryGame.cardCount);
            }
            }

            else if (MemoryGame.cardCount.length == 1) {
                
                 if (backImage.src == "https://1dv403-laborationer-c9-mh223ja.c9.io/3-gameon/memory/pics/0.png") {
                //if (flippedCards.length < 2) {
                //if (backImage.src == "https://1dv403-laborationer-c9-mh223ja.c9.io/3-gameon/memory/pics/0.png") {
                console.log("urhere");

                backImage.setAttribute("src", "pics/" + backImage.className + ".png");
                MemoryGame.cardCount.push(backImage);
                 }

            }

            //console.log(m);
           // count++;
            //console.log(count);
        }
    }
    
    };


    //if (count <=2) { 
    //  matchMaker();



    //z++;
    //console.log(z, "z")


    // console.log(m, "m");





    //firstCard = flippedCards[0];
    //secondCard = flippedCards[1];

//console.log(flippedCards);


/*flippedCards++;

 if (flippedCards == 1) {
     firstCard = frontImage;
 }

 if (flippedCards == 2) {
     secondCard = frontImage;
     MemoryGame.matchMaker(firstCard, secondCard); */

window.onload = MemoryGame.init;

//note to self end of evening - Now have one picture that shows up, on one Tr, need to make it so that you can see it on multiple