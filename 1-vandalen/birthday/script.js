"use strict";

window.onload = function(){

	
	var birthday = function(date){
		
		var dateOfBirth = new Date(date);
		var todaysDate = new Date();
		var oneDay = 24*60*60*1000;
		var daysLeft;
		
		if (isNaN(dateOfBirth)){
			throw new Error("FEL! Du måste skriva datum på rätt format") //if not right format, throw exception
		}
		
		if (todaysDate.getTime() < dateOfBirth.getTime()){ //compares dates
			dateOfBirth.setFullYear(todaysDate.getFullYear()); //puts birthday into current year
			//calculates days left by subtracting and dividing by miliseconds to calculate number of daye
		}
		
		if (todaysDate > dateOfBirth){ //birthday has already past
		        dateOfBirth.setFullYear(todaysDate.getFullYear()+1); //calculates until birthday in 2015
		         
		}
		
	    daysLeft = Math.floor((dateOfBirth - todaysDate) / (oneDay));
		if (daysLeft === 0){
                       console.log("Happy Birthday!")
			
		}
		return daysLeft;
	

			// Din kod här.

	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};