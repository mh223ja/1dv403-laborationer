"use strict"
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
       
        //sets placeholder
        var footer = document.createElement("footer"); //creates footer
        var triesText = document.createElement("p"); //creates tries text area
        triesText.innerHTML = "You have tried to answer this question with " + Quiz.counter + " tries"; //text tries
        //console.log(triesText);
        //var question = document.querySelector("p"); 
        var container = document.getElementById("container"); //gets entire container
        console.log(Quiz.tries.length);



        questionField.appendChild(newDiv); //adds new div to question field
        newDiv.appendChild(newP); //adds text to new div

        container.appendChild(footer); //adds footer to container
        footer.appendChild(triesText); //adds tries text 

        //answerField.appendChild(input);

        //button.addEventListener("click", Quiz.sendAnswer, console.log("PUSH!"));




    },

    getQuestion: function() {
    Quiz.counter++;
    Quiz.tries.push(Quiz.counter);
        var footer = document.createElement("footer"); //creates footer
        var triesText = document.createElement("p"); //creates tries text area
        footer.appendChild(triesText);
        console.log(Quiz.counter);
        console.log(Quiz.tries.length);
        triesText.innerHTML = "You have tried to answer this question with " + Quiz.counter + " tries"; 

        /* var attempt;
         console.log(attempt);
         Quiz.tries.push(attempt);
         console.log(Quiz.tries.length);*/
        var answerArea = document.getElementById("answerSheet");
        answerArea.innerHTML = "";

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
        var inputClear = document.getElementById("answerSheet");
        

        postQuestion.innerHTML = question;
        inputClear.innerHTML = "";
        

    },

    sendAnswer: function(nextUrl) {

        /*Quiz.counter += 1; //adds counter
        console.log(Quiz.counter);
        Quiz.tries.push(Quiz.counter);
        console.log(Quiz.tries);*/

        // var footer = document.getElementById("footer"); //creates footer
        //var triesText = document.createElement("p"); //creates tries text area

        //footer.appendChild(triesText);
        //triesText.innerHTML = "";
        //Quiz.triesText.innerHTML = "You have tried to complete this quiz in " + Quiz.tries.length + " tries";
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
                    Quiz.url = question.nextURL;
                    Quiz.clearText();
                    Quiz.getQuestion(Quiz.url);
                }
            }
        };

        if (xhr.readyState !== 4) {
            if (xhr.status !== 200) {
                console.log("WRONG!");
                var wrongAnswer = document.createElement("p");
                var answerSheet = document.getElementById("answerSheet");
                answerSheet.innerHTML = "";
                answerSheet.appendChild(wrongAnswer);
                wrongAnswer.innerHTML = "Wrong! Please try again";

            }

        }

        xhr.send(JSON.stringify(finalAnswer));



    },
    
    clearText: function(){
        var textArea = document.getElementById("answerSheet");
        textArea.value = '';
        
    }
};

//wrongAnswer: function() {

//}




window.onload = Quiz.init;