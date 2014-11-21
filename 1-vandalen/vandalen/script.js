"use strict";

var makePerson = function(persArr) {

    var name ="";
    var age = 0;
    var nameArray = []; //variables as arrays
    var ages = [];
    var ageTotal = 0;
    var maxAge;
    var minAge;
    var averageAge;
    var nameString ="";
    var names ="";
    
    

    for (var i = 0; i < persArr.length; i++) { 
    //set arrays for name and age
        nameArray [i] = persArr[i].name; 
        ages [i] = persArr[i].age;
        ageTotal += ages[i];
      
    }
    
    ages.sort();

    maxAge = ages[ages.length -1 ];

    minAge = ages[ 0 ];

    averageAge = Math.round(ageTotal / ages.length);
   
   nameArray.sort(function(a,b)
   {
       return a.localeCompare(b, 'sv');
   });

    name = nameArray.toString();
   

    names = name.split(",").join(", ");

    return {
        minAge: minAge,
        maxAge: maxAge,
        averageAge: averageAge,
        names: names
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
<<<<<<< HEAD

=======
>>>>>>> 02c4618dae4e62e6afd65c1d8c891a7e92b27bdd
