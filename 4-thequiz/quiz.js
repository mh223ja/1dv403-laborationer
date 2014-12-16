"use strict"
/*global*/

var Quiz = {

    question: undefined,
    //infoURL: "http://vhost3.lnu.se:20080/question/1",



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
        var button = document.createElement("button");
        button.addEventListener("click", Quiz.sendQuestion);
        var answerField = document.getElementById("answerField");
        //var question = document.querySelector("p");



        questionField.appendChild(newDiv);
        newDiv.appendChild(newP);


        answerField.appendChild(input);
        input.appendChild(button);




    },

    getQuestion: function() {


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
            }
        };

        xhr.open("GET", Quiz.url, true);
        xhr.send(null);
    },

    postQuestion: function(question) {
        var postQuestion = document.querySelector("p");

        postQuestion.innerHTML = question;

    },





    sendAnswer: function() {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", Quiz.url, true); //server only accepts POST
        xhr.setRequestHeader('content-type', 'application/json');


    }


};

window.onload = Quiz.init;