console.log("scripts.js loaded!");

//--------------------------Variable Declarations-----------------------//
const category_ids = {
  "upper": ['ones', 'twos', 'threes', 'fours', 'fives', 'sixes'],
  "lower": ["3-of-a-kind", "4-of-a-kind", "full-house", "small-straight", "large-straight", "yahtzee", "chance"]
}
const dice_elements = Array.from(document.getElementsByClassName("die"));
const dice_faces = ["one", "two", "three", "four", "five", "six"];

const scores = Array.from(document.getElementsByClassName("score"));

const rollcount = document.getElementById("rolls-remaining-content");

//--------------------------Add Event Listeners-----------------------//
document.getElementById("save-game-button").addEventListener('click', saveGame);
document.getElementById("load-game-button").addEventListener('click', loadGame);
document.getElementById("new-game-button").addEventListener('click', newGame);
document.getElementById("roll-dice-button").addEventListener('click', rollTheDice);
var uppertotal=0;
var upperbonus=0;
var lowertotal=0;


for (let die of dice_elements) {
  die.addEventListener('dblclick', function() {reserveDie(event.target.id)} );
}

for (let score of scores) {
  score.addEventListener('keyup', function() {scoreValidation(event.target.id, event.target.value)} );
}




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
  upperbonus=uppertotal;
  if(uppertotal>63){
    document.getElementById("upper-scorecard-bonus-score").innerHTML='35';
    upperbonus+=35;
  }
  document.getElementById("upper-scorecard-score").innerHTML=uppertotal;
  document.getElementById("upper-scorecard-total-score").innerHTML=upperbonus;
  document.getElementById("lower-scorecard-total-score").innerHTML=lowertotal;
  document.getElementById("bottom-upper-score-total").innerHTML=upperbonus;
  document.getElementById("grand-total").innerHTML=upperbonus+lowertotal;

}

/**
 * Resets all dice pictures to blank
 *
 */
function resetDice() {
  const dies = Array.from(document.getElementsByClassName("die"));
  for(let die of dies){
    die.setAttribute("src", "images/blank.svg");
  }
  const reserved_d = Array.from(document.getElementsByClassName("reserved"));
  for (let reserved of reserved_d) {
    reserved.classList.add("unreserved");
    reserved.classList.remove("reserved");
  }
}

function endTurn(){
  resetDice();
  updatesTotals();
  rollcount.innerHTML=3;
  //clear enabled text boxes
  var enabled = Array.from(document.getElementsByTagName("input"));
  for (i=0;i<enabled.length-1;i++) {
    if(enabled[i].disabled){
      
    }
    else{
      enabled[i].value='';
    }
  }

}

/**
 * Converts dice pictures to numerical values
 *
 * @return {Array} An array of five numerical values correspinding
 *                 to the dice face, -1 for blank dice
 */
function diceToArray() {
  let dice_values = [-1, -1, -1, -1, -1];
  const newdies = Array.from(document.getElementsByClassName("die"));

  for(let die of newdies){
    var id = die.getAttribute('id');
    id = id.replace('die-', '');
    var order = parseInt(id)

    var source = die.getAttribute('src');
    var type;
    source=source.replace('images/', '');
    source=source.replace('.svg', '');
    for(i=0; i<dice_faces.length; i++){
      if(dice_faces[i]==source){
        type=i+1;
      }
    }
    
    dice_values[order] = type;
  }
  return(dice_values);
}

/**
 * Determines whether a score is valid for a particular category
 *
 * @param {String} id The id of the category
 * @param {Number} score A potential score to validate for the category
 * @return {Boolean} true for a valid score, false for an invalid score
 */
function scoreValidation(id, score) {
  if(event.keyCode===13){
    let isValid = false;
    var type;
    var dicearr = diceToArray();
    var count=0;
    var face;

    //upper section
    score=parseInt(score); //user input
    face=id.replace('s-score-value', ''); //type of score
      for(i=0; i<dice_faces.length; i++){
        if(dice_faces[i]==face){
          type=i+1;
        }
      }   
    count=0; //real score value
    for(i=0; i<6; i++){
      if(dicearr[i]==type){
        count++;
      }
    }
    if(count*type==score){ //real score = user input
        isValid=true;
        uppertotal = uppertotal + score;
    }

    //lower section

    //3 of a kind
    if(id=="3-of-a-kind-score-value"){
      var dices = diceToArray();
      var count = [0,0,0,0,0,0]
      var threetot = 0;
      for(i=0;i<5;i++){
        var place=dices[i];
        threetot+=place;
        count[place-1]++;
      }
      if(count.includes(3)){
        if(score==threetot){
          isValid=true;
          lowertotal+=score
        } //score
      } //includes
    } //3 of a kind

    //4 of a kind
    if(id=="4-of-a-kind-score-value"){
      var dices = diceToArray();
      var count = [0,0,0,0,0,0]
      var fourtot = 0;
      for(i=0;i<5;i++){
        var place=dices[i];
        fourtot+=place;
        count[place-1]++;
      }
      if(count.includes(4)){
        if(score==fourtot){
          isValid=true;
          lowertotal+=score
        } //score
      } //includes
    } //3 of a kind

    //full house
    if(id=="full-house-score-value"){
      var dices = diceToArray();
      var count = [0,0,0,0,0,0]
      for(i=0;i<5;i++){
        var place=dices[i];
        count[place-1]++;
      }
      if(count.includes(3)&&count.includes(2)){
        if(score==25){
          isValid=true;
          lowertotal+=score
        } //score
      } //includes
    } //full house

    //small straight
    if(id=="small-straight-score-value"){
      var dices = diceToArray();
      var count = [0,0,0,0,0,0]
      for(i=0;i<5;i++){
        var place=dices[i];
        count[place-1]++;
      }
      count=count.filter(checkOnes)
      if(count.length>=4){
        if(score==30){
          isValid=true;
          lowertotal+=score
        } //score
      } //count
    } //small straight

    //large straight 
    if(id=="large-straight-score-value"){
      var dices = diceToArray();
      var count = [0,0,0,0,0,0]
      for(i=0;i<5;i++){
        var place=dices[i];
        count[place-1]++;
      }
      count=count.filter(checkOnes)
      console.log(count);
      if(count.length==5){
        if(score==40){
          isValid=true;
          lowertotal+=score
        } //score
      } //count
    } //large straight

    //Yahtzee
    if(id=="yahtzee-score-value"){
      var dices = diceToArray();
      var count = [0,0,0,0,0,0]
      for(i=0;i<5;i++){
        var place=dices[i];
        count[place-1]++;
      }
      if(count.includes(5)){
        if(score==50){
          isValid=true;
          lowertotal+=score
        } //score
      } //includes
    } //Yahtzee

     if(id=="chance-score-value"){
      var dices = diceToArray();
      var dicetotal = dices.reduce((a, b) => a + b, 0)
      if(score==dicetotal){
        isValid=true;
        lowertotal+=score
      } //score
    } //chance

    //feedback if score is valid or not
    if(isValid==true){
      //turn text to green, provide feedback, and end the turn
      document.getElementById(id).disabled = true;
      document.getElementById(id).style.color = "green";
      endTurn();
    }
    else{
      //turn text to red
      document.getElementById(id).style.color = "red";
    }
    return isValid;
  } //keycode
} //function

function checkOnes(count){
  return count >= 1;
}
 
function validateUpper(id){
  
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
  const unreserved_d = Array.from(document.getElementsByClassName("unreserved"));
  if(rollcount.innerHTML==0){
    provideFeedback("all rolls used!", str);
  }
  else{
    for (let unreserved of unreserved_d) {
      var val = Math.floor(Math.random() * (5) );

      var str =  dice_faces[val] 
      str = "images/" + str + ".svg"
      unreserved.setAttribute("src", str);

    }
    rollcount.innerHTML=rollcount.innerHTML-1;
  }

  diceToArray();
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
function reserveDie(diename) {
  var diestate = document.getElementById(diename);
  if(diestate.className=="unreserved" || diestate.className=="die unreserved"){
    diestate.classList.add("reserved");
    diestate.classList.remove("unreserved");
  }
  else{
    diestate.classList.remove("reserved");
    diestate.classList.add("unreserved");
  }
}

