"use strict"

var Quiz = {
    init: function(){
     
       Quiz.url = "http://vhost3.lnu.se:20080/question/1";
       Quiz.renderQuiz();
       Quiz.getQuestion();
    },
    
    renderQuiz: function() {
        var questionField = document.getElementById("questionField");
        var newDiv = document.createElement("div");
        var newP = document.createElement("p");
        var input = document.createElement("input");
        var button = document.createElement("button");
        var answerField = document.getElementById("answerField");
        
        questionField.appendChild(newDiv);
        newDiv.appendChild(newP);
        
        
    },
    
    getQuestion: function(){
        //retriev equestion from server
        var xhr = new XMLHttpRequest ();
        xhr.onreadystatechanged = function(){
            if (xhr.readyState === 4) {
                if (xhr.status == 200) {
                    console.log(xhr.responseText);
                }
                else {
                    console.log("read error, status: " +xhr.status);
                }
            }
            xhr.open("GET", Quiz.url, true);
            xhr.send(null);
        };
        
    },
    
};

window.onload = Quiz.init;