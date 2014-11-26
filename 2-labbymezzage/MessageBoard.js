"use strict";

var MessageBoard = {

    messages: [],
    

    init:function() {
        var sendMessage = document.getElementByID("button");
            sendMessage.onClick = MessageBoard.submitMessage;
        
       }
};

 function submitMessage (){ //submitting message via textarea
     var text = document.getElementById("inputText");//gets text
     var numberOfMessages; //variable to count messages
       //if no inputted text, nothing happens
   MessageBoard.messages.push(new Message (text.value, new Date()));  //add to array
   MessageBoard.numberOfMessages +=1; //ups the count
   document.getElementById("numberOfMessages").innerHTML="Number of Messages: " + MessageBoard.numberOfMessages;
   }


 function renderMessages(){
    document.getElementById("inputText").innerHTML = "";
    
    for (var i=0; i< MessageBoard.messages.length;++i)
    {
        MessageBoard.renderMessage(i);
    }
    
}
   function renderMessage(MessageID){
       
       var div = document.getElementById("messages"); //sets div
       var text = document.createElement("p");
       text.innerHTML = MessageBoard.messages[MessageID].getHTMLtext();
       div.appendChild(text); //text to DOM
       
   }
     
     
       var newButton = document.createElement("button"); //create button 
       newButton.HTML = "A button";
       
       var buttonParent = document.getElementById("buttonParent");
       buttonParent.appendChild(newButton);
    
 

window.onload = MessageBoard.init; //window onload to initialize
