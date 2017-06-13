/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  var cards = hand;
  var total = 0;
  for (var i = 0; i < cards.length; i++) {
    if (cards[i] === 'J' || cards[i] === 'Q' || cards[i] === 'K') {
      cards[i] = 10;
    }
    if (cards[i] === 'A' && total === 8) {
      cards[i] = 1;
    } else if (cards[i] === 'A' && total <= 9) {
        cards[i] = 11;
    } else if (cards[i] === 'A' && total >= 10){
      cards[i] = 1;
    }
    cards[i] = +cards[i];
    total += cards[i];
  }
  console.log(total);

  return total;
}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
