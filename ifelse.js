document.write("<h3>What number's bigger?</h3>");
function greaterNum(a, b) {
	if (a > b) {
		document.write("The greater number of " + a + " and " + b + " is " + a + ".</br>");
	} else if (b > a) {
		document.write("The greater number of " + a + " and " + b + " is " + b + ".</br>");
	}else {
		document.write(a + " and " + b + " are equal.</br>");
	}
}

greaterNum(1, 4);
greaterNum(10, 6);
greaterNum(5, 5);

document.write("<h3>The World Translator</h3>");
function helloWorld(language){
	if (language === "es") {
		document.write("Hola Mundo!</br>");
	}else if (language === "ger") {
	   document.write("Hallo Welt!</br>");
	}else if (language === "it") {
	   document.write("Ciao Mondo!</br>");
	}else 
		document.write("Hello World!</br>");
}

helloWorld("es");
helloWorld("ger");
helloWorld("it");
helloWorld("default");

document.write("<h3>The Grade Assigner</h3>");
function assignGrade(grade){
	if (grade >= 90 ) {
   		document.write("You got an A!</br>");
	}else if (grade > 80 && grade < 89) {
	   document.write("You got a B!</br>");
	}else if (grade > 70 && grade < 79) {
	   document.write("You got a C!</br>");
	}else { (grade > 60 && grade < 69)
		document.write("You got a D!</br>");
	}
}

assignGrade(91);
assignGrade(84);
assignGrade(72);
assignGrade(64);

document.write("<h3>The Pluralizer</h3>")
function pluralize(noun, num){
	if (num > 1) {
		document.write(num + " " + noun + "s</br>");
	} else 
		document.write(num + " " + noun + "</br>");
}
 pluralize("dog", 5);
 pluralize("cat", 1);
 
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".