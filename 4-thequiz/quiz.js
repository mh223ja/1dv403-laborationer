"use strict"
/*global*/

var Quiz = {

    //question: undefined,
    //infoURL: "http://vhost3.lnu.se:20080/question/1",

     tries: 0,

    init: function() {

        Quiz.url = "http://vhost3.lnu.se:20080/question/1";
        Quiz.getQuestion();
        Quiz.renderQuiz();


    },



    renderQuiz: function() {

        //sets up form to display quesitons and to give answers
        var questionField = document.getElementById("questionField");
        var newDiv = document.createElement("div");
        var newP = document.createElement("p");
        var input = document.createElement("input");
        input.setAttribute("placeholder", "Write your answer here: ");
        var footer = document.createElement("footer");
        var triesText = document.createElement("p");
        triesText.innerHTML = "You have tried to answer this question with " + Quiz.tries;
        console.log(triesText);
        var question = document.querySelector("p");
        var container = document.getElementById("container");
        



        questionField.appendChild(newDiv);
        newDiv.appendChild(newP);

        container.appendChild(footer);
        footer.appendChild(triesText);
        
        //answerField.appendChild(input);

        //button.addEventListener("click", Quiz.sendAnswer, console.log("PUSH!"));




    },

    getQuestion: function() {
        Quiz.counter +=1;
       /* var attempt;
        console.log(attempt);
        Quiz.tries.push(attempt);
        console.log(Quiz.tries.length);*/
        var answerArea = document.getElementById("answerSheet");
        answerArea.innerHTML="";
        
        //Quiz.renderQuiz.triesText.innerHTML="You have tried to answer " + Quiz.tries.length + " times";
        //var question = document.querySelector("p");


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
                    if (question.status === "newQuestion"){
                        var attempts = Quiz.tries[Quiz.tries.length];
                        attempts = 1;
                        var countText = document.getElementById("footer");
                        countText.innerHTML="You have tried to answer " + attempts-1 + "times";
                    }
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

        postQuestion.innerHTML = question;

    },

    sendAnswer: function(nextUrl) {
        
   
        var attempts=0;
        console.log("hi");
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
                    Quiz.url = question.nextURL;
                    Quiz.getQuestion(Quiz.url);
                }
            }
        };

        if (xhr.readyState !== 4) {
            if (xhr.status !== 200) {
                console.log("WRONG!");
                var wrongAnswer = document.createElement("p");
                var answerSheet = document.getElementById("answerSheet");
                answerSheet.appendChild(wrongAnswer);
                wrongAnswer.innerHTML = "Wrong! Please try again";

            }

        };

        xhr.send(JSON.stringify(finalAnswer));
       


    }
}

//wrongAnswer: function() {

//}




window.onload = Quiz.init;