  //variables
  var randomNumber;
  var gem1 = {name: "gem1", value: 0};
  var gem2 = {name: "gem2", value: 0};
  var gem3 = {name: "gem3", value: 0};
  var gem4 = {name: "gem4", value: 0};
  var gems = [gem1, gem2, gem3, gem4]
  var total = 0;
$(document).ready(function() {


  //sets random gem numbers
  setGame();

  $(".card").on("click", function(e) {
    

    gems.forEach( function(gem) {
        if (gem.name === e.currentTarget.id) {
            total += gem.value;
        }
    });
    $("#score").text(total);
  });
});

var setGame = function() {
  randomNumber = createFromRandomNumberFromTo(19, 120);
  gem1.value = createFromRandomNumberFromTo(1, 12);
  gem2.value = createFromRandomNumberFromTo(1, 12);
  gem3.value = createFromRandomNumberFromTo(1, 12);
  gem4.value = createFromRandomNumberFromTo(1, 12);
  //sets random number to display
  $("#randomNumber").text(randomNumber);
};

var createFromRandomNumberFromTo = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
