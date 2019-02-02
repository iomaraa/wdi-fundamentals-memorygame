

var cards = ['queen', 'queen','king', 'king'];
		
var cardsInPlay = [];
var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
	} else {
	console.log("Sorry, try again.");
	}
}
var flipCard = function (cardId) {
	console.log("User Flipped " + cards[cardId]);
	cardsInPlay.push(cardId);
}	
flipCard(0);
flipCard(2);

	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) { alert("You Found a Match!!!")}
			else (alert("Sorry, try again."))
	}



		