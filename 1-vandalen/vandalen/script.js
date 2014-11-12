"use strict";

var makePerson = function(persArr){

var name = "";
var age = 0;
var names = []; //variables as arrays
var ages = [];
var ageTotal = 0;

var data = [{name: "John Häggerud", age: 37},{name: "Johan Leitet", age:36},{name: "Mats Look", age: 46}];

for (var i = 0; i <= persArr.length; i++) { //set arrays for name and age
    names[i] = persArr[i].name;
    ages[i] = persArr[i].age; 
}

var maxAge = Math.max(ages[i]);

var minAge = Math.min(ages[i]);

ageTotal += ages[i]; //calculate total of ages

var avgAge = ageTotal / ages.length;
	// Din kod här...
	
}

