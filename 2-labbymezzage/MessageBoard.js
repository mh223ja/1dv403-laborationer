"use strict";

var MessageBoard = {

    messages: [],
    

    init:function() {
        
        
       }
};

 function submitMessage (){
     var text = document.getElementById("textarea");//gets text
     
   if(text.value !== "") {    //if no inputted text, nothing happens
   MessageBoard.messages.push(new Message (text, new Date())); //pushes to array
   console.log(text.value);
   }
     
   
     
     
     
 }
       var newButton = document.createElement("button"); //create button 
       newButton.HTML = "A button";
       
       var buttonParent = document.getElementById("buttonParent");
       buttonParent.appendChild(newButton);
    
 

window.onload = MessageBoard.init; //window onload to initialize
