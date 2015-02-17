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

function calcCircumfrence(radius) {
	document.write("The circumference is " + ((radius * 2) * Math.PI) + ".</br>")
}
function calcArea(radius) {
	document.write("The area is " + (Math.PI * (radius * radius)) + ".</br>")
}

calcCircumfrence(10);
calcArea(10);

document.write("<h3>The Temperature Converter</h3>")
function celsiusToFahrenheit(celsius) {
	var fahrenheit = ((celsius * 2) + 30)
	document.write(celsius + "°C is " + fahrenheit + "°F.</br>")
}

celsiusToFahrenheit(10);

function fahrenheitToCelsius(fahrenheit) {
	var celsius = ((fahrenheit - 32) * 5/9)
	document.write(fahrenheit + "°F is " + celsius + "°C.</br>")
}

fahrenheitToCelsius(50);
