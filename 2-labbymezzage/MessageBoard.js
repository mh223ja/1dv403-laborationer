"use strict";
/*global Message, window*/
var MessageBoard = {

    messages: [],

    init: function() {
        var newMsg = document.getElementById("button"); //links to button
        newMsg.onclick = MessageBoard.saveMessages; //initiates sendMessage on click
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
        var location=document.getElementById("displayMessage");
        var newDiv = document.createElement("div"); //adds new div to area
        var messageText = document.createElement("p"); //create paragraph section

        //create new div
        newDiv.setAttribute("class","newDiv");
        location.appendChild(newDiv); //adds new div to DOM
        
        //send message to div
        messageText.setAttribute("class","messageText");
        newDiv.appendChild(messageText);
        messageText.innerHTML = MessageBoard.messages[messageID].getHTMLText();
        
        //Delete button and delete
       var deleteButton=document.createElement("img");
       deleteButton.setAttribute("src","Delete_Icon.png");
       
       var deleteMessage=document.createElement("a");
       deleteMessage.appendChild(deleteButton);
       
       location.appendChild(newDiv);
       newDiv.appendChild(deleteMessage);
       deleteMessage.appendChild(deleteButton);
       
       deleteButton.onclick=function(){
           if(confirm("Do you really want to erase this message forever?")){
               MessageBoard.messages.splice(messageID,1);
               MessageBoard.renderMessages();
           }
       };
       
       //add clock and time stamp
       
       var clock=document.createElement("img");
       var timePiece=document.createElement("a");
       var timeDiv=document.createElement("div");
       
       clock.setAttribute("src", "clock.png");
       
       
       location.appendChild(newDiv);
       newDiv.appendChild(timePiece);
       timePiece.appendChild(clock);
       
       clock.onclick=function(){
         alert("The message was written " + MessageBoard.messages[messageID].getDateText());
       };
    },

    renderMessages: function() {
        
        document.getElementById("displayMessage").innerHTML=""; //erases messages so array can write out fresh
        var i;

        for (i = 0; i < MessageBoard.messages.length; ++i) { //renders all messages
            MessageBoard.renderMessage(i);
        }
    }

};

window.onload = MessageBoard.init;