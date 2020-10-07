console.log("scripts.js loaded!");

//--------------------------Variable Declarations-----------------------//
const category_ids = {
  "upper": ['ones', 'twos', 'threes', 'fours', 'fives', 'sixes'],
  "lower": ["3-of-a-kind", "4-of-a-kind", "full-house", "small-straight", "large-straight", "yahtzee", "chance"]
}
const dice_elements = Array.from(document.getElementsByClassName("die"));
const dice_faces = ["one", "two", "three", "four", "five", "six"];


//--------------------------Add Event Listeners-----------------------//
document.getElementById("save-game-button").addEventListener('click', saveGame);
document.getElementById("load-game-button").addEventListener('click', loadGame);
document.getElementById("new-game-button").addEventListener('click', newGame);
document.getElementById("roll-dice-button").addEventListener('click', rollTheDice);

for (let die of dice_elements) {
  die.addEventListener('dblclick', reserveDie);
}

//Add an 'enter' event listener for each input element to signal when a turn is over



//--------------------------Gameplay Logic-----------------------//








//------------------------Helper Functions---------------------//

/**
 * Disables input for a completed category.
 * Changes the style of the category to indicate that the category is taken
 *
 * @param {String} id The id of the category
 */
function disableCategory(id) {

}

/**
 * Calculates all total scores by adding up all cateogries
 *
 */
function updatesTotals() {

}

/**
 * Resets all dice pictures to blank
 *
 */
function resetDice() {

}

/**
 * Converts dice pictures to numerical values
 *
 * @return {Array} An array of five numerical values correspinding
 *                 to the dice face, -1 for blank dice
 */
function diceToArray() {
  let dice_values = [-1, -1, -1, -1, -1];

  return dice_values;
}

/**
 * Determines whether a score is valid for a particular category
 *
 * @param {String} id The id of the category
 * @param {Number} score A potential score to validate for the category
 * @return {Boolean} true for a valid score, false for an invalid score
 */
function scoreValidation(id, score) {
  let isValid = false;

  return isValid;
}

/**
 * Updates #user-feedback with an appropriate message and style.
 * If both msg and type are blank, #user-feedback becomes hidden
 *
 * @param {String} msg The message to display for the user
 * @param {String} type A context (ie. "good"/"bad"/"info") for the feedback
 */
function provideFeedback(msg, type) {

}

//----------------------Event Listener Procedures-------------------//

/**
 * Performs all necessary actions to roll and update display of dice
 *
 */
function rollTheDice() {
  /* To-Do */
}

/**
 * Performs all necessary actions to save the current state of the game
 * in localStorage
 *
 */
function saveGame() {
  /* To-Do */
}

/**
 * Performs all necessary actions to load the indicated game
 * from localStorage
 *
 */
function loadGame() {
  /* To-Do */
}

/**
 * Restarts the game
 *
 */
function newGame() {
  /* To-Do */
}

/**
 * Toggles class identifier from .reserved to .unreserved
 *
 * 1) Figure out how to interact with the event object that triggered the call of reserveDie()
 * 2) Output the #id of the element that registered the double-click
 * 3) Grab the element that registered the event
 * 4) Toggle the class identifier between .reserved and .unreserved (adds outline on .reserved dice)
 *
 */
function reserveDie() {
  console.log("A die has been double-clicked");

}
