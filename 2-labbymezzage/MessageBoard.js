"use strict";
/*global Message, window*/
var MessageBoard = {

    messages: [],

    init: function() {
        var newMsg = document.querySelector("#button"); //links to button
        newMsg.onclick = MessageBoard.saveMessages; //initiates sendMessage on click
    },

    saveMessages: function() {
        var text = document.getElementById("textForm"); //gets text from form 
        var numberOfMessages = 0; //Sets variable to 0
        var lastMessage;
        console.log(text); //check if works
        var newMessage = new Message(text.value, new Date());
        MessageBoard.messages.push(newMessage);
        lastMessage = MessageBoard.messages.length - 1; //message last in the array
        MessageBoard.renderMessages(lastMessage); //activate renderMessages to publish latest message
    },



    renderMessage: function(messageID) {

        var newDiv = document.createElement("div"); //adds new div to area
        var messageText = document.createElement("p"); //create paragraph section


        newDiv.setAttribute("class", "newDiv");
        messageText.setAttribute("class", "messageText");
        newDiv.appendChild(messageText);
        messageText.innerHTML = MessageBoard.messages[messageID].getHTMLText();

    },


    renderMessages: function() {
        var i;

        for (i = 0; i < MessageBoard.messages.length; ++i) { //renders all messages
            MessageBoard.renderMessage(i);
        }
    },

};

window.onload = MessageBoard.init;