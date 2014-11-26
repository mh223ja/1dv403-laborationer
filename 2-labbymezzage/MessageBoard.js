"use strict";

var MessageBoard = {

    messages: [],

    init:function() 
    {
        var sendMessage = document.getElementById("button");
            sendMessage.onClick = MessageBoard.submitMessage();
       },

  submitMessage: function(){ //submitting message via textarea
     var text = document.getElementById("textForm").value;//gets text
     var numberOfMessages = 0; 
   MessageBoard.messages.push(new Message(text, new Date()));
   MessageBoard.numberOfMessages+=1; //ups the count
   document.getElementById("numberOfMessages").innerHTML="Number of Messages: " + MessageBoard.numberOfMessages;
   MessageBoard.renderMessages();
   },


 renderMessages: function(){
    document.getElementById("textForm").innerHTML = ""; //clear form
    
    for (var i=0; i< MessageBoard.messages.length;++i)
    {
        MessageBoard.renderMessage(i);
    }
},
   
   renderMessage: function (MessageID){
       
       var messList= document.getElementById("messages"); //links to id. messages
       var messDiv = document.createElement("p"); //creates new section
       messList.appendChild(messDiv);
       
      
       messDiv.innerHTML = MessageBoard.messages[MessageID].getHTMLtext();
       messList.appendChild(); //text to DOM
       
   }
 };
window.onload = MessageBoard.init; //window onload to initialize

