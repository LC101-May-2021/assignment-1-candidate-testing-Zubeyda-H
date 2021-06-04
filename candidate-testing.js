const input = require('readline-sync');
// TODO 2: modify your quiz app to ask 5 questions //
// TODO 1.1a: Define candidateName //
let candidateName= "";
// TODO 1.2a: Define question,correctAnswer, and candidateAnswer //
let question= "Candidate Name:";
//let correctAnswer="CorrectAnswer";
let candidateAnswer="Your Answer";
//let questions;
//let correctAnswers;
//let candidateAnswers;

let numberofCorrectAnswers = 0;
let questions = [
  '1) Who was the first American woman in space?',
  '2) True or false: 5000 meters = 5 kilometers.',
  '3) (5 + 3)/2 * 10 = ?',
  '4) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?',
  '5) What is the minimum crew size for the International Space Station (ISS)?'
];
let correctAnswers = ['sally ride','true', '40', 'trajectory', '3'];

let numberofQuizQuestions=questions.length;
let correctAnswer = 'Correct Answer: ';
let yourAnswer='Your Answer: ';	
let candidateAnswers = [];	

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName= input.question(question);
  console.log("Hello,",candidateName);
  console.log("\n");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  
  for (let i = 0; i < questions.length; i++) {
   candidateAnswers[i] = input
    .question(questions[i] + '\n' + yourAnswer).toLowerCase();
    console.log('Correct Answer: ' + correctAnswers[i]);
     if (correctAnswers[i] === candidateAnswers[i]) {
       numberofCorrectAnswers++;
     }
     console.log("\n");
 }

}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  //let grade;

  //return grade;
}

function runProgram() {
  askForName();
  askQuestion();
  gradeQuiz(this.candidateAnswers);
  
  let grade = (numberofCorrectAnswers) / (numberofQuizQuestions) * 100;//
  if (numberofCorrectAnswers >= 4){
    console.log(`>>> Overall Grade: ${grade}% (${numberofCorrectAnswers} of ${numberofQuizQuestions} responses correct) <<<`);
    
    console.log(">>> Status: PASSED <<<");

  } else {
   console.log(`>>> Overall Grade: ${grade}% (${numberofCorrectAnswers} of ${numberofQuizQuestions} responses correct) <<<`);

   console.log(" >>> Status: FAILED <<< ");

  }
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
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};