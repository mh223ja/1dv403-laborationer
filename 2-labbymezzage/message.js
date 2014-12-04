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
    
  var todaysDate = this.getDate();
   var hours = todaysDate.getHours();
   var minutes = todaysDate.getMinutes();
   var seconds = todaysDate.getSeconds();
   var month = todaysDate.getMonth();
   var year = todaysDate.getFullYear();
   var day = todaysDate.getDay();
   
   
   if (hours<10) {
       hours = "0" + hours;
   }
   
   if (minutes < 10){
       minutes = "0" + minutes;
   }
   
   if (seconds <10) {
       seconds = "0" + seconds;
   }
   
   if (month <10){
       month = "0" + month;
   }
   
   if (day < 10){
       day = "0" + day;
   }
   return hours + ":" +  minutes + ":" + seconds + " " + day + "/" + month + "/" + year;
   
};



