const input = require('readline-sync');
// TODO 2: modify your quiz app to ask 5 questions //
// TODO 1.1a: Define candidateName //
let candidateName= "";
// TODO 1.2a: Define question,correctAnswer, and candidateAnswer //
let question= 'Who was the first American woman in space? ';
//let correctAnswer="CorrectAnswer";
//let candidateAnswer;
//let questions;
//let correctAnswers;
//let candidateAnswers;
let questions = [
  'Who was the first American woman in space? ',
  'True or false: 5 kilometer == 5000 meters? ',
  '(5 + 3)/2 * 10 = ? ',
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  'What is the minimum crew size for the ISS? '
];
let correctAnswers = ['Sally Ride','true', '40', 'Trajectory', '3'];
let numberofQuizQuestions=questions.length;
let correctAnswer = 'Sally Ride';
let yourAnswer='Your Answer: ';	
let candidateAnswer = [];	
let numberofCorrectAnswers = 0;
let result;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName= input.question("Your Name: ");
  console.log("Hello,",candidateName);
  console.log("\n");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  
  for (let i = 0; i < questions.length; i++) {
   //candidateAnswer[i] = input.question(questions[i] + '\n' + yourAnswer).toLowerCase();
   candidateAnswer[i] = input.question(questions[i] + '\n' + yourAnswer);
   console.log("Correct Answer: " + correctAnswers[i]);
     if (correctAnswers[i].toLowerCase() === candidateAnswer[i].toLowerCase()) {
       numberofCorrectAnswers++;
     }
     console.log("\n");
 }

}

function gradeQuiz() {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let grade = numberofCorrectAnswers / numberofQuizQuestions;
      result = grade * 100;
  if (numberofCorrectAnswers >= 4){
    console.log(`>>> Overall Grade: ${result}% (${numberofCorrectAnswers} of ${numberofQuizQuestions} responses correct) <<<`);
    
    console.log(">>> Status: PASSED <<<");

   } else {
    console.log(`>>> Overall Grade: ${result}% (${numberofCorrectAnswers} of ${numberofQuizQuestions} responses correct) <<<`);

    console.log(" >>> Status: FAILED <<< ");
   }
  return result;
}

function runProgram() {
  askForName();
  askQuestion();
  gradeQuiz();  
}

//Part 2: Multiple Questions

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  //candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
}