document.write("<h3>The Fortune Teller</h3>")
function tellFortune(num_of_children, partner, place, job_title){
	document.write("You will be a " + job_title + " in " + place + ", and married to " + partner + " with " + num_of_children + " kids.</br>")
}

tellFortune(4, "Bob", "Toronto", "pilot");
tellFortune(10, "Jack", "Hawaii", "gardener");
tellFortune(2, "Maggie", "Delaware", "engineer");

document.write("<h3>The Age Calculator</h3>")
function calculateAge(birth_year){
	var date = new Date 
	var year = date.getFullYear();
	document.write("You are either " + ((year - birth_year) -1 ) + " or " + (year - birth_year) + ".</br>")
}

calculateAge(1992);
calculateAge(1982);
calculateAge(1964);

document.write("<h3>The Lifetime Supply Calculator</h3>")

function calculateSupply(age, amount_per_day){
	var maxAge = 100
	document.write("You will need " + ((maxAge - age) * amount_per_day.toFixed()) + " to last you until the ripe old age of " + maxAge + ".</br>")
}

calculateSupply(22, 5);
calculateSupply(10, 4);
calculateSupply(59, 1.5);

document.write("<h3>The Geometrizer</h3>")

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."