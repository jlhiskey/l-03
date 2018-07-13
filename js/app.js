'use strict';

//----------Welcome Message---------------------------------------------------------------------------

alert('Hello!!! My name is Jason. You are about to guess who I am.');
console.log('Starting Score=0.', score);

//----------Global Variables--------------------------------------------------------------------------

var score = 0;
var answerYes = 'Y' || 'YES';
var answerNo = 'N' || 'NO';
var wrongInput = ('Incorrect input detected.');
var ynInstruct = ('Please answer all questions using Y or N or Yes or No');
var guessnumInstruct = ('Please only use numbers in your response');

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
}

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

//----------Guess Number Game Function-----------------------------------------------------------------

function guessnumGame(inputAnswer, correctNum, totAttempts) {

  while(totAttempts > 0) {

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
  console.log('Correct Number is' + correctNum, correctNum);
  console.log('Total Possible Score = 6.', score);
}

//----------Guess Number Questions----------------------------------------------------------------------

// -----Instructions for adding questions-----
//var questionX = prompt('Some text that will ask the user to guess a number'+ guessnumInstruct);
//guessnumGame(questionX, number that is being guessed, number of attempts);

var questionSix = prompt('What is my favorite number '+ guessnumInstruct);
guessnumGame(questionSix, 27, 4);

//----------Guess Item Game Function--------------------------------------------------------------------

function guessitemGame(inputAnswer, correctItem, totalAttempts) {

  var finish = false;
  for (var i = 0; i<totalAttempts+1; i++) {

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

  console.log('Answer should be ' + correctItem, correctItem);
  console.log('Total Possible Score = 7.', score);
}

//----------Guess Item Game Questions----------------------------------------------------------------------

// -----Instructions for adding questions-----
//var questionX = prompt('Some text that will ask the user to guess an item from an array');
//guessitemGame(questionX, item or array of items being guessed, number of attempts);

var questionSeven = prompt('Guess a state I have lived in other than Washington. You can spell out the entire state name or use the abbreveation for the state. Hint: West of the Mississippi').toUpperCase();
guessitemGame(questionSeven, ['California','CA','Colorado', 'CO'], 6);

//----------Final Score-------------------------------------------------------------------------------------

if (score <= 4) {
  alert('Please try harder your score is ' + score + ' out of 7.');
} else alert('Congratulations your score is ' + score + ' out of 7.');