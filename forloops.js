document.write("<h3>The even/odd reporter</h3>");
var count;
for (count = 0; count < 21; count++) {
	if (count % 2 == 0) {
		document.write(count + " is even" + "</br>");
	} else {
		document.write(count + " is odd" + "</br>");
	}
}

document.write("<h3>Multiplication Tables</h3>");
var num;
for (num = 0; num < 11; num++) {
	document.write(num + " * 9 = " + (num * 9) + "</br>");
}

document.write("<h4>Bonus - Nested Loop</h4>");
for (a = 1; a <= 10; a++) {
	for (b = 1; b <= 10; b++) {
		document.write(a + " * " + b + " = " + (a * b) + "</br>");
	}
}

document.write("<h3>The Grade Assigner</h3>");
function assignGrade(grade){
	if (grade >= 90 ) {
   		return "you got an A!"
	} else if (grade >= 80 && grade <= 89) {
	   return "you got a B!"
	} else if (grade >= 70 && grade <= 79) {
	   return "you got a C!"
	} else { (grade >= 60 && grade <= 69)
		return "you got a D!"
	}
}

for (var score = 60; score < 101; score++){
    document.write("For " + score + ", " + assignGrade(score) + "<br>");  
}