
document.write("<h3>The Fortune Teller</h3>")
var numberOfChildern = 5
var partner = "Joe"
var place = "Toronto"
var jobTitle = "lawyer"
document.write("You will be a " + jobTitle+ " in " + place + ", and married to " + partner + " with " + numberOfChildern + " kids.</br>")

document.write("<h3>The Age Calculator</h3>")
var currentYear = 2015
var birthYear = 1992
var age = (currentYear - birthYear)
document.write("You are either " + (age -1) + " or " + age + ".</br>")

document.write("<h3>The Lifetime Supply Calculator</h3>")
var currentAge = 22
var maxAge = 100
var amountPerDay = 2
var total = (maxAge - currentAge) * (amountPerDay * 365)
document.write("You will need " + total + " to last you until the ripe old age of " + maxAge + ".</br>")

document.write("<h3>The Geometrizer</h3>")
var radius = 10
var circumference = ((radius * 2) * Math.PI).toFixed()
var area = (Math.PI * (radius * radius)).toFixed()
document.write("The circumference is " + circumference + ".</br>")
document.write("The area is " + area + ".</br>")

document.write("<h3>The Temperature Converter</h3>")
var celsius = 22
var celsiusToFahrenheit = ((celsius * 2) + 30)
var fahrenheit = 30
var fahrenheitToCelsius = ((fahrenheit - 32) * 5/9)
document.write(celsius + "°C is " + fahrenheit + "°F.</br>")
document.write(fahrenheit + "°F is " + celsius + "°C.</br>")