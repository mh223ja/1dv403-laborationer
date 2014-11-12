"use strict";

var makePerson = function(persArr){

var name = "";
var age = 0;
var names = []; //variables as arrays
var ages = [];
var ageTotal = 0;
var maxAge;
var minAge;
var avgAge;

var data = [{name: "John Häggerud", age: 37},{name: "Johan Leitet", age:36},{name: "Mats Look", age: 46}];

for (var i = 0; i <= persArr.length; i++) { //set arrays for name and age
    names[i] = persArr[i].name;
    ages[i] = persArr[i].age; 
     }
     
    ages[i].sort();

  maxAge = persArr[persArr.slice (-1)];

  minAge = ages[0];

  ageTotal += ages[i]; //calculate total of ages

  avgAge = ageTotal / ages.length;
	// Din kod här...
	
}

