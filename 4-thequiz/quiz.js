"use strict"
/*global*/

var Quiz = {
    
 
    
    init: function(){
     
       Quiz.url = "http://vhost3.lnu.se:20080/question/1";
       Quiz.renderQuiz();
       Quiz.getQuestion();
    },
    
    renderQuiz: function() {
        
        //sets up form to display quesitons and to give answers
        var questionField = document.getElementById("questionField");
        var newDiv = document.createElement("div");
        var newP = document.createElement("p");
        var input = document.createElement("input");
        input.setAttribute("placeholder", "Write your answer here: ");
        var button = document.createElement("button");
        var answerField = document.getElementById("answerField");
        //var question = document.querySelector("p");
        
    
        
        questionField.appendChild(newDiv);
        newDiv.appendChild(newP);
        newP.appendChild(Quiz.question);
        
        answerField.appendChild(input);
        input.appendChild(button);
        
        
        
    },
    
    getQuestion: function(){
        
        var question;
        //retriev equestion from server
        console.log("you are here");
        var xhr = new XMLHttpRequest ();
        xhr.onreadystatechanged = function(){
            console.log("1");
            if (xhr.readyState === 4) {
                
                if (xhr.status == 200) {
                    question = JSON.parse(xhr.responseText);
                    console.log(xhr.responseText);
                    console.log("did you make it here?");
                }
            }
                else {
                    console.log("read error, status: " +xhr.status);
                }
            };
            xhr.open("GET", Quiz.url, true);
            xhr.send(null);
    
    },
    
    sendAnswer: function(){
        var xhr = new XMLHttpRequest();
        xhr.open("POST", Quiz.url, true); //server only accepts POST
        
    
    }
  
    
};

window.onload = Quiz.init;