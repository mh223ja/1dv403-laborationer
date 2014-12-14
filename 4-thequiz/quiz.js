"use strict"

var Quiz = {
    init: function(){
       Quiz.getQuestion();
       Quiz.url = "http://vhost3.lnu.se:20080/question/1"
    },
    
    getQuestion: function(){
        
        var xhr = new XMLHttpRequest ();
        xhr.onreadystatechanged = function(){
            if (xhr.readyState === 4) {
                if (xhr.status == 200) {
                    console.log(xhr.responseText);
                    
                }
            }
            xhr.open("GET", Quiz.url, true);
            xhr.send(null);
        }
        
    },
    
};

window.onload = Quiz.init;