"use strict"

var MessageChange {

init:function()
{
    var mess = new Message("Testmessage", new Date());
    alert(mess);
    alert (mess.getText());
    mess.setText("My text")
    alert(mess);
}
}
window.onload = MessageChange.init;