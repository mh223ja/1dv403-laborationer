"use strict";
/*global Message, window*/
function Message(message, date) {

    this.getText = function() { //get message
        return message;
    };

    this.setText = function(_text) { //set message
        message = _text;
    };

    this.getDate = function() { //get date
        return date;
    };

    this.setDate = function(_date) { //set date
        date = _date;

    };
}

Message.prototype.toString = function() { //string representation of object
    return this.getText()+"("+this.getDate()+")";
};

Message.prototype.getHTMLText = function(){
    return this.getText().replace(/[\n\r]/g,"<br>");
};
    

Message.prototype.getDateText = function() {
    var timeOfPost=new Date();
    var hours = timeOfPost.getHours();
    var minutes = timeOfPost.getMinutes();
    var seconds = timeOfPost.getSeconds();
    
    return hours+":"+minutes+":"+seconds;
};


