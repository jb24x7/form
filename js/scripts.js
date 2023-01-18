// User Interface Logic
// let form = document.querySelector("form");

// function handleForm(event) {
//   event.preventDefault();
//   const userSelections = document.querySelectorAll("input[name=transportation-option]:checked");
//   const userSelectionsArray = Array.from(userSelections);

//   userSelectionsArray.forEach(function(element) {
//     const sortedArray = userSelectionsArray.sort((a, b) => 
//     a.value.localeCompare(b.value));
    // const li = document.createElement("li");
    // li.append(element.value);
    // document.querySelector("ul").append(li);
//   });

  
// }

// window.addEventListener("load", function() {
//   document.querySelector("form#transportation_survey").addEventListener("submit", handleForm);
// });
//deck builder

// let deckList = document.getElementById("deck");
// let suitsArray = [" of clubs", " of hearts", " of diamonds", " of spades"];

// suitsArray.forEach(function() {

// })

var deck = [];
var suits = ["diamonds", "spades", "hearts", "clubs"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];


window.onload = function() {

  suits.forEach(function(suit) {
    values.forEach(function(value) {
      deck.push(`${value} of ${suit}`);
    });
    
  });

  deck.forEach(function(element) {
    const li = document.createElement("li");
    li.append(element);
    document.getElementById("deckList").append(li);
  })
}

  console.log(deck);

// deck.forEach(function(element) {
//   const li = document.createElement("li");
//   li.append(element.value);
//   document.querySelector("ul").append(li);
// })