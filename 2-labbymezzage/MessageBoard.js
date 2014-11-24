"use strict";

var MessageBoard = {

    messages: ["No More Stomach Flu", "get out of the house", "two sick kids"],

    init:function() {
        var message = new Message("", new Date());
        console.log("text", new Date());
        alert(message);
        alert(message.getText());
        message.setText("MyText");
        alert(message);
       }
    };
 MessageBoard[2].getText();

window.onload = MessageBoard.init;
