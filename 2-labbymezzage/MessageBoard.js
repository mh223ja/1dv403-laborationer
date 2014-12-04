"use strict";
/*global Message, window*/
var MessageBoard = {

    messages: [],

    init: function() {
        var newMsg = document.getElementById("button"); //links to button
        newMsg.onclick = MessageBoard.saveMessages;
        //'listens' for enter click'


        var listenEnter = document.getElementById("textForm");



        listenEnter.onkeypress = function(e) {

            if (!e) {
                e = window.event;
            }

            if (e.keyCode === 13 && e.shiftKey === false) {
                MessageBoard.saveMessages();
                return false;
            }
            return true;
        };
    },

    saveMessages: function() {
        var text = document.getElementById("textForm"); //gets text from form 
        //console.log(text); check if works
        var newMessage = new Message(text.value, new Date());
        MessageBoard.messages.push(newMessage);
        var lastMessage = MessageBoard.messages.length - 1; //message last in the array
        MessageBoard.renderMessages(lastMessage); //activate renderMessages to publish latest message
    },



    renderMessage: function(messageID) {
        document.getElementById("textForm").value = ""; //clears message form
        var location = document.getElementById("displayMessage");
        var newDiv = document.createElement("div"); //adds new div to area
        var messageText = document.createElement("p"); //create paragraph section

        var counter = MessageBoard.messages.length ? MessageBoard.messages.length : 0;
        var counterDiv = document.getElementById("numberOfMessages");
        counterDiv.innerHTML = "";

        var counterText = document.createElement("p");
        counterText.innerHTML = "Number of messages sent: " + counter;
        counterDiv.appendChild(counterText);
        console.log(counterDiv);


        //create new div
        newDiv.setAttribute("class", "newDiv");
        location.appendChild(newDiv); //adds new div to DOM

        //send message to div
        messageText.setAttribute("class", "messageText");
        newDiv.appendChild(messageText);
        messageText.innerHTML = MessageBoard.messages[messageID].getHTMLText();


        var dateDiv = document.createElement("div");
        var addDate = document.createElement("p");

        dateDiv.setAttribute("class", "newDiv");
        messageText.appendChild(dateDiv);
        dateDiv.appendChild(addDate);
        addDate.innerHTML = MessageBoard.messages[messageID].getDateText();

        // add counter

        //counterDiv.setAttribute("class", "numberOfMessages");
        //counterDiv.appendChild(counterText);
        /*var counter = MessageBoard.messages.length;
        var counterDiv = document.getElementById("numberOfMessages");
        var counterText = document.createElement("p");
        counterText.innerHTML = "Number of messages sent: " + counter;
        console.log(counterText);
        
        counterDiv.appendChild(counterText);*/



        //Delete button and delete
        var deleteButton = document.createElement("img");
        deleteButton.setAttribute("src", "Delete_Icon.png");

        var deleteMessage = document.createElement("a");
        deleteMessage.appendChild(deleteButton);

        location.appendChild(newDiv);
        newDiv.appendChild(deleteMessage);
        deleteMessage.appendChild(deleteButton);

        deleteButton.onclick = function() {
            if (confirm("Do you really want to erase this message forever?")) {
                MessageBoard.messages.splice(messageID, 1);
                MessageBoard.renderMessages();
                if (!MessageBoard.messages.length) {
                    counter = 0;
                    counterText.innerHTML = "";
                }

            }
        };

        //add clock and time stamp

        var clock = document.createElement("img");
        var timePiece = document.createElement("a");


        clock.setAttribute("src", "clock.png");


        location.appendChild(newDiv);
        newDiv.appendChild(timePiece);
        timePiece.appendChild(clock);

        clock.onclick = function() {
            alert("The message was written " + MessageBoard.messages[messageID].getDateText());
        };

        // add counter

        //counterDiv.setAttribute("class", "numberOfMessages");
        //counterDiv.appendChild(counterText);


    },

    renderMessages: function() {

        document.getElementById("displayMessage").innerHTML = ""; //erases messages so array can write out fresh
        var i;

        for (i = 0; i < MessageBoard.messages.length; ++i) { //renders all messages
            MessageBoard.renderMessage(i);
        }


    }

};

window.onload = MessageBoard.init;