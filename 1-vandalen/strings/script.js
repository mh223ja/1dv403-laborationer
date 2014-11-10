"use strict";

window.onload = function() {

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str) {
		// Plats för förändring.		
		// Returnera den konverterade strängen.
		// Vid fel, kasta ett undantag med ett meddelande till användaren. 
		if (str === "") {
			var errorMessage = "FEL! DU MÅSTE SKRIVA NÅGOT"
			return errorMessage;
		}

		else {

			var newStr = "";

			{
				for (var i = 0; i <= str.length; i++) {
					var strLine = str.charAt(i);

					if (strLine == strLine.toLowerCase()) { //trying to make lower case upper 
						strLine = strLine.toUpperCase();
						newStr += strLine;
					}
					else if (strLine == strLine.toUpperCase()) { //make uppercase, lower
						strLine = strLine.toLowerCase();
						newStr += strLine;
					}
					newStr = newStr.replace(/[Aa]/g, "#");
				}
				return newStr;
			}
		}
	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e) {
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove("error");

		try {
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer; // Skriver ut texten från arrayen som skapats i funktionen.	
		}
		catch (error) {
			p.classList.add("error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}

	});
};