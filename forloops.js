document.write("<h3>The even/odd reporter</h3>")
var count;
for (count = 0; count < 21; count++) {
	if (count % 2 == 0) {
		document.write(count + " is even" + "</br>")
	} else {
		document.write(count + " is odd" + "</br>")
	}
}

document.write("<h3>Multiplication Tables</h3>")
var num;
for (num = 0; num < 11; num++) {
	document.write(num + " * 9 = " + (num * 9) + "</br>")
}
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

document.write("<h3>The Grade Assigner</h3>")

function assignGrade(grade){
	if (grade >= 90 ) {
   		document.write("You got an A!</br>");
	}else if (grade > 80 && grade < 89) {
	   document.write("You got an B!</br>");
	}else if (grade > 70 && grade < 79) {
	   document.write("You got an C!</br>");
	}else { (grade > 60 && grade < 69)
		document.write("You got an D!</br>");
	}
}

assignGrade(91);
assignGrade(84);
assignGrade(72);
assignGrade(64);


