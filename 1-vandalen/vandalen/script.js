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
        names += persArr[i].name;
        ages += persArr[i].age;
    }
    

   

    maxAge = ages.slice(-1);

    minAge = ages[0];

    ageTotal += ages[i]; //calculate total of ages

    avgAge = ageTotal / ages.length;
    // Din kod här...

    name = names.toString();
    age = ages.toString();

    resultString = name.split(",");

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
    name: "Mats Look",
    age: 46
}];
var result = makePerson(data);
console.log(result);
return result;
