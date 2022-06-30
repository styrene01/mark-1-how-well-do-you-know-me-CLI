var readlineSync = require("readline-sync");
var chalk = require("chalk");

var red = chalk.red;

var userName = readlineSync.question("Enter your name : ");
console.log(
    chalk.red.bold.underline(
        "Hello " + userName + "! Welcome to DO YOU KNOW HARSH?\n"
    )
);
console.log(
    chalk.blue.bold("This is a CLI app to see How well do you know Harsh!")
);
console.log(chalk.blue.bold("It has 10 questions which you need to answer.\n"));

var score = 0;

var questionsList = [
    {
        question: "Where do I live? ",
        answer: "mumbai"
    },
    {
        question: "What is my age? ",
        answer: "21"
    },
    {
        question: "What is my exact Birth Date? [Format = dd-mm-yyyy] ",
        answer: "07-02-2001"
    },
    {
        question: "What is my heightin foot? [format=Feet'inches] ",
        answer: "6'00"
    },
    {
        question: "Am I the tallest in my family? ",
        answer: "yes"
    },
    {
        question: "What is my favourite fictional movies? ",
        answer: "harry potter"
    },
    {
        question: "Do I watch anime? ",
        answer: "yes"
    },
    {
        question: "Do I watch Formula 1? ",
        answer: "yes"
    },
    {
        question:
            "What are mny hobbies?\na Reading\nb Watching movies\nc Watching Formula 1\nd All of them\n",
        answer: "d"
    },
    {
        question: "Have I seen Game of Thrones? ",
        answer: "no"
    }
];

function play(question, answer) {
    var userAnswer = readlineSync.question(question);

    if (userAnswer.toLowerCase() === answer) {
        console.log("You are correct!");
        score += 10;
    } else {
        console.log("I'm afraid you are wrong.");
    }
    console.log("Your current score is " + score + "\n");
}

for (var i = 0; i < questionsList.length; i++) {
    let currentQuestion = questionsList[i];
    play(currentQuestion.question, currentQuestion.answer);
}

console.log("Your total score is: " + score + "\n");

var highscores = ["Harsh: 100", "Vishal: 70"];
console.log("The current leaderboard is as follows: \n");

for (var i = 0; i < highscores.length; i++) {
    console.log(highscores[i]);
    console.log();
}

if (score >= 70) {
    console.log(
        chalk.yellow.bold(
            "Congratulations " +
                userName +
                "You really know Harsh and his likes.\nSend him a screenshot to update the leaderboard \n"
        )
    );
} else {
    console.log(
        chalk.pink.bold(
            "You couldn't beat the highscore, try and get to know Harsh better"
        )
    );
}

var twitter = console.log(
    chalk.bold.blue.underline("twitter: https://twitter.com/harshwaghela_")
);
