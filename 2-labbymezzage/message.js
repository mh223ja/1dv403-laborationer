"strict use";

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
    return this.getText() + " (" + this.getDate() + ")";
};




var mess = new Message("Text", new Date());
alert (mess);
console.log(mess);
alert(mess.getText());
mess.setText("new text");
console.log(mess);
alert(mess);
