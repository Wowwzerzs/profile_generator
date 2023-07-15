const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Object to store the user's answers
const answers = {};

// Array of questions
const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite ? (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

// Function to ask a question and get the user's answer
const askQuestion = (index) => {
  rl.question(questions[index], (answer) => {
    answers[index] = answer;

    // Move to the next question or generate the profile if all questions are answered
    if (index < questions.length - 1) {
      askQuestion(index + 1);
    } else {
      rl.close();
      generateProfile(answers);
    }
  });
};

// Function to generate the profile based on the user's answers
const generateProfile = (profile) => {
  const name = profile[0];
  const activity = profile[1];
  const music = profile[2];
  const meal = profile[3];
  const food = profile[4];
  const sport = profile[5];
  const superpower = profile[6];

  const paragraph = `Meet ${name}! They enjoy ${activity}, while listening to ${music}. Their favorite meal is ${meal}, and they love to eat ${food} during that time. ${name}'s absolute favorite sport is ${sport}, and they have a superpower: ${superpower}.`;

  console.log("\n--- Profile ---");
  console.log(paragraph);
  console.log("---------------\n");
};

// Start the question-asking process
askQuestion(0);
