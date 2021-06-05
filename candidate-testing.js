const input = require('readline-sync');
// TODO 2: modify your quiz app to ask 5 questions //
// TODO 1.1a: Define candidateName //
let candidateName= "";
// TODO 1.2a: Define question,correctAnswer, and candidateAnswer //
let question= 'Who was the first American woman in space? ';
let questions = [
  'Who was the first American woman in space? ',
  'True or false: 5 kilometer == 5000 meters? ',
  '(5 + 3)/2 * 10 = ? ',
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  'What is the minimum crew size for the ISS? '
];
let correctAnswers = ['Sally Ride','true','40', 'Trajectory','3'];
let correctAnswer = 'Sally Ride';
let candidateAnswer='Your Answer: ';	
let candidateAnswers = [];	


function askForName() {
  candidateName= input.question("Your Name: ");
  console.log("\n");
}

function askQuestion() {
   for (let i = 0; i < questions.length; i++) {
   candidateAnswers[i] = input.question(questions[i] + '\n' + candidateAnswer);
   console.log("Correct Answer: " + correctAnswers[i]);
   console.log("\n");
 }

}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let grade = 0;
    for (let i = 0; i < questions.length; i++) {
      if (correctAnswers[i].toLowerCase() === candidateAnswers[i].toLowerCase()) {
       grade++;
     }
    }
  
  if (grade >= 4){
    console.log(`>>> Overall Grade: ${grade/questions.length * 100}% (${grade} of ${questions.length} responses correct) <<<`);
    
    console.log(">>> Status: PASSED <<<");

   } else {
    console.log(`>>> Overall Grade: ${grade/questions.length * 100}% (${grade} of ${questions.length} responses correct) <<<`);

    console.log(" >>> Status: FAILED <<< ");
   }
  grade = grade/questions.length * 100;
  return grade;
}

function runProgram() {
  askForName();
  askQuestion();
  gradeQuiz(this.candidateAnswers);  
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