document.write("<h3>The Recipe Card</h3>");
var turkeyTacos = {
	title: "Turkey Tacos",
	servings: 4,
	ingredients: ["Ground turkery", "Taco seasoning", "Corn tortillas", "Avocados", "Cheese"]
}
document.write(turkeyTacos.title + "</br>");
document.write("Serves: " + turkeyTacos.servings + "</br>");
document.write("Ingredients:</br>");
document.write(turkeyTacos.ingredients[0] + "</br>" + turkeyTacos.ingredients[1]  + "</br>" + turkeyTacos.ingredients[2] + "</br>" + turkeyTacos.ingredients[3] + "</br>" + turkeyTacos.ingredients[4]);

document.write("<h3>The Reading List</h3>");
var books = [
	{title: "Everything is Illuminated",
	 author: "Jonathan Safran Foer",
	 alreadyRead: true},

	{title: "The Hobbit",
	 author: "J.R.R. Tolkien",
	 alreadyRead: false},

	{title: "The Cell",
	 author: "Stephen King",
	 alreadyRead: true}
];

for (var count = 0; count < books.length; count++) {
	var book = books[count];
	if (book.alreadyRead === true) {
		document.write("You already read " + "'" + book.title + "'" + " by " + book.author + ".</br>");
	} else {
		document.write("You still need to read " + "'" + book.title + "'" + " by " + book.author + ".</br>");
	}
}

document.write("<h3>The Movie Database</h3>");
var favMovie = {
	title: "Back to The Future",
	duration: 116,
	stars: ["Michael J. Fox", " Christopher Lloyd", " Crispin Glover", " Lea Thompson"]
}

function printMovie(title, duration, stars){
	document.write(title + " lasts for " + duration + " minutes. Stars: " + stars + ".");
}

printMovie(favMovie.title, favMovie.duration, favMovie.stars);