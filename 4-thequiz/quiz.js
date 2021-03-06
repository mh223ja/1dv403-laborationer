"use strict";
/*global*/

var Quiz = {
    //start
    //question: undefined,
    //infoURL: "http://vhost3.lnu.se:20080/question/1",

    counter: 0,
    tries: [],

    init: function() {
        //initiates
        Quiz.url = "http://vhost3.lnu.se:20080/question/1"; //calls first url
        Quiz.getQuestion(); //runs getQuestion
        Quiz.renderQuiz(); //runs renderQuiz 

    },


    renderQuiz: function() {

        //sets up form to display quesitons and to give answers
        var questionField = document.getElementById("questionField"); //gets area
        var newDiv = document.createElement("div"); //creates div
        var newP = document.createElement("p"); //creates p element
        var input = document.getElementById("answerSheet"); //creates input area
        input.setAttribute("placeholder", "Write your answer here: "); 
       
        questionField.appendChild(newDiv); //adds new div to question field
        newDiv.appendChild(newP); //adds text to new div

    
        //button.addEventListener("click", Quiz.sendAnswer, console.log("PUSH!"));

    },

    getQuestion: function() {
  
        var answerArea = document.getElementById("answerSheet").innerHTML="";



        //retriev equestion from server
        console.log("you are here");

        var xhr = new XMLHttpRequest();



        xhr.onreadystatechange = function() {
            console.log("1");

            if (xhr.readyState === 4) {

                if (xhr.status === 200) {
                    var questionRetrieve = JSON.parse(xhr.responseText);
                    console.log(xhr.responseText);
                
                    
                    var question = questionRetrieve.question;
                    console.log(question);
                    var nextUrl = questionRetrieve.nextURL;
                    console.log(nextUrl);

                    Quiz.postQuestion(question);



                    // addQuestion(question); // adds question
                }

                else {
                    console.log("read error, status: " + xhr.status);
                }
                var pushSend = document.getElementById("send");
                pushSend.onclick = function() {
                    console.log(pushSend);
                    Quiz.sendAnswer(nextUrl);

                };
                var listenArea = document.getElementById("answerSheet");
                
                listenArea.onkeydown = function(e){
                    if (!e){
                        e = window.event;
                    }
                    if(e.keyCode === 13 && !e.shiftKey){
                        Quiz.sendAnswer(nextUrl);
                    }
                };
                
            }
        };

        xhr.open("GET", Quiz.url, true);
        xhr.send(null);

        /* var pushSend = document.getElementById("send");
        pushSend.onclick = function(){
            Quiz.sendAnswer(nextUrl);*/

    },

    postQuestion: function(question) {
        var postQuestion = document.querySelector("p");
        var inputClear = document.getElementById("answerSheet");
        

        postQuestion.innerHTML = question;
        inputClear.innerHTML = "";
        

    },

    sendAnswer: function(nextUrl) {
        
        Quiz.counter++; //adds counter
        console.log(Quiz.counter);
        Quiz.tries.push(Quiz.counter);
        console.log(Quiz.tries);
        var counterDiv = document.getElementById("counter");
        counterDiv.innerHTML = "";
        
        var counterText = document.createElement("p");
        counterText.innerHTML = "You have answered " + Quiz.tries.length + " times during this quiz";
       
      
        counterDiv.appendChild(counterText);
       
        console.log(Quiz.tries.length);
   

       
        console.log(Quiz.triesText);
        var xhr = new XMLHttpRequest();
        console.log("there");
        xhr.open("POST", nextUrl, true);
        console.log("where");
        xhr.setRequestHeader("content-type", "application/json");
        console.log(nextUrl);


        var answerText = document.getElementById("answerSheet");
        var finalAnswer = {
            answer: answerText.value,
        };
        console.log(xhr);
        xhr.addEventListener("readystatechange", function() {
            console.log(xhr.readyState);
        }, false);
        xhr.onreadystatechange = function(e) {

            console.log(xhr.readyState);
            if (xhr.readyState === 4) {
                console.log(xhr.status);
                if (xhr.status === 200) {
                    var question = JSON.parse(xhr.responseText);
                    console.log(question);
                    
                    Quiz.url = question.nextURL;
                    
                         if (Quiz.url === undefined){
                        Quiz.quizFinished();
                    }
                      else if (question.message === "Correct answer!"){
                        var response = document.getElementById("answerResponse");
                        response.innerHTML = "";
                         var correct = document.createElement("p");
                         var correctDiv = document.createElement("div");
                          response.appendChild(correctDiv);
                          correctDiv.appendChild(correct);
                          correct.innerHTML = "Correct!";
                    }
                    Quiz.clearText();
                    Quiz.getQuestion(Quiz.url);
                }
            }
        };

        if (xhr.readyState !== 4) {
            if (xhr.status !== 200) {
                console.log("WRONG!");
                Quiz.wrongAnswer();

            }
        }
        

        xhr.send(JSON.stringify(finalAnswer));



    },
    
    clearText: function(){
        var textArea = document.getElementById("answerSheet");
        textArea.value = '';
        
    

},

wrongAnswer: function() {
    var wrongDiv = document.getElementById("answerResponse");
    wrongDiv.innerHTML = "";
    var wrongText = document.createElement("p");
    wrongDiv.appendChild(wrongText);
    wrongText.innerHTML = "Wrong! Enter a new answer";
    Quiz.clearText();
    Quiz.getQuestion();
},

quizFinished: function(){
    var finishedDiv = document.getElementById("answerResponse");
    finishedDiv.innerHTML ="";
    var finishedText = document.createElement("p");
    finishedDiv.appendChild(finishedText);
    finishedText.innerHTML = "Congrats, you ARE a genius, you finished the Quiz!";
}

};


window.onload = Quiz.init;