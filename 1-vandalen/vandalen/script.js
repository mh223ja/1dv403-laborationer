"use strict";

var makePerson = function(persArr) {

    var name ="";
    var age = 0;
    var names = []; //variables as arrays
    var ages = [];
    var ageTotal = 0;
    var maxAge;
    var minAge;
    var avgAge;
    var nameString ="";
    var resultString ="";
    
    

    for (var i = 0; i < persArr.length; i++) { 
    //set arrays for name and age
        names [i] = persArr[i].name; 
        ages [i] = persArr[i].age;
        ageTotal += ages[i];
      
    }
    
    ages.sort();

    maxAge = ages[ages.length -1 ];

    minAge = ages[ 0 ];

    avgAge = Math.round(ageTotal / ages.length);
   

    name = names.toString();
   

    resultString = name.split(",").join(", ");

    return {
        minAge: minAge,
        maxAge: maxAge,
        avgAge: avgAge,
        resultString: resultString
    }
}



var data = [{
    name: "John Häggerud",
    age: 37
}, {
    name: "Johan Leitet",
    age: 36
}, {
    name: "Mats Loock",
    age: 46
}];
var result = makePerson(data);
console.log(result);

