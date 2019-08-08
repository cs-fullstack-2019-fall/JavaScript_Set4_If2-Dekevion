// exercise 10
var card1 = parseInt(prompt("Select a card."));
var card2 = parseInt(prompt("Select a card."));
var card3 = parseInt(prompt("Select a card."));
if (card1 + card2 + card3 > 21) {
    alert("Bust!");
} else if (card1 + card2 + card3 < 21) {
    alert("Print the sum total is : " + (card1 + card2 + card3));
}

//exercise 11
var grade = parseInt(prompt("Enter your grade"));
if (grade >= 90 || grade === 100) {
    alert("A");
} else if (grade >= 80 || grade === 89){
    alert("B");
} else if (grade >= 70 || grade === 79) {
    alert("C");
} else if (grade >= 60 || grade === 69) {
    alert("D");
}else if (grade <= 59) {
    alert("F");
}
//exercise 12
var age = parseInt(prompt("What is your age?"));
if (age < 0 || age < 125) {
    alert("Real Age");
} else if (age > 0 || age > 125) {
    alert("Not a real age");
}