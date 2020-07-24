var hello = "hello there!";

console.log(hello)

var myVariable = 100;

// Cannot multiply strings.

var mySentence = "hundred";

var total = 10 * mySentence;

//total holds a NaN value (not a number)

var userPurchaseTotal;

var purchaseTax = userPurchaseTotal * .085;

// The plus symbol is not doing addition but concatenation of two strings. JavaScript converts the number in purchaseTax to a string so it can concatenate.

var sentenceToWrite = "The user purchase tax is " + purchaseTax

var SentenceToWritePurchase = "The user purchased $" + userPurchaseTotal + "worth of stuff";

console.log (SentenceToWritePurchase);

console.log(sentenceToWrite);


