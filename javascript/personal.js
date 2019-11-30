//Matching card heights function

var personalCards = document.getElementsByClassName("personal-cards");

const matchHeights = () => {
  let tallest = 0;
  for (let i = 0; i < personalCards.length; i++) {
    let cardsArray = personalCards[i].offsetHeight;
    if (cardsArray > tallest) {
      tallest = cardsArray;
    }
    personalCards[i].style.height = tallest + "px";
  }
};
matchHeights();

// Tooltips Initialization
$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});
