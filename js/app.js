'use strict';

//----------Global Variables--------------------------------------------------------------------------

var score = 0;
var answerYes = 'Y' || 'YES';
var answerNo = 'N' || 'NO';
var wrongInput = ('Incorrect input detected.');
var ynInstruct = (' Please answer all questions using Y or N or Yes or No.');
var guessnumInstruct = ('Please only use numbers in your response.');

//----------Functions---------------------------------------------------------------------------------

//----------Yes No Game Function----------------------------------------------------------------------

function yesnoGame(inputAnswer, correctAnswer) {

  if (inputAnswer.toUpperCase() !== answerYes && inputAnswer.toUpperCase() !== answerNo) {
    prompt(wrongInput);
  }
  if (inputAnswer.toUpperCase() === correctAnswer){
    alert('Correct!!!');
    score++;
  }
  else if (inputAnswer.toUpperCase() !== correctAnswer){
    alert('Sorry, the correct answer was '+ correctAnswer + '.');
  }
  console.log('Correct Answer='+correctAnswer,'UserAnswer=' + inputAnswer);
  console.log('Current Score', score);
}

//----------Guess Number Game Function-----------------------------------------------------------------

function guessnumGame(questionText, correctNum, totAttempts) {

  while(totAttempts > 0) {
    var inputAnswer = prompt(questionText + ' ' + guessnumInstruct);
    if (parseInt(inputAnswer) === correctNum) {
      alert('Correct.');
      score++;
      break;
    } else if (inputAnswer < correctNum) {
      totAttempts--;
      alert('Guess Higher. You have '+ totAttempts+' guesses left');
    } else if (inputAnswer > correctNum) {
      totAttempts--;
      alert('Guess Lower. You have '+ totAttempts+' guesses left');
    }
  }
  if (totAttempts === 0) {
    alert('You Lose...');
  }
  console.log('Correct Number is' + correctNum,'UserAnswer='+ correctNum);
  console.log('Current Score', score);
}

//----------Guess Item Game Function--------------------------------------------------------------------

function guessitemGame(questionText, correctItem, totalAttempts) {

  var finish = false;
  for (var i = 0; i<=totalAttempts; i++) {
    var inputAnswer = prompt(questionText).toUpperCase();
    //alternate idea instead of lower for loop
    //  if (correctItem.indexOf(inputAnswer) !== -1) {

    // }

    for(var j=0; j< correctItem.length; j++) {
      if (correctItem[j] === inputAnswer) {
        alert('Correct');
        score++;
        finish = true;
        break;
      }
    }
    if (finish === false) {
      alert('Try Again. You have '+ (totalAttempts-i)+' guesses left');
    } else break;
  }
  if (totalAttempts === 0) {
    alert('Sorry I was hoping you would have said ' + correctItem);
  }

  console.log('Answer should be ' + correctItem, 'User Answer=' + inputAnswer);
  console.log('Total Possible Score = 7.', 'UserScore=' + score);
}

//----------Welcome Message---------------------------------------------------------------------------

alert('Hello!!! My name is Jason. You are about to guess who I am.');
console.log('Starting Score=0.', score);

//----------Questions---------------------------------------------------------------------------------

//----------Yes No Questions--------------------------------------------------------------------------

// -----Instructions for adding questions-----
//var questionX = prompt('Add yes or no question '+ ynInstruct);
//yesnoGame(questionX, "Add answerYes or answerNo here");

var questionOne = prompt('Was I born in WA? '+ ynInstruct);
yesnoGame(questionOne, answerNo);

var questionTwo = prompt('Am I over 30 years old? '+ ynInstruct);
yesnoGame(questionTwo, answerYes);

var questionThree = prompt('Do I own a Ford? '+ ynInstruct);
yesnoGame(questionThree, answerNo);

var questionFour = prompt('Do I own a banjo? '+ ynInstruct);
yesnoGame(questionFour, answerYes);

var questionFive = prompt('Do I know how to code? '+ ynInstruct);
yesnoGame(questionFive, answerNo);

//----------Guess Number Questions----------------------------------------------------------------------

// -----Instructions for adding questions-----
//var questionX = prompt('Some text that will ask the user to guess a number');
//guessnumGame(questionX, number that is being guessed, number of attempts);

var questionSix = ('What is my favorite number?');
guessnumGame(questionSix, 27, 4);


//----------Guess Item Game Questions----------------------------------------------------------------------

// -----Instructions for adding questions-----
//var questionX = prompt('Some text that will ask the user to guess an item from an array');
//guessitemGame(questionX, item or array of items being guessed, number of attempts);

var questionSeven = ('Guess a state I have lived in other than Washington. You can spell out the entire state name or use the abbreveation for the state. Hint: West of the Mississippi');
guessitemGame(questionSeven, ['California','CA','Colorado', 'CO'], 6);

//----------Final Score Alert-------------------------------------------------------------------------------

if (score <= 4) {
  alert('Please try harder your score is ' + score + ' out of 7.');
} else alert('Congratulations your score is ' + score + ' out of 7.');